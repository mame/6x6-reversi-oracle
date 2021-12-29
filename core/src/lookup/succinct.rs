use std::convert::TryInto;

#[derive(Debug, Clone, Copy)]
struct Header {
    rank: u64,
    small_block_ranks: u64, /* 9 bits * 7 = 63 bits */
}

#[derive(Debug)]
pub struct SuccinctBitVector<'a> {
    data: &'a [u8],
    bits_len: usize,
    headers: Vec<Header>,
}

impl<'a> SuccinctBitVector<'a> {
    pub fn new(data: &'a [u8]) -> SuccinctBitVector<'a> {
        let bits_len = data.len() * 8;

        assert_eq!(0, bits_len % 512);

        let header = Header {
            rank: 0,
            small_block_ranks: 0,
        };
        let headers = vec![header; bits_len / 512];

        let mut ret = SuccinctBitVector {
            data,
            bits_len,
            headers,
        };
        ret.initialize();
        ret
    }

    fn initialize(&mut self) {
        let mut r1 = 0;
        for i in 0..(self.bits_len / 512) {
            let mut r2 = 0;
            let mut small_block_ranks = 0;
            for j in 0..8 {
                let n = self.get_u64(i * 8 + j);
                if j >= 1 {
                    small_block_ranks |= r2 << (9 * (j - 1))
                }
                r2 += n.count_ones() as u64;
            }
            self.headers[i].rank = r1;
            self.headers[i].small_block_ranks = small_block_ranks;
            r1 += r2;
        }
    }

    fn get_u64(&self, i: usize) -> u64 {
        u64::from_le_bytes(self.data[i * 8..i * 8 + 8].try_into().unwrap())
    }

    pub fn testbit(&self, i: u64) -> bool {
        self.get_u64(i as usize / 64) & (1 << (i % 64)) != 0
    }

    pub fn rank1(&self, i: u64) -> u64 {
        let header = &self.headers[i as usize / 512];
        let rank = header.rank;
        let small_block_index = i % 512 / 64;
        let small_rank;
        if small_block_index != 0 {
            small_rank = (header.small_block_ranks >> (9 * (small_block_index - 1))) & 0x1ff;
        } else {
            small_rank = 0;
        }
        let raw_rank = (self.get_u64(i as usize / 64) & ((1u64 << (i % 64)) - 1)).count_ones();
        rank + small_rank + raw_rank as u64
    }

    pub fn rank0(&self, i: u64) -> u64 {
        i - self.rank1(i)
    }

    pub fn select1(&self, i: u64) -> u64 {
        self.select_core(i, |v| self.rank1(v))
    }

    pub fn select0(&self, i: u64) -> u64 {
        self.select_core(i, |v| self.rank0(v))
    }

    fn select_core<F>(&self, i: u64, rank: F) -> u64
    where
        F: Fn(u64) -> u64,
    {
        let mut l = 0;
        let mut r = self.bits_len as u64 - 1;
        while l <= r {
            let m = l + (r - l) / 2;
            if rank(m) < i {
                l = m + 1
            } else {
                r = m - 1
            }
        }
        l
    }
}

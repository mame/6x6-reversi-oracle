use std::{cell::RefCell, convert::TryInto};

use super::bits::Bits;
use super::Bitboard;

struct Edge2X {
    idxs: [i32; 8],
    mask: Bits,
    max: u64,
    shift: u64,
    modulo: u64,
}

// These parameters are for perfect hashing of edge2x feature
// See also tool/edge2x-perfect-hash.rb
const EDGE2X: [Edge2X; 4] = [
    Edge2X {
        idxs: [7, 0, 1, 2, 3, 4, 5, 10],
        mask: Bits::new(0x0000004bfu64),
        max: 45703,
        shift: 46,
        modulo: 45705,
    },
    Edge2X {
        idxs: [10, 5, 11, 17, 23, 29, 35, 28],
        mask: Bits::new(0x830820c20u64),
        max: 99910,
        shift: 2,
        modulo: 100001,
    },
    Edge2X {
        idxs: [28, 35, 34, 33, 32, 31, 30, 25],
        mask: Bits::new(0xfd2000000u64),
        max: 56040,
        shift: 27,
        modulo: 56047,
    },
    Edge2X {
        idxs: [25, 30, 24, 18, 12, 6, 0, 7],
        mask: Bits::new(0x0430410c1u64),
        max: 64739,
        shift: 4,
        modulo: 65279,
    },
];

fn reverse_pattern(mut pat1: usize) -> usize {
    let mut pat2 = 0;
    for _ in 0..8 {
        pat2 = pat2 * 3 + pat1 % 3;
        pat1 /= 3;
    }
    pat2
}

fn pattern2bitboard(k: usize, mut pat: usize) -> Bitboard {
    let mut board = Bitboard::EMPTY_BOARD;
    for i in 0..8 {
        let idx = EDGE2X[k].idxs[i];
        match pat % 3 {
            0 => {}
            1 => board = board.put_disc(idx % Bitboard::SIZE, idx / Bitboard::SIZE, true),
            2 => board = board.put_disc(idx % Bitboard::SIZE, idx / Bitboard::SIZE, false),
            _ => {
                assert!(false)
            }
        }
        pat /= 3;
    }
    board
}

struct Edge2xIndex {
    idxs: [Vec<usize>; 4],
}

impl Edge2xIndex {
    fn new() -> Edge2xIndex {
        let mut idxs = vec![];

        for k in 0..4 {
            idxs.push(vec![0; EDGE2X[k].max as usize]);
        }

        let mut id = 0;
        for pat1 in 0..3usize.pow(8) {
            let pat2 = reverse_pattern(pat1);
            if pat1 <= pat2 {
                for k in 0..4 {
                    let board1 = pattern2bitboard(k, pat1);
                    let board2 = pattern2bitboard(k, pat2);
                    let mask = EDGE2X[k].mask;
                    let shift = EDGE2X[k].shift;
                    let modulo = EDGE2X[k].modulo;
                    idxs[k][board1.hash(mask, shift, modulo)] = id;
                    idxs[k][board2.hash(mask, shift, modulo)] = id;
                }
                id += 1;
            }
        }
        assert_eq!(3321, id);

        let idxs = idxs.try_into().ok().unwrap();
        Edge2xIndex { idxs }
    }

    fn lookup(&self, k: usize, board: Bitboard) -> usize {
        self.idxs[k][board.hash(EDGE2X[k].mask, EDGE2X[k].shift, EDGE2X[k].modulo) as usize]
    }
}

thread_local!(
    static TABLE: RefCell<Edge2xIndex> = RefCell::new(Edge2xIndex::new())
);

#[derive(Debug, Clone, Copy)]
pub struct Feature {
    pub edge2x: [usize; 4],
    pub mob: u32,        // mobility
    pub pmob_black: u32, // potential mobility of black
    pub pmob_white: u32, // potential mobility of white
}

impl Bitboard {
    pub fn hash(self, mask: Bits, shift: u64, modulo: u64) -> usize {
        (((self.black & mask).as_u64() + ((self.white & mask).as_u64() << shift)) % modulo) as usize
    }

    pub fn feature(self) -> Feature {
        let edge2x = TABLE.with(|table| {
            let table = table.borrow();
            [
                table.lookup(0, self),
                table.lookup(1, self),
                table.lookup(2, self),
                table.lookup(3, self),
            ]
        });
        let mob = self.count_mobility();
        let (pmob_black, pmob_white) = self.count_potential_mobility();

        Feature {
            edge2x,
            mob,
            pmob_black,
            pmob_white,
        }
    }
}

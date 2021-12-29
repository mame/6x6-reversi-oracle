use super::Bitboard;
use std::fmt;
use std::ops::{BitAnd, BitOr, BitXor, Not, Shl, Shr};

#[inline]
pub const fn index(i: i32, j: i32) -> i32 {
    i + j * Bitboard::SIZE
}

#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub struct Bits(u64);

impl Not for Bits {
    type Output = Self;
    fn not(self) -> Self {
        Self(!self.0)
    }
}

impl BitAnd for Bits {
    type Output = Self;
    fn bitand(self, other: Self) -> Self {
        Self(self.0 & other.0)
    }
}

impl BitOr for Bits {
    type Output = Self;
    fn bitor(self, other: Self) -> Self {
        Self(self.0 | other.0)
    }
}

impl BitXor for Bits {
    type Output = Self;
    fn bitxor(self, other: Self) -> Self {
        Self(self.0 ^ other.0)
    }
}

impl Shl<i32> for Bits {
    type Output = Bits;
    fn shl(self, i: i32) -> Self {
        Bits(if i >= 0 {
            self.0 << i as u32
        } else {
            self.0 >> (-i) as u32
        })
    }
}

impl Shr<i32> for Bits {
    type Output = Bits;
    fn shr(self, i: i32) -> Self {
        Bits(if i >= 0 {
            self.0 >> i as u32
        } else {
            self.0 << (-i) as u32
        })
    }
}

impl fmt::Display for Bits {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:09X}", self.0)
    }
}

impl Bits {
    pub const fn new(n: u64) -> Bits {
        Bits(n)
    }

    pub fn count_ones(self) -> u32 {
        self.0.count_ones()
    }

    pub fn trailing_zeros(self) -> u32 {
        self.0.trailing_zeros()
    }

    pub const fn one_disc(i: i32, j: i32) -> Bits {
        Bits(1u64 << index(i, j))
    }

    pub fn bittest(self, i: i32) -> bool {
        ((self >> i).0 & 1) == 1
    }

    pub fn as_u64(self) -> u64 {
        self.0 as u64
    }

    pub const ZERO: Bits = Bits(0);
}

const fn calc_edge_masks() -> (Bits, Bits, Bits, Bits, Bits, Bits, Bits, Bits) {
    let size = Bitboard::SIZE;
    let all = (1u64 << (size * size)) - 1;
    let edge_n = (1u64 << size) - 1;
    let edge_s = edge_n << (size * (size - 1));

    let mut edge_w = 0u64;
    let mut i = 0;
    while i < Bitboard::SIZE {
        edge_w |= 1u64 << (i * size);
        i += 1;
    }

    let edge_e = edge_w << (size - 1);

    let edge_ns = edge_n | edge_s;
    let edge_we = edge_w | edge_e;
    let edge_nswe = edge_ns | edge_we;

    return (
        Bits::new(all),
        Bits::new(edge_n),
        Bits::new(edge_s),
        Bits::new(edge_w),
        Bits::new(edge_e),
        Bits::new(edge_ns),
        Bits::new(edge_we),
        Bits::new(edge_nswe),
    );
}

const MASKS: (Bits, Bits, Bits, Bits, Bits, Bits, Bits, Bits) = calc_edge_masks();

impl Bitboard {
    pub const ALL_MASK: Bits = MASKS.0;
    pub const EDGE_MASK_N: Bits = MASKS.1;
    pub const EDGE_MASK_S: Bits = MASKS.2;
    pub const EDGE_MASK_W: Bits = MASKS.3;
    pub const EDGE_MASK_E: Bits = MASKS.4;
    pub const EDGE_MASK_NS: Bits = MASKS.5;
    pub const EDGE_MASK_WE: Bits = MASKS.6;
    pub const EDGE_MASK_NSWE: Bits = MASKS.7;
}

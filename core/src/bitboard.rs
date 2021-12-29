pub mod bits;
pub mod display;
pub mod each;
pub mod feature;
pub mod flip;
pub mod init;
pub mod mobility;
pub mod normalize;
// 6x6 reversi bitboard

pub mod mv;

use crate::value::Value;
use bits::Bits;

#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub struct Bitboard {
    pub black: Bits,
    pub white: Bits,
}

impl Bitboard {
    pub const SIZE: i32 = 6;
    pub const SIZE2: usize = (Bitboard::SIZE * Bitboard::SIZE) as usize;

    pub fn put_disc(self, i: i32, j: i32, black: bool) -> Bitboard {
        if black {
            Bitboard {
                black: self.black | Bits::one_disc(i, j),
                white: self.white,
            }
        } else {
            Bitboard {
                black: self.black,
                white: self.white | Bits::one_disc(i, j),
            }
        }
    }

    pub fn get_disc(self, i: i32, j: i32) -> Option<bool> {
        let pos = Bits::one_disc(i, j);
        if self.black & pos != Bits::ZERO {
            return Some(true);
        }
        if self.white & pos != Bits::ZERO {
            return Some(false);
        }
        return None;
    }

    pub fn flip_discs(self, rev: Bits, pos: Bits) -> Bitboard {
        Bitboard {
            black: self.black ^ rev ^ pos,
            white: self.white ^ rev,
        }
    }

    pub fn swap_board(self) -> Bitboard {
        Bitboard {
            black: self.white,
            white: self.black,
        }
    }

    pub fn empty_count(self) -> u32 {
        Bitboard::SIZE2 as u32 - (self.black | self.white).count_ones()
    }

    pub fn result(self) -> Value {
        Value::new(self.black.count_ones() as i32 - self.white.count_ones() as i32)
    }

    pub fn get_index(self, prev_board: Bitboard) -> i32 {
        ((self.black | self.white) ^ (prev_board.black | prev_board.white)).trailing_zeros() as i32
    }
}

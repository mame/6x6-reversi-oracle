// I want to name this module "move" but Rust does not allow!!!

use std::fmt;

use super::Bitboard;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Move {
    Place(i32),
    Pass,
}

impl Move {
    pub fn new(move_str: String) -> Result<Move, String> {
        if move_str != "xx" {
            let cs: Vec<char> = move_str.to_ascii_lowercase().as_str().chars().collect();
            if move_str.len() != 2 {
                return Result::Err(format!("unknown move: {}", move_str));
            }
            let x = cs[0] as u8 - 'a' as u8;
            let y = cs[1] as u8 - '1' as u8;
            if Bitboard::SIZE <= x as i32 || Bitboard::SIZE <= y as i32 {
                return Result::Err(format!("unknown move: {}", move_str));
            }
            Result::Ok(Move::Place(x as i32 + y as i32 * Bitboard::SIZE as i32))
        } else {
            Result::Ok(Move::Pass)
        }
    }

    pub const C2: Move = Move::Place(2 + 1 * 6);
    pub const B3: Move = Move::Place(1 + 2 * 6);
    pub const E4: Move = Move::Place(4 + 3 * 6);
    pub const D5: Move = Move::Place(3 + 4 * 6);

    pub fn conv_c2(mv: Move) -> Move {
        // (0,0) => (5,5)
        // (1,0) => (5,4)
        Move::conv(mv, |x, y| (Bitboard::SIZE - 1 - y, Bitboard::SIZE - 1 - x))
    }
    pub fn conv_b3(mv: Move) -> Move {
        // (0,0) => (5,5)
        // (1,0) => (5,4)
        Move::conv(mv, |x, y| (Bitboard::SIZE - 1 - x, Bitboard::SIZE - 1 - y))
    }
    pub fn conv_e4(mv: Move) -> Move {
        // (0,0) => (0,0)
        // (1,0) => (1,0)
        Move::conv(mv, |x, y| (x, y))
    }
    pub fn conv_d5(mv: Move) -> Move {
        // (0,0) => (0,0)
        // (1,0) => (0,1)
        Move::conv(mv, |x, y| (y, x))
    }

    fn conv<F>(mv: Move, f: F) -> Move
    where
        F: Fn(i32, i32) -> (i32, i32),
    {
        if let Move::Place(idx) = mv {
            let x = idx % Bitboard::SIZE;
            let y = idx / Bitboard::SIZE;
            let (x, y) = f(x, y);
            Move::Place(y * Bitboard::SIZE + x)
        } else {
            Move::Pass
        }
    }
}

impl fmt::Display for Move {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Move::Place(idx) => {
                let x: char = ('A' as u8 + idx as u8 % Bitboard::SIZE as u8) as char;
                let y: char = ('1' as u8 + idx as u8 / Bitboard::SIZE as u8) as char;
                write!(f, "{}{}", x, y)
            }
            Move::Pass => {
                write!(f, "pass")
            }
        }
    }
}

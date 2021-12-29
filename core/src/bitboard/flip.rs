use super::bits::Bits;
use super::Bitboard;

#[inline]
fn check0(rev: Bits, _black: Bits, _white_mask: Bits, _pos: Bits, _shift: i32) -> Bits {
    return rev;
}

#[inline]
fn check1(rev: Bits, black: Bits, white_mask: Bits, pos: Bits, shift: i32) -> Bits {
    let w0 = (black >> shift) & white_mask;
    let pos = pos << shift;
    return rev | (pos & w0);
}

#[inline]
fn check2(rev: Bits, black: Bits, white_mask: Bits, pos: Bits, shift: i32) -> Bits {
    let w0 = (black >> shift) & white_mask;
    let mut w1 = (w0 >> shift) & white_mask;
    w1 = w1 | w0;
    let mut pos = pos << shift;
    let mut rev = rev;
    rev = rev | (pos & w1);
    pos = (pos & white_mask) << shift;
    rev = rev | (pos & w0);
    return rev;
}

#[inline]
fn check3(rev: Bits, black: Bits, white_mask: Bits, pos: Bits, shift: i32) -> Bits {
    let w0 = (black >> shift) & white_mask;
    let mut w1 = (w0 >> shift) & white_mask;
    let mut w2 = (w1 >> shift) & white_mask;
    w1 = w1 | w0;
    w2 = w2 | w1;
    let mut pos = pos << shift;
    let mut rev = rev;
    rev = rev | (pos & w2);
    pos = (pos & white_mask) << shift;
    rev = rev | (pos & w1);
    pos = (pos & white_mask) << shift;
    rev = rev | (pos & w0);
    return rev;
}

#[inline]
fn check4(rev: Bits, black: Bits, white_mask: Bits, pos: Bits, shift: i32) -> Bits {
    let w0 = (black >> shift) & white_mask;
    let mut w1 = (w0 >> shift) & white_mask;
    let mut w2 = (w1 >> shift) & white_mask;
    let mut w3 = (w2 >> shift) & white_mask;
    w1 = w1 | w0;
    w2 = w2 | w1;
    w3 = w3 | w2;
    let mut pos = pos << shift;
    let mut rev = rev;
    rev = rev | (pos & w3);
    pos = (pos & white_mask) << shift;
    rev = rev | (pos & w2);
    pos = (pos & white_mask) << shift;
    rev = rev | (pos & w1);
    pos = (pos & white_mask) << shift;
    rev = rev | (pos & w0);
    return rev;
}

type Check = fn(Bits, Bits, Bits, Bits, i32) -> Bits;

const CHECK_FUNCS: [Check; 5] = [check0, check1, check2, check3, check4];

macro_rules! define {
    ($name:ident, $x:expr, $y:expr) => {
        #[allow(arithmetic_overflow)]
        fn $name(board: Bitboard) -> Bits {
            let pos = Bits::one_disc($x, $y);
            let rev = Bits::ZERO;

            let e = if 4 - $x > 0 { 4 - $x } else { 0 };
            let w = if $x - 1 > 0 { $x - 1 } else { 0 };
            let white_mask = board.white & !(Bitboard::EDGE_MASK_WE);
            let rev = CHECK_FUNCS[e](rev, board.black, white_mask, pos, 1); // to east
            let rev = CHECK_FUNCS[w](rev, board.black, white_mask, pos, -1); // to west

            let s = if 4 - $y > 0 { 4 - $y } else { 0 };
            let n = if $y - 1 > 0 { $y - 1 } else { 0 };
            let white_mask = board.white & !(Bitboard::EDGE_MASK_NS);
            let rev = CHECK_FUNCS[s](rev, board.black, white_mask, pos, Bitboard::SIZE); // to south
            let rev = CHECK_FUNCS[n](rev, board.black, white_mask, pos, -Bitboard::SIZE); // to north

            let se = if s < e { s } else { e };
            let sw = if s < w { s } else { w };
            let ne = if n < e { n } else { e };
            let nw = if n < w { n } else { w };
            let white_mask = board.white & !(Bitboard::EDGE_MASK_NSWE);
            let rev = CHECK_FUNCS[se](rev, board.black, white_mask, pos, Bitboard::SIZE + 1); // to south-east
            let rev = CHECK_FUNCS[sw](rev, board.black, white_mask, pos, Bitboard::SIZE - 1); // to south-west
            let rev = CHECK_FUNCS[ne](rev, board.black, white_mask, pos, -Bitboard::SIZE + 1); // to north-east
            let rev = CHECK_FUNCS[nw](rev, board.black, white_mask, pos, -Bitboard::SIZE - 1); // to north-west

            return rev;
        }
    };
}

define!(discs_to_be_flipped_0_0, 0, 0);
define!(discs_to_be_flipped_1_0, 1, 0);
define!(discs_to_be_flipped_2_0, 2, 0);
define!(discs_to_be_flipped_3_0, 3, 0);
define!(discs_to_be_flipped_4_0, 4, 0);
define!(discs_to_be_flipped_5_0, 5, 0);
define!(discs_to_be_flipped_0_1, 0, 1);
define!(discs_to_be_flipped_1_1, 1, 1);
define!(discs_to_be_flipped_2_1, 2, 1);
define!(discs_to_be_flipped_3_1, 3, 1);
define!(discs_to_be_flipped_4_1, 4, 1);
define!(discs_to_be_flipped_5_1, 5, 1);
define!(discs_to_be_flipped_0_2, 0, 2);
define!(discs_to_be_flipped_1_2, 1, 2);
define!(discs_to_be_flipped_2_2, 2, 2);
define!(discs_to_be_flipped_3_2, 3, 2);
define!(discs_to_be_flipped_4_2, 4, 2);
define!(discs_to_be_flipped_5_2, 5, 2);
define!(discs_to_be_flipped_0_3, 0, 3);
define!(discs_to_be_flipped_1_3, 1, 3);
define!(discs_to_be_flipped_2_3, 2, 3);
define!(discs_to_be_flipped_3_3, 3, 3);
define!(discs_to_be_flipped_4_3, 4, 3);
define!(discs_to_be_flipped_5_3, 5, 3);
define!(discs_to_be_flipped_0_4, 0, 4);
define!(discs_to_be_flipped_1_4, 1, 4);
define!(discs_to_be_flipped_2_4, 2, 4);
define!(discs_to_be_flipped_3_4, 3, 4);
define!(discs_to_be_flipped_4_4, 4, 4);
define!(discs_to_be_flipped_5_4, 5, 4);
define!(discs_to_be_flipped_0_5, 0, 5);
define!(discs_to_be_flipped_1_5, 1, 5);
define!(discs_to_be_flipped_2_5, 2, 5);
define!(discs_to_be_flipped_3_5, 3, 5);
define!(discs_to_be_flipped_4_5, 4, 5);
define!(discs_to_be_flipped_5_5, 5, 5);

type FlipFunc = fn(Bitboard) -> Bits;

const FLIP_FUNCS: [FlipFunc; Bitboard::SIZE2] = [
    discs_to_be_flipped_0_0,
    discs_to_be_flipped_1_0,
    discs_to_be_flipped_2_0,
    discs_to_be_flipped_3_0,
    discs_to_be_flipped_4_0,
    discs_to_be_flipped_5_0,
    discs_to_be_flipped_0_1,
    discs_to_be_flipped_1_1,
    discs_to_be_flipped_2_1,
    discs_to_be_flipped_3_1,
    discs_to_be_flipped_4_1,
    discs_to_be_flipped_5_1,
    discs_to_be_flipped_0_2,
    discs_to_be_flipped_1_2,
    discs_to_be_flipped_2_2,
    discs_to_be_flipped_3_2,
    discs_to_be_flipped_4_2,
    discs_to_be_flipped_5_2,
    discs_to_be_flipped_0_3,
    discs_to_be_flipped_1_3,
    discs_to_be_flipped_2_3,
    discs_to_be_flipped_3_3,
    discs_to_be_flipped_4_3,
    discs_to_be_flipped_5_3,
    discs_to_be_flipped_0_4,
    discs_to_be_flipped_1_4,
    discs_to_be_flipped_2_4,
    discs_to_be_flipped_3_4,
    discs_to_be_flipped_4_4,
    discs_to_be_flipped_5_4,
    discs_to_be_flipped_0_5,
    discs_to_be_flipped_1_5,
    discs_to_be_flipped_2_5,
    discs_to_be_flipped_3_5,
    discs_to_be_flipped_4_5,
    discs_to_be_flipped_5_5,
];

impl Bitboard {
    pub fn discs_to_be_flipped(&self, idx: i32) -> Bits {
        return FLIP_FUNCS[idx as usize](*self);
    }
}

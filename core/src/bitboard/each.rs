use super::bits;

// The smaller is, the better is.
//
// 0 5 1 . . .
// 6 7 3 . . .
// 2 4 . . . .
// . . . . . .
// . . . . . .
// . . . . . .

pub const BEST_TO_WORST_CELLS: [i32; 32] = [
    bits::index(0, 0),
    bits::index(5, 0),
    bits::index(0, 5),
    bits::index(5, 5),
    bits::index(2, 0),
    bits::index(3, 0),
    bits::index(2, 5),
    bits::index(3, 5),
    bits::index(0, 2),
    bits::index(0, 3),
    bits::index(5, 2),
    bits::index(5, 3),
    bits::index(2, 1),
    bits::index(3, 1),
    bits::index(2, 4),
    bits::index(3, 4),
    bits::index(1, 2),
    bits::index(4, 2),
    bits::index(1, 3),
    bits::index(4, 3),
    bits::index(1, 0),
    bits::index(4, 0),
    bits::index(1, 5),
    bits::index(4, 5),
    bits::index(0, 1),
    bits::index(5, 1),
    bits::index(0, 4),
    bits::index(5, 4),
    bits::index(1, 1),
    bits::index(4, 1),
    bits::index(1, 4),
    bits::index(4, 4),
];

#[macro_export]
macro_rules! next_board {
    ($board:expr => | $nboard:ident | $body:block) => {
        use crate::bitboard::bits::Bits;
        use crate::bitboard::each;
        for i in 0..32 {
            let idx = each::BEST_TO_WORST_CELLS[i];
            let pos = Bits::new(1u64 << idx);
            if ($board.black | $board.white) & pos == Bits::ZERO {
                let rev = $board.discs_to_be_flipped(idx);
                if rev != Bits::ZERO {
                    let $nboard = $board.flip_discs(rev, pos).swap_board();
                    $body
                }
            }
        }
    };
}

pub(crate) use next_board;

#[macro_export]
macro_rules! simple_next_board {
    ($board:expr => | $idx:ident, $nboard:ident | $body:block) => ({
        use crate::bitboard::bits;
        use crate::bitboard::bits::Bits;
        let mut k = 0;
        let mut pos = Bits::new(1u64);
        for j in 0..Bitboard::SIZE {
            for i in 0..Bitboard::SIZE {
                if ($board.black | $board.white) & pos == Bits::ZERO {
                    let $idx = bits::index(i, j);
                    let rev = $board.discs_to_be_flipped($idx);
                    if rev != Bits::ZERO {
                        let $nboard = $board.flip_discs(rev, Bits::one_disc(i, j)).swap_board();
                        $body
                        k += 1;
                    }
                }
                pos = pos << 1;
            }
        }
        k
    })
}

pub(crate) use simple_next_board;

#[macro_export]
macro_rules! empty_cell {
    ($board:expr => | $idx:ident , $pos:ident | $body:block) => {
        use crate::bitboard::each;
        for i in 0..32 {
            let $idx = each::BEST_TO_WORST_CELLS[i];
            let $pos = Bits::new(1u64 << $idx);
            if ($board.black | $board.white) & $pos == Bits::ZERO {
                $body
            }
        }
    };
}

pub(crate) use empty_cell;

mod empty_cell_list;

use self::empty_cell_list::*;
use crate::bitboard::bits::Bits;
use crate::bitboard::Bitboard;
use crate::value::Value;
use std::mem::MaybeUninit;

pub fn search(board: Bitboard, depth: u32, pass: bool, alpha: Value) -> Value {
    let mut list = EmptyCellList::new(board);
    return negamax_1(board, depth, &mut list, pass, alpha);
}

// negamax for depth 11--7 with move ordering
fn negamax_1(
    board: Bitboard,
    depth: u32,
    list: &mut EmptyCellList,
    pass: bool,
    alpha: Value,
) -> Value {
    if depth <= 6 {
        return negamax_2(board, depth, list, pass, alpha);
    }

    #[derive(Debug, Clone, Copy)]
    struct Move {
        nboard: Bitboard,
        score: u32,
        ptr: *mut EmptyCell,
    }

    // Use uninitialized stack for performance
    let mut moves: [Move; Bitboard::SIZE2] = unsafe { MaybeUninit::uninit().assume_init() };
    let mut k = 0;

    empty_cell_list::iterate!(board, list => |cursor, nboard| {
        moves[k] = Move {
            nboard,
            score: 0,
            ptr: cursor.prev,
        };
        k += 1;
    });

    let ret;
    if k == 0 {
        if pass {
            return board.result();
        }
        ret = -negamax_1(board.swap_board(), depth, list, true, -alpha - Value::ONE)
    } else if k == 1 {
        let cursor = Cursor::new(moves[0].ptr);
        ret =
            cursor.skip(|| -negamax_1(moves[0].nboard, depth - 1, list, false, -alpha - Value::ONE))
    } else {
        // evaluating moves
        for i in 0..k {
            moves[i].score = moves[i].nboard.count_mobility()
        }

        let mut max_val = -Value::INF;
        for i in 0..k {
            // move ordering: search the best move first
            let mut best = (moves[i].score, i);
            for j in i + 1..k {
                if moves[j].score < best.0 {
                    best = (moves[j].score, j);
                }
            }
            let cursor = Cursor::new(moves[best.1].ptr);
            let nboard = moves[best.1].nboard;
            moves[best.1] = moves[i];

            // recursion for negamax
            let val =
                cursor.skip(|| -negamax_1(nboard, depth - 1, list, false, -alpha - Value::ONE));

            // save the best move
            if val > max_val {
                max_val = val;
                if val > alpha {
                    return val;
                } // cut
            }
        }

        ret = max_val
    }

    ret
}

// negamax for depth 6--2
fn negamax_2(
    board: Bitboard,
    depth: u32,
    list: &mut EmptyCellList,
    pass: bool,
    alpha: Value,
) -> Value {
    if depth == 1 {
        return last_disc(board, list.cursor().idx());
    }

    let mut max_val = -Value::INF;

    empty_cell_list::iterate!(board, list => |cursor, nboard| {
        let val = cursor.skip(|| {
            -negamax_2(nboard, depth - 1, list, false, -alpha - Value::ONE)
        });

        if val > max_val {
            max_val = val;
            if val > alpha { return val } // cut
        }
    });

    if max_val == -Value::INF {
        if pass {
            return board.result();
        }
        return -negamax_2(board.swap_board(), depth, list, true, -alpha - Value::ONE);
    }

    return max_val;
}

// negamax for depth 1
fn last_disc(board: Bitboard, idx: i32) -> Value {
    // eval_count++
    let rev = board.discs_to_be_flipped(idx);

    let perfect = Bitboard::SIZE2 as i32;

    if rev != Bits::ZERO {
        // black = board.black ^ rev ^ (1 << idx);
        // white = board.white ^ rev;
        // value = black.count_ones() - white.count_ones()

        // black.count_ones() + white.count_ones() == SIZE * SIZE
        // black.count_ones() - white.count_ones() == value

        // value = SIZE * SIZE - 2 * white.count_ones()

        return Value::new(perfect - 2 * (board.white ^ rev).count_ones() as i32);
    } else {
        // pass
        let board = board.swap_board();
        let rev = board.discs_to_be_flipped(idx);
        if rev != Bits::ZERO {
            return Value::new(-(perfect - 2 * (board.white ^ rev).count_ones() as i32));
        } else {
            // cannot pass
            return Value::new(-(perfect - 1 - 2 * (board.white ^ rev).count_ones() as i32));
        }
    }
}

pub mod endgame;
pub mod midgame;

use crate::bitboard::each;
use crate::bitboard::mv::Move;
use crate::bitboard::Bitboard;
use crate::candidate::{BlackMove, WhiteMove};
use crate::value::Value;

pub fn get_black_moves(moves: Vec<Move>) -> Vec<BlackMove> {
    assert!(moves.len() % 2 == 0);

    let (board, _black) = Bitboard::init(&moves).unwrap();

    let mut cands = vec![];
    each::simple_next_board!(board => |idx, nboard| {
        gen_black_move(Move::Place(idx), nboard, &mut cands);
    });
    if cands.is_empty() {
        gen_black_move(Move::Pass, board.swap_board(), &mut cands);
    }

    return cands;
}

fn gen_black_move(black_move: Move, nboard: Bitboard, cands: &mut Vec<BlackMove>) {
    let black_value = -search(nboard, Value::ZERO);
    cands.push(BlackMove {
        black_move,
        black_value,
    })
}

pub fn get_white_move(moves: Vec<Move>) -> WhiteMove {
    assert!(moves.len() % 2 == 1);

    let (board, _black) = Bitboard::init(&moves).unwrap();

    let black_value = -search(board, Value::ZERO);
    let mut next_white_move = Move::Pass;
    each::simple_next_board!(board => |idx, nboard| {
        if black_value == search(nboard, Value::ZERO) && next_white_move == Move::Pass {
            next_white_move = Move::Place(idx);
        }
    });
    return WhiteMove {
        white_move: next_white_move,
    };
}

// MTD(f) algorithm
pub fn search(board: Bitboard, f: Value) -> Value {
    let mut f = f;
    let mut lower = -Value::INF;
    let mut upper = Value::INF;
    let depth = board.empty_count();
    let mut val = Value::ZERO;

    while lower < upper {
        val = midgame::search(board, depth, false, f - Value::ONE);
        if val < f {
            upper = val;
        } else {
            lower = val;
        }
        f = if lower == val { val + Value::ONE } else { val };
    }

    return val;
}

#[allow(dead_code)]
fn negac_star(board: Bitboard) -> Value {
    let mut upper = Value::new(Bitboard::SIZE2 as i32);
    let mut lower = -upper;
    let mut val = Value::ZERO;
    let depth = board.empty_count();

    while lower != upper {
        let alpha = (lower + upper) / 2;
        let alpha = if alpha == lower {
            alpha + Value::ONE
        } else {
            alpha
        };
        val = midgame::search(board, depth, false, alpha - Value::ONE);
        if val < alpha {
            upper = val
        } else {
            lower = val
        }
    }
    return val;
}

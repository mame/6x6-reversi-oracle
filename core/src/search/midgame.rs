use std::cmp;

use super::endgame;
use crate::bitboard::each;
use crate::bitboard::Bitboard;
use crate::value::Value;

pub mod cache;
pub mod evaluator;

const STRATEGIES: [i32; 36] = [
    /*  0 */ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, /* 10 */ -1, 0, 0, 0, 0, 0, 0, 0, 2,
    2, /* 20 */ 2, 3, 3, 3, 5, 5, 6, 6, 6, 6, /* 30 */ 6, 7, 7, 0, 0, 0,
];

pub fn search(board: Bitboard, depth: u32, pass: bool, alpha: Value) -> Value {
    let strategy = STRATEGIES[depth as usize];
    if strategy < 0 {
        return endgame::search(board, depth, pass, alpha);
    }

    let board = board.normalize();

    // check memoized results
    let memo;
    if let Some(m) = cache::lookup(board) {
        if m.lower > alpha {
            return m.lower;
        }
        if m.upper <= alpha {
            return m.upper;
        }
        if m.upper == m.lower {
            return m.upper;
        }
        memo = m
    } else {
        memo = cache::Memo {
            lower: -Value::INF,
            upper: Value::INF,
            best_idx: -1,
        }
    };

    #[derive(Debug, Clone, Copy)]
    // enumerate next boards
    struct Move {
        nboard: Bitboard,
        idx: i32,
        score: Value,
    }
    let mut moves = Vec::with_capacity(Bitboard::SIZE2);
    let k = each::simple_next_board!(board => |idx, nboard| {
        moves.push(Move { nboard, idx, score: Value::ZERO })
    });

    let mut new_memo = memo.clone();
    let ret;

    if k == 0 {
        if pass {
            ret = board.result()
        } else {
            ret = -search(board.swap_board(), depth, true, -alpha - Value::ONE)
        }
    } else if k == 1 {
        new_memo.best_idx = moves[0].idx;
        ret = -search(moves[0].nboard, depth - 1, false, -alpha - Value::ONE);
    } else {
        // evaluating moves
        for i in 0..k {
            if moves[i].idx == memo.best_idx {
                moves[i].score = -Value::INF;
            } else {
                let limit = strategy as u32;
                moves[i].score = evaluate(moves[i].nboard, limit);
            }
        }

        let mut max_val = -Value::INF;
        for i in 0..k {
            // move ordering: search the best move first
            let mut best = (moves[i].score, i);
            for j in i + 1..k {
                if moves[j].score < best.0 {
                    best = (moves[j].score, j)
                }
            }
            let Move {
                nboard,
                idx,
                score: _,
            } = moves[best.1];
            moves[best.1] = moves[i];

            // recursion for negamax
            let val = -search(nboard, depth - 1, false, -alpha - Value::ONE);

            // save the best move
            if val > max_val {
                max_val = val;
                new_memo.best_idx = idx;
                if val > alpha {
                    break;
                } // cut
            }
        }

        ret = max_val
    };

    if ret <= alpha {
        new_memo.upper = ret;
    } else {
        new_memo.lower = ret;
    }

    // memoize (or update) the result
    cache::set(board, new_memo);

    return ret;
}

fn evaluate(board: Bitboard, limit: u32) -> Value {
    if limit >= 1 {
        negascout_limit_n(board, limit, false, -Value::INF, Value::INF)
    } else {
        negascout_limit_0(board)
    }
}

fn negascout_limit_n(board: Bitboard, limit: u32, pass: bool, alpha: Value, beta: Value) -> Value {
    let mut nboards: [Bitboard; Bitboard::SIZE2] = [Bitboard::EMPTY_BOARD; Bitboard::SIZE2];
    if limit <= 1 {
        return negascout_limit_1(board, false, alpha, beta);
    }

    let mut k = 0;
    each::next_board!(board => |nboard| {
        nboards[k] = nboard;
        k += 1;
    });

    if k == 0 {
        if pass {
            return board.result();
        }
        return -negascout_limit_n(board.swap_board(), limit, true, -beta, -alpha);
    }
    let val = -negascout_limit_n(nboards[0], limit - 1, false, -beta, -alpha);
    if beta <= val {
        return val;
    }
    let mut alpha = cmp::max(alpha, val);
    let mut max_val = val;
    for i in 1..k {
        let mut val = -negascout_limit_n(nboards[i], limit - 1, false, -alpha - Value::ONE, -alpha);
        if beta <= val {
            return val;
        }
        if alpha < val {
            alpha = val;
            val = -negascout_limit_n(nboards[i], limit - 1, false, -beta, -alpha);
            if beta <= val {
                return val;
            }
            alpha = cmp::max(alpha, val);
        }
        max_val = cmp::max(max_val, val);
    }
    max_val
}

fn negascout_limit_1(board: Bitboard, pass: bool, alpha: Value, beta: Value) -> Value {
    let mut max = -Value::INF;

    each::next_board!(board => |nboard| {
        let val = -negascout_limit_0(nboard);
        if max < val {
            max = val;
            if beta <= max {
                return max
            }
        }
    });

    if max == -Value::INF {
        if pass {
            return board.result();
        }
        return -negascout_limit_1(board.swap_board(), true, -beta, -alpha);
    }

    max
}

fn negascout_limit_0(board: Bitboard) -> Value {
    evaluator::evaluate(board)
}

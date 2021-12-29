pub mod louds;
pub mod succinct;
pub mod table;

use crate::bitboard::each;
use crate::bitboard::mv::Move;
use crate::bitboard::Bitboard;
use crate::candidate::{BlackMove, WhiteMove};
use crate::value::Value;
use louds::Cursor;

impl BlackMove {
    fn apply_conv(&self, conv: fn(Move) -> Move) -> BlackMove {
        BlackMove {
            black_move: conv(self.black_move),
            black_value: self.black_value,
        }
    }
}

impl WhiteMove {
    fn apply_conv(&self, conv: fn(Move) -> Move) -> WhiteMove {
        WhiteMove {
            white_move: conv(self.white_move),
        }
    }
}

pub fn get_black_moves(mut moves: Vec<Move>) -> Option<Vec<BlackMove>> {
    assert!(moves.len() % 2 == 0);

    if moves.is_empty() {
        // firstMove
        let cand = BlackMove {
            black_move: Move::E4,
            black_value: Value::new(-4),
        };
        let ret = vec![
            cand.apply_conv(Move::conv_c2),
            cand.apply_conv(Move::conv_b3),
            cand.apply_conv(Move::conv_e4),
            cand.apply_conv(Move::conv_d5),
        ];
        return Some(ret);
    }

    let black_move = moves.remove(0);
    let conv: fn(Move) -> Move = match black_move {
        Move::C2 => Move::conv_c2,
        Move::B3 => Move::conv_b3,
        Move::E4 => Move::conv_e4,
        Move::D5 => Move::conv_d5,
        _ => panic!("unknown first black move: {}", black_move),
    };
    let moves: Vec<Move> = moves.iter().map(|mv| conv(*mv)).collect();

    let ret = table::with(|cursor| lookup_tree(moves, cursor));

    ret.map(|core_result| {
        if let CoreResult::BlackMoves(cands) = core_result {
            cands.iter().map(|cand| cand.apply_conv(conv)).collect()
        } else {
            panic!("get_white_move failed")
        }
    })
}

pub fn get_white_move(mut moves: Vec<Move>) -> Option<WhiteMove> {
    assert!(moves.len() % 2 == 1);

    let black_move = moves.remove(0);
    let conv: fn(Move) -> Move = match black_move {
        Move::C2 => Move::conv_c2,
        Move::B3 => Move::conv_b3,
        Move::E4 => Move::conv_e4,
        Move::D5 => Move::conv_d5,
        _ => panic!("unknown first black move: {}", black_move),
    };
    let moves: Vec<Move> = moves.iter().map(|mv| conv(*mv)).collect();

    let ret = table::with(|cursor| lookup_tree(moves, cursor));

    ret.map(|core_result| {
        if let CoreResult::WhiteMove(white_move) = core_result {
            white_move.apply_conv(conv)
        } else {
            panic!("get_white_move failed")
        }
    })
}

enum CoreResult {
    BlackMoves(Vec<BlackMove>),
    WhiteMove(WhiteMove),
}

fn lookup_tree(mut moves: Vec<Move>, mut cursor: Cursor) -> Option<CoreResult> {
    let (mut board, _black) = Bitboard::init(&vec![Move::E4]).unwrap();

    loop {
        // precomuted white move
        let (white_move, _value) = cursor.data();

        if moves.is_empty() {
            return Some(CoreResult::WhiteMove(WhiteMove { white_move }));
        }

        if cursor.child_count() == 0 {
            // reached a leaf
            return None;
        }

        // check if white move is known
        let mv = moves.remove(0);
        if white_move != mv {
            panic!("unknown white move: {}, expected {}", mv, white_move);
        }
        // proceed: white -> black
        board = board.apply_move(&white_move).unwrap();

        if moves.is_empty() {
            break;
        }

        // check black move
        let black_move = moves.remove(0);
        let mut i = 0;
        let mut child_index = -1;
        each::simple_next_board!(board => |idx, _nboard| {
            if black_move == Move::Place(idx) && child_index == -1 {
                child_index = i as i32;
            }
            i += 1;
        });
        if i == 0 {
            // pass
            if black_move != Move::Pass {
                panic!("impossive black move: {}", black_move);
            }
            i = 1;
            child_index = 0;
        } else if child_index == -1 {
            panic!("impossive black move: {}", black_move);
        }
        if cursor.child_count() != i {
            panic!("broken tree: {} != {}", i, cursor.child_count())
        }
        cursor = cursor.get_child(child_index as u64);

        // proceed: black -> white
        board = board.apply_move(&black_move).unwrap();
    }

    let mut cands = vec![];
    let mut i = 0;
    each::simple_next_board!(board => |idx, _nboard| {
        gen_black_move(Move::Place(idx), cursor.get_child(i).data(), &mut cands);
        i += 1;
    });
    if i == 0 {
        gen_black_move(Move::Pass, cursor.get_child(0).data(), &mut cands);
    }
    return Some(CoreResult::BlackMoves(cands));
}

fn gen_black_move(
    black_move: Move,
    (_next_white_move, value): (Move, Value),
    cands: &mut Vec<BlackMove>,
) {
    cands.push(BlackMove {
        black_move,
        black_value: -value,
    });
}

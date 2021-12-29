use std::cmp;
use std::time::Instant;

use crate::bitboard::mv::Move;
use crate::bitboard::Bitboard;
use crate::lookup;
use crate::search;
use crate::value::Value;

pub fn check(board: Bitboard, moves: Vec<Move>, value: Value) {
    let n = board.count_mobility();
    let n = cmp::max(1, n); // for pass
    if let Some(black_moves) = lookup::get_black_moves(moves.clone()) {
        if black_moves.len() != n as usize {
            panic!("found supported move")
        }
        let mut min_value = Value::INF;
        for black_move in black_moves {
            let mut nmoves = moves.clone();
            nmoves.push(black_move.black_move);
            if let Some(white_move) = lookup::get_white_move(nmoves.clone()) {
                nmoves.push(white_move.white_move);
                let nboard = board.apply_move(&black_move.black_move).unwrap();
                let nnboard = nboard.apply_move(&white_move.white_move).unwrap();
                check(nnboard, nmoves, black_move.black_value);
                min_value = cmp::min(min_value, value);
            }
            else {
                panic!("white_move lacks")
            }
        }
        if value != min_value {
            panic!("inconsistent value")
        }
    } else {
        if Bitboard::init(&moves).is_err() {
            panic!("wrong opening move")
        }
        print!(
            "{}: ",
            moves
                .iter()
                .map(|mv| format!("{}", mv))
                .collect::<Vec<String>>()
                .join(" ")
        );
        let start = Instant::now();
        let cands = search::get_black_moves(moves);
        search::midgame::cache::flush();
        let time = start.elapsed();
        println!("{}", time.as_secs_f64());
        if cands.len() != n as usize {
            panic!("found supported move")
        }
        let mut max_value = -Value::INF;
        for cand in cands {
            max_value = cmp::max(max_value, cand.black_value);
        }
        if value != max_value {
            panic!("inconsistent value: {} != {}", value, max_value)
        }
    }
}

pub fn main() {
    check(Bitboard::init(&vec![]).unwrap().0, vec![], Value::new(4));
    println!("ok");
}

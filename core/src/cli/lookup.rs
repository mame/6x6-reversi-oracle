use crate::bitboard::mv::Move;
use crate::bitboard::Bitboard;
use crate::candidate::BlackMove;
use crate::lookup;
use crate::search;
use crate::value::Value;

pub fn main(moves: Vec<String>, auto: bool) {
    let original_moves = moves.clone();
    let moves: Vec<Move> = moves
        .iter()
        .map(|mv| Move::new(mv.clone()).unwrap())
        .collect();

    let board;
    let black;
    match Bitboard::init(&moves) {
        Result::Ok((board_, black_)) => {
            board = board_;
            black = black_;
        }
        Result::Err(_msg) => return,
    }

    board.display(black);

    let mut scores = [Value::INF; Bitboard::SIZE2];

    if black {
        println!("move: black (X)");

        let cands =
            if let Some(cands_) = lookup::get_black_moves(moves.clone()) {
                cands_
            } else if auto {
                search::get_black_moves(moves.clone())
            } else {
                println!("You have gone beyond the scope of the dictionary.");
                println!("Try: search {}", original_moves.join(" "));
                return
            };

        let mut i = 0;
        let n = cands.len();
        for BlackMove {
            black_move,
            black_value,
        } in cands
        {
            i += 1;
            println!("{}/{}: {} -> {}", i, n, black_move, black_value);
            if let Move::Place(idx) = black_move {
                scores[idx as usize] = black_value;
            }
        }
        board.display_with_score(black, scores);
    } else {
        println!("move: white (X)");

        let white_move;
        if let Some(white_move_) = lookup::get_white_move(moves.clone()) {
            white_move = white_move_;
        } else if auto {
            white_move = search::get_white_move(moves.clone());
        } else {
            println!("You have gone beyond the scope of the dictionary.");
            println!("Try: search {}", original_moves.join(" "));
            return;
        }

        println!("1/?: {} -> ??", white_move.white_move);
    }
}

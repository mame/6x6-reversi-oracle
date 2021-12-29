// Find next move by game tree search

use crate::bitboard::each;
use crate::bitboard::mv::Move;
use crate::bitboard::Bitboard;
use crate::search;
use crate::value::Value;

pub fn main(moves: Vec<String>) {
    let moves = moves
        .iter()
        .map(|mv| Move::new(mv.clone()).unwrap())
        .collect();
    let (board, black) = Bitboard::init(&moves).unwrap();

    board.display(black);

    let mut nboards = vec![];

    each::simple_next_board!(board => |_idx, nboard| {
        nboards.push(nboard);
    });

    if nboards.is_empty() {
        println!("pass!");
        return;
    }

    println!("move: {}", if black { "black (X)" } else { "white (O)" });
    let mut scores = [Value::INF; Bitboard::SIZE2];
    for i in 0..nboards.len() {
        let idx = nboards[i].get_index(board);
        print!("{}/{}: {}", i + 1, nboards.len(), Move::Place(idx));
        let score = -search::search(nboards[i], Value::ZERO);
        println!(" -> {}", score);
        scores[idx as usize] = score;
    }

    board.display_with_score(black, scores);
}

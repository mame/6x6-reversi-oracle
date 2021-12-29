use std::fs::File;
use std::io::Write;
use std::sync::Mutex;

use rand;
use rand::prelude::*;
use rayon::prelude::*;

use crate::bitboard::each;
use crate::bitboard::Bitboard;
use crate::search;
use crate::value::Value;

fn gen_board(rng: &mut rand::rngs::StdRng, depth: u32) -> Bitboard {
    let (mut board, mut black) = Bitboard::init(&vec![]).unwrap();
    let mut pass = false;
    while board.empty_count() > depth {
        let mut nboards: [Bitboard; Bitboard::SIZE2] = [Bitboard::EMPTY_BOARD; Bitboard::SIZE2];
        let mut k = 0;
        each::simple_next_board!(board => |_idx, nboard| {
            nboards[k] = nboard;
            k += 1;
        });
        if k == 0 {
            if pass {
                // retry
                return gen_board(rng, depth);
            }
            pass = true;
            board = board.swap_board();
        } else {
            pass = false;
            board = nboards[rng.gen_range(0..k)];
        }
        black = !black;
    }
    board
}

pub fn main(depth: u32, count: u32, output: String) {
    let mut rng = rand::SeedableRng::from_seed([0; 32]);

    let mut boards = vec![];
    for _ in 0..count {
        boards.push(gen_board(&mut rng, depth));
    }

    let counter = Mutex::new(0);
    let mut results: Vec<(Bitboard, Value)> = vec![];
    boards
        .par_iter()
        .map(|board| {
            {
                let mut num = counter.lock().unwrap();
                *num += 1;
                print!(
                    "\rgenerating boards for depth {}: {} / {}",
                    depth, *num, count
                );
                search::midgame::cache::flush();
                std::io::stdout().flush().ok();
            }
            (*board, search::search(*board, Value::ZERO))
        })
        .collect_into_vec(&mut results);

    let mut file = File::create(output).unwrap();
    for (board, value) in results {
        writeln!(file, "{},{},{}", board.black, board.white, value).unwrap();
    }
}

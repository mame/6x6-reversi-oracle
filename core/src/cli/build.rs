use std::fs::File;
use std::io::Write;
use std::io::{BufRead, BufReader};
use std::sync::Mutex;

use rayon::prelude::*;

use crate::bitboard::each;
use crate::bitboard::mv::Move;
use crate::bitboard::Bitboard;
use crate::search;
use crate::value::Value;

// E4 C5(+04)

// E4 C5(+04) B2 F4(+14)
// E4 C5(+04) B3 F4(+06)
// E4 C5(+04) B4 E3(+04)
// E4 C5(+04) B5 E3(+18)
// E4 C5(+04) B6 F4(+10)

// E4 C5(+04) B3 F4(+06) B5 D2(+12) E5 1:E3(+16)
// E4 C5(+04) B3 F4(+06) B5 D2(+12) E5 2:D5(+16)

#[derive(Debug)]
struct Task {
    line: String,
    board: Bitboard,
}

fn black_move(line: &String, board: Bitboard, nboards: &mut Vec<Task>) {
    if board.count_mobility() >= 1 {
        each::simple_next_board!(board => |idx, nboard| {
            let black_move = Move::Place(idx);
            let nline = format!("{} {}", line, black_move);
            nboards.push(Task { line: nline, board: nboard });
        });
    } else {
        let nline = line.to_string() + " xx";
        nboards.push(Task {
            line: nline,
            board: board.swap_board(),
        })
    }
}

fn white_move(task: &Task) -> Vec<String> {
    let board = task.board;

    let mut max_white_value = -Value::INF;
    let mut min_next_black_mob = 32;
    let mut white_move_candidates = vec![];

    each::simple_next_board!(board => |idx, nboard| {
        let white_move = Move::Place(idx);
        let white_value = -search::search(nboard, Value::ZERO);
        let next_black_mob = nboard.count_mobility();
        if max_white_value < white_value {
            // found better move: higher value
            max_white_value = white_value;
            min_next_black_mob = 32;
        }
        if max_white_value == white_value {
            if min_next_black_mob > next_black_mob {
                // found better move: lower black's mobility
                min_next_black_mob = next_black_mob;
                white_move_candidates.clear();
            }

            if min_next_black_mob == next_black_mob {
                white_move_candidates.push(white_move);
            }
        }
    });

    match white_move_candidates.len() {
        0 => {
            let white_value = search::search(board, Value::ZERO);
            vec![format!("{} xx({})", task.line, white_value)]
        }
        1 => {
            vec![format!(
                "{} {}({})",
                task.line, white_move_candidates[0], max_white_value
            )]
        }
        _ => {
            let mut ret = vec![];
            let mut i = 0;
            for white_move in white_move_candidates {
                i += 1;
                let line = format!("{} {}:{}({})", task.line, i, white_move, max_white_value);
                ret.push(line)
            }
            ret
        }
    }
}

pub fn main(input: String, output: String) {
    let mut tasks = vec![];

    {
        let f = File::open(input).unwrap();
        let reader = BufReader::new(f);
        let lines = reader.lines();
        for line in lines {
            let line = line.ok().unwrap();
            let mut line = line.trim().to_string();
            while let Some(i) = line.find('(') {
                line.remove(i);
                line.remove(i);
                line.remove(i);
                line.remove(i);
                line.remove(i);
            }
            let moves: Vec<Move> = line
                .split(" ")
                .map(|s| {
                    let mut s = s.to_string();
                    if s.contains(":") {
                        s = s.split(":").map(|s| s.to_string()).take(2).last().unwrap();
                    }
                    Move::new(s[0..2].to_string()).unwrap()
                })
                .collect();

            let (board, black) = Bitboard::init(&moves).unwrap();
            assert!(black);

            black_move(&line.to_string(), board, &mut tasks)
        }
    }

    let counter = Mutex::new(0);
    let count = tasks.len();
    let mut results = vec![];
    tasks
        .par_iter()
        .map(|task| {
            {
                let mut num = counter.lock().unwrap();
                *num += 1;
                print!("\rextending opening move dictionary: {} / {}", *num, count);
                search::midgame::cache::flush();
                std::io::stdout().flush().ok();
            }
            white_move(&task)
        })
        .collect_into_vec(&mut results);

    let mut file = File::create(output).unwrap();
    for subresults in results {
        for line in subresults {
            writeln!(file, "{}", line).unwrap();
        }
    }
}

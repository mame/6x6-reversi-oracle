use js_sys::Int8Array;
use wasm_bindgen::{prelude::*, throw_str};

use crate::bitboard::mv::Move;
use crate::bitboard::Bitboard;
use crate::candidate::{BlackMove, WhiteMove};
use crate::lookup;
use crate::search;

impl Move {
    fn from_i8(v: i8) -> Move {
        if v < 0 {
            Move::Pass
        } else {
            Move::Place(v as i32)
        }
    }

    fn as_i8(&self) -> i8 {
        if let Move::Place(idx) = self {
            *idx as i8
        } else {
            -1
        }
    }
}

pub fn get_black_moves_core(moves: Vec<Move>) -> Vec<BlackMove> {
    if let Some(cands) = lookup::get_black_moves(moves.clone()) {
        cands
    } else {
        search::get_black_moves(moves)
    }
}

pub fn get_white_move_core(moves: Vec<Move>) -> WhiteMove {
    if let Some(cands) = lookup::get_white_move(moves.clone()) {
        cands
    } else {
        search::get_white_move(moves)
    }
}

#[wasm_bindgen]
pub fn get_black_moves(moves: &Int8Array) -> Vec<i8> {
    let moves: Vec<Move> = moves.to_vec().iter().map(|n| Move::from_i8(*n)).collect();
    match Bitboard::init(&moves) {
        Result::Ok(_) => {
            let mut ret = vec![];
            for BlackMove {
                black_move,
                black_value,
            } in get_black_moves_core(moves)
            {
                ret.push(black_move.as_i8());
                ret.push(black_value.as_i32() as i8);
            }
            ret
        }
        Result::Err(msg) => throw_str(&msg),
    }
}

#[wasm_bindgen]
pub fn get_white_move(moves: &Int8Array) -> i8 {
    let moves: Vec<Move> = moves.to_vec().iter().map(|n| Move::from_i8(*n)).collect();
    match Bitboard::init(&moves) {
        Result::Ok(_) => {
            let WhiteMove { white_move } = get_white_move_core(moves);
            white_move.as_i8()
        }
        Result::Err(msg) => throw_str(&msg),
    }
}

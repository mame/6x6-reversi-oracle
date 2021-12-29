use crate::bitboard::mv::Move;
use crate::value::Value;

pub struct BlackMove {
    pub black_move: Move,
    pub black_value: Value,
}

pub struct WhiteMove {
    pub white_move: Move,
}

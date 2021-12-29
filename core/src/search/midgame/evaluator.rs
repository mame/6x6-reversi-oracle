use crate::bitboard::feature::Feature;
use crate::bitboard::Bitboard;
use crate::value::Value;

#[derive(Debug, Clone, Copy)]
pub struct Weight {
    pub edge2x: [f64; 3321],
    pub mob: f64,
    pub pmob_black: f64,
    pub pmob_white: f64,
}

impl Weight {
    pub fn eval(&self, feature: &Feature) -> f64 {
        let guess = 0.0;
        let guess = guess + self.edge2x[feature.edge2x[0]];
        let guess = guess + self.edge2x[feature.edge2x[1]];
        let guess = guess + self.edge2x[feature.edge2x[2]];
        let guess = guess + self.edge2x[feature.edge2x[3]];
        let guess = guess + self.mob * feature.mob as f64;
        let guess = guess + self.pmob_black * feature.pmob_black as f64;
        let guess = guess + self.pmob_white * feature.pmob_white as f64;
        guess
    }
}

struct Table {
    data: [Weight; 2],
}

include!("../../../data/weight.rs");

pub fn evaluate(board: Bitboard) -> Value {
    let depth = board.empty_count();
    let stage = if depth < 19 { 0 } else { 1 };
    let weight = &TABLE.data[stage];
    let score = weight.eval(&board.feature());
    Value::new((score * 16.0) as i32)
}

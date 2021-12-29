use super::bits;
use super::Bitboard;
use crate::value::Value;

impl Bitboard {
    fn cell(&self, i: i32, j: i32) -> String {
        if self.black.bittest(bits::index(i, j)) {
            return " X ".to_string();
        }
        if self.white.bittest(bits::index(i, j)) {
            return " O ".to_string();
        }
        return " . ".to_string();
    }

    pub fn display_with_score(self, black: bool, scores: [Value; Bitboard::SIZE2]) {
        for j in 0..Bitboard::SIZE {
            for i in 0..Bitboard::SIZE {
                let mut show = self.cell(i, j);
                let score = scores[bits::index(i, j) as usize];
                if show == " . " && score != Value::INF {
                    show = std::format!("{}", score);
                }
                if !black {
                    match &*show {
                        " X " => show = " O ".to_string(),
                        " O " => show = " X ".to_string(),
                        _ => (),
                    }
                }
                print!("{}", show)
            }
            println!()
        }
    }

    pub fn display(self, black: bool) {
        let scores = [Value::INF; Bitboard::SIZE2];
        self.display_with_score(black, scores);
    }
}

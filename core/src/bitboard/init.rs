use super::bits::Bits;
use super::mv::Move;
use super::Bitboard;

impl Bitboard {
    pub const EMPTY_BOARD: Bitboard = Bitboard {
        black: Bits::ZERO,
        white: Bits::ZERO,
    };

    pub fn apply_move(&self, mv: &Move) -> Result<Bitboard, String> {
        match mv {
            Move::Place(idx) => {
                let pos = Bits::new(1u64 << idx);
                if (self.black | self.white) & pos != Bits::ZERO {
                    return Result::Err(format!("invalid move: {}", mv));
                }
                let rev = self.discs_to_be_flipped(*idx);
                if rev == Bits::ZERO {
                    return Result::Err(format!("invalid move: {}", mv));
                }
                Result::Ok(self.flip_discs(rev, pos).swap_board())
            }
            Move::Pass => {
                if self.count_mobility() > 0 {
                    return Result::Err("invalid pass; there is a possible move".to_string());
                }
                Result::Ok((*self).swap_board())
            }
        }
    }

    pub fn init(moves: &Vec<Move>) -> Result<(Bitboard, bool), String> {
        let mut board = Bitboard::EMPTY_BOARD;
        board = board.put_disc(Bitboard::SIZE / 2 - 1, Bitboard::SIZE / 2 - 1, false);
        board = board.put_disc(Bitboard::SIZE / 2, Bitboard::SIZE / 2 - 1, true);
        board = board.put_disc(Bitboard::SIZE / 2 - 1, Bitboard::SIZE / 2, true);
        board = board.put_disc(Bitboard::SIZE / 2, Bitboard::SIZE / 2, false);
        let mut black = true;
        for mv in moves {
            board = board.apply_move(mv)?;
            black = !black;
        }
        return Ok((board, black));
    }
}

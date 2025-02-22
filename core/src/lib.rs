use crate::board::{Board, Disc, Move}; use crate::solver::minimax_search;

/// تعیین بهترین حرکت برای بازیکن pub fn best_move(board: &Board, player: Disc) -> Option<Move> { if player == Disc::Black { // تغییر نقش هوش مصنوعی به مهره مشکی minimax_search(board, player) } else { // بازیکن واقعی مهره سفید باشد None } }



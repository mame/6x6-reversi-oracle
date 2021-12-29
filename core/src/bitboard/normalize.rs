use super::bits::Bits;
use super::Bitboard;
use std::cmp;

fn reflect_vertical(mut bits: Bits) -> Bits {
    let tmp = (bits ^ (bits >> 5)) & (Bitboard::EDGE_MASK_W);
    bits = bits ^ tmp ^ (tmp << 5);
    let tmp = (bits ^ (bits >> 3)) & (Bitboard::EDGE_MASK_W << 1);
    bits = bits ^ tmp ^ (tmp << 3);
    let tmp = (bits ^ (bits >> 1)) & (Bitboard::EDGE_MASK_W << 2);
    bits = bits ^ tmp ^ (tmp << 1);
    bits
}

fn reflect_diagonal(mut bits: Bits) -> Bits {
    let tmp = (bits ^ (bits >> 35)) & Bits::new(0x0000001u64);
    bits = bits ^ tmp ^ (tmp << 35);
    let tmp = (bits ^ (bits >> 28)) & Bits::new(0x0000042u64);
    bits = bits ^ tmp ^ (tmp << 28);
    let tmp = (bits ^ (bits >> 21)) & Bits::new(0x0001084u64);
    bits = bits ^ tmp ^ (tmp << 21);
    let tmp = (bits ^ (bits >> 14)) & Bits::new(0x0042108u64);
    bits = bits ^ tmp ^ (tmp << 14);
    let tmp = (bits ^ (bits >> 7)) & Bits::new(0x1084210u64);
    bits = bits ^ tmp ^ (tmp << 7);
    bits
}

impl Bitboard {
    pub fn normalize(self) -> Bitboard {
        let mut ret = self;
        let mut board = self;

        board.black = reflect_vertical(board.black);
        board.white = reflect_vertical(board.white);
        ret = cmp::min(ret, board);

        board.black = reflect_diagonal(board.black);
        board.white = reflect_diagonal(board.white);
        ret = cmp::min(ret, board);

        board.black = reflect_vertical(board.black);
        board.white = reflect_vertical(board.white);
        ret = cmp::min(ret, board);

        board.black = reflect_diagonal(board.black);
        board.white = reflect_diagonal(board.white);
        ret = cmp::min(ret, board);

        board.black = reflect_vertical(board.black);
        board.white = reflect_vertical(board.white);
        ret = cmp::min(ret, board);

        board.black = reflect_diagonal(board.black);
        board.white = reflect_diagonal(board.white);
        ret = cmp::min(ret, board);

        board.black = reflect_vertical(board.black);
        board.white = reflect_vertical(board.white);
        ret = cmp::min(ret, board);

        ret
    }
}

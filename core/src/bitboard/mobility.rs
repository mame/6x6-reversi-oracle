use super::bits::Bits;
use super::Bitboard;

impl Bitboard {
    pub fn count_mobility(self) -> u32 {
        let empty = Bitboard::ALL_MASK ^ (self.black | self.white);

        #[inline]
        fn check_line(pos: Bits, empty: Bits, black: Bits, white: Bits, shift: i32) -> Bits {
            let mut mv = empty;
            let mut pos = pos;
            for i in 1..Bitboard::SIZE - 1 {
                mv = mv & (white >> (i * shift));
                pos = pos | (mv & (black >> ((i + 1) * shift)));
            }
            return pos;
        }

        let mut pos = Bits::ZERO;

        let white_v = self.white & !Bitboard::EDGE_MASK_WE;
        pos = check_line(pos, empty, self.black, white_v, 1); // to east
        pos = check_line(pos, empty, self.black, white_v, -1); // to west

        let white_h = self.white & !Bitboard::EDGE_MASK_NS;
        pos = check_line(pos, empty, self.black, white_h, Bitboard::SIZE); // to south
        pos = check_line(pos, empty, self.black, white_h, -Bitboard::SIZE); // to north

        let white_c = self.white & !Bitboard::EDGE_MASK_NSWE;
        pos = check_line(pos, empty, self.black, white_c, Bitboard::SIZE + 1); // to south-east
        pos = check_line(pos, empty, self.black, white_c, Bitboard::SIZE - 1); // to south-west
        pos = check_line(pos, empty, self.black, white_c, -Bitboard::SIZE + 1); // to north-east
        pos = check_line(pos, empty, self.black, white_c, -Bitboard::SIZE - 1); // to north-west

        return pos.count_ones();
    }

    pub fn count_potential_mobility(self) -> (u32, u32) {
        let empty = Bitboard::ALL_MASK ^ (self.black | self.white);

        let empty = empty
            | ((empty & (Bitboard::ALL_MASK ^ Bitboard::EDGE_MASK_N)) >> Bitboard::SIZE as i32);
        let empty = empty
            | ((empty & (Bitboard::ALL_MASK ^ Bitboard::EDGE_MASK_S)) << Bitboard::SIZE as i32);
        let empty = empty | ((empty & (Bitboard::ALL_MASK ^ Bitboard::EDGE_MASK_W)) >> 1);
        let empty = empty | ((empty & (Bitboard::ALL_MASK ^ Bitboard::EDGE_MASK_E)) << 1);

        let black = (empty & self.black).count_ones();
        let white = (empty & self.white).count_ones();

        return (black, white);
    }
}

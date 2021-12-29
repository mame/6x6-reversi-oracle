use std::cell::RefCell;

use super::louds::{Cursor, LOUDS};
use crate::bitboard::mv::Move;
use crate::value::Value;

struct U64Aligned<Bytes: ?Sized> {
    _align: [u64; 0],
    bytes: Bytes,
}

const RAW_DATA: &'static U64Aligned<[u8]> = &U64Aligned {
    _align: [],
    bytes: *include_bytes!("../../data/opening-tree.dat"),
};
const RAW_BYTES: &'static [u8] = &RAW_DATA.bytes;

const ELEMENTS: &'static [u8] = include_bytes!("../../data/opening-data.dat");

thread_local! {
    static TREE: RefCell<LOUDS> = RefCell::new(LOUDS::new(RAW_BYTES))
}

impl<'a> Cursor<'a> {
    pub fn data(&self) -> (Move, Value) {
        let i = self.node_id - 1;
        let white_move = ELEMENTS[i as usize * 2] as i32;
        let white_move = if white_move == 36 {
            Move::Pass
        } else {
            Move::Place(white_move)
        };
        let value = Value::new(ELEMENTS[i as usize * 2 + 1] as i32);
        return (white_move, value);
    }
}

pub fn with<F, R>(f: F) -> R
where
    F: FnOnce(Cursor) -> R,
{
    TREE.with(|tree| f(tree.borrow().root_cursor()))
}

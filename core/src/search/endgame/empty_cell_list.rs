use crate::bitboard::bits::Bits;
use crate::bitboard::each;
use crate::bitboard::Bitboard;
use std::ptr;

#[derive(Copy, Clone, Debug)]
pub struct EmptyCell {
    pos: Bits,
    idx: i32,
    next: *mut EmptyCell,
}

impl EmptyCell {
    fn new() -> EmptyCell {
        EmptyCell {
            pos: Bits::ZERO,
            idx: 0,
            next: ptr::null_mut(),
        }
    }
}

pub struct Cursor {
    pub prev: *mut EmptyCell,
    curr: *mut EmptyCell,
}

impl Cursor {
    pub fn new(head: *mut EmptyCell) -> Cursor {
        Cursor {
            prev: head,
            curr: unsafe { (*head).next },
        }
    }

    pub fn is_end(&self) -> bool {
        self.curr == ptr::null_mut()
    }

    pub fn idx(&self) -> i32 {
        unsafe { (*self.curr).idx }
    }

    pub fn pos(&self) -> Bits {
        unsafe { (*self.curr).pos }
    }

    // temporarily skip the current element (and restore)
    pub fn skip<F, R>(&self, f: F) -> R
    where
        F: FnOnce() -> R,
    {
        unsafe { (*self.prev).next = (*self.curr).next }
        let val = f();
        unsafe { (*self.prev).next = self.curr }
        val
    }

    pub fn next(&mut self) {
        self.prev = self.curr;
        self.curr = unsafe { (*self.curr).next }
    }
}

pub struct EmptyCellList {
    buffer: [EmptyCell; Bitboard::SIZE2 + 1],
}

impl EmptyCellList {
    pub fn new(board: Bitboard) -> EmptyCellList {
        let mut list = EmptyCellList {
            buffer: [EmptyCell::new(); Bitboard::SIZE2 + 1],
        };
        let mut j = 0;
        each::empty_cell!(board => |idx, pos| {
            let mut cell = &mut list.buffer[j + 1];
            cell.idx = idx;
            cell.pos = pos;
            list.buffer[j].next = &mut list.buffer[j + 1];
            j += 1;
        });
        list.buffer[j].next = ptr::null_mut();
        list
    }

    pub fn cursor(&mut self) -> Cursor {
        let ptr: *mut EmptyCell = &mut self.buffer[0];
        Cursor::new(ptr)
    }
}

#[macro_export]
macro_rules! iterate {
    ($board:expr, $list:expr => | $cursor:ident , $nboard:ident | $body:block) => {
        use crate::bitboard::bits::Bits;
        let mut $cursor = $list.cursor();
        while !$cursor.is_end() {
            let rev = $board.discs_to_be_flipped($cursor.idx());
            if rev != Bits::ZERO {
                let $nboard = $board.flip_discs(rev, $cursor.pos()).swap_board();
                $body
            }
            $cursor.next();
        }
    };
}

pub(crate) use iterate;

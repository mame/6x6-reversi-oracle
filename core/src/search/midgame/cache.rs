use crate::bitboard::Bitboard;
use crate::value::Value;
use std::cell::RefCell;

// Separate chaining hash
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Memo {
    pub lower: Value,
    pub upper: Value,
    pub best_idx: i32,
}

#[derive(Debug)]
struct Entry {
    board: Bitboard,
    memo: Memo,
    next: Link,
}

type Link = Option<Box<Entry>>;

const BIN_SIZE: u64 = 16777216 + 43; // prime

pub struct MiddlegameTransposition {
    bins: Vec<Link>,
    count: usize,
}

impl MiddlegameTransposition {
    fn new() -> MiddlegameTransposition {
        let mut bins = vec![];
        for _ in 0..BIN_SIZE {
            bins.push(None)
        }
        MiddlegameTransposition {
            bins: bins,
            count: 0,
        }
    }

    fn hash(board: Bitboard) -> usize {
        ((board.black.as_u64() * 17 + board.white.as_u64() * 31) % BIN_SIZE) as usize
    }

    pub fn lookup(&self, board: Bitboard) -> Option<Memo> {
        let hash = MiddlegameTransposition::hash(board);
        let mut link = self.bins[hash].as_deref();
        while let Some(node) = link {
            if node.board == board {
                return Some(node.memo);
            }
            link = node.next.as_deref();
        }
        return None;
    }

    pub fn set(&mut self, board: Bitboard, memo: Memo) {
        let hash = MiddlegameTransposition::hash(board);
        {
            let mut link = self.bins[hash].as_deref_mut();
            while let Some(mut node) = link {
                if node.board == board {
                    node.memo = memo
                }
                link = node.next.as_deref_mut();
            }
        }
        let next = self.bins[hash].take();
        self.bins[hash] = Some(Box::new(Entry { board, memo, next }));
        self.count += 1;
    }

    pub fn flush(&mut self) {
        if self.count > 4194304 {
            for i in 0..BIN_SIZE {
                self.bins[i as usize] = None
            }
            self.count = 0;
        }
    }
}

thread_local!(
    static TABLE: RefCell<MiddlegameTransposition> = RefCell::new(MiddlegameTransposition::new())
);

pub fn lookup(board: Bitboard) -> Option<Memo> {
    TABLE.with(|table| table.borrow().lookup(board))
}

pub fn set(board: Bitboard, memo: Memo) {
    TABLE.with(|table| table.borrow_mut().set(board, memo))
}

pub fn flush() {
    TABLE.with(|table| table.borrow_mut().flush())
}

#[cfg(test)]
mod test {
    use super::Memo;
    use super::TABLE;
    use crate::bitboard::bits::Bits;
    use crate::bitboard::Bitboard;
    use crate::value::Value;

    #[test]
    fn test() {
        TABLE.with(|cell| {
            let v1 = Value::new(1);
            let v2 = Value::new(2);
            let m1 = Memo {
                lower: v1,
                upper: v2,
                best_idx: 1,
            };
            let m2 = Memo {
                lower: v1,
                upper: v2,
                best_idx: 2,
            };
            let m3 = Memo {
                lower: v1,
                upper: v2,
                best_idx: 3,
            };
            let m4 = Memo {
                lower: v1,
                upper: v2,
                best_idx: 4,
            };

            assert_eq!(None, cell.borrow().lookup(Bitboard::EMPTY_BOARD));

            cell.borrow_mut().set(Bitboard::EMPTY_BOARD, m1);
            assert_eq!(Some(m1), cell.borrow().lookup(Bitboard::EMPTY_BOARD));

            cell.borrow_mut().set(Bitboard::EMPTY_BOARD, m2);
            assert_eq!(Some(m2), cell.borrow().lookup(Bitboard::EMPTY_BOARD));

            let mut board1 = Bitboard::EMPTY_BOARD;
            board1.black = Bits::new(31);
            let mut board2 = Bitboard::EMPTY_BOARD;
            board2.white = Bits::new(17);
            cell.borrow_mut().set(board1, m3);
            cell.borrow_mut().set(board2, m4);
            assert_eq!(Some(m3), cell.borrow().lookup(board1));
            assert_eq!(Some(m4), cell.borrow().lookup(board2));

            cell.borrow_mut().flush();
        })
    }
}

use super::succinct::SuccinctBitVector;

#[derive(Debug)]
pub struct LOUDS {
    succ_table: SuccinctBitVector<'static>,
}

#[derive(Debug, Clone, Copy)]
pub struct Cursor<'a> {
    pub louds: &'a LOUDS,
    pub node_id: u64,
}

impl LOUDS {
    pub fn new(data: &'static [u8]) -> LOUDS {
        LOUDS {
            succ_table: SuccinctBitVector::new(data),
        }
    }

    pub fn root_cursor(&self) -> Cursor {
        Cursor {
            louds: &self,
            node_id: 1,
        }
    }
}

impl<'a> Cursor<'a> {
    pub fn child_count(&self) -> u64 {
        let i = self.louds.succ_table.select0(self.node_id);
        let mut len = 0;
        while self.louds.succ_table.testbit(i + len) {
            len += 1;
        }
        return len;
    }

    pub fn get_child(&self, child: u64) -> Cursor<'a> {
        let i = self.louds.succ_table.select0(self.node_id) + 1;
        let index = i + child;
        let child_node_id = self.louds.succ_table.rank1(index);
        Cursor {
            louds: self.louds,
            node_id: child_node_id,
        }
    }
}

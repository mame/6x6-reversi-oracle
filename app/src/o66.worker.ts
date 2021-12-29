import { get_black_moves, get_white_move } from '../../core/pkg/o66.js';

const process = (moves: number[]) => {
  const data = new Int8Array(moves);
  let ret;
  if (moves.length % 2 == 0) {
    ret = get_black_moves(data);
  } else {
    ret = get_white_move(data);
  }
  self.postMessage([moves, ret]);
};

self.addEventListener('message', (e: MessageEvent) => {
  process(e.data);
});

process([]);

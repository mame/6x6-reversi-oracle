import O66Worker from './o66.worker.ts';

type BlackMovesListener = (
  moves: number[],
  blackMoves: [number, number][]
) => void;
type WhiteMoveListener = (moves: number[], whiteMove: number) => void;

type Query = {
  request: (moves: number[]) => void;
};

export const init = (
  blackMovesListener: BlackMovesListener,
  whiteMoveListener: WhiteMoveListener
): Query => {
  const worker = new O66Worker();

  worker.addEventListener('message', (e) => {
    const moves = e.data[0];
    const arg = e.data[1];
    if (typeof arg == 'object') {
      // black moves
      const result = arg as Int8Array;
      const blackMoves: [number, number][] = [];
      for (let i = 0; i < result.length; i += 2) {
        blackMoves.push([result[i], result[i + 1]]);
      }
      blackMovesListener(moves, blackMoves);
    } else if (typeof arg == 'number') {
      // white move
      whiteMoveListener(moves, arg);
    }
  });

  return {
    request: (moves: number[]) => worker.postMessage(moves),
  };
};

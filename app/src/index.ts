import * as UI from './ui';
import * as Query from './query';
import * as Board from './board';

const doBlackMove = (moves: number[], blackMove: number) => {
  const newMoves = moves.slice().concat([blackMove]);
  query.request(newMoves);
  ui.enqueue(newMoves, Board.createBoard(newMoves));
};

const ui = UI.init(doBlackMove);

const blackMovesListener = (
  moves: number[],
  blackMoves: [number, number][]
) => {
  if (blackMoves[0][0] < 0 && moves[moves.length - 1] < 0) {
    // double pass; game over
    ui.enqueue(moves, Board.createBoard(moves));
    const newMoves = moves.slice().concat([-1]);
    ui.enqueue(newMoves, Board.createBoard(newMoves));
  } else {
    ui.enqueue(moves, Board.createBlackBoard(moves, blackMoves));

    if (blackMoves[0][0] < 0) {
      // black pass
      doBlackMove(moves, -1);
    }
  }
};

const whiteMoveListener = (moves: number[], whiteMove: number) => {
  const newMoves = moves.slice().concat([whiteMove]);
  query.request(newMoves);
};

const query = Query.init(blackMovesListener, whiteMoveListener);

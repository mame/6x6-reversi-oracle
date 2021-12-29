type Disc = 'black' | 'white';

type CellState = DiscState | EmptyState;

type DiscState = {
  kind: Disc;
  state:
    | { kind: 'still' }
    | { kind: 'placing' }
    | { kind: 'turning'; dir: number; order: number };
};

type EmptyState = {
  kind: 'empty';
  state: { kind: 'unplaceable' } | { kind: 'placeable'; value: number };
};

export type Board = CellState[][];

const createInitBoard = (): Board => {
  const board: Board = [];
  for (let y = 0; y < 6; y++) {
    board[y] = [];
    for (let x = 0; x < 6; x++) {
      board[y][x] = { kind: 'empty', state: { kind: 'unplaceable' } };
    }
  }
  board[2][2] = { kind: 'white', state: { kind: 'turning', dir: 7, order: 0 } };
  board[2][3] = { kind: 'black', state: { kind: 'turning', dir: 5, order: 0 } };
  board[3][2] = { kind: 'black', state: { kind: 'turning', dir: 1, order: 0 } };
  board[3][3] = { kind: 'white', state: { kind: 'turning', dir: 3, order: 0 } };
  return board;
};

const DIRS: [number, number][] = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

const flipLine = (
  board: Board,
  curDisc: Disc,
  oppositeDisc: Disc,
  x: number,
  y: number,
  dir: number,
  order: number
) => {
  const [dx, dy] = DIRS[dir];
  x += dx;
  y += dy;
  if (x < 0 || 5 < x || y < 0 || 5 < y) return false;
  switch (board[y][x].kind) {
    case curDisc:
      return true;
    case oppositeDisc:
      if (flipLine(board, curDisc, oppositeDisc, x, y, dir, order + 1)) {
        board[y][x] = { kind: curDisc, state: { kind: 'turning', dir, order } };
        return true;
      }
      return false;
    default:
      // empty
      return false;
  }
};

export const createBoard = (moves: number[]): Board => {
  let board = createInitBoard();
  let curDisc: Disc = 'black';
  let oppositeDisc: Disc = 'white';

  for (const move of moves) {
    const nboard: Board = board.map((line) =>
      line.map(({ kind: kind }) =>
        kind == 'empty'
          ? { kind, state: { kind: 'unplaceable' } }
          : { kind, state: { kind: 'still' } }
      )
    );

    if (move >= 0) {
      const x = move % 6;
      const y = Math.floor(move / 6);
      for (let dir = 0; dir < 8; dir++) {
        flipLine(nboard, curDisc, oppositeDisc, x, y, dir, 0);
      }
      nboard[y][x] = { kind: curDisc, state: { kind: 'placing' } };
    }

    board = nboard;

    const tmp: Disc = curDisc;
    curDisc = oppositeDisc;
    oppositeDisc = tmp;
  }

  return board;
};

export const createBlackBoard = (
  moves: number[],
  blackMoves: [number, number][]
): Board => {
  const board = createBoard(moves);
  for (const [blackMove, blackValue] of blackMoves) {
    if (blackMove < 0) break; // pass
    const x = blackMove % 6;
    const y = Math.floor(blackMove / 6);
    if (board[y][x].kind == 'empty') {
      board[y][x].state = { kind: 'placeable', value: blackValue };
    }
  }
  return board;
};

export const checkBlackPlaceable = (board: Board) => {
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 6; x++) {
      const cell = board[y][x];
      if (cell.kind == 'empty' && cell.state.kind == 'placeable') {
        return true;
      }
    }
  }
  return false;
};

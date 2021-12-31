import * as Board from './board';
import * as View from './ui/view';
import * as Info from './ui/info';

type BlackMoveListener = (moves: number[], move: number) => void;

type State = {
  moves: number[];
  board: Board.Board;
};

type StateStack = {
  state: State;
  prevHead: StateStack | null;
};

const initialBlackMoves: [number, number][] = [
  [8, -4],
  [13, -4],
  [22, -4],
  [27, -4],
];

export const init = (blackMoveListener: BlackMoveListener) => {
  const queue: State[] = [];

  const onDOMContentLoaded = () => {
    const view = View.init();
    const info = Info.init();

    let head: StateStack = {
      state: {
        moves: [],
        board: Board.createBlackBoard([], initialBlackMoves),
      },
      prevHead: null,
    };
    let startTime = Date.now();

    const checkGameOver = (moves: number[]) => {
      const len = moves.length;
      return len >= 2 && moves[len - 2] < 0 && moves[len - 1] < 0;
    };

    const deployState = () => {
      let black = 0;
      let white = 0;
      let value: number | null = null;
      const scores: (number | null)[] = [];
      for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 6; x++) {
          const cell = head.state.board[y][x];
          let score: number | null = null;
          switch (cell.kind) {
            case 'black':
              black++;
              break;
            case 'white':
              white++;
              break;
            case 'empty':
              if (cell.state.kind == 'placeable') {
                score = cell.state.value;
                value = value ? Math.max(value, score) : score;
              }
          }
          scores.push(score);
        }
      }
      view.updateValues(scores);
      info.update(checkGameOver(head.state.moves), black, white, value);
    };

    deployState();

    const updateState = (newState: State) => {
      head = {
        state: newState,
        prevHead: head,
      };
      deployState();
    };

    const dequeue = () => {
      while (queue.length >= 1) {
        const { moves, board } = queue.shift()!;
        if (
          head.state.moves.length == moves.length - 1 &&
          head.state.moves.every((move, i) => move == moves[i])
        ) {
          startTime = Date.now();
          updateState({ moves, board });
          return;
        }
      }
    };

    const onClick = (e: Event) => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 500) return;

      if (!(e instanceof MouseEvent)) return;

      const x = (e.offsetX / window.innerWidth) * 2 - 1;
      const y = (e.offsetY / window.innerHeight) * 2 - 1;
      const idx = view.pickCell(x, y);

      if (idx !== null) {
        const x = idx % 6;
        const y = Math.floor(idx / 6);
        const cell = head.state.board[y][x];
        if (cell.kind == 'empty' && cell.state.kind == 'placeable') {
          blackMoveListener(head.state.moves, idx);
        }
      }
    };

    const modal = document.querySelector('#about-modal')!;
    const onAbout = () => {
      modal.classList.toggle('modal-enabled');
    };
    modal.addEventListener('click', onAbout);

    const onUndo = () => {
      if (head.prevHead === null) return;
      head = head.prevHead;
      while (head.prevHead) {
        const { state, prevHead } = head;
        head = prevHead;
        if (Board.checkBlackPlaceable(state.board)) {
          return updateState(state);
        }
      }
      return updateState(head.state);
    };

    const onResize = () => {
      view.resize(window.innerWidth, window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);

    view.setAnimationLoop(() => {
      let elapsed = Date.now() - startTime;
      if (elapsed > 500) dequeue();
      elapsed = Date.now() - startTime;

      view.tick(head.state.board, elapsed);
    });

    const container = document.querySelector('#canvas-container')!;
    container.appendChild(view.getDomElement());
    container.addEventListener('click', onClick);

    const about = document.querySelector('#about-button')!;
    about.addEventListener('click', onAbout);

    const undo = document.querySelector('#undo-button')!;
    undo.addEventListener('click', onUndo);
  };
  window.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  return {
    enqueue: (moves: number[], board: Board.Board) => {
      queue.push({ moves, board });
    },
  };
};

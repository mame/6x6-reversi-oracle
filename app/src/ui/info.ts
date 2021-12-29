export type Info = {
  update: (
    gameOverFlag: boolean,
    black: number,
    white: number,
    value: number | null
  ) => void;
};

export const init = (): Info => {
  const blackDiscCount = document.querySelector('#black-disc-count')!;
  const whiteDiscCount = document.querySelector('#white-disc-count')!;

  const blackPercent = document.querySelector('#black-percent')!;
  const whitePercent = document.querySelector('#white-percent')!;
  const evaluator: HTMLSpanElement = document.querySelector('#evaluator')!;

  const info: HTMLSpanElement = document.querySelector('#info')!;
  const message: HTMLSpanElement = document.querySelector('#message')!;
  const thinking: HTMLSpanElement = document.querySelector('#thinking')!;

  let targetPercent = 50;
  let currentPercent = 50;

  const tick = () => {
    currentPercent = (currentPercent * 9 + targetPercent) / 10;
    const f = Math.round(currentPercent);
    blackPercent.textContent = `${100 - f}%`;
    whitePercent.textContent = `${f}%`;
    evaluator.style.width = `${currentPercent}%`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  return {
    update: (
      gameOver: boolean,
      black: number,
      white: number,
      value: number | null
    ) => {
      if (gameOver) {
        info.style.display = 'none';
        message.style.display = 'inline';
        thinking.style.display = 'none';
      } else {
        info.style.display = 'flex';
        message.style.display = 'none';
        thinking.style.display = value !== null ? 'none' : 'inline';
      }
      blackDiscCount.textContent = '' + black;
      whiteDiscCount.textContent = '' + white;
      if (value !== null) {
        targetPercent = ((36 + 1 - value) / (72 + 2)) * 100;
      }
    },
  };
};

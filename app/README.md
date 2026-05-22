# 6x6-reversi-oracle / app

Frontend for the 6x6-reversi-oracle, built with [Vite](https://vitejs.dev/) +
TypeScript + [Three.js](https://threejs.org/). Calls into the Rust/WASM core in
`../core/pkg` (build it first with `wasm-pack build`).

## Develop

```
npm install
npm run dev      # http://localhost:5173
```

## Build for deployment

```
npm run build    # outputs to ../docs
npm run preview  # serve the built site locally
```

`base: './'` is set in `vite.config.ts` so the build is portable — it works
from `https://mame.github.io/6x6-reversi-oracle/` (GitHub Pages) and from any
other path.

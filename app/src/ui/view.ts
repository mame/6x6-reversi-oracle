import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as Board from '../board';
import * as Discs from './discs';
import * as Cells from './cells';
import * as Frame from './frame';
import * as Values from './values';

export type View = {
  getDomElement: () => HTMLCanvasElement;
  setAnimationLoop: (tick: () => void) => void;
  resize: (width: number, height: number, pixelRatio: number) => void;
  tick: (board: Board.Board, elapsed: number) => void;
  updateValues: (values: (number | null)[]) => void;
  pickCell: (x: number, y: number) => number | null;
};

export const init = (): View => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(600, 600);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xffffff, 5, 40);

  const legacyIntensity = (i: number) => Math.pow(i, 2.2) * Math.PI;

  const ambientLight = new THREE.AmbientLight(0xffffff, legacyIntensity(0.5));
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, legacyIntensity(1));
  spotLight.position.set(10, -10, 20);
  spotLight.angle = 0.15;
  spotLight.penumbra = 1;
  spotLight.decay = 0;
  scene.add(spotLight);

  const pointLight = new THREE.PointLight(0xffffff, legacyIntensity(1));
  pointLight.position.set(-10, 10, -10);
  scene.add(pointLight);

  const boardLight = new THREE.SpotLight(0xffffff, legacyIntensity(0.95));
  boardLight.position.set(5, 18, 5);
  boardLight.angle = 0.2;
  boardLight.penumbra = 1;
  boardLight.decay = 0;
  scene.add(boardLight);

  const defaultFov = 50;
  const camera = new THREE.PerspectiveCamera();
  camera.fov = defaultFov;
  camera.position.set(0, 10, 2);
  camera.lookAt(0, 0, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.maxPolarAngle = Math.PI / 3;

  const discs = Discs.init(scene);
  const cells = Cells.init(scene);
  const values = Values.init(scene);
  Frame.init(scene);

  return {
    getDomElement: () => renderer.domElement,
    setAnimationLoop: (tick: () => void) => renderer.setAnimationLoop(tick),
    resize: (width: number, height: number, pixelRatio: number) => {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height);
      camera.aspect = width / height;
      if (width > height) {
        camera.fov = defaultFov;
      } else {
        const f = ((defaultFov / 2) * Math.PI) / 180;
        camera.fov =
          2 * Math.atan2(height * Math.sin(f), width * Math.cos(f)) * 180 /
          Math.PI;
      }
      camera.updateProjectionMatrix();
    },
    tick: (board: Board.Board, elapsed: number) => {
      discs.tick(board, elapsed);
      cells.tick(board, elapsed);
      controls.update();
      renderer.render(scene, camera);
    },
    updateValues: values.update,
    pickCell: (x: number, y: number) => {
      return cells.pick(camera, x, y, discs.getMeshes());
    },
  };
};

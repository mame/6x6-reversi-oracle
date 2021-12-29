import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import * as Board from '../board';
import * as Discs from './discs';
import * as Cells from './cells';
import * as Frame from './frame';
import * as Values from './values';

export type View = {
  getDomElement: () => HTMLCanvasElement;
  setAnimationLoop: (tick: () => void) => void;
  resize: (width: number, height: number) => void;
  tick: (board: Board.Board, elapsed: number) => void;
  updateValues: (values: (number | null)[]) => void;
  pickCell: (x: number, y: number) => number | null;
};

export const init = (): View => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(600, 600);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xffffff, 5, 40);

  const ambientLight = new THREE.AmbientLight();
  ambientLight.intensity = 0.5;
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight();
  spotLight.position.set(10, -10, 20);
  spotLight.angle = 0.15;
  spotLight.penumbra = 1;
  scene.add(spotLight);

  const pointLight = new THREE.PointLight();
  pointLight.position.set(-10, 10, -10);
  scene.add(pointLight);

  const camera = new THREE.PerspectiveCamera();
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
    resize: (width: number, height: number) => {
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      camera.aspect = width / height;
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

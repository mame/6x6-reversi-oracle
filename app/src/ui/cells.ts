import * as THREE from 'three';
import * as Board from '../board';

export type Cells = {
  tick: (board: Board.Board, elapsed: number) => void;
  pick: (
    camera: THREE.Camera,
    x: number,
    y: number,
    obstacles: THREE.Mesh[]
  ) => number | null;
};

export const init = (scene: THREE.Scene): Cells => {
  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshStandardMaterial();
  const cellsMesh = new THREE.InstancedMesh(geometry, material, 6 * 6);

  scene.add(cellsMesh);

  const tmpObject = new THREE.Object3D();
  const tmpColor = new THREE.Color();

  return {
    tick: (board: Board.Board, elapsed: number) => {
      const scores: (number | null)[] = [];
      const opacity = Math.min(Math.max((elapsed - 500) / 500, 0), 1);

      for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 6; x++) {
          const cell = board[y][x];
          const id = x + y * 6;

          let score: number | null = null;
          if (cell.kind == 'empty' && cell.state.kind == 'placeable') {
            score = cell.state.value;
          }
          scores.push(score);

          tmpObject.position.set(x - 2.5, 0, y - 2.5);
          tmpObject.rotation.x = -Math.PI / 2;
          tmpObject.rotation.y = 0;
          tmpObject.rotation.z = 0;
          tmpObject.scale.setScalar(1);
          tmpObject.updateMatrix();

          cellsMesh.setMatrixAt(id, tmpObject.matrix);

          const f =
            cell.kind == 'empty' && cell.state.kind == 'placeable'
              ? opacity
              : 0;

          tmpColor.setRGB(
            THREE.MathUtils.lerp(0x2e, 0x09, f) / 255,
            THREE.MathUtils.lerp(0x67, 0xee, f) / 255,
            THREE.MathUtils.lerp(0x4c, 0x96, f) / 255
          );
          cellsMesh.setColorAt(id, tmpColor);
        }
      }
      cellsMesh.instanceMatrix.needsUpdate = true;
      if (cellsMesh.instanceColor) cellsMesh.instanceColor.needsUpdate = true;
    },
    pick: (
      camera: THREE.Camera,
      x: number,
      y: number,
      obstacles: THREE.Mesh[]
    ): number | null => {
      const mouse = new THREE.Vector2();
      mouse.x = x;
      mouse.y = -y;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const targets = [cellsMesh as THREE.Mesh].concat(obstacles);
      const intersects = raycaster.intersectObjects(targets);
      if (intersects.length > 0 && intersects[0].object == cellsMesh) {
        const id = intersects[0].instanceId;
        return typeof id === 'undefined' ? null : id;
      }
      return null;
    },
  };
};

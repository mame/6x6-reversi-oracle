import * as THREE from 'three';
import * as Board from '../board';

const N = 32;
const height = 0.2;

const genGeometries = () => {
  const blackVertices: number[] = [];

  blackVertices.push(0, height, 0);
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    blackVertices.push(Math.sin(a), height, Math.cos(a));
  }
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    blackVertices.push(Math.sin(a), height, Math.cos(a));
  }
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    blackVertices.push(Math.sin(a), 0.0, Math.cos(a));
  }

  const blackIndices: number[] = [];

  for (let i = 0; i < N; i++) {
    blackIndices.push(0);
    blackIndices.push(i + 1);
    blackIndices.push(((i + 1) % N) + 1);
  }
  for (let i = 0; i < N; i++) {
    blackIndices.push(i + N + 1);
    blackIndices.push(i + N + 1 + N);
    blackIndices.push(((i + 1) % N) + N + 1);

    blackIndices.push(((i + 1) % N) + N + 1);
    blackIndices.push(i + N + 1 + N);
    blackIndices.push(((i + 1) % N) + N + 1 + N);
  }

  const blackDiscsGeometry = new THREE.BufferGeometry();
  blackDiscsGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(blackVertices), 3)
  );
  blackDiscsGeometry.setIndex(blackIndices);
  blackDiscsGeometry.computeVertexNormals();
  blackDiscsGeometry.scale(0.4, 0.4, 0.4);

  const whiteDiscsGeometry = blackDiscsGeometry.clone();
  whiteDiscsGeometry.rotateX(Math.PI);

  return [blackDiscsGeometry, whiteDiscsGeometry];
};

export type Discs = {
  tick: (board: Board.Board, elapsed: number) => void;
  getMeshes: () => THREE.Mesh[];
};

export const init = (scene: THREE.Scene): Discs => {
  const meshes: THREE.InstancedMesh[] = [];
  const geometries = genGeometries();

  for (let i = 0; i < 2; i++) {
    const geometry = geometries[i];

    const material =
      i == 0
        ? new THREE.MeshPhongMaterial({ color: '#333333' })
        : new THREE.MeshLambertMaterial({ color: '#cccccc' });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, 6 * 6);
    scene.add(instancedMesh);
    meshes.push(instancedMesh);
  }

  const blackDiscsMesh = meshes[0];
  const whiteDiscsMesh = meshes[1];

  const tmpObject = new THREE.Object3D();

  return {
    tick: (board: Board.Board, elapsed: number) => {
      for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 6; x++) {
          const cell = board[y][x];

          if (cell.kind == 'empty') {
            tmpObject.scale.setScalar(0);
          } else {
            tmpObject.position.set(x - 2.5, 0.4 * 0.2, y - 2.5);
            tmpObject.rotation.x = 0;
            tmpObject.rotation.y = 0;
            tmpObject.rotation.z = cell.kind == 'black' ? 0 : Math.PI;
            tmpObject.scale.setScalar(1);
            switch (cell.state.kind) {
              case 'placing': {
                const f = Math.max(Math.min(1, (elapsed - 100) / 100), 0);
                tmpObject.scale.setScalar(f);
                break;
              }
              case 'turning': {
                const f0 = cell.state.order * 50 + 300 - elapsed;
                const f = Math.min(Math.max(0, f0), 300) / 300;
                const angle = f * Math.PI;
                const dir = (cell.state.dir * Math.PI) / 4;
                tmpObject.rotation.y = dir;
                tmpObject.rotation.z -= angle;
                tmpObject.position.y -= -Math.sin(angle);
                const t = Math.cos(angle) - 1 + 2 - Math.pow(1 - f, 2) * 2;
                tmpObject.position.x -= Math.cos(-dir) * t;
                tmpObject.position.z -= Math.sin(-dir) * t;
                break;
              }
            }
          }
          tmpObject.updateMatrix();

          const id = x + y * 6;
          blackDiscsMesh.setMatrixAt(id, tmpObject.matrix);
          whiteDiscsMesh.setMatrixAt(id, tmpObject.matrix);
        }
      }
      blackDiscsMesh.instanceMatrix.needsUpdate = true;
      whiteDiscsMesh.instanceMatrix.needsUpdate = true;
    },
    getMeshes: () => [blackDiscsMesh, whiteDiscsMesh],
  };
};

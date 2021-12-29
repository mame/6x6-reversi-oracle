import * as THREE from 'three';
import { PlaneBufferGeometry } from 'three';

const genGeometry = () => {
  const vertices: number[] = [];

  for (let i = -2; i <= 2; i++) {
    // grid
    vertices.push(i - 0.01, 0.01, -3);
    vertices.push(i - 0.01, 0.01, 3);
    vertices.push(i + 0.01, 0.01, -3);
    vertices.push(i + 0.01, 0.01, 3);

    vertices.push(-3, 0.01, i - 0.01);
    vertices.push(-3, 0.01, i + 0.01);
    vertices.push(3, 0.01, i - 0.01);
    vertices.push(3, 0.01, i + 0.01);
  }

  const axis = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < 4; i++) {
    const ary = [
      new THREE.Vector3(3 - 0.01, 0.01, -3 + 0.01),
      new THREE.Vector3(3 - 0.01, 0.01, 3 - 0.01),
      new THREE.Vector3(3.3, 0.01, 3.3),
      new THREE.Vector3(3.3, 0.01, -3.3),
      new THREE.Vector3(3.7, -0.4, 3.7),
      new THREE.Vector3(3.7, -0.4, -3.7),
    ];
    for (const v of ary) {
      const vv = v.applyAxisAngle(axis, (Math.PI / 2) * i);
      vertices.push(...vv.toArray());
    }
  }

  const indices: number[] = [];

  for (let i = 0; i < 5; i++) {
    indices.push(i * 8, i * 8 + 1, i * 8 + 2);
    indices.push(i * 8 + 1, i * 8 + 3, i * 8 + 2);
    indices.push(i * 8 + 4, i * 8 + 5, i * 8 + 6);
    indices.push(i * 8 + 5, i * 8 + 7, i * 8 + 6);
  }
  for (let i = 0; i < 4; i++) {
    indices.push(40 + i * 6, 41 + i * 6, 42 + i * 6);
    indices.push(40 + i * 6, 42 + i * 6, 43 + i * 6);
    indices.push(42 + i * 6, 44 + i * 6, 43 + i * 6);
    indices.push(44 + i * 6, 45 + i * 6, 43 + i * 6);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(vertices), 3)
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
};

export const init = (scene: THREE.Scene) => {
  const geometry = genGeometry();
  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({ color: '#333333' });

  scene.add(new THREE.Mesh(geometry, material));

  const floor_geometry = new PlaneBufferGeometry(1000, 1000);
  floor_geometry.rotateX(-Math.PI / 2);
  floor_geometry.translate(0, -0.4, 0);
  const floor_material = new THREE.MeshLambertMaterial({ color: '#DED2BF' });
  scene.add(new THREE.Mesh(floor_geometry, floor_material));
};

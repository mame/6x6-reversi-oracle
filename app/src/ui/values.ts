import * as THREE from 'three';

export type Values = {
  update: (values: (number | null)[]) => void;
};

export const init = (scene: THREE.Scene): Values => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 600;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw 'failed to getContext of canvas';

  ctx.fillStyle = '#2e674c';
  ctx.font = '16px sans-serif';
  const geometry = new THREE.PlaneGeometry(6, 6);
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.001;

  scene.add(mesh);

  return {
    update: (values: (number | null)[]) => {
      ctx.clearRect(0, 0, 600, 600);
      for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 6; x++) {
          const value = values[x + y * 6];
          if (value !== null) {
            const str = '' + value;
            ctx.fillText(
              str,
              100 * x + 100 - ctx.measureText(str).width - 4,
              100 * y + 100 - 8
            );
          }
        }
      }
      if (material.map) material.map.needsUpdate = true;
    },
  };
};

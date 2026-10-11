import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FluidCoreCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic Liquid Chrome Sphere Geometry
    const geometry = new THREE.IcosahedronGeometry(1.8, 32);
    const originalPositions = Float32Array.from(geometry.attributes.position.array);

    // Custom Shader / Physical Material with metallic reflections
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x111318,
      emissive: 0x05070a,
      roughness: 0.12,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      reflectivity: 0.9,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Surrounding Dynamic Light Ring
    const ringGeom = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe0e7ff,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Multi-color Dramatic Lighting (Acid Lime, Liquid Silver, Electric Violet)
    const light1 = new THREE.PointLight(0xc6ff00, 3.5, 20); // Acid Lime
    light1.position.set(4, 3, 3);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x818cf8, 4.0, 20); // Electric Indigo
    light2.position.set(-4, -2, 2);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 2.0); // Liquid White Rim
    light3.position.set(0, 5, 4);
    scene.add(light3);

    const ambientLight = new THREE.AmbientLight(0x0a0d14, 1.2);
    scene.add(ambientLight);

    // Interactive mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) * 0.001;

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Ripple vertex noise displacement on the sphere
      const positions = geometry.attributes.position.array;
      const waveSpeed = time * 1.8;
      const waveFreq = 2.2;
      const distortion = 0.22 + Math.abs(targetX) * 0.15;

      for (let i = 0; i < positions.length; i += 3) {
        const ox = originalPositions[i];
        const oy = originalPositions[i + 1];
        const oz = originalPositions[i + 2];

        // 3D noise simulation
        const noise =
          Math.sin(ox * waveFreq + waveSpeed) *
          Math.cos(oy * waveFreq + waveSpeed * 0.8) *
          Math.sin(oz * waveFreq + waveSpeed * 1.2);

        const factor = 1 + noise * distortion;
        positions[i] = ox * factor;
        positions[i + 1] = oy * factor;
        positions[i + 2] = oz * factor;
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();

      // Dynamic rotation
      sphere.rotation.y = time * 0.25 + targetX * 0.8;
      sphere.rotation.x = time * 0.15 + targetY * 0.6;

      ring.rotation.z = time * 0.3;
      ring.rotation.x = Math.PI / 3 + targetY * 0.3;
      ring.rotation.y = targetX * 0.4;

      // Move light sources around sphere
      light1.position.x = Math.sin(time * 0.8) * 4 + targetX * 2;
      light1.position.y = Math.cos(time * 0.8) * 3 + targetY * 2;

      camera.position.x = targetX * 0.5;
      camera.position.y = -targetY * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        right: '-5%',
        width: '65vw',
        height: '100vh',
        maxWidth: '900px',
        maxHeight: '900px',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.9,
      }}
      aria-hidden="true"
    />
  );
}

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Holographic Central Polyhedron (Icosahedron + Wireframe)
    const geometry = new THREE.IcosahedronGeometry(2.2, 1);
    
    // Wireframe Outer Mesh
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const icosahedronWire = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(icosahedronWire);

    // Inner Glowing Points Mesh
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x7928ca,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
    });
    const icosahedronPoints = new THREE.Points(geometry, pointsMaterial);
    scene.add(icosahedronPoints);

    // Inner Core Sphere
    const innerGeom = new THREE.SphereGeometry(1.2, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00599c,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerCore);

    // 2. Floating Starfield / Particle Cloud
    const particleCount = 700;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f2fe);
    const color2 = new THREE.Color(0x7928ca);
    const color3 = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;

      const randomVal = Math.random();
      const pColor = randomVal > 0.6 ? color1 : randomVal > 0.3 ? color2 : color3;
      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });
    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleCloud);

    // 3. Mouse Parallax Reaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate objects
      icosahedronWire.rotation.x = elapsedTime * 0.15 + targetY * 0.5;
      icosahedronWire.rotation.y = elapsedTime * 0.2 + targetX * 0.5;

      icosahedronPoints.rotation.x = -elapsedTime * 0.12 - targetY * 0.3;
      icosahedronPoints.rotation.y = -elapsedTime * 0.18 - targetX * 0.3;

      innerCore.rotation.x = elapsedTime * 0.25;
      innerCore.rotation.z = elapsedTime * 0.2;

      // Particle subtle flow & drift
      particleCloud.rotation.y = elapsedTime * 0.03 + targetX * 0.2;
      particleCloud.rotation.x = elapsedTime * 0.02 + targetY * 0.1;

      // Gentle camera sway
      camera.position.x = targetX * 0.8;
      camera.position.y = -targetY * 0.8;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}

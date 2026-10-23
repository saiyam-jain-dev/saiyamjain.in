import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 0, 0);

    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    container.appendChild(renderer.domElement);

    // ========================================================
    // 2. THE GIANT AI NEURAL CORE (GLOBAL BACKGROUND THEME)
    // ========================================================
    const coreRoot = new THREE.Group();
    coreRoot.position.set(0, 0, 0);
    scene.add(coreRoot);

    // A. Center Glowing Light Nucleus
    const nucleusGeo = new THREE.SphereGeometry(1.6, 32, 32);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreRoot.add(nucleus);

    // B. Inner Glowing Geodesic Wireframe (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(4.0, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x0891b2,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.45,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreRoot.add(innerCore);

    // C. Outer Geometric Lattice Cage (Dodecahedron)
    const outerGeo = new THREE.DodecahedronGeometry(5.6, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.7,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.3,
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    coreRoot.add(outerCore);

    // D. Massive Gyroscopic Orbital Torus Rings
    const ringGroup = new THREE.Group();
    coreRoot.add(ringGroup);

    // Ring 1 (Cyan)
    const ringGeo1 = new THREE.TorusGeometry(7.4, 0.04, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringGroup.add(ring1);

    // Ring 2 (Magenta / Hot Pink)
    const ringGeo2 = new THREE.TorusGeometry(8.8, 0.035, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 3;
    ringGroup.add(ring2);

    // Ring 3 (Emerald Green)
    const ringGeo3 = new THREE.TorusGeometry(10.2, 0.03, 16, 120);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.y = Math.PI / 4;
    ringGroup.add(ring3);

    // E. Orbiting Satellite Beacons on Rings
    const satGroup = new THREE.Group();
    coreRoot.add(satGroup);
    const satGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
    });

    const satellites = [];
    for (let i = 0; i < 9; i++) {
      const mesh = new THREE.Mesh(satGeo, satMat);
      satGroup.add(mesh);
      satellites.push({
        mesh,
        radius: 7.4 + (i % 3) * 1.4,
        speed: 0.5 + i * 0.08,
        offset: (i * Math.PI * 2) / 9,
        plane: i % 3,
      });
    }

    // ========================================================
    // 3. CYBER MATRIX GROUND WAVE
    // ========================================================
    const gridWidth = 70;
    const gridDepth = 70;
    const gridSegments = isMobile ? 22 : 44;
    const terrainGeometry = new THREE.PlaneGeometry(gridWidth, gridDepth, gridSegments, gridSegments);
    terrainGeometry.rotateX(-Math.PI / 2);

    const posAttribute = terrainGeometry.attributes.position;
    const originalPositions = new Float32Array(posAttribute.array);

    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x312e81,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0.35,
    });
    const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrainMesh.position.y = -6.5;
    scene.add(terrainMesh);

    // ========================================================
    // 4. FLOATING STAR / NEURAL PARTICLE CLOUD
    // ========================================================
    const particleCount = isMobile ? 320 : 750;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorPurple = new THREE.Color(0xa855f7);
    const colorPink = new THREE.Color(0xec4899);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 1] = Math.random() * 30 - 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const mixed = colorCyan.clone().lerp(colorPurple, Math.random()).lerp(colorPink, Math.random() * 0.3);
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // ========================================================
    // 5. LIGHTING (Soft Stealth Ambiance)
    // ========================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const centerLight = new THREE.PointLight(0x06b6d4, 3.5, 30);
    centerLight.position.set(0, 0, 0);
    scene.add(centerLight);

    const lightCyan = new THREE.PointLight(0x06b6d4, 2.5, 35);
    lightCyan.position.set(-10, 8, 8);
    scene.add(lightCyan);

    const lightPurple = new THREE.PointLight(0xa855f7, 2.5, 35);
    lightPurple.position.set(10, -6, 8);
    scene.add(lightPurple);

    // ========================================================
    // 6. INTERACTION & PARALLAX
    // ========================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ========================================================
    // 7. ANIMATION LOOP
    // ========================================================
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Animate Inner Core & Lattice
      innerCore.rotation.y = time * 0.4;
      innerCore.rotation.x = time * 0.2;

      const pulseScale = 1.0 + Math.sin(time * 2.5) * 0.15;
      nucleus.scale.set(pulseScale, pulseScale, pulseScale);

      outerCore.rotation.y = -time * 0.2;
      outerCore.rotation.z = time * 0.15;

      // Animate Gyroscope Rings
      ring1.rotation.z = time * 0.3;
      ring1.rotation.x = Math.sin(time * 0.35) * 0.45;
      ring2.rotation.y = time * 0.35;
      ring2.rotation.z = Math.cos(time * 0.35) * 0.4;
      ring3.rotation.x = -time * 0.25;
      ring3.rotation.y = Math.sin(time * 0.3) * 0.35;

      // Orbit Satellites
      satellites.forEach((sat) => {
        const angle = time * sat.speed + sat.offset;
        if (sat.plane === 0) {
          sat.mesh.position.set(Math.cos(angle) * sat.radius, Math.sin(angle) * sat.radius, 0);
        } else if (sat.plane === 1) {
          sat.mesh.position.set(Math.cos(angle) * sat.radius, 0, Math.sin(angle) * sat.radius);
        } else {
          sat.mesh.position.set(0, Math.sin(angle) * sat.radius, Math.cos(angle) * sat.radius);
        }
      });

      // Animate Terrain Waves
      const positionArray = terrainGeometry.attributes.position.array;
      for (let i = 0; i < positionArray.length; i += 3) {
        const u = originalPositions[i];
        const v = originalPositions[i + 2];
        const wave = 
          Math.sin(u * 0.22 + time * 1.1) * Math.cos(v * 0.22 + time * 1.1) * 1.1 +
          Math.sin((u + v) * 0.14 + time * 0.7) * 0.7;
        positionArray[i + 1] = originalPositions[i + 1] + wave;
      }
      terrainGeometry.attributes.position.needsUpdate = true;

      // Slowly rotate particle field
      particleSystem.rotation.y = time * 0.03;

      // Smooth Mouse & Scroll Parallax
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      const scrollOffset = scrollY * 0.0025;

      camera.position.x = targetX * 3.0;
      camera.position.y = -targetY * 1.5;
      camera.lookAt(0, 0, 0);

      // Core responds smoothly to mouse and scroll
      coreRoot.rotation.y = targetX * 0.35 + scrollOffset;
      coreRoot.rotation.x = -targetY * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      satGeo.dispose();
      satMat.dispose();
      terrainGeometry.dispose();
      terrainMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef} 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35"
      />
      {/* Soft Vignette Scrim for Maximum Text Legibility */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
    </>
  );
}

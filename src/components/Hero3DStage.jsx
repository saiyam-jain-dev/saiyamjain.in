import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Compass, Zap, Layers, RefreshCw, Box } from 'lucide-react';

export default function Hero3DStage() {
  const mountRef = useRef(null);
  const [activeMode, setActiveMode] = useState('tesseract'); // 'tesseract' | 'matrix' | 'galaxy'
  const modeRef = useRef(activeMode);
  modeRef.current = activeMode;

  const shockwaveTriggerRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    const isMobile = window.innerWidth < 768;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    container.appendChild(renderer.domElement);

    // Main rotating container
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // ==========================================
    // 2. OBJECT 1: QUANTUM TESSERACT (4D HYPERCUBE)
    // ==========================================
    const tesseractGroup = new THREE.Group();
    worldGroup.add(tesseractGroup);

    // Inner Diamond Core (Octahedron)
    const diamondGeo = new THREE.OctahedronGeometry(1.0, 0);
    const diamondMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: false,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0x0891b2,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.85
    });
    const innerDiamond = new THREE.Mesh(diamondGeo, diamondMat);
    tesseractGroup.add(innerDiamond);

    // Inner Cube Wireframe
    const innerBoxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const innerBoxMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.9
    });
    const innerBox = new THREE.Mesh(innerBoxGeo, innerBoxMat);
    tesseractGroup.add(innerBox);

    // Outer Hypercube Lattice (Rotates oppositely)
    const outerBoxGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const outerBoxMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      wireframe: true,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0.65
    });
    const outerBox = new THREE.Mesh(outerBoxGeo, outerBoxMat);
    tesseractGroup.add(outerBox);

    // Corner Vertex Quantum Nodes (8 glowing spheres)
    const cornerNodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const cornerNodeMat = new THREE.MeshBasicMaterial({
      color: 0x5eead4,
      blending: THREE.AdditiveBlending
    });
    const cornerNodes = [];
    const s = 1.2;
    for (let x of [-s, s]) {
      for (let y of [-s, s]) {
        for (let z of [-s, s]) {
          const node = new THREE.Mesh(cornerNodeGeo, cornerNodeMat);
          node.position.set(x, y, z);
          outerBox.add(node);
          cornerNodes.push(node);
        }
      }
    }

    // Energetic Quantum Orbiting Disc
    const discGeo = new THREE.TorusGeometry(2.9, 0.025, 16, 100);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const quantumDisc = new THREE.Mesh(discGeo, discMat);
    quantumDisc.rotation.x = Math.PI / 2.5;
    tesseractGroup.add(quantumDisc);

    // ==========================================
    // 3. OBJECT 2: Cyber Matrix (Warping Grid)
    // ==========================================
    const matrixGroup = new THREE.Group();
    matrixGroup.visible = false;
    worldGroup.add(matrixGroup);

    const planeGeo = new THREE.PlaneGeometry(12, 12, 28, 28);
    planeGeo.rotateX(-Math.PI / 2.5);
    const originalPlanePos = new Float32Array(planeGeo.attributes.position.array);
    const planeMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x312e81,
      emissiveIntensity: 0.6,
    });
    const matrixMesh = new THREE.Mesh(planeGeo, planeMat);
    matrixMesh.position.y = -0.5;
    matrixGroup.add(matrixMesh);

    // Central floating cube in matrix
    const matrixBoxGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const matrixBoxMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      emissive: 0x0891b2,
      emissiveIntensity: 0.7,
    });
    const matrixBox = new THREE.Mesh(matrixBoxGeo, matrixBoxMat);
    matrixGroup.add(matrixBox);

    // ==========================================
    // 4. OBJECT 3: Galaxy Particle Vortex
    // ==========================================
    const galaxyGroup = new THREE.Group();
    galaxyGroup.visible = false;
    worldGroup.add(galaxyGroup);

    const galaxyParticleCount = 1200;
    const galaxyGeo = new THREE.BufferGeometry();
    const galaxyPos = new Float32Array(galaxyParticleCount * 3);
    const galaxyColors = new Float32Array(galaxyParticleCount * 3);

    const color1 = new THREE.Color(0x06b6d4); // Cyan
    const color2 = new THREE.Color(0x8b5cf6); // Purple
    const color3 = new THREE.Color(0xf43f5e); // Rose

    for (let i = 0; i < galaxyParticleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.pow(Math.random(), 1.5) * 3.8 + 0.3;
      const height = (Math.random() - 0.5) * 1.5;

      galaxyPos[i * 3] = Math.cos(angle) * distance;
      galaxyPos[i * 3 + 1] = height;
      galaxyPos[i * 3 + 2] = Math.sin(angle) * distance;

      const mixed = color1.clone().lerp(color2, Math.random()).lerp(color3, Math.random() * 0.3);
      galaxyColors[i * 3] = mixed.r;
      galaxyColors[i * 3 + 1] = mixed.g;
      galaxyColors[i * 3 + 2] = mixed.b;
    }

    galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPos, 3));
    galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));

    const galaxyMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const galaxyPoints = new THREE.Points(galaxyGeo, galaxyMat);
    galaxyGroup.add(galaxyPoints);

    // Ambient floating star dust across all modes
    const dustCount = 350;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 14;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const dustField = new THREE.Points(dustGeo, dustMat);
    scene.add(dustField);

    // ==========================================
    // 5. Lighting
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x06b6d4, 5.5, 20);
    light1.position.set(4, 3, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xd946ef, 5.5, 20);
    light2.position.set(-4, -3, 3);
    scene.add(light2);

    // ==========================================
    // 6. Interactive Mouse & Drag Controls
    // ==========================================
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      rotationVelocity = {
        x: deltaY * 0.005,
        y: deltaX * 0.005,
      };

      worldGroup.rotation.y += rotationVelocity.y;
      worldGroup.rotation.x += rotationVelocity.x;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Shockwave pulse trigger on click
    shockwaveTriggerRef.current = () => {
      rotationVelocity.x += (Math.random() - 0.5) * 0.08;
      rotationVelocity.y += (Math.random() - 0.5) * 0.08;

      innerDiamond.scale.set(1.4, 1.4, 1.4);
      setTimeout(() => {
        innerDiamond.scale.set(1.0, 1.0, 1.0);
      }, 250);
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // ==========================================
    // 7. Animation Loop
    // ==========================================
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Visibility update by mode
      tesseractGroup.visible = modeRef.current === 'tesseract';
      matrixGroup.visible = modeRef.current === 'matrix';
      galaxyGroup.visible = modeRef.current === 'galaxy';

      // Inertia rotation damping
      if (!isDragging) {
        worldGroup.rotation.y += rotationVelocity.y;
        worldGroup.rotation.x += rotationVelocity.x;
        rotationVelocity.x *= 0.94;
        rotationVelocity.y *= 0.94;

        // Base continuous rotation
        worldGroup.rotation.y += 0.004;
      }

      // Animate Tesseract Mode
      if (modeRef.current === 'tesseract') {
        innerDiamond.rotation.y = time * 0.9;
        innerDiamond.rotation.z = time * 0.5;

        innerBox.rotation.y = -time * 0.6;
        innerBox.rotation.x = time * 0.4;

        outerBox.rotation.y = time * 0.35;
        outerBox.rotation.z = -time * 0.25;

        quantumDisc.rotation.z = time * 0.7;
        quantumDisc.rotation.y = Math.sin(time * 0.4) * 0.4;
      }

      // Animate Matrix Mode
      if (modeRef.current === 'matrix') {
        const posArr = planeGeo.attributes.position.array;
        for (let i = 0; i < posArr.length; i += 3) {
          const u = originalPlanePos[i];
          const v = originalPlanePos[i + 1];
          posArr[i + 2] = Math.sin(u * 0.6 + time * 2) * Math.cos(v * 0.6 + time * 2) * 0.7;
        }
        planeGeo.attributes.position.needsUpdate = true;

        matrixBox.rotation.x = time * 0.7;
        matrixBox.rotation.y = time * 0.5;
      }

      // Animate Galaxy Mode
      if (modeRef.current === 'galaxy') {
        galaxyPoints.rotation.y = time * 0.3;
      }

      // Dust floating
      dustField.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] mx-auto rounded-3xl bg-zinc-950/90 border border-cyan-500/30 p-2 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden group touch-pan-y">
      
      {/* 3D Canvas Mounting Point */}
      <div 
        ref={mountRef} 
        onClick={() => shockwaveTriggerRef.current?.()}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      />

      {/* Top HUD Telemetry */}
      <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none text-[9px] sm:text-[10px] font-mono">
        <div className="flex items-center gap-1.5 sm:gap-2 bg-black/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>3D: {activeMode.toUpperCase()}</span>
        </div>

        <div className="bg-black/80 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md text-zinc-400">
          TOUCH / ORBIT
        </div>
      </div>

      {/* Bottom Mode Switcher Controls */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-1 sm:gap-1.5 bg-black/85 p-1 sm:p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
        <button
          onClick={() => { setActiveMode('tesseract'); shockwaveTriggerRef.current?.(); }}
          className={`flex-1 py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-xl text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${
            activeMode === 'tesseract'
              ? 'bg-cyan-500 text-black shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Tesseract
        </button>

        <button
          onClick={() => { setActiveMode('matrix'); shockwaveTriggerRef.current?.(); }}
          className={`flex-1 py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-xl text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${
            activeMode === 'matrix'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Matrix
        </button>

        <button
          onClick={() => { setActiveMode('galaxy'); shockwaveTriggerRef.current?.(); }}
          className={`flex-1 py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-xl text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${
            activeMode === 'galaxy'
              ? 'bg-fuchsia-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Galaxy
        </button>
      </div>

    </div>
  );
}

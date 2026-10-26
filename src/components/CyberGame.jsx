import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, Play, RotateCcw, Volume2, VolumeX, Trophy, Zap, Shield, Sparkles, Gamepad2, Award } from 'lucide-react';
import AdSenseBanner from './AdSenseBanner';

/**
 * Web Audio API synthesizer for instant retro sound effects
 * Zero external audio files required.
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCollect() {
    if (this.muted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch {
      // Audio fallback
    }
  }

  playPowerup() {
    if (this.muted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(330, now);
      osc.frequency.linearRampToValueAtTime(660, now + 0.1);
      osc.frequency.linearRampToValueAtTime(990, now + 0.25);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // Audio fallback
    }
  }

  playExplosion() {
    if (this.muted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // Audio fallback
    }
  }
}

const sounds = new SoundEngine();

export default function CyberGame({ onBack }) {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('READY'); // 'READY' | 'PLAYING' | 'GAMEOVER'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [shieldActive, setShieldActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Stats
  const [stats, setStats] = useState({
    coresCollected: 0,
    timeSurvived: 0,
    maxCombo: 1,
  });

  // Game internal mutable state
  const gameRef = useRef({
    player: { x: 200, y: 500, width: 34, height: 44, speed: 7, targetX: 200, shield: 0 },
    keys: { left: false, right: false, up: false, down: false },
    obstacles: [],
    collectibles: [],
    particles: [],
    stars: [],
    score: 0,
    combo: 1,
    maxCombo: 1,
    cores: 0,
    startTime: 0,
    lastObstacleTime: 0,
    lastCollectibleTime: 0,
    speedMultiplier: 1,
    animationId: null,
  });

  // Load HighScore
  useEffect(() => {
    try {
      const saved = localStorage.getItem('saiyam_cyber_highscore');
      if (saved) setHighScore(parseInt(saved, 10));
    } catch {
      // Ignore
    }
  }, []);

  const toggleMute = () => {
    sounds.muted = !sounds.muted;
    setIsMuted(sounds.muted);
  };

  // Start the Game
  const startGame = () => {
    sounds.init();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const g = gameRef.current;
    g.player = {
      x: canvas.width / 2,
      y: canvas.height - 70,
      width: 32,
      height: 42,
      speed: 7,
      targetX: canvas.width / 2,
      shield: 0,
    };
    g.obstacles = [];
    g.collectibles = [];
    g.particles = [];
    g.score = 0;
    g.combo = 1;
    g.maxCombo = 1;
    g.cores = 0;
    g.startTime = Date.now();
    g.lastObstacleTime = 0;
    g.lastCollectibleTime = 0;
    g.speedMultiplier = 1;

    // Background Stars
    g.stars = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.8,
      speed: Math.random() * 1.5 + 0.5,
    }));

    setScore(0);
    setCombo(1);
    setShieldActive(false);
    setGameState('PLAYING');
  };

  // Keyboard Listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      const g = gameRef.current;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') g.keys.left = true;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') g.keys.right = true;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') g.keys.up = true;
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') g.keys.down = true;
    };

    const handleKeyUp = (e) => {
      const g = gameRef.current;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') g.keys.left = false;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') g.keys.right = false;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') g.keys.up = false;
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') g.keys.down = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Touch / Mouse Pointer Control
  const handlePointerMove = (e) => {
    if (gameState !== 'PLAYING') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;
    gameRef.current.player.x = Math.max(20, Math.min(canvas.width - 20, x));
    gameRef.current.player.y = Math.max(50, Math.min(canvas.height - 30, y));
  };

  // Main Canvas Loop
  useEffect(() => {
    if (gameState !== 'PLAYING') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let running = true;

    const loop = (timestamp) => {
      if (!running) return;
      const g = gameRef.current;
      const p = g.player;

      // Handle keyboard velocity
      if (g.keys.left) p.x = Math.max(20, p.x - p.speed);
      if (g.keys.right) p.x = Math.min(canvas.width - 20, p.x + p.speed);
      if (g.keys.up) p.y = Math.max(60, p.y - p.speed);
      if (g.keys.down) p.y = Math.min(canvas.height - 30, p.y + p.speed);

      // Shields countdown
      if (p.shield > 0) {
        p.shield -= 1;
        if (p.shield === 0) setShieldActive(false);
      }

      // Elapsed time & difficulty scaling
      const elapsed = (Date.now() - g.startTime) / 1000;
      g.speedMultiplier = 1 + Math.min(2.5, elapsed * 0.04);

      // Score ticking
      g.score += Math.round(1 * g.combo * (g.speedMultiplier * 0.5));
      setScore(g.score);

      // Spawn Obstacles
      if (timestamp - g.lastObstacleTime > Math.max(400, 1100 / g.speedMultiplier)) {
        g.lastObstacleTime = timestamp;
        const width = 30 + Math.random() * 45;
        g.obstacles.push({
          x: Math.random() * (canvas.width - width - 20) + 10,
          y: -40,
          width,
          height: 18 + Math.random() * 12,
          speed: (3.5 + Math.random() * 2.5) * g.speedMultiplier,
          type: Math.random() > 0.85 ? 'laser' : 'firewall',
        });
      }

      // Spawn Collectibles
      if (timestamp - g.lastCollectibleTime > 800) {
        g.lastCollectibleTime = timestamp;
        const rand = Math.random();
        let type = 'core'; // blue
        if (rand > 0.88) type = 'shield'; // emerald
        else if (rand > 0.7) type = 'gold'; // gold

        g.collectibles.push({
          x: Math.random() * (canvas.width - 40) + 20,
          y: -30,
          radius: type === 'shield' ? 12 : 9,
          speed: (2.8 + Math.random() * 1.5) * g.speedMultiplier,
          type,
          pulse: 0,
        });
      }

      // ---------------- RENDER ----------------
      ctx.fillStyle = '#05070e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Starfield
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      for (const s of g.stars) {
        s.y += s.speed * g.speedMultiplier * 1.5;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // Draw Cyber Grid Lines (horizon effect)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw Engine Particles
      if (Math.random() > 0.3) {
        g.particles.push({
          x: p.x + (Math.random() - 0.5) * 8,
          y: p.y + p.height / 2,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 3 + 2,
          radius: Math.random() * 3 + 1,
          color: p.shield > 0 ? '#10b981' : '#06b6d4',
          alpha: 1,
        });
      }

      // Update & Draw Particles
      for (let i = g.particles.length - 1; i >= 0; i--) {
        const pt = g.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha -= 0.035;
        if (pt.alpha <= 0) {
          g.particles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = pt.alpha;
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Update & Draw Collectibles
      for (let i = g.collectibles.length - 1; i >= 0; i--) {
        const c = g.collectibles[i];
        c.y += c.speed;
        c.pulse += 0.08;

        // Collision detection with player
        const dist = Math.hypot(c.x - p.x, c.y - p.y);
        if (dist < c.radius + p.width / 2) {
          // Collected!
          g.cores += 1;
          if (c.type === 'core') {
            g.score += 150 * g.combo;
            sounds.playCollect();
          } else if (c.type === 'gold') {
            g.score += 400 * g.combo;
            g.combo = Math.min(8, g.combo + 1);
            setCombo(g.combo);
            if (g.combo > g.maxCombo) g.maxCombo = g.combo;
            sounds.playCollect();
          } else if (c.type === 'shield') {
            p.shield = 360; // ~6 seconds at 60fps
            setShieldActive(true);
            sounds.playPowerup();
          }

          // Sparks
          for (let k = 0; k < 12; k++) {
            g.particles.push({
              x: c.x,
              y: c.y,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              radius: Math.random() * 3 + 1.5,
              color: c.type === 'shield' ? '#10b981' : c.type === 'gold' ? '#eab308' : '#38bdf8',
              alpha: 1,
            });
          }

          g.collectibles.splice(i, 1);
          continue;
        }

        if (c.y > canvas.height + 20) {
          g.collectibles.splice(i, 1);
          continue;
        }

        // Draw Collectible Glow
        ctx.save();
        ctx.shadowBlur = 15;
        if (c.type === 'shield') {
          ctx.shadowColor = '#10b981';
          ctx.fillStyle = '#10b981';
        } else if (c.type === 'gold') {
          ctx.shadowColor = '#eab308';
          ctx.fillStyle = '#eab308';
        } else {
          ctx.shadowColor = '#38bdf8';
          ctx.fillStyle = '#38bdf8';
        }
        ctx.beginPath();
        const r = c.radius + Math.sin(c.pulse) * 1.5;
        ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Update & Draw Obstacles
      for (let i = g.obstacles.length - 1; i >= 0; i--) {
        const obs = g.obstacles[i];
        obs.y += obs.speed;

        // Collision detection with player bounding box
        const hitX = Math.abs(obs.x + obs.width / 2 - p.x) < (obs.width + p.width * 0.7) / 2;
        const hitY = Math.abs(obs.y + obs.height / 2 - p.y) < (obs.height + p.height * 0.7) / 2;

        if (hitX && hitY) {
          if (p.shield > 0) {
            // Shield absorbed hit!
            p.shield = 0;
            setShieldActive(false);
            sounds.playPowerup();
            // Explosion particles
            for (let k = 0; k < 20; k++) {
              g.particles.push({
                x: obs.x + obs.width / 2,
                y: obs.y + obs.height / 2,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                radius: Math.random() * 4 + 2,
                color: '#10b981',
                alpha: 1,
              });
            }
            g.obstacles.splice(i, 1);
            continue;
          } else {
            // Game Over!
            sounds.playExplosion();
            running = false;
            const finalScore = g.score;
            const finalTime = Math.round((Date.now() - g.startTime) / 1000);
            setStats({
              coresCollected: g.cores,
              timeSurvived: finalTime,
              maxCombo: g.maxCombo,
            });
            if (finalScore > highScore) {
              setHighScore(finalScore);
              try {
                localStorage.setItem('saiyam_cyber_highscore', finalScore.toString());
              } catch {
                // Ignore
              }
            }
            setGameState('GAMEOVER');
            return;
          }
        }

        if (obs.y > canvas.height + 50) {
          g.obstacles.splice(i, 1);
          continue;
        }

        // Draw Obstacle
        ctx.save();
        ctx.shadowBlur = 12;
        if (obs.type === 'laser') {
          ctx.shadowColor = '#f43f5e';
          ctx.fillStyle = '#f43f5e';
        } else {
          ctx.shadowColor = '#ec4899';
          ctx.fillStyle = '#ec4899';
        }

        // Rounded neon rectangle
        ctx.beginPath();
        ctx.roundRect(obs.x, obs.y, obs.width, obs.height, 4);
        ctx.fill();

        // Inner highlight
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(obs.x + 3, obs.y + 3, obs.width - 6, 2);
        ctx.restore();
      }

      // Draw Player Ship
      ctx.save();
      ctx.translate(p.x, p.y);

      // Shield Aura
      if (p.shield > 0) {
        ctx.save();
        ctx.strokeStyle = '#10b981';
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 18;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(0, 0, p.width * 0.9, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Neon Ship Body
      ctx.shadowBlur = 18;
      ctx.shadowColor = p.shield > 0 ? '#10b981' : '#06b6d4';
      ctx.fillStyle = p.shield > 0 ? '#10b981' : '#06b6d4';

      ctx.beginPath();
      ctx.moveTo(0, -p.height / 2);
      ctx.lineTo(p.width / 2, p.height / 2);
      ctx.lineTo(0, p.height / 3);
      ctx.lineTo(-p.width / 2, p.height / 2);
      ctx.closePath();
      ctx.fill();

      // Cockpit Glow
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, -2, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      g.animationId = requestAnimationFrame(loop);
    };

    g.animationId = requestAnimationFrame(loop);
    return () => {
      running = false;
      if (g.animationId) cancelAnimationFrame(g.animationId);
    };
  }, [gameState, highScore]);

  return (
    <div className="relative min-h-screen bg-[#05070e] text-zinc-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      
      {/* Top Header & Breadcrumb */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono font-medium transition-all cursor-pointer group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Portfolio</span>
          </button>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold">
              <Gamepad2 size={13} className="text-cyan-400" />
              <span>Cyber Core 2026</span>
            </span>
          </div>

          <button
            onClick={toggleMute}
            className="p-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 text-xs transition-all cursor-pointer"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-cyan-400" />}
          </button>
        </div>
      </header>

      {/* Top AdSense Display Unit */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-4">
        <AdSenseBanner slot="8256174987" label="SPONSORED LEADERBOARD" />
      </div>

      {/* Main Game Arena */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-4 w-full max-w-4xl mx-auto">
        
        {/* HUD Bar */}
        <div className="w-full max-w-[440px] flex items-center justify-between mb-2 px-3 py-2 rounded-xl bg-zinc-950/90 border border-white/10 font-mono text-xs shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">SCORE:</span>
            <span className="text-cyan-400 font-bold text-sm tracking-wide">{score}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500">COMBO:</span>
            <span className={`font-bold text-sm px-1.5 py-0.5 rounded ${combo > 1 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-zinc-400'}`}>
              {combo}x
            </span>
          </div>

          <div className="flex items-center gap-1 text-zinc-400">
            <Trophy size={13} className="text-amber-400" />
            <span className="text-amber-400 font-bold">{highScore}</span>
          </div>
        </div>

        {/* Canvas & Overlay Container */}
        <div className="relative w-full max-w-[440px] aspect-[9/13] max-h-[640px] rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-[#05070e] touch-none">
          <canvas
            ref={canvasRef}
            width={400}
            height={580}
            onMouseMove={handlePointerMove}
            onTouchMove={handlePointerMove}
            className="w-full h-full block cursor-crosshair"
          />

          {/* READY Overlay */}
          {gameState === 'READY' && (
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-pulse">
                <Zap size={28} className="text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white mb-2">
                CYBER CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">RUNNER</span>
              </h1>
              <p className="text-xs text-zinc-400 font-mono mb-6 max-w-[280px]">
                Dodge quantum firewalls, absorb data cores, and maintain hyper-combo multipliers.
              </p>

              <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] mb-6 text-[10px] font-mono text-zinc-300">
                <div className="bg-zinc-900/80 p-2 rounded-lg border border-white/5 flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"></div>
                  <span>Core +150</span>
                </div>
                <div className="bg-zinc-900/80 p-2 rounded-lg border border-white/5 flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_#facc15]"></div>
                  <span>Combo +400</span>
                </div>
                <div className="bg-zinc-900/80 p-2 rounded-lg border border-white/5 flex flex-col items-center gap-1">
                  <Shield size={12} className="text-emerald-400" />
                  <span>Shield 6s</span>
                </div>
              </div>

              <button
                onClick={startGame}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-mono font-black text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Play size={16} fill="currentColor" />
                <span>Launch Runner</span>
              </button>

              <span className="text-[10px] font-mono text-zinc-500 mt-4">
                Desktop: Arrow keys / WASD / Mouse &bull; Mobile: Drag finger
              </span>
            </div>
          )}

          {/* GAMEOVER Overlay */}
          {gameState === 'GAMEOVER' && (
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20 animate-in fade-in zoom-in-95 duration-200">
              <span className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase mb-1">
                SYSTEM BREACH &bull; CORE COMPROMISED
              </span>
              <h2 className="text-3xl font-black font-mono tracking-tight text-white mb-4">
                GAME OVER
              </h2>

              <div className="w-full max-w-[280px] bg-zinc-900/90 border border-white/10 rounded-xl p-4 mb-4 font-mono space-y-2 text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>FINAL SCORE</span>
                  <span className="text-cyan-400 font-bold text-base">{score}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 border-t border-white/5 pt-2">
                  <span>BEST SCORE</span>
                  <span className="text-amber-400 font-bold">{highScore}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 border-t border-white/5 pt-2">
                  <span>CORES COLLECTED</span>
                  <span className="text-emerald-400 font-bold">{stats.coresCollected}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 border-t border-white/5 pt-2">
                  <span>SURVIVAL TIME</span>
                  <span className="text-indigo-300 font-bold">{stats.timeSurvived}s</span>
                </div>
              </div>

              <button
                onClick={startGame}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-mono font-black text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>Play Again</span>
              </button>
            </div>
          )}

          {/* Active Shield Indicator */}
          {shieldActive && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold animate-pulse">
              <Shield size={11} />
              <span>SHIELD ACTIVE</span>
            </div>
          )}
        </div>

        {/* Mobile Control Hint */}
        <div className="mt-3 text-center text-zinc-500 text-[11px] font-mono">
          Tip: Collect <span className="text-amber-400 font-bold">Golden Cores</span> to elevate your combo multiplier up to 8x!
        </div>
      </main>

      {/* Bottom AdSense Display Unit */}
      <div className="max-w-4xl mx-auto w-full px-4 pb-6">
        <AdSenseBanner slot="8256174988" label="SPONSORED FOOTER BANNER" />
      </div>

    </div>
  );
}

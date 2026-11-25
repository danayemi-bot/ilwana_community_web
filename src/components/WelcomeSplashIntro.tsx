import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Waves, ChevronRight } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

interface WelcomeSplashIntroProps {
  isOpen: boolean;
  onComplete: () => void;
}

const RIVER_SCENES = [
  {
    src: '/assets/aistudio/chaana_de7f7d77.png',
    alt: 'Aerial view of River Tana meandering through lush forest',
    initial: { scale: 1.08, x: '-2%', y: '1%' },
    animate: { scale: 1.2, x: '2%', y: '-1%' }
  },
  {
    src: '/assets/aistudio/rivertana_a0788a57.png',
    alt: 'River Tana flowing calmly along verdant riverbanks',
    initial: { scale: 1.15, x: '2%', y: '-1%' },
    animate: { scale: 1.05, x: '-2%', y: '1%' }
  },
  {
    src: '/assets/aistudio/chaana__f51b9103.png',
    alt: 'Golden sunlight over Chaana — the River Tana',
    initial: { scale: 1.05, x: '-1.5%', y: '-1%' },
    animate: { scale: 1.18, x: '1.5%', y: '1%' }
  },
  {
    src: '/assets/aistudio/rivertana__098224b0.png',
    alt: 'Tranquil waters of River Tana bordered by tall riverine palms',
    initial: { scale: 1.16, x: '1.5%', y: '1%' },
    animate: { scale: 1.06, x: '-1.5%', y: '-1%' }
  },
  {
    src: '/assets/aistudio/waato_d034ef5b.png',
    alt: 'Traditional dugout canoe (Waato) on the River Tana',
    initial: { scale: 1.06, x: '0%', y: '1%' },
    animate: { scale: 1.16, x: '0%', y: '-1%' }
  }
];

const TOTAL_DURATION_MS = 9000;

export const WelcomeSplashIntro: React.FC<WelcomeSplashIntroProps> = ({
  isOpen,
  onComplete
}) => {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [sceneIndex, setSceneIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Lock background page scroll while welcoming intro plays
  useBodyScrollLock(isOpen);

  // Preload all River Tana scenes immediately
  useEffect(() => {
    if (!isOpen) return;
    RIVER_SCENES.forEach((scene) => {
      const img = new Image();
      img.src = scene.src;
    });
  }, [isOpen]);

  // Choreographed 9-second timeline
  useEffect(() => {
    if (!isOpen) return;

    setPhase(1);
    setSceneIndex(0);

    // Scene cross-fades every ~1.8s so the river feels continuously alive like video footage
    const s1 = setTimeout(() => setSceneIndex(1), 1750);
    const s2 = setTimeout(() => setSceneIndex(2), 3550);
    const s3 = setTimeout(() => setSceneIndex(3), 5350);
    const s4 = setTimeout(() => setSceneIndex(4), 7100);

    // Typography story beats
    // 0.0s - 2.9s: "Wailwana serekoo!"
    // 2.9s - 6.2s: "CHAANA DOO KWEETO"
    // 6.2s - 9.0s: "Welcome, Mwilwana"
    const p2 = setTimeout(() => setPhase(2), 2900);
    const p3 = setTimeout(() => setPhase(3), 6200);

    // Finish at 9 seconds and transition smoothly to Home
    const done = setTimeout(() => {
      onComplete();
    }, TOTAL_DURATION_MS);

    return () => {
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(s4);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(done);
    };
  }, [isOpen, onComplete]);

  // Animated golden sunlight shimmer & gentle river mist particles on HTML5 Canvas
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      twinkleSpeed: number;
      phase: number;
    }

    const particles: Particle[] = Array.from({ length: 42 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1 + Math.random() * 2.4,
      vx: 0.15 + Math.random() * 0.35,
      vy: -0.25 - Math.random() * 0.45,
      alpha: 0.25 + Math.random() * 0.55,
      twinkleSpeed: 0.02 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2
    }));

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.twinkleSpeed;

        if (p.y < -10) p.y = h + 10;
        if (p.x > w + 10) p.x = -10;

        const currentAlpha = p.alpha * (0.55 + 0.45 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 204, 21, ${currentAlpha.toFixed(3)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="welcome-splash-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 overflow-hidden bg-[#041812] text-white select-none flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Ilwana Community Heritage Welcome"
        >
          {/* Layer 1: Multi-scene River Tana Continuous Motion Backdrop */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {RIVER_SCENES.map((scene, idx) => {
              const isActive = idx === sceneIndex;
              return (
                <motion.div
                  key={scene.src}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? scene.animate.scale : scene.initial.scale,
                    x: isActive ? scene.animate.x : scene.initial.x,
                    y: isActive ? scene.animate.y : scene.initial.y
                  }}
                  transition={{
                    opacity: { duration: 1.05, ease: 'easeInOut' },
                    scale: { duration: 3.2, ease: 'linear' },
                    x: { duration: 3.2, ease: 'linear' },
                    y: { duration: 3.2, ease: 'linear' }
                  }}
                  className="absolute inset-0 will-change-transform"
                  style={{ zIndex: isActive ? 2 : 1 }}
                >
                  <img
                    src={scene.src}
                    alt={scene.alt}
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                  />
                </motion.div>
              );
            })}

            {/* Cinematic Emerald & Warm Sunlight Vignette Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#041f17]/75 via-[#041812]/35 to-[#03130e]/85 pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.14)_0%,transparent_65%)] pointer-events-none" />
          </div>

          {/* Layer 2: Golden River Shimmer Particles Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-20 pointer-events-none"
          />

          {/* Layer 3: Ornamental Gold Filigree Frame */}
          <div className="absolute inset-3 sm:inset-6 z-20 pointer-events-none border border-amber-300/25 rounded-2xl sm:rounded-3xl">
            {/* Four Decorative Corners */}
            <div className="absolute -top-0.5 -left-0.5 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-amber-400/80 rounded-tl-2xl sm:rounded-tl-3xl" />
            <div className="absolute -top-0.5 -right-0.5 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-amber-400/80 rounded-tr-2xl sm:rounded-tr-3xl" />
            <div className="absolute -bottom-0.5 -left-0.5 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-amber-400/80 rounded-bl-2xl sm:rounded-bl-3xl" />
            <div className="absolute -bottom-0.5 -right-0.5 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-amber-400/80 rounded-br-2xl sm:rounded-br-3xl" />
          </div>

          {/* Top Bar: Subtle Brand Seal + Skip Control */}
          <div className="relative z-30 flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-9">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-300/30"
            >
              <img
                src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                alt="Ilwana Crest"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-amber-400"
              />
              <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-200 uppercase">
                Ilwana Heritage
              </span>
            </motion.div>

            <button
              type="button"
              onClick={onComplete}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 hover:bg-black/70 text-amber-100 hover:text-white text-xs sm:text-sm font-semibold border border-white/25 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Skip Intro</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center Cinematic Stage */}
          <div className="relative z-30 flex-1 flex flex-col items-center justify-center px-6 text-center">
            <AnimatePresence mode="wait">
              {/* BEAT 1: Wailwana serekoo! */}
              {phase === 1 && (
                <motion.div
                  key="phase-1"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl space-y-4 sm:space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-300 to-emerald-600 shadow-[0_0_45px_rgba(250,204,21,0.45)]"
                  >
                    <img
                      src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                      alt="Ilwana Heritage Emblem"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </motion.div>

                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/15 border border-amber-300/40 text-amber-200 text-xs font-mono uppercase tracking-[0.25em]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>River Tana Homeland</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </div>

                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
                    Wailwana{' '}
                    <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                      serekoo!
                    </span>
                  </h1>

                  <div className="mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                  <p className="font-serif italic text-base sm:text-xl text-stone-100/95 max-w-xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                    Warm ancestral greetings to the free people of the River Tana
                  </p>
                </motion.div>
              )}

              {/* BEAT 2: CHAANA DOO KWEETO */}
              {phase === 2 && (
                <motion.div
                  key="phase-2"
                  initial={{ opacity: 0, y: 26, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -22, scale: 1.03 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl space-y-5 sm:space-y-6"
                >
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#14532d]/80 border border-amber-300/60 text-amber-300 text-xs sm:text-sm font-mono font-bold tracking-[0.28em] uppercase shadow-xl backdrop-blur-sm">
                    <Waves className="w-4 h-4 text-amber-300 animate-pulse" />
                    <span>❖ River Tana · Lifeblood of Our Ancestors ❖</span>
                  </div>

                  <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-200 drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)]">
                    CHAANA DOO KWEETO
                  </h2>

                  {/* Animated River Wave Flourish */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-amber-400" />
                    <span className="text-amber-300 text-lg">❖</span>
                    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-amber-400" />
                  </div>

                  <p className="font-serif text-lg sm:text-2xl text-white font-semibold tracking-wide drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]">
                    Lush waters, timeless forests, living heritage
                  </p>
                </motion.div>
              )}

              {/* BEAT 3: Welcome, Mwilwana */}
              {phase === 3 && (
                <motion.div
                  key="phase-3"
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl space-y-5 sm:space-y-6"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 25px rgba(250,204,21,0.35)',
                        '0 0 55px rgba(250,204,21,0.7)',
                        '0 0 25px rgba(250,204,21,0.35)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-amber-300 to-amber-500"
                  >
                    <img
                      src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                      alt="Ilwana Heritage Emblem"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </motion.div>

                  <span className="block text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-amber-300">
                    Ilwana Community Heritage
                  </span>

                  <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_6px_26px_rgba(0,0,0,0.95)]">
                    Welcome,{' '}
                    <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-emerald-200 bg-clip-text text-transparent">
                      Mwilwana
                    </span>
                  </h2>

                  <p className="font-serif italic text-base sm:text-xl text-amber-100/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                    Preserving our history, Kilwana language, and living culture
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Cinematic 9-Second Progress Bar & Scene Indicators */}
          <div className="relative z-30 px-6 sm:px-12 pb-7 sm:pb-10 space-y-3 max-w-2xl w-full mx-auto">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-amber-200/85">
              <span className={phase === 1 ? 'text-amber-300 font-bold' : ''}>
                01 · Serekoo
              </span>
              <span className={phase === 2 ? 'text-amber-300 font-bold' : ''}>
                02 · Chaana Doo Kweeto
              </span>
              <span className={phase === 3 ? 'text-amber-300 font-bold' : ''}>
                03 · Welcome
              </span>
            </div>

            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-xs">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: TOTAL_DURATION_MS / 1000, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-400 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.85)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

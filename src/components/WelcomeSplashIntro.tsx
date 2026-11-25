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
    initial: { scale: 1.08, x: '-2.5%', y: '1.5%' },
    animate: { scale: 1.22, x: '2.5%', y: '-1.5%' }
  },
  {
    src: '/assets/aistudio/rivertana_a0788a57.png',
    alt: 'River Tana flowing calmly along verdant riverbanks',
    initial: { scale: 1.18, x: '2%', y: '-1.5%' },
    animate: { scale: 1.06, x: '-2%', y: '1.5%' }
  },
  {
    src: '/assets/aistudio/chaana__f51b9103.png',
    alt: 'Golden sunlight over Chaana — the River Tana',
    initial: { scale: 1.05, x: '-2%', y: '-1%' },
    animate: { scale: 1.2, x: '2%', y: '1%' }
  },
  {
    src: '/assets/aistudio/rivertana__098224b0.png',
    alt: 'Tranquil waters of River Tana bordered by tall riverine palms',
    initial: { scale: 1.2, x: '1.5%', y: '1.5%' },
    animate: { scale: 1.07, x: '-1.5%', y: '-1.5%' }
  },
  {
    src: '/assets/aistudio/waato_d034ef5b.png',
    alt: 'Traditional dugout canoe (Waato) on the River Tana',
    initial: { scale: 1.06, x: '-1%', y: '1%' },
    animate: { scale: 1.19, x: '1%', y: '-1%' }
  }
];

const TOTAL_DURATION_MS = 12000;

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

  // Choreographed 12-second cinema timeline
  useEffect(() => {
    if (!isOpen) return;

    setPhase(1);
    setSceneIndex(0);

    // 5 River Tana scenes spaced ~2.4s apart with smooth overlapping fades
    const s1 = setTimeout(() => setSceneIndex(1), 2400);
    const s2 = setTimeout(() => setSceneIndex(2), 4800);
    const s3 = setTimeout(() => setSceneIndex(3), 7200);
    const s4 = setTimeout(() => setSceneIndex(4), 9600);

    // Story beats across 12 seconds:
    // 0.0s - 3.8s: "Wailwana serekoo!"
    // 3.8s - 8.2s: "CHAANA DOO KWEETO"
    // 8.2s - 12.0s: "Welcome, Mwilwana"
    const p2 = setTimeout(() => setPhase(2), 3800);
    const p3 = setTimeout(() => setPhase(3), 8200);

    // Finish at 12 seconds and glide smoothly onto Home
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

  // Live HTML5 Canvas: drifting golden sunlight motes + soft river shimmer ripples
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
      warm: boolean;
    }

    const particles: Particle[] = Array.from({ length: 58 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 0.9 + Math.random() * 2.6,
      vx: 0.12 + Math.random() * 0.32,
      vy: -0.2 - Math.random() * 0.45,
      alpha: 0.25 + Math.random() * 0.6,
      twinkleSpeed: 0.018 + Math.random() * 0.032,
      phase: Math.random() * Math.PI * 2,
      warm: i % 4 !== 0
    }));

    let tick = 0;

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      tick += 0.015;
      ctx.clearRect(0, 0, w, h);

      // Soft horizontal river light glints on the lower third
      for (let i = 0; i < 6; i++) {
        const y = h * (0.68 + i * 0.05);
        const waveOffset = Math.sin(tick + i * 1.3) * 40;
        const grad = ctx.createLinearGradient(w * 0.2 + waveOffset, y, w * 0.8 + waveOffset, y);
        grad.addColorStop(0, 'rgba(250, 204, 21, 0)');
        grad.addColorStop(0.5, 'rgba(250, 204, 21, 0.08)');
        grad.addColorStop(1, 'rgba(250, 204, 21, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(w * 0.15 + waveOffset, y);
        ctx.lineTo(w * 0.85 + waveOffset, y);
        ctx.stroke();
      }

      // Glowing golden & emerald mist particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.twinkleSpeed;

        if (p.y < -12) p.y = h + 12;
        if (p.x > w + 12) p.x = -12;

        const currentAlpha = p.alpha * (0.5 + 0.5 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.warm
          ? `rgba(253, 224, 71, ${currentAlpha.toFixed(3)})`
          : `rgba(110, 231, 183, ${(currentAlpha * 0.85).toFixed(3)})`;
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.035 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 overflow-hidden bg-[#031610] text-white select-none flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Ilwana Community Heritage Welcome"
        >
          {/* Layer 1: Multi-scene River Tana Continuous Drone-Pan Motion Reel */}
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
                    opacity: { duration: 1.25, ease: 'easeInOut' },
                    scale: { duration: 4.2, ease: 'linear' },
                    x: { duration: 4.2, ease: 'linear' },
                    y: { duration: 4.2, ease: 'linear' }
                  }}
                  className="absolute inset-0 will-change-transform"
                  style={{ zIndex: isActive ? 2 : 1 }}
                >
                  <img
                    src={scene.src}
                    alt={scene.alt}
                    className="w-full h-full object-cover object-center brightness-105 contrast-105 saturate-110"
                  />
                </motion.div>
              );
            })}

            {/* Sweeping Golden Sun-Ray Light Beam */}
            <motion.div
              initial={{ x: '-60%', opacity: 0.2 }}
              animate={{ x: '130%', opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 12, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/2 z-10 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent skew-x-[-20deg] pointer-events-none"
            />

            {/* Rich Emerald & Golden Vignette Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#021610]/80 via-[#041b14]/30 to-[#02110c]/88 pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16)_0%,transparent_65%)] pointer-events-none" />
          </div>

          {/* Layer 2: Golden Sunlight Dust & Water Shimmer Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-20 pointer-events-none"
          />

          {/* Layer 3: Decorated Ornamental Gold Filigree Border & Corner Motifs */}
          <div className="absolute inset-3 sm:inset-6 z-20 pointer-events-none border border-amber-300/30 rounded-2xl sm:rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-1.5 sm:inset-2 border border-amber-200/10 rounded-xl sm:rounded-2xl" />

            {/* Decorative Gold Corners with Diamond Accents */}
            <div className="absolute -top-0.5 -left-0.5 w-10 h-10 sm:w-14 sm:h-14 border-t-[3px] border-l-[3px] border-amber-400/90 rounded-tl-2xl sm:rounded-tl-3xl" />
            <div className="absolute -top-0.5 -right-0.5 w-10 h-10 sm:w-14 sm:h-14 border-t-[3px] border-r-[3px] border-amber-400/90 rounded-tr-2xl sm:rounded-tr-3xl" />
            <div className="absolute -bottom-0.5 -left-0.5 w-10 h-10 sm:w-14 sm:h-14 border-b-[3px] border-l-[3px] border-amber-400/90 rounded-bl-2xl sm:rounded-bl-3xl" />
            <div className="absolute -bottom-0.5 -right-0.5 w-10 h-10 sm:w-14 sm:h-14 border-b-[3px] border-r-[3px] border-amber-400/90 rounded-br-2xl sm:rounded-br-3xl" />
          </div>

          {/* Top Bar: Subtle Brand Seal + Skip Control */}
          <div className="relative z-30 flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-9">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/35 shadow-lg"
            >
              <img
                src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                alt="Ilwana Crest"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-amber-400"
              />
              <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.22em] text-amber-200 uppercase">
                Ilwana Heritage
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              type="button"
              onClick={onComplete}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/45 hover:bg-black/75 text-amber-100 hover:text-white text-xs sm:text-sm font-semibold border border-amber-300/35 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            >
              <span>Skip Intro</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Center Cinematic Stage */}
          <div className="relative z-30 flex-1 flex flex-col items-center justify-center px-6 text-center">
            <AnimatePresence mode="wait">
              {/* BEAT 1 (0s - 3.8s): Wailwana serekoo! */}
              {phase === 1 && (
                <motion.div
                  key="phase-1"
                  initial={{ opacity: 0, y: 28, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -22, scale: 1.03 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl space-y-5 sm:space-y-6"
                >
                  {/* Orbiting Crest Seal */}
                  <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-amber-300/60"
                    />
                    <motion.div
                      initial={{ scale: 0.65, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.7 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-200 to-emerald-500 shadow-[0_0_55px_rgba(250,204,21,0.55)]"
                    >
                      <img
                        src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                        alt="Ilwana Heritage Emblem"
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/15 border border-amber-300/45 text-amber-200 text-xs font-mono uppercase tracking-[0.28em] backdrop-blur-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>River Tana Homeland</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </motion.div>

                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)]">
                    Wailwana{' '}
                    <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                      serekoo!
                    </span>
                  </h1>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.45, duration: 0.75 }}
                    className="mx-auto w-40 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
                  />

                  <p className="font-serif italic text-base sm:text-xl text-stone-100/95 max-w-xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                    Warm ancestral greetings to the free people of the River Tana
                  </p>
                </motion.div>
              )}

              {/* BEAT 2 (3.8s - 8.2s): CHAANA DOO KWEETO */}
              {phase === 2 && (
                <motion.div
                  key="phase-2"
                  initial={{ opacity: 0, y: 28, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 1.03 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl space-y-5 sm:space-y-7"
                >
                  <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[#14532d]/85 border border-amber-300/70 text-amber-200 text-xs sm:text-sm font-mono font-bold tracking-[0.28em] uppercase shadow-2xl backdrop-blur-md">
                    <Waves className="w-4 h-4 text-amber-300 animate-pulse" />
                    <span>❖ River Tana · Lifeblood of Our Ancestors ❖</span>
                  </div>

                  {/* Decorated Illuminated Medallion Plate */}
                  <div className="relative px-6 py-6 sm:px-12 sm:py-8 rounded-3xl bg-black/25 backdrop-blur-[3px] border border-amber-300/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                    <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-200 drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)]">
                      CHAANA DOO KWEETO
                    </h2>

                    {/* Animated Flowing River Wave SVG */}
                    <div className="mt-4 flex flex-col items-center gap-2">
                      <svg
                        viewBox="0 0 280 20"
                        className="w-56 sm:w-72 h-5 overflow-visible"
                        aria-hidden="true"
                      >
                        <motion.path
                          d="M 0 10 Q 35 2, 70 10 T 140 10 T 210 10 T 280 10"
                          fill="none"
                          stroke="url(#riverGoldGrad)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                        <defs>
                          <linearGradient id="riverGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(250,204,21,0)" />
                            <stop offset="30%" stopColor="#fde047" />
                            <stop offset="50%" stopColor="#34d399" />
                            <stop offset="70%" stopColor="#fde047" />
                            <stop offset="100%" stopColor="rgba(250,204,21,0)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <p className="font-serif text-lg sm:text-2xl text-white font-semibold tracking-wide drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]">
                    Our River, Our Homeland, Our Living Heritage
                  </p>
                </motion.div>
              )}

              {/* BEAT 3 (8.2s - 12.0s): Welcome, Mwilwana */}
              {phase === 3 && (
                <motion.div
                  key="phase-3"
                  initial={{ opacity: 0, y: 26, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl space-y-5 sm:space-y-6"
                >
                  {/* Radiant Halo Crest */}
                  <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border-2 border-dotted border-amber-300/75"
                    />
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 28px rgba(250,204,21,0.4)',
                          '0 0 65px rgba(250,204,21,0.85)',
                          '0 0 28px rgba(250,204,21,0.4)'
                        ]
                      }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-amber-200 to-amber-500"
                    >
                      <img
                        src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                        alt="Ilwana Heritage Emblem"
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </motion.div>
                  </div>

                  <span className="block text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.32em] text-amber-300">
                    ❖ Ilwana Community Heritage ❖
                  </span>

                  <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)]">
                    Welcome,{' '}
                    <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-emerald-200 bg-clip-text text-transparent">
                      Mwilwana
                    </span>
                  </h2>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    className="mx-auto w-44 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
                  />

                  <p className="font-serif italic text-base sm:text-xl text-amber-100/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                    Preserving our history, Kilwana language, and living culture
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Cinematic 12-Second Progress Bar & Chapter Indicators */}
          <div className="relative z-30 px-6 sm:px-12 pb-7 sm:pb-10 space-y-3 max-w-2xl w-full mx-auto">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-amber-200/80">
              <span className={phase === 1 ? 'text-amber-300 font-bold' : ''}>
                01 · Wailwana Serekoo
              </span>
              <span className={phase === 2 ? 'text-amber-300 font-bold' : ''}>
                02 · Chaana Doo Kweeto
              </span>
              <span className={phase === 3 ? 'text-amber-300 font-bold' : ''}>
                03 · Welcome, Mwilwana
              </span>
            </div>

            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-xs">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: TOTAL_DURATION_MS / 1000, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-400 rounded-full shadow-[0_0_14px_rgba(250,204,21,0.9)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

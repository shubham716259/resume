import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Code2, ChevronRight, Compass } from 'lucide-react';
import { HeroScene } from '../3d/HeroScene';
import { WebGLFallback } from '../3d/WebGLFallback';

export function HeroSection({ onExploreWork, onConnect }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span className="status-pulse">
                <span className="status-pulse-ring" />
                <span className="status-pulse-dot" />
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                Open to Learning Opportunities & Internships
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="font-mono text-xs sm:text-sm text-cyan-400 font-semibold tracking-wider flex items-center gap-2">
                <Terminal size={14} /> HELLO, WORLD. I'M SHUBHAM THAKUR
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Building ideas into{' '}
                <span className="text-gradient-cyan block sm:inline">
                  interactive digital
                </span>{' '}
                experiences.
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              I'm a CSE student and developer who enjoys solving problems, building useful applications, and turning creative ideas into functional digital products.
            </motion.p>

            {/* University & Focus Pill tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <span className="badge-tag text-cyan-300 border-cyan-500/30 bg-cyan-950/20">
                <Code2 size={12} className="text-cyan-400" /> Chitkara University
              </span>
              <span className="badge-tag">Web Development</span>
              <span className="badge-tag">Java & OOP</span>
              <span className="badge-tag">Data Structures & Algorithms</span>
              <span className="badge-tag">SQL & Problem Solving</span>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={onExploreWork}
                className="magnetic-btn btn-primary text-sm sm:text-base py-3 px-6 group"
              >
                <span>Explore My Work</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onConnect}
                className="magnetic-btn btn-secondary text-sm sm:text-base py-3 px-6"
              >
                <Sparkles size={16} className="text-purple-400" />
                <span>Let's Connect</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Composition */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md h-[380px] sm:h-[440px] relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/20 via-purple-500/10 to-transparent border border-white/10 shadow-2xl overflow-hidden group"
              data-cursor="canvas"
            >
              {/* Interactive 3D Canvas */}
              <Suspense fallback={<WebGLFallback />}>
                <HeroScene />
              </Suspense>

              {/* 3D Interaction Hint Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md pointer-events-none text-[11px] font-mono text-slate-300 flex items-center gap-1.5 shadow-lg">
                <Compass size={13} className="text-cyan-400 animate-spin" />
                <span>Interactive 3D Core • Tilt & Orbit</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
          onClick={onExploreWork}
        >
          <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-700 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default HeroSection;

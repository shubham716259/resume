import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Code2, Sparkles, Brain, GraduationCap, 
  Mail, Terminal, MapPin, Upload, Camera, ExternalLink, ArrowRight
} from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';

export function AboutSection() {
  // Allow user to upload/replace the profile photo dynamically if they wish
  const [profileImage, setProfileImage] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <User size={13} />
            <span>01 // IDENTITY & BACKGROUND</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Driven by curiosity, grounded in code.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging algorithmic rigor with modern full-stack engineering sensibilities.
          </p>
        </div>

        {/* Main Grid: Floating 3D Identity Card + Story & Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Floating 3D Identity Card */}
          <div className="lg:col-span-5 card-3d-wrap">
            <motion.div
              whileHover={{ rotateY: -6, rotateX: 6 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl group card-3d-content"
              style={{
                background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.8), rgba(10, 15, 26, 0.95))'
              }}
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider">
                    STUDENT_ID::CHITKARA
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Student
                </span>
              </div>

              {/* Profile Photo / Avatar Frame */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative group/avatar">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-xl bg-slate-900 flex items-center justify-center relative">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Shubham Thakur"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 via-slate-900 to-purple-900/40 flex flex-col items-center justify-center p-3 text-center">
                        <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-1 text-cyan-300 font-display font-bold text-xl">
                          ST
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">Photo Slot</span>
                      </div>
                    )}
                  </div>

                  {/* Upload Real Photo Overlay Control */}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute inset-0 rounded-2xl bg-black/70 backdrop-blur-xs opacity-0 group-hover/avatar:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white p-2 text-center"
                    title="Upload real photo"
                  >
                    <Camera size={20} className="text-cyan-400 mb-1" />
                    <span className="text-[10px] font-mono">Upload My Photo</span>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-white">Shubham Thakur</h3>
                  <p className="font-mono text-xs text-cyan-400 mt-0.5">CSE Engineering Student</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
                    <GraduationCap size={14} className="text-purple-400" /> Chitkara University, Punjab
                  </p>
                </div>
              </div>

              {/* Holographic Matrix Details */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5 font-mono text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Location:</span>
                  <span className="text-slate-200">Punjab / Chandigarh, IN</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Degree:</span>
                  <span className="text-slate-200">B.E. Computer Science</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Core Stack:</span>
                  <span className="text-cyan-300">Java • React • SQL</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Primary IDE:</span>
                  <span className="text-purple-300">VS Code</span>
                </div>
              </div>

              {/* Social Profile Quick Links */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-center gap-3">
                <a
                  href="https://github.com/shubhamthakur-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/shubhamthakur-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-400 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Engaging Story + 3 Pillars + Learning Focus */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <Terminal size={14} /> THE PERSONAL STORY
              </div>

              <blockquote className="font-display text-lg sm:text-xl text-slate-100 font-semibold leading-relaxed border-l-2 border-cyan-400 pl-4 py-1 italic">
                "I'm Shubham, a Computer Science Engineering student interested in building practical software and understanding how things work under the hood. From programming fundamentals and algorithms to interactive web applications, I'm continuously experimenting, learning, and building."
              </blockquote>

              <p className="text-sm text-slate-300 leading-relaxed">
                My journey began with curiosity about how lines of code translate into functional software on a screen. At Chitkara University, I've immersed myself in the core foundations of computer science—procedural programming in C, object-oriented software engineering in Java, and relational database management.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than treating code merely as academic theory, I build tangible projects: from desktop utilities to responsive web applications like CookFusion and Eco-Recycler. My goal is to craft software that is clean, resilient, and intuitive.
              </p>
            </div>

            {/* Three Visual Pillars: Code, Creativity, Problem Solving */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Pillar 1: Code */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3">
                  <Code2 size={20} />
                </div>
                <h4 className="font-display font-bold text-white text-sm mb-1">Code Quality</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Writing clean, modular Java and React components with thoughtful separation of concerns.
                </p>
              </div>

              {/* Pillar 2: Creativity */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-3">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-display font-bold text-white text-sm mb-1">Creative UI/UX</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Transforming interfaces with 3D interactions, sleek glassmorphism, and responsive layouts.
                </p>
              </div>

              {/* Pillar 3: Problem Solving */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3">
                  <Brain size={20} />
                </div>
                <h4 className="font-display font-bold text-white text-sm mb-1">DSA & Logic</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deconstructing complex algorithmic puzzles into optimal time and space complexity steps.
                </p>
              </div>
            </div>

            {/* Current Learning Focus Spotlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900 to-purple-950/30 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-cyan-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  Current Learning Focus
                </span>
                <span className="font-mono text-[11px] text-slate-400">Q1–Q2 2026 Target</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Deepening mastery of <strong>Advanced Java & Data Structures</strong> (trees, dynamic programming, graph traversals), expanding <strong>Full-Stack API architectures</strong>, and preparing for software engineering internship opportunities.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default AboutSection;

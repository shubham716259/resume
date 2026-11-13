import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Github } from '../ui/Icons';
import { ProjectCardMockup } from '../ui/ProjectCardMockup';

export function ProjectModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is open and handle Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900/95 border border-slate-700/60 rounded-2xl shadow-2xl overflow-y-auto z-10 text-slate-100 flex flex-col"
          style={{
            boxShadow: `0 20px 50px -15px ${project.accentColor}33`
          }}
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: project.accentColor }}
              />
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">{project.subtitle}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Interactive Preview Mockup */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-800">
              <ProjectCardMockup projectId={project.id} accentColor={project.accentColor} />
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 font-display text-sm font-semibold mb-2">
                  <AlertCircle size={16} /> The Problem
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-display text-sm font-semibold mb-2">
                  <CheckCircle2 size={16} /> Engineering Solution
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Cpu size={16} className="text-cyan-400" /> Implementation Details & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-xs sm:text-sm text-slate-300"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-2">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-purple-400" /> Technologies Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Transparency Note */}
            {project.isPlaceholderLink && (
              <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-cyan-300/80 flex items-center gap-2">
                <ShieldCheck size={14} className="shrink-0 text-cyan-400" />
                <span>
                  Notice: All repository and demo buttons link to actual codebase repositories once configured by Shubham Thakur in <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-200">src/data/projectsData.js</code>.
                </span>
              </div>
            )}
          </div>

          {/* Footer Action Links */}
          <div className="sticky bottom-0 p-4 sm:p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs text-slate-400">
              Type: <strong className="text-white">{project.stats.type}</strong>
            </span>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn btn-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <Github size={14} /> View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
export default ProjectModal;

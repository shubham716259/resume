import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitCommit, ChevronDown, ChevronUp, GraduationCap, 
  Code, Cpu, Layers, Database, Sparkles, CheckCircle2 
} from 'lucide-react';
import { timelineData } from '../../data/timelineData';

export function JourneyTimeline() {
  const [expandedId, setExpandedId] = useState(timelineData[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
            <GitCommit size={13} />
            <span>04 // LEARNING PROGRESSION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Developer Journey & Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From foundational logic at Chitkara University to modern full-stack web applications and algorithmic engineering.
          </p>
        </div>

        {/* Vertical Connected Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-10">
          {timelineData.map((milestone, idx) => {
            const isExpanded = expandedId === milestone.id;

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Node Milestone Circle on Timeline Line */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-6 rounded-full bg-slate-950 border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                  style={{ borderColor: milestone.accent }}
                >
                  <div
                    className="w-2 h-2 rounded-full transition-transform"
                    style={{ backgroundColor: milestone.accent }}
                  />
                </div>

                {/* Left Phase Badge (Desktop view) */}
                <div className="hidden md:block absolute -left-44 top-3.5 w-32 text-right">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {milestone.phase}
                  </span>
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => toggleExpand(milestone.id)}
                  className={`glass-panel p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? 'border-cyan-500/40 bg-slate-900/90 shadow-xl'
                      : 'border-slate-800/80 bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${milestone.accent}15`,
                            color: milestone.accent,
                            border: `1px solid ${milestone.accent}40`
                          }}
                        >
                          {milestone.tag}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {milestone.institution}
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {milestone.title}
                      </h3>
                    </div>

                    <button
                      className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 group-hover:text-white transition-colors shrink-0"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Expandable Key Takeaways */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-slate-800 space-y-2"
                    >
                      <h4 className="font-mono text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                        Core Learnings & Execution:
                      </h4>
                      <div className="space-y-1.5">
                        {milestone.keyTakeaways.map((takeaway, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-start gap-2 text-xs text-slate-300 font-mono"
                          >
                            <CheckCircle2
                              size={14}
                              className="shrink-0 mt-0.5"
                              style={{ color: milestone.accent }}
                            />
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default JourneyTimeline;

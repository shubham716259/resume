import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Coffee, Cpu, FileCode, Database, Layout, 
  Palette, Atom, Server, Network, Boxes, CheckCircle2, 
  Smartphone, GitBranch, Terminal, Sparkles, Filter, ChevronRight
} from 'lucide-react';
import { Github } from '../ui/Icons';
import { skillsData, skillCategories } from '../../data/skillsData';

// Map icon string names to actual Lucide icons
const ICON_MAP = {
  Coffee: Coffee,
  Cpu: Cpu,
  FileCode: FileCode,
  Database: Database,
  Layout: Layout,
  Palette: Palette,
  Atom: Atom,
  Server: Server,
  Network: Network,
  Boxes: Boxes,
  CheckCircle2: CheckCircle2,
  Smartphone: Smartphone,
  GitBranch: GitBranch,
  Github: Github,
  Terminal: Terminal
};

export function SkillsUniverse() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 font-mono text-xs">
            <Sparkles size={13} />
            <span>02 // CAPABILITY MATRIX</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Interactive Skill Universe
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            My current engineering toolkit, continuous learning stack, and real-project applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid + Live Inspector Dock */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skills Constellation Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {filteredSkills.map((skill) => {
              const IconComponent = ICON_MAP[skill.icon] || Code2;
              const isSelected = activeSkill.name === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setActiveSkill(skill)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col items-center text-center justify-center relative overflow-hidden group ${
                    isSelected
                      ? 'bg-slate-800/90 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.3)]'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/50'
                  }`}
                >
                  {/* Glowing background hint on select */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />
                  )}

                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
                      : 'bg-slate-800/80 text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-800'
                  }`}>
                    <IconComponent size={22} />
                  </div>

                  <span className="font-display font-semibold text-xs text-white tracking-wide">
                    {skill.name}
                  </span>

                  <span className="font-mono text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Live Inspector Dock */}
          <div className="lg:col-span-4 sticky top-28">
            <AnimatePresence mode="wait">
              {activeSkill && (
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="glass-panel p-6 rounded-3xl border border-cyan-500/30 relative overflow-hidden shadow-2xl bg-slate-900/90"
                >
                  {/* Glowing Edge Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                        {React.createElement(ICON_MAP[activeSkill.icon] || Code2, { size: 20 })}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-white">
                          {activeSkill.name}
                        </h3>
                        <span className="font-mono text-xs text-cyan-400">
                          {activeSkill.level}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 uppercase">
                      {activeSkill.category}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                        Capability Overview
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {activeSkill.description}
                      </p>
                    </div>

                    {/* Highlighted Concepts */}
                    <div>
                      <h4 className="font-mono text-[11px] text-purple-400 uppercase tracking-wider mb-1">
                        Key Competencies
                      </h4>
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-xs text-slate-300">
                        {activeSkill.highlight}
                      </div>
                    </div>

                    {/* Associated Projects */}
                    {activeSkill.projects && activeSkill.projects.length > 0 && (
                      <div>
                        <h4 className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider mb-1.5">
                          Demonstrated In Projects
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeSkill.projects.map((proj, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-1"
                            >
                              <ChevronRight size={12} /> {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toolkit Disclaimer */}
                  <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                    Active skillset practiced across coursework & independent engineering projects.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
export default SkillsUniverse;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Code, CheckSquare, RefreshCw, 
  Terminal, Search, Cpu, ArrowRight, Play, CheckCircle2 
} from 'lucide-react';

export function PhilosophySection() {
  const [activeStep, setActiveStep] = useState(2);
  const [testStatus, setTestStatus] = useState('passed');

  const principles = [
    {
      id: 'principle-1',
      number: '01',
      title: 'Understand the problem before writing code.',
      subtitle: 'Deconstruction over premature syntax',
      description:
        'A bug discovered in the specification takes seconds to fix; a bug embedded in code takes hours. I map out inputs, edge cases, time/space constraints, and data flows before typing the first line of code.',
      accent: '#00f0ff',
      interactiveType: 'flow'
    },
    {
      id: 'principle-2',
      number: '02',
      title: 'Build, test, debug, and improve.',
      subtitle: 'Rigorous iterative engineering',
      description:
        'Software is never complete on the first pass. I favor modular components, systematic test cases for boundary values, methodical browser/IDE debugging, and continuous refactoring for clarity.',
      accent: '#a855f7',
      interactiveType: 'tests'
    },
    {
      id: 'principle-3',
      number: '03',
      title: 'Keep learning through practical projects.',
      subtitle: 'Applied craftsmanship & curiosity',
      description:
        'Reading documentation and syntax manuals is necessary, but true mastery happens when building real applications that solve genuine problems—like CookFusion and Eco-Recycler.',
      accent: '#10b981',
      interactiveType: 'flywheel'
    }
  ];

  const steps = [
    { num: 1, label: 'Requirement Analysis' },
    { num: 2, label: 'Constraint Modeling' },
    { num: 3, label: 'Algorithm Design' },
    { num: 4, label: 'Implementation' }
  ];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 font-mono text-xs">
            <Lightbulb size={13} />
            <span>05 // ENGINEERING MINDSET</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            How I Build
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Three core engineering principles that guide how I design, write, test, and evolve software.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Principle 1 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-cyan-400">01</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  Pre-computation
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white">
                Understand the problem before writing code.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Deconstruct requirements, trace boundary edge cases, and establish clean data contracts before rushing into syntax.
              </p>
            </div>

            {/* Interactive Step Simulator */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 font-mono text-xs">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                Workflow Decomposition:
              </span>
              <div className="space-y-2">
                {steps.map((st) => (
                  <button
                    key={st.num}
                    onClick={() => setActiveStep(st.num)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors ${
                      activeStep === st.num
                        ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{st.num}. {st.label}</span>
                    {activeStep >= st.num && (
                      <CheckCircle2 size={13} className="text-cyan-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-purple-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-purple-400">02</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
                  Validation Loop
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white">
                Build, test, debug, and improve.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Iterate rapidly with clear unit boundaries. Trace runtime bottlenecks, inspect network waterfalls, and refactor for elegance.
              </p>
            </div>

            {/* Interactive Test Suite Simulator */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Test Suite Runner</span>
                <span className="text-[10px] text-emerald-400 font-bold">4/4 PASSED (12ms)</span>
              </div>
              <div className="space-y-1 text-[11px] pt-1">
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span className="text-[9px]">✔</span> testBoundaryInputs()
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span className="text-[9px]">✔</span> testNullSafetyAndTypes()
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span className="text-[9px]">✔</span> testTimeComplexityO_N()
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span className="text-[9px]">✔</span> testResponsiveFlexLayout()
                </div>
              </div>
              <div className="pt-2 text-[10px] text-purple-300 border-t border-slate-800 flex items-center gap-1">
                <RefreshCw size={10} className="animate-spin" /> Continuous Iteration
              </div>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-emerald-400">03</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  Applied Growth
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white">
                Keep learning through practical projects.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Theoretical knowledge solidifies when applied to real user workflows, API integrations, responsive interfaces, and live databases.
              </p>
            </div>

            {/* Interactive Knowledge Flywheel */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 font-mono text-xs">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                The Learning Flywheel:
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white block">1. Theory & DSA</strong>
                  Chitkara University Labs
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-emerald-300">
                  <strong className="text-white block">2. Real Project</strong>
                  CookFusion & Eco-Recycler
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                  <strong className="text-white block">3. User Feedback</strong>
                  Refining UX & Latency
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-purple-300">
                  <strong className="text-white block">4. Mastery</strong>
                  Ready for Engineering Roles
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default PhilosophySection;

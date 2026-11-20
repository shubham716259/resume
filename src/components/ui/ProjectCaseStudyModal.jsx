import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Server,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { Github as GithubIcon } from './Icons';
import { ProjectCardMockup } from './ProjectCardMockup';
import { soundFX } from '../../utils/soundEffects';

export function ProjectCaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'challenges' | 'architecture'

  // Handle ESC key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFX.playClick();
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      soundFX.playSuccess();
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleTabChange = (tab) => {
    soundFX.playClick();
    setActiveTab(tab);
  };

  const handleClose = () => {
    soundFX.playClick();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Pixelated Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#20251f]/80 backdrop-blur-xs transition-opacity"
      />

      {/* Retro Pixel Modal Container */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col border-[4px] border-[#20251f] bg-[#f4f0e4] text-[#20251f] shadow-[10px_10px_0_#20251f]">
        
        {/* Retro Title Bar */}
        <div className="flex items-center justify-between border-b-[3px] border-[#20251f] bg-[#20251f] px-4 py-3 text-white">
          <div className="flex items-center gap-3">
            <span
              className="h-3 w-3 border border-white"
              style={{ backgroundColor: project.accentColor || '#f3c75e' }}
            />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#dce9d3]">
                Case Study // {project.category}
              </span>
              <h2 id="case-study-title" className="font-mono text-base font-black uppercase tracking-tight text-white sm:text-lg">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden font-mono text-[9px] uppercase tracking-wider text-[#9aa395] sm:inline">
              [ESC TO EXIT]
            </span>
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="border-2 border-white bg-[#e58c63] px-2.5 py-1 font-mono text-xs font-black uppercase text-white shadow-[2px_2px_0_#000] hover:bg-[#d4784e]"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Retro Pixel Navigation Tabs */}
        <div className="flex border-b-[3px] border-[#20251f] bg-[#e8e4d7] px-2 pt-2">
          <div className="flex gap-2">
            {[
              { id: 'overview', label: '01 / Overview & Mockup' },
              { id: 'challenges', label: '02 / Engineering Challenges' },
              { id: 'architecture', label: '03 / Architecture & Stack' }
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`border-t-[3px] border-x-[3px] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider transition-colors sm:text-xs ${
                    isSelected
                      ? 'border-[#20251f] bg-[#f4f0e4] text-[#20251f] -mb-[3px] pb-[11px]'
                      : 'border-transparent bg-transparent text-[#647060] hover:bg-[#dce9d3] hover:text-[#20251f]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: OVERVIEW & MOCKUP */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Interactive Mockup Component */}
              <div className="border-[3px] border-[#20251f] bg-[#20251f] p-2 shadow-[4px_4px_0_#20251f]">
                <div className="mb-2 flex items-center justify-between px-2 font-mono text-[8px] uppercase tracking-widest text-[#a6b4a2]">
                  <span>System Runtime Preview</span>
                  <span>Target: Web / Desktop Engine</span>
                </div>
                <div className="overflow-hidden border border-[#3b473a] bg-black">
                  <ProjectCardMockup projectId={project.id} accentColor={project.accentColor} />
                </div>
              </div>

              {/* Subtitle & High-Level Summary */}
              <div className="border-l-[5px] border-[#f3c75e] bg-white p-4 border-[2px] border-[#20251f] shadow-[3px_3px_0_#20251f]">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#687063]">
                  Project Objective
                </span>
                <p className="mt-1 text-sm leading-relaxed text-[#20251f] font-medium">
                  {project.description}
                </p>
              </div>

              {/* Problem vs Solution Matrix */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-[3px] border-[#20251f] bg-[#fae8e4] p-4 shadow-[4px_4px_0_#20251f]">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase text-[#ab3d29]">
                    <AlertTriangle size={15} /> The Engineering Problem
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#4f2720]">
                    {project.problem}
                  </p>
                </div>

                <div className="border-[3px] border-[#20251f] bg-[#e3f0e5] p-4 shadow-[4px_4px_0_#20251f]">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase text-[#296a36]">
                    <CheckCircle2 size={15} /> The Implemented Solution
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#1b3d22]">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Performance / Quality Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#5b705c]">
                    Key Performance Indicators & Verified Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-[#20251f] bg-white p-3 text-center shadow-[3px_3px_0_#20251f]"
                      >
                        <span className="block font-mono text-[8px] uppercase tracking-wider text-[#697264]">
                          {metric.label}
                        </span>
                        <span className="mt-1 block font-mono text-xs font-black uppercase text-[#20251f] sm:text-sm">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Feature Highlights */}
              <div>
                <h4 className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#5b705c]">
                  Key Technical Capabilities
                </h4>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 border-2 border-[#20251f] bg-white p-3 font-mono text-xs shadow-[2px_2px_0_#20251f]"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 border border-[#20251f] bg-[#f3c75e]" />
                      <span className="text-[#333a30] leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENGINEERING CHALLENGES */}
          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <div className="border-2 border-[#20251f] bg-[#dce9d3] p-3 font-mono text-[10px] font-bold uppercase">
                <span className="text-[#3b593f]">NOTE:</span> In-depth technical bottlenecks tackled during development, showcasing problem decomposition and architectural tradeoffs.
              </div>

              {project.challenges && project.challenges.length > 0 ? (
                project.challenges.map((challenge, idx) => (
                  <article
                    key={idx}
                    className="border-[3px] border-[#20251f] bg-white p-4 shadow-[4px_4px_0_#20251f]"
                  >
                    <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase text-[#ab3d29]">
                      <span className="border border-[#20251f] bg-[#f3c75e] px-1.5 py-0.5 text-[#20251f]">
                        CHALLENGE {idx + 1}
                      </span>
                      <h4 className="text-xs font-black uppercase tracking-tight text-[#20251f] sm:text-sm">
                        {challenge.title}
                      </h4>
                    </div>

                    <div className="mt-3 space-y-3 font-mono text-xs">
                      <div className="border-l-2 border-[#ab3d29] pl-3">
                        <span className="block text-[9px] font-bold uppercase text-[#ab3d29]">
                          [ The Obstacle & Technical Constraint ]
                        </span>
                        <p className="mt-1 font-sans text-xs text-[#545b51] leading-relaxed">
                          {challenge.problem}
                        </p>
                      </div>

                      <div className="border-l-2 border-[#296a36] pl-3">
                        <span className="block text-[9px] font-bold uppercase text-[#296a36]">
                          [ Resolution & Engineering Tradeoff ]
                        </span>
                        <p className="mt-1 font-sans text-xs text-[#20251f] font-medium leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="border-2 border-dashed border-[#20251f] p-6 text-center font-mono text-xs text-[#647060]">
                  Engineering challenge log for this project is currently being compiled into documentation.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ARCHITECTURE & TECH STACK */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Blueprint Card */}
              {project.architecture ? (
                <div className="border-[3px] border-[#20251f] bg-white p-5 shadow-[4px_4px_0_#20251f]">
                  <h4 className="mb-4 flex items-center gap-2 border-b-2 border-[#20251f] pb-3 font-mono text-xs font-black uppercase text-[#20251f]">
                    <Server size={15} /> System Architecture Blueprint
                  </h4>
                  <dl className="grid gap-4 sm:grid-cols-2 font-mono text-xs">
                    <div className="border border-[#20251f] bg-[#f8f6ee] p-3">
                      <dt className="text-[9px] font-black uppercase text-[#687063]">
                        Frontend Structure
                      </dt>
                      <dd className="mt-1 font-sans text-xs text-[#20251f] font-medium">
                        {project.architecture.frontend}
                      </dd>
                    </div>

                    <div className="border border-[#20251f] bg-[#f8f6ee] p-3">
                      <dt className="text-[9px] font-black uppercase text-[#687063]">
                        State & Persistence
                      </dt>
                      <dd className="mt-1 font-sans text-xs text-[#20251f] font-medium">
                        {project.architecture.statePersistence}
                      </dd>
                    </div>

                    <div className="border border-[#20251f] bg-[#f8f6ee] p-3">
                      <dt className="text-[9px] font-black uppercase text-[#687063]">
                        Data Flow Paradigm
                      </dt>
                      <dd className="mt-1 font-sans text-xs text-[#20251f] font-medium">
                        {project.architecture.dataFlow}
                      </dd>
                    </div>

                    <div className="border border-[#20251f] bg-[#f8f6ee] p-3">
                      <dt className="text-[9px] font-black uppercase text-[#687063]">
                        Design Patterns
                      </dt>
                      <dd className="mt-1 font-sans text-xs text-[#20251f] font-medium">
                        {project.architecture.designPattern}
                      </dd>
                    </div>
                  </dl>
                </div>
              ) : null}

              {/* Technologies Applied */}
              <div>
                <h4 className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#5b705c]">
                  Active Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 border-2 border-[#20251f] bg-white px-3 py-1.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_#20251f]"
                    >
                      <span className="h-1.5 w-1.5 bg-[#f3c75e]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Retro Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-[#20251f] bg-[#e8e4d7] p-4">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase font-bold text-[#647060]">
            <Activity size={12} className="text-[#3b593f]" />
            Status: <span className="text-[#20251f]">{project.stats.status}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2 border-2 border-[#20251f] bg-white px-4 py-2 font-mono text-[10px] font-black uppercase shadow-[3px_3px_0_#20251f] hover:bg-[#dce9d3]"
              >
                <GithubIcon size={13} /> View Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2 border-2 border-[#20251f] bg-[#f3c75e] px-4 py-2 font-mono text-[10px] font-black uppercase text-[#20251f] shadow-[3px_3px_0_#20251f] hover:bg-[#e9b94e]"
              >
                Live Prototype <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectCaseStudyModal;

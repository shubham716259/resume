import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, ExternalLink, ChevronRight, 
  Sparkles, Layers, ArrowUpRight, Filter
} from 'lucide-react';
import { Github } from '../ui/Icons';
import { projectsData } from '../../data/projectsData';
import { ProjectCardMockup } from '../ui/ProjectCardMockup';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web App', 'Java Desktop', 'Data & SQL', 'Utilities'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-gradient-to-l from-purple-500/10 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <FolderGit2 size={13} />
            <span>03 // FEATURED ENGINEERING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Practical Software & Web Experiments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tangible applications solving real-world challenges, from full-stack web platforms to Java desktop software and SQL analytics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-cursor="project"
                data-cursor-label="Explore"
                onClick={() => setActiveModalProject(project)}
                className="glass-panel rounded-3xl border border-slate-800 hover:border-slate-600 p-5 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, rgba(17, 24, 39, 0.7), rgba(11, 15, 25, 0.9))'
                }}
              >
                {/* Accent Top Border Line on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="space-y-4">
                  {/* Interactive UI Mockup Preview */}
                  <div className="rounded-2xl overflow-hidden border border-slate-800/80 group-hover:scale-[1.02] transition-transform duration-300">
                    <ProjectCardMockup projectId={project.id} accentColor={project.accentColor} />
                  </div>

                  {/* Project Titles & Category */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                      <span className="uppercase tracking-wider text-[11px]" style={{ color: project.accentColor }}>
                        {project.category}
                      </span>
                      <span>{project.stats.status}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Action Bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Architecture</span>
                    <ChevronRight size={14} />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                        title="GitHub Code"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
export default ProjectsSection;

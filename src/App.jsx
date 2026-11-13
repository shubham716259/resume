import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { Github as GithubMark } from './components/ui/Icons';
import { ResumeModal } from './components/ui/ResumeModal';
import { ScrollPixelParticles } from './components/ui/ScrollPixelParticles';
import { projectsData } from './data/projectsData';
import { skillsData } from './data/skillsData';
import { timelineData } from './data/timelineData';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' }
];

const skillGroups = [
  { label: 'Programming', category: 'programming' },
  { label: 'Frontend', category: 'frontend' },
  { label: 'Data', category: 'database' },
  { label: 'Core concepts', category: 'core' },
  { label: 'Tools', category: 'tools' }
];

const featuredProjects = projectsData.filter((project) => project.featured).slice(0, 4);

function PixelScene() {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Pixel-art scene of a developer working at a computer"
      className="pixel-art h-full w-full"
    >
      <rect width="320" height="320" fill="#a9d8b2" />
      <rect y="206" width="320" height="114" fill="#759b77" />
      <rect x="0" y="214" width="44" height="12" fill="#638366" />
      <rect x="52" y="214" width="30" height="12" fill="#638366" />
      <rect x="228" y="214" width="38" height="12" fill="#638366" />
      <rect x="276" y="214" width="44" height="12" fill="#638366" />

      <rect x="242" y="34" width="40" height="40" fill="#f3c75e" />
      <rect x="250" y="26" width="24" height="8" fill="#f3c75e" />
      <rect x="234" y="42" width="8" height="24" fill="#f3c75e" />
      <rect x="282" y="42" width="8" height="24" fill="#f3c75e" />

      <rect x="42" y="66" width="32" height="8" fill="#eaf0d7" />
      <rect x="50" y="58" width="24" height="8" fill="#eaf0d7" />
      <rect x="74" y="66" width="24" height="8" fill="#eaf0d7" />
      <rect x="222" y="102" width="24" height="8" fill="#eaf0d7" />
      <rect x="230" y="94" width="32" height="8" fill="#eaf0d7" />
      <rect x="254" y="102" width="16" height="8" fill="#eaf0d7" />

      <rect x="24" y="174" width="16" height="32" fill="#426b4c" />
      <rect x="16" y="150" width="32" height="32" fill="#426b4c" />
      <rect x="24" y="134" width="16" height="16" fill="#426b4c" />
      <rect x="272" y="178" width="16" height="28" fill="#426b4c" />
      <rect x="264" y="154" width="32" height="32" fill="#426b4c" />
      <rect x="272" y="138" width="16" height="16" fill="#426b4c" />

      <rect x="116" y="86" width="88" height="16" fill="#24302a" />
      <rect x="100" y="102" width="120" height="48" fill="#24302a" />
      <rect x="108" y="150" width="104" height="40" fill="#e6ad7c" />
      <rect x="100" y="118" width="16" height="40" fill="#24302a" />
      <rect x="204" y="118" width="16" height="32" fill="#24302a" />
      <rect x="124" y="126" width="8" height="8" fill="#17211c" />
      <rect x="180" y="126" width="8" height="8" fill="#17211c" />
      <rect x="148" y="150" width="24" height="8" fill="#a75e51" />
      <rect x="140" y="190" width="40" height="16" fill="#e6ad7c" />

      <rect x="96" y="206" width="128" height="72" fill="#315d58" />
      <rect x="80" y="214" width="16" height="48" fill="#e6ad7c" />
      <rect x="224" y="214" width="16" height="48" fill="#e6ad7c" />
      <rect x="112" y="278" width="40" height="20" fill="#263832" />
      <rect x="168" y="278" width="40" height="20" fill="#263832" />

      <rect x="30" y="258" width="260" height="18" fill="#704d3f" />
      <rect x="46" y="276" width="14" height="30" fill="#4a3730" />
      <rect x="260" y="276" width="14" height="30" fill="#4a3730" />
      <rect x="122" y="224" width="76" height="48" fill="#26343a" />
      <rect x="130" y="232" width="60" height="32" fill="#dae4c5" />
      <rect x="150" y="266" width="20" height="6" fill="#c6d3b6" />
      <rect x="102" y="238" width="12" height="20" fill="#f3c75e" />
      <rect x="206" y="230" width="10" height="28" fill="#e98462" />
    </svg>
  );
}

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f0e4] text-[#20251f]">
      <ScrollPixelParticles />
      <header className="sticky top-0 z-40 border-b-[3px] border-[#20251f] bg-[#f4f0e4]">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border-[3px] border-[#20251f] bg-[#f3c75e] font-mono text-sm font-black shadow-[3px_3px_0_#20251f]">
              ST
            </span>
            <span>
              <span className="block font-mono text-xs font-black uppercase tracking-wide">Shubham Thakur</span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#687063]">Developer profile · v1.0</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="border-2 border-transparent px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider hover:border-[#20251f] hover:bg-[#dce9d3]"
              >
                <span className="mr-1 text-[#789478]">0{index + 1}</span> {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="border-2 border-[#20251f] bg-white px-4 py-2.5 font-mono text-[10px] font-bold uppercase shadow-[3px_3px_0_#20251f] hover:bg-[#dce9d3]"
            >
              Open résumé
            </button>
            <a
              href="#contact"
              className="border-2 border-[#20251f] bg-[#20251f] px-4 py-2.5 font-mono text-[10px] font-bold uppercase text-white shadow-[3px_3px_0_#789478] hover:bg-[#355d48]"
            >
              Let&apos;s talk <ArrowUpRight size={13} className="ml-1 inline" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            className="border-2 border-[#20251f] bg-white p-2.5 shadow-[3px_3px_0_#20251f] sm:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav aria-label="Mobile navigation" className="border-t-[3px] border-[#20251f] bg-[#f4f0e4] px-5 py-3 sm:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-[#c7c7b9] py-3 font-mono text-xs font-bold uppercase"
                >
                  <span className="mr-2 text-[#789478]">0{index + 1}</span>{item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  closeMenu();
                  setIsResumeOpen(true);
                }}
                className="mt-3 self-start py-2 font-mono text-xs font-bold uppercase"
              >
                Open résumé
              </button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="pixel-grid relative scroll-mt-24 border-b-[3px] border-[#20251f]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-20">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border-2 border-[#20251f] bg-[#dce9d3] px-3 py-2 font-mono text-[9px] font-black uppercase tracking-[0.12em] shadow-[3px_3px_0_#20251f]">
                <span className="h-2 w-2 border border-[#20251f] bg-[#5c8d64]" />
                Available for internships
              </div>
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#5b705c]">
                Computer science · Digital craft
              </p>
              <h1 className="max-w-3xl font-mono text-[clamp(2.5rem,7vw,5.75rem)] font-black uppercase leading-[0.98] tracking-[-0.09em]">
                Hello, I&apos;m
                <span className="block text-[#598063]">Shubham.</span>
                <span className="mt-3 block text-[0.45em] leading-tight tracking-[-0.035em] text-[#51594f]">
                  I build useful things
                  <br />
                  with code &amp; curiosity.
                </span>
              </h1>
              <p className="mt-7 max-w-xl border-l-[5px] border-[#e58c63] pl-4 text-sm leading-6 text-[#545b51] sm:text-base">
                Computer Science Engineering student at Chitkara University. I enjoy turning small ideas into thoughtful, practical digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 border-2 border-[#20251f] bg-[#f3c75e] px-5 py-3 font-mono text-[10px] font-black uppercase shadow-[4px_4px_0_#20251f] hover:bg-[#e9b94e]"
                >
                  View my work <ArrowDown size={14} />
                </a>
                <a
                  href="#about"
                  className="border-2 border-[#20251f] bg-white px-5 py-3 font-mono text-[10px] font-black uppercase shadow-[4px_4px_0_#20251f] hover:bg-[#e1eadc]"
                >
                  Player profile
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t-2 border-dashed border-[#b8bbae] pt-5 font-mono text-[10px] font-bold uppercase text-[#687063]">
                <span className="inline-flex items-center gap-2"><MapPin size={13} /> Punjab, India</span>
                <span className="inline-flex items-center gap-2"><GraduationCap size={14} /> Chitkara University</span>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[500px]">
              <div className="pixel-panel bg-[#20251f] p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between border-b border-[#d9e8d1]/30 pb-3 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#e2ead8]">
                  <span>Pixel life / 001</span>
                  <span>Level: learning</span>
                </div>
                <div className="overflow-hidden border-[3px] border-[#20251f] bg-[#a9d8b2]">
                  <PixelScene />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[8px] font-bold uppercase tracking-wide text-[#e2ead8] sm:text-[9px]">
                  <span className="border border-[#e2ead8]/25 px-2 py-2">[ code ]</span>
                  <span className="border border-[#e2ead8]/25 px-2 py-2">[ learn ]</span>
                  <span className="border border-[#e2ead8]/25 px-2 py-2">[ repeat ]</span>
                </div>
              </div>
              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-[#697264]">
                A tiny pixel portrait of a maker at work
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-[3px] border-[#20251f] bg-[#e8e4d7]">
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.1em] sm:grid-cols-3 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 border-2 border-[#c7c7b9] bg-[#f4f0e4] px-3 py-3">
              <span className="text-[#82987a]">01 //</span> Current quest: learn by building
            </div>
            <div className="flex items-center gap-3 border-2 border-[#c7c7b9] bg-[#f4f0e4] px-3 py-3">
              <span className="text-[#82987a]">02 //</span> Main tools: Java · React · SQL
            </div>
            <div className="flex items-center gap-3 border-2 border-[#c7c7b9] bg-[#f4f0e4] px-3 py-3">
              <span className="text-[#82987a]">03 //</span> Status: open to opportunities
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-b-[3px] border-[#20251f] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#648269]">01 / Selected work</p>
                <h2 className="font-mono text-2xl font-black uppercase leading-tight tracking-[-0.07em] sm:text-4xl">Things I&apos;ve been building.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#62685e]">
                Personal projects and experiments that help me learn how useful software is made.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <article key={project.id} className="pixel-panel flex flex-col border-[3px] border-[#20251f] bg-white">
                  <div
                    className="relative flex min-h-40 items-start justify-between overflow-hidden border-b-[3px] border-[#20251f] p-4 sm:min-h-48 sm:p-5"
                    style={{ backgroundColor: `${project.accentColor}26` }}
                  >
                    <span className="z-10 border-2 border-[#20251f] bg-[#f4f0e4] px-2 py-1 font-mono text-[9px] font-bold uppercase">
                      Project / 0{index + 1}
                    </span>
                    <span className="z-10 bg-[#20251f] px-2 py-1 font-mono text-[9px] font-bold uppercase text-white">
                      {project.category}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex h-20 w-20 items-center justify-center border-[5px] border-[#20251f] font-mono text-3xl font-black text-[#20251f] shadow-[7px_7px_0_#20251f] sm:h-24 sm:w-24"
                        style={{ backgroundColor: project.accentColor }}
                        aria-hidden="true"
                      >
                        {project.title.slice(0, 1)}
                      </div>
                    </div>
                    <Code2 size={17} className="absolute bottom-4 left-4 text-[#20251f]" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-mono text-lg font-black uppercase tracking-tight">{project.title}</h3>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-wide text-[#6a7066]">{project.subtitle}</p>
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="border-2 border-[#20251f] bg-[#f4f0e4] p-2 shadow-[2px_2px_0_#20251f] hover:bg-[#dce9d3]"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[#545b51]">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span key={technology} className="border border-[#b8bbae] bg-[#f4f0e4] px-2 py-1 font-mono text-[8px] font-bold uppercase text-[#51594f]">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="pixel-grid scroll-mt-24 border-b-[3px] border-[#20251f] bg-[#e8e4d7] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
            <div>
              <p className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#648269]">02 / Player profile</p>
              <h2 className="max-w-xl font-mono text-2xl font-black uppercase leading-tight tracking-[-0.07em] sm:text-4xl">
                Curious by default. Deliberate by design.
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-[#545b51]">
                <p>
                  I&apos;m studying Computer Science Engineering at Chitkara University. I enjoy taking a problem apart, understanding what matters, and building a thoughtful solution from the ground up.
                </p>
                <p>
                  My work spans Java and data structures, relational databases, and modern web development. Projects are where those ideas meet: a place to learn through building, testing, and improving.
                </p>
              </div>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="mt-7 border-2 border-[#20251f] bg-[#f3c75e] px-4 py-3 font-mono text-[10px] font-black uppercase shadow-[4px_4px_0_#20251f] hover:bg-[#e9b94e]"
              >
                Open résumé file <ArrowUpRight size={14} className="ml-1 inline" />
              </button>
            </div>

            <aside className="pixel-panel border-[3px] border-[#20251f] bg-[#f4f0e4] p-5 sm:p-7">
              <div className="flex items-center gap-4 border-b-2 border-dashed border-[#b8bbae] pb-5">
                <div className="flex h-16 w-16 items-center justify-center border-[3px] border-[#20251f] bg-[#315d58] font-mono text-xl font-black text-white shadow-[4px_4px_0_#20251f]">
                  ST
                </div>
                <div>
                  <h3 className="font-mono text-sm font-black uppercase">Shubham Thakur</h3>
                  <p className="mt-1 font-mono text-[9px] uppercase text-[#687063]">Computer science student</p>
                </div>
              </div>
              <dl className="divide-y divide-[#c7c7b9] font-mono text-[10px] uppercase">
                <div className="flex justify-between gap-4 py-4"><dt className="text-[#687063]">Location</dt><dd>Punjab, India</dd></div>
                <div className="flex justify-between gap-4 py-4"><dt className="text-[#687063]">Education</dt><dd>Chitkara University</dd></div>
                <div className="flex justify-between gap-4 py-4"><dt className="text-[#687063]">Focus</dt><dd>Software &amp; web</dd></div>
                <div className="flex justify-between gap-4 py-4"><dt className="text-[#687063]">Status</dt><dd className="text-[#47724f]">Open to internships</dd></div>
              </dl>
              <div className="mt-2 border-2 border-[#20251f] bg-[#dce9d3] p-3 font-mono text-[9px] font-bold uppercase leading-5">
                Current quest: make useful things, learn something new, repeat.
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 border-b-[3px] border-[#20251f] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10">
              <p className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#648269]">03 / Inventory</p>
              <h2 className="font-mono text-2xl font-black uppercase leading-tight tracking-[-0.07em] sm:text-4xl">Tools in my backpack.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {skillGroups.map((group) => {
                const skills = skillsData.filter((skill) => skill.category === group.category);
                if (!skills.length) return null;

                return (
                  <div key={group.category} className="border-[3px] border-[#20251f] bg-white p-4 shadow-[4px_4px_0_#20251f]">
                    <h3 className="mb-4 border-b-2 border-[#20251f] pb-3 font-mono text-[9px] font-black uppercase text-[#5b705c]">{group.label}</h3>
                    <ul className="space-y-2.5">
                      {skills.map((skill) => (
                        <li key={skill.name} className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase">
                          <span className="h-2 w-2 border border-[#20251f] bg-[#f3c75e]" />
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="journey" className="pixel-grid scroll-mt-24 border-b-[3px] border-[#20251f] bg-[#e8e4d7] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
            <div>
              <p className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#648269]">04 / Save file</p>
              <h2 className="font-mono text-2xl font-black uppercase leading-tight tracking-[-0.07em] sm:text-4xl">Always in progress.</h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[#62685e]">
                From computer science fundamentals to complete web applications, each step adds a new way to think and build.
              </p>
            </div>
            <ol className="border-[3px] border-[#20251f] bg-[#f4f0e4] px-5 sm:px-7">
              {timelineData.map((milestone, index) => (
                <li key={milestone.id} className="grid gap-2 border-b border-dashed border-[#b8bbae] py-5 last:border-0 sm:grid-cols-[96px_1fr] sm:gap-5">
                  <span className="font-mono text-[9px] font-bold uppercase text-[#648269]">0{index + 1} / {milestone.phase}</span>
                  <div>
                    <h3 className="font-mono text-xs font-black uppercase">{milestone.title}</h3>
                    <p className="mt-1 font-mono text-[9px] uppercase text-[#687063]">{milestone.institution}</p>
                    <p className="mt-3 text-xs leading-5 text-[#62685e]">{milestone.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="pixel-panel grid gap-8 border-[3px] border-[#20251f] bg-[#315d58] p-6 text-white shadow-[7px_7px_0_#20251f] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#d3e6c6]">05 / End of level? Not quite.</p>
                <h2 className="max-w-2xl font-mono text-2xl font-black uppercase leading-tight tracking-[-0.07em] sm:text-4xl">Have a good problem to solve?</h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[#e0e9d8]">
                  I&apos;m open to internships, collaborations, and conversations about building useful software.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/shubhamthakur-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#20251f] bg-[#f3c75e] px-4 py-3 font-mono text-[9px] font-black uppercase text-[#20251f] shadow-[4px_4px_0_#20251f] hover:bg-[#e9b94e]"
                >
                  Connect on LinkedIn <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://github.com/shubhamthakur-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white bg-transparent px-4 py-3 font-mono text-[9px] font-black uppercase text-white hover:bg-white hover:text-[#20251f]"
                >
                  <GithubMark size={14} /> GitHub
                </a>
              </div>
            </div>
            <footer className="flex flex-col justify-between gap-3 py-6 font-mono text-[9px] font-bold uppercase tracking-wide text-[#687063] sm:flex-row sm:items-center">
              <span>© 2026 Shubham Thakur</span>
              <span>Made of pixels, powered by React &amp; Tailwind CSS</span>
              <a href="#home" className="hover:text-[#20251f]">Back to top ↑</a>
            </footer>
          </div>
        </section>
      </main>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;

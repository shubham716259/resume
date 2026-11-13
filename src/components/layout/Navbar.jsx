import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal, ChevronRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'philosophy', label: 'How I Build' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Navigate to Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="font-display font-extrabold text-lg text-white group-hover:scale-110 transition-transform">
                ST
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/0 via-cyan-400/10 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                Shubham Thakur
              </span>
              <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CSE @ Chitkara Univ
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/25 to-purple-500/25 border border-cyan-400/50 -z-10 shadow-[0_0_12px_rgba(0,240,255,0.3)]" />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="magnetic-btn btn-secondary text-xs py-2 px-3.5 flex items-center gap-1.5"
            >
              <FileText size={14} className="text-cyan-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="magnetic-btn btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
            >
              <Sparkles size={14} />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-mono"
              aria-label="View Resume"
            >
              CV
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 sm:hidden bg-slate-950/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn">
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Terminal size={12} /> Navigation System
            </div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} className="text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full magnetic-btn btn-secondary text-sm py-3 justify-center"
            >
              <FileText size={16} className="text-cyan-400" /> View Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full magnetic-btn btn-primary text-sm py-3 justify-center"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Navbar;

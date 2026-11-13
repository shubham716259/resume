import { ArrowUp, Mail, Heart, Terminal, Sparkles, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center font-display font-extrabold text-white text-base">
                ST
              </div>
              <span className="font-display font-bold text-lg text-white">Shubham Thakur</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Computer Science Engineering student at Chitkara University passionate about algorithmic problem solving, software engineering, and turning creative concepts into responsive digital products.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="status-pulse">
                <span className="status-pulse-ring" />
                <span className="status-pulse-dot" />
              </span>
              <span className="text-xs font-mono text-emerald-400 font-medium">
                Open to Learning Opportunities & Internships
              </span>
            </div>
          </div>

          {/* Quick Section Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Terminal size={14} className="text-cyan-400" /> Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">/about-me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">/technical-toolkit</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">/featured-projects</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-cyan-300 transition-colors">/learning-journey</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-cyan-300 transition-colors">/how-i-build</a>
              </li>
            </ul>
          </div>

          {/* Social Presence & Location */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Sparkles size={14} className="text-purple-400" /> Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/shubhamthakur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/shubhamthakur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shubhamthakur.dev@example.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-emerald-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5 pt-2">
              <MapPin size={12} className="text-slate-400" /> Punjab, India (Chitkara Univ)
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Shubham Thakur. All content editable and authentic.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Crafted with <Heart size={12} className="text-rose-500 fill-rose-500" /> & React Three Fiber
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors p-1"
              aria-label="Back to top"
            >
              Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

import React, { useEffect } from 'react';
import { X, Printer, Download, ExternalLink, Mail, MapPin, GraduationCap, Code, Database, Terminal } from 'lucide-react';

export function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 print:p-0">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <div
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto z-10 text-slate-100 flex flex-col print:border-none print:shadow-none print:max-h-full print:bg-white print:text-black"
        >
          {/* Top Bar with Print / Download / Close */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-display font-bold text-sm sm:text-base text-white">
                Shubham Thakur — Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="magnetic-btn btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
                title="Print or Save as PDF"
              >
                <Printer size={14} /> Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                aria-label="Close resume modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 space-y-6 print:p-0 print:text-black bg-slate-950/40 print:bg-white">
            {/* Header / Identity */}
            <div className="border-b border-slate-800 pb-6 print:border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="font-display text-3xl font-extrabold text-white print:text-black">
                    Shubham Thakur
                  </h1>
                  <p className="font-mono text-cyan-400 print:text-cyan-800 text-sm mt-1">
                    Computer Science Engineering Student • Aspiring Software Engineer
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-300 print:text-slate-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-cyan-400" /> Chitkara University, Punjab / Chandigarh
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="text-cyan-400" /> shubhamthakur.dev@example.com
                  </div>
                  <div className="text-emerald-400 print:text-emerald-800 font-semibold">
                    ● Open to Internships & Learning Opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Education */}
            <div className="space-y-2">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 flex items-center gap-2">
                <GraduationCap size={16} /> Education
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 print:border-slate-300 print:bg-slate-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-white print:text-black text-sm">
                    Bachelor of Engineering — Computer Science & Engineering
                  </h3>
                  <span className="font-mono text-xs text-cyan-300 print:text-slate-600">Currently Pursuing</span>
                </div>
                <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                  Chitkara University, Punjab, India
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                  Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL), Operating Systems, Computer Networks, Web Technologies.
                </p>
              </div>
            </div>

            {/* Technical Skills Universe */}
            <div className="space-y-3">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-purple-400 print:text-slate-900 flex items-center gap-2">
                <Code size={16} /> Technical Toolkit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:border-slate-300">
                  <span className="font-bold text-cyan-300 print:text-slate-900 block mb-1">Programming Languages:</span>
                  <span className="text-slate-300 print:text-slate-700">Java, C, JavaScript (ES6+), SQL</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:border-slate-300">
                  <span className="font-bold text-cyan-300 print:text-slate-900 block mb-1">Frontend Engineering:</span>
                  <span className="text-slate-300 print:text-slate-700">HTML5, CSS3, Modern React, Responsive Web Design</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:border-slate-300">
                  <span className="font-bold text-cyan-300 print:text-slate-900 block mb-1">Databases & Querying:</span>
                  <span className="text-slate-300 print:text-slate-700">MySQL, Relational Schema Normalization (3NF), Query Optimization</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:border-slate-300">
                  <span className="font-bold text-cyan-300 print:text-slate-900 block mb-1">Core Concepts & Tools:</span>
                  <span className="text-slate-300 print:text-slate-700">DSA, Object-Oriented Programming, Git, GitHub, VS Code</span>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-slate-900 flex items-center gap-2">
                <Terminal size={16} /> Engineering Projects
              </h2>

              <div className="space-y-3 text-xs">
                {/* Eco-Recycler */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 print:border-slate-300">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white print:text-black">Eco-Recycler — Waste Pickup & Recycling Concept</span>
                    <span className="font-mono text-[10px] text-emerald-400 print:text-slate-600">React • Web APIs • CSS3</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 mt-1">
                    Developed a household waste pickup portal connecting residents with recycling services. Features waste category volume estimation, doorstep pickup scheduler, and dynamic carbon offset tracking.
                  </p>
                </div>

                {/* CookFusion */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 print:border-slate-300">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white print:text-black">CookFusion — Recipe Discovery & Meal Planner</span>
                    <span className="font-mono text-[10px] text-purple-400 print:text-slate-600">React • REST APIs • LocalStorage</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 mt-1">
                    Built a meal planning web app that matches recipes based on on-hand ingredients. Integrated dietary filter tags, step-by-step cooking progress tracker, and local bookmark persistence.
                  </p>
                </div>

                {/* Java Swing */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 print:border-slate-300">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white print:text-black">Smart Record Manager — Java Desktop Application</span>
                    <span className="font-mono text-[10px] text-sky-400 print:text-slate-600">Java • Swing/AWT • OOP • File I/O</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 mt-1">
                    Created an offline desktop application applying OOP design, Event Dispatch Thread safety, dynamic JTable filtering, and CSV serialization for departmental inventory records.
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="text-[10px] font-mono text-slate-500 print:text-slate-500 pt-2 border-t border-slate-800 print:border-slate-300 flex justify-between">
              <span>Shubham Thakur • Chitkara University</span>
              <span>Updated for 2026 Opportunities</span>
            </div>
          </div>
        </div>
    </div>
  );
}
export default ResumeModal;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Send, FileText, 
  Copy, Check, MessageSquare, Sparkles, MapPin, Clock, ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import confetti from 'canvas-confetti';

export function ContactSection({ onOpenResume, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const emailAddress = 'shubhamthakur.dev@example.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    onShowToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setIsCopied(false), 2500);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Celebrate with confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#a855f7', '#38bdf8']
      });

      setTimeout(() => {
        setIsSubmitting(false);
        onShowToast(
          'Thank you! In this client build, your message is validated. For immediate reach, use the direct email button.',
          'info'
        );
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Radial Atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <Mail size={13} />
            <span>06 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Have an idea? Let's build something meaningful.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you have an internship opening, a project collaboration in mind, or simply want to connect—I'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid: Direct Info Card + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Outreach & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Availability Glass Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Availability Status
                </span>
                <span className="status-pulse">
                  <span className="status-pulse-ring" />
                  <span className="status-pulse-dot" />
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Open to Learning Opportunities & Internships
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Currently seeking Software Engineering, Full-Stack Web Development, or Java internships where I can contribute to real systems and continue leveling up.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs pt-2">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin size={16} className="text-cyan-400 shrink-0" />
                  <span>Chitkara University • Punjab / Chandigarh, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Clock size={16} className="text-purple-400 shrink-0" />
                  <span>Typical response time: Under 24 hours</span>
                </div>
              </div>

              {/* Direct Email Copy Box */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</div>
                  <div className="font-mono text-xs sm:text-sm text-cyan-300 truncate font-semibold">
                    {emailAddress}
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {isCopied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Action Buttons: Email + Resume */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="magnetic-btn btn-primary text-xs py-3 justify-center"
                >
                  <Mail size={15} /> Send Mail
                </a>

                <button
                  onClick={onOpenResume}
                  className="magnetic-btn btn-secondary text-xs py-3 justify-center"
                >
                  <FileText size={15} className="text-cyan-400" /> View CV
                </button>
              </div>
            </div>

            {/* Social Network Channels */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-around">
              <a
                href="https://github.com/shubhamthakur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400 flex items-center justify-center transition-colors">
                  <Github size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-xs">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/shubhamthakur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-purple-400 flex items-center justify-center transition-colors">
                  <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-xs">LinkedIn</span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-emerald-400 flex items-center justify-center transition-colors">
                  <Mail size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-xs">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Compact Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold mb-6">
                <MessageSquare size={14} /> TRANSMIT A MESSAGE
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-mono text-xs text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        formErrors.name
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] font-mono text-rose-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-mono text-xs text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        formErrors.email
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] font-mono text-rose-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="font-mono text-xs text-slate-300">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / Web development collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 text-slate-100 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="font-mono text-xs text-slate-300">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <span className="font-mono text-[10px] text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Shubham, we came across your work on CookFusion & Java projects..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-slate-100 text-sm focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] font-mono text-rose-400">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full magnetic-btn btn-primary text-sm py-3.5 flex items-center justify-center gap-2 mt-4"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>

                {/* Honest note */}
                <p className="text-[11px] font-mono text-slate-500 text-center pt-2">
                  Validation active. To attach external docs or schedule an interview directly, reach out via direct mail.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default ContactSection;

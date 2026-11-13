import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function Toast({ message, type = 'success', isVisible, onClose }) {
  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle size={18} className="text-rose-400" />;
      case 'info':
        return <Info size={18} className="text-cyan-400" />;
      default:
        return <CheckCircle2 size={18} className="text-emerald-400" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'error':
        return 'border-rose-500/40 shadow-rose-500/20';
      case 'info':
        return 'border-cyan-500/40 shadow-cyan-500/20';
      default:
        return 'border-emerald-500/40 shadow-emerald-500/20';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/95 backdrop-blur-md border shadow-xl ${getBorderColor()}`}
      >
        {getIcon()}
        <span className="text-xs sm:text-sm font-medium text-slate-100">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Dismiss toast"
        >
          <X size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
export default Toast;

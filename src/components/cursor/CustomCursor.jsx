import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'project', 'canvas', 'text'
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Tiny dot spring (faster tracking)
  const dotSpringConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Check if device supports touch or hover
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Dynamic hover detection via data attributes & semantic elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select');
      const projectEl = target.closest('[data-cursor="project"]');
      const canvasEl = target.closest('[data-cursor="canvas"]');
      const customLabel = target.closest('[data-cursor-label]');

      if (customLabel) {
        setCursorType('custom');
        setCursorText(customLabel.getAttribute('data-cursor-label') || 'Explore');
      } else if (projectEl) {
        setCursorType('project');
        setCursorText('Explore');
      } else if (canvasEl) {
        setCursorType('canvas');
        setCursorText('Rotate 3D');
      } else if (interactiveEl) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  // Ring dimension & styling based on cursor mode
  const getRingVariants = () => {
    switch (cursorType) {
      case 'pointer':
        return {
          width: 48,
          height: 48,
          backgroundColor: 'rgba(0, 240, 255, 0.12)',
          borderColor: 'rgba(0, 240, 255, 0.8)',
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)'
        };
      case 'project':
      case 'custom':
        return {
          width: 72,
          height: 72,
          backgroundColor: 'rgba(168, 85, 247, 0.25)',
          borderColor: 'rgba(168, 85, 247, 0.9)',
          boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)'
        };
      case 'canvas':
        return {
          width: 60,
          height: 60,
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          borderColor: 'rgba(56, 189, 248, 0.7)',
          boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)'
        };
      default:
        return {
          width: 28,
          height: 28,
          backgroundColor: 'rgba(0, 240, 255, 0.04)',
          borderColor: 'rgba(255, 255, 255, 0.35)',
          boxShadow: 'none'
        };
    }
  };

  const ringStyle = getRingVariants();

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Smooth Trailing Ring */}
      <motion.div
        className="absolute rounded-full border border-solid flex items-center justify-center transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          ...ringStyle
        }}
        animate={{
          scale: cursorType === 'default' ? 1 : 1.15
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-white drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] px-1 text-center leading-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny Precision Glowing Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: cursorType === 'pointer' ? 0 : 1,
          opacity: cursorType === 'project' ? 0.3 : 1
        }}
      />
    </div>
  );
}
export default CustomCursor;

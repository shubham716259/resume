import React, { useEffect, useRef } from 'react';

export function MatrixOverlay({ isActive, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Characters: Katakana + Hex + Latin
    const chars = '0123456789ABCDEFSHUBHAMTHAKURJAVA_REACT_SQL_';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      // Translucent black background for trail effect
      ctx.fillStyle = 'rgba(18, 22, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#4ade80'; // Terminal Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character is brighter
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#e2fbe8';
        } else {
          ctx.fillStyle = '#22c55e';
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-35" />
      <div className="absolute top-4 right-4 pointer-events-auto">
        <button
          onClick={onClose}
          className="border-2 border-[#20251f] bg-[#20251f] text-[#4ade80] px-3 py-1 font-mono text-[10px] font-bold uppercase shadow-[3px_3px_0_#4ade80]"
        >
          [ MATRIX MODE ACTIVE: EXIT ]
        </button>
      </div>
    </div>
  );
}

export default MatrixOverlay;

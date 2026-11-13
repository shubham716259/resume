import { useEffect, useRef } from 'react';

const COLORS = ['#f3c75e', '#598063', '#e58c63', '#315d58'];
const MAX_PARTICLES = 100;

export function ScrollPixelParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canvas || !context || reduceMotion) return;

    const particles = [];
    const pointer = { x: 0, y: 0, lastX: 0, lastY: 0, hasPosition: false };
    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let frameId = 0;
    let lastFrameTime = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawParticles = (time) => {
      const delta = lastFrameTime ? Math.min((time - lastFrameTime) / 1000, 0.04) : 0.016;
      lastFrameTime = time;
      context.clearRect(0, 0, width, height);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.age += delta * 1000;
        particle.x += particle.velocityX * delta;
        particle.y += particle.velocityY * delta;
        particle.velocityY += 18 * delta;

        if (particle.age >= particle.lifetime) {
          particles.splice(index, 1);
          continue;
        }

        context.globalAlpha = 1 - particle.age / particle.lifetime;
        context.fillStyle = particle.color;
        context.fillRect(
          Math.round(particle.x / 4) * 4,
          Math.round(particle.y / 4) * 4,
          particle.size,
          particle.size
        );
      }

      context.globalAlpha = 1;
      if (particles.length) {
        frameId = window.requestAnimationFrame(drawParticles);
      } else {
        frameId = 0;
        lastFrameTime = 0;
      }
    };

    const scheduleDraw = () => {
      if (!frameId) frameId = window.requestAnimationFrame(drawParticles);
    };

    const emit = (x, y, amount) => {
      for (let index = 0; index < amount && particles.length < MAX_PARTICLES; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 16 + Math.random() * 36;
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          velocityX: Math.cos(angle) * speed,
          velocityY: Math.sin(angle) * speed - 10,
          size: Math.random() > 0.65 ? 8 : 4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          age: 0,
          lifetime: 280 + Math.random() * 220
        });
      }
      scheduleDraw();
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      if (pointer.hasPosition) {
        const distance = Math.hypot(pointer.x - pointer.lastX, pointer.y - pointer.lastY);
        if (distance > 22) emit(pointer.lastX, pointer.lastY, 2);
      }

      pointer.lastX = pointer.x;
      pointer.lastY = pointer.y;
      pointer.hasPosition = true;
    };

    const handleScroll = () => {
      if (pointer.hasPosition) emit(pointer.x, pointer.y, 4);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
    />
  );
}

export default ScrollPixelParticles;

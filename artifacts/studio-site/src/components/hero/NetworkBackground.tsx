import { useRef, useEffect } from 'react';

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let orbs: Orb[] = [];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initOrbs();
    };

    const initOrbs = () => {
      orbs = [
        {
          x: canvas.width * 0.15,
          y: canvas.height * 0.3,
          vx: prefersReducedMotion ? 0 : 0.18,
          vy: prefersReducedMotion ? 0 : 0.12,
          radius: Math.min(canvas.width, canvas.height) * 0.38,
          color: '#415A77',
        },
        {
          x: canvas.width * 0.75,
          y: canvas.height * 0.2,
          vx: prefersReducedMotion ? 0 : -0.14,
          vy: prefersReducedMotion ? 0 : 0.16,
          radius: Math.min(canvas.width, canvas.height) * 0.32,
          color: '#1B263B',
        },
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.75,
          vx: prefersReducedMotion ? 0 : 0.1,
          vy: prefersReducedMotion ? 0 : -0.13,
          radius: Math.min(canvas.width, canvas.height) * 0.28,
          color: '#778DA9',
        },
        {
          x: canvas.width * 0.88,
          y: canvas.height * 0.68,
          vx: prefersReducedMotion ? 0 : -0.16,
          vy: prefersReducedMotion ? 0 : -0.1,
          radius: Math.min(canvas.width, canvas.height) * 0.22,
          color: '#E0E1DD',
        },
      ];
    };

    const drawOrb = (orb: Orb) => {
      const gradient = ctx.createRadialGradient(
        orb.x, orb.y, 0,
        orb.x, orb.y, orb.radius
      );
      gradient.addColorStop(0, orb.color + '22');
      gradient.addColorStop(0.5, orb.color + '0E');
      gradient.addColorStop(1, orb.color + '00');

      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const MOUSE_STRENGTH = 0.012;
    const MAX_MOUSE_DIST = 420;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (!prefersReducedMotion && mx > 0) {
          const dx = mx - orb.x;
          const dy = my - orb.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_MOUSE_DIST && dist > 0) {
            const force = (1 - dist / MAX_MOUSE_DIST) * MOUSE_STRENGTH;
            orb.vx += (dx / dist) * force;
            orb.vy += (dy / dist) * force;
          }
          const maxSpeed = 0.55;
          const speed = Math.sqrt(orb.vx * orb.vx + orb.vy * orb.vy);
          if (speed > maxSpeed) {
            orb.vx = (orb.vx / speed) * maxSpeed;
            orb.vy = (orb.vy / speed) * maxSpeed;
          }
        }

        if (orb.x - orb.radius < -orb.radius * 0.5) orb.vx = Math.abs(orb.vx);
        if (orb.x + orb.radius > canvas.width + orb.radius * 0.5) orb.vx = -Math.abs(orb.vx);
        if (orb.y - orb.radius < -orb.radius * 0.5) orb.vy = Math.abs(orb.vy);
        if (orb.y + orb.radius > canvas.height + orb.radius * 0.5) orb.vy = -Math.abs(orb.vy);

        drawOrb(orb);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);
    resize();
    animate();

    const section = canvas.parentElement;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove, { passive: true });
      section.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default NetworkBackground;

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let orbs: Orb[] = [];

    const ORB_COLORS = ['#415A77', '#778DA9', '#1B263B', '#E0E1DD'];

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
          vx: 0.18,
          vy: 0.12,
          radius: Math.min(canvas.width, canvas.height) * 0.38,
          color: '#415A77',
        },
        {
          x: canvas.width * 0.75,
          y: canvas.height * 0.2,
          vx: -0.14,
          vy: 0.16,
          radius: Math.min(canvas.width, canvas.height) * 0.32,
          color: '#1B263B',
        },
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.75,
          vx: 0.1,
          vy: -0.13,
          radius: Math.min(canvas.width, canvas.height) * 0.28,
          color: '#778DA9',
        },
        {
          x: canvas.width * 0.88,
          y: canvas.height * 0.68,
          vx: -0.16,
          vy: -0.1,
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x - orb.radius < -orb.radius * 0.5) orb.vx = Math.abs(orb.vx);
        if (orb.x + orb.radius > canvas.width + orb.radius * 0.5) orb.vx = -Math.abs(orb.vx);
        if (orb.y - orb.radius < -orb.radius * 0.5) orb.vy = Math.abs(orb.vy);
        if (orb.y + orb.radius > canvas.height + orb.radius * 0.5) orb.vy = -Math.abs(orb.vy);

        drawOrb(orb);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);
    resize();
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
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

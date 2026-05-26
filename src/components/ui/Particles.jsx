import { useEffect, useRef } from 'react';

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

export default function Particles({
  quantity = 70,
  color = '#D4AF37',
  size = 0.45,
  staticity = 50,
  ease = 50,
  className = '',
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { r, g, b } = hexToRgb(color);
    let particles = [];
    let raf;

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      init();
    };

    const init = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      particles = Array.from({ length: quantity }, () => ({
        x:  Math.random() * w,
        y:  Math.random() * h,
        tx: Math.random() * w,
        ty: Math.random() * h,
        vx: 0,
        vy: 0,
        size: Math.random() * size + 0.15,
        alpha: Math.random() * 0.55 + 0.08,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        const mx = mouse.current.x;
        const my = mouse.current.y;
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Mouse attraction
        if (dist < 120) {
          p.vx += (dx / dist) * (120 - dist) / (staticity * 12);
          p.vy += (dy / dist) * (120 - dist) / (staticity * 12);
        }

        // Drift back to target
        p.vx += (p.tx - p.x) / (ease * 40);
        p.vy += (p.ty - p.y) / (ease * 40);

        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x  += p.vx;
        p.y  += p.vy;

        // Edge fade
        const ex = Math.min(p.x / 40, 1) * Math.min((w - p.x) / 40, 1);
        const ey = Math.min(p.y / 40, 1) * Math.min((h - p.y) / 40, 1);
        const fade = Math.min(ex, ey);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * fade})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, [quantity, color, size, staticity, ease, dpr]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
}

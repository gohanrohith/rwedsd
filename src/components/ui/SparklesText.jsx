import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rand = (min, max) => Math.random() * (max - min) + min;

function Sparkle({ x, y, color, scale }) {
  return (
    <motion.span
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none', zIndex: 20, display: 'inline-block' }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, scale, 0], rotate: [0, 90, 180] }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
    >
      <svg width="14" height="14" viewBox="0 0 68 68" fill={color} aria-hidden="true">
        <path d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43C33.234 50.4785 33.5 68 33.5 68C33.5 68 33.7636 50.4785 41 43C48.2364 35.5215 68 34 68 34C68 34 48.2364 32.4785 41 25C33.7636 17.5215 33.5 0 33.5 0C33.5 0 33.2364 17.5215 26.5 25.5Z" />
      </svg>
    </motion.span>
  );
}

const makeSparkle = (colors) => ({
  id: `${Date.now()}-${Math.random()}`,
  x: `${rand(4, 90)}%`,
  y: `${rand(4, 88)}%`,
  color: Math.random() > 0.55 ? colors.first : colors.second,
  scale: rand(0.5, 1.3),
});

export default function SparklesText({
  text,
  className = '',
  sparklesCount = 7,
  colors = { first: '#D4AF37', second: '#8B0000' },
}) {
  const { first: colorFirst, second: colorSecond } = colors;

  const [sparkles, setSparkles] = useState(() =>
    Array.from({ length: sparklesCount }, () => makeSparkle(colors))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setSparkles(prev => {
        const next = [...prev];
        const i = Math.floor(Math.random() * next.length);
        next[i] = makeSparkle({ first: colorFirst, second: colorSecond });
        return next;
      });
    }, 350);
    return () => clearInterval(id);
  }, [sparklesCount, colorFirst, colorSecond]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence>
        {sparkles.map(s => (
          <Sparkle key={s.id} x={s.x} y={s.y} color={s.color} scale={s.scale} />
        ))}
      </AnimatePresence>
      <span style={{ position: 'relative', zIndex: 1 }}>{text}</span>
    </span>
  );
}

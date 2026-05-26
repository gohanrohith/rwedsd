import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export default function NumberTicker({ value, padded = true, className = '' }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { damping: 80, stiffness: 200 });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        const str = String(Math.round(latest));
        ref.current.textContent = padded ? str.padStart(2, '0') : str;
      }
    });
  }, [springValue, padded]);

  const initial = padded ? String(value).padStart(2, '0') : String(value);
  return <span ref={ref} className={className}>{initial}</span>;
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BlurFade({
  children,
  className = '',
  duration = 0.6,
  delay = 0,
  yOffset = 20,
  inView = false,
  inViewMargin = '-60px',
  blur = '8px',
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isVisible = !inView || inViewResult;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: yOffset, opacity: 0, filter: `blur(${blur})` }}
      animate={
        isVisible
          ? { y: 0, opacity: 1, filter: 'blur(0px)' }
          : { y: yOffset, opacity: 0, filter: `blur(${blur})` }
      }
      transition={{ delay: 0.04 + delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

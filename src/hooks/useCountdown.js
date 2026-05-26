import { useState, useEffect } from 'react';

function calc(target) {
  const diff = new Date(target) - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 864e5),
    h: Math.floor((diff % 864e5) / 36e5),
    m: Math.floor((diff % 36e5)  / 6e4),
    s: Math.floor((diff % 6e4)   / 1e3),
  };
}

export function useCountdown(target) {
  const [time, setTime] = useState(() => calc(target));
  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

import { useCountdown } from '../hooks/useCountdown';
import { WEDDING } from '../config';
import TempleSilhouette from './TempleSilhouette';
import Ripple from './ui/Ripple';

function CountBlock({ value, label }) {
  const display = String(value).padStart(2, '0');
  return (
    <div className="text-center">
      <div className="rounded-2xl py-4 px-1 sm:py-5 sm:px-2"
           style={{
             background: 'rgba(253,251,247,.07)',
             border: '1px solid rgba(212,175,55,.45)',
             boxShadow: '0 0 20px rgba(212,175,55,.28), inset 0 0 12px rgba(212,175,55,.07)',
           }}>
        <span
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(2rem,8vw,3.4rem)',
            fontWeight: 400,
            color: '#D4AF37',
            display: 'block',
            lineHeight: 1.2,
            textShadow: '0 0 18px rgba(212,175,55,.95), 0 0 38px rgba(212,175,55,.55)',
          }}
        >
          {display}
        </span>
      </div>
      <p className="font-sans text-xs uppercase tracking-widest mt-2"
         style={{ color: 'rgba(253,251,247,.4)', letterSpacing: '.12em', fontSize: '.65rem' }}>
        {label}
      </p>
    </div>
  );
}

export default function Countdown() {
  const { d, h, m, s } = useCountdown(WEDDING.date);

  return (
    <section className="pt-24 pb-44 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#1A4332' }}>

      <Ripple mainCircleSize={140} mainCircleOpacity={0.22} numCircles={7} />

      <div className="relative z-10 max-w-xl mx-auto text-center">

        <p className="font-sans text-xs uppercase tracking-widest mb-3"
           style={{ color: '#D4AF37', letterSpacing: '.28em' }}>
          The big day is almost here
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-1"
            style={{ color: '#FDFBF7' }}>
          Counting Down
        </h2>
        <p className="font-serif text-xl italic mb-14"
           style={{ color: 'rgba(253,251,247,.5)' }}>
          To Our Forever
        </p>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5 max-w-xs sm:max-w-sm mx-auto">
          <CountBlock value={d} label="Days"  />
          <CountBlock value={h} label="Hours" />
          <CountBlock value={m} label="Mins"  />
          <CountBlock value={s} label="Secs"  />
        </div>

        <div className="inline-flex flex-col items-center gap-1.5 mt-12 px-4 sm:px-6 py-4 rounded-2xl"
             style={{ background: 'rgba(212,175,55,.12)', border: '1px solid rgba(212,175,55,.35)' }}>
          <div className="flex items-center gap-2.5">
            <span style={{ color: '#D4AF37' }}>📅</span>
            <p className="font-sans text-xs sm:text-sm" style={{ color: 'rgba(253,251,247,.85)' }}>
              {WEDDING.displayDate} &nbsp;·&nbsp; {WEDDING.time}
            </p>
          </div>
          <p className="font-sans text-xs" style={{ color: 'rgba(212,175,55,.7)', letterSpacing: '.04em' }}>
            {WEDDING.nakshatra}
          </p>
        </div>

      </div>

      <TempleSilhouette />
    </section>
  );
}

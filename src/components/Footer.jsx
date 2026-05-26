import { COUPLE, WEDDING } from '../config';
import SparklesText from './ui/SparklesText';

export default function Footer() {
  return (
    <footer className="py-14 px-6 text-center" style={{ background: '#2C2C2C' }}>
      <div className="max-w-sm mx-auto">
        <div className="h-px w-24 mx-auto mb-6"
             style={{ background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />

        <p className="font-serif text-3xl md:text-4xl font-light mb-1" style={{ color: '#FDFBF7' }}>
          <SparklesText
            text={`${COUPLE.bride.firstName} & ${COUPLE.groom.firstName}`}
            sparklesCount={5}
            colors={{ first: '#D4AF37', second: '#FDFBF7' }}
          />
        </p>
        <p className="font-sans text-xs uppercase tracking-widest"
           style={{ color: 'rgba(255,255,255,.3)', letterSpacing: '.26em' }}>
          {WEDDING.displayDate}
        </p>

        <div className="h-px w-16 mx-auto mt-8 mb-5"
             style={{ background: 'rgba(255,255,255,.08)' }} />

        <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,.18)' }}>
          Made with love for a lifetime of joy
        </p>
      </div>
    </footer>
  );
}

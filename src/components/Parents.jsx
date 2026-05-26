import { FAMILIES, SHLOKA } from '../config';
import OrnamentDivider from './OrnamentDivider';
import { MandalaCorner } from './IndianAccents';
import BlurFade from './ui/BlurFade';

function FamilyCard({ side, data }) {
  const [p1, p2] = data.parents;

  return (
    <div className="relative rounded-2xl p-8 border"
         style={{ background: 'rgba(253,251,247,.85)', borderColor: 'rgba(212,175,55,.3)' }}>
      <div className="absolute -top-px left-1/4 right-1/4 h-px"
           style={{ background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />

      <p className="font-sans text-xs uppercase tracking-widest text-center mb-1"
         style={{ color: '#8B0000', letterSpacing: '.2em' }}>
        {side === 'groom' ? "Groom's Family" : "Bride's Family"}
      </p>

      <div className="h-px w-10 mx-auto my-3" style={{ background: '#D4AF37' }} />

      <div className="text-center mb-6">
        <p className="font-sans text-xs uppercase tracking-widest mb-3"
           style={{ color: '#1A4332', opacity: .6 }}>Parents</p>
        <p className="font-serif text-lg md:text-xl font-semibold"
           style={{ color: '#1A4332' }}>
          {p1}
        </p>
        <p className="font-serif text-base italic" style={{ color: '#1A4332' }}>
          &amp; {p2}
        </p>
      </div>

      <div className="pt-5 border-t text-center"
           style={{ borderColor: 'rgba(212,175,55,.25)' }}>
        <p className="font-serif text-sm italic mb-1" style={{ color: '#8B0000' }}>{data.label}</p>
        <p className="font-serif text-2xl md:text-3xl font-medium" style={{ color: '#2C2C2C' }}>
          {data.name}
        </p>
      </div>
    </div>
  );
}

export default function Parents() {
  const { hosts } = FAMILIES;

  return (
    <section className="py-24 px-6" style={{ background: '#F5EFE0' }}>
      <BlurFade inView delay={0} duration={0.65} inViewMargin="-60px">
        <div className="max-w-2xl mx-auto">

          {/* Shloka */}
          <div className="text-center mb-14">
            <div className="inline-block px-8 py-6 rounded-2xl relative"
                 style={{ background: 'rgba(212,175,55,.07)', border: '1px solid rgba(212,175,55,.4)' }}>
              <MandalaCorner size={44} style={{ position: 'absolute', top: -10, left: -10, opacity: 0.75 }} />
              <MandalaCorner size={44} style={{ position: 'absolute', top: -10, right: -10, opacity: 0.75, transform: 'scaleX(-1)' }} />
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-3"
                 style={{ color: '#1A4332' }}>
                {SHLOKA.sanskrit}
              </p>
              <p className="font-sans text-xs md:text-sm" style={{ color: '#8B0000' }}>
                {SHLOKA.meaning}
              </p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <OrnamentDivider className="max-w-xs mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-light" style={{ color: '#2C2C2C' }}>
              With Their Blessings
            </h2>
            <OrnamentDivider className="max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <FamilyCard side="groom" data={FAMILIES.groom} />
            <FamilyCard side="bride" data={FAMILIES.bride} />
          </div>

          {/* Invited by / Blessings / Compliments */}
          <div className="mt-10 rounded-2xl border overflow-hidden"
               style={{ borderColor: 'rgba(212,175,55,.3)', background: 'rgba(253,251,247,.7)' }}>

            <div className="px-8 py-6 text-center border-b"
                 style={{ borderColor: 'rgba(212,175,55,.2)' }}>
              <p className="font-sans text-xs uppercase tracking-widest mb-2"
                 style={{ color: '#8B0000', letterSpacing: '.2em' }}>Invited by</p>
              <p className="font-serif text-xl md:text-2xl font-medium" style={{ color: '#1A4332' }}>
                {hosts.invitedBy}
              </p>
            </div>

            <div className="px-8 py-5 text-center border-b"
                 style={{ borderColor: 'rgba(212,175,55,.2)' }}>
              <p className="font-sans text-xs uppercase tracking-widest mb-2"
                 style={{ color: '#8B0000', letterSpacing: '.2em' }}>Blessings from</p>
              <p className="font-serif text-base font-medium" style={{ color: '#2C2C2C' }}>
                {hosts.blessings}
              </p>
            </div>

            <div className="px-8 py-5 text-center">
              <p className="font-sans text-xs uppercase tracking-widest mb-3"
                 style={{ color: '#8B0000', letterSpacing: '.2em' }}>With Best Compliments from</p>
              <div className="space-y-1">
                {hosts.compliments.map((c, i) => (
                  <p key={i} className="font-serif text-sm font-medium leading-relaxed" style={{ color: '#2C2C2C' }}>
                    {c}
                  </p>
                ))}
                <p className="font-serif text-sm italic" style={{ color: '#555' }}>
                  &amp; Near &amp; Dear ones
                </p>
              </div>
            </div>

          </div>

        </div>
      </BlurFade>
    </section>
  );
}

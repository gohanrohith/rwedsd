import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { COUPLE, WEDDING, CONTACTS } from '../config';
import OrnamentDivider from './OrnamentDivider';
import BlurFade from './ui/BlurFade';
import ShimmerButton from './ui/ShimmerButton';

const ATTEND_OPTS = [
  { value: 'yes',   emoji: '🎉', label: 'Joyfully, Yes!',   note: 'Cannot wait!' },
  { value: 'no',    emoji: '😢', label: 'Regretfully No',    note: 'Will be missed' },
  { value: 'maybe', emoji: '🤔', label: 'Still Deciding',    note: 'Will confirm soon' },
];

const INIT = { name: '', phone: '', attending: 'yes', guests: 2, meal: 'veg', message: '', rsvpTo: 'groom' };

/* ── Success screen ── */
function SuccessScreen({ name, attending, onReset }) {
  const going = attending === 'yes';

  useEffect(() => {
    if (!going) return;
    const end = Date.now() + 2200;
    const fire = () => {
      confetti({
        particleCount: 40,
        spread: 80,
        origin: { x: Math.random() * 0.4 + 0.3, y: 0.55 },
        colors: ['#D4AF37', '#8B0000', '#1A4332', '#F5EFE0', '#ffffff'],
        scalar: 1.1,
        gravity: 0.9,
      });
      if (Date.now() < end) requestAnimationFrame(fire);
    };
    fire();
  }, [going]);

  return (
    <div className="text-center py-10 px-6">
      <div className="relative flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full flex items-center justify-center"
             style={{ background: 'rgba(212,175,55,.1)', border: '2px solid rgba(212,175,55,.4)' }}>
          <span style={{ fontSize: '2.8rem' }}>{going ? '🎊' : '💌'}</span>
        </div>
      </div>

      <h3 className="font-serif text-3xl md:text-4xl font-light mb-2" style={{ color: '#2C2C2C' }}>
        Thank you, {name.split(' ')[0]}!
      </h3>

      <p className="font-sans text-sm mb-1" style={{ color: '#555' }}>
        Your RSVP has been sent via WhatsApp.
      </p>

      {going ? (
        <p className="font-serif text-lg italic mt-3" style={{ color: '#1A4332' }}>
          "See you at {WEDDING.venue} on {WEDDING.displayDate}! 🪷"
        </p>
      ) : (
        <p className="font-serif text-lg italic mt-3" style={{ color: '#8B0000' }}>
          "You will be missed — we hope to celebrate with you soon."
        </p>
      )}

      <OrnamentDivider className="my-8 max-w-xs mx-auto" />

      <button
        onClick={onReset}
        className="font-sans text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
        style={{ color: '#8B0000' }}
      >
        Submit another RSVP
      </button>
    </div>
  );
}

/* ── Contact card ── */
function ContactCard({ contact }) {
  function openWA() {
    const msg = encodeURIComponent(`Hello, I have a question about ${COUPLE.bride.firstName} & ${COUPLE.groom.firstName}'s wedding on ${WEDDING.displayDate}.`);
    window.open(`https://wa.me/${contact.wa}?text=${msg}`, '_blank');
  }

  return (
    <div className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border"
         style={{ background: 'rgba(253,251,247,.85)', borderColor: 'rgba(212,175,55,.3)' }}>
      <div>
        <p className="font-sans text-xs uppercase tracking-widest mb-0.5"
           style={{ color: '#8B0000', letterSpacing: '.18em' }}>{contact.label}</p>
        <p className="font-serif text-lg font-medium" style={{ color: '#2C2C2C' }}>{contact.name}</p>
        <a href={`tel:${contact.phone}`} className="font-sans text-sm" style={{ color: '#1A4332' }}>
          {contact.phone}
        </a>
      </div>
      <ShimmerButton
        onClick={openWA}
        className="w-full sm:w-auto sm:flex-shrink-0 py-2.5 px-5 rounded-xl text-sm"
        aria-label={`WhatsApp ${contact.name}`}
      >
        <WhatsAppIcon /> WhatsApp
      </ShimmerButton>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12a11.96 11.96 0 0 0 1.532 5.852L.057 23.17a.75.75 0 0 0 .92.92l5.318-1.475A11.957 11.957 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 0 1-5.12-1.412l-.367-.218-3.799 1.054 1.054-3.799-.218-.367A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ── Main RSVP form ── */
export default function RSVPForm() {
  const [form, setForm]           = useState(INIT);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  function validate() {
    const e = {};
    if (!form.name.trim())  e.name  = 'Please enter your name';
    if (!form.phone.trim()) e.phone = 'Please enter your WhatsApp number';
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const attendLabel = ATTEND_OPTS.find(o => o.value === form.attending)?.label ?? '';
    const mealLabel   = form.meal === 'veg' ? 'Vegetarian 🥗' : 'Non-Vegetarian 🍗';

    const lines = [
      `*RSVP — ${COUPLE.bride.firstName} & ${COUPLE.groom.firstName} Wedding*`,
      '',
      `*Name:* ${form.name}`,
      `*WhatsApp:* ${form.phone}`,
      `*Attending:* ${attendLabel}`,
      ...(form.attending === 'yes' ? [
        `*Guests:* ${form.guests}`,
        `*Meal Preference:* ${mealLabel}`,
      ] : []),
      ...(form.message.trim() ? [`*Message:* ${form.message.trim()}`] : []),
      '',
      COUPLE.hashtag,
    ];

    const waNumber = form.rsvpTo === 'groom' ? CONTACTS.groom.wa : CONTACTS.bride.wa;
    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
    );
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-4 sm:px-6 dot-pattern"
             style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,117,26,.05) 0%, transparent 60%), #FDFBF7' }}>
      <BlurFade inView delay={0} duration={0.65} inViewMargin="-60px">
        <div className="max-w-2xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-12">
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 12 }}>💌</span>
            <p className="font-sans text-xs uppercase tracking-widest mb-3"
               style={{ color: '#8B0000', letterSpacing: '.28em' }}>
              Your Presence is Requested
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: '#2C2C2C' }}>
              Will You Join Us?
            </h2>
            <p className="font-sans text-sm mt-2" style={{ color: '#888' }}>
              Kindly RSVP by {WEDDING.rsvpDeadline}
            </p>
            <OrnamentDivider className="mt-6 max-w-xs mx-auto" />
          </div>

          {/* Form card */}
          <div className="rounded-3xl shadow-xl overflow-hidden max-w-lg mx-auto mb-12"
               style={{ border: '1.5px solid rgba(212,175,55,.3)', background: '#FDFBF7' }}>

            {submitted ? (
              <SuccessScreen
                name={form.name}
                attending={form.attending}
                onReset={() => { setForm(INIT); setSubmitted(false); setErrors({}); }}
              />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-7 md:p-9 space-y-6 sm:space-y-7">

                {/* Name */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest block mb-2"
                         style={{ color: '#1A4332', letterSpacing: '.16em' }}>
                    Full Name <span style={{ color: '#8B0000' }}>*</span>
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={e => { set('name', e.target.value); setErrors(er => ({ ...er, name: '' })); }}
                  />
                  {errors.name && (
                    <p className="font-sans text-xs mt-1" style={{ color: '#8B0000' }}>{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest block mb-2"
                         style={{ color: '#1A4332', letterSpacing: '.16em' }}>
                    Your WhatsApp Number <span style={{ color: '#8B0000' }}>*</span>
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={e => { set('phone', e.target.value); setErrors(er => ({ ...er, phone: '' })); }}
                  />
                  {errors.phone && (
                    <p className="font-sans text-xs mt-1" style={{ color: '#8B0000' }}>{errors.phone}</p>
                  )}
                  <p className="font-sans text-xs mt-1" style={{ color: '#AAA' }}>
                    So we can send you event reminders
                  </p>
                </div>

                {/* Attendance */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest block mb-3"
                         style={{ color: '#1A4332', letterSpacing: '.16em' }}>
                    Will You Attend?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    {ATTEND_OPTS.map(opt => (
                      <div
                        key={opt.value}
                        className={`attend-card${form.attending === opt.value ? ' selected' : ''}`}
                        onClick={() => set('attending', opt.value)}
                        role="radio"
                        aria-checked={form.attending === opt.value}
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && set('attending', opt.value)}
                      >
                        <span style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}>{opt.emoji}</span>
                        <div className="attend-text">
                          <p className="font-serif text-sm font-medium leading-tight"
                             style={{ color: '#2C2C2C' }}>{opt.label}</p>
                          <p className="font-sans text-xs" style={{ color: '#AAA' }}>{opt.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guests + Meal (only if attending) */}
                {form.attending === 'yes' && (
                  <>
                    {/* Guest stepper */}
                    <div>
                      <label className="font-sans text-xs uppercase tracking-widest block mb-3"
                             style={{ color: '#1A4332', letterSpacing: '.16em' }}>
                        Number of Guests
                      </label>
                      <div className="flex items-center gap-5">
                        <button
                          type="button"
                          onClick={() => set('guests', Math.max(1, form.guests - 1))}
                          className="w-10 h-10 rounded-xl border-2 flex items-center justify-center font-sans text-xl font-medium transition-colors duration-200"
                          style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#D4AF37'; }}
                        >−</button>
                        <span className="font-serif text-3xl font-light w-10 text-center"
                              style={{ color: '#2C2C2C' }}>{form.guests}</span>
                        <button
                          type="button"
                          onClick={() => set('guests', Math.min(10, form.guests + 1))}
                          className="w-10 h-10 rounded-xl border-2 flex items-center justify-center font-sans text-xl font-medium transition-colors duration-200"
                          style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#D4AF37'; }}
                        >+</button>
                        <p className="font-sans text-sm" style={{ color: '#888' }}>
                          {form.guests === 1 ? 'Just me' : `Including myself`}
                        </p>
                      </div>
                    </div>

                    {/* Meal preference */}
                    <div>
                      <label className="font-sans text-xs uppercase tracking-widest block mb-3"
                             style={{ color: '#1A4332', letterSpacing: '.16em' }}>
                        Meal Preference
                      </label>
                      <div className="flex gap-3">
                        {[{ value: 'veg', icon: '🥗', label: 'Vegetarian' }, { value: 'nonveg', icon: '🍗', label: 'Non-Veg' }].map(opt => (
                          <div
                            key={opt.value}
                            className={`meal-btn${form.meal === opt.value ? ' selected' : ''}`}
                            onClick={() => set('meal', opt.value)}
                            role="radio"
                            aria-checked={form.meal === opt.value}
                            tabIndex={0}
                            onKeyDown={e => e.key === 'Enter' && set('meal', opt.value)}
                          >
                            {opt.icon} {opt.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Message */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest block mb-2"
                         style={{ color: '#1A4332', letterSpacing: '.16em' }}>
                    Special Message{' '}
                    <span className="normal-case font-normal" style={{ color: '#AAA' }}>(optional)</span>
                  </label>
                  <textarea
                    className="form-input resize-none"
                    rows={3}
                    placeholder="A heartfelt message for the couple…"
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                  />
                </div>

                {/* Send RSVP to */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest block mb-3"
                         style={{ color: '#1A4332', letterSpacing: '.16em' }}>
                    Send RSVP To
                  </label>
                  <div className="flex gap-3">
                    {[
                      { value: 'groom', label: COUPLE.groom.firstName, name: CONTACTS.groom.name },
                      { value: 'bride', label: COUPLE.bride.firstName,  name: CONTACTS.bride.name },
                    ].map(opt => (
                      <div
                        key={opt.value}
                        className={`meal-btn flex-col items-start gap-0.5 py-3 px-4${form.rsvpTo === opt.value ? ' selected' : ''}`}
                        onClick={() => set('rsvpTo', opt.value)}
                        role="radio"
                        aria-checked={form.rsvpTo === opt.value}
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && set('rsvpTo', opt.value)}
                        style={{ alignItems: 'flex-start', flexDirection: 'column', gap: '.15rem' }}
                      >
                        <span className="font-sans text-xs font-semibold">{opt.label}</span>
                        <span className="font-serif text-xs" style={{ opacity: .75 }}>{opt.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <ShimmerButton
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-base font-semibold font-sans shadow-xl"
                  >
                    <WhatsAppIcon />
                    Confirm RSVP via WhatsApp
                  </ShimmerButton>
                  <p className="font-sans text-xs text-center mt-3" style={{ color: '#BBB' }}>
                    This opens WhatsApp with your RSVP pre-filled — just tap Send
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Direct contact section */}
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-6">
              <OrnamentDivider className="mb-4" />
              <p className="font-serif text-xl italic" style={{ color: '#555' }}>
                Have a question? Reach out directly.
              </p>
            </div>
            <div className="space-y-4">
              <ContactCard contact={CONTACTS.groom} />
              <ContactCard contact={CONTACTS.bride} />
            </div>
          </div>

        </div>
      </BlurFade>
    </section>
  );
}

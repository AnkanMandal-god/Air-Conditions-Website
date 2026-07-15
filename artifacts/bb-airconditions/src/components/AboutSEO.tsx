import { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Clock, MapPin, Award, Users } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

/* ── animated counter ────────────────────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── trust pillars ───────────────────────────────────────────────── */
const pillars = [
  {
    icon: Shield,
    title: 'Certified & Authorized',
    body: 'Official Daikin dealer — genuine parts, manufacturer warranty intact on every job.',
  },
  {
    icon: Zap,
    title: 'Same-Day Response',
    body: 'AC breakdowns don\'t wait for business hours. Neither do we — evenings and weekends included.',
  },
  {
    icon: Clock,
    title: 'Transparent Pricing',
    body: 'Clear quote upfront, no hidden charges. We stand behind every job with a service guarantee.',
  },
  {
    icon: Users,
    title: 'Residential & Commercial',
    body: 'From a single split AC to multi-floor HVAC fit-outs — every project gets the same attention.',
  },
];

/* ── stat cards ──────────────────────────────────────────────────── */
const stats = [
  { value: 10, suffix: '+', label: 'Years in Business' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 6, suffix: '', label: 'Service Categories' },
  { value: 100, suffix: '%', label: 'Genuine Parts' },
];

/* ── main component ──────────────────────────────────────────────── */
export function AboutSEO() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060d18 0%, #0b1a2e 55%, #060f1c 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,153,204,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,153,204,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '80vw',
          height: '60vw',
          background: 'radial-gradient(ellipse at center, rgba(0,153,204,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <span
            className="inline-block text-[#0099cc] text-xs font-bold tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded-full border border-[#0099cc]/30 bg-[#0099cc]/[0.07]"
          >
            About Us
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: rajdhani, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700 }}
          >
            Professional Air Conditioning Services in Kolkata
          </h2>
          <div className="w-16 h-[3px] bg-[#0099cc] mx-auto rounded-full" />
        </div>

        {/* ── Stats row ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '120ms' }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 px-4 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-[#0099cc]/40 hover:bg-[#0099cc]/[0.05] transition-all duration-300"
            >
              <span
                className="text-[#0099cc] leading-none mb-1"
                style={{ fontFamily: rajdhani, fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700 }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </span>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-widest text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Main body: narrative + pillars ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left — narrative (3/5) */}
          <div
            className="lg:col-span-3 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-24px)', transitionDelay: '200ms' }}
          >
            {/* Daikin auth badge */}
            <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2.5 rounded-lg border border-[#0099cc]/30 bg-[#0099cc]/[0.06]">
              <Award className="w-4 h-4 text-[#0099cc] flex-shrink-0" />
              <span className="text-[#0099cc] text-xs font-bold tracking-wide uppercase">
                Authorized Daikin Dealer — Kolkata
              </span>
            </div>

            <div className="pl-5 border-l-2 border-[#0099cc]/40 space-y-4 text-white/60 text-[15px] leading-[1.8]">
              <p>
                <span className="text-white font-semibold">B.B. Airconditions</span> is one of Kolkata's
                most trusted air conditioning specialists, delivering comprehensive cooling solutions for
                homes and businesses across the city. As an authorized Daikin dealer, every installation
                carries manufacturer-backed certification and genuine parts.
              </p>
              <p>
                Our technicians handle the full lifecycle — system selection, installation, routine
                servicing, emergency repairs, and commercial HVAC fit-outs. We work with split ACs,
                cassette units, window ACs, and large-scale central systems.
              </p>
              <p>
                We quote clearly before we start, use genuine parts throughout, and stand behind every
                job with a service guarantee. No surprises on the bill. No shortcuts on the work.
              </p>
            </div>

            {/* Maps link */}
            <a
              href="https://maps.google.com/?q=6,+Robert+Street,+Bowbazar,+Kolkata+700012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 text-[#0099cc] text-sm font-semibold group hover:gap-3 transition-all duration-200"
            >
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="border-b border-[#0099cc]/40 group-hover:border-[#0099cc] transition-colors">
                6, Robert Street (Near Bowbazar P.S.), Kolkata — View on Google Maps
              </span>
            </a>
          </div>

          {/* Right — pillars (2/5) */}
          <div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(24px)', transitionDelay: '300ms' }}
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group flex gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.025] hover:border-[#0099cc]/35 hover:bg-[#0099cc]/[0.04] transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0099cc]/15 border border-[#0099cc]/25 flex items-center justify-center group-hover:bg-[#0099cc]/20 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#0099cc]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-bold mb-1"
                      style={{ fontFamily: rajdhani }}
                    >
                      {p.title}
                    </p>
                    <p className="text-white/45 text-xs leading-relaxed">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

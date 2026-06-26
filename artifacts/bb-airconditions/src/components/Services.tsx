import { useRef } from 'react';
import { Wrench, Wind, Snowflake, Zap, Car, Building } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

const services = [
  { icon: Wind, title: 'AC Installation', desc: 'Expert installation for all brands and capacities' },
  { icon: Wrench, title: 'AC Servicing & Repair', desc: 'Comprehensive maintenance and repair services' },
  { icon: Snowflake, title: 'Refrigeration Repair', desc: 'Commercial and residential refrigeration solutions' },
  { icon: Zap, title: 'Electrical Wiring', desc: 'Safe and certified electrical work for AC units' },
  { icon: Car, title: 'Car AC Service', desc: 'Complete car air conditioning repairs and regas' },
  { icon: Building, title: 'Commercial HVAC', desc: 'Large-scale HVAC solutions for offices and businesses' },
];

function ServiceCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -7;
    const rotY = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group text-center p-8 bg-[#f0f8ff] overflow-hidden cursor-default"
      style={{
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s ease',
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
        border: '1px solid rgba(0,153,204,0.25)',
        borderLeft: '3px solid #0099cc',
      }}
    >
      {/* Spotlight glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 100px at var(--mx, 50%) var(--my, 50%), rgba(0,153,204,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Top-right corner decoration */}
      <div
        className="absolute top-0 right-0 w-5 h-5 bg-daikin/20"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-daikin/10 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Icon className="w-10 h-10 text-daikin" strokeWidth={1.5} />
        </div>
        <h3
          className="text-lg font-bold text-[#1a2a3a] mb-2"
          style={{ fontFamily: rajdhani, fontSize: '20px' }}
        >
          {title}
        </h3>
        <p className="text-[#1a2a3a]/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-daikin/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2
            className="text-white mb-3"
            style={{ fontFamily: rajdhani, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}
          >
            Our Services
          </h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-xl mx-auto text-base">
            From installation to maintenance — we handle every aspect of your cooling needs across Kolkata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <ServiceCard key={idx} icon={svc.icon} title={svc.title} desc={svc.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

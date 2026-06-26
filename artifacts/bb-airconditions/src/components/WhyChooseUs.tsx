import { useEffect, useRef, useState } from 'react';
import { Shield, Users, Zap } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
  isVisible: boolean;
}

function DottedOrbit({ hovered }: { hovered: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `spin ${hovered ? '1s' : '6s'} linear infinite`,
        transition: 'animation-duration 0.4s',
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" overflow="visible">
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#0099cc"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, delay, isVisible }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center text-center p-8 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon with orbit — larger container */}
      <div className="relative w-36 h-36 flex items-center justify-center mb-8">
        <DottedOrbit hovered={hovered} />
        <div
          className="relative z-10 w-24 h-24 flex items-center justify-center bg-daikin/20 rounded-full border border-daikin/50 transition-transform duration-300"
          style={{ transform: hovered ? 'scale(1.15)' : 'scale(1)' }}
        >
          <Icon className="w-14 h-14 text-white" strokeWidth={1.5} />
        </div>
      </div>
      <h3
        className="text-white mb-4"
        style={{ fontFamily: rajdhani, fontSize: '24px', fontWeight: 700 }}
      >
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed max-w-xs text-base">{desc}</p>
    </div>
  );
}

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Authorized Dealer',
      desc: 'Official Daikin dealer ensuring genuine parts and certified installations for every project.',
      delay: 0,
    },
    {
      icon: Users,
      title: 'Experienced Technicians',
      desc: 'Skilled team handling residential and commercial projects across Kolkata with years of hands-on expertise.',
      delay: 200,
    },
    {
      icon: Zap,
      title: 'Quick Response',
      desc: 'Fast turnaround on service calls and installations — because your comfort cannot wait.',
      delay: 400,
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1a2a3a 100%)' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-white mb-3"
            style={{ fontFamily: rajdhani, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}
          >
            Why Choose B.B. Airconditions?
          </h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full" />
          <p className="text-white/55 mt-4 max-w-xl mx-auto">
            Trusted by hundreds of homes and businesses across Kolkata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, idx) => (
            <FeatureCard
              key={idx}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={f.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Shield, Users, Zap, Award, Clock, Wrench } from 'lucide-react';

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
      className="flex flex-col items-center text-center px-6 py-10 transition-all duration-700 rounded-xl border border-white/5 hover:border-daikin/30 hover:bg-white/5"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon with orbit */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-6">
        <DottedOrbit hovered={hovered} />
        <div
          className="relative z-10 w-28 h-28 flex items-center justify-center bg-daikin/20 rounded-full border border-daikin/50 transition-transform duration-300"
          style={{ transform: hovered ? 'scale(1.12)' : 'scale(1)' }}
        >
          <Icon className="w-16 h-16 text-white" strokeWidth={1.3} />
        </div>
      </div>

      <h3
        className="text-white mb-3"
        style={{ fontFamily: rajdhani, fontSize: '22px', fontWeight: 700 }}
      >
        {title}
      </h3>
      <p className="text-white/65 leading-relaxed text-sm max-w-[220px]">{desc}</p>
    </div>
  );
}

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Authorized Dealer',
      desc: 'Official Daikin dealer ensuring genuine parts and certified installations every time.',
      delay: 0,
    },
    {
      icon: Users,
      title: 'Expert Technicians',
      desc: 'Factory-trained team with years of hands-on experience across Kolkata.',
      delay: 100,
    },
    {
      icon: Zap,
      title: 'Quick Response',
      desc: 'Fast dispatch on service calls — because your comfort cannot wait.',
      delay: 200,
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      desc: 'Every job backed by a service guarantee. We don\'t leave until it\'s right.',
      delay: 300,
    },
    {
      icon: Clock,
      title: 'AMC Plans',
      desc: 'Affordable Annual Maintenance Contracts with priority support all year round.',
      delay: 400,
    },
    {
      icon: Wrench,
      title: 'All Brands Serviced',
      desc: 'We repair and maintain all major AC brands — not just the ones we sell.',
      delay: 500,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

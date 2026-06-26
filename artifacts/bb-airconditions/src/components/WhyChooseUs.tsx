import { useEffect, useRef, useState } from 'react';
import { Shield, Users, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
  isVisible: boolean;
}

function OrbitRing({ size, duration }: { size: number; duration: number }) {
  return (
    <div
      className="absolute rounded-full border border-daikin/30 animate-[spin_linear_infinite]"
      style={{
        width: size,
        height: size,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animationDuration: `${duration}s`,
      }}
    />
  );
}

function FeatureCard({ icon: Icon, title, desc, delay, isVisible }: FeatureCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center p-8 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative w-24 h-24 flex items-center justify-center mb-8">
        <OrbitRing size={60} duration={4} />
        <OrbitRing size={80} duration={6} />
        <OrbitRing size={96} duration={8} />
        <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-daikin/20 rounded-full border border-daikin/40">
          <Icon className="w-7 h-7 text-daikin" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/70 leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
}

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
    <section id="why-us" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose B.B. Airconditions?
          </h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
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

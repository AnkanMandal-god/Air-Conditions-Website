import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

interface FloatingButtonProps {
  icon: React.ElementType;
  label: string;
  href: string;
  bgColor: string;
  pulse?: boolean;
  delay?: number;
  visible: boolean;
}

function FloatingButton({ icon: Icon, label, href, bgColor, pulse, delay = 0, visible }: FloatingButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid={`floating-btn-${label.toLowerCase().replace(/\s+/g, '-')}`}
      className="relative flex items-center"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(80px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {/* Label on hover */}
      <span
        className="absolute right-14 bg-[#1a2a3a] text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap pointer-events-none shadow-lg"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(6px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}
      >
        {label}
      </span>

      {/* Button */}
      <div
        className={`w-12 h-12 rounded-[8px] flex items-center justify-center transition-transform duration-200 ${bgColor} ${
          pulse ? 'animate-[pulse-slow_2s_ease-in-out_infinite]' : ''
        }`}
        style={{
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
          border: '1px solid rgba(0,0,0,0.3)',
        }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
    </a>
  );
}

export function FloatingCTAs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const buttons = [
    {
      icon: Mail,
      label: 'Email Us',
      href: 'mailto:asikikbal769@gmail.com',
      bgColor: 'bg-[#e05555]',
      delay: 0,
    },
    {
      icon: MessageCircle,
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/918777793800?text=I%20need%20AC%20services',
      bgColor: 'bg-whatsapp',
      pulse: true,
      delay: 80,
    },
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+918777793800',
      bgColor: 'bg-daikin',
      delay: 160,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">
      {buttons.map((btn, idx) => (
        <FloatingButton
          key={idx}
          icon={btn.icon}
          label={btn.label}
          href={btn.href}
          bgColor={btn.bgColor}
          pulse={btn.pulse}
          delay={btn.delay}
          visible={visible}
        />
      ))}
    </div>
  );
}

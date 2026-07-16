import { useState } from 'react';
import { ChevronDown, Wind, Wrench, Snowflake, Zap, Car, Building } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

const faqs = [
  {
    q: 'Do you service both residential and commercial ACs?',
    a: 'Yes, we handle all types of AC systems — from single split units in homes to large central air conditioning systems in offices and commercial spaces.',
  },
  {
    q: 'Which brands do you sell and service?',
    a: 'We are an authorized Daikin contractor and also service Godrej and most other major AC brands available in India.',
  },
  {
    q: 'How quickly can you send a technician?',
    a: 'We typically dispatch a technician within 24 hours of your service request, with same-day service available for urgent cases.',
  },
  {
    q: 'Do you offer AMC (Annual Maintenance Contracts)?',
    a: 'Yes, we offer comprehensive AMC packages that include regular servicing, priority support, and discounted repair rates throughout the year.',
  },
  {
    q: 'Are your technicians certified?',
    a: 'All our technicians are factory-trained and certified, with years of hands-on experience in residential and commercial HVAC systems.',
  },
  {
    q: 'Do you handle AC installation for new units?',
    a: 'Absolutely. We provide end-to-end installation services including site assessment, bracket mounting, copper piping, and electrical connections.',
  },
  {
    q: 'What areas in Kolkata do you cover?',
    a: 'We cover all major areas of Kolkata and surrounding districts including Salt Lake, New Town, Howrah, Behala, Dum Dum, and beyond.',
  },
];

const bgIcons = [
  { Icon: Wind,     top: '8%',    left: '5%',   rotate: '15deg',  size: 48 },
  { Icon: Wrench,   top: '20%',   right: '4%',  rotate: '-20deg', size: 40 },
  { Icon: Snowflake,top: '65%',   left: '8%',   rotate: '30deg',  size: 56 },
  { Icon: Zap,      bottom: '10%',right: '10%', rotate: '-10deg', size: 44 },
  { Icon: Car,      top: '45%',   right: '2%',  rotate: '8deg',   size: 36 },
  { Icon: Building, bottom: '20%',left: '2%',   rotate: '-5deg',  size: 52 },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faq" className="py-24 relative overflow-hidden" style={{ background: '#1e3550' }}>
      {/* Decorative background icons */}
      {bgIcons.map(({ Icon, size, rotate, ...pos }, idx) => (
        <div
          key={idx}
          className="absolute pointer-events-none select-none"
          style={{ ...pos, opacity: 0.05, transform: `rotate(${rotate})` }}
        >
          <Icon style={{ width: size, height: size }} className="text-white" strokeWidth={1} />
        </div>
      ))}

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-14">
          <h2
            className="text-white mb-3"
            style={{ fontFamily: rajdhani, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}
          >
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full" />
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden border transition-colors duration-200 rounded-lg ${
                  isOpen ? 'border-daikin/50' : 'border-white/10'
                }`}
                style={{ background: '#344f6e' }}
              >
                <button
                  onClick={() => toggle(idx)}
                  data-testid={`faq-question-${idx}`}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200 border-l-[3px] ${
                    isOpen ? 'border-daikin' : 'border-transparent'
                  }`}
                >
                  <span className="text-base font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-daikin flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-sm text-white/65 leading-relaxed border-l-[3px] border-daikin">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

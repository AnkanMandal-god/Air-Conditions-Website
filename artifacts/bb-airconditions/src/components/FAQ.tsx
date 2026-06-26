import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do you service both residential and commercial ACs?',
    a: 'Yes, we handle all types of AC systems — from single split units in homes to large central air conditioning systems in offices and commercial spaces.',
  },
  {
    q: 'Which brands do you sell and service?',
    a: 'We are an authorized Daikin dealer and also service Godrej and most other major AC brands available in India.',
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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                className={`rounded-lg overflow-hidden border transition-colors duration-200 ${
                  isOpen ? 'border-daikin/50' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200 group ${
                    isOpen ? 'border-l-[3px] border-daikin' : 'border-l-[3px] border-transparent'
                  }`}
                  data-testid={`faq-question-${idx}`}
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
                  <p className="px-6 pb-5 text-sm text-white/70 leading-relaxed border-l-[3px] border-daikin">
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

import { CheckCircle2, Star, Building2, Clock } from 'lucide-react';

export function TrustBar() {
  const items = [
    { icon: CheckCircle2, text: 'Authorized Daikin Contractor' },
    { icon: Star, text: '5★ Google Rated' },
    { icon: Building2, text: 'Residential & Commercial' },
    { icon: Clock, text: '10+ Years Experience' },
  ];

  return (
    <div className="bg-[#f0f8ff] border-y border-sky-100 py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-around divide-y sm:divide-y-0 sm:divide-x divide-sky-200 gap-4 sm:gap-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-8 py-2 group cursor-default transition-transform duration-200 hover:scale-[1.08]"
              >
                <Icon className="w-7 h-7 text-daikin mb-2" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#1a2a3a]">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

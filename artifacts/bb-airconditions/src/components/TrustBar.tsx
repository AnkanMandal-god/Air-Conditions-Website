import { CheckCircle2, Star, Building2, Clock } from 'lucide-react';

export function TrustBar() {
  const items = [
    { icon: CheckCircle2, text: "Authorized Daikin Dealer" },
    { icon: Star, text: "5★ Google Rated" },
    { icon: Building2, text: "Residential & Commercial" },
    { icon: Clock, text: "10+ Years Experience" },
  ];

  return (
    <div className="bg-background border-y border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center text-center group cursor-default">
                <Icon className="w-8 h-8 text-daikin mb-3 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110" />
                <span className="text-sm font-medium text-white group-hover:text-daikin transition-colors relative inline-block">
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-daikin transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

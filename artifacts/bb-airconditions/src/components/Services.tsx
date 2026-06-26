import { Wrench, Wind, Snowflake, Zap, Car, Building } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Wind,
      title: "AC Installation",
      desc: "Expert installation for all brands and capacities",
    },
    {
      icon: Wrench,
      title: "AC Servicing & Repair",
      desc: "Comprehensive maintenance and repair services",
    },
    {
      icon: Snowflake,
      title: "Refrigeration Repair",
      desc: "Commercial and residential refrigeration solutions",
    },
    {
      icon: Zap,
      title: "Electrical Wiring",
      desc: "Safe and certified electrical work for AC units",
    },
    {
      icon: Car,
      title: "Car AC Service",
      desc: "Complete car air conditioning repairs and regas",
    },
    {
      icon: Building,
      title: "Commercial HVAC",
      desc: "Large-scale HVAC solutions for offices and businesses",
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Glassy diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-daikin/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div 
                key={idx} 
                className="bg-card p-8 rounded-xl border border-white/10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-daikin hover:shadow-[0_0_20px_rgba(0,153,204,0.15)] group"
              >
                <div className="inline-flex items-center justify-center p-4 bg-background/50 rounded-full mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-daikin" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-muted-foreground">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

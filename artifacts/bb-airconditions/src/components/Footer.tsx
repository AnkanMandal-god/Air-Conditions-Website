import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Chevron V-shape — Daikin blue, thicker, more visible */}
      <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full">
          <polyline points="0,0 720,44 1440,0" stroke="#0099cc" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <h3
              className="text-2xl font-bold text-white mb-3 tracking-wide uppercase"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              B.B. AIRCONDITIONS
            </h3>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Kolkata's trusted AC experts — delivering quality installations, servicing, and repairs for residential and commercial clients.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-semibold text-white/45 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Brands', id: 'brands' },
                { label: 'Why Us', id: 'why-us' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/55 hover:text-daikin transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-semibold text-white/45 uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918777793800"
                  className="flex items-center gap-3 text-white/55 hover:text-daikin transition-colors duration-200 text-sm group"
                >
                  <Phone
                    className="w-4 h-4 flex-shrink-0 transition-all duration-200 group-hover:text-daikin group-hover:drop-shadow-[0_0_6px_rgba(0,153,204,0.8)]"
                  />
                  087777 93800
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918777793800?text=I%20need%20AC%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-whatsapp hover:text-whatsapp/80 transition-colors duration-200 text-sm group"
                >
                  <MessageCircle
                    className="w-4 h-4 flex-shrink-0 transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(37,211,102,0.8)]"
                  />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:ankan@novasites.co"
                  className="flex items-center gap-3 text-white/55 hover:text-daikin transition-colors duration-200 text-sm group"
                >
                  <Mail
                    className="w-4 h-4 flex-shrink-0 transition-all duration-200 group-hover:text-daikin group-hover:drop-shadow-[0_0_6px_rgba(0,153,204,0.8)]"
                  />
                  ankan@novasites.co
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                6, Robert Street, Pilkhana, Kolkata - 700012
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-white/25 text-xs">
            &copy; {new Date().getFullYear()} B.B. Airconditions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

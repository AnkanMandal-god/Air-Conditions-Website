import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-md border-b border-white/10"
      style={{ background: 'linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* Brand */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            <span
              className="font-bold text-xl lg:text-2xl tracking-wide text-white uppercase whitespace-nowrap"
              style={{ fontFamily: rajdhani }}
            >
              B.B. AIRCONDITIONS
            </span>
          </div>

          {/* Center nav links — hidden below lg */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {['services', 'brands', 'why-us', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-white hover:text-daikin transition-colors font-medium whitespace-nowrap"
              >
                {id === 'why-us' ? 'Why Us' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Right: CTA buttons — hidden below lg */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            {/* Call — blue box, same style as WhatsApp */}
            <a
              href="tel:+918777793800"
              className="flex items-center gap-2 bg-daikin hover:bg-daikin/90 text-white font-semibold transition-colors whitespace-nowrap px-4 py-2"
              style={{ borderRadius: '6px', fontSize: '14px' }}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>087777 93800</span>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/918777793800?text=I%20need%20AC%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white px-4 py-2 font-semibold transition-colors whitespace-nowrap"
              style={{ borderRadius: '6px', fontSize: '14px' }}
            >
              WhatsApp
            </a>
          </div>

          {/* Hamburger — shown below lg */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-white/10">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {['services', 'brands', 'why-us', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left px-3 py-2.5 text-white font-medium hover:text-daikin transition-colors"
              >
                {id === 'why-us' ? 'Why Us' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+918777793800"
                className="flex items-center gap-2 bg-daikin text-white px-4 py-3 font-semibold rounded-md"
              >
                <Phone className="w-4 h-4" />
                087777 93800
              </a>
              <a
                href="https://wa.me/918777793800?text=I%20need%20AC%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white px-4 py-3 font-semibold rounded-md text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

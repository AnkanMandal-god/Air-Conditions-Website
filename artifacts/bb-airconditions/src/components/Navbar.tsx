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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            <span
              className="font-bold text-2xl tracking-wide text-white uppercase"
              style={{ fontFamily: rajdhani }}
            >
              B.B. AIRCONDITIONS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['services', 'brands', 'why-us', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-white hover:text-daikin transition-colors font-medium capitalize"
              >
                {id === 'why-us' ? 'Why Us' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {/* Call button — bordered box style */}
            <a
              href="tel:+918777793800"
              className="flex items-center gap-2 text-white border border-white/40 hover:border-white hover:bg-white/10 px-4 py-2 font-semibold transition-all duration-200"
              style={{ borderRadius: '6px', fontSize: '14px' }}
            >
              <Phone className="w-4 h-4" />
              087777 93800
            </a>
            {/* WhatsApp button */}
            <a
              href="https://wa.me/918777793800?text=I%20need%20AC%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white px-5 py-2 font-semibold transition-colors"
              style={{ borderRadius: '6px' }}
            >
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-white/10">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <button onClick={() => scrollTo('services')} className="block w-full text-left px-3 py-2 text-white font-medium">Services</button>
            <button onClick={() => scrollTo('brands')} className="block w-full text-left px-3 py-2 text-white font-medium">Brands</button>
            <button onClick={() => scrollTo('why-us')} className="block w-full text-left px-3 py-2 text-white font-medium">Why Us</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left px-3 py-2 text-white font-medium">Contact</button>
            <a href="tel:+918777793800" className="block w-full text-left px-3 py-2 text-daikin font-medium">Call: 087777 93800</a>
            <a href="https://wa.me/918777793800?text=I%20need%20AC%20services" className="block w-full text-left px-3 py-2 text-whatsapp font-medium">WhatsApp Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}

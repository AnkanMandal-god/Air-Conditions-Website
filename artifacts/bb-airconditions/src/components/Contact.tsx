import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      '💬 *New Enquiry — B.B. Airconditions*',
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Message:* ${form.message}`,
    ].join('\n');
    window.open(
      `https://wa.me/918777793800?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-[#1a2a3a] mb-3"
            style={{ fontFamily: rajdhani, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full" />
          <p className="text-[#1a2a3a]/60 mt-4 font-medium">We're here to help — reach out any time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info + Map */}
          <div className="space-y-7">
            {/* Address */}
            <div className="flex items-start gap-4 pl-4 border-l-[3px] border-daikin">
              <MapPin className="w-5 h-5 text-daikin mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a2a3a]/50 text-xs font-semibold uppercase tracking-widest mb-1">Address</p>
                <p className="text-[#1a2a3a] font-semibold">6, Robert Street (Near Bowbazar P.S.), Kolkata - 12</p>
                <a
                  href="https://maps.google.com/?q=6,+Robert+Street,+Bowbazar,+Kolkata+700012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-daikin text-xs hover:underline mt-1 inline-block"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 pl-4 border-l-[3px] border-daikin">
              <Phone className="w-5 h-5 text-daikin mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a2a3a]/50 text-xs font-semibold uppercase tracking-widest mb-1">Contact Numbers</p>
                <div className="space-y-1">
                  <div>
                    <span className="text-[#1a2a3a]/50 text-xs">Asik: </span>
                    <a
                      href="tel:+918777793800"
                      className="text-[#1a2a3a] font-semibold hover:text-daikin transition-colors"
                    >
                      87777 93800
                    </a>
                  </div>
                  <div>
                    <span className="text-[#1a2a3a]/50 text-xs">A. Barick: </span>
                    <a
                      href="tel:+919830526429"
                      className="text-[#1a2a3a] font-semibold hover:text-daikin transition-colors"
                    >
                      98305 26429
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 pl-4 border-l-[3px] border-[#25d366]">
              <MessageCircle className="w-5 h-5 text-[#25d366] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a2a3a]/50 text-xs font-semibold uppercase tracking-widest mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/918777793800?text=I%20need%20AC%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25d366] font-semibold hover:underline"
                >
                  Click to chat
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-sky-200 h-56 shadow-sm">
              <iframe
                title="B.B. Airconditions Location"
                src="https://maps.google.com/maps?q=6,+Robert+Street,+Pilkhana,+Kolkata+700012&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-sky-100 rounded-xl p-8 shadow-sm">
            {/* "Contact Us" title above form */}
            <h3
              className="text-[#1a2a3a] mb-6 pb-4 border-b border-sky-100"
              style={{ fontFamily: rajdhani, fontSize: '28px', fontWeight: 700 }}
            >
              Contact Us
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-daikin/10 rounded-full flex items-center justify-center mb-4 border border-daikin/30">
                  <Mail className="w-8 h-8 text-daikin" />
                </div>
                <h4
                  className="text-[#1a2a3a] mb-2"
                  style={{ fontFamily: rajdhani, fontSize: '22px', fontWeight: 700 }}
                >
                  Message Sent!
                </h4>
                <p className="text-[#1a2a3a]/50">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#1a2a3a]/70 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    data-testid="input-name"
                    className="w-full bg-[#f8fbff] border-b-2 border-sky-200 focus:border-daikin px-4 py-3 text-[#1a2a3a] placeholder:text-[#1a2a3a]/30 focus:outline-none transition-colors duration-200 text-sm font-medium rounded-t-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1a2a3a]/70 uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your contact number"
                    data-testid="input-phone"
                    className="w-full bg-[#f8fbff] border-b-2 border-sky-200 focus:border-daikin px-4 py-3 text-[#1a2a3a] placeholder:text-[#1a2a3a]/30 focus:outline-none transition-colors duration-200 text-sm font-medium rounded-t-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1a2a3a]/70 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    data-testid="input-message"
                    className="w-full bg-[#f8fbff] border-b-2 border-sky-200 focus:border-daikin px-4 py-3 text-[#1a2a3a] placeholder:text-[#1a2a3a]/30 focus:outline-none transition-colors duration-200 resize-none text-sm font-medium rounded-t-md"
                  />
                </div>

                {/* Send Message — slide fill animation */}
                <button
                  type="submit"
                  data-testid="button-submit"
                  className="relative overflow-hidden group w-full bg-daikin text-white py-4 font-bold text-base transition-colors duration-300"
                  style={{ borderRadius: '6px' }}
                >
                  <span className="absolute inset-0 bg-[#007aa3] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-350 ease-in-out" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

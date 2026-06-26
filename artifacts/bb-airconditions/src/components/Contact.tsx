import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a3a] mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full" />
          <p className="text-[#1a2a3a]/50 mt-4">We're here to help — reach out any time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info + Map */}
          <div className="space-y-7">
            {/* Address */}
            <div className="flex items-start gap-4 pl-4 border-l-[3px] border-daikin">
              <MapPin className="w-5 h-5 text-daikin mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a2a3a]/50 text-xs font-semibold uppercase tracking-widest mb-1">Address</p>
                <p className="text-[#1a2a3a] font-medium">6, Robert Street, Pilkhana, Kolkata - 700012</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 pl-4 border-l-[3px] border-daikin">
              <Phone className="w-5 h-5 text-daikin mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#1a2a3a]/50 text-xs font-semibold uppercase tracking-widest mb-1">Phone</p>
                <a
                  href="tel:+918777793800"
                  className="text-[#1a2a3a] font-medium hover:text-daikin transition-colors"
                >
                  087777 93800
                </a>
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
                  className="text-[#25d366] font-medium hover:underline"
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
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="w-16 h-16 bg-daikin/10 rounded-full flex items-center justify-center mb-4 border border-daikin/30">
                  <Mail className="w-8 h-8 text-daikin" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2a3a] mb-2">Message Sent!</h3>
                <p className="text-[#1a2a3a]/50">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-[#1a2a3a]/60 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    data-testid="input-name"
                    className="w-full bg-[#f8fbff] border border-sky-200 rounded-lg px-4 py-3 text-[#1a2a3a] placeholder:text-[#1a2a3a]/30 focus:outline-none focus:border-daikin transition-colors duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1a2a3a]/60 uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your contact number"
                    data-testid="input-phone"
                    className="w-full bg-[#f8fbff] border border-sky-200 rounded-lg px-4 py-3 text-[#1a2a3a] placeholder:text-[#1a2a3a]/30 focus:outline-none focus:border-daikin transition-colors duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1a2a3a]/60 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    data-testid="input-message"
                    className="w-full bg-[#f8fbff] border border-sky-200 rounded-lg px-4 py-3 text-[#1a2a3a] placeholder:text-[#1a2a3a]/30 focus:outline-none focus:border-daikin transition-colors duration-200 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  data-testid="button-submit"
                  className="relative overflow-hidden group w-full bg-daikin text-white py-4 rounded-lg font-bold text-base hover:bg-daikin/90 transition-all"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_0.8s_ease-in-out] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="py-24 bg-[#1e3045]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full" />
          <p className="text-white/60 mt-4">We're here to help — reach out any time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info + Map */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-background/50 border border-white/10">
              <MapPin className="w-5 h-5 text-daikin mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/50 text-sm font-medium uppercase tracking-wide mb-1">Address</p>
                <p className="text-white font-medium">6, Robert Street, Pilkhana, Kolkata - 700012</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-background/50 border border-white/10">
              <Phone className="w-5 h-5 text-daikin mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/50 text-sm font-medium uppercase tracking-wide mb-1">Phone</p>
                <a href="tel:+918777793800" className="text-white font-medium hover:text-daikin transition-colors">
                  087777 93800
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-background/50 border border-white/10">
              <MessageCircle className="w-5 h-5 text-whatsapp mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/50 text-sm font-medium uppercase tracking-wide mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/918777793800?text=I%20need%20AC%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp font-medium hover:underline"
                >
                  Click to chat
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 h-56">
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
          <div className="bg-background/50 border border-white/10 rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-daikin/20 rounded-full flex items-center justify-center mb-4 border border-daikin/40">
                  <Mail className="w-8 h-8 text-daikin" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    data-testid="input-name"
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-daikin transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your phone number"
                    data-testid="input-phone"
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-daikin transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    data-testid="input-message"
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-daikin transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-testid="button-submit"
                  className="relative overflow-hidden group w-full bg-daikin text-white py-4 rounded-lg font-semibold text-base hover:bg-daikin/90 transition-all"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

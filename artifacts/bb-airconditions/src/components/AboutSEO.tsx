import { MapPin, Award } from 'lucide-react';

export function AboutSEO() {
  return (
    <section id="about" className="py-20 bg-[#07111f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <span className="text-[#0099cc] text-xs font-bold tracking-[0.2em] uppercase">About Us</span>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2 mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Professional Air Conditioning Services in Kolkata
          </h2>
          <div className="w-12 h-[2px] bg-[#0099cc]" />
        </div>

        {/* Daikin badge */}
        <div className="inline-flex items-center gap-2 mb-6 text-[#0099cc] text-sm font-semibold">
          <Award className="w-4 h-4" />
          <span>Authorized Daikin Dealer — Kolkata</span>
        </div>

        {/* Body text */}
        <div className="space-y-4 text-white/60 text-[15px] leading-relaxed">
          <p>
            <span className="text-white font-semibold">B.B. Airconditions</span> is one of Kolkata's
            most trusted air conditioning specialists, delivering comprehensive cooling solutions for
            homes and businesses across the city. As an authorized Daikin dealer, every installation
            carries manufacturer-backed certification and genuine parts.
          </p>
          <p>
            Our technicians handle the full lifecycle — system selection, installation, routine
            servicing, emergency repairs, and commercial HVAC fit-outs. We work with split ACs,
            cassette units, window ACs, and large-scale central systems.
          </p>
          <p>
            We've been serving Kolkata for over a decade with transparent pricing, genuine parts, and
            a service guarantee on every job. No hidden charges. No shortcuts.
          </p>
        </div>

        {/* Quick facts */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
          <span>10+ Years in Business</span>
          <span>500+ Happy Clients</span>
          <span>Genuine Parts Guaranteed</span>
          <span>Residential &amp; Commercial</span>
        </div>

        {/* Maps link */}
        <a
          href="https://maps.google.com/?q=6,+Robert+Street,+Bowbazar,+Kolkata+700012"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-[#0099cc] text-sm hover:underline"
        >
          <MapPin className="w-4 h-4" />
          6, Robert Street (Near Bowbazar P.S.), Kolkata — View on Google Maps
        </a>

      </div>
    </section>
  );
}

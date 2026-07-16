const rajdhani = "'Rajdhani', sans-serif";
const lora = "'Lora', Georgia, serif";

const GMAPS_LINK =
  "https://www.google.com/maps/place/BB+Air+Condition+sales+and+service/@22.5691084,88.3542215,17z/data=!4m15!1m8!3m7!1s0x3a0277a9486cdfaf:0x9567086dd1ad2b32!2s6,+Robert+St,+near+Bowbazar,+Bowbazar,+Kolkata,+Thana,+West+Bengal+700012!3b1!8m2!3d22.5691084!4d88.3567964!16s%2Fg%2F11yjgkgl4c!3m5!1s0x3a0277cde4d3a421:0xe413b8cd0f124cbe!8m2!3d22.5691084!4d88.3567964!16s%2Fg%2F11z5vydwvd?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h3
        className="text-[#1a2a3a]"
        style={{ fontFamily: rajdhani, fontSize: '20px', fontWeight: 700, letterSpacing: '0.01em' }}
      >
        {children}
      </h3>
      <div className="mt-1.5 w-8 h-px bg-[#0099cc]" />
    </div>
  );
}

export function AboutSEO() {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-7 text-center">
            <h2
              className="text-[#1a2a3a] mb-3"
              style={{ fontFamily: rajdhani, fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700 }}
            >
              Professional Air Conditioning Services in Kolkata
            </h2>
            <div className="w-20 h-1 bg-[#0099cc] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left column */}
            <div className="flex-1 md:pr-10">
              <SectionHeading>About B.B. Airconditions</SectionHeading>
              <div
                className="text-[#1a2a3a] leading-[1.7] text-[14px] space-y-3"
                style={{ fontFamily: lora }}
              >
                <p>
                  B.B. Airconditions is one of Kolkata's most trusted air conditioning
                  contractors, offering comprehensive cooling solutions for homes and
                  businesses throughout the city. As an authorized Daikin contractor, we
                  bring manufacturer-certified expertise backed by years of hands-on
                  experience in the field.
                </p>
                <p>
                  Our team of skilled technicians handles every aspect of your AC needs —
                  from initial system selection and sizing through to installation, routine
                  maintenance, and emergency repairs. We work with all major brands and
                  unit types, including split ACs, cassette units, window ACs, and
                  large-scale commercial HVAC systems.
                </p>
                <p>
                  Every job we undertake uses genuine parts and follows manufacturer
                  guidelines, so your system performs at its best and your warranty stays
                  intact. We believe in transparent pricing with no hidden charges — you
                  get a clear quote before we start, and we stand behind our work with a
                  service guarantee.
                </p>
              </div>
            </div>

            {/* Vertical divider — desktop only */}
            <div className="hidden md:block w-px bg-[#0099cc]/25 mx-4 self-stretch flex-shrink-0" />

            {/* Horizontal divider — mobile only */}
            <div className="block md:hidden h-px bg-[#0099cc]/25 my-8" />

            {/* Right column */}
            <div className="flex-1 md:pl-10">
              <SectionHeading>Why Kolkata Trusts Us</SectionHeading>
              <div
                className="text-[#1a2a3a] leading-[1.7] text-[14px] space-y-3"
                style={{ fontFamily: lora }}
              >
                <p>
                  B.B. Airconditions has built its reputation on reliability and
                  professionalism. Our customers return because we show up on time,
                  communicate clearly, and deliver results that last. Whether it's a
                  single-room installation for a family home or a multi-floor commercial
                  fit-out, every project receives the same level of attention to detail.
                </p>
                <p>
                  We offer prompt emergency response across Kolkata — including evenings
                  and weekends — because we know that an AC breakdown during peak summer
                  heat cannot wait. Our quick turnaround on service calls has made us the
                  go-to team for both planned maintenance and urgent repairs.
                </p>
                <p>
                  With a growing base of satisfied residential and commercial clients,
                  B.B. Airconditions continues to be the preferred choice for quality AC
                  contracting in Kolkata. Reach out to us today for a free consultation
                  or to book a service at your convenience. You can also{' '}
                  <a
                    href={GMAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0099cc] hover:underline font-medium"
                  >
                    find us on Google Maps
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

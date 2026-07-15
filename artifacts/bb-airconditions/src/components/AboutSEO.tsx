const rajdhani = "'Rajdhani', sans-serif";

export function AboutSEO() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2
              className="text-[#1a2a3a] mb-3"
              style={{ fontFamily: rajdhani, fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700 }}
            >
              Professional Air Conditioning Services in Kolkata
            </h2>
            <div className="w-20 h-1 bg-[#0099cc] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#1a2a3a]/75 leading-relaxed text-[15px]">
            <div>
              <h3
                className="text-[#1a2a3a] mb-3"
                style={{ fontFamily: rajdhani, fontSize: '22px', fontWeight: 700 }}
              >
                About B.B. Airconditions
              </h3>
              <p className="mb-4">
                B.B. Airconditions is one of Kolkata's most trusted air conditioning service providers,
                offering comprehensive cooling solutions for homes and businesses throughout the city.
                As an authorized Daikin dealer, we bring manufacturer-certified expertise backed by
                years of hands-on experience in the field.
              </p>
              <p className="mb-4">
                Our team of skilled technicians handles every aspect of your AC needs — from initial
                system selection and sizing through to installation, routine maintenance, and emergency
                repairs. We work with all major brands and unit types, including split ACs, cassette
                units, window ACs, and large-scale commercial HVAC systems.
              </p>
              <p>
                Every job we undertake uses genuine parts and follows manufacturer guidelines, so your
                system performs at its best and your warranty stays intact. We believe in transparent
                pricing with no hidden charges — you get a clear quote before we start, and we stand
                behind our work with a service guarantee.
              </p>
            </div>

            <div>
              <h3
                className="text-[#1a2a3a] mb-3"
                style={{ fontFamily: rajdhani, fontSize: '22px', fontWeight: 700 }}
              >
                Why Kolkata Trusts Us
              </h3>
              <p className="mb-4">
                B.B. Airconditions has built its reputation on reliability and professionalism. Our
                customers return because we show up on time, communicate clearly, and deliver results
                that last. Whether it's a single-room installation for a family home or a multi-floor
                commercial fit-out, every project receives the same level of attention to detail.
              </p>
              <p className="mb-4">
                We offer prompt emergency response across Kolkata — including evenings and weekends —
                because we know that an AC breakdown during peak summer heat cannot wait. Our quick
                turnaround on service calls has made us the go-to team for both planned maintenance
                and urgent repairs.
              </p>
              <p>
                With a growing base of satisfied residential and commercial clients, B.B. Airconditions
                continues to be the preferred choice for quality AC services in Kolkata. Reach out to
                us today for a free consultation or to book a service at your convenience. You can also{' '}
                <a
                  href="https://maps.google.com/?q=6,+Robert+Street,+Bowbazar,+Kolkata+700012"
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
    </section>
  );
}

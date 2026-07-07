const rajdhani = "'Rajdhani', sans-serif";

function DaikinLogo() {
  return (
    <svg viewBox="0 0 180 60" className="w-36 h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Daikin wordmark — simplified accurate recreation */}
      <text
        x="90"
        y="44"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="38"
        fill="#0099cc"
        letterSpacing="2"
      >
        DAIKIN
      </text>
    </svg>
  );
}

function GodrejLogo() {
  return (
    <svg viewBox="0 0 180 60" className="w-32 h-auto" xmlns="http://www.w3.org/2000/svg">
      <text
        x="90"
        y="44"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="34"
        fill="#1a2a3a"
        letterSpacing="1"
      >
        Godrej
      </text>
    </svg>
  );
}

function VoltasLogo() {
  return (
    <svg viewBox="0 0 200 70" className="w-36 h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Orange lightning bolt accent */}
      <polygon points="18,10 28,10 18,38 28,38 12,62 22,62 36,30 25,30 34,10" fill="#f47920" />
      <text
        x="112"
        y="48"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="#1a2a3a"
        letterSpacing="2"
      >
        VOLTAS
      </text>
    </svg>
  );
}

function BlueStarLogo() {
  return (
    <svg viewBox="0 0 210 70" className="w-36 h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* 5-pointed star */}
      <polygon
        points="20,8 23.5,19 35,19 25.5,25.5 29,37 20,30 11,37 14.5,25.5 5,19 16.5,19"
        fill="#005baa"
      />
      <text
        x="118"
        y="34"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="17"
        fill="#005baa"
        letterSpacing="1"
      >
        BLUE STAR
      </text>
      <text
        x="118"
        y="54"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="11"
        fill="#1a2a3a"
        letterSpacing="3"
      >
        COOLING EXPERTS
      </text>
    </svg>
  );
}

export function Brands() {
  return (
    <section id="brands" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-[#1a2a3a] mb-3"
            style={{ fontFamily: rajdhani, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}
          >
            Brands We Deal In
          </h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full mb-4" />
          <p className="text-[#1a2a3a]/60 max-w-xl mx-auto text-base">
            We are an authorized Daikin dealer and work with leading AC brands to bring you the best in cooling technology — backed by factory-trained service and genuine parts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {/* Daikin */}
          <div className="flex flex-col items-center justify-center p-10 bg-white shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-pointer min-h-[140px] border border-gray-100">
            <DaikinLogo />
            <p className="text-xs text-[#1a2a3a]/40 mt-3 font-semibold uppercase tracking-widest">Authorized Dealer</p>
          </div>

          {/* Godrej */}
          <div className="flex flex-col items-center justify-center p-10 bg-white shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-pointer min-h-[140px] border border-gray-100">
            <GodrejLogo />
            <p className="text-xs text-[#1a2a3a]/40 mt-3 font-semibold uppercase tracking-widest">Authorized Service</p>
          </div>

          {/* Voltas */}
          <div className="flex flex-col items-center justify-center p-10 bg-white shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-pointer min-h-[140px] border border-gray-100">
            <VoltasLogo />
            <p className="text-xs text-[#1a2a3a]/40 mt-3 font-semibold uppercase tracking-widest">Authorized Service</p>
          </div>

          {/* Blue Star */}
          <div className="flex flex-col items-center justify-center p-10 bg-white shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-pointer min-h-[140px] border border-gray-100">
            <BlueStarLogo />
            <p className="text-xs text-[#1a2a3a]/40 mt-3 font-semibold uppercase tracking-widest">Authorized Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}

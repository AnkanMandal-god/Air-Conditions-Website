import { Lock } from 'lucide-react';

export function Brands() {
  return (
    <section id="brands" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a3a] mb-3">Brands We Deal In</h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {/* Daikin */}
          <div className="flex flex-col items-center justify-center p-10 bg-white shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-pointer min-h-[140px]">
            <span
              className="text-3xl font-extrabold text-daikin tracking-tighter uppercase"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}
            >
              DAIKIN
            </span>
            <p className="text-xs text-[#1a2a3a]/40 mt-2 font-medium">Authorized Dealer</p>
          </div>

          {/* Godrej */}
          <div className="flex flex-col items-center justify-center p-10 bg-white shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-pointer min-h-[140px]">
            <span className="text-3xl font-extrabold text-[#1a2a3a] tracking-tight">Godrej</span>
            <p className="text-xs text-[#1a2a3a]/40 mt-2 font-medium">Authorized Service</p>
          </div>

          {/* Coming Soon 1 */}
          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 bg-white min-h-[140px] animate-[pulse-slow_2s_ease-in-out_infinite]">
            <Lock className="w-8 h-8 text-gray-300 mb-2" strokeWidth={1.5} />
            <span className="text-gray-400 font-medium text-sm">Coming Soon</span>
          </div>

          {/* Coming Soon 2 */}
          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 bg-white min-h-[140px] animate-[pulse-slow_2s_ease-in-out_infinite] [animation-delay:300ms]">
            <Lock className="w-8 h-8 text-gray-300 mb-2" strokeWidth={1.5} />
            <span className="text-gray-400 font-medium text-sm">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <section id="brands" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-background text-center mb-12">Brands We Deal In</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
            <span className="text-3xl font-extrabold text-daikin tracking-tighter uppercase">DAIKIN</span>
          </div>
          
          <div className="flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
            <span className="text-3xl font-extrabold text-gray-800 tracking-tight">Godrej</span>
          </div>
          
          <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl animate-pulse-slow">
            <span className="text-gray-400 font-medium">Coming Soon</span>
          </div>
          
          <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl animate-pulse-slow delay-75">
            <span className="text-gray-400 font-medium">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PromoBanners() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white cursor-pointer hover:shadow-lg transition-shadow relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-[10px] font-black tracking-widest mb-2 opacity-80">BLACK FRIDAY DEALS</div>
            <div className="text-2xl font-black mb-1">Samsonite Up to 80% Off</div>
            <div className="text-sm text-white/80 mb-4">Hardside, softside, carry-ons — massive markdowns</div>
            <button className="bg-white text-red-600 font-black px-5 py-2 rounded text-sm hover:bg-gray-100 transition-colors">
              Shop Samsonite
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] opacity-10">🧳</div>
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 text-white cursor-pointer hover:shadow-lg transition-shadow relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-[10px] font-black tracking-widest mb-2 opacity-60">BUSINESS TRAVEL</div>
            <div className="text-2xl font-black mb-1">Briggs & Riley</div>
            <div className="text-sm text-white/70 mb-4">Lifetime guarantee. Built for the road warrior.</div>
            <button className="bg-[#00a651] text-white font-black px-5 py-2 rounded text-sm hover:bg-[#009044] transition-colors">
              Shop B&R
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] opacity-10">💼</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-[#00a651] transition-all">
          <div className="text-2xl mb-2">✈️</div>
          <div className="font-bold text-gray-800 mb-1">Carry-On Deals</div>
          <div className="text-xs text-gray-500 mb-3">Use code <span className="font-mono font-bold text-gray-700">LF10</span> for 10% off all carry-ons</div>
          <span className="text-[#00a651] text-sm font-bold">Shop Carry-Ons →</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-[#00a651] transition-all">
          <div className="text-2xl mb-2">👜</div>
          <div className="font-bold text-gray-800 mb-1">Purses & Handbags</div>
          <div className="text-xs text-gray-500 mb-3">Use code <span className="font-mono font-bold text-gray-700">PUR10</span> for 10% off purses</div>
          <span className="text-[#00a651] text-sm font-bold">Shop Purses →</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-[#00a651] transition-all">
          <div className="text-2xl mb-2">📡</div>
          <div className="font-bold text-gray-800 mb-1">High-Tech Travel</div>
          <div className="text-xs text-gray-500 mb-3">Use code <span className="font-mono font-bold text-gray-700">SAVETECH</span> for 15% off smart luggage</div>
          <span className="text-[#00a651] text-sm font-bold">Shop High-Tech →</span>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'

const slides = [
  {
    bg: 'from-slate-800 to-slate-900',
    badge: 'SITEWIDE SALE',
    title: 'Up to 75% Off',
    subtitle: 'Travelpro, Samsonite, Briggs & Riley and more',
    cta: 'Shop the Sale',
    code: null,
    img: 'https://images.unsplash.com/photo-1553531087-b70adb729176?w=560&h=320&fit=crop&auto=format',
    alt: 'Luggage suitcases lined up',
  },
  {
    bg: 'from-green-800 to-emerald-900',
    badge: 'FREE SHIPPING',
    title: 'LF Brand Luggage',
    subtitle: 'Our house brand — built tough, priced right',
    cta: 'Shop LF Brand',
    code: 'LFNEW',
    img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=560&h=320&fit=crop&auto=format',
    alt: 'Travel bags at airport',
  },
  {
    bg: 'from-blue-900 to-indigo-900',
    badge: 'BEST SELLERS',
    title: 'Carry-On Season',
    subtitle: 'Find your perfect carry-on from top brands',
    cta: 'Shop Carry-Ons',
    code: 'LF10',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=560&h=320&fit=crop&auto=format',
    alt: 'Person with carry-on luggage at airport',
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  const s = slides[current]

  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-4 pb-2">
      <div className="flex gap-3">
        {/* Main Slide */}
        <div className={`flex-1 rounded-lg overflow-hidden bg-gradient-to-r ${s.bg} relative flex min-h-[260px]`}>
          <div className="flex-1 p-8 flex flex-col justify-center z-10">
            <span className="inline-block bg-[#00a651] text-white text-[10px] font-black px-2.5 py-1 rounded mb-3 tracking-widest uppercase w-fit">
              {s.badge}
            </span>
            <h1 className="text-4xl font-black text-white leading-tight mb-2">{s.title}</h1>
            <p className="text-white/70 text-base mb-4">{s.subtitle}</p>
            {s.code && (
              <div className="mb-4 flex items-center gap-2">
                <span className="text-white/60 text-xs">Use code:</span>
                <span className="bg-white/10 border border-white/30 text-white text-xs font-mono font-bold px-2 py-0.5 rounded tracking-wider">
                  {s.code}
                </span>
              </div>
            )}
            <button className="bg-[#00a651] hover:bg-[#009044] text-white font-bold px-6 py-2.5 rounded text-sm transition-colors w-fit">
              {s.cta} →
            </button>
          </div>
          <div className="w-72 flex-shrink-0 overflow-hidden relative">
            <img src={s.img} alt={s.alt} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />
          </div>
          {/* Dots */}
          <div className="absolute bottom-4 left-8 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? 'bg-[#00a651] w-5 h-2' : 'bg-white/40 w-2 h-2'}`}
              />
            ))}
          </div>
        </div>

        {/* Side Banners */}
        <div className="hidden lg:flex flex-col gap-3 w-[200px]">
          <div className="bg-red-600 rounded-lg p-4 text-white flex-1 flex flex-col justify-between cursor-pointer hover:bg-red-700 transition-colors">
            <div>
              <div className="text-[10px] font-black tracking-widest mb-1 opacity-80">LIMITED TIME</div>
              <div className="text-base font-black leading-tight">Up to 80% Off Samsonite</div>
              <div className="text-xs text-white/70 mt-1">Black Friday Deals</div>
            </div>
            <div className="mt-3 text-xs font-bold underline">Shop Now →</div>
          </div>
          <div className="bg-amber-500 rounded-lg p-4 text-white flex-1 flex flex-col justify-between cursor-pointer hover:bg-amber-600 transition-colors">
            <div>
              <div className="text-[10px] font-black tracking-widest mb-1 opacity-80">COUPON CODE</div>
              <div className="text-base font-black leading-tight">10% Off All Luggage</div>
              <div className="mt-1 bg-white/20 rounded px-2 py-0.5 text-xs font-mono font-bold w-fit">LF10</div>
            </div>
            <div className="mt-3 text-xs font-bold underline">Shop Now →</div>
          </div>
        </div>
      </div>
    </section>
  )
}

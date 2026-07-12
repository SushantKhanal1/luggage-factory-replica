export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-6">
      {/* Newsletter */}
      <div className="bg-[#00a651]">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-white font-bold text-base">Get Exclusive Deals in Your Inbox</div>
            <div className="text-green-100 text-xs">Coupon codes, flash sales, new arrivals — weekly digest</div>
          </div>
          <div className="flex gap-0 overflow-hidden rounded">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 text-sm outline-none text-gray-700 w-56"
            />
            <button className="bg-gray-900 text-white px-4 py-2 text-sm font-bold hover:bg-gray-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#00a651] rounded flex items-center justify-center">
                <span className="text-white font-black text-sm">LF</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-black text-sm">Luggage Factory</div>
                <div className="text-[#00a651] text-[10px] tracking-widest uppercase">Est. 1908</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Formerly York Luggage Co. Over 100 years of travel expertise. Ships to 60+ countries from Ringoes, NJ.
            </p>
            <div className="text-xs space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-[#00a651]">📍</span>
                <span>Ringoes, New Jersey, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00a651]">📞</span>
                <span>1-800-LUGGAGE</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              {['All Luggage', 'Carry-Ons', 'Checked Luggage', 'Luggage Sets', 'Duffels', 'Backpacks', 'Accessories'].map(l => (
                <li key={l}><a href="#" className="text-xs hover:text-[#00a651] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Top Brands</h4>
            <ul className="space-y-2">
              {['Travelpro', 'Samsonite', 'Briggs & Riley', 'Rimowa', 'Victorinox', 'Eagle Creek', 'Delsey'].map(l => (
                <li key={l}><a href="#" className="text-xs hover:text-[#00a651] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-2">
              {['Track My Order', 'Shipping Info', 'Returns & Exchanges', 'Size Guide', 'FAQ', 'Contact Us'].map(l => (
                <li key={l}><a href="#" className="text-xs hover:text-[#00a651] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Sell With Us', 'Affiliate Program', 'Privacy Policy', 'Terms & Conditions'].map(l => (
                <li key={l}><a href="#" className="text-xs hover:text-[#00a651] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coupon Codes */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-3">Active Coupon Codes</div>
          <div className="flex flex-wrap gap-2">
            {[
              { code: 'LFNEW', desc: 'Free shipping on LF Brand' },
              { code: 'LF10', desc: '10% off all luggage' },
              { code: 'PUR10', desc: '10% off purses' },
              { code: 'SAVETECH', desc: '15% off high-tech travel' },
            ].map(c => (
              <div key={c.code} className="flex items-center gap-2 bg-gray-800 rounded px-3 py-1.5">
                <span className="font-mono font-black text-[#00a651] text-xs">{c.code}</span>
                <span className="text-gray-500 text-[10px]">— {c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-3">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-600">
          <span>© 2026 Luggage Factory (formerly York Luggage Co.) · All rights reserved.</span>
          <div className="flex gap-3">
            {['f', '◯', '𝕏', '▶'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-7 h-7 bg-gray-800 hover:bg-[#00a651] rounded-full flex items-center justify-center text-xs transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

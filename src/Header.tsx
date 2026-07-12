import { useState } from 'react'

export default function Header() {
  const [query, setQuery] = useState('')

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center gap-2">
          <div className="w-9 h-9 bg-[#00a651] rounded flex items-center justify-center">
            <span className="text-white font-black text-base leading-none">LF</span>
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-black text-gray-900 tracking-tight">Luggage</div>
            <div className="text-[11px] font-bold text-[#00a651] tracking-widest uppercase -mt-0.5">Factory</div>
          </div>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="flex border-2 border-[#00a651] rounded overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search luggage, carry-ons, duffels, brands..."
              className="flex-1 px-4 py-2 text-sm outline-none text-gray-700 placeholder:text-gray-400"
            />
            <button className="bg-[#00a651] px-5 text-white hover:bg-[#009044] transition-colors flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 flex-shrink-0 text-gray-600">
          <button className="hidden md:flex flex-col items-center hover:text-[#00a651] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-[10px] mt-0.5 font-medium">Wishlist</span>
          </button>
          <button className="hidden md:flex flex-col items-center hover:text-[#00a651] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] mt-0.5 font-medium">Account</span>
          </button>
          <button className="flex flex-col items-center hover:text-[#00a651] transition-colors relative">
            <div className="relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">3</span>
            </div>
            <span className="text-[10px] mt-0.5 font-medium">Cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}

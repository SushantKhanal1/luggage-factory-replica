import { useState } from 'react'

const navItems = [
  { label: 'All Luggage', sub: ['Hardside', 'Softside', 'Luggage Sets'] },
  { label: 'Carry-Ons', sub: ['Under-Seat', 'International', 'Domestic'] },
  { label: 'Checked Luggage', sub: ['Medium (25–26")', 'Large (28–30")', 'Extra Large'] },
  { label: 'Duffels', sub: ['Rolling Duffels', 'Gym Bags', 'Weekender'] },
  { label: 'Backpacks', sub: ['Business', 'Travel', 'Laptop Bags'] },
  { label: 'Business / Laptop', sub: ['Briefcases', 'Rolling Cases', 'Totes'] },
  { label: 'Accessories', sub: ['Locks', 'Tags', 'Packing Cubes', 'Covers'] },
  { label: 'High-Tech Travel', sub: ['Smart Luggage', 'USB Charging', 'GPS Tracking'] },
  { label: 'Brands', sub: [] },
  { label: 'Sale', sub: [], highlight: true },
]

export default function NavBar() {
  const [active, setActive] = useState('')

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center overflow-x-auto scrollbar-hide">
          {/* Hamburger */}
          <button className="flex items-center gap-2 bg-[#00a651] text-white px-4 py-3 text-sm font-bold flex-shrink-0 hover:bg-[#009044] transition-colors whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            ALL CATEGORIES
          </button>

          {navItems.map(item => (
            <button
              key={item.label}
              onMouseEnter={() => setActive(item.label)}
              onMouseLeave={() => setActive('')}
              onClick={() => setActive(active === item.label ? '' : item.label)}
              className={`px-4 py-3 text-sm font-medium flex-shrink-0 whitespace-nowrap border-b-2 transition-colors ${
                item.highlight
                  ? 'text-red-600 border-transparent hover:border-red-500 font-bold'
                  : active === item.label
                  ? 'text-[#00a651] border-[#00a651]'
                  : 'text-gray-700 border-transparent hover:text-[#00a651] hover:border-[#00a651]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

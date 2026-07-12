const brands = [
  { name: 'Travelpro', color: '#1a3a6e' },
  { name: 'Samsonite', color: '#c41230' },
  { name: 'Briggs & Riley', color: '#2d2d2d' },
  { name: 'Rimowa', color: '#8b7355' },
  { name: 'Hartmann', color: '#5c4a2a' },
  { name: 'Victorinox', color: '#cc0000' },
  { name: 'Eagle Creek', color: '#2e7d32' },
  { name: 'Delsey', color: '#003087' },
  { name: 'American Tourister', color: '#e63222' },
  { name: 'Vera Bradley', color: '#8b4a8b' },
  { name: 'Kenneth Cole', color: '#1a1a1a' },
  { name: 'Heys America', color: '#1565c0' },
]

export default function BrandsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800">Shop by Brand</h2>
        <a href="#" className="text-sm text-[#00a651] font-medium hover:underline">All Brands →</a>
      </div>
      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
        {brands.map(b => (
          <button
            key={b.name}
            className="flex-shrink-0 bg-white border border-gray-200 rounded px-5 py-3.5 hover:border-[#00a651] hover:shadow-md transition-all group min-w-[120px] text-center"
          >
            <span
              className="text-sm font-black group-hover:scale-105 transition-transform inline-block"
              style={{ color: b.color }}
            >
              {b.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

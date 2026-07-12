const categories = [
  { name: 'All Luggage', icon: '🧳', color: 'bg-slate-50', border: 'border-slate-200' },
  { name: 'Carry-Ons', icon: '✈️', color: 'bg-blue-50', border: 'border-blue-200' },
  { name: 'Checked Bags', icon: '📦', color: 'bg-green-50', border: 'border-green-200' },
  { name: 'Luggage Sets', icon: '🗄️', color: 'bg-purple-50', border: 'border-purple-200' },
  { name: 'Duffels', icon: '👜', color: 'bg-amber-50', border: 'border-amber-200' },
  { name: 'Backpacks', icon: '🎒', color: 'bg-orange-50', border: 'border-orange-200' },
  { name: 'Business / Laptop', icon: '💼', color: 'bg-gray-50', border: 'border-gray-200' },
  { name: 'Accessories', icon: '🔒', color: 'bg-teal-50', border: 'border-teal-200' },
  { name: 'High-Tech Travel', icon: '📡', color: 'bg-indigo-50', border: 'border-indigo-200' },
  { name: 'Packing Cubes', icon: '🗂️', color: 'bg-pink-50', border: 'border-pink-200' },
  { name: "Kids' Luggage", icon: '🌈', color: 'bg-yellow-50', border: 'border-yellow-200' },
  { name: 'Sale', icon: '🏷️', color: 'bg-red-50', border: 'border-red-200' },
]

export default function Categories() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800">Shop by Category</h2>
        <a href="#" className="text-sm text-[#00a651] font-medium hover:underline">View All →</a>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
        {categories.map(cat => (
          <button
            key={cat.name}
            className={`flex flex-col items-center gap-1.5 p-2.5 rounded-lg border ${cat.color} ${cat.border} hover:shadow-md hover:border-[#00a651] transition-all group`}
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight group-hover:text-[#00a651]">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

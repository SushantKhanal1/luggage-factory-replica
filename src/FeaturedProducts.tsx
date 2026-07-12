import { useState } from 'react'

interface Product {
  id: number
  name: string
  brand: string
  price: number
  sale: number
  rating: number
  reviews: number
  img: string
  tag?: string
}

const allProducts: Record<string, Product[]> = {
  'Best Sellers': [
    { id: 1, name: 'Travelpro Maxlite 5 Lightweight Expandable Spinner, Black', brand: 'Travelpro', price: 326.99, sale: 217.79, rating: 5, reviews: 412, img: 'https://images.unsplash.com/photo-1553531087-b70adb729176?w=300&h=300&fit=crop&auto=format', tag: 'Best Seller' },
    { id: 2, name: 'Samsonite GeoTrakR 21in Expandable Carry On', brand: 'Samsonite', price: 425.99, sale: 283.79, rating: 5, reviews: 287, img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=300&h=300&fit=crop&auto=format', tag: 'Top Rated' },
    { id: 3, name: 'Briggs & Riley Baseline Domestic Expandable Carry-On 22" Olive', brand: 'Briggs & Riley', price: 1209.99, sale: 806.51, rating: 5, reviews: 198, img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop&auto=format', tag: 'Premium' },
    { id: 4, name: 'Travelpro Crew 11 29" Hardside Spinner, Navy', brand: 'Travelpro', price: 431.99, sale: 287.75, rating: 5, reviews: 334, img: 'https://images.unsplash.com/photo-1553531087-b70adb729176?w=300&h=300&fit=crop&auto=format' },
    { id: 5, name: 'Delsey Hyperglide 21" Expandable Spinner Carry-On, Black', brand: 'Delsey', price: 250.99, sale: 167.63, rating: 5, reviews: 156, img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=300&h=300&fit=crop&auto=format' },
    { id: 6, name: 'American Tourister 21 Spinner, Black', brand: 'American Tourister', price: 182.99, sale: 121.68, rating: 5, reviews: 503, img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop&auto=format', tag: 'Popular' },
  ],
  'Carry-Ons': [
    { id: 7, name: 'Travelpro Maxlite 5 International Expandable Spinner', brand: 'Travelpro', price: 252.99, sale: 168.95, rating: 5, reviews: 221, img: 'https://images.unsplash.com/photo-1553531087-b70adb729176?w=300&h=300&fit=crop&auto=format', tag: 'Best Seller' },
    { id: 8, name: 'Rockland Melbourne 20" Non-Expandable ABS Carry On', brand: 'Rockland', price: 148.99, sale: 98.99, rating: 5, reviews: 445, img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=300&h=300&fit=crop&auto=format' },
    { id: 9, name: 'Samsonite Centric Hardside 20" Carry-On, Blue Slate', brand: 'Samsonite', price: 593.99, sale: 396.00, rating: 5, reviews: 178, img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop&auto=format' },
    { id: 10, name: 'Lipault Original Plume 22in Spinner Carry On', brand: 'Lipault', price: 423.99, sale: 282.47, rating: 5, reviews: 132, img: 'https://images.unsplash.com/photo-1553531087-b70adb729176?w=300&h=300&fit=crop&auto=format' },
    { id: 11, name: 'Eagle Creek Expanse Convertible International Carry On', brand: 'Eagle Creek', price: 379.99, sale: 253.43, rating: 5, reviews: 97, img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=300&h=300&fit=crop&auto=format' },
    { id: 12, name: 'Steve Madden Cubic Luggage Carry On 20" Hardside', brand: 'Steve Madden', price: 191.99, sale: 128.02, rating: 5, reviews: 204, img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop&auto=format', tag: 'New' },
  ],
  'Checked Bags': [
    { id: 13, name: 'Travelpro Maxlite3 Lightweight 29" Expandable Spinner, Grey', brand: 'Travelpro', price: 306.99, sale: 204.59, rating: 5, reviews: 389, img: 'https://images.unsplash.com/photo-1553531087-b70adb729176?w=300&h=300&fit=crop&auto=format', tag: 'Best Seller' },
    { id: 14, name: 'Briggs & Riley Torq Extra Large Spinner, Tech Black', brand: 'Briggs & Riley', price: 1143.99, sale: 762.95, rating: 5, reviews: 88, img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=300&h=300&fit=crop&auto=format', tag: 'Premium' },
    { id: 15, name: 'Ricardo Beverly Hills San Clemente 26" 4 Wheel, Stellar Navy', brand: 'Ricardo of Beverly Hills', price: 254.99, sale: 170.27, rating: 5, reviews: 143, img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop&auto=format' },
    { id: 16, name: "Travelpro TourLite 29\" Expandable Spinner, Blue", brand: 'Travelpro', price: 361.99, sale: 241.55, rating: 5, reviews: 267, img: 'https://images.unsplash.com/photo-1553531087-b70adb729176?w=300&h=300&fit=crop&auto=format' },
    { id: 17, name: "Bric's Riccione 30-Inch Spinner, Brushed Silver", brand: "Bric's", price: 320.99, sale: 213.83, rating: 5, reviews: 76, img: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=300&h=300&fit=crop&auto=format' },
    { id: 18, name: 'Travelpro Crew 10 29" Expandable Spinner Suiter, Merlot', brand: 'Travelpro', price: 239.99, sale: 159.71, rating: 5, reviews: 312, img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop&auto=format' },
  ],
}

function pct(price: number, sale: number) {
  return Math.round(((price - sale) / price) * 100)
}

function Stars({ n }: { n: number }) {
  return (
    <span className="text-amber-400 text-xs tracking-tighter">
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  )
}

function Card({ p, onAdd }: { p: Product; onAdd: (id: number) => void }) {
  const [added, setAdded] = useState(false)
  const discount = pct(p.price, p.sale)

  return (
    <div className="bg-white rounded border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all group flex flex-col overflow-hidden">
      <div className="relative">
        <div className="bg-gray-50 h-44 overflow-hidden flex items-center justify-center">
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {p.tag && (
          <span className="absolute top-2 left-2 bg-[#00a651] text-white text-[9px] font-black px-2 py-0.5 rounded tracking-wide uppercase">
            {p.tag}
          </span>
        )}
        <span className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded">
          SALE {discount}% OFF
        </span>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <div className="text-[10px] font-bold text-[#00a651] uppercase tracking-wide mb-0.5">{p.brand}</div>
        <div className="text-xs font-semibold text-gray-800 leading-snug mb-2 flex-1 line-clamp-2">{p.name}</div>
        <div className="flex items-center gap-1 mb-2">
          <Stars n={p.rating} />
          <span className="text-[10px] text-gray-400">({p.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base font-black text-gray-900">${p.sale.toFixed(2)}</span>
          <span className="text-xs text-gray-400 line-through">${p.price.toFixed(2)}</span>
        </div>
        <button
          onClick={() => { setAdded(true); onAdd(p.id) }}
          className={`w-full py-2 rounded text-xs font-bold transition-all ${
            added ? 'bg-gray-100 text-gray-500' : 'bg-[#00a651] text-white hover:bg-[#009044]'
          }`}
        >
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

const tabs = Object.keys(allProducts)

export default function FeaturedProducts() {
  const [tab, setTab] = useState(tabs[0])
  const [added, setAdded] = useState<number[]>([])

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-lg font-bold text-gray-800">Featured Products</h2>
        <div className="flex gap-1 bg-gray-100 rounded p-0.5">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${
                tab === t ? 'bg-white shadow text-[#00a651]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {allProducts[tab].map(p => (
          <Card key={p.id} p={p} onAdd={id => setAdded(a => [...a, id])} />
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="border-2 border-[#00a651] text-[#00a651] px-8 py-2.5 rounded font-bold text-sm hover:bg-green-50 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  )
}

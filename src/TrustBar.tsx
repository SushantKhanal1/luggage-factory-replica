const items = [
  { icon: '🚚', title: 'Free Shipping', sub: 'On LF Brand orders' },
  { icon: '🔒', title: 'Secure Checkout', sub: 'SSL encrypted payments' },
  { icon: '↩', title: 'Easy Returns', sub: '30-day return policy' },
  { icon: '🌍', title: '60+ Countries', sub: 'International shipping' },
  { icon: '🏆', title: 'Since 1908', sub: 'Trusted for over 100 years' },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 py-2.5 px-4 flex-shrink-0">
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="text-xs font-bold text-gray-800 whitespace-nowrap">{item.title}</div>
                <div className="text-[11px] text-gray-500 whitespace-nowrap">{item.sub}</div>
              </div>
              {i < items.length - 1 && <div className="hidden sm:block w-px h-7 bg-gray-200 ml-3" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

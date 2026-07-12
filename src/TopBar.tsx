export default function TopBar() {
  return (
    <div className="bg-[#00a651] text-white text-xs py-1.5">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>🚚 Free Shipping on LF Brand Orders — Use code <strong>LFNEW</strong></span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>Ships to 60+ Countries</span>
          <span className="opacity-50">|</span>
          <span>Founded 1908 · Ringoes, NJ</span>
          <span className="opacity-50">|</span>
          <a href="#" className="underline hover:no-underline">Track Order</a>
        </div>
      </div>
    </div>
  )
}

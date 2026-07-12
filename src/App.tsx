import TopBar from './components/TopBar'
import Header from './components/Header'
import NavBar from './components/NavBar'
import HeroBanner from './components/HeroBanner'
import TrustBar from './components/TrustBar'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanners from './components/PromoBanners'
import BrandsSection from './components/BrandsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      <TopBar />
      <Header />
      <NavBar />
      <main>
        <HeroBanner />
        <TrustBar />
        <Categories />
        <FeaturedProducts />
        <PromoBanners />
        <BrandsSection />
      </main>
      <Footer />
    </div>
  )
}

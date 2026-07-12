import TopBar from "./components/TopBar.tsx";
import Header from "./components/Header.tsx";
import TrustBar from "./components/TrustBar.tsx";
import HeroBanner from "./components/HeroBanner.tsx";
import PromoBanners from "./components/PromoBanners.tsx";
import Categories from "./components/Categories.tsx";
import FeaturedProducts from "./components/FeaturedProducts.tsx";
import BrandsSection from "./components/BrandsSection.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <TopBar />
      <Header />
      <TrustBar />
      <HeroBanner />
      <PromoBanners />
      <Categories />
      <FeaturedProducts />
      <BrandsSection />
      <Footer />
    </div>
  );
}

export default App;

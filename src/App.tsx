import TopBar from "./components/TopBar";
import Header from "./components/Header";
import TrustBar from "./components/TrustBar";
import HeroBanner from "./components/HeroBanner";
import PromoBanners from "./components/PromoBanners";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import BrandsSection from "./components/BrandsSection";
import Footer from "./components/Footer";

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

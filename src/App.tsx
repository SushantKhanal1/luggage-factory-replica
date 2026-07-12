import TopBar from "./TopBar";
import Header from "./Header";
import TrustBar from "./TrustBar";
import HeroBanner from "./HeroBanner";
import PromoBanners from "./PromoBanners";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import BrandsSection from "./BrandsSection";
import Footer from "./Footer";

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

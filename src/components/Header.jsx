import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-gradient-to-l from-blue-950 via-blue-600 to to-blue-200">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;

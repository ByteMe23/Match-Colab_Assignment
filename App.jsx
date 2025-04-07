import HeroCarousel from "./components/HeroCarousel";
import FeaturedProfiles from "./components/FeaturedProfiles";
import "flowbite";
import "flowbite-react";

function App() {
  return (
    <div className="font-sans">
      <HeroCarousel />
      <FeaturedProfiles />
    </div>
  );
}

export default App;
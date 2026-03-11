import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

interface HeroSectionProps {
  heroImages: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  categories: Array<{
    title: string;
    tagline: string;
    image: string;
    href: string;
  }>;
  domesticDestinations: Array<{
    name: string;
    image: string;
    price: string;
  }>;
  internationalDestinations: Array<{
    name: string;
    image: string;
    price: string;
  }>;
}

export function HeroSection({
  heroImages,
  currentImageIndex,
  setCurrentImageIndex,
}: HeroSectionProps) {
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Images with Carousel */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
            scale: index === currentImageIndex ? 1 : 1.1,
          }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1.5 w-32 bg-gradient-to-r from-orange to-yellow-400 rounded-full mb-6"></div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Explore the World
              <br />
              <span className="text-orange">with Samanz Holidays</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Domestic & International Tours | Educational Trips | Corporate Travel
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/custom-trip">
                <button className="bg-gradient-to-r from-[#F15A29] to-[#ff7849] hover:from-[#ff7849] hover:to-[#F15A29] text-white px-8 py-4 text-lg font-bold shadow-xl rounded-xl hover:shadow-2xl transition-all">
                  Plan Your Trip
                </button>
              </Link>
              <Link to="/packages">
                <button className="px-8 py-4 text-lg font-bold border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all rounded-xl shadow-lg">
                  View Packages
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
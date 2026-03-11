import { motion } from 'motion/react';
import { Calendar, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router';

interface PackageCardProps {
  id: string | number;
  title: string;
  location: string;
  duration: string;
  price: number | string;
  originalPrice?: number | string;
  image: string;
  highlights?: string[];
  rating?: number;
  reviews?: number;
}

export function PackageCard({ 
  id, 
  title, 
  location, 
  duration, 
  price, 
  originalPrice,
  image, 
  highlights,
  rating = 4.5,
  reviews = 0
}: PackageCardProps) {
  // Helper function to format price
  const formatPrice = (p: number | string) => {
    if (typeof p === 'string') return p;
    return `₹${p.toLocaleString()}`;
  };

  // Helper to extract numeric value for discount calculation
  const getNumericPrice = (p: number | string): number => {
    if (typeof p === 'number') return p;
    return parseFloat(p.replace(/[^\d]/g, ''));
  };

  const calculateDiscount = () => {
    if (!originalPrice) return null;
    const numPrice = getNumericPrice(price);
    const numOriginal = getNumericPrice(originalPrice);
    return Math.round(((numOriginal - numPrice) / numOriginal) * 100);
  };

  return (
    <motion.div
      className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group h-full flex flex-col border border-gray-100"
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {originalPrice && (
          <div className="absolute top-5 right-5 bg-gradient-to-br from-[#F15A29] via-[#ff6b3d] to-[#ff8559] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-2xl animate-pulse">
            <span className="drop-shadow-lg">{calculateDiscount()}% OFF</span>
          </div>
        )}
        {reviews > 0 && (
          <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-1 border border-white/50">
            <Star size={16} className="text-yellow-500 fill-yellow-500 drop-shadow" />
            <span>{rating}</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/50">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#1E88E5] transition-colors duration-300 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-2 mb-4 text-base text-gray-600">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
            <MapPin size={18} className="text-[#1E88E5]" />
          </div>
          <span className="font-medium">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-5 text-sm">
          <div className="flex items-center gap-2 text-gray-600 bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-2 rounded-full shadow-sm">
            <Calendar size={18} className="text-[#F15A29]" />
            <span className="font-semibold">{duration}</span>
          </div>
          {reviews > 0 && (
            <div className="flex items-center gap-1 text-gray-600">
              <span className="text-sm">({reviews} reviews)</span>
            </div>
          )}
        </div>

        {highlights && highlights.length > 0 && (
          <div className="mb-5 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-2xl p-4 flex-grow shadow-inner border border-white/80">
            <p className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-[#1E88E5] to-[#F15A29] rounded-full animate-pulse shadow-lg"></span>
              Highlights
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              {highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 group/item">
                  <span className="text-[#1E88E5] mt-0.5 font-bold group-hover/item:scale-125 transition-transform">✓</span>
                  <span className="flex-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="border-t border-gray-200 pt-5 mt-auto">
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-3xl font-bold bg-gradient-to-r from-[#1E88E5] via-blue-600 to-[#F15A29] bg-clip-text text-transparent drop-shadow-sm">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="text-base line-through text-gray-400">{formatPrice(originalPrice)}</span>
            )}
            <span className="text-xs text-gray-500 ml-auto">per person</span>
          </div>

          <div className="flex gap-3">
            <Link
              to={`/package/${id}`}
              className="flex-1 bg-gradient-to-r from-[#1E88E5] via-blue-600 to-blue-700 text-white py-3.5 px-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center font-bold relative overflow-hidden group/btn"
            >
              <span className="relative z-10">View Details</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#1E88E5] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <a
              href={`https://wa.me/919226339969?text=Inquiry for ${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#25D366] via-[#1ea952] to-[#128C7E] text-white py-3.5 px-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center font-bold flex items-center justify-center gap-2 relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center gap-2">💬 Inquire</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#128C7E] to-[#25D366] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
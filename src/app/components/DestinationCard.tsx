import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

interface DestinationCardProps {
  name: string;
  image: string;
  price?: string;
  packageId?: string;
  onClick?: () => void;
}

export function DestinationCard({ name, image, price, packageId, onClick }: DestinationCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (packageId) {
      // Navigate to specific package detail page
      navigate(`/package/${packageId}`);
    } else {
      // Navigate to packages filtered by destination
      navigate(`/packages?destination=${name.toLowerCase()}`);
    }
  };
  
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl h-72 cursor-pointer group shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-white/30"
      whileHover={{ scale: 1.08, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={handleClick}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:from-black/85 transition-all duration-500"></div>
      
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-500"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <motion.div 
          className="w-16 h-1.5 bg-gradient-to-r from-[#F15A29] via-orange-400 to-yellow-400 rounded-full mb-4 shadow-lg"
          initial={{ width: "4rem" }}
          whileHover={{ width: "6rem" }}
          transition={{ duration: 0.3 }}
        />
        
        <h3 className="text-2xl font-bold mb-2 drop-shadow-2xl">{name}</h3>
        {price && (
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-sm text-gray-200 drop-shadow">Starting from</span>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#F15A29] to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">{price}</p>
          </div>
        )}
        <motion.div 
          className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl w-fit group-hover:from-[#1E88E5] group-hover:to-blue-600 transition-all duration-300 shadow-xl border border-white/30"
          whileHover={{ gap: "0.75rem" }}
          transition={{ duration: 0.3 }}
        >
          <span className="drop-shadow">Explore Now</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300 drop-shadow" strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.div>
  );
}
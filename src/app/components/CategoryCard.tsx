import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface CategoryCardProps {
  title: string;
  tagline: string;
  image: string;
  href: string;
}

export function CategoryCard({ title, tagline, image, href }: CategoryCardProps) {
  return (
    <Link to={href}>
      <motion.div
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl h-80 group cursor-pointer shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-white/50"
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/80 transition-all duration-500" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5]/20 to-[#F15A29]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-[#F15A29] via-orange-400 to-yellow-400 rounded-full mb-5 shadow-lg"
            initial={{ width: "5rem" }}
            whileHover={{ width: "10rem" }}
            transition={{ duration: 0.3 }}
          />
          
          <h3 className="text-3xl font-bold mb-3 drop-shadow-2xl group-hover:text-shadow-lg">{title}</h3>
          <p className="text-base text-gray-100 mb-6 drop-shadow-lg">{tagline}</p>
          
          <motion.div 
            className="flex items-center gap-2 text-base font-bold text-white bg-gradient-to-r from-[#F15A29] via-[#ff6b3d] to-[#ff8559] px-6 py-3.5 rounded-2xl w-fit shadow-2xl border-2 border-white/30"
            whileHover={{ gap: "1rem", scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="drop-shadow">Explore Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 drop-shadow" strokeWidth={2.5} />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            boxShadow: [
              "0 10px 30px rgba(30, 136, 229, 0.4)",
              "0 15px 40px rgba(30, 136, 229, 0.6)",
              "0 10px 30px rgba(30, 136, 229, 0.4)"
            ]
          }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-br from-[#1E88E5] via-blue-600 to-[#1E88E5] text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all border-2 border-white/30"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 drop-shadow-lg" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
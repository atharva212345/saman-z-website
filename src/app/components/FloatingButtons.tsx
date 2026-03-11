import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <div className="relative">
        <motion.a
          href="https://wa.me/919226339969"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#25D366] via-[#1ea952] to-[#128C7E] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all relative border-2 border-white/50"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          animate={{ 
            boxShadow: [
              '0 15px 40px rgba(37, 211, 102, 0.5)',
              '0 20px 50px rgba(37, 211, 102, 0.7)',
              '0 15px 40px rgba(37, 211, 102, 0.5)'
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.6, 0, 0.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
          
          {/* Second ripple */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.5
            }}
          />
          
          <MessageCircle className="w-8 h-8 relative z-10 drop-shadow-lg" strokeWidth={2.5} />
          
          {/* Notification badge */}
          <motion.div
            className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            1
          </motion.div>
        </motion.a>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-5 py-3 rounded-xl whitespace-nowrap text-sm font-bold shadow-2xl border border-white/20"
            >
              💬 Chat with us!
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
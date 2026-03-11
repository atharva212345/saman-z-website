import { motion } from 'motion/react';
import { Home, Search, Compass, Phone } from 'lucide-react';
import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* 404 Illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="text-[150px] md:text-[200px] font-bold text-[#1E88E5]/20 leading-none">
                404
              </div>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Compass className="w-24 h-24 md:w-32 md:h-32 text-[#F15A29]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Lost Your Way?
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Looks like you've wandered off the beaten path!
            </p>
            <p className="text-lg text-gray-500">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8"
          >
            <Link
              to="/"
              className="flex items-center justify-center gap-3 bg-[#1E88E5] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all hover:shadow-lg group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/packages"
              className="flex items-center justify-center gap-3 bg-[#F15A29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-xl font-medium transition-all hover:shadow-lg group"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Browse Packages</span>
            </Link>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Looking for something specific?</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              <Link 
                to="/domestic-tours"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                Domestic Tours
              </Link>
              <Link 
                to="/international-tours"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                International Tours
              </Link>
              <Link 
                to="/educational-tours"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                Educational Tours
              </Link>
              <Link 
                to="/honeymoon-tours"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                Honeymoon Packages
              </Link>
              <Link 
                to="/religious-tours"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                Religious Tours
              </Link>
              <Link 
                to="/corporate"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                Corporate Tours
              </Link>
              <Link 
                to="/customize"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                Customize Trip
              </Link>
              <Link 
                to="/about"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                className="text-[#1E88E5] hover:text-blue-700 hover:underline transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <p className="text-gray-600 mb-4">Still can't find what you're looking for?</p>
            <a 
              href="https://wa.me/919226339969" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>💬 Chat with us on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
import { Mail, MapPin, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { toast } from 'sonner';
import logo from '../../assets/973fc53fabb83da2c82d2383fd5f06ffce6ab62f.png';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing! You\'ll receive travel updates soon.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1E88E5] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F15A29] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-[#F15A29] via-orange-600 to-[#ff8559] relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E88E5] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Newsletter Text */}
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">Subscribe to Our Newsletter</h3>
              <p className="text-gray-100 text-lg drop-shadow">Get exclusive travel deals, destination guides, and special offers delivered to your inbox!</p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto lg:flex-1 max-w-xl">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 focus:scale-105 text-base font-medium shadow-2xl transition-all border-2 border-white/50"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-br from-[#F15A29] via-[#ff6b3d] to-[#ff8559] hover:from-[#d94d1f] hover:to-[#F15A29] text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-2xl hover:scale-110 flex items-center gap-2 whitespace-nowrap border-2 border-white/30"
                >
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="mb-8">
              <img 
                src={logo} 
                alt="Samanz Holidays" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-base">
              Creating memorable travel experiences since 2021. Your trusted partner for domestic and international tours.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/holidaysamanz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-orange rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[#1E88E5] transition-all inline-block hover:translate-x-2 duration-300 text-base">→ About Us</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-[#1E88E5] transition-all inline-block hover:translate-x-2 duration-300 text-base">→ Tour Packages</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-[#1E88E5] transition-all inline-block hover:translate-x-2 duration-300 text-base">→ Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-[#1E88E5] transition-all inline-block hover:translate-x-2 duration-300 text-base">→ Testimonials</Link></li>
              <li><Link to="/educational-tours" className="text-gray-400 hover:text-[#1E88E5] transition-all inline-block hover:translate-x-2 duration-300 text-base">→ Educational Tours</Link></li>
              <li><Link to="/corporate" className="text-gray-400 hover:text-[#1E88E5] transition-all inline-block hover:translate-x-2 duration-300 text-base">→ Corporate Tours</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#1E88E5] transition-all inline-block hover:translate-x-2 duration-300 text-base">→ Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/domestic-tours" className="text-gray-400 hover:text-[#1E88E5] transition-colors inline-block">Domestic Tours</Link></li>
              <li><Link to="/international-tours" className="text-gray-400 hover:text-[#1E88E5] transition-colors inline-block">International Tours</Link></li>
              <li><Link to="/honeymoon-tours" className="text-gray-400 hover:text-[#1E88E5] transition-colors inline-block">Honeymoon Packages</Link></li>
              <li><Link to="/religious-tours" className="text-gray-400 hover:text-[#1E88E5] transition-colors inline-block">Religious Tours</Link></li>
              <li><Link to="/customize" className="text-gray-400 hover:text-[#1E88E5] transition-colors inline-block">Customize Your Trip</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <a href="tel:+919226339969" className="flex items-start gap-3 text-gray-400 hover:text-[#1E88E5] transition-colors group">
                  <span className="text-lg">📞</span>
                  <span>+91-9226339969</span>
                </a>
                <a href="tel:+918308185186" className="flex items-start gap-3 text-gray-400 hover:text-[#1E88E5] transition-colors group">
                  <span className="text-lg">📞</span>
                  <span>+91-8308185186</span>
                </a>
                <a href="tel:+919970316066" className="flex items-start gap-3 text-gray-400 hover:text-[#1E88E5] transition-colors group">
                  <span className="text-lg">📞</span>
                  <span>+91-9970316066</span>
                </a>
              </div>
              <a href="mailto:booking@samanzholidays.com" className="flex items-start gap-3 text-gray-400 hover:text-[#1E88E5] transition-colors group">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span className="break-all">booking@samanzholidays.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <div>
                  85 Joshi Wada, Ganjave Chowk,<br />
                  Shastri Road, Sadashiv Peth (Navi Peth),<br />
                  Pune-30, Maharashtra, India
                </div>
              </div>
              <a 
                href="https://wa.me/919226339969" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#F15A29] hover:bg-[#d94d1f] text-white px-6 py-2.5 rounded-full transition-all mt-4"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#1E88E5] transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-[#1E88E5] transition-colors">Terms & Conditions</Link>
            <Link to="/cancellation-policy" className="text-gray-400 hover:text-[#1E88E5] transition-colors">Cancellation Policy</Link>
          </div>
          <p className="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} Samanz Holidays. All rights reserved. | Established 2021</p>
        </div>
      </div>
    </footer>
  );
}
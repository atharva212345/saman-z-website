import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import logo from '../../assets/973fc53fabb83da2c82d2383fd5f06ffce6ab62f.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [mobileExperiencesOpen, setMobileExperiencesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const showBackButton = location.pathname !== '/';

  return (
    <>
      {/* Main header */}
      <header className={`bg-gradient-to-r from-white via-blue-50/30 to-orange-50/30 sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-2xl backdrop-blur-md bg-gradient-to-r from-white/95 via-blue-50/40 to-orange-50/40 border-b-2 border-gradient-to-r from-[#1E88E5]/20 to-[#F15A29]/20' : 'shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left Section: Back Button + Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {showBackButton && (
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#1E88E5] transition-all duration-300 font-medium group"
                  aria-label="Go back"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-[#1E88E5] group-hover:to-[#F15A29] transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                    <ArrowLeft className="w-4 h-4 group-hover:text-white transition-colors" />
                  </div>
                </button>
              )}
              
              {/* Logo */}
              <Link to="/" className="flex items-center transition-all hover:scale-105 duration-300 drop-shadow-md hover:drop-shadow-xl">
                <img 
                  src={logo} 
                  alt="Samanz Holidays" 
                  className="h-14 md:h-16 lg:h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Center Section: Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-1">
              <Link 
                to="/about" 
                className={`relative hover:text-[#1E88E5] transition-all duration-300 font-semibold text-[13px] xl:text-[14px] whitespace-nowrap group px-3 py-2 ${isActive('/about') ? 'text-[#1E88E5]' : 'text-gray-700'}`}
              >
                About Us
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E88E5] to-[#F15A29] transition-all duration-300 group-hover:w-full ${isActive('/about') ? 'w-full' : ''}`}></span>
              </Link>

              {/* Domestic Tours - Direct Link */}
              <Link 
                to="/domestic-tours" 
                className={`relative hover:text-[#1E88E5] transition-all duration-300 font-semibold text-[13px] xl:text-[14px] whitespace-nowrap group px-3 py-2 ${isActive('/domestic-tours') ? 'text-[#1E88E5]' : 'text-gray-700'}`}
              >
                Domestic Tours
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E88E5] to-[#F15A29] transition-all duration-300 group-hover:w-full ${isActive('/domestic-tours') ? 'w-full' : ''}`}></span>
              </Link>

              {/* International Tours - Direct Link */}
              <Link 
                to="/international-tours" 
                className={`relative hover:text-[#1E88E5] transition-all duration-300 font-semibold text-[13px] xl:text-[14px] whitespace-nowrap group px-3 py-2 ${isActive('/international-tours') ? 'text-[#1E88E5]' : 'text-gray-700'}`}
              >
                International Tours
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E88E5] to-[#F15A29] transition-all duration-300 group-hover:w-full ${isActive('/international-tours') ? 'w-full' : ''}`}></span>
              </Link>

              {/* Experiences Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setExperiencesOpen(true)}
                onMouseLeave={() => setExperiencesOpen(false)}
              >
                <button className="relative flex items-center gap-1 text-gray-700 hover:text-[#1E88E5] transition-all duration-300 font-semibold text-[13px] xl:text-[14px] whitespace-nowrap group px-3 py-2">
                  Experiences
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${experiencesOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E88E5] to-[#F15A29] transition-all duration-300 group-hover:w-full`}></span>
                </button>
                
                {experiencesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-72 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      to="/educational-tours"
                      className="flex items-center gap-3 px-5 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300 text-gray-700 hover:text-[#1E88E5] font-medium text-[15px] group"
                    >
                      <span className="text-2xl">🎓</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Educational Tours</span>
                    </Link>
                    <Link
                      to="/honeymoon-tours"
                      className="flex items-center gap-3 px-5 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300 text-gray-700 hover:text-[#1E88E5] font-medium text-[15px] group"
                    >
                      <span className="text-2xl">💑</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Honeymoon Packages</span>
                    </Link>
                    <Link
                      to="/religious-tours"
                      className="flex items-center gap-3 px-5 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300 text-gray-700 hover:text-[#1E88E5] font-medium text-[15px] group"
                    >
                      <span className="text-2xl">🕉️</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Pilgrimage Tours</span>
                    </Link>
                    <Link
                      to="/corporate"
                      className="flex items-center gap-3 px-5 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300 text-gray-700 hover:text-[#1E88E5] font-medium text-[15px] group"
                    >
                      <span className="text-2xl">💼</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Corporate Tours</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Customize Trip */}
              <Link 
                to="/customize" 
                className={`relative hover:text-[#1E88E5] transition-all duration-300 font-semibold text-[13px] xl:text-[14px] whitespace-nowrap group px-3 py-2 ${isActive('/customize') ? 'text-[#1E88E5]' : 'text-gray-700'}`}
              >
                Customize Trip
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E88E5] to-[#F15A29] transition-all duration-300 group-hover:w-full ${isActive('/customize') ? 'w-full' : ''}`}></span>
              </Link>

              {/* Contact */}
              <Link 
                to="/contact" 
                className={`relative hover:text-[#1E88E5] transition-all duration-300 font-semibold text-[13px] xl:text-[14px] whitespace-nowrap group px-3 py-2 ${isActive('/contact') ? 'text-[#1E88E5]' : 'text-gray-700'}`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E88E5] to-[#F15A29] transition-all duration-300 group-hover:w-full ${isActive('/contact') ? 'w-full' : ''}`}></span>
              </Link>
            </nav>

            {/* Right Section: CTA Button + Mobile Menu */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a 
                href="https://wa.me/919226339969" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex bg-gradient-to-r from-[#F15A29] to-[#ff6b3d] text-white px-5 py-2.5 rounded-full hover:from-[#d94d1f] hover:to-[#F15A29] transition-all hover:shadow-lg hover:scale-105 font-semibold text-[13px] xl:text-[14px] whitespace-nowrap items-center gap-2 border border-white/20"
              >
                💬 Plan on WhatsApp
              </a>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 border-t pt-4">
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-[#1E88E5] py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Domestic Tours - Direct Link */}
              <Link 
                to="/domestic-tours" 
                className="text-gray-700 hover:text-[#1E88E5] py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Domestic Tours
              </Link>

              {/* Mobile International Tours - Direct Link */}
              <Link 
                to="/international-tours" 
                className="text-gray-700 hover:text-[#1E88E5] py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                International Tours
              </Link>

              {/* Mobile Experiences */}
              <div>
                <button
                  onClick={() => setMobileExperiencesOpen(!mobileExperiencesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#1E88E5] py-2"
                >
                  <span>Experiences</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExperiencesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileExperiencesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/educational-tours"
                      className="block text-sm text-gray-600 hover:text-[#1E88E5] py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      🎓 Educational Tours
                    </Link>
                    <Link
                      to="/honeymoon-tours"
                      className="block text-sm text-gray-600 hover:text-[#1E88E5] py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      💑 Honeymoon Packages
                    </Link>
                    <Link
                      to="/religious-tours"
                      className="block text-sm text-gray-600 hover:text-[#1E88E5] py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      🕉️ Pilgrimage Tours
                    </Link>
                    <Link
                      to="/corporate"
                      className="block text-sm text-gray-600 hover:text-[#1E88E5] py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      💼 Corporate Tours
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Customize Trip */}
              <Link 
                to="/customize" 
                className="text-gray-700 hover:text-[#1E88E5] py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Customize Trip
              </Link>

              {/* Mobile Contact */}
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-[#1E88E5] py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <a 
                href="https://wa.me/919226339969" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F15A29] text-white px-6 py-2.5 rounded-full hover:bg-[#d94d1f] text-center font-medium mt-2"
              >
                💬 Plan on WhatsApp
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
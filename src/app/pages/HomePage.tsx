import { HeroSection } from "../components/HeroSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { FAQSection } from "../components/FAQSection";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { CategoryCard } from "../components/CategoryCard";
import { PackageCard } from "../components/PackageCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { DestinationCard } from "../components/DestinationCard";
import { TrustBadge } from "../components/TrustBadge";
import { SeasonalDealsSection } from "../components/SeasonalDealsSection";
import { Lightbox } from "../components/Lightbox";
import { PaymentOptions } from "../components/PaymentOptions";
import { useState, useEffect } from "react";
import { ChevronRight, Shield, Award, Users, HeadphonesIcon, Sparkles, Heart, GraduationCap, Briefcase, Globe } from "lucide-react";
import educationalToursImage from "../../assets/26a4d018a6543c1c8683d441241dcac86d82fc31.png";

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&h=600&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      title: "Domestic Tours",
      tagline: "Explore the beauty of India",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
      href: "/domestic-tours"
    },
    {
      title: "International Tours",
      tagline: "Discover the world with us",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      href: "/international-tours"
    },
    {
      title: "Honeymoon Specials",
      tagline: "Romantic getaways for couples",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
      href: "/honeymoon-tours"
    },
    {
      title: "LTC Tours",
      tagline: "Leave Travel Concession packages for government employees",
      image: "https://images.unsplash.com/photo-1532968682779-218bea4f06c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRyYXZlbCUyMGFpcnBvcnR8ZW58MXx8fHwxNzcxOTMyMTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      href: "/ltc-tours"
    },
    {
      title: "Religious Tours",
      tagline: "Sacred journeys of faith",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
      href: "/religious-tours"
    },
    {
      title: "Educational Tours",
      tagline: "Learning beyond classrooms",
      image: educationalToursImage,
      href: "/educational-tours"
    },
    {
      title: "Corporate & MICE",
      tagline: "Professional business travel",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      href: "/corporate"
    }
  ];

  const domesticDestinations = [
    { name: "Kashmir", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwRGFsJTIwTGFrZXxlbnwxfHx8fDE3NzE5MzQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹14,000", packageId: "dom-3" },
    { name: "Rajasthan", image: "https://images.unsplash.com/photo-1673807095855-7c6e499c2cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBwYWxhY2UlMjBKYWlwdXJ8ZW58MXx8fHwxNzcxOTM0MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹28,500", packageId: "dom-2" },
    { name: "Himachal", image: "https://images.unsplash.com/photo-1608723483857-a294e86241af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGltbGElMjBIaW1hY2hhbCUyMFByYWRlc2glMjBtb3VudGFpbnMlMjBzbm93fGVufDF8fHx8MTc3MjQyNjg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹14,999", packageId: "dom-6" },
    { name: "Andaman", image: "https://images.unsplash.com/photo-1745897472649-268b84cd0c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmRhbWFuJTIwTmljb2JhciUyMGJlYWNoJTIwY29yYWwlMjBibHVlJTIwd2F0ZXJ8ZW58MXx8fHwxNzcyNDI2ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹14,350", packageId: "dom-5" },
    { name: "Kerala", image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwaG91c2Vib2F0fGVufDF8fHx8MTc3MTgzMjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹21,800", packageId: "dom-1" },
    { name: "Goa", image: "https://images.unsplash.com/photo-1667111838729-1a25f468856b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMEluZGlhJTIwc3Vuc2V0fGVufDF8fHx8MTc3MjYzMjc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹12,500", packageId: "dom-4" }
  ];

  const internationalDestinations = [
    { name: "Vietnam", image: "https://images.unsplash.com/photo-1593781624090-dde8edc3c356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGElMjBMb25nJTIwQmF5JTIwY3J1aXNlfGVufDF8fHx8MTc3MjQyNjg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹43,500", packageId: "intl-1" },
    { name: "Singapore", image: "https://images.unsplash.com/photo-1652843134988-6fafc5121ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBNYXJpbmElMjBCYXklMjBTYW5kcyUyMHNreWxpbmV8ZW58MXx8fHwxNzcyMzgyNjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹63,500", packageId: "intl-2" },
    { name: "Bali", image: "https://images.unsplash.com/photo-1720728659932-0233fb9b6616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwVWx1d2F0dSUyMHRlbXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NzI0MjY4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹35,500", packageId: "intl-3" },
    { name: "Nepal", image: "https://images.unsplash.com/photo-1607066511406-a4b389dc138e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMEthdGhtYW5kdSUyMHRlbXBsZSUyMEhpbWFsYXlhc3xlbnwxfHx8fDE3NzI0Mjc0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹30,400", packageId: "intl-5" },
    { name: "Malaysia", image: "https://images.unsplash.com/photo-1592446559204-70a0362cf451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYSUyMEt1YWxhJTIwTHVtcHVyJTIwUGV0cm9uYXMlMjBUb3dlcnN8ZW58MXx8fHwxNzcyNDI2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹23,500", packageId: "intl-4" },
    { name: "Maldives", image: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc3MTg0Njk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", price: "₹55,000", packageId: "intl-4" }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul Sharma",
      location: "Pune",
      rating: 5,
      text: "Our Maldives honeymoon was absolutely magical! Samaz Holidays took care of every detail. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1767333586238-5fe2e8e62b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb3VwbGUlMjB3ZWRkaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTk2MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Mrs. Anjali Deshmukh",
      location: "Mumbai",
      rating: 5,
      text: "Educational tour for my daughter's school was perfectly organized. Safety was their top priority!",
      avatar: "https://images.unsplash.com/photo-1659355894748-0b7b60de60b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHRlYWNoZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxOTk2MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Amit Patel",
      location: "Pune",
      rating: 5,
      text: "Kashmir trip was budget-friendly and well-planned. The team was very responsive on WhatsApp!",
      avatar: "https://images.unsplash.com/photo-1671450960874-0903baf942c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTk5NjIzNnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const whyChooseUs = [
    { icon: Heart, title: "Personalized Itineraries", description: "Tailored to your preferences" },
    { icon: Award, title: "Budget Travel Specialists", description: "Best value for money" },
    { icon: GraduationCap, title: "Educational Trip Expertise", description: "Safe & knowledge-focused" },
    { icon: Briefcase, title: "Corporate Travel Support", description: "Professional MICE solutions" },
    { icon: Globe, title: "Visa & Passport Assistance", description: "Complete documentation help" },
    { icon: HeadphonesIcon, title: "24x7 Travel Support", description: "Always there for you" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        heroImages={heroImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        categories={categories}
        domesticDestinations={domesticDestinations}
        internationalDestinations={internationalDestinations}
      />

      {/* Quick Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#1E88E5] via-blue-600 to-[#1E88E5] text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F15A29] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent">5000+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Happy Travelers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent">150+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Destinations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent">3+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm md:text-base font-medium opacity-90">Customer Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tour Categories Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-orange-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary to-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                EXPLORE WITH US
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              Explore Our Tour Categories
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              From domestic wonders to international adventures, we offer specialized tours for every traveler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Domestic Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Popular Domestic Destinations</h2>
              <p className="text-gray-600 text-lg">Discover the incredible diversity of India</p>
            </div>
            <Link to="/domestic-tours">
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                View All <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domesticDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard {...destination} />
              </motion.div>
            ))}
          </div>

          <Link to="/domestic-tours" className="md:hidden">
            <Button variant="outline" className="w-full mt-6 flex items-center justify-center gap-2">
              View All Domestic Tours <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured International Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">International Dream Destinations</h2>
              <p className="text-gray-600 text-lg">Explore the world's most beautiful places</p>
            </div>
            <Link to="/international-tours">
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                View All <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard {...destination} />
              </motion.div>
            ))}
          </div>

          <Link to="/international-tours" className="md:hidden">
            <Button variant="outline" className="w-full mt-6 flex items-center justify-center gap-2">
              View All International Tours <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        whyChooseUs={whyChooseUs}
      />

      {/* Seasonal Deals - Tabbed Section */}
      <SeasonalDealsSection />

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Your Trust, Our Priority</h2>
            <p className="text-gray-600 text-lg">We ensure safe, secure, and memorable travel experiences</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TrustBadge
              icon={Shield}
              title="100% Safe Travel"
              description="Safety-first approach for all tours"
            />
            <TrustBadge
              icon={Award}
              title="Certified & Verified"
              description="Registered travel company"
            />
            <TrustBadge
              icon={Users}
              title="Expert Guidance"
              description="Experienced travel consultants"
            />
            <TrustBadge
              icon={HeadphonesIcon}
              title="24/7 Support"
              description="Always available to assist"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={testimonials}
      />

      {/* Payment Options */}
      <PaymentOptions />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us create a personalized travel experience just for you. Get in touch today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/custom-trip">
                <Button size="lg" className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg">
                  Plan Custom Trip
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-white text-primary hover:bg-transparent hover:text-white px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        index={lightboxIndex}
        images={[
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=400&fit=crop",
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=400&fit=crop",
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=400&fit=crop",
          "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=400&fit=crop",
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=400&fit=crop"
        ]}
      />
    </div>
  );
}
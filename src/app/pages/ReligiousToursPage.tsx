import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { PackageCard } from "../components/PackageCard";
import { Heart, Users, Shield, Utensils, Check } from "lucide-react";

export function ReligiousToursPage() {
  const religiousPackages = [
    {
      id: "rel-1",
      title: "Temple Tour",
      location: "Varanasi",
      duration: "Jan 2026",
      price: "48 travelers",
      image: "https://images.unsplash.com/photo-1712761491919-80b46608dc8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGdoYXRzJTIwdGVtcGxlcyUyMEluZGlhfGVufDF8fHx8MTc3MTkxNjQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Kashi Vishwanath Temple", "Ganga Aarti", "Sarnath", "Boat Ride"],
      rating: 4.9,
      reviews: 234,
    },
    {
      id: "rel-2",
      title: "Golden Temple",
      location: "Amritsar",
      duration: "Dec 2025",
      price: "55 travelers",
      image: "https://images.unsplash.com/photo-1689141082367-df7bd06c4eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2xkZW4lMjBUZW1wbGUlMjBBbXJpdHNhciUyMFB1bmphYnxlbnwxfHx8fDE3NzE5MTY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Golden Temple Darshan", "Wagah Border", "Jallianwala Bagh", "Langar Service"],
      rating: 4.9,
      reviews: 312,
    },
    {
      id: "rel-3",
      title: "Chardham Yatra",
      location: "Uttarakhand",
      duration: "Nov 2025",
      price: "72 travelers",
      image: "https://images.unsplash.com/photo-1671881411337-d83d18382b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZWRhcm5hdGglMjBCYWRyaW5hdGglMjB0ZW1wbGUlMjBVdHRhcmFraGFuZHxlbnwxfHx8fDE3NzE5MTY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
      rating: 4.9,
      reviews: 289,
    },
    {
      id: "rel-4",
      title: "Pilgrimage Journey",
      location: "Shirdi",
      duration: "Oct 2025",
      price: "60 travelers",
      image: "https://images.unsplash.com/photo-1633617127680-18229ebb1b94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGlyZGklMjBTYWklMjBCYWJhJTIwdGVtcGxlJTIwTWFoYXJhc2h0cmF8ZW58MXx8fHwxNzcxOTE2NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Sai Baba Temple", "Dwarkamai", "Chavadi", "Shani Shingnapur"],
      rating: 4.8,
      reviews: 267,
    },
    {
      id: "rel-5",
      title: "Sacred Sites",
      location: "Rishikesh",
      duration: "Sep 2025",
      price: "38 travelers",
      image: "https://images.unsplash.com/photo-1731597076108-f3bbe268162f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXNoaWtlc2glMjBJbmRpYSUyMHlvZ2ElMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzcxOTE2NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Ram Jhula", "Lakshman Jhula", "Ganga Aarti", "Yoga Ashrams"],
      rating: 4.7,
      reviews: 198,
    },
    {
      id: "rel-6",
      title: "Spiritual Tour",
      location: "Tirupati",
      duration: "Aug 2025",
      price: "85 travelers",
      image: "https://images.unsplash.com/photo-1707833685224-9fcce62dcd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaXJ1cGF0aSUyMEJhbGFqaSUyMHRlbXBsZSUyMEFuZGhyYSUyMFByYWRlc2h8ZW58MXx8fHwxNzcxOTE2NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Tirupati Balaji Temple", "VIP Darshan", "Tirumala Hills", "Prasadam"],
      rating: 4.9,
      reviews: 412,
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Spiritual Experience",
      description: "Carefully planned itineraries respecting religious sentiments"
    },
    {
      icon: Users,
      title: "Senior-Friendly",
      description: "Special care for elderly travelers with comfortable arrangements"
    },
    {
      icon: Shield,
      title: "Safety & Comfort",
      description: "Priority on safety with experienced guides and drivers"
    },
    {
      icon: Utensils,
      title: "Vegetarian Meals",
      description: "Pure vegetarian sattvic food throughout the journey"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop"
          alt="Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Religious & Pilgrimage Tours</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              Sacred journeys with devotion, comfort, and safety. Experience divine blessings with our expertly curated pilgrimage tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919226339969" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 px-8 py-6 text-lg w-full sm:w-auto shadow-xl">
                  Plan Your Pilgrimage
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-orange-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us for Pilgrimage</h2>
            <p className="text-gray-600 text-lg md:text-xl">Devotion meets comfort and safety</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Pilgrimage Packages</h2>
            <p className="text-gray-600 text-lg md:text-xl">Choose your spiritual journey</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {religiousPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Care */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Care for Senior Travelers</h2>
              <div className="space-y-4">
                {[
                  "Wheelchair assistance at temples and airports",
                  "Comfortable AC transport with extra legroom",
                  "Hotels with elevator access and ground floor rooms",
                  "Medical kit and first aid trained staff",
                  "Flexible itinerary based on group's comfort",
                  "Regular health check-ups during journey",
                  "Easy vegetarian meals at regular intervals"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=600&h=400&fit=crop"
              alt="Senior travelers"
              className="rounded-2xl shadow-lg w-full h-auto order-first md:order-last"
            />
          </div>
        </div>
      </section>

      {/* Group Booking CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Group Pilgrimage Bookings</h2>
            <p className="text-base md:text-lg mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Special group discounts available. Perfect for community groups, temples, and family pilgrimages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919226339969" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg w-full">
                  Get Group Quote
                </Button>
              </a>
              <a href="tel:+919226339969" className="w-full sm:w-auto">
                <Button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg w-full transition-all">
                  Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
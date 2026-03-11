import { motion } from "motion/react";
import { PackageCard } from "../components/PackageCard";
import { Button } from "../components/ui/button";
import { InquiryForm } from "../components/InquiryForm";
import { Heart, Camera, Palmtree, Sparkles, Check } from "lucide-react";

export function HoneymoonToursPage() {
  const honeymoonPackages = [
    {
      id: "honey-1",
      title: "Maldives Romance - Luxury Overwater Villa",
      location: "Maldives",
      duration: "5 Days / 4 Nights",
      price: 75000,
      originalPrice: 95000,
      image: "https://images.unsplash.com/photo-1706753459618-31e52d7ca22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG9jZWFuJTIwcmVzb3J0fGVufDF8fHx8MTc3MDg4MjA3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Private Pool Villa", "Candlelight Dinner", "Couple Spa", "Sunset Cruise"],
      rating: 5.0,
      reviews: 145
    },
    {
      id: "honey-2",
      title: "Kashmir Heaven - Romantic Shikaras",
      location: "Kashmir, India",
      duration: "6 Days / 5 Nights",
      price: 24500,
      originalPrice: 32000,
      image: "https://images.unsplash.com/photo-1606355792317-4dcadc93ed26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXNobWlyJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDg4MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Houseboat Stay", "Shikara Ride", "Snow Activities", "Mughal Gardens"],
      rating: 4.9,
      reviews: 234
    },
    {
      id: "honey-3",
      title: "Bali Bliss - Beach & Culture",
      location: "Bali, Indonesia",
      duration: "6 Days / 5 Nights",
      price: 45000,
      originalPrice: 58000,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      highlights: ["Beach Resort", "Couple's Massage", "Temple Tours", "Private Villa"],
      rating: 4.8,
      reviews: 187
    },
    {
      id: "honey-4",
      title: "Kerala Backwaters - Houseboat Romance",
      location: "Kerala, South India",
      duration: "5 Days / 4 Nights",
      price: 22500,
      originalPrice: 28000,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      highlights: ["Luxury Houseboat", "Ayurvedic Spa", "Beach Stay", "Backwater Cruise"],
      rating: 4.9,
      reviews: 198
    },
    {
      id: "honey-5",
      title: "Dubai Luxury Escape",
      location: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: 58000,
      originalPrice: 72000,
      image: "https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwODcxODg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["5-Star Resort", "Desert Safari", "Burj Khalifa", "Dhow Cruise"],
      rating: 4.7,
      reviews: 167
    },
    {
      id: "honey-6",
      title: "Thailand Paradise - Phuket & Krabi",
      location: "Thailand",
      duration: "7 Days / 6 Nights",
      price: 38500,
      originalPrice: 48000,
      image: "https://images.unsplash.com/photo-1639491146900-8c892c0f6875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzcwODkyNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Island Hopping", "Beach Villa", "Couple Spa", "Phi Phi Islands"],
      rating: 4.8,
      reviews: 209
    },
    {
      id: "honey-7",
      title: "Manali Mountain Romance",
      location: "Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      price: 18500,
      originalPrice: 24000,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      highlights: ["Mountain Resort", "Solang Valley", "Hot Springs", "Snow Activities"],
      rating: 4.7,
      reviews: 156
    },
    {
      id: "honey-8",
      title: "Udaipur Royal Romance",
      location: "Rajasthan, India",
      duration: "4 Days / 3 Nights",
      price: 19500,
      originalPrice: 25000,
      image: "https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NzA4MjM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Lake Palace Stay", "Boat Ride", "City Palace", "Rooftop Dinner"],
      rating: 4.9,
      reviews: 173
    }
  ];

  const specialInclusions = [
    {
      icon: Heart,
      title: "Romantic Setup",
      description: "Flower decoration, cake, and special room setup"
    },
    {
      icon: Camera,
      title: "Photo Session",
      description: "Complimentary couple photoshoot at scenic locations"
    },
    {
      icon: Palmtree,
      title: "Private Experiences",
      description: "Exclusive candlelight dinners and sunset views"
    },
    {
      icon: Sparkles,
      title: "Luxury Stays",
      description: "Handpicked romantic resorts and hotels"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-rose-600 min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1648538923547-074724ca7a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGhvbmV5bW9vbiUyMGNvdXBsZSUyMGJlYWNofGVufDF8fHx8MTc3MDg5MjQwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Honeymoon couple"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-12 h-12 fill-current" />
              <h1 className="text-5xl font-bold">Honeymoon Packages</h1>
            </div>
            <p className="text-xl mb-6 text-gray-100">
              Begin Your Forever with Romantic Getaways
            </p>
            <p className="text-lg mb-8">
              Curated honeymoon packages designed to create magical memories that last a lifetime. 
              Enjoy intimate experiences, luxury stays, and breathtaking destinations.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Plan My Honeymoon
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Honeymoon Inclusions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Makes It Special</h2>
            <p className="text-gray-600 text-lg">Exclusive honeymoon experiences included in every package</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialInclusions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honeymoon Packages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Romantic Destinations</h2>
            <p className="text-gray-600 text-lg">Handpicked honeymoon packages for newlyweds</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {honeymoonPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Honeymoon Packages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Samaz for Your Honeymoon</h2>
              <div className="space-y-4">
                {[
                  "Personalized itineraries tailored to your preferences",
                  "Romantic room decorations and special surprises",
                  "Privacy-focused accommodations and experiences",
                  "24/7 dedicated support throughout your trip",
                  "Handpicked romantic restaurants and locations",
                  "Complimentary couple photoshoot at scenic spots",
                  "Flexible customization based on your budget",
                  "Airport transfers and all logistics handled"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop"
                alt="Romantic couple"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-pink-600 text-white px-8 py-4 rounded-xl shadow-lg">
                <p className="font-bold text-2xl">5000+</p>
                <p className="text-sm">Happy Couples</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Love Stories</h2>
            <p className="text-gray-600 text-lg">What our honeymooners say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya & Rahul",
                destination: "Maldives",
                text: "The most magical week of our lives! Everything was perfectly planned, from the overwater villa to the candlelight dinners. Thank you Samaz Holidays!",
                image: "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=100&h=100&fit=crop"
              },
              {
                name: "Sneha & Arjun",
                destination: "Bali",
                text: "Our Bali honeymoon was beyond our expectations. The private villa, couple spa, and sunset beach dinners created memories we'll cherish forever.",
                image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop"
              },
              {
                name: "Anjali & Karan",
                destination: "Kashmir",
                text: "Kashmir in winter was a dream come true. The houseboat stay and shikara rides were so romantic. Highly recommend Samaz for honeymoons!",
                image: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=100&h=100&fit=crop"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.destination} Honeymoon</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Plan Your Dream Honeymoon</h2>
              <p className="text-lg mb-6 text-gray-100">
                Let us create a personalized romantic itinerary that perfectly matches your dream honeymoon vision.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Free honeymoon consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Customized romantic experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Best price guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Special honeymoon deals</span>
                </div>
              </div>
            </div>

            <div>
              <InquiryForm packageName="Honeymoon Package" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

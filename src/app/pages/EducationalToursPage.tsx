import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { PackageCard } from "../components/PackageCard";
import { InquiryForm } from "../components/InquiryForm";
import { GraduationCap, Shield, Users, Award, BookOpen, MapPin, Check, Download } from "lucide-react";
import { toast } from "sonner";

export function EducationalToursPage() {
  const educationalPackages = [
    {
      id: "edu-1",
      title: "Science & Space Tour - Bangalore",
      location: "Bangalore, Karnataka",
      duration: "3 Days / 2 Nights",
      price: 8500,
      originalPrice: 11000,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      highlights: ["Planetarium Visit", "Science Museum", "ISRO Center", "Tech Park Tour"],
      rating: 4.9,
      reviews: 87,
    },
    {
      id: "edu-2",
      title: "Historical India - Delhi Agra",
      location: "Delhi & Agra",
      duration: "4 Days / 3 Nights",
      price: 9500,
      originalPrice: 12500,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      highlights: ["Taj Mahal", "Red Fort", "National Museum", "Qutub Minar"],
      rating: 4.8,
      reviews: 124,
    },
    {
      id: "edu-3",
      title: "Wildlife & Nature - Jim Corbett",
      location: "Jim Corbett, Uttarakhand",
      duration: "3 Days / 2 Nights",
      price: 10500,
      originalPrice: 14000,
      image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop",
      highlights: ["Safari Tours", "Wildlife Spotting", "Nature Trails", "Conservation Learning"],
      rating: 4.7,
      reviews: 92,
    },
    {
      id: "edu-4",
      title: "Maritime & Naval - Mumbai",
      location: "Mumbai, Maharashtra",
      duration: "3 Days / 2 Nights",
      price: 8000,
      originalPrice: 10500,
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop",
      highlights: ["Gateway of India", "Haji Ali", "Marine Drive", "Film City"],
      rating: 4.6,
      reviews: 78,
    },
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Certified Tour Leaders",
      description: "Experienced guides trained in student safety and first aid"
    },
    {
      icon: Users,
      title: "Small Group Sizes",
      description: "Maximum 30 students per group for better supervision"
    },
    {
      icon: Award,
      title: "Accredited Partners",
      description: "Only work with verified hotels and transport providers"
    },
    {
      icon: BookOpen,
      title: "Educational Focus",
      description: "Every activity designed for learning and engagement"
    }
  ];

  const testimonials = [
    {
      name: "Mrs. Priya Kapoor",
      role: "Principal, Delhi Public School",
      text: "Samaz Holidays organized an excellent educational tour for our 9th graders to Agra. The itinerary was well-planned with safety as top priority. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Mr. Rajesh Sharma",
      role: "Teacher, Ryan International",
      text: "The Jim Corbett wildlife tour was an amazing learning experience. Students learned about conservation while having fun. Professional management throughout!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-600 min-h-[500px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
            alt="Students learning"
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
              <GraduationCap className="w-12 h-12" />
              <h1 className="text-5xl font-bold">Educational Tours</h1>
            </div>
            <p className="text-xl mb-6 text-gray-100">
              Learning Beyond Classrooms - Safe, Engaging, and Educational Excursions
            </p>
            <p className="text-lg mb-8">
              We specialize in organizing memorable educational tours for schools and colleges 
              with a perfect blend of learning, fun, and safety.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 px-8 py-6 text-lg">
                  Group Inquiry
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Schools Trust Us</h2>
            <p className="text-gray-600 text-lg">Safety, Education, and Experience Combined</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
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

      {/* Safety Planning */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Safety Planning Process</h2>
            <div className="space-y-4">
              {[
                "Pre-tour safety briefing for students and teachers",
                "24/7 emergency contact and medical support",
                "Background-verified drivers and tour guides",
                "GPS-enabled transport for live tracking",
                "Travel insurance included for all participants",
                "Regular communication with school administration",
                "Dedicated tour manager for each group",
                "Safe and hygienic accommodation facilities"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1E88E5] to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Our Educational Tours Brochure
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Get detailed information on all our educational packages, safety protocols, pricing, and customization options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  toast.success('Brochure download will start shortly! Check your downloads folder.');
                }}
                className="bg-[#F15A29] hover:bg-[#d94d1f] text-white px-8 py-6 text-lg rounded-full shadow-lg flex items-center gap-2 mx-auto sm:mx-0"
              >
                <Download className="w-5 h-5" />
                Download Brochure (PDF)
              </Button>
              <a href="https://wa.me/919876543210?text=Hi! I'd like to receive the Educational Tours brochure" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#1E88E5] px-8 py-6 text-lg rounded-full w-full sm:w-auto"
                >
                  Get via WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Educational Packages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Educational Tours</h2>
            <p className="text-gray-600 text-lg">Carefully designed itineraries for different age groups</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalPackages.map((pkg, index) => (
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

      {/* Teacher Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Educators Say</h2>
            <p className="text-gray-600 text-lg">Feedback from schools we've worked with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
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
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Past Tour Memories</h2>
            <p className="text-gray-600 text-lg">Happy students, successful tours</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop"
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-video overflow-hidden rounded-lg shadow-md"
              >
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Booking CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Plan Your School's Next Trip</h2>
              <p className="text-lg mb-6 text-gray-100">
                Get a customized quote for your group. We handle all logistics so you can focus on the educational experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Special discounts for group bookings</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Free teacher seats (1 free for every 10 students)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Flexible payment options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Comprehensive tour report for parents</span>
                </div>
              </div>
            </div>

            <div>
              <InquiryForm packageName="Educational Tour Group Booking" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
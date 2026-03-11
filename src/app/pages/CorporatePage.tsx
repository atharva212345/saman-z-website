import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { InquiryForm } from "../components/InquiryForm";
import { Briefcase, Users, Trophy, Plane, Building, TrendingUp, Check } from "lucide-react";

export function CorporatePage() {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Tours",
      description: "Team building trips and corporate outings",
      features: ["Custom itineraries", "Team activities", "Professional venues", "Budget management"]
    },
    {
      icon: Trophy,
      title: "Incentive Travel",
      description: "Reward your top performers with memorable trips",
      features: ["Luxury destinations", "VIP treatment", "Recognition programs", "Performance rewards"]
    },
    {
      icon: Users,
      title: "MICE Events",
      description: "Meetings, Incentives, Conferences & Exhibitions",
      features: ["Event planning", "Venue management", "Audio-visual support", "Catering services"]
    },
    {
      icon: TrendingUp,
      title: "Business Travel",
      description: "Hassle-free business trip management",
      features: ["Flight bookings", "Hotel arrangements", "Ground transport", "24/7 support"]
    }
  ];

  const destinations = [
    { name: "Goa", type: "Beach Retreat", image: "https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaGVzJTIwSW5kaWF8ZW58MXx8fHwxNzcxOTM0MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Jaipur", type: "Heritage Experience", image: "https://images.unsplash.com/photo-1673807095855-7c6e499c2cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBwYWxhY2UlMjBKYWlwdXJ8ZW58MXx8fHwxNzcxOTM0MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Dubai", type: "Luxury Getaway", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop" },
    { name: "Lonavala", type: "Quick Escape", image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=400&h=300&fit=crop" },
  ];

  const testimonials = [
    {
      company: "Tech Solutions Pvt Ltd",
      person: "Mr. Amit Verma, HR Director",
      text: "Samaz Holidays organized our annual team outing to Goa. Everything was perfectly planned - from team building activities to accommodation. Our team loved it!",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
    },
    {
      company: "Marketing Dynamics",
      person: "Ms. Neha Shah, CEO",
      text: "The incentive trip to Dubai for our top performers was exceptional. Luxury hotels, great itinerary, and flawless execution. Highly recommended!",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop"
            alt="Corporate event"
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
              <Building className="w-12 h-12" />
              <h1 className="text-5xl font-bold">Corporate & MICE Travel</h1>
            </div>
            <p className="text-xl mb-8 text-gray-100">
              Elevate your business events and reward your team with professionally managed corporate travel solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 px-8 py-6 text-lg">
                  Get Corporate Quote
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Corporate Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions for your business travel needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Businesses Choose Us</h2>
              <div className="space-y-4">
                {[
                  "Dedicated corporate travel manager for each account",
                  "Competitive pricing with volume discounts",
                  "Complete event management from planning to execution",
                  "Professional venues and quality accommodations",
                  "Experienced team building activity coordinators",
                  "Transparent billing and detailed invoicing",
                  "Emergency support and last-minute arrangements",
                  "Post-event reports and feedback analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-primary px-8 py-6 text-lg">
                  Download Corporate Brochure
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
                alt="Meeting"
                className="rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&h=300&fit=crop"
                alt="Team"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Conference"
                className="rounded-2xl shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
                alt="Event"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Corporate Destinations</h2>
            <p className="text-gray-600 text-lg">Perfect locations for team building and corporate events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-sm text-gray-200">{dest.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Corporate Clients Say</h2>
            <p className="text-gray-600 text-lg">Trusted by leading businesses</p>
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
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.company}</h4>
                    <p className="text-sm text-gray-600">{testimonial.person}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Corporate Event?</h2>
              <p className="text-lg mb-6 text-gray-100">
                Get a customized proposal for your team. We handle everything from venue selection to on-ground execution.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Volume discounts available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Flexible payment terms</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Dedicated account manager</span>
                </div>
              </div>
            </div>

            <div>
              <InquiryForm packageName="Corporate Travel Solutions" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

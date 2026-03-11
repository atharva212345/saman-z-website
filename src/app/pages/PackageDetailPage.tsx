import { motion } from "motion/react";
import { useParams, Navigate } from "react-router";
import { Button } from "../components/ui/button";
import { ItineraryTimeline } from "../components/ItineraryTimeline";
import { InquiryForm } from "../components/InquiryForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { getPackageById } from "../data/packages";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Check, 
  X,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Shield
} from "lucide-react";

export function PackageDetailPage() {
  const { id } = useParams();

  // Get the actual package data based on the ID from URL
  const packageData = id ? getPackageById(id) : undefined;

  // If package not found, redirect to packages page
  if (!packageData) {
    return <Navigate to="/packages" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <img 
          src={packageData.image} 
          alt={packageData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{packageData.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{packageData.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>{packageData.rating} ({packageData.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold">
                  ₹{packageData.price.toLocaleString()}
                  {packageData.originalPrice && (
                    <span className="text-sm line-through text-gray-300 ml-2">
                      ₹{packageData.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Package Overview</h2>
              <p className="text-gray-700 leading-relaxed">{packageData.description}</p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {packageData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tabs for Itinerary, Inclusions, etc */}
            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="mt-6">
                <ItineraryTimeline itinerary={packageData.itinerary} />
              </TabsContent>

              <TabsContent value="inclusions" className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    What's Included
                  </h3>
                  <div className="space-y-2">
                    {packageData.inclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    What's Not Included
                  </h3>
                  <div className="space-y-2">
                    {packageData.exclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {packageData.gallery.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Important Information */}
            <section className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Important Information
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Valid government ID required for all travelers</li>
                <li>• Travel insurance is recommended</li>
                <li>• Bookings subject to availability</li>
                <li>• Prices may vary during peak seasons</li>
                <li>• Cancellation charges applicable as per policy</li>
              </ul>
            </section>
          </div>

          {/* Right Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold">₹{packageData.price.toLocaleString()}</span>
                  {packageData.originalPrice && (
                    <span className="text-sm line-through text-gray-200">₹{packageData.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <p className="text-sm text-gray-100">Per person (all inclusive)</p>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4" />
                    <span>Transfers included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Hotel className="w-4 h-4" />
                    <span>Hotel accommodation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    <span>Meals as per itinerary</span>
                  </div>
                </div>
              </div>
              
              <InquiryForm packageName={packageData.title} />

              {/* Quick Actions */}
              <div className="mt-4">
                <a 
                  href="https://wa.me/919876543210?text=I'm interested in Kashmir package" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Quick Inquiry on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
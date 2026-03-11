import { useState } from "react";
import { PackageCard } from "../components/PackageCard";
import { FilterPanel, FilterState } from "../components/FilterPanel";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";

export function PackagesPage() {
  const [filters, setFilters] = useState<FilterState>({
    budget: [10000, 100000],
    destination: "all",
    duration: "all",
    category: "all",
    travelType: "all",
  });

  const allPackages = [
    {
      id: "1",
      title: "Magical Kashmir",
      location: "Kashmir, India",
      duration: "6 Days / 5 Nights",
      price: 25000,
      originalPrice: 32000,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
      highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Srinagar"],
      rating: 4.8,
      reviews: 245,
    },
    {
      id: "2",
      title: "Royal Rajasthan Tour",
      location: "Rajasthan, India",
      duration: "8 Days / 7 Nights",
      price: 18000,
      originalPrice: 24000,
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      highlights: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
      rating: 4.7,
      reviews: 189,
    },
    {
      id: "3",
      title: "Thailand Paradise",
      location: "Bangkok & Phuket",
      duration: "7 Days / 6 Nights",
      price: 35000,
      originalPrice: 45000,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
      highlights: ["Bangkok City", "Pattaya", "Phuket Beaches", "Island Hopping"],
      rating: 4.9,
      reviews: 312,
    },
    {
      id: "4",
      title: "Dubai Extravaganza",
      location: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: 45000,
      originalPrice: 55000,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Marina Cruise"],
      rating: 4.8,
      reviews: 278,
    },
    {
      id: "5",
      title: "Maldives Honeymoon",
      location: "Maldives",
      duration: "5 Days / 4 Nights",
      price: 55000,
      originalPrice: 70000,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
      highlights: ["Water Villa", "Snorkeling", "Spa", "Romantic Dinner"],
      rating: 5.0,
      reviews: 156,
    },
    {
      id: "6",
      title: "Bali Adventure",
      location: "Bali, Indonesia",
      duration: "6 Days / 5 Nights",
      price: 40000,
      originalPrice: 50000,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      highlights: ["Ubud", "Tanah Lot Temple", "Beach Clubs", "Rice Terraces"],
      rating: 4.7,
      reviews: 203,
    },
    {
      id: "7",
      title: "Singapore Delight",
      location: "Singapore",
      duration: "4 Days / 3 Nights",
      price: 38000,
      originalPrice: 48000,
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      highlights: ["Universal Studios", "Gardens by Bay", "Sentosa", "Marina Bay"],
      rating: 4.8,
      reviews: 267,
    },
    {
      id: "8",
      title: "Vietnam Explorer",
      location: "Hanoi & Ho Chi Minh",
      duration: "7 Days / 6 Nights",
      price: 32000,
      originalPrice: 42000,
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop",
      highlights: ["Halong Bay", "Cu Chi Tunnels", "Local Markets", "Street Food"],
      rating: 4.6,
      reviews: 145,
    },
    {
      id: "9",
      title: "North East Wonders",
      location: "Meghalaya & Assam",
      duration: "6 Days / 5 Nights",
      price: 22000,
      originalPrice: 28000,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      highlights: ["Living Root Bridges", "Cherrapunji", "Kaziranga", "Tea Gardens"],
      rating: 4.7,
      reviews: 98,
    },
    {
      id: "10",
      title: "Golden Triangle",
      location: "Delhi, Agra, Jaipur",
      duration: "5 Days / 4 Nights",
      price: 12000,
      originalPrice: 16000,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      highlights: ["Taj Mahal", "Red Fort", "Amber Fort", "Hawa Mahal"],
      rating: 4.8,
      reviews: 421,
    },
    {
      id: "11",
      title: "South India Temple Tour",
      location: "Tamil Nadu & Kerala",
      duration: "8 Days / 7 Nights",
      price: 20000,
      originalPrice: 26000,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
      highlights: ["Madurai", "Kanyakumari", "Backwaters", "Temples"],
      rating: 4.6,
      reviews: 134,
    },
    {
      id: "12",
      title: "Goa Beach Escape",
      location: "Goa, India",
      duration: "4 Days / 3 Nights",
      price: 15000,
      originalPrice: 20000,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      highlights: ["Beach Parties", "Water Sports", "Fort Aguada", "Spice Plantation"],
      rating: 4.5,
      reviews: 289,
    },
  ];

  const [filteredPackages] = useState(allPackages);

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="relative h-64 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400&fit=crop" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Packages</h1>
            <p className="text-lg text-gray-100">Find your perfect travel experience from our curated collection</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel onFilterChange={setFilters} />
            </div>
          </aside>

          {/* Packages Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <div className="p-6">
                    <FilterPanel onFilterChange={setFilters} isMobile={true} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredPackages.length}</span> packages
              </p>
            </div>

            {/* Package Cards Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PackageCard {...pkg} />
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredPackages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">No packages found matching your criteria</p>
                <Button onClick={() => setFilters({
                  budget: [10000, 100000],
                  destination: "all",
                  duration: "all",
                  category: "all",
                  travelType: "all",
                })}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
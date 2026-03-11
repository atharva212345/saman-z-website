import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { PackageCard } from "../components/PackageCard";
import { Button } from "../components/ui/button";
import { MapPin, Search, Filter, X } from "lucide-react";
import { domesticPackages } from "../data/packages";

export function DomesticToursPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "Kashmir", "Rajasthan", "North East", "Delhi Agra", "South India", "Pilgrimage", "Uttarakhand"];
  const budgetOptions = ["All", "Budget", "Mid-Range", "Luxury"];
  const durationOptions = ["All", "3-4 Days", "5-6 Days", "7+ Days"];

  // Handle direct trip selection
  const handleTripSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tripId = e.target.value;
    if (tripId) {
      navigate(`/package/${tripId}`);
    }
  };

  const filteredPackages = domesticPackages.filter(pkg => {
    const categoryMatch = selectedCategory === "All" || pkg.category === selectedCategory;
    const budgetMatch = selectedBudget === "All" || pkg.budget === selectedBudget;
    
    let durationMatch = true;
    if (selectedDuration === "3-4 Days") {
      const days = parseInt(pkg.duration);
      durationMatch = days >= 3 && days <= 4;
    } else if (selectedDuration === "5-6 Days") {
      const days = parseInt(pkg.duration);
      durationMatch = days >= 5 && days <= 6;
    } else if (selectedDuration === "7+ Days") {
      const days = parseInt(pkg.duration);
      durationMatch = days >= 7;
    }
    
    return categoryMatch && budgetMatch && durationMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Domestic Tours</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Explore the incredible diversity of India with our curated tour packages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">{filteredPackages.length} Tours Found</span>
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {budgetOptions.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>

              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {durationOptions.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>

              {(selectedCategory !== "All" || selectedBudget !== "All" || selectedDuration !== "All") && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedBudget("All");
                    setSelectedDuration("All");
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Mobile Filter Button */}
            <Button
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="lg:hidden mt-4 space-y-3 pb-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {budgetOptions.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>

              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {durationOptions.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>

              {(selectedCategory !== "All" || selectedBudget !== "All" || selectedDuration !== "All") && (
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedBudget("All");
                    setSelectedDuration("All");
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredPackages.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <PackageCard {...pkg} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No tours found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedBudget("All");
                  setSelectedDuration("All");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Dream Destination?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Let us create a customized itinerary just for you
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary hover:bg-secondary/90 px-8 py-6 text-lg">
                Plan Custom Trip
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg border-0">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
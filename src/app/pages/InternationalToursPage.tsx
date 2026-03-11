import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { PackageCard } from "../components/PackageCard";
import { Button } from "../components/ui/button";
import { Plane, Search, Filter, X } from "lucide-react";
import { internationalPackages } from "../data/packages";

export function InternationalToursPage() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const countries = ["All", "Thailand", "Dubai", "Bali", "Maldives", "Singapore", "Vietnam", "Malaysia", "Europe"];
  const budgetOptions = ["All", "Budget", "Mid-Range", "Luxury"];
  const durationOptions = ["All", "3-5 Days", "6-7 Days", "8+ Days"];

  // Handle direct trip selection
  const handleTripSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tripId = e.target.value;
    if (tripId) {
      navigate(`/package/${tripId}`);
    }
  };

  const filteredPackages = internationalPackages.filter(pkg => {
    const countryMatch = selectedCountry === "All" || pkg.country === selectedCountry;
    const budgetMatch = selectedBudget === "All" || pkg.budget === selectedBudget;
    
    let durationMatch = true;
    if (selectedDuration === "3-5 Days") {
      const days = parseInt(pkg.duration);
      durationMatch = days >= 3 && days <= 5;
    } else if (selectedDuration === "6-7 Days") {
      const days = parseInt(pkg.duration);
      durationMatch = days >= 6 && days <= 7;
    } else if (selectedDuration === "8+ Days") {
      const days = parseInt(pkg.duration);
      durationMatch = days >= 8;
    }
    
    return countryMatch && budgetMatch && durationMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">International Tours</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Discover amazing destinations around the world with our handpicked international packages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Plane className="w-5 h-5" />
              <span className="font-semibold">{filteredPackages.length} Tours Found</span>
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
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

              {(selectedCountry !== "All" || selectedBudget !== "All" || selectedDuration !== "All") && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedCountry("All");
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
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
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

              {(selectedCountry !== "All" || selectedBudget !== "All" || selectedDuration !== "All") && (
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setSelectedCountry("All");
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  setSelectedCountry("All");
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
      <section className="py-16 px-4 bg-gradient-to-r from-secondary to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the World?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Our travel experts will help you plan your perfect international vacation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-secondary hover:bg-gray-100 px-8 py-6 text-lg">
                Plan My Trip on WhatsApp
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" className="bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg border-2 border-white">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
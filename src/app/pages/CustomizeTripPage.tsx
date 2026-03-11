import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StepProgress } from "../components/StepProgress";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { toast } from "sonner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  Target,
  User,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Globe,
  Plane,
  Hotel,
  Camera,
  Heart,
  Star,
  Award,
  Shield,
  Clock,
  CheckCircle2,
  TrendingUp,
  Zap,
  Gift,
  Sun,
  Mountain,
  Palmtree,
  UtensilsCrossed,
  ShoppingBag,
  Music
} from "lucide-react";

export function CustomizeTripPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    destinations: [] as string[],
    startDate: "",
    endDate: "",
    budget: "",
    travelers: {
      adults: 2,
      children: 0,
      infants: 0
    },
    travelPurpose: "",
    interests: [] as string[],
    accommodation: "",
    transportation: "",
    name: "",
    email: "",
    phone: "",
    additionalInfo: ""
  });

  const steps = [
    "Destination",
    "Travel Dates",
    "Budget",
    "Travelers",
    "Purpose & Interests",
    "Contact Details"
  ];

  const popularDestinations = {
    "India Domestic": {
      emoji: "🇮🇳",
      destinations: [
        "Kashmir", "Rajasthan", "Goa", "Kerala", "Himachal Pradesh",
        "Uttarakhand", "North East India", "Ladakh", "Andaman & Nicobar",
        "Lakshadweep", "Tamil Nadu", "Karnataka", "Maharashtra", "Gujarat"
      ]
    },
    "Asia": {
      emoji: "🌏",
      destinations: [
        "Thailand", "Bali (Indonesia)", "Singapore", "Malaysia", "Vietnam",
        "Cambodia", "Sri Lanka", "Nepal", "Bhutan", "Maldives",
        "Japan", "South Korea", "Hong Kong", "Philippines", "Taiwan"
      ]
    },
    "Middle East": {
      emoji: "🕌",
      destinations: [
        "Dubai (UAE)", "Abu Dhabi (UAE)", "Turkey", "Egypt", "Jordan",
        "Oman", "Qatar", "Saudi Arabia"
      ]
    },
    "Europe": {
      emoji: "🇪🇺",
      destinations: [
        "Switzerland", "France", "Italy", "Spain", "Greece",
        "United Kingdom", "Germany", "Netherlands", "Austria", "Portugal",
        "Iceland", "Norway", "Sweden", "Croatia", "Czech Republic"
      ]
    },
    "Americas": {
      emoji: "🌎",
      destinations: [
        "USA", "Canada", "Mexico", "Brazil", "Argentina",
        "Peru", "Costa Rica", "Caribbean Islands"
      ]
    },
    "Africa": {
      emoji: "🌍",
      destinations: [
        "South Africa", "Kenya", "Tanzania", "Morocco", "Mauritius",
        "Seychelles", "Madagascar"
      ]
    },
    "Oceania": {
      emoji: "🌊",
      destinations: [
        "Australia", "New Zealand", "Fiji"
      ]
    }
  };

  const travelPurposes = [
    { value: "honeymoon", label: "Honeymoon", icon: "❤️", image: "https://images.unsplash.com/photo-1766041684389-96a9ea0d0b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob25leW1vb24lMjByb21hbnRpYyUyMHN1bnNldHxlbnwxfHx8fDE3NzE0MjMzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { value: "family", label: "Family Vacation", icon: "👨‍👩‍👧‍👦", image: "https://images.unsplash.com/photo-1766818436606-5cfed3aa1191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMGhhcHB5JTIwa2lkc3xlbnwxfHx8fDE3NzE0MjMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { value: "adventure", label: "Adventure", icon: "🏔️", image: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NzEzNTY4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { value: "religious", label: "Religious/Pilgrimage", icon: "🙏", image: "https://images.unsplash.com/photo-1649522864970-668297e255f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHRyYXZlbCUyMGdsb2JlJTIwbWFwfGVufDF8fHx8MTc3MTQyMzMyNXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { value: "business", label: "Business/Corporate", icon: "💼", image: "https://images.unsplash.com/photo-1650113794972-56031832c0db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVycyUyMHN1aXRjYXNlJTIwYWlycG9ydHxlbnwxfHx8fDE3NzE0MjMzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { value: "educational", label: "Educational", icon: "🎓", image: "https://images.unsplash.com/photo-1649522864970-668297e255f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHRyYXZlbCUyMGdsb2JlJTIwbWFwfGVufDF8fHx8MTc3MTQyMzMyNXww&ixlib=rb-4.1.0&q=80&w=1080" }
  ];

  const interests = [
    { name: "Beaches", icon: Palmtree, color: "text-cyan-500" },
    { name: "Mountains", icon: Mountain, color: "text-green-600" },
    { name: "Historical Sites", icon: Award, color: "text-amber-600" },
    { name: "Wildlife", icon: Sparkles, color: "text-emerald-500" },
    { name: "Shopping", icon: ShoppingBag, color: "text-pink-500" },
    { name: "Food & Cuisine", icon: UtensilsCrossed, color: "text-orange-500" },
    { name: "Adventure Sports", icon: Zap, color: "text-red-500" },
    { name: "Photography", icon: Camera, color: "text-purple-500" },
    { name: "Spa & Wellness", icon: Heart, color: "text-rose-500" },
    { name: "Nightlife", icon: Music, color: "text-violet-500" },
    { name: "Cultural Experiences", icon: Globe, color: "text-blue-500" },
    { name: "Local Markets", icon: Gift, color: "text-yellow-600" }
  ];

  const handleDestinationToggle = (dest: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (currentStep === 0 && formData.destinations.length === 0) {
      toast.error("Please select at least one destination");
      return;
    }
    if (currentStep === 1 && (!formData.startDate || !formData.endDate)) {
      toast.error("Please select both start and end dates");
      return;
    }
    if (currentStep === 1 && new Date(formData.startDate) >= new Date(formData.endDate)) {
      toast.error("End date must be after start date");
      return;
    }
    if (currentStep === 2 && !formData.budget) {
      toast.error("Please select your budget range");
      return;
    }
    if (currentStep === 3 && formData.travelers.adults === 0) {
      toast.error("Please add at least one adult traveler");
      return;
    }
    if (currentStep === 4 && !formData.travelPurpose) {
      toast.error("Please select your travel purpose");
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }

    const message = `
🌍 *Custom Trip Request*

📍 Destinations: ${formData.destinations.join(", ")}
📅 Dates: ${formData.startDate} to ${formData.endDate}
💰 Budget: ₹${formData.budget}
👥 Travelers: ${formData.travelers.adults} Adults, ${formData.travelers.children} Children, ${formData.travelers.infants} Infants
🎯 Purpose: ${formData.travelPurpose}
❤️ Interests: ${formData.interests.join(", ") || "Not specified"}

👤 Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

📝 Additional Info:
${formData.additionalInfo || "None"}
    `.trim();

    const whatsappUrl = `https://wa.me/919226339969?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Header with Image */}
      <div className="relative bg-gradient-to-r from-primary via-blue-600 to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1649522864970-668297e255f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHRyYXZlbCUyMGdsb2JlJTIwbWFwfGVufDF8fHx8MTc3MTQyMzMyNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="World Travel"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-20 h-20 mx-auto text-secondary drop-shadow-2xl" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Plan Your Dream Trip
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Customize every detail of your perfect journey with our expert travel planners
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <CheckCircle2 className="w-6 h-6 text-green-300" />
                <span className="font-semibold">100% Customizable</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <Shield className="w-6 h-6 text-blue-300" />
                <span className="font-semibold">Secure Booking</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="font-semibold">Expert Support</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* Progress Bar with Enhanced Design */}
      <div className="bg-white shadow-lg sticky top-0 z-40 border-b-2 border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {currentStep + 1}
              </div>
              <div>
                <p className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</p>
                <p className="font-bold text-lg text-gray-800">{steps[currentStep]}</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>~2 minutes to complete</span>
            </div>
          </div>
          
          <StepProgress steps={steps} currentStep={currentStep} />
        </div>
      </div>

      {/* Form Steps */}
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border-2 border-gray-100"
          >
            {/* Step 0: Destination */}
            {currentStep === 0 && (
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row items-center gap-4 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      Where do you want to go?
                    </h2>
                    <p className="text-gray-600 text-lg mt-1">
                      {selectedContinent 
                        ? `Select destinations in ${selectedContinent}` 
                        : "First, select a continent to explore"}
                    </p>
                  </div>
                </motion.div>

                {/* Selected Destinations Badge */}
                <AnimatePresence>
                  {formData.destinations.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <p className="font-bold text-green-800 text-lg">
                          {formData.destinations.length} Destination{formData.destinations.length > 1 ? 's' : ''} Selected
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {formData.destinations.map((dest) => (
                          <span 
                            key={dest}
                            className="bg-white px-4 py-2 rounded-full text-sm font-medium text-green-700 shadow-sm border border-green-200"
                          >
                            ✓ {dest}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Back to Continents Button */}
                {selectedContinent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => setSelectedContinent(null)}
                      className="flex items-center gap-2 border-2 hover:border-primary"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Continents
                    </Button>
                  </motion.div>
                )}

                {/* Destination Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedContinent ? (
                    popularDestinations[selectedContinent].destinations.map((dest, index) => (
                      <motion.button
                        key={dest}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDestinationToggle(dest)}
                        className={`group relative p-4 md:p-5 rounded-2xl border-2 transition-all text-left overflow-hidden ${
                          formData.destinations.includes(dest)
                            ? "border-primary bg-gradient-to-br from-primary/10 to-blue-50 shadow-lg"
                            : "border-gray-200 hover:border-primary/50 bg-white hover:shadow-xl"
                        }`}
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
                        
                        {formData.destinations.includes(dest) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-lg"
                          >
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                        
                        <span className={`relative font-semibold text-sm md:text-base transition-colors ${
                          formData.destinations.includes(dest) ? "text-primary" : "text-gray-700 group-hover:text-primary"
                        }`}>
                          {dest}
                        </span>
                      </motion.button>
                    ))
                  ) : (
                    Object.keys(popularDestinations).map((continent, index) => (
                      <motion.button
                        key={continent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedContinent(continent)}
                        className="relative group p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-primary bg-white hover:shadow-2xl transition-all text-center overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <motion.div 
                          className="text-5xl md:text-6xl mb-3"
                          animate={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            delay: index * 0.2
                          }}
                        >
                          {popularDestinations[continent].emoji}
                        </motion.div>
                        
                        <div className="relative font-bold text-base md:text-lg text-gray-800 group-hover:text-primary transition-colors">
                          {continent}
                        </div>
                        
                        <div className="text-xs md:text-sm text-gray-500 mt-2 flex items-center justify-center gap-1">
                          <Globe className="w-3 h-3" />
                          {popularDestinations[continent].destinations.length} destinations
                        </div>
                      </motion.button>
                    ))
                  )}
                </div>

                {/* Helpful Hint */}
                {selectedContinent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-center gap-2 text-blue-700">
                      <TrendingUp className="w-5 h-5" />
                      <p className="text-sm font-medium">
                        <strong>Pro Tip:</strong> Want to visit multiple continents? Select destinations, then go back and choose another continent!
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Step 1: Dates */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row items-center gap-4 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      When are you planning to travel?
                    </h2>
                    <p className="text-gray-600 text-lg mt-1">Choose your travel dates</p>
                  </div>
                </motion.div>

                {/* Beautiful Date Picker Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                        <Plane className="w-5 h-5 text-white" />
                      </div>
                      <Label htmlFor="startDate" className="text-xl font-bold text-green-900">
                        Departure Date
                      </Label>
                    </div>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="mt-2 text-lg h-14 border-2 border-green-300 focus:border-green-500"
                    />
                    <p className="text-sm text-green-700 mt-2">When do you want to start your journey?</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Hotel className="w-5 h-5 text-white" />
                      </div>
                      <Label htmlFor="endDate" className="text-xl font-bold text-blue-900">
                        Return Date
                      </Label>
                    </div>
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="mt-2 text-lg h-14 border-2 border-blue-300 focus:border-blue-500"
                    />
                    <p className="text-sm text-blue-700 mt-2">When do you plan to return home?</p>
                  </motion.div>
                </div>

                {/* Trip Duration Display */}
                {formData.startDate && formData.endDate && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 text-center"
                  >
                    <Sun className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-purple-900">
                      {Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24))} Days Trip
                    </p>
                    <p className="text-purple-700 mt-1">Perfect for an amazing adventure!</p>
                  </motion.div>
                )}
              </div>
            )}

            {/* Step 2: Budget */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row items-center gap-4 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      What's your budget?
                    </h2>
                    <p className="text-gray-600 text-lg mt-1">Per person budget in INR</p>
                  </div>
                </motion.div>

                <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { 
                        value: "10000-25000", 
                        label: "₹10,000 - ₹25,000", 
                        desc: "Domestic budget tours", 
                        icon: Gift,
                        gradient: "from-green-50 to-emerald-50",
                        border: "border-green-200",
                        iconBg: "bg-green-500"
                      },
                      { 
                        value: "25000-50000", 
                        label: "₹25,000 - ₹50,000", 
                        desc: "Domestic premium / Asia budget", 
                        icon: Star,
                        gradient: "from-blue-50 to-cyan-50",
                        border: "border-blue-200",
                        iconBg: "bg-blue-500"
                      },
                      { 
                        value: "50000-100000", 
                        label: "₹50,000 - ₹1,00,000", 
                        desc: "Asia premium / Europe budget", 
                        icon: Award,
                        gradient: "from-purple-50 to-pink-50",
                        border: "border-purple-200",
                        iconBg: "bg-purple-500"
                      },
                      { 
                        value: "100000+", 
                        label: "₹1,00,000+", 
                        desc: "Europe / Americas / Luxury", 
                        icon: Sparkles,
                        gradient: "from-amber-50 to-yellow-50",
                        border: "border-amber-200",
                        iconBg: "bg-amber-500"
                      },
                    ].map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <motion.div 
                          key={option.value}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          className={`relative flex items-center space-x-4 p-6 border-2 rounded-2xl hover:shadow-xl transition-all cursor-pointer bg-gradient-to-br ${option.gradient} ${
                            formData.budget === option.value ? option.border + ' ring-4 ring-offset-2 ring-primary/20' : 'border-gray-200'
                          }`}
                        >
                          <RadioGroupItem value={option.value} id={option.value} className="w-6 h-6" />
                          <div className={`w-12 h-12 ${option.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                            <div className="font-bold text-lg text-gray-900">{option.label}</div>
                            <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                          </Label>
                          {formData.budget === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-3 right-3"
                            >
                              <CheckCircle2 className="w-7 h-7 text-primary" />
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </RadioGroup>

                {/* Budget Info Card */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-orange-900 mb-2">Budget Transparency</h3>
                      <p className="text-orange-800 text-sm">
                        Budget varies by destination: Domestic (₹10K-50K), Asia (₹25K-1L), Europe/Americas/Oceania (₹80K-2L+). We'll create a detailed itinerary matching your budget with transparent pricing and no hidden charges.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Step 3: Travelers */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row items-center gap-4 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      How many travelers?
                    </h2>
                    <p className="text-gray-600 text-lg mt-1">Number of people traveling with you</p>
                  </div>
                </motion.div>

                {/* Traveler Counter Cards */}
                <div className="space-y-4">
                  {[
                    { 
                      key: "adults", 
                      label: "Adults", 
                      desc: "Ages 12+ years",
                      emoji: "👨‍👩",
                      gradient: "from-blue-50 to-cyan-50",
                      border: "border-blue-200"
                    },
                    { 
                      key: "children", 
                      label: "Children", 
                      desc: "Ages 2-12 years",
                      emoji: "👧",
                      gradient: "from-green-50 to-emerald-50",
                      border: "border-green-200"
                    },
                    { 
                      key: "infants", 
                      label: "Infants", 
                      desc: "Under 2 years",
                      emoji: "👶",
                      gradient: "from-purple-50 to-pink-50",
                      border: "border-purple-200"
                    }
                  ].map((type, index) => (
                    <motion.div
                      key={type.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center justify-between p-6 border-2 rounded-2xl shadow-lg bg-gradient-to-br ${type.gradient} ${type.border}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{type.emoji}</span>
                        <div>
                          <div className="font-bold text-xl text-gray-900">{type.label}</div>
                          <div className="text-sm text-gray-600 mt-1">{type.desc}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setFormData({
                              ...formData,
                              travelers: {
                                ...formData.travelers,
                                [type.key]: Math.max(0, formData.travelers[type.key as keyof typeof formData.travelers] - 1)
                              }
                            })}
                            className="w-12 h-12 rounded-xl text-xl font-bold border-2 hover:bg-white"
                          >
                            -
                          </Button>
                        </motion.div>
                        
                        <motion.span 
                          key={formData.travelers[type.key as keyof typeof formData.travelers]}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          className="w-16 text-center font-bold text-3xl text-gray-800"
                        >
                          {formData.travelers[type.key as keyof typeof formData.travelers]}
                        </motion.span>
                        
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setFormData({
                              ...formData,
                              travelers: {
                                ...formData.travelers,
                                [type.key]: formData.travelers[type.key as keyof typeof formData.travelers] + 1
                              }
                            })}
                            className="w-12 h-12 rounded-xl text-xl font-bold border-2 hover:bg-white"
                          >
                            +
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Total Travelers Summary */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 text-center"
                >
                  <Users className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-indigo-900">
                    {formData.travelers.adults + formData.travelers.children + formData.travelers.infants} Total Travelers
                  </p>
                  <p className="text-indigo-700 mt-2">
                    We'll plan the perfect experience for your group!
                  </p>
                </motion.div>
              </div>
            )}

            {/* Step 4: Purpose & Interests */}
            {currentStep === 4 && (
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row items-center gap-4 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Travel Purpose & Interests
                    </h2>
                    <p className="text-gray-600 text-lg mt-1">Help us personalize your perfect journey</p>
                  </div>
                </motion.div>

                {/* Travel Purpose with Images */}
                <div>
                  <Label className="text-2xl font-bold mb-6 block text-gray-800 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-500" />
                    What's the purpose of your trip?
                  </Label>
                  
                  <div className="grid md:grid-cols-3 gap-5">
                    {travelPurposes.map((purpose, index) => (
                      <motion.button
                        key={purpose.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormData({ ...formData, travelPurpose: purpose.value })}
                        className={`relative group overflow-hidden rounded-2xl border-4 transition-all ${
                          formData.travelPurpose === purpose.value
                            ? "border-primary shadow-2xl ring-4 ring-primary/20"
                            : "border-transparent hover:border-primary/30 shadow-lg hover:shadow-2xl"
                        }`}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <ImageWithFallback
                            src={purpose.image}
                            alt={purpose.label}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <div className="text-4xl mb-2">{purpose.icon}</div>
                          <div className="font-bold text-xl">{purpose.label}</div>
                        </div>

                        {formData.travelPurpose === purpose.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-xl"
                          >
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Interests with Icons */}
                <div>
                  <Label className="text-2xl font-bold mb-6 block text-gray-800 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                    What are your interests? (Select all that apply)
                  </Label>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {interests.map((interest, index) => {
                      const Icon = interest.icon;
                      const isSelected = formData.interests.includes(interest.name);
                      
                      return (
                        <motion.div
                          key={interest.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <label
                            className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                              isSelected
                                ? "border-primary bg-gradient-to-br from-primary/10 to-blue-50 shadow-lg"
                                : "border-gray-200 hover:border-primary/50 bg-white hover:shadow-xl"
                            }`}
                          >
                            <Checkbox
                              id={interest.name}
                              checked={isSelected}
                              onCheckedChange={() => handleInterestToggle(interest.name)}
                              className="sr-only"
                            />
                            
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              isSelected ? 'bg-primary/20' : 'bg-gray-100'
                            }`}>
                              <Icon className={`w-6 h-6 ${isSelected ? 'text-primary' : interest.color}`} />
                            </div>
                            
                            <span className={`text-sm font-semibold text-center ${
                              isSelected ? 'text-primary' : 'text-gray-700'
                            }`}>
                              {interest.name}
                            </span>

                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-2 right-2"
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                              </motion.div>
                            )}
                          </label>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Interests Summary */}
                {formData.interests.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-amber-600" />
                      <p className="font-bold text-amber-900 text-lg">
                        {formData.interests.length} Interest{formData.interests.length > 1 ? 's' : ''} Selected
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.interests.map((int) => (
                        <span 
                          key={int}
                          className="bg-white px-4 py-2 rounded-full text-sm font-medium text-amber-700 shadow-sm border border-amber-200"
                        >
                          {int}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Step 5: Contact Details */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row items-center gap-4 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      Almost There!
                    </h2>
                    <p className="text-gray-600 text-lg mt-1">Share your contact details to receive your customized itinerary</p>
                  </div>
                </motion.div>

                {/* Beautiful Contact Form */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200"
                  >
                    <Label htmlFor="name" className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="mt-2 h-14 text-lg border-2 border-blue-300 focus:border-blue-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200"
                  >
                    <Label htmlFor="email" className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="mt-2 h-14 text-lg border-2 border-green-300 focus:border-green-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200"
                  >
                    <Label htmlFor="phone" className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-2 h-14 text-lg border-2 border-purple-300 focus:border-purple-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200"
                  >
                    <Label htmlFor="additionalInfo" className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Additional Information (Optional)
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      placeholder="Any special requirements, dietary preferences, accessibility needs, or other details we should know..."
                      className="mt-2 min-h-36 text-lg border-2 border-orange-300 focus:border-orange-500"
                    />
                  </motion.div>
                </div>

                {/* Privacy Notice */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-slate-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Your Privacy Matters</h3>
                      <p className="text-slate-700 text-sm">
                        We respect your privacy and will only use your information to create your customized travel itinerary. 
                        Your details are secure and will never be shared with third parties.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Navigation Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between mt-12 pt-8 border-t-2 border-gray-200"
            >
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="flex items-center gap-2 h-14 px-8 text-lg border-2 hover:border-primary disabled:opacity-40"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button 
                  onClick={handleNext} 
                  className="flex items-center gap-2 h-14 px-8 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </Button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={handleSubmit} 
                    className="flex items-center gap-3 h-16 px-10 text-xl bg-gradient-to-r from-secondary to-orange-600 hover:from-secondary/90 hover:to-orange-600/90 shadow-2xl hover:shadow-3xl font-bold"
                  >
                    <Sparkles className="w-6 h-6" />
                    Get My Custom Quote
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

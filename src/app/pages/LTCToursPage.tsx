import { motion } from 'motion/react';
import { PackageCard } from '../components/PackageCard';
import { Check, Briefcase, FileText, Calendar, Users, Shield, Clock, Phone } from 'lucide-react';

export function LTCToursPage() {
  const ltcPackages = [
    {
      id: 'ltc-goa',
      name: 'Goa LTC Package',
      duration: '4N/5D',
      price: '₹15,999',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop',
      rating: 4.7,
      location: 'Goa',
      category: 'Beach',
      description: 'Perfect LTC package for government employees - beaches, heritage sites, and relaxation',
      highlights: ['Beaches & Water Sports', 'Old Goa Churches', 'LTC Bill Documentation', 'Government Employee Discounts']
    },
    {
      id: 'ltc-rajasthan',
      name: 'Rajasthan Heritage LTC',
      duration: '5N/6D',
      price: '₹22,999',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop',
      rating: 4.8,
      location: 'Rajasthan',
      category: 'Heritage',
      description: 'Explore royal palaces and forts with complete LTC documentation support',
      highlights: ['Jaipur-Udaipur-Jodhpur', 'Royal Forts & Palaces', 'LTC Certificate & Bills', 'Cultural Experiences']
    },
    {
      id: 'ltc-kerala',
      name: 'Kerala Backwaters LTC',
      duration: '5N/6D',
      price: '₹24,999',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop',
      rating: 4.9,
      location: 'Kerala',
      category: 'Nature',
      description: 'God\'s Own Country with houseboat stays and complete LTC paperwork assistance',
      highlights: ['Houseboat Experience', 'Hill Stations', 'LTC Documentation', 'Ayurvedic Spa']
    },
    {
      id: 'ltc-kashmir',
      name: 'Kashmir Paradise LTC',
      duration: '5N/6D',
      price: '₹28,999',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop',
      rating: 4.9,
      location: 'Kashmir',
      category: 'Mountains',
      description: 'Heaven on Earth experience with shikara rides and snow activities',
      highlights: ['Dal Lake Shikara', 'Gulmarg Snow Point', 'LTC Bills Provided', 'Scenic Valleys']
    },
    {
      id: 'ltc-himachal',
      name: 'Himachal Hill Stations LTC',
      duration: '5N/6D',
      price: '₹21,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      rating: 4.8,
      location: 'Himachal Pradesh',
      category: 'Mountains',
      description: 'Shimla-Manali circuit perfect for family LTC vacation',
      highlights: ['Shimla-Manali-Dharamshala', 'Snow Activities', 'LTC Certificate Support', 'Adventure Sports']
    },
    {
      id: 'ltc-northeast',
      name: 'North East Discovery LTC',
      duration: '6N/7D',
      price: '₹29,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      rating: 4.7,
      location: 'Sikkim & Darjeeling',
      category: 'Mountains',
      description: 'Explore the pristine beauty of North East with LTC benefits',
      highlights: ['Gangtok & Darjeeling', 'Nathula Pass', 'LTC Documentation', 'Tea Gardens']
    },
    {
      id: 'ltc-uttarakhand',
      name: 'Uttarakhand Spiritual LTC',
      duration: '4N/5D',
      price: '₹18,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      rating: 4.8,
      location: 'Uttarakhand',
      category: 'Spiritual',
      description: 'Combine spirituality with scenic beauty - Haridwar, Rishikesh, Mussoorie',
      highlights: ['Haridwar-Rishikesh-Mussoorie', 'Ganga Aarti', 'LTC Bills & Certificate', 'Adventure Activities']
    },
    {
      id: 'ltc-southindia',
      name: 'South India Temple Circuit LTC',
      duration: '6N/7D',
      price: '₹23,999',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
      rating: 4.7,
      location: 'Tamil Nadu',
      category: 'Spiritual',
      description: 'Sacred temples of South India with LTC documentation support',
      highlights: ['Rameshwaram-Madurai-Kanyakumari', 'Ancient Temples', 'LTC Paperwork', 'Cultural Heritage']
    }
  ];

  const ltcBenefits = [
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'We provide all necessary bills, vouchers, and certificates required for LTC claims'
    },
    {
      icon: Briefcase,
      title: 'Government Employee Friendly',
      description: 'Special packages designed keeping LTC rules and regulations in mind'
    },
    {
      icon: Calendar,
      title: 'Flexible Dates',
      description: 'Choose travel dates as per your leave availability and LTC block year'
    },
    {
      icon: Users,
      title: 'Family-Oriented Packages',
      description: 'Packages suitable for families with children, covering all age groups'
    },
    {
      icon: Shield,
      title: 'Verified Bills',
      description: 'GST compliant invoices and authentic travel bills for hassle-free claims'
    },
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Fast documentation and booking process to match your travel timeline'
    }
  ];

  const ltcProcess = [
    {
      step: '1',
      title: 'Choose Your Destination',
      description: 'Select from our curated LTC packages based on your preference and budget'
    },
    {
      step: '2',
      title: 'Share LTC Details',
      description: 'Provide your employee details and LTC entitlement information'
    },
    {
      step: '3',
      title: 'Book & Travel',
      description: 'Confirm booking, receive itinerary, and enjoy your vacation'
    },
    {
      step: '4',
      title: 'Receive Documentation',
      description: 'Get all bills, vouchers, and certificates for your LTC claim submission'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1760630101462-bddef911828c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMGRlc3RpbmF0aW9uJTIwSW5kaWF8ZW58MXx8fHwxNzcxOTMyMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-[#F15A29] px-4 py-2 rounded-full text-sm font-bold">
                LEAVE TRAVEL CONCESSION
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              LTC Tours for Government Employees
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Complete LTC packages with documentation support for hassle-free travel reimbursement
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://wa.me/919226339969?text=I%20want%20LTC%20tour%20package%20details" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp for LTC Packages
              </a>
              <a
                href="#ltc-packages"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all border-2 border-white"
              >
                Browse Packages
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is LTC Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Leave Travel Concession (LTC)?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Leave Travel Concession (LTC) is a tax benefit provided to government employees and some private sector employees, 
              allowing them to claim reimbursement for travel expenses incurred during their vacation. The concession can be 
              claimed for travel within India for self and family members.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#1E88E5]">How Samaz Holidays Helps</h3>
              <p className="text-gray-700 text-lg mb-4">
                We understand the documentation requirements for LTC claims. Our specialized LTC packages include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Complete travel bills and vouchers</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>GST compliant invoices</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Hotel accommodation certificates</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Transport bills (train/flight/bus)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Tour completion certificate</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Guidance for claim submission</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LTC Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our LTC Packages?</h2>
            <p className="text-gray-600 text-lg">Hassle-free travel with complete documentation support</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ltcBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-[#1E88E5] transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-[#1E88E5]/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-[#1E88E5]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LTC Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Simple 4-step process for your LTC tour booking</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {ltcProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E88E5] to-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < ltcProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-6">
                    <div className="text-[#1E88E5] text-3xl">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LTC Packages */}
      <section id="ltc-packages" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our LTC Tour Packages</h2>
            <p className="text-gray-600 text-lg">
              Curated destinations perfect for LTC claims with complete documentation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ltcPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
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

      {/* Important Information */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Important LTC Information</h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1E88E5] rounded-full mt-2 flex-shrink-0" />
                <p>LTC can be availed once in a block of 2 years for anywhere in India</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1E88E5] rounded-full mt-2 flex-shrink-0" />
                <p>Eligible family members include spouse, children, and dependent parents/siblings</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1E88E5] rounded-full mt-2 flex-shrink-0" />
                <p>Only travel expenses are reimbursable, not food or accommodation (unless specified by department)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1E88E5] rounded-full mt-2 flex-shrink-0" />
                <p>Proper bills and documents must be submitted within the prescribed time limit</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1E88E5] rounded-full mt-2 flex-shrink-0" />
                <p>We provide all necessary documentation as per government LTC claim requirements</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong className="text-[#F15A29]">Note:</strong> LTC rules may vary by organization. 
                Please verify your specific entitlements with your accounts department before booking. 
                We recommend consulting with us for customized packages that match your LTC eligibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1E88E5] to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plan Your LTC Tour Today!
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Get expert assistance for your LTC travel planning and documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919226339969?text=I%20need%20help%20with%20LTC%20tour%20booking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a 
                href="/contact"
                className="inline-block bg-[#F15A29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
              >
                Contact Our LTC Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">LTC FAQs</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What documents do you provide for LTC claims?',
                a: 'We provide complete travel bills, hotel invoices, transport bills, GST receipts, and tour completion certificate - everything needed for your LTC claim submission.'
              },
              {
                q: 'Can I customize the LTC package as per my budget?',
                a: 'Yes! We offer flexible LTC packages that can be customized to match your entitlement and budget. Contact us to discuss your specific requirements.'
              },
              {
                q: 'How soon will I receive the LTC documents?',
                a: 'All bills and certificates are provided immediately after tour completion. Digital copies are shared via email/WhatsApp, and originals are couriered if needed.'
              },
              {
                q: 'Do you handle transport bookings (train/flight)?',
                a: 'Yes, we can arrange train/flight tickets as per your LTC entitlement. We provide proper bills for the same for reimbursement.'
              },
              {
                q: 'Is there any group discount for LTC tours?',
                a: 'Yes! If multiple government employees are traveling together, we offer special group discounts. Contact us for details.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="font-bold text-lg mb-3 text-[#1E88E5]">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

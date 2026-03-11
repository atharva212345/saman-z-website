import { motion } from 'motion/react';
import { Award, Users, Globe, Heart, Shield, Clock, Target, TrendingUp, MapPin, Mail, MessageSquare, Phone } from 'lucide-react';
import logo from '../../assets/f566cac14587ed2c884029d5929b36c2548533a7.png';
import gauravImage from '../../assets/d163a2a3b3d3499c03c7db7888cb7481db4c9952.png';
import sameerImage from '../../assets/0bb6eea579a30a27c8476d73b4e3448a62050591.png';
import abhinavImage from '../../assets/d16804554d1952d365efea0de4a7255a0114d8de.png';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E88E5] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F15A29] rounded-full blur-3xl"></div>
        </div>
        
        {/* Background Logo */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-5"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src={logo} 
            alt="Samanz Holidays Logo" 
            className="h-[350px] w-auto object-contain filter grayscale"
          />
        </motion.div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              About Samanz Holidays
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Creating Memorable Travel Experiences Since 2021
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Message from Our Managing Partners
              </motion.h2>
              
              <motion.div 
                className="space-y-4 text-gray-600 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>
                  Dear Travelers,
                </p>
                <p>
                  It gives me immense pleasure to welcome you to Samanz Holidays. Since our inception in 2021, 
                  we have been driven by a singular passion – to make travel accessible, affordable, and absolutely 
                  unforgettable for every Indian family, student, and professional.
                </p>
                <p>
                  Coming from Pune, we understand the aspirations of middle-class families who dream of exploring 
                  the world but are often constrained by budget concerns. That's why we've built Samanz Holidays 
                  on the foundation of <strong>budget-friendly excellence</strong> – proving that you don't need 
                  to compromise on quality to travel within your means.
                </p>
                <p>
                  Our special focus on <strong>educational tours</strong> stems from my belief that learning 
                  happens best outside the classroom. We take immense pride in ensuring every student trip is 
                  not just safe and well-organized, but also enriching and transformative.
                </p>
                <p>
                  Whether you're a couple planning your honeymoon, a school organizing an excursion, a corporate 
                  team seeking a retreat, or a family wanting to explore new destinations – we promise personalized 
                  attention, transparent pricing, and memories that last a lifetime.
                </p>
                <p>
                  Our team works tirelessly to curate authentic travel experiences, negotiate the best rates, 
                  and provide 24/7 support so you can travel with complete peace of mind. Every package is 
                  designed with care, every itinerary is crafted with expertise, and every traveler is treated 
                  like family.
                </p>
                <p className="font-semibold text-gray-800">
                  Thank you for trusting us with your travel dreams. We look forward to being part of your 
                  journey and creating beautiful memories together.
                </p>
                <p className="italic">
                  Travel not just to see the world, but to discover yourself.
                </p>
                <div className="pt-4">
                  <p className="font-bold text-gray-800">Warm regards,</p>
                  <p className="font-bold text-[#1E88E5] text-xl mt-1">Abhinav Ambekar, Gaurav Bhutada & Sameer Daund</p>
                  <p className="text-gray-600">Managing Partners, Samanz Holidays</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-4">
                Samanz Holidays is a premier travel company based in Pune, specializing in creating 
                unforgettable travel experiences for individuals, families, educational institutions, 
                and corporate groups.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Since our establishment in 2021, we have successfully served over 10,000+ travelers, 
                offering budget-friendly packages without compromising on quality and experience.
              </p>
              <p className="text-gray-600 text-lg">
                Our expertise spans across domestic and international destinations, with specialized 
                services for educational excursions, honeymoon packages, religious tours, and 
                customized FIT travel experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop" 
                alt="Travel"
                className="rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop" 
                alt="Destinations"
                className="rounded-2xl shadow-lg mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Target className="w-12 h-12 text-[#1E88E5] mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To become India's most trusted and preferred travel partner, recognized for creating meaningful, safe, and budget-friendly travel experiences. At Samanz Holidays, we aspire to inspire people to explore, learn, and connect through travel, while building a reputation for excellence, reliability, and outstanding customer satisfaction in the tourism industry. ✈️🌍
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <motion.div
                initial={{ rotate: 10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <TrendingUp className="w-12 h-12 text-[#F15A29] mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                At Samanz Holidays, our mission is to provide safe, affordable, and high-quality travel experiences that create memorable journeys for our customers. We specialize in educational tours and well-organized group travel, promoting learning, cultural exploration, and meaningful connections. With a strong focus on customer satisfaction, reliability, and professional service, we strive to make travel comfortable and accessible for everyone. Our goal is to grow as a trusted and key player in the travel and tourism industry, known for delivering exceptional and memorable travel experiences. ✈️
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Samaz */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Samanz Holidays?</h2>
            <p className="text-gray-600 text-lg">Your trusted travel partner with expertise and dedication</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Budget-Friendly Packages',
                description: 'We believe travel should be accessible to everyone. Our packages are designed to offer maximum value without compromising quality.'
              },
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Your safety is our priority. We ensure all tours, especially educational excursions, meet the highest safety standards.'
              },
              {
                icon: Users,
                title: 'Educational Tour Specialists',
                description: 'Specialized expertise in organizing safe, educational, and memorable school and college excursions.'
              },
              {
                icon: Globe,
                title: 'Diverse Destinations',
                description: 'From Kashmir to Kanyakumari, Thailand to Europe - we cover a wide range of domestic and international destinations.'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock customer support via WhatsApp and phone to assist you before, during, and after your journey.'
              },
              {
                icon: Award,
                title: 'Experienced Team',
                description: 'Our team of travel experts brings years of experience in crafting perfect itineraries and handling group travel logistics.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <motion.div 
                  className="w-14 h-14 bg-[#1E88E5]/10 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-7 h-7 text-[#1E88E5]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 text-lg">Experienced travel professionals dedicated to your perfect journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sameer Daund */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={sameerImage}
                  alt="Sameer Daund"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Sameer Daund</h3>
                <p className="text-[#1E88E5] font-semibold mb-3">Founding Partner</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  With 14+ years of hands-on experience, Sameer specializes in train & domestic air ticketing, FIT domestic tours, LTC packages, and group tour management. He oversees financial operations and legal compliance, ensuring structured growth and transparency.
                </p>
              </div>
            </motion.div>

            {/* Abhinav Ambekar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={abhinavImage}
                  alt="Abhinav Ambekar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Abhinav Ambekar</h3>
                <p className="text-[#1E88E5] font-semibold mb-3">Co-Founder</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  With 14+ years in tourism, Abhinav specializes in customized FIT tours, LTC packages, and large group handling. A Business Management graduate, he brings operational excellence, strong ticketing skills, and financial expertise to ensure seamless travel experiences.
                </p>
              </div>
            </motion.div>

            {/* Gaurav Bhutada */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={gauravImage}
                  alt="Gaurav Bhutada"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Gaurav Bhutada</h3>
                <p className="text-[#1E88E5] font-semibold mb-3">Managing Partner</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  With 8+ years of experience and IATA Foundation Certification, Gaurav specializes in international FIT tours, visa processing, and global air ticketing. His technical proficiency and strategic approach drive Samanz Holidays' international expansion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">Milestones that define our commitment to excellence</p>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: '2021', title: 'Company Established', desc: 'Samanz Holidays was founded with a vision to make travel accessible and memorable for everyone.' },
              { year: '2022', title: 'Educational Tours Launch', desc: 'Specialized educational excursion services launched, serving 50+ schools and colleges.' },
              { year: '2023', title: '5,000+ Travelers Milestone', desc: 'Successfully served over 5,000 happy travelers across domestic and international destinations.' },
              { year: '2024', title: 'Expansion & Growth', desc: 'Expanded services to include corporate MICE, honeymoon packages, and religious tours.' },
              { year: '2025', title: '10,000+ Happy Travelers', desc: 'Reached the milestone of 10,000+ satisfied customers with 4.8★ average rating.' },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="flex gap-6"
              >
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-[#1E88E5] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md flex-1"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600 text-lg">We're here to help plan your perfect journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Office Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Office Address</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Samanz Holidays<br />
                    85 Joshi Wada, Ganjave Chowk,<br />
                    Shastri Road, Sadashiv Peth (Navi Peth),<br />
                    Pune-30, Maharashtra, India
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1E88E5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Call Us</h4>
                    <div className="space-y-1">
                      <a 
                        href="tel:+919226339969" 
                        className="block text-[#1E88E5] hover:underline text-base"
                      >
                        +91-9226339969
                      </a>
                      <a 
                        href="tel:+918308185186" 
                        className="block text-[#1E88E5] hover:underline text-base"
                      >
                        +91-8308185186
                      </a>
                      <a 
                        href="tel:+919970316066" 
                        className="block text-[#1E88E5] hover:underline text-base"
                      >
                        +91-9970316066
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Mon-Sat: 9 AM - 8 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F15A29]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#F15A29]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                    <a 
                      href="mailto:booking@samanzholidays.com" 
                      className="text-[#1E88E5] hover:underline text-base"
                    >
                      booking@samanzholidays.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/919226339969" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline text-base"
                    >
                      Chat with our travel experts
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Instant responses, 24/7 available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="https://wa.me/919226339969" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center px-6 py-4 rounded-xl font-semibold transition-colors"
                >
                  💬 Start Planning on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let us help you create memories that last a lifetime
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#F15A29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
            >
              💬 Start Planning on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
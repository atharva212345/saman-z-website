import { motion } from "motion/react";
import { InquiryForm } from "../components/InquiryForm";
import { Button } from "../components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactPage() {
  const offices = [
    {
      city: "Pune",
      address: "85 Joshi Wada, Ganjave Chowk, Shastri Road, Sadashiv Peth (Navi Peth), Pune-30, Maharashtra, India",
      email: "booking@samanzholidays.com",
      hours: "Mon - Sat: 10:00 AM - 7:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-100">We're here to help plan your perfect journey</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <InquiryForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">WhatsApp</h4>
                    <p className="text-gray-600">Chat with us instantly</p>
                    <p className="text-sm text-gray-500">Quick response guaranteed</p>
                  </div>
                </a>

                <a 
                  href="mailto:booking@samanzholidays.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">booking@samanzholidays.com</p>
                    <p className="text-sm text-gray-500">We'll reply within 24 hours</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-semibold">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Locations */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{office.city}</h3>
                </div>
                
                <div className="space-y-3 text-gray-600">
                  <p>{office.address}</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=85+Joshi+Wada+Ganjave+Chowk+Shastri+Road+Sadashiv+Peth+Pune+411030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full mt-6 bg-primary">
                    Get Directions
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Visit Our Pune Office</h3>
            <p className="text-gray-600 mb-4">
              85 Joshi Wada, Ganjave Chowk, Shastri Road, Sadashiv Peth (Navi Peth), Pune-30, Maharashtra, India
            </p>
            <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.511726745892!2d73.84755!3d18.51119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07961c8a039%3A0x8e6a1e8e0d9c0a6c!2sSadashiv%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Samanz Holidays - Pune Office Location"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=85+Joshi+Wada+Ganjave+Chowk+Shastri+Road+Sadashiv+Peth+Pune+411030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-primary">
                  Open in Google Maps
                </Button>
              </a>
              <a 
                href="https://wa.me/919226339969?text=I%20need%20directions%20to%20your%20office"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Ask for Directions on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How do I book a tour package?",
                a: "You can book through our website inquiry form, call us directly, or chat with us on WhatsApp. Our team will guide you through the booking process."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, UPI, credit/debit cards, and cheques. Flexible payment plans available for group bookings."
              },
              {
                q: "Is travel insurance included?",
                a: "Basic travel insurance is included in our packages. You can opt for comprehensive coverage at additional cost."
              },
              {
                q: "Can I customize my tour package?",
                a: "Absolutely! We specialize in customized itineraries. Use our trip planner or contact us to create your perfect journey."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
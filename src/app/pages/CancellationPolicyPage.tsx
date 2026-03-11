import { motion } from 'motion/react';
import { AlertCircle, Clock, CreditCard, Phone, Mail } from 'lucide-react';

export function CancellationPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#1E88E5] to-blue-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation & Refund Policy</h1>
            <p className="text-xl text-gray-100">
              Clear and transparent cancellation terms for your peace of mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 bg-amber-50 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-2">Important Notice</h3>
              <p className="text-amber-800">
                Please read our cancellation policy carefully before making a booking. Cancellation charges vary based on tour type, 
                timing, and service providers. We recommend purchasing travel insurance for better protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-gray-600"
          >
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last Updated: February 18, 2026
            </p>
          </motion.div>

          <div className="space-y-12">
            
            {/* General Cancellation Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">General Cancellation Policy</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-[#1E88E5]">Domestic Tours</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">Before 30 days:</span>
                        <span>10% of total tour cost</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">15-29 days before:</span>
                        <span>25% of total tour cost</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">8-14 days before:</span>
                        <span>50% of total tour cost</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">0-7 days before:</span>
                        <span>100% of total tour cost (No refund)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1E88E5]">International Tours</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">Before 45 days:</span>
                        <span>15% of total tour cost</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">30-44 days before:</span>
                        <span>35% of total tour cost</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">15-29 days before:</span>
                        <span>60% of total tour cost</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-semibold min-w-[180px]">0-14 days before:</span>
                        <span>100% of total tour cost (No refund)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Special Tour Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Special Tour Categories</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-[#1E88E5]">Educational Tours</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#1E88E5]">•</span>
                      <span>Before 60 days: 10% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#1E88E5]">•</span>
                      <span>30-59 days: 30% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#1E88E5]">•</span>
                      <span>15-29 days: 50% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#1E88E5]">•</span>
                      <span>Less than 15 days: 100% (No refund)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <h3 className="text-xl font-bold mb-4 text-[#F15A29]">Honeymoon Packages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-[#F15A29]">•</span>
                      <span>Before 30 days: 15% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#F15A29]">•</span>
                      <span>15-29 days: 40% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#F15A29]">•</span>
                      <span>8-14 days: 70% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#F15A29]">•</span>
                      <span>Less than 8 days: 100% (No refund)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-600">Corporate Tours/MICE</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Customized cancellation terms apply</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Discussed and agreed upon during booking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Minimum 45 days notice recommended</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Contact us for group-specific terms</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Religious/Pilgrimage Tours</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>Before 40 days: 10% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>20-39 days: 35% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>10-19 days: 60% cancellation charges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>Less than 10 days: 100% (No refund)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Refund Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Refund Process</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <CreditCard className="w-8 h-8 text-[#1E88E5] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">How Refunds are Processed</h3>
                    <div className="space-y-4 text-gray-700">
                      <p><strong>1. Cancellation Request:</strong> Submit your cancellation request via email or WhatsApp with booking details.</p>
                      <p><strong>2. Verification:</strong> Our team will verify your booking and calculate applicable cancellation charges.</p>
                      <p><strong>3. Refund Calculation:</strong> Refund amount will be calculated after deducting cancellation charges and non-refundable expenses.</p>
                      <p><strong>4. Processing Time:</strong> Refunds will be processed within 7-10 working days from the date of cancellation approval.</p>
                      <p><strong>5. Refund Method:</strong> Refunds will be credited to the original payment method (bank transfer, UPI, card, etc.).</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Important Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Important Terms & Conditions</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
                <div className="space-y-4 text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-[#F15A29] text-2xl font-bold">•</span>
                    <p><strong>Non-Refundable Expenses:</strong> Visa fees, travel insurance, flight tickets (as per airline policy), and other non-refundable service charges are not included in refund calculations.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F15A29] text-2xl font-bold">•</span>
                    <p><strong>Peak Season Cancellations:</strong> Tours during peak seasons (December-January, April-May) may have stricter cancellation policies. Specific terms will be mentioned in your booking confirmation.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F15A29] text-2xl font-bold">•</span>
                    <p><strong>Group Bookings:</strong> For group bookings (10+ people), special cancellation terms may apply as agreed in the booking contract.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F15A29] text-2xl font-bold">•</span>
                    <p><strong>No-Show Policy:</strong> In case of no-show on the departure date, 100% cancellation charges will apply with no refund.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F15A29] text-2xl font-bold">•</span>
                    <p><strong>Force Majeure:</strong> In case of cancellations due to natural disasters, political unrest, pandemics, or other unforeseen circumstances beyond our control, standard cancellation charges apply unless specified otherwise.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F15A29] text-2xl font-bold">•</span>
                    <p><strong>Partial Cancellations:</strong> For group bookings, if some members cancel while others continue, cancellation charges apply only to cancelled members.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F15A29] text-2xl font-bold">•</span>
                    <p><strong>Amendments vs Cancellations:</strong> Minor changes to booking (date changes, room upgrades) may incur amendment fees instead of full cancellation charges. Contact us for details.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Travel Insurance Recommendation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">💡 Travel Insurance Recommendation</h3>
                <p className="text-lg mb-4">
                  We strongly recommend purchasing comprehensive travel insurance that covers trip cancellations, medical emergencies, 
                  and unforeseen circumstances. This can provide additional protection beyond our standard cancellation policy.
                </p>
                <p className="text-green-100">
                  Ask our team about travel insurance options when making your booking.
                </p>
              </div>
            </motion.div>

            {/* Contact for Cancellations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Need to Cancel Your Booking?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                  <Phone className="w-10 h-10 text-[#1E88E5] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Call or WhatsApp</h3>
                  <p className="text-gray-600 mb-4">
                    Contact us immediately for cancellation assistance
                  </p>
                  <a 
                    href="https://wa.me/919226339969" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    💬 WhatsApp: +91-9226339969
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                  <Mail className="w-10 h-10 text-[#F15A29] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Email Us</h3>
                  <p className="text-gray-600 mb-4">
                    Send cancellation request with booking details
                  </p>
                  <a 
                    href="mailto:booking@samanzholidays.com"
                    className="inline-block bg-[#F15A29] hover:bg-[#d94d1f] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    📧 booking@samanzholidays.com
                  </a>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <p className="text-gray-700">
                  <strong>Required Information for Cancellation:</strong> Please provide your booking reference number, 
                  full name, tour package name, departure date, and reason for cancellation when contacting us.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            This cancellation policy is subject to change without prior notice. The terms mentioned in your booking confirmation 
            will be applicable. For any clarification or special requests, please contact our customer support team.
          </p>
        </div>
      </section>
    </div>
  );
}

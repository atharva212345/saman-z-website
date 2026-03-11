import { motion } from 'motion/react';
import { FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export function TermsConditionsPage() {
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
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
            </div>
            <p className="text-xl text-gray-100">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-gray-200 mt-3">Last Updated: February 18, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-[#1E88E5] p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-0">
                Welcome to Samaz Holidays. By accessing our website or using our services, you agree to be bound 
                by these Terms and Conditions. If you do not agree with any part of these terms, please do not 
                use our services.
              </p>
            </div>

            {/* Booking and Payment */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">1. Booking and Payment Terms</h2>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Booking Confirmation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>All bookings are subject to availability and confirmation by Samaz Holidays</li>
                <li>A booking is confirmed only upon receipt of the required deposit/advance payment</li>
                <li>Booking confirmation will be sent via email or WhatsApp within 24-48 hours</li>
                <li>Prices are subject to change until the booking is confirmed with payment</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Payment Schedule</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Domestic Tours:</strong> 30% advance at booking, balance 15 days before departure</li>
                <li><strong>International Tours:</strong> 50% advance at booking, balance 30 days before departure</li>
                <li><strong>Educational Tours:</strong> Payment terms as per institutional agreement</li>
                <li><strong>Last-minute bookings:</strong> Full payment required at the time of booking</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Accepted Payment Methods</h3>
              <p className="text-gray-700">
                We accept payments via bank transfer, UPI, credit/debit cards, and online payment gateways. 
                All payments are processed securely.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F15A29]/10 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-[#F15A29]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">2. Cancellation and Refund Policy</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Cancellation charges apply as follows from the date of departure:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-4">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Days Before Departure</th>
                      <th className="px-4 py-3 text-left font-semibold">Cancellation Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-700">45+ days</td>
                      <td className="px-4 py-3 text-gray-700">10% of tour cost</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">30-44 days</td>
                      <td className="px-4 py-3 text-gray-700">25% of tour cost</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">15-29 days</td>
                      <td className="px-4 py-3 text-gray-700">50% of tour cost</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">7-14 days</td>
                      <td className="px-4 py-3 text-gray-700">75% of tour cost</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">Less than 7 days</td>
                      <td className="px-4 py-3 text-gray-700">100% of tour cost (No refund)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-gray-700 mb-2"><strong>Important Notes:</strong></p>
                <ul className="text-gray-700 space-y-1 mb-0">
                  <li>Peak season tours (December, summer vacations) may have stricter cancellation policies</li>
                  <li>Non-refundable components (visa fees, flight tickets) will be deducted from refunds</li>
                  <li>Refunds will be processed within 15-20 working days</li>
                  <li>Cancellations must be submitted in writing via email</li>
                </ul>
              </div>
            </div>

            {/* Travel Documents */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">3. Travel Documents and Visa Requirements</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Travelers are responsible for obtaining valid passports, visas, and other required documents</li>
                <li>Passport must be valid for at least 6 months from the date of return</li>
                <li>Visa assistance is provided, but approval is subject to embassy/consulate discretion</li>
                <li>Samaz Holidays is not liable for visa rejections or delays</li>
                <li>Ensure all information provided for booking matches your travel documents exactly</li>
              </ul>
            </div>

            {/* Tour Inclusions/Exclusions */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">4. Tour Inclusions and Exclusions</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Typically Included</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Accommodation as per itinerary (double/triple sharing)</li>
                <li>Meals as specified in the package</li>
                <li>Transportation as per itinerary</li>
                <li>Sightseeing and entrance fees mentioned in the package</li>
                <li>Services of a tour manager/guide (for group tours)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Typically NOT Included</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Airfare/train tickets (unless specifically mentioned)</li>
                <li>Travel insurance</li>
                <li>Personal expenses (laundry, phone calls, tips, etc.)</li>
                <li>Meals not mentioned in the itinerary</li>
                <li>Visa fees and passport charges</li>
                <li>Any services not specifically mentioned in inclusions</li>
                <li>GST and other applicable taxes (unless mentioned)</li>
              </ul>
            </div>

            {/* Changes and Modifications */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">5. Itinerary Changes and Modifications</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Samaz Holidays reserves the right to modify itineraries due to unforeseen circumstances</li>
                <li>Changes may occur due to weather, political situations, natural disasters, or operational reasons</li>
                <li>We will provide the best possible alternative arrangements</li>
                <li>No refunds will be provided for minor itinerary changes</li>
                <li>Customer-requested changes are subject to availability and additional charges</li>
              </ul>
            </div>

            {/* Health and Safety */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">6. Health, Safety, and Insurance</h2>
              </div>
              
              <ul className="text-gray-700 space-y-2">
                <li><strong>Travel Insurance:</strong> Highly recommended for all tours, mandatory for international tours</li>
                <li><strong>Medical Fitness:</strong> Travelers must be medically fit to undertake the tour</li>
                <li><strong>Pre-existing Conditions:</strong> Must be declared at the time of booking</li>
                <li><strong>Vaccinations:</strong> Travelers are responsible for required vaccinations</li>
                <li><strong>Emergency Contacts:</strong> Must be provided at the time of booking</li>
                <li><strong>COVID-19:</strong> Compliance with current health protocols is mandatory</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mt-4">
                <p className="text-gray-700 mb-0">
                  <strong>Important:</strong> Samaz Holidays is not liable for medical emergencies, accidents, 
                  or health issues during the tour. Travelers participate at their own risk.
                </p>
              </div>
            </div>

            {/* Liability and Responsibilities */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">7. Liability and Responsibilities</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Company Liability</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Samaz Holidays acts as an agent for hotels, transport, and other service providers</li>
                <li>We are not liable for delays, accidents, loss, injury, or damage caused by third-party providers</li>
                <li>Force majeure events (natural disasters, strikes, political unrest) are beyond our control</li>
                <li>Our liability is limited to the cost of the tour package</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Traveler Responsibilities</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Follow tour rules, schedules, and instructions from tour managers</li>
                <li>Respect local laws, customs, and cultures</li>
                <li>Be punctual for all scheduled activities and departures</li>
                <li>Take care of personal belongings; we are not responsible for lost items</li>
                <li>Behave responsibly and not endanger yourself or others</li>
                <li>Comply with hotel check-in/check-out times and policies</li>
              </ul>
            </div>

            {/* Baggage and Personal Belongings */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">8. Baggage and Personal Belongings</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Follow airline/transport provider baggage allowance limits</li>
                <li>Excess baggage charges are the traveler's responsibility</li>
                <li>Keep valuables, documents, and medicines in carry-on luggage</li>
                <li>Samaz Holidays is not responsible for lost, stolen, or damaged baggage</li>
                <li>Report any baggage issues immediately to the airline/service provider</li>
              </ul>
            </div>

            {/* Disputes and Complaints */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">9. Complaints and Dispute Resolution</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Any complaints during the tour must be reported immediately to the tour manager</li>
                <li>Written complaints should be submitted within 7 days of tour completion</li>
                <li>We will investigate and respond within 15 working days</li>
                <li>Disputes will be resolved amicably through mutual discussion</li>
                <li>Legal jurisdiction: Courts of Pune, Maharashtra, India</li>
              </ul>
            </div>

            {/* Photography and Marketing */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">10. Photography and Marketing Use</h2>
              <p className="text-gray-700 leading-relaxed">
                By participating in our tours, you consent to Samaz Holidays using photographs or videos taken 
                during the tour for promotional and marketing purposes on our website, social media, and 
                marketing materials. If you do not wish to be photographed, please inform us in writing.
              </p>
            </div>

            {/* Special Requirements */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">11. Special Requests and Requirements</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Special dietary requirements, room preferences, and accessibility needs must be mentioned at booking</li>
                <li>We will make reasonable efforts to accommodate requests but cannot guarantee fulfillment</li>
                <li>Additional charges may apply for special arrangements</li>
                <li>Requests are subject to availability from service providers</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these 
                terms or your use of our services shall be subject to the exclusive jurisdiction of the courts 
                in Pune, Maharashtra, India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">13. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Samaz Holidays reserves the right to modify these Terms and Conditions at any time. Changes 
                will be effective immediately upon posting on our website. Continued use of our services 
                constitutes acceptance of modified terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#1E88E5]/10 to-blue-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Samaz Holidays</strong></p>
                <p>Email: <a href="mailto:booking@samanzholidays.com" className="text-[#1E88E5] hover:underline">booking@samanzholidays.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/919226339969" className="text-[#1E88E5] hover:underline">+91-9226339969</a></p>
                <p>Address: Pune, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

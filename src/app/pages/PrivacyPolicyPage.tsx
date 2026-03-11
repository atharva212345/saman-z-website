import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

export function PrivacyPolicyPage() {
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
              <Shield className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-100">
              Your privacy is important to us. Learn how we protect your data.
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
                At Samaz Holidays, we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">1. Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed">
                When you book a tour or contact us, we may collect:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Full name, email address, phone number</li>
                <li>Mailing address and billing information</li>
                <li>Date of birth, gender, and passport details (for international tours)</li>
                <li>Emergency contact information</li>
                <li>Dietary restrictions and special requirements</li>
                <li>Payment and transaction information</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
              <ul className="text-gray-700 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms used</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F15A29]/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#F15A29]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">2. How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Service Delivery:</strong> To process bookings, arrange tours, and provide customer support</li>
                <li><strong>Communication:</strong> To send booking confirmations, itineraries, and travel updates</li>
                <li><strong>Marketing:</strong> To send newsletters, promotional offers, and travel deals (with your consent)</li>
                <li><strong>Improvement:</strong> To improve our website, services, and customer experience</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li><strong>Safety:</strong> To ensure the safety and security of our travelers</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">3. Information Sharing and Disclosure</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> Hotels, airlines, transport providers, and tour operators necessary for your trip</li>
                <li><strong>Payment Processors:</strong> Secure payment gateways to process your transactions</li>
                <li><strong>Government Authorities:</strong> When required by law or for visa processing</li>
                <li><strong>Business Partners:</strong> With your consent, for joint promotions or services</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-4">
                <p className="text-gray-700 mb-0">
                  <strong>We do not sell your personal information</strong> to third parties for their marketing purposes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F15A29]/10 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#F15A29]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">4. Data Security</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and encrypted databases</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data by authorized personnel only</li>
                <li>Staff training on data protection and privacy</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <h2 className="text-3xl font-bold mb-0">5. Your Rights and Choices</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700 mb-0">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:privacy@samanzholidays.com" className="text-[#1E88E5] hover:underline">
                    privacy@samanzholidays.com
                  </a>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze 
                website traffic, and understand user preferences. You can control cookies through your browser 
                settings, though disabling them may affect website functionality.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">7. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. For educational tours involving 
                minors, we collect information through parents, guardians, or educational institutions with proper 
                authorization.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">9. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
                Typically, booking data is retained for 7 years for accounting and legal purposes.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by 
                the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#1E88E5]/10 to-blue-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Samaz Holidays</strong></p>
                <p>Email: <a href="mailto:privacy@samanzholidays.com" className="text-[#1E88E5] hover:underline">privacy@samanzholidays.com</a></p>
                <p>Phone: <a href="tel:+919226339969" className="text-[#1E88E5] hover:underline">+91-9226339969</a></p>
                <p>Address: Pune, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

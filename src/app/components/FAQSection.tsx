import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book a tour package?",
      answer: "You can book instantly through WhatsApp at +91-9226339969, fill out our inquiry form, or call us directly. Our travel experts will guide you through the entire booking process and help customize your itinerary."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellation charges vary by package and season. Generally: 30+ days before departure: 10% charges, 15-30 days: 25% charges, 7-15 days: 50% charges, Less than 7 days: 75% charges. For exact terms, please refer to your booking confirmation."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes! We strongly recommend travel insurance and can assist you in getting comprehensive coverage including medical emergencies, trip cancellations, lost baggage, and more. Insurance costs vary based on destination and duration."
    },
    {
      question: "Are group discounts available?",
      answer: "Absolutely! We offer special discounts for groups of 10+ travelers, educational institutions, corporate teams, and wedding parties. Contact us for customized group quotes and exclusive benefits."
    },
    {
      question: "What documents do I need for international travel?",
      answer: "For international tours, you'll need a valid passport (minimum 6 months validity), visa (we provide assistance), travel insurance, and any destination-specific documents. We'll provide a complete checklist after booking."
    },
    {
      question: "Do you offer customized tour packages?",
      answer: "Yes! We specialize in creating personalized itineraries based on your preferences, budget, and interests. Use our 'Customize Trip' feature or contact us directly to design your dream vacation."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, mobile wallets, and bank transfers. EMI options are available for packages above ₹25,000. All transactions are 100% secure and encrypted."
    },
    {
      question: "Is there 24/7 support during the trip?",
      answer: "Yes, we provide round-the-clock support via WhatsApp and phone throughout your journey. Our emergency helpline is always available to assist you with any concerns or last-minute changes."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about traveling with us</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919226339969"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            💬 Chat with our travel experts
          </a>
        </div>
      </div>
    </section>
  );
}
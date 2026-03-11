import { Shield, Award, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustCertifications() {
  const certifications = [
    {
      icon: Shield,
      title: "Registered & Verified",
      description: "Government Approved Travel Agency",
      badge: "Est. 2021"
    },
    {
      icon: Award,
      title: "100% Safe Payments",
      description: "Secure Payment Gateway",
      badge: "SSL Secured"
    },
    {
      icon: CheckCircle,
      title: "Best Price Guarantee",
      description: "Lowest Prices or Money Back",
      badge: "Guaranteed"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round the Clock Assistance",
      badge: "Always Available"
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

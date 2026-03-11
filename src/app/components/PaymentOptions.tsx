import { motion } from "motion/react";
import { CreditCard, Smartphone, Banknote, Building2 } from "lucide-react";

export function PaymentOptions() {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Credit/Debit Cards",
      description: "All major cards accepted",
    },
    {
      icon: Smartphone,
      title: "UPI & Digital Wallets",
      description: "PhonePe, GPay, Paytm",
    },
    {
      icon: Banknote,
      title: "Cash on Office",
      description: "Visit our Pune office",
    },
    {
      icon: Building2,
      title: "Bank Transfer",
      description: "Direct NEFT/RTGS",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-orange/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Flexible Payment Options</h2>
          <p className="text-gray-600">
            Multiple secure payment methods for your convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-100"
              >
                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 flex-grow">{method.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-600">
            💳 EMI options available on selected packages • Safe & secure payments
          </p>
        </motion.div>
      </div>
    </section>
  );
}
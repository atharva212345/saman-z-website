import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsItem[];
}

export function WhyChooseUs({ whyChooseUs }: WhyChooseUsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Samanz Holidays?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your trusted partner for unforgettable travel experiences since 2021
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100 flex flex-col">
                  <div className="bg-gradient-to-br from-primary to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
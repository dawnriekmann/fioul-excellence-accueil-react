
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Euro, Truck, Smartphone, Award } from 'lucide-react';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Euro,
      title: "Économies garanties",
      description: "Jusqu'à 15% d'économies par rapport aux stations traditionnelles",
      stats: "15% d'économies",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Truck,
      title: "Livraison gratuite",
      description: "Livraison offerte dès 3000L commandés partout en France",
      stats: "Dès 3000L",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Commande en ligne",
      description: "Interface intuitive pour commander en quelques clics",
      stats: "24/7 disponible",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Fioul de haute qualité avec additifs anti-gel inclus",
      stats: "Certifié ISO",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Des avantages qui font la différence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profitez d'un service sur-mesure avec des bénéfices concrets pour votre budget et votre confort
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-6 text-white h-full shadow-xl`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                  <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-semibold">
                    {benefit.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

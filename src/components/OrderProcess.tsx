
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calculator, Truck, CheckCircle } from 'lucide-react';

const OrderProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const steps = [
    {
      icon: Calculator,
      number: "01",
      title: "Calculez votre prix",
      description: "Utilisez notre calculateur en ligne pour obtenir votre devis instantané selon vos besoins",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      number: "02", 
      title: "Confirmez votre commande",
      description: "Validez votre commande en ligne de manière sécurisée avec nos différents moyens de paiement",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Truck,
      number: "03",
      title: "Recevez votre fioul",
      description: "Livraison rapide sous 24-48h partout en France par nos équipes professionnelles",
      color: "from-green-500 to-green-600"
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
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Commandez votre fioul en 3 étapes simples
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-teal-200 to-blue-200 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-gray-800">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Commencer ma commande
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderProcess;

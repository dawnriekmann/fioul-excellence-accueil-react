
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Euro, Truck, Smartphone, Award } from 'lucide-react';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const benefits = [
    {
      icon: Euro,
      title: "Économies garanties",
      description: "Jusqu'à 15% d'économies par rapport aux stations traditionnelles",
      stats: "15% d'économies",
      color: "bg-green-600"
    },
    {
      icon: Truck,
      title: "Livraison gratuite",
      description: "Livraison offerte dès 3000L commandés partout en France",
      stats: "Dès 3000L",
      color: "bg-blue-600"
    },
    {
      icon: Smartphone,
      title: "Commande en ligne",
      description: "Interface intuitive pour commander en quelques clics",
      stats: "24/7 disponible",
      color: "bg-purple-600"
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Fioul de haute qualité avec additifs anti-gel inclus",
      stats: "Certifié ISO",
      color: "bg-orange-600"
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Des avantages qui font la différence
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Profitez d'un service sur-mesure avec des bénéfices concrets pour votre budget et votre confort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center"
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-800">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
              
              <div className={`mt-4 px-4 py-2 ${benefit.color} text-white rounded-full text-sm font-bold`}>
                {benefit.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Clock, Shield, Headphones, Fuel, Star } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Truck,
      title: "Livraison rapide",
      description: "Livraison dans toute la France sous 24-48h",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Service 24/7",
      description: "Commandez à tout moment, nous sommes toujours là",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Fioul certifié et contrôlé selon les normes européennes",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Headphones,
      title: "Support client",
      description: "Équipe dédiée pour répondre à toutes vos questions",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Fuel,
      title: "Prix compétitifs",
      description: "Meilleurs prix du marché avec transparence totale",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Star,
      title: "Satisfaction client",
      description: "Plus de 10 000 clients satisfaits nous font confiance",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Pourquoi choisir Fioul Excellence ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les avantages de notre service premium pour votre approvisionnement en fioul
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

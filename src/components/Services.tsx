
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
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Service 24/7",
      description: "Commandez à tout moment, nous sommes toujours là",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Fioul certifié et contrôlé selon les normes européennes",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Headphones,
      title: "Support client",
      description: "Équipe dédiée pour répondre à toutes vos questions",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Fuel,
      title: "Prix compétitifs",
      description: "Meilleurs prix du marché avec transparence totale",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Star,
      title: "Satisfaction client",
      description: "Plus de 10 000 clients satisfaits nous font confiance",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Pourquoi choisir Fioul Excellence ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez tous les avantages de notre service premium pour votre approvisionnement en fioul
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Neumorphic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-slate-300/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent rounded-2xl"></div>
              
              <div className="relative p-8 space-y-4">
                {/* Icon with gradient background */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

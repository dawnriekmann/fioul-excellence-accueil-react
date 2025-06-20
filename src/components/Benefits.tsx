
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
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      icon: Truck,
      title: "Livraison gratuite",
      description: "Livraison offerte dès 3000L commandés partout en France",
      stats: "Dès 3000L",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "Commande en ligne",
      description: "Interface intuitive pour commander en quelques clics",
      stats: "24/7 disponible",
      gradient: "from-purple-500 via-violet-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Fioul de haute qualité avec additifs anti-gel inclus",
      stats: "Certifié ISO",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Des avantages qui font la différence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Profitez d'un service sur-mesure avec des bénéfices concrets pour votre budget et votre confort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative overflow-hidden"
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-10 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
              <div className="absolute inset-0 rounded-3xl shadow-xl shadow-slate-200/30 group-hover:shadow-2xl group-hover:shadow-slate-300/40 transition-all duration-500"></div>

              <div className="relative p-8 flex flex-col items-center text-center space-y-6 min-h-[300px] justify-center">
                {/* Icon with animated background */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 scale-150 transition-all duration-500`}></div>
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
                
                <div className={`px-6 py-3 bg-gradient-to-r ${benefit.gradient} text-white rounded-full text-sm font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {benefit.stats}
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

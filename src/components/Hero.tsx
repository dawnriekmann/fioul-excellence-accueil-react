
import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Shield, Truck } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-300/20 to-blue-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-slate-800 via-blue-900 to-teal-800 bg-clip-text text-transparent">
                  Votre fioul de qualité
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  livré chez vous
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Découvrez nos prix compétitifs et notre service de livraison rapide partout en France. 
                Calculez votre prix instantanément et commandez en ligne.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none">
              {[
                { icon: Shield, text: "Qualité garantie", color: "from-blue-500 to-blue-600" },
                { icon: Truck, text: "Livraison rapide", color: "from-teal-500 to-teal-600" },
                { icon: Fuel, text: "Prix compétitif", color: "from-orange-500 to-orange-600" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-slate-50 rounded-2xl shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-slate-300/30 transition-all duration-300"></div>
                  <div className="relative flex flex-col items-center p-6 space-y-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 text-center">{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Price Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md mx-auto lg:max-w-none"
          >
            <PriceCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

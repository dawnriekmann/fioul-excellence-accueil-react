
import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Shield, Truck } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-100/30 rounded-full blur-2xl opacity-60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-slate-800">
                  Votre fioul de qualité
                </span>
                <br />
                <span className="text-teal-700">
                  livré chez vous
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Découvrez nos prix compétitifs et notre service de livraison rapide partout en France. 
                Calculez votre prix instantanément et commandez en ligne.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none">
              {[
                { icon: Shield, text: "Qualité garantie", color: "bg-blue-600" },
                { icon: Truck, text: "Livraison rapide", color: "bg-teal-600" },
                { icon: Fuel, text: "Prix compétitif", color: "bg-orange-600" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 text-center">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Price Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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


import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Shield, Truck } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-teal-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 pb-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Votre fioul de qualité
                <span className="text-teal-600 block">livré chez vous</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Découvrez nos prix compétitifs et notre service de livraison rapide partout en France. 
                Calculez votre prix instantanément et commandez en ligne.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:max-w-none">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md min-h-[100px] justify-center"
              >
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Qualité garantie</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md min-h-[100px] justify-center"
              >
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Livraison rapide</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md min-h-[100px] justify-center"
              >
                <Fuel className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Prix compétitif</span>
              </motion.div>
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


import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Shield, Truck, Phone } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="flex items-center space-x-3">
            <Fuel className="w-8 h-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-gray-800">Fioul Excellence</h1>
          </div>
          <div className="flex items-center space-x-2 text-teal-600">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">01 23 45 67 89</span>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Votre fioul de qualité
                <span className="text-teal-600 block">livré chez vous</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez nos prix compétitifs et notre service de livraison rapide partout en France. 
                Calculez votre prix instantanément et commandez en ligne.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
              >
                <Shield className="w-8 h-8 text-teal-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Qualité garantie</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
              >
                <Truck className="w-8 h-8 text-teal-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Livraison rapide</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
              >
                <Fuel className="w-8 h-8 text-teal-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Prix compétitif</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Price Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PriceCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

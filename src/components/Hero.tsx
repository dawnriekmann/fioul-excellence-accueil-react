
import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Shield, Truck, Phone, Star, CheckCircle, Clock, Award } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 lg:py-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/40 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-200/40 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl opacity-60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            <Clock className="w-4 h-4 mr-2" />
            OFFRE LIMITÉE - Prix bloqué pendant 7 jours
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                <span className="text-red-600 block">
                  ÉCONOMISEZ
                </span>
                <span className="text-orange-600 block">
                  jusqu'à 15%
                </span>
                <span className="text-gray-800 text-3xl lg:text-4xl block">
                  sur votre fioul
                </span>
              </h1>
              
              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-lg inline-block">
                <p className="text-lg font-bold text-green-800">
                  🚚 Livraison GRATUITE dès 3000L + Prix garanti le plus bas
                </p>
              </div>

              <p className="text-xl text-gray-700 font-semibold">
                Commandez aujourd'hui, économisez demain !<br />
                <span className="text-orange-600">Livraison garantie sous 48h</span>
              </p>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="font-semibold">4.9/5 sur 12,847 avis</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="font-semibold">+50,000 clients satisfaits</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Award className="w-4 h-4 text-blue-500 mr-1" />
                <span className="font-semibold">Certifié ISO 9001</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button className="w-full lg:w-auto bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black text-xl px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                🧮 CALCULER MON PRIX - GRATUIT
              </button>
              
              <div className="flex flex-col lg:flex-row gap-4">
                <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler : 0800 XX XX XX
                </button>
                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-600">
                    ⏱️ Devis gratuit en 30 secondes<br />
                    💰 Sans engagement
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MD
                </div>
                <div>
                  <p className="text-gray-800 italic">
                    "Excellent service, livré le lendemain comme promis. Prix vraiment compétitif !"
                  </p>
                  <p className="text-sm text-gray-600 font-semibold mt-1">
                    Marie D. - Lyon ⭐⭐⭐⭐⭐
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "Qualité premium", color: "bg-blue-600", emoji: "🛡️" },
                { icon: Truck, text: "Livraison 24-48h", color: "bg-green-600", emoji: "🚚" },
                { icon: Fuel, text: "Prix imbattable", color: "bg-orange-600", emoji: "💰" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border-2 border-transparent hover:border-orange-200"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {feature.emoji}
                    </div>
                    <span className="text-sm font-bold text-gray-800 text-center">{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Enhanced Price Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
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

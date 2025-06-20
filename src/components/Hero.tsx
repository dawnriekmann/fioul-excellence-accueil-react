
import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Shield, Truck, Star, Clock, CheckCircle } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 lg:py-16">
      {/* Enhanced background elements for visual impact */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Enhanced for conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Trust badge */}
            <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm font-semibold text-green-700">
              <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
              Über 10.000 zufriedene Kunden
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900 block">
                  Fioul Premium
                </span>
                <span className="text-teal-600 block">
                  in 24h geliefert
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sparen Sie bis zu <span className="text-teal-600 font-bold">15%</span> gegenüber lokalen Anbietern. 
                <span className="block mt-1">Kostenlose Lieferung ab 3000L!</span>
              </p>

              {/* Urgency element */}
              <div className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 text-orange-700 font-semibold">
                <Clock className="w-4 h-4 mr-2" />
                Heute bestellt, morgen geliefert
              </div>
            </div>

            {/* Enhanced Feature Cards with conversion elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:max-w-none">
              {[
                { icon: Shield, text: "TÜV-geprüfte Qualität", color: "bg-blue-600", badge: "Garantiert" },
                { icon: Truck, text: "Express-Lieferung", color: "bg-teal-600", badge: "24h" },
                { icon: Fuel, text: "Bestpreis-Garantie", color: "bg-orange-600", badge: "-15%" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 relative overflow-hidden"
                >
                  {/* Badge */}
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    {feature.badge}
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3 pt-2">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 text-center leading-tight">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust elements */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
              <div className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Geld-zurück-Garantie
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                SSL-verschlüsselt
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Sichere Zahlung
              </div>
            </div>
          </motion.div>

          {/* Right Content - Enhanced Price Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* CTA Header for calculator */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Kostenloses Sofort-Angebot
              </h3>
              <p className="text-slate-600">
                Erhalten Sie Ihren individuellen Preis in Sekunden
              </p>
            </div>
            
            <PriceCalculator />
            
            {/* Additional trust element below calculator */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center text-sm text-slate-500">
                <Shield className="w-4 h-4 mr-2" />
                100% unverbindlich • Keine versteckten Kosten
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

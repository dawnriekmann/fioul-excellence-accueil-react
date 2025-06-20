import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Shield, Truck, Star, Clock, CheckCircle } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 lg:py-16">
      {/* Enhanced background elements for visual impact */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced for conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Trust badge */}
            <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm font-semibold text-green-700">
              <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
              Plus de 100 000 clients satisfaits
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900 block">
                  Fioul Premium
                </span>
                <span className="text-teal-600 block">
                  livré en 2-4 jours
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Économisez jusqu'à <span className="text-teal-600 font-bold">15%</span> par rapport aux fournisseurs locaux. 
                <span className="block mt-1">Livraison gratuite dès 3000L !</span>
              </p>

              {/* Urgency element */}
              <div className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 text-orange-700 font-semibold">
                <Clock className="w-4 h-4 mr-2" />
                Commandez aujourd'hui, livré sous 4 jours
              </div>
            </div>

            {/* Modern conversion-focused feature highlights with more spacing */}
            <div className="space-y-4 max-w-lg mx-auto lg:max-w-none mt-12">
              {/* Quality guarantee with optimized styling */}
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-50/60 to-indigo-50/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-4 transition-all duration-200 hover:shadow-lg hover:border-blue-300/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Qualité certifiée TÜV</div>
                      <div className="text-sm text-slate-600">Contrôlé selon les normes européennes</div>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    GARANTI
                  </div>
                </div>
              </div>

              {/* Fast delivery with optimized styling */}
              <div className="relative overflow-hidden bg-gradient-to-r from-teal-50/60 to-emerald-50/60 backdrop-blur-sm border border-teal-200/30 rounded-2xl p-4 transition-all duration-200 hover:shadow-lg hover:border-teal-300/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Livraison express</div>
                      <div className="text-sm text-slate-600">Partout en France en 2-4 jours</div>
                    </div>
                  </div>
                  <div className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    2-4J
                  </div>
                </div>
              </div>

              {/* Best price guarantee with optimized styling */}
              <div className="relative overflow-hidden bg-gradient-to-r from-orange-50/60 to-red-50/60 backdrop-blur-sm border border-orange-200/30 rounded-2xl p-4 transition-all duration-200 hover:shadow-lg hover:border-orange-300/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                      <Fuel className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Meilleur prix garanti</div>
                      <div className="text-sm text-slate-600">Économies jusqu'à 15% garanties</div>
                    </div>
                  </div>
                  <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -15%
                  </div>
                </div>
              </div>
            </div>

            {/* Trust elements with more spacing */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-8">
              <div className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Garantie satisfait ou remboursé
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Cryptage SSL
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Paiement sécurisé
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
                Devis gratuit instantané
              </h3>
              <p className="text-slate-600">
                Obtenez votre prix personnalisé en quelques secondes
              </p>
            </div>
            
            <PriceCalculator />
            
            {/* Additional trust element below calculator */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center text-sm text-slate-500">
                <Shield className="w-4 h-4 mr-2" />
                100% sans engagement • Aucun frais caché
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

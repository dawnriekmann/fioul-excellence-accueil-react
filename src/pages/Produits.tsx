import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Star, Fuel, Zap, Shield, Award, TruckIcon, Euro, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Produits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      name: "Fioul Standard",
      price: "0,68",
      description: "Fioul de qualité pour un usage quotidien",
      icon: Fuel,
      color: "from-blue-500 to-blue-600",
      features: [
        "Qualité certifiée selon normes européennes",
        "Prix compétitif garanti",
        "Livraison rapide 2-4 jours",
        "Service client 7j/7"
      ],
      popular: false,
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50",
      accent: "bg-blue-600"
    },
    {
      name: "Fioul Premium",
      price: "0,72",
      description: "Notre meilleure qualité avec additifs",
      icon: Star,
      color: "from-teal-500 to-teal-600",
      popular: true,
      features: [
        "Additifs anti-gel inclus (-15°C)",
        "Rendement optimisé +10%",
        "Protection complète du système",
        "Garantie étendue 3 ans"
      ],
      gradient: "from-teal-50/80 to-emerald-50/80",
      border: "border-teal-200/50",
      accent: "bg-teal-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: Euro,
      title: "Économisez jusqu'à 15%",
      description: "Prix garantis moins chers que les fournisseurs locaux",
      highlight: "Économies immédiates",
      gradient: "from-green-50/80 to-emerald-50/80",
      border: "border-green-200/50",
      accent: "bg-green-600"
    },
    {
      icon: TruckIcon,
      title: "Livraison express",
      description: "Livraison rapide dans toute la France sous 2-4 jours",
      highlight: "2-4 jours",
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50",
      accent: "bg-blue-600"
    },
    {
      icon: Shield,
      title: "Certifié TÜV",
      description: "Qualité maximale contrôlée selon les normes européennes",
      highlight: "100% sûr",
      gradient: "from-teal-50/80 to-cyan-50/80",
      border: "border-teal-200/50",
      accent: "bg-teal-600"
    },
    {
      icon: Clock,
      title: "Service 24/7",
      description: "Commandez 24h/24 avec un support professionnel",
      highlight: "Toujours là",
      gradient: "from-purple-50/80 to-violet-50/80",
      border: "border-purple-200/50",
      accent: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {/* Section 1: Nos Fioul Premium */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Nos Fioul Premium
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Deux qualités premium pour répondre à tous vos besoins de chauffage en France
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Popular badge */}
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        PLUS POPULAIRE
                      </div>
                    </div>
                  )}

                  {/* Modern card design */}
                  <div className={`group relative overflow-hidden bg-gradient-to-br ${product.gradient} backdrop-blur-sm border-2 ${product.border} rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all duration-300 ${product.popular ? 'scale-105 shadow-xl' : ''}`}>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="text-center space-y-4">
                        <div className={`w-16 h-16 ${product.accent} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-slate-600">
                            {product.description}
                          </p>
                        </div>
                        
                        {/* Price */}
                        <div className="space-y-2">
                          <div className="text-4xl font-bold text-slate-900">
                            {product.price}€
                            <span className="text-lg font-normal text-slate-600">/L</span>
                          </div>
                          <div className="text-sm text-slate-500">
                            Prix TTC par litre
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                        
                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                              <div className={`w-6 h-6 ${product.accent} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 bg-gradient-to-r ${product.popular ? 'from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700' : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'} text-white font-bold rounded-xl transition-all duration-200 shadow-lg`}
                      >
                        Choisir ce fioul
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Pourquoi choisir notre fioul ? */}
        <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pourquoi choisir notre fioul ?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Plus de 100 000 clients satisfaits font confiance à notre qualité et notre service
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className={`relative overflow-hidden bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border-2 ${feature.border} rounded-3xl p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 h-full`}
                  >
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-20 h-20 ${feature.accent} rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Badge */}
                      <div className={`inline-block ${feature.accent} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                        {feature.highlight}
                      </div>
                      
                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300"
              >
                Calculer le prix maintenant
              </motion.button>
              
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 text-slate-600 shadow-lg mt-8">
                <Shield className="w-5 h-5 mr-3 text-teal-600" />
                <span className="font-semibold">
                  Garantie qualité TÜV • Livraison en France • Support 7j/7
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Produits;

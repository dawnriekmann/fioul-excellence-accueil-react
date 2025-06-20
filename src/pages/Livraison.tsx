
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Clock, MapPin, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Livraison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const guarantees = [
    {
      icon: Truck,
      title: "Livraison gratuite",
      description: "Dès 3 000 litres commandés, profitez de la livraison offerte partout en France",
      highlight: "Dès 3 000L",
      gradient: "from-green-50/80 to-emerald-50/80",
      border: "border-green-200/50",
      accent: "bg-green-600"
    },
    {
      icon: Clock,
      title: "Délais respectés",
      description: "Livraison en 24-48h selon votre région avec un taux de ponctualité de 98%",
      highlight: "24-48h",
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50",
      accent: "bg-blue-600"
    },
    {
      icon: MapPin,
      title: "Suivi en temps réel",
      description: "Suivez votre commande en direct et recevez les notifications de livraison",
      highlight: "Temps réel",
      gradient: "from-teal-50/80 to-cyan-50/80",
      border: "border-teal-200/50",
      accent: "bg-teal-600"
    },
    {
      icon: Shield,
      title: "Équipe certifiée",
      description: "Chauffeurs expérimentés et camions certifiés ADR pour votre sécurité",
      highlight: "100% sûr",
      gradient: "from-purple-50/80 to-violet-50/80",
      border: "border-purple-200/50",
      accent: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section - Livraison rapide dans toute la France */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
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
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Livraison rapide dans
                <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  toute la France
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
                Recevez votre fioul domestique rapidement et en toute sécurité avec notre service de livraison professionnel
              </p>

              {/* Key points */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Livraison gratuite</h3>
                  <p className="text-slate-600">Dès 3 000 litres commandés</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Délais rapides</h3>
                  <p className="text-slate-600">24-48h selon votre région</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Toute la France</h3>
                  <p className="text-slate-600">Couverture nationale complète</p>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300"
                >
                  Calculer le prix maintenant
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Guarantees Section - Nos garanties livraison */}
        <section ref={ref} className="py-20 bg-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-100/5 to-blue-100/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/5 to-purple-100/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Nos garanties livraison
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Un service de livraison professionnel pour votre tranquillité d'esprit
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
                <div className="flex items-center bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-2xl px-6 py-3">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                  <span className="font-bold text-green-700">98% de ponctualité</span>
                </div>
                <div className="flex items-center bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl px-6 py-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-bold text-blue-700">100 000+ livraisons</span>
                </div>
                <div className="flex items-center bg-teal-50/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl px-6 py-3">
                  <Shield className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="font-bold text-teal-700">Certification ADR</span>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className={`relative overflow-hidden bg-gradient-to-br ${guarantee.gradient} backdrop-blur-sm border-2 ${guarantee.border} rounded-3xl p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 h-full`}
                  >
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-20 h-20 ${guarantee.accent} rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6`}>
                        <guarantee.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Badge */}
                      <div className={`inline-block ${guarantee.accent} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                        {guarantee.highlight}
                      </div>
                      
                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {guarantee.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {guarantee.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border-2 border-teal-200/50 rounded-2xl px-8 py-4 text-slate-700 shadow-lg">
                <CheckCircle className="w-6 h-6 mr-3 text-teal-600" />
                <span className="font-bold text-lg">
                  Commandez maintenant et recevez rapidement !
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

export default Livraison;

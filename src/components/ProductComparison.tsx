
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductComparison = () => {
  const products = [
    {
      name: "Fioul Standard",
      price: "0.70",
      description: "Parfait pour un usage quotidien",
      features: [
        "Qualité contrôlée",
        "Livraison rapide",
        "Prix compétitif",
        "Service client"
      ],
      popular: false,
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50",
      accent: "bg-blue-600"
    },
    {
      name: "Fioul Premium",
      price: "0.73",
      description: "Notre meilleure qualité avec additifs",
      features: [
        "Additifs anti-corrosion",
        "Rendement optimisé",
        "Durée de stockage prolongée",
        "Support technique premium"
      ],
      popular: true,
      gradient: "from-teal-50/80 to-emerald-50/80",
      border: "border-teal-200/50",
      accent: "bg-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Choisissez votre fioul
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Deux qualités premium pour répondre à tous vos besoins de chauffage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    RECOMMANDÉ
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
                      {product.popular ? (
                        <Zap className="w-8 h-8 text-white" />
                      ) : (
                        <Shield className="w-8 h-8 text-white" />
                      )}
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
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a href="#hero">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 bg-gradient-to-r ${product.popular ? 'from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700' : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'} text-white font-bold rounded-xl transition-all duration-200 shadow-lg`}
                    >
                      Choisir ce fioul
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 text-slate-600 shadow-lg">
            <Shield className="w-5 h-5 mr-3 text-teal-600" />
            <span className="font-semibold">
              Garantie qualité TÜV • Livraison en 2-4 jours • Support 7j/7
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductComparison;

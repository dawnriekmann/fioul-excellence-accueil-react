
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Star, Fuel, Zap, Crown } from 'lucide-react';

const ProductComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      name: "Fioul Standard",
      price: "0,70€",
      description: "Fioul de qualité pour un usage quotidien",
      icon: Fuel,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Qualité certifiée",
        "Prix compétitif",
        "Livraison rapide",
        "Service client 7j/7"
      ]
    },
    {
      name: "Fioul Premium",
      price: "0,73€",
      description: "Fioul haut de gamme enrichi avec des additifs",
      icon: Crown,
      gradient: "from-teal-500 to-blue-600",
      popular: true,
      features: [
        "Additifs anti-gel inclus",
        "Rendement optimisé",
        "Protection du système",
        "Garantie étendue"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Nos produits fioul
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choisissez la qualité qui correspond à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative overflow-hidden ${product.popular ? 'md:scale-105' : ''}`}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Plus populaire</span>
                  </div>
                </div>
              )}

              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              <div className={`absolute inset-0 rounded-3xl shadow-2xl ${product.popular ? 'shadow-teal-200/50' : 'shadow-slate-200/50'} group-hover:shadow-3xl transition-all duration-500`}></div>

              <div className="relative p-8 space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="relative inline-flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-2xl blur opacity-30`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <product.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-800">{product.name}</h3>
                    <p className="text-slate-600">{product.description}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      {product.price}
                    </div>
                    <div className="text-lg text-slate-600 font-medium">/litre</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {product.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${product.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                    product.popular 
                      ? `bg-gradient-to-r ${product.gradient} text-white shadow-teal-300/30 hover:shadow-teal-400/40`
                      : 'bg-white/80 backdrop-blur-sm text-slate-800 hover:bg-white shadow-slate-200/50 hover:shadow-slate-300/60'
                  }`}
                >
                  Choisir ce produit
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;

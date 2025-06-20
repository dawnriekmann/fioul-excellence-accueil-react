
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Star, Fuel, Crown } from 'lucide-react';

const ProductComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      name: "Fioul Standard",
      price: "0,70€",
      description: "Fioul de qualité pour un usage quotidien",
      icon: Fuel,
      color: "bg-blue-600",
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
      color: "bg-teal-600",
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
    <section ref={ref} className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Nos produits fioul
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Choisissez la qualité qui correspond à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-teal-500' : ''}`}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Plus populaire</span>
                  </div>
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 ${product.color} rounded-xl flex items-center justify-center mx-auto`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                    <p className="text-slate-600">{product.description}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-slate-800">
                      {product.price}
                    </div>
                    <div className="text-lg text-slate-600 font-medium">/litre</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 ${product.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl font-bold transition-colors duration-300 ${
                  product.popular 
                    ? `${product.color} text-white hover:opacity-90`
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}>
                  Choisir ce produit
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;

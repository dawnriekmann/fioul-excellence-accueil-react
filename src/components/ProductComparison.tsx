
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Star, Fuel, Zap } from 'lucide-react';

const ProductComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      name: "Fioul Standard",
      price: "0,70€",
      description: "Fioul de qualité pour un usage quotidien",
      icon: Fuel,
      color: "from-blue-500 to-blue-600",
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
      icon: Star,
      color: "from-teal-500 to-teal-600",
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
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos produits fioul
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez la qualité qui correspond à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative bg-white rounded-2xl shadow-xl p-8 ${product.popular ? 'ring-2 ring-teal-500' : ''}`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-3xl font-bold text-gray-800">
                  {product.price}
                  <span className="text-lg text-gray-600 font-normal">/litre</span>
                </div>
              </div>

              <div className="space-y-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  product.popular 
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Choisir ce produit
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;

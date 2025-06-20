
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Star, Fuel, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Produits = () => {
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
        "Qualité certifiée selon normes européennes",
        "Prix compétitif garanti",
        "Livraison rapide 24-48h",
        "Service client 7j/7",
        "Garantie qualité 1 an",
        "Stockage optimisé"
      ],
      specifications: [
        { label: "Densité", value: "0.82-0.95 kg/L" },
        { label: "Point d'éclair", value: "> 55°C" },
        { label: "Soufre", value: "< 1000 mg/kg" },
        { label: "Cendres", value: "< 0.01%" }
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
        "Additifs anti-gel inclus (-15°C)",
        "Rendement optimisé +8%",
        "Protection complète du système",
        "Garantie étendue 3 ans",
        "Anti-corrosion et anti-mousse",
        "Biocide préventif inclus"
      ],
      specifications: [
        { label: "Densité", value: "0.82-0.95 kg/L" },
        { label: "Point d'éclair", value: "> 55°C" },
        { label: "Soufre", value: "< 500 mg/kg" },
        { label: "Additifs", value: "Multi-fonctions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-teal-600">
              Fioul Excellence
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">Accueil</Link>
              <Link to="/produits" className="text-teal-600 font-semibold">Produits</Link>
              <Link to="/livraison" className="text-gray-600 hover:text-teal-600 transition-colors">Livraison</Link>
              <Link to="/a-propos" className="text-gray-600 hover:text-teal-600 transition-colors">À propos</Link>
              <Link to="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Nos Produits Fioul
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme de fioul domestique de haute qualité, adaptée à tous vos besoins de chauffage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Comparison */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${product.popular ? 'ring-2 ring-teal-500 scale-105' : ''}`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>Plus populaire</span>
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <product.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-4xl font-bold text-gray-800">
                    {product.price}
                    <span className="text-lg text-gray-600 font-normal">/litre</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-teal-600" />
                    Avantages
                  </h4>
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-teal-600" />
                    Spécifications techniques
                  </h4>
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-medium text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    product.popular 
                      ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Commander ce produit
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Besoin d'aide pour choisir ?</h3>
            <p className="text-gray-600 mb-6">
              Nos experts sont là pour vous conseiller et vous aider à choisir le produit le mieux adapté à vos besoins
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Contactez nos experts</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Produits;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Clock, MapPin, Euro, Leaf, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Livraison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const deliveryZones = [
    { region: "Île-de-France", time: "24h", coverage: "100%" },
    { region: "Nord", time: "24-48h", coverage: "95%" },
    { region: "Est", time: "24-48h", coverage: "90%" },
    { region: "Sud-Est", time: "48h", coverage: "85%" },
    { region: "Sud-Ouest", time: "48h", coverage: "80%" },
    { region: "Ouest", time: "48h", coverage: "75%" }
  ];

  const pricingTiers = [
    { quantity: "1 000 - 2 999L", price: "39€", description: "Livraison standard" },
    { quantity: "3 000L et plus", price: "GRATUIT", description: "Livraison offerte", highlight: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
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
                Livraison dans toute la France
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Service de livraison rapide et fiable pour votre fioul domestique, avec livraison gratuite à partir de 3 000 litres
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={ref} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Tarifs de livraison
              </h2>
              <p className="text-xl text-gray-600">
                Livraison gratuite à partir de 3 000 litres
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`bg-white rounded-2xl shadow-xl p-8 text-center ${tier.highlight ? 'ring-2 ring-teal-500 scale-105' : ''}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Euro className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.quantity}</h3>
                  <div className={`text-3xl font-bold mb-2 ${tier.highlight ? 'text-teal-600' : 'text-gray-800'}`}>
                    {tier.price}
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Zones de livraison
              </h2>
              <p className="text-xl text-gray-600">
                Couverture nationale avec des délais optimisés
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliveryZones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-teal-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{zone.region}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Délai:</span>
                      <span className="font-medium text-gray-800">{zone.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Couverture:</span>
                      <span className="font-medium text-teal-600">{zone.coverage}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Notre engagement livraison
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Livraison rapide</h3>
                <p className="text-gray-600">Délais respectés dans 98% des cas avec suivi en temps réel</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sécurité garantie</h3>
                <p className="text-gray-600">Camions certifiés ADR et chauffeurs expérimentés</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Éco-responsable</h3>
                <p className="text-gray-600">Optimisation des tournées pour réduire l'empreinte carbone</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Livraison;


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Recycle, Zap, Shield } from 'lucide-react';

const Environmental = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: Leaf,
      title: "Respect de l'environnement",
      description: "Fioul à faible émission conforme aux normes européennes les plus strictes",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Recycle,
      title: "Démarche éco-responsable",
      description: "Emballages recyclables et optimisation des trajets de livraison",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Zap,
      title: "Technologie moderne",
      description: "Système de livraison high-tech avec traçabilité complète",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Shield,
      title: "Sécurité maximale",
      description: "Équipements de pointe pour une livraison sécurisée et propre",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Environnement & Technologie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un service moderne qui respecte l'environnement et votre maison
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre engagement</h3>
              <p className="text-gray-600 mb-6">
                Nous nous engageons à fournir une énergie de qualité tout en minimisant notre impact environnemental. 
                Nos camions respectent les normes Euro 6 et nos fiouls répondent aux standards les plus élevés.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">-25%</div>
                  <div className="text-sm text-gray-600">Émissions CO2</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-teal-600">100%</div>
                  <div className="text-sm text-gray-600">Recyclable</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Environmental;

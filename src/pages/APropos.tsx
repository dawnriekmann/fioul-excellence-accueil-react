
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Award, Leaf, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const APropos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const values = [
    {
      icon: Leaf,
      title: "Durabilité",
      description: "Nous nous engageons pour une énergie plus propre et des pratiques respectueuses de l'environnement"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Qualité irréprochable de nos produits et service client d'exception"
    },
    {
      icon: Heart,
      title: "Proximité",
      description: "À l'écoute de nos clients avec un service personnalisé et humain"
    }
  ];

  const milestones = [
    { year: "2015", event: "Création de Green Energy Trade SAS" },
    { year: "2017", event: "Lancement de Fioul Excellence" },
    { year: "2019", event: "Couverture nationale complète" },
    { year: "2021", event: "10 000 clients satisfaits" },
    { year: "2023", event: "Certification ISO 14001" }
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
              <Link to="/produits" className="text-gray-600 hover:text-teal-600 transition-colors">Produits</Link>
              <Link to="/livraison" className="text-gray-600 hover:text-teal-600 transition-colors">Livraison</Link>
              <Link to="/a-propos" className="text-teal-600 font-semibold">À propos</Link>
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
              À propos de Fioul Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre partenaire de confiance pour l'approvisionnement en fioul domestique depuis 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Green Energy Trade SAS
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée en 2015 par Claire Moreau, Green Energy Trade SAS est une entreprise française spécialisée 
                dans la distribution de fioul domestique de haute qualité. Basée à Paris, notre société s'est 
                rapidement imposée comme un acteur de référence dans le secteur énergétique français.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Sous la marque Fioul Excellence, nous proposons des solutions énergétiques fiables et 
                respectueuses de l'environnement, avec un service client d'exception et une logistique 
                optimisée pour répondre aux besoins de nos clients partout en France.
              </p>
              <div className="flex items-center space-x-4 text-teal-600">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-medium">
                  Siège social : 25 Avenue des Champs-Élysées, 75008 Paris
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Notre dirigeante</h3>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Claire Moreau</h4>
                <p className="text-teal-600 font-medium mb-4">Présidente & Fondatrice</p>
                <p className="text-gray-600">
                  Forte de plus de 15 ans d'expérience dans le secteur énergétique, 
                  Claire Moreau a créé Green Energy Trade avec la vision d'une énergie 
                  plus accessible et plus respectueuse de l'environnement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Notre vision et nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Construire un avenir énergétique durable tout en garantissant le confort de nos clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Notre histoire
            </h2>
            <p className="text-xl text-gray-600">
              Depuis notre création, nous n'avons cessé de grandir et d'innover
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`bg-white rounded-xl shadow-lg p-6 max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">{milestone.year}</div>
                      <div className="text-gray-800">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Rejoignez nos 10 000 clients satisfaits
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez pourquoi tant de familles nous font confiance pour leur chauffage
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Contactez-nous dès maintenant</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APropos;


import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Leaf, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const APropos = () => {
  const values = [
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Fioul premium certifié avec contrôles qualité rigoureux selon les normes européennes",
      highlight: "100% sûr",
      gradient: "from-teal-50/80 to-cyan-50/80",
      border: "border-teal-200/50",
      accent: "bg-teal-600"
    },
    {
      icon: Users,
      title: "Service client",
      description: "Plus de 100 000 clients satisfaits avec un support professionnel disponible 7j/7",
      highlight: "100k+ clients",
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50",
      accent: "bg-blue-600"
    },
    {
      icon: Clock,
      title: "Livraison rapide",
      description: "Livraison express dans toute la France sous 24-48h avec suivi en temps réel",
      highlight: "24-48h",
      gradient: "from-purple-50/80 to-violet-50/80",
      border: "border-purple-200/50",
      accent: "bg-purple-600"
    }
  ];

  const commitments = [
    {
      icon: Leaf,
      title: "Respect environnemental",
      description: "Fioul à faible teneur en soufre pour réduire l'impact environnemental"
    },
    {
      icon: Award,
      title: "Certifications qualité",
      description: "Respect des normes européennes les plus strictes"
    },
    {
      icon: Heart,
      title: "Satisfaction client",
      description: "Notre priorité absolue depuis le début"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {/* Section 1: Hero - Qui sommes-nous ? */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50 relative overflow-hidden">
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
                Qui sommes-nous ?
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-8">
                Fioul Excellence est votre partenaire de confiance pour l'approvisionnement 
                en fioul domestique partout en France depuis des années.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Nous nous engageons à vous fournir un fioul de qualité premium avec un service 
                client exceptionnel et des délais de livraison respectés dans toute la France.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Obtenir un devis gratuit</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Nos valeurs (Style WhyChooseUs) */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Nos valeurs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ce qui nous distingue et fait notre réputation auprès de nos clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className={`relative overflow-hidden bg-gradient-to-br ${value.gradient} backdrop-blur-sm border-2 ${value.border} rounded-3xl p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 h-full`}
                  >
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-20 h-20 ${value.accent} rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6`}>
                        <value.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Badge */}
                      <div className={`inline-block ${value.accent} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                        {value.highlight}
                      </div>
                      
                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {value.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Notre engagement (Compact) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Notre engagement
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Nous nous engageons chaque jour pour votre satisfaction et un service de qualité
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <commitment.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {commitment.title}
                  </h3>
                  <p className="text-slate-600">
                    {commitment.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Rejoignez nos 100 000+ clients satisfaits
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Découvrez pourquoi tant de familles nous font confiance pour leur chauffage
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Contactez-nous dès maintenant</span>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default APropos;

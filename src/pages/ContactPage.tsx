
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "01 23 45 67 89",
      description: "Service client disponible",
      detail: "Lun-Dim 8h-20h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@fioul-excellence.fr",
      description: "Réponse rapide garantie",
      detail: "Sous 2h en moyenne"
    },
    {
      icon: MapPin,
      title: "Zones de livraison",
      info: "Toute la France",
      description: "Livraison rapide partout",
      detail: "2-4 jours ouvrés"
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "8h00 - 20h00",
      description: "7 jours sur 7",
      detail: "Commande en ligne 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Section unique - Contact */}
      <section ref={ref} className="pt-16 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Hero intégré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-slate-900 block">
                Contactez
              </span>
              <span className="text-teal-600 block">
                Fioul Excellence
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous accompagner
              <span className="block mt-1">dans tous vos besoins en fioul domestique</span>
            </p>
          </motion.div>

          {/* Cartes de contact principales */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden bg-white/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-lg hover:border-blue-300/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{contact.title}</h3>
                <p className="text-xl font-semibold text-teal-600 mb-1">{contact.info}</p>
                <p className="text-sm font-medium text-slate-700 mb-1">{contact.description}</p>
                <p className="text-xs text-slate-600">{contact.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Call-to-action principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-teal-200/30 rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                Une question ? Un devis personnalisé ?
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Contactez nos experts pour un conseil personnalisé et obtenez le meilleur prix pour votre fioul
              </p>
              <motion.a
                href="tel:0123456789"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Appelez-nous maintenant</span>
              </motion.a>
              <div className="mt-4 text-sm text-slate-500">
                Appel gratuit • Réponse immédiate
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

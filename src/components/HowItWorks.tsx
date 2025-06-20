
import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, CreditCard, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calculator,
      number: "1",
      title: "Calculer le prix",
      description: "Utilisez notre calculateur en ligne pour votre devis personnalisé",
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50",
      accent: "bg-blue-600"
    },
    {
      icon: CreditCard,
      number: "2", 
      title: "Commander en sécurité",
      description: "Commandez en ligne avec un paiement crypté SSL",
      gradient: "from-teal-50/80 to-emerald-50/80",
      border: "border-teal-200/50",
      accent: "bg-teal-600"
    },
    {
      icon: Truck,
      number: "3",
      title: "Recevoir la livraison",
      description: "Livraison express en 2-4 jours directement chez vous",
      gradient: "from-green-50/80 to-lime-50/80",
      border: "border-green-200/50",
      accent: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-100/5 to-blue-100/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/5 to-purple-100/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comment ça marche
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            En seulement 3 étapes vers votre fioul pas cher
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-slate-200 via-teal-200 to-slate-200 z-0 transform translate-x-4"></div>
              )}
              
              <div className={`relative z-10 bg-gradient-to-br ${step.gradient} backdrop-blur-sm border-2 ${step.border} rounded-3xl p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300`}>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with number badge */}
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div className={`w-20 h-20 ${step.accent} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-200">
                      <span className="text-sm font-bold text-slate-800">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300"
          >
            Calculer le prix maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

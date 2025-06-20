
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, Euro, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Euro,
      title: "Bis zu 15% sparen",
      description: "Garantiert günstigere Preise als bei lokalen Anbietern",
      highlight: "Sofort sparen",
      gradient: "from-green-50/80 to-emerald-50/80",
      border: "border-green-200/50",
      accent: "bg-green-600"
    },
    {
      icon: Truck,
      title: "Express-Lieferung",
      description: "Schnelle Lieferung in ganz Deutschland binnen 2-4 Tagen",
      highlight: "2-4 Tage",
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50",
      accent: "bg-blue-600"
    },
    {
      icon: Shield,
      title: "TÜV-zertifiziert",
      description: "Höchste Qualität nach europäischen Standards geprüft",
      highlight: "100% sicher",
      gradient: "from-teal-50/80 to-cyan-50/80",
      border: "border-teal-200/50",
      accent: "bg-teal-600"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Rund um die Uhr bestellen mit professionellem Support",
      highlight: "Immer da",
      gradient: "from-purple-50/80 to-violet-50/80",
      border: "border-purple-200/50",
      accent: "bg-purple-600"
    }
  ];

  return (
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
            Warum uns wählen?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Über 100.000 zufriedene Kunden vertrauen auf unsere Qualität und unseren Service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className={`relative overflow-hidden bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border-2 ${feature.border} rounded-3xl p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 h-full`}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 ${feature.accent} rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Badge */}
                  <div className={`inline-block ${feature.accent} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                    {feature.highlight}
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

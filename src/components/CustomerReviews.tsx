
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const CustomerReviews = () => {
  const testimonials = [
    {
      name: "Maria Schmidt",
      location: "München",
      rating: 5,
      comment: "Fantastischer Service! Schnelle Lieferung und der Preis war unschlagbar. Kann ich nur weiterempfehlen!",
      avatar: "MS",
      savings: "280€",
      gradient: "from-blue-50/80 to-indigo-50/80",
      border: "border-blue-200/50"
    },
    {
      name: "Thomas Weber",
      location: "Hamburg", 
      rating: 5,
      comment: "Sehr professionell und zuverlässig. Die Online-Bestellung war super einfach und die Qualität ist top!",
      avatar: "TW",
      savings: "420€",
      gradient: "from-teal-50/80 to-cyan-50/80",
      border: "border-teal-200/50"
    },
    {
      name: "Sandra Müller",
      location: "Berlin",
      rating: 5,
      comment: "Bereits zum dritten Mal bestellt. Immer pünktlich, immer beste Qualität. Danke für den tollen Service!",
      avatar: "SM",
      savings: "350€",
      gradient: "from-purple-50/80 to-violet-50/80",
      border: "border-purple-200/50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Kundenstimmen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Über 100.000 zufriedene Kunden sprechen für sich
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-2xl px-6 py-3">
              <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
              <span className="font-bold text-green-700">4.9/5 Sterne</span>
            </div>
            <div className="flex items-center bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl px-6 py-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-bold text-blue-700">100.000+ Kunden</span>
            </div>
            <div className="flex items-center bg-teal-50/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl px-6 py-3">
              <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
              <span className="font-bold text-teal-700">98% Weiterempfehlung</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative overflow-hidden bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm border-2 ${testimonial.border} rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all duration-300 h-full`}>
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-300" />
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Customer info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                      <p className="text-slate-600">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      -{testimonial.savings} gespart
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-700 italic text-lg leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border-2 border-teal-200/50 rounded-2xl px-8 py-4 text-slate-700 shadow-lg">
            <CheckCircle className="w-6 h-6 mr-3 text-teal-600" />
            <span className="font-bold text-lg">
              Werden Sie unser nächster zufriedener Kunde!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;

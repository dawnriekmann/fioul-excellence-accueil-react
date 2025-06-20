
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Lyon",
      rating: 5,
      comment: "Service impeccable ! Livraison rapide et prix très competitive. Je recommande vivement Fioul Excellence pour leur professionnalisme.",
      avatar: "MD"
    },
    {
      name: "Pierre Martin",
      location: "Marseille",
      rating: 5,
      comment: "Excellent service client et qualité du fioul au top. Le calculateur en ligne est très pratique, je gagne du temps à chaque commande.",
      avatar: "PM"
    },
    {
      name: "Sophie Leclerc",
      location: "Toulouse",
      rating: 5,
      comment: "Très satisfaite depuis 3 ans. Livraison toujours ponctuelle et équipe très professionnelle. Merci pour votre service de qualité !",
      avatar: "SL"
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
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 10 000 clients nous font confiance pour leur approvisionnement en fioul
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-200" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

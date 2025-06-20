import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "01 23 45 67 89",
      description: "Lun-Dim 8h-20h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@fioul-excellence.fr",
      description: "Réponse sous 2h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "25 Avenue des Champs-Élysées",
      description: "75008 Paris, France"
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "8h00 - 20h00",
      description: "7 jours sur 7"
    }
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
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section ref={ref} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{contact.title}</h3>
                  <p className="text-lg font-medium text-teal-600 mb-1">{contact.info}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom complet</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Votre téléphone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.fr"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sujet">Sujet</Label>
                    <Input
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      placeholder="Objet de votre demande"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre demande..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Notre localisation</h4>
                    <p className="text-gray-600">25 Avenue des Champs-Élysées</p>
                    <p className="text-gray-600">75008 Paris, France</p>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-semibold mb-4">Urgence chauffage ?</h4>
                  <p className="mb-4">Notre service d'urgence est disponible 24h/24 pour les situations critiques.</p>
                  <a
                    href="tel:0123456789"
                    className="inline-flex items-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Appel d'urgence</span>
                  </a>
                </div>

                {/* FAQ Link */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Questions fréquentes</h4>
                  <p className="text-gray-600 mb-4">
                    Consultez notre FAQ pour trouver rapidement des réponses à vos questions les plus courantes.
                  </p>
                  <Button variant="outline" className="w-full">
                    Voir la FAQ
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;

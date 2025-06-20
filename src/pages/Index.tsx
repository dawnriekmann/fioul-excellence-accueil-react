
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

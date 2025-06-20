
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductComparison from '../components/ProductComparison';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import OrderProcess from '../components/OrderProcess';
import Environmental from '../components/Environmental';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductComparison />
      <Services />
      <Benefits />
      <OrderProcess />
      <Environmental />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

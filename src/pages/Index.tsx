
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductComparison from '../components/ProductComparison';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import CustomerReviews from '../components/CustomerReviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <ProductComparison />
        <WhyChooseUs />
        <HowItWorks />
        <CustomerReviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

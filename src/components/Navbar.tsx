
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/produits' },
    { name: 'Livraison', path: '/livraison' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="https://i.imgur.com/07QFIbT.png" 
              alt="Fioul Excellence" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-lg ${
                  isActive(link.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Phone notification and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Phone notification button */}
            <motion.a
              href="tel:+33123456789"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">01 23 45 67 89</span>
              <div className="relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-lg transition-all duration-200 touch-target"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-4 text-base font-medium transition-colors duration-200 touch-target rounded-lg mx-2 ${
                      isActive(link.path)
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile phone button */}
                <motion.a
                  href="tel:+33123456789"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-3 rounded-lg mx-2 mt-4 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">01 23 45 67 89</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

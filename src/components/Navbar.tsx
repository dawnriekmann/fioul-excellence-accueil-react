
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-teal-600">
            Fioul Excellence
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">
              Accueil
            </Link>
            <Link to="/produits" className="text-gray-600 hover:text-teal-600 transition-colors">
              Produits
            </Link>
            <Link to="/livraison" className="text-gray-600 hover:text-teal-600 transition-colors">
              Livraison
            </Link>
            <Link to="/a-propos" className="text-gray-600 hover:text-teal-600 transition-colors">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </div>
          {/* Mobile menu button - for future mobile menu implementation */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-teal-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Fuel, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Fuel className="w-8 h-8 text-teal-400" />
              <h3 className="text-xl font-bold">Fioul Excellence</h3>
            </div>
            <p className="text-gray-400">
              Votre partenaire de confiance pour l'approvisionnement en fioul domestique partout en France.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Fioul Standard</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Fioul Premium</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Livraison Express</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Devis Personnalisé</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Suivi de commande</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 01 23 45 67 89</p>
              <p>✉️ contact@fioul-excellence.fr</p>
              <p>🕒 Lun-Dim 8h-20h</p>
              <p>🚚 Livraison toute la France</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fioul Excellence. Tous droits réservés. | 
            <a href="#" className="hover:text-teal-400 transition-colors ml-2">Mentions légales</a> | 
            <a href="#" className="hover:text-teal-400 transition-colors ml-2">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

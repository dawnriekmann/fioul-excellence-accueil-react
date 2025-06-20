
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.imgur.com/07QFIbT.png" 
                alt="Fioul Excellence" 
                className="h-24 w-auto"
              />
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
              <li><Link to="/produits" className="hover:text-teal-400 transition-colors">Fioul Standard</Link></li>
              <li><Link to="/produits" className="hover:text-teal-400 transition-colors">Fioul Premium</Link></li>
              <li><Link to="/livraison" className="hover:text-teal-400 transition-colors">Livraison Express</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Devis Personnalisé</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/a-propos" className="hover:text-teal-400 transition-colors">Centre d'aide</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
              <li><Link to="/livraison" className="hover:text-teal-400 transition-colors">Suivi de commande</Link></li>
              <li><Link to="/a-propos" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
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

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Fioul Excellence. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              <Link to="/mentions-legales" className="hover:text-teal-400 transition-colors">
                Mentions légales
              </Link>
              <Link to="/cgv" className="hover:text-teal-400 transition-colors">
                CGV
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-teal-400 transition-colors">
                Confidentialité
              </Link>
              <Link to="/politique-livraison" className="hover:text-teal-400 transition-colors">
                Livraison
              </Link>
              <Link to="/politique-retour" className="hover:text-teal-400 transition-colors">
                Retours
              </Link>
              <Link to="/politique-cookies" className="hover:text-teal-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

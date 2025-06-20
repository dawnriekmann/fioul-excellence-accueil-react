
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Fuel, Shield, Leaf } from 'lucide-react';

const APropos = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-teal-600">
              Fioul Excellence
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">Accueil</Link>
              <Link to="/produits" className="text-gray-600 hover:text-teal-600 transition-colors">Produits</Link>
              <Link to="/livraison" className="text-gray-600 hover:text-teal-600 transition-colors">Livraison</Link>
              <Link to="/a-propos" className="text-teal-600 font-semibold">À propos</Link>
              <Link to="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            À propos de Fioul Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour l'approvisionnement en fioul domestique de qualité, 
            livré rapidement partout en France avec un service client d'exception.
          </p>
        </div>
      </section>

      {/* Notre entreprise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Green Energy Trade SAS
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6">
                  Fondée en 2015 par Claire Moreau, Green Energy Trade SAS est une entreprise française 
                  spécialisée dans la distribution de fioul domestique de haute qualité. Basée à Paris, 
                  nous servons des milliers de clients partout en France.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Sous la marque Fioul Excellence, nous proposons des solutions énergétiques fiables 
                  avec un service client d'exception et une logistique optimisée.
                </p>
                <div className="flex items-center space-x-3 text-teal-600">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">25 Avenue des Champs-Élysées, 75008 Paris</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Claire Moreau</h3>
                <p className="text-teal-600 font-medium mb-4">Présidente & Fondatrice</p>
                <p className="text-gray-600">
                  Forte de plus de 15 ans d'expérience dans le secteur énergétique, 
                  Claire a créé l'entreprise avec la vision d'une énergie accessible et respectueuse de l'environnement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pourquoi choisir Fioul Excellence ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Qualité garantie</h3>
              <p className="text-gray-600">
                Fioul certifié et contrôlé selon les normes européennes les plus strictes
              </p>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Respect environnemental</h3>
              <p className="text-gray-600">
                Démarche éco-responsable avec des fiouls à faible émission et livraison optimisée
              </p>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Fuel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Service premium</h3>
              <p className="text-gray-600">
                Livraison rapide, prix compétitifs et plus de 10 000 clients satisfaits
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;

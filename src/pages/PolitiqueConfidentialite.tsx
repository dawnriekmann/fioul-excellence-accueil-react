
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Collecte des données</h2>
            <p>Green Energy Trade SAS collecte des données personnelles dans le cadre de son activité de vente de fioul domestique. Les données collectées sont :</p>
            <ul>
              <li>Nom, prénom, adresse, téléphone, email</li>
              <li>Informations de livraison et de facturation</li>
              <li>Données de navigation sur notre site</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Finalités du traitement</h2>
            <p>Vos données personnelles sont utilisées pour :</p>
            <ul>
              <li>Le traitement et le suivi de vos commandes</li>
              <li>La facturation et la comptabilité</li>
              <li>L'amélioration de nos services</li>
              <li>L'envoi d'informations commerciales (avec votre consentement)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Base légale</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul>
              <li>L'exécution du contrat de vente</li>
              <li>Le respect d'obligations légales</li>
              <li>Votre consentement pour les communications marketing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Conservation des données</h2>
            <p>Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
            <ul>
              <li>Données clients : 3 ans après la dernière commande</li>
              <li>Données comptables : 10 ans</li>
              <li>Données de navigation : 13 mois maximum</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit d'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>Pour exercer vos droits, contactez-nous à : contact@fioul-excellence.fr</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Sécurité</h2>
            <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisés.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact</h2>
            <p>Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :</p>
            <p>Email : contact@fioul-excellence.fr<br />
            Téléphone : 01 23 45 67 89<br />
            Adresse : 123 Avenue des Champs-Élysées, 75008 Paris</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;

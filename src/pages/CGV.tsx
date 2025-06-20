
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CGV = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Conditions Générales de Vente</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 1 - Objet</h2>
            <p>Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Green Energy Trade SAS, société immatriculée au RCS de Paris sous le numéro 511708778, opérant sous le nom commercial "Fioul Excellence" et ses clients.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 2 - Produits</h2>
            <p>Fioul Excellence commercialise du fioul domestique de qualité premium et standard, livré à domicile sur l'ensemble du territoire français métropolitain.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 3 - Prix</h2>
            <p>Les prix sont indiqués en euros TTC. Ils incluent la TVA au taux en vigueur. Les prix peuvent être modifiés à tout moment en fonction des fluctuations du marché pétrolier. Le prix applicable est celui en vigueur au moment de la validation de la commande.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 4 - Commande</h2>
            <p>La commande peut être passée :</p>
            <ul>
              <li>Par téléphone au 01 23 45 67 89</li>
              <li>Par email à contact@fioul-excellence.fr</li>
              <li>Via notre site internet</li>
            </ul>
            <p>Toute commande suppose l'adhésion sans réserve aux présentes conditions générales de vente.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 5 - Livraison</h2>
            <p>La livraison s'effectue à l'adresse indiquée par le client lors de la commande. Les délais de livraison sont généralement de 24 à 48 heures ouvrées. Le client doit s'assurer de la présence d'une personne majeure lors de la livraison et de l'accessibilité de la cuve.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 6 - Paiement</h2>
            <p>Le paiement s'effectue :</p>
            <ul>
              <li>Par carte bancaire</li>
              <li>Par virement bancaire</li>
              <li>Par chèque à la livraison</li>
            </ul>
            <p>Le paiement est exigible à la commande pour les nouveaux clients.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 7 - Droit de rétractation</h2>
            <p>Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut pas être exercé pour les contrats de fourniture de biens susceptibles de se détériorer ou de se périmer rapidement, notamment les produits énergétiques.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 8 - Réclamations</h2>
            <p>Toute réclamation doit être adressée dans les 48 heures suivant la livraison à contact@fioul-excellence.fr ou par téléphone au 01 23 45 67 89.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article 9 - Loi applicable</h2>
            <p>Les présentes conditions générales de vente sont soumises au droit français. Tout litige sera soumis aux tribunaux compétents de Paris.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CGV;

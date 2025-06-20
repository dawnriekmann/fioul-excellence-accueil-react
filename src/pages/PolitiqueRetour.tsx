
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolitiqueRetour = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Politique de retour et remboursement</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Principe général</h2>
            <p>Conformément à l'article L221-28 du Code de la consommation, <strong>le droit de rétractation ne s'applique pas</strong> aux contrats de fourniture de fioul domestique en raison de la nature périssable du produit et des contraintes de stockage.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Annulation avant livraison</h2>
            <h3 className="text-lg font-semibold mb-2">Délai d'annulation</h3>
            <p>Vous pouvez annuler votre commande gratuitement :</p>
            <ul>
              <li><strong>Jusqu'à 4 heures</strong> avant l'heure de livraison prévue</li>
              <li>En nous contactant au 01 23 45 67 89</li>
              <li>Par email à contact@fioul-excellence.fr</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Annulation tardive</h3>
            <p>En cas d'annulation moins de 4 heures avant la livraison :</p>
            <ul>
              <li>Frais d'annulation : 50 € TTC</li>
              <li>Si le camion est déjà en route : 100 € TTC</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Problème de qualité</h2>
            <h3 className="text-lg font-semibold mb-2">Réclamation qualité</h3>
            <p>En cas de problème de qualité du fioul livré :</p>
            <ul>
              <li>Signalement dans les <strong>48 heures</strong> suivant la livraison</li>
              <li>Conservation d'un échantillon du produit</li>
              <li>Expertise contradictoire organisée</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Solutions proposées</h3>
            <p>Si le défaut de qualité est avéré :</p>
            <ul>
              <li>Remplacement gratuit du produit défectueux</li>
              <li>Remboursement partiel ou total</li>
              <li>Prise en charge des frais de vidange si nécessaire</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Erreur de livraison</h2>
            <h3 className="text-lg font-semibold mb-2">Erreur de quantité</h3>
            <ul>
              <li><strong>Livraison insuffisante :</strong> Complément livré gratuitement</li>
              <li><strong>Livraison excédentaire :</strong> Remboursement du surplus ou récupération gratuite</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Erreur de produit</h3>
            <p>En cas de livraison d'un produit différent de celui commandé :</p>
            <ul>
              <li>Échange gratuit du produit</li>
              <li>Prise en charge des frais supplémentaires</li>
              <li>Remboursement si échange impossible</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Modalités de remboursement</h2>
            <h3 className="text-lg font-semibold mb-2">Délais</h3>
            <ul>
              <li>Remboursement sous <strong>14 jours</strong> après accord</li>
              <li>Virement sur le compte bancaire utilisé pour le paiement</li>
              <li>Chèque de remboursement si paiement initial par chèque</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Frais</h3>
            <ul>
              <li>Aucun frais si erreur de notre fait</li>
              <li>Frais bancaires à votre charge si annulation de votre fait</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cas particuliers</h2>
            <h3 className="text-lg font-semibold mb-2">Force majeure</h3>
            <p>En cas d'impossibilité de livraison due à :</p>
            <ul>
              <li>Conditions météorologiques exceptionnelles</li>
              <li>Grève des transporteurs</li>
              <li>Rupture d'approvisionnement fournisseur</li>
            </ul>
            <p><strong>Remboursement intégral</strong> sans frais supplémentaires.</p>

            <h3 className="text-lg font-semibold mb-2">Défaillance technique</h3>
            <p>Si votre installation présente un défaut empêchant la livraison :</p>
            <ul>
              <li>Report de livraison possible</li>
              <li>Remboursement intégral si réparation impossible</li>
              <li>Frais de déplacement facturés : 80 € TTC</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Procédure de réclamation</h2>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Pour toute réclamation :</p>
            <ul>
              <li><strong>Téléphone :</strong> 01 23 45 67 89</li>
              <li><strong>Email :</strong> reclamation@fioul-excellence.fr</li>
              <li><strong>Courrier :</strong> Green Energy Trade SAS, 123 Avenue des Champs-Élysées, 75008 Paris</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Informations à fournir</h3>
            <ul>
              <li>Numéro de commande</li>
              <li>Date de livraison</li>
              <li>Nature du problème</li>
              <li>Photos si nécessaire</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Médiation</h2>
            <p>En cas de litige non résolu, vous pouvez saisir le médiateur de la consommation dont nous relevons :</p>
            <p><strong>Médiateur de l'énergie</strong><br />
            Libre réponse 59252<br />
            75443 Paris Cedex 09<br />
            <a href="https://www.mediateur-energie.fr" className="text-teal-600 hover:text-teal-800">www.mediateur-energie.fr</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueRetour;

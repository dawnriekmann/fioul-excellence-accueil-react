
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolitiqueLivraison = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Politique de livraison</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Zone de livraison</h2>
            <p>Fioul Excellence livre sur l'ensemble du territoire français métropolitain. Certaines zones isolées peuvent faire l'objet de frais supplémentaires qui vous seront communiqués lors de la commande.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Délais de livraison</h2>
            <p>Les délais de livraison standard sont :</p>
            <ul>
              <li><strong>Livraison express :</strong> 24 heures (supplément applicable)</li>
              <li><strong>Livraison standard :</strong> 24 à 48 heures ouvrées</li>
              <li><strong>Livraison programmée :</strong> À la date de votre choix (dans un délai de 7 jours)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Conditions de livraison</h2>
            <h3 className="text-lg font-semibold mb-2">Accessibilité</h3>
            <ul>
              <li>Le camion-citerne doit pouvoir accéder à moins de 30 mètres de votre cuve</li>
              <li>L'accès doit être praticable (largeur minimum 3 mètres, hauteur 3,5 mètres)</li>
              <li>Le sol doit supporter un poids de 26 tonnes</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Présence obligatoire</h3>
            <ul>
              <li>Une personne majeure doit être présente lors de la livraison</li>
              <li>Cette personne doit pouvoir accéder à la cuve et au compteur</li>
              <li>En cas d'absence, la livraison sera reportée (frais supplémentaires applicables)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Installation requise</h2>
            <p>Votre installation doit être conforme aux normes en vigueur :</p>
            <ul>
              <li>Cuve en bon état avec jauge fonctionnelle</li>
              <li>Tuyauterie accessible et en bon état</li>
              <li>Évent non obstrué</li>
              <li>Espace de dépotage dégagé</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Frais de livraison</h2>
            <p>Les frais de livraison sont calculés selon :</p>
            <ul>
              <li>La distance depuis notre dépôt</li>
              <li>La quantité commandée</li>
              <li>Le type de livraison (standard ou express)</li>
            </ul>
            <p><strong>Livraison gratuite</strong> pour toute commande supérieure à 1000 litres dans un rayon de 50 km.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Modalités pratiques</h2>
            <h3 className="text-lg font-semibold mb-2">Notification</h3>
            <p>Vous serez prévenu par SMS ou téléphone 2 heures avant l'arrivée du livreur.</p>

            <h3 className="text-lg font-semibold mb-2">Documents</h3>
            <p>Le livreur vous remettra :</p>
            <ul>
              <li>Le bon de livraison à signer</li>
              <li>La facture (si paiement à la livraison)</li>
              <li>Les certificats de qualité du produit</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cas particuliers</h2>
            <h3 className="text-lg font-semibold mb-2">Livraison impossible</h3>
            <p>En cas d'impossibilité de livraison pour des raisons indépendantes de notre volonté :</p>
            <ul>
              <li>Frais de déplacement facturés : 80 € TTC</li>
              <li>Nouvelle livraison programmée</li>
              <li>Possibilité d'annulation sans frais supplémentaires</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Conditions météorologiques</h3>
            <p>En cas de conditions météorologiques exceptionnelles, la livraison peut être reportée pour des raisons de sécurité.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact livraison</h2>
            <p>Pour toute question concernant votre livraison :</p>
            <p><strong>Service livraison :</strong> 01 23 45 67 89<br />
            <strong>Email :</strong> livraison@fioul-excellence.fr<br />
            <strong>Horaires :</strong> Lundi au dimanche, 8h à 20h</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueLivraison;

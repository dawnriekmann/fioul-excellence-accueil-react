
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Politique de cookies</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone lorsque vous visitez notre site internet. Il permet de reconnaître votre navigateur et de conserver certaines informations vous concernant ou concernant vos préférences.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Types de cookies utilisés</h2>
            
            <h3 className="text-lg font-semibold mb-2">Cookies strictement nécessaires</h3>
            <p>Ces cookies sont indispensables au fonctionnement du site :</p>
            <ul>
              <li>Cookies de session pour maintenir votre connexion</li>
              <li>Cookies de sécurité pour prévenir les attaques</li>
              <li>Cookies de panier pour mémoriser vos sélections</li>
            </ul>
            <p><strong>Durée de conservation :</strong> Session (supprimés à la fermeture du navigateur)</p>

            <h3 className="text-lg font-semibold mb-2">Cookies de performance</h3>
            <p>Ces cookies nous aident à améliorer le site :</p>
            <ul>
              <li>Google Analytics pour analyser le trafic</li>
              <li>Mesure des performances des pages</li>
              <li>Statistiques d'utilisation anonymes</li>
            </ul>
            <p><strong>Durée de conservation :</strong> 13 mois maximum</p>

            <h3 className="text-lg font-semibold mb-2">Cookies de fonctionnalité</h3>
            <p>Ces cookies améliorent votre expérience :</p>
            <ul>
              <li>Mémorisation de vos préférences linguistiques</li>
              <li>Sauvegarde de vos paramètres d'affichage</li>
              <li>Géolocalisation pour le calcul des frais de livraison</li>
            </ul>
            <p><strong>Durée de conservation :</strong> 12 mois</p>

            <h3 className="text-lg font-semibold mb-2">Cookies publicitaires</h3>
            <p>Ces cookies servent à personnaliser la publicité :</p>
            <ul>
              <li>Google Ads pour le remarketing</li>
              <li>Facebook Pixel pour le ciblage</li>
              <li>LinkedIn Insight Tag pour les campagnes B2B</li>
            </ul>
            <p><strong>Durée de conservation :</strong> 13 mois maximum</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Gestion de vos préférences</h2>
            
            <h3 className="text-lg font-semibold mb-2">Paramétrage de votre navigateur</h3>
            <p>Vous pouvez configurer votre navigateur pour :</p>
            <ul>
              <li>Accepter tous les cookies</li>
              <li>Refuser tous les cookies</li>
              <li>Être averti avant l'acceptation d'un cookie</li>
              <li>Supprimer les cookies stockés</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Configuration par navigateur</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p><strong>Chrome :</strong> Menu > Paramètres > Avancés > Confidentialité et sécurité > Paramètres du site > Cookies</p>
              <p><strong>Firefox :</strong> Menu > Options > Vie privée et sécurité > Cookies et données de sites</p>
              <p><strong>Safari :</strong> Préférences > Confidentialité > Cookies et données de sites web</p>
              <p><strong>Edge :</strong> Menu > Paramètres > Cookies et autorisations de site</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Outils de désactivation</h2>
            
            <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
            <p>Pour désactiver le suivi Google Analytics : <a href="https://tools.google.com/dlpage/gaoptout" className="text-teal-600 hover:text-teal-800" target="_blank" rel="noopener noreferrer">Opt-out Google Analytics</a></p>

            <h3 className="text-lg font-semibold mb-2">Publicité ciblée</h3>
            <p>Pour désactiver la publicité ciblée :</p>
            <ul>
              <li><a href="https://www.youronlinechoices.com/fr/" className="text-teal-600 hover:text-teal-800" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
              <li><a href="https://optout.networkadvertising.org/" className="text-teal-600 hover:text-teal-800" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies tiers</h2>
            <p>Notre site peut contenir des cookies provenant de services tiers :</p>
            <ul>
              <li><strong>Google :</strong> Analytics, Ads, Maps</li>
              <li><strong>Facebook :</strong> Pixel de suivi</li>
              <li><strong>LinkedIn :</strong> Insight Tag</li>
              <li><strong>YouTube :</strong> Vidéos intégrées</li>
            </ul>
            <p>Ces services ont leurs propres politiques de cookies que nous vous invitons à consulter.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Conséquences du refus</h2>
            <p>En cas de refus des cookies :</p>
            <ul>
              <li>Certaines fonctionnalités peuvent être limitées</li>
              <li>Votre expérience utilisateur peut être dégradée</li>
              <li>Vous devrez ressaisir vos préférences à chaque visite</li>
              <li>Le calcul automatique des frais de livraison peut être impacté</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Base légale</h2>
            <p>L'utilisation de cookies repose sur :</p>
            <ul>
              <li><strong>Intérêt légitime</strong> pour les cookies techniques</li>
              <li><strong>Consentement</strong> pour les cookies de mesure d'audience</li>
              <li><strong>Consentement</strong> pour les cookies publicitaires</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact</h2>
            <p>Pour toute question concernant notre politique de cookies :</p>
            <p><strong>Email :</strong> dpo@fioul-excellence.fr<br />
            <strong>Courrier :</strong> Green Energy Trade SAS - DPO<br />
            123 Avenue des Champs-Élysées<br />
            75008 Paris, France</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Mise à jour</h2>
            <p>Cette politique de cookies peut être mise à jour. La date de dernière modification est indiquée en bas de cette page.</p>
            <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueCookies;

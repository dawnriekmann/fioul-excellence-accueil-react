
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informations légales</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Éditeur du site</h3>
              <p><strong>Raison sociale :</strong> Green Energy Trade SAS</p>
              <p><strong>Nom commercial :</strong> Fioul Excellence</p>
              <p><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
              <p><strong>Capital social :</strong> 50 000 €</p>
              <p><strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
              <p><strong>SIREN :</strong> 511708778</p>
              <p><strong>SIRET :</strong> 51170877800010</p>
              <p><strong>Numéro de TVA intracommunautaire :</strong> FR25627711901</p>
              <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
              <p><strong>Email :</strong> contact@fioul-excellence.fr</p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Directeur de la publication</h3>
            <p>Le directeur de la publication est le représentant légal de Green Energy Trade SAS.</p>

            <h3 className="text-xl font-semibold mb-4">Hébergement</h3>
            <p>Ce site est hébergé par :</p>
            <p><strong>OVH SAS</strong><br />
            2 rue Kellermann<br />
            59100 Roubaix, France<br />
            Téléphone : 1007</p>

            <h3 className="text-xl font-semibold mb-4">Propriété intellectuelle</h3>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>

            <h3 className="text-xl font-semibold mb-4">Limitation de responsabilité</h3>
            <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@fioul-excellence.fr, en décrivant le problème de la manière la plus précise possible.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegales;

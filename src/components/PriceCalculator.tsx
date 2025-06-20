
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Truck, ShoppingCart, MapPin, TrendingDown, Zap, Gift } from 'lucide-react';

const heizölConfig = {
  shopId: "0d79d89a-5d01-4ce7-a5be-e5c9d444fa58",
  backendUrl: "https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1",
  checkoutUrl: "https://checkout.fioul-excellence.fr/checkout",
  products: {
    standard: {
      id: "standard_heizoel",
      name: "Fioul Standard",
      pricePerLiter: 0.70,
      description: "Fioul de qualité pour un usage quotidien"
    },
    premium: {
      id: "premium_heizoel",
      name: "Fioul Premium",
      pricePerLiter: 0.73,
      description: "Fioul haut de gamme enrichi avec des additifs"
    }
  },
  delivery: {
    freeDeliveryThreshold: 3000,
    deliveryFee: 39
  },
  limits: {
    minLiters: 1000,
    maxLiters: 20000
  }
};

const PriceCalculator = () => {
  const [liters, setLiters] = useState(1500);
  const [product, setProduct] = useState('standard');
  const [postalCode, setPostalCode] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const selectedProduct = heizölConfig.products[product as keyof typeof heizölConfig.products];
  const subtotal = liters * selectedProduct.pricePerLiter;
  const deliveryFee = subtotal >= heizölConfig.delivery.freeDeliveryThreshold ? 0 : heizölConfig.delivery.deliveryFee;
  const total = subtotal + deliveryFee;
  const marketPrice = liters * 0.85; // Prix du marché supposé plus élevé
  const savings = marketPrice - subtotal;

  const handleCalculate = () => {
    if (liters >= heizölConfig.limits.minLiters && liters <= heizölConfig.limits.maxLiters && postalCode) {
      setShowSummary(true);
      setCurrentStep(3);
    }
  };

  const handleOrder = () => {
    const orderData = {
      shopId: heizölConfig.shopId,
      product: selectedProduct,
      quantity: liters,
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      total: total,
      postalCode: postalCode
    };

    const checkoutUrl = `${heizölConfig.checkoutUrl}?data=${encodeURIComponent(JSON.stringify(orderData))}`;
    window.location.href = checkoutUrl;
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl p-6 space-y-6 border-4 border-orange-200"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Header with urgency */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-black text-gray-800">
            VOTRE PRIX EN TEMPS RÉEL
          </h3>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 border-l-4 border-green-500">
            <p className="text-green-800 font-bold flex items-center justify-center">
              <TrendingDown className="w-4 h-4 mr-2" />
              Prix les plus bas garantis !
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= step ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-1 mx-2 ${
                  currentStep > step ? 'bg-orange-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-5">
          {/* Product Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-800">1️⃣ Choisissez votre fioul</label>
            <div className="space-y-3">
              {Object.entries(heizölConfig.products).map(([key, prod]) => (
                <motion.label 
                  key={key} 
                  className="block cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setCurrentStep(2)}
                >
                  <div className={`border-2 rounded-xl p-4 transition-all duration-200 ${
                    product === key 
                      ? 'border-orange-500 bg-orange-50 shadow-lg' 
                      : 'border-gray-300 hover:border-orange-300 hover:shadow-md'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name="product"
                        value={key}
                        checked={product === key}
                        onChange={(e) => setProduct(e.target.value)}
                        className="text-orange-600 focus:ring-orange-500 mt-1 scale-125"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 text-lg">{prod.name}</div>
                        <div className="text-sm text-gray-600 mb-2">{prod.description}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-black text-orange-600">
                            {prod.pricePerLiter.toFixed(2)}€/L
                          </div>
                          {key === 'standard' && (
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              POPULAIRE
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-800">
              2️⃣ Quantité nécessaire (Litres)
            </label>
            <div className="text-xs text-orange-600 font-semibold">
              📊 Min: {heizölConfig.limits.minLiters}L - Max: {heizölConfig.limits.maxLiters}L
            </div>
            <input
              type="number"
              min={heizölConfig.limits.minLiters}
              max={heizölConfig.limits.maxLiters}
              value={liters}
              onChange={(e) => setLiters(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg font-bold text-center"
              placeholder="Entrez la quantité..."
            />
            {liters >= 3000 && (
              <div className="bg-green-100 border border-green-400 rounded-lg p-2 text-center">
                <span className="text-green-800 font-bold text-sm flex items-center justify-center">
                  <Gift className="w-4 h-4 mr-1" />
                  LIVRAISON GRATUITE !
                </span>
              </div>
            )}
          </div>

          {/* Postal Code */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-800">
              <MapPin className="w-4 h-4 inline mr-1" />
              3️⃣ Votre code postal
            </label>
            <input
              type="text"
              placeholder="Ex: 75001 - Pour voir les prix dans votre région"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg"
            />
          </div>

          {/* Real-time savings display */}
          {liters > 0 && (
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 border-2 border-yellow-300">
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-1">Vous économisez par rapport au prix moyen du marché :</p>
                <p className="text-3xl font-black text-green-600">
                  {savings > 0 ? `${savings.toFixed(0)}€` : '0€'}
                </p>
              </div>
            </div>
          )}

          {/* Enhanced Calculate Button */}
          <motion.button
            onClick={handleCalculate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black text-xl rounded-xl shadow-2xl transition-all duration-300 transform"
          >
            ⚡ CALCULER MON PRIX MAINTENANT
          </motion.button>

          {/* Summary */}
          {showSummary && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 space-y-4 border-2 border-blue-200"
            >
              <h4 className="font-black text-xl text-gray-800 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2 text-orange-600" />
                🎯 VOTRE DEVIS PERSONNALISÉ
              </h4>
              <div className="space-y-3 text-base">
                <div className="flex justify-between items-center bg-white rounded-lg p-3">
                  <span className="font-semibold">{selectedProduct.name} ({liters}L)</span>
                  <span className="font-black text-lg">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-3">
                  <span className="flex items-center font-semibold">
                    <Truck className="w-4 h-4 mr-2" />
                    Livraison
                    {deliveryFee === 0 && <span className="text-green-600 ml-2 text-sm font-bold">(GRATUITE!)</span>}
                  </span>
                  <span className="font-black text-lg">{deliveryFee.toFixed(2)}€</span>
                </div>
                <div className="border-t-2 border-gray-300 pt-3 flex justify-between font-black text-xl bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-3">
                  <span>💰 TOTAL</span>
                  <span className="text-orange-600">{total.toFixed(2)}€</span>
                </div>
              </div>
              <motion.button
                onClick={handleOrder}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-xl font-black text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-2xl"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>🚀 COMMANDER MAINTENANT</span>
              </motion.button>
              <p className="text-center text-sm text-gray-600">
                ⏰ Commande traitée en moins de 2 minutes<br />
                🔒 Paiement 100% sécurisé
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PriceCalculator;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Truck, ShoppingCart, MapPin } from 'lucide-react';

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

  const selectedProduct = heizölConfig.products[product as keyof typeof heizölConfig.products];
  const subtotal = liters * selectedProduct.pricePerLiter;
  const deliveryFee = subtotal >= heizölConfig.delivery.freeDeliveryThreshold ? 0 : heizölConfig.delivery.deliveryFee;
  const total = subtotal + deliveryFee;

  const handleCalculate = () => {
    if (liters >= heizölConfig.limits.minLiters && liters <= heizölConfig.limits.maxLiters && postalCode) {
      setShowSummary(true);
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
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mx-auto">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Calculateur de prix
          </h3>
          <p className="text-slate-600">Obtenez votre devis instantané</p>
        </div>

        <div className="space-y-5">
          {/* Product Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Type de fioul</label>
            <div className="space-y-2">
              {Object.entries(heizölConfig.products).map(([key, prod]) => (
                <label 
                  key={key} 
                  className="block cursor-pointer"
                >
                  <div className={`border rounded-lg p-3 transition-colors duration-200 ${
                    product === key 
                      ? 'border-teal-500 bg-teal-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name="product"
                        value={key}
                        checked={product === key}
                        onChange={(e) => setProduct(e.target.value)}
                        className="text-teal-600 focus:ring-teal-500 mt-1"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-800">{prod.name}</div>
                        <div className="text-sm text-slate-600">{prod.description}</div>
                        <div className="text-lg font-bold text-teal-600">
                          {prod.pricePerLiter.toFixed(2)}€/L
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Quantité (L)</label>
            <div className="text-xs text-slate-500">
              Min: {heizölConfig.limits.minLiters}L - Max: {heizölConfig.limits.maxLiters}L
            </div>
            <input
              type="number"
              min={heizölConfig.limits.minLiters}
              max={heizölConfig.limits.maxLiters}
              value={liters}
              onChange={(e) => setLiters(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
            />
          </div>

          {/* Postal Code */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">
              <MapPin className="w-4 h-4 inline mr-1" />
              Code postal
            </label>
            <input
              type="text"
              placeholder="Ex: 75001"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
            />
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Calculer le prix
          </button>

          {/* Summary */}
          {showSummary && (
            <div className="bg-slate-50 rounded-lg p-4 space-y-4">
              <h4 className="font-bold text-slate-800 flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2 text-teal-600" />
                Résumé de votre commande
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{selectedProduct.name} ({liters}L)</span>
                  <span className="font-semibold">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <Truck className="w-4 h-4 mr-1" />
                    Livraison
                    {deliveryFee === 0 && <span className="text-green-600 ml-1 text-xs">(Gratuite)</span>}
                  </span>
                  <span className="font-semibold">{deliveryFee.toFixed(2)}€</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-teal-600">{total.toFixed(2)}€</span>
                </div>
              </div>
              <button
                onClick={handleOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Commander maintenant</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;

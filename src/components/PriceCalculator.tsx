
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Truck, ShoppingCart, MapPin, Sparkles } from 'lucide-react';

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-teal-50/30 rounded-3xl"></div>
      
      {/* Neumorphic Shadow */}
      <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-slate-300/20"></div>
      <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/50"></div>

      <div className="relative p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-30"></div>
            <div className="relative w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-orange-400 animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Calculateur de prix
          </h3>
          <p className="text-slate-600">Obtenez votre devis instantané</p>
        </div>

        <div className="space-y-6">
          {/* Product Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Type de fioul</label>
            <div className="space-y-3">
              {Object.entries(heizölConfig.products).map(([key, prod]) => (
                <motion.label 
                  key={key} 
                  whileHover={{ scale: 1.02 }}
                  className="group relative block cursor-pointer"
                >
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    product === key 
                      ? 'bg-gradient-to-r from-teal-50 to-blue-50 shadow-md shadow-teal-200/30' 
                      : 'bg-white/50 hover:bg-white/70 shadow-sm hover:shadow-md'
                  }`}></div>
                  <div className="relative flex items-start space-x-3 p-4">
                    <input
                      type="radio"
                      name="product"
                      value={key}
                      checked={product === key}
                      onChange={(e) => setProduct(e.target.value)}
                      className="text-teal-600 focus:ring-teal-500 mt-1 min-w-[16px]"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800">{prod.name}</div>
                      <div className="text-sm text-slate-600 break-words">{prod.description}</div>
                      <div className="text-lg font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                        {prod.pricePerLiter.toFixed(2)}€/L
                      </div>
                    </div>
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Quantité (L)</label>
            <div className="text-xs text-slate-500">
              Min: {heizölConfig.limits.minLiters}L - Max: {heizölConfig.limits.maxLiters}L
            </div>
            <div className="relative">
              <input
                type="number"
                min={heizölConfig.limits.minLiters}
                max={heizölConfig.limits.maxLiters}
                value={liters}
                onChange={(e) => setLiters(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-4 text-lg bg-white/70 backdrop-blur-sm border-0 rounded-xl shadow-inner shadow-slate-200/50 focus:ring-2 focus:ring-teal-500 focus:bg-white/90 transition-all duration-300"
              />
            </div>
          </div>

          {/* Postal Code */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">
              <MapPin className="w-4 h-4 inline mr-2" />
              Code postal
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Ex: 75001"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full px-4 py-4 text-lg bg-white/70 backdrop-blur-sm border-0 rounded-xl shadow-inner shadow-slate-200/50 focus:ring-2 focus:ring-teal-500 focus:bg-white/90 transition-all duration-300"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCalculate}
            className="w-full py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-teal-300/30 hover:shadow-xl hover:shadow-teal-400/40 transition-all duration-300 text-lg"
          >
            Calculer le prix
          </motion.button>

          {/* Summary */}
          {showSummary && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-white/60 backdrop-blur-sm"></div>
              <div className="relative p-6 space-y-4">
                <h4 className="font-bold text-slate-800 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-teal-600" />
                  Résumé de votre commande
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-start">
                    <span className="break-words pr-2">{selectedProduct.name} ({liters}L)</span>
                    <span className="font-semibold whitespace-nowrap">{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <Truck className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>Livraison</span>
                      {deliveryFee === 0 && <span className="text-green-600 ml-1 text-xs font-semibold">(Gratuite)</span>}
                    </span>
                    <span className="font-semibold">{deliveryFee.toFixed(2)}€</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {total.toFixed(2)}€
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOrder}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-green-300/30 hover:shadow-xl hover:shadow-green-400/40 transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Commander maintenant</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCalculator;

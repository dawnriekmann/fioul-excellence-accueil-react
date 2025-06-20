
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

    // Redirect to checkout with order data
    const checkoutUrl = `${heizölConfig.checkoutUrl}?data=${encodeURIComponent(JSON.stringify(orderData))}`;
    window.location.href = checkoutUrl;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full"
    >
      <div className="text-center mb-6">
        <Calculator className="w-8 h-8 text-teal-600 mx-auto mb-2" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Calculateur de prix</h3>
        <p className="text-sm sm:text-base text-gray-600">Obtenez votre devis instantané</p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Product Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type de fioul</label>
          <div className="space-y-3">
            {Object.entries(heizölConfig.products).map(([key, prod]) => (
              <label key={key} className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="product"
                  value={key}
                  checked={product === key}
                  onChange={(e) => setProduct(e.target.value)}
                  className="text-teal-600 focus:ring-teal-500 mt-1 min-w-[16px]"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-800 text-sm sm:text-base">{prod.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600 break-words">{prod.description}</div>
                  <div className="text-sm font-semibold text-teal-600">{prod.pricePerLiter.toFixed(2)}€/L</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantité (L)
          </label>
          <div className="text-xs text-gray-500 mb-2">
            Min: {heizölConfig.limits.minLiters}L - Max: {heizölConfig.limits.maxLiters}L
          </div>
          <input
            type="number"
            min={heizölConfig.limits.minLiters}
            max={heizölConfig.limits.maxLiters}
            value={liters}
            onChange={(e) => setLiters(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            Code postal
          </label>
          <input
            type="text"
            placeholder="Ex: 75001"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        {/* Calculate Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
        >
          Calculer le prix
        </motion.button>

        {/* Summary */}
        {showSummary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-lg p-4 space-y-3"
          >
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Résumé de votre commande</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-start">
                <span className="break-words pr-2">{selectedProduct.name} ({liters}L)</span>
                <span className="font-medium whitespace-nowrap">{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Truck className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>Livraison</span>
                  {deliveryFee === 0 && <span className="text-green-600 ml-1 text-xs">(Gratuite)</span>}
                </span>
                <span className="font-medium">{deliveryFee.toFixed(2)}€</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-base sm:text-lg">
                <span>Total</span>
                <span className="text-teal-600">{total.toFixed(2)}€</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOrder}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Commander maintenant</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PriceCalculator;

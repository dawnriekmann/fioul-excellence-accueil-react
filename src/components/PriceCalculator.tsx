
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Truck, ShoppingCart, MapPin, Zap, Euro } from 'lucide-react';

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
  const [isCalculating, setIsCalculating] = useState(false);

  const selectedProduct = heizölConfig.products[product as keyof typeof heizölConfig.products];
  const subtotal = liters * selectedProduct.pricePerLiter;
  const deliveryFee = subtotal >= heizölConfig.delivery.freeDeliveryThreshold ? 0 : heizölConfig.delivery.deliveryFee;
  const total = subtotal + deliveryFee;
  const savings = Math.round(total * 0.15); // 15% savings highlight

  const handleCalculate = () => {
    if (liters >= heizölConfig.limits.minLiters && liters <= heizölConfig.limits.maxLiters && postalCode) {
      setIsCalculating(true);
      
      // Simulate calculation delay for better UX
      setTimeout(() => {
        setIsCalculating(false);
        setShowSummary(true);
      }, 800);
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
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-6"
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Enhanced Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <h3 className="text-xl font-bold text-slate-800">
              Sofort-Kalkulation
            </h3>
          </div>
        </div>

        <div className="space-y-5">
          {/* Product Selection with enhanced styling */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700">Wählen Sie Ihr Fioul</label>
            <div className="space-y-3">
              {Object.entries(heizölConfig.products).map(([key, prod]) => (
                <motion.label 
                  key={key} 
                  className="block cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`border-2 rounded-xl p-4 transition-all duration-200 ${
                    product === key 
                      ? 'border-teal-500 bg-teal-50 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name="product"
                        value={key}
                        checked={product === key}
                        onChange={(e) => setProduct(e.target.value)}
                        className="text-teal-600 focus:ring-teal-500 mt-1 scale-125"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">{prod.name}</div>
                        <div className="text-sm text-slate-600 mb-2">{prod.description}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-teal-600">
                            {prod.pricePerLiter.toFixed(2)}€/L
                          </div>
                          {key === 'premium' && (
                            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              EMPFOHLEN
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Enhanced Quantity Input */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700">Benötigte Menge</label>
            <div className="text-xs text-slate-500 bg-blue-50 p-2 rounded-lg">
              💡 Mindestmenge: {heizölConfig.limits.minLiters}L • Kostenlose Lieferung ab 3000L
            </div>
            <motion.input
              type="number"
              min={heizölConfig.limits.minLiters}
              max={heizölConfig.limits.maxLiters}
              value={liters}
              onChange={(e) => setLiters(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 text-lg font-semibold"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {/* Enhanced Postal Code */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700">
              <MapPin className="w-4 h-4 inline mr-1" />
              Lieferadresse (PLZ)
            </label>
            <motion.input
              type="text"
              placeholder="z.B. 75001"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 text-lg"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {/* Enhanced Calculate Button */}
          <motion.button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="w-full py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg text-lg disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCalculating ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Berechnung läuft...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Euro className="w-5 h-5 mr-2" />
                Preis jetzt berechnen
              </div>
            )}
          </motion.button>

          {/* Enhanced Summary with conversion elements */}
          {showSummary && (
            <motion.div 
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 space-y-4 border-2 border-teal-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Savings highlight */}
              <div className="bg-green-500 text-white rounded-lg p-3 text-center font-bold">
                🎉 Sie sparen ca. {savings}€ gegenüber lokalen Anbietern!
              </div>

              <h4 className="font-bold text-slate-800 flex items-center text-lg">
                <ShoppingCart className="w-5 h-5 mr-2 text-teal-600" />
                Ihr persönliches Angebot
              </h4>
              
              <div className="space-y-3 text-base">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{selectedProduct.name} ({liters}L)</span>
                  <span className="font-bold text-lg">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center font-medium">
                    <Truck className="w-4 h-4 mr-1" />
                    Express-Lieferung
                    {deliveryFee === 0 && <span className="text-green-600 ml-2 text-sm font-bold bg-green-100 px-2 py-1 rounded-full">KOSTENLOS</span>}
                  </span>
                  <span className="font-bold text-lg">{deliveryFee.toFixed(2)}€</span>
                </div>
                <div className="border-t-2 border-slate-200 pt-3 flex justify-between font-bold text-xl">
                  <span>Gesamtpreis</span>
                  <span className="text-teal-600">{total.toFixed(2)}€</span>
                </div>
              </div>
              
              <motion.button
                onClick={handleOrder}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Jetzt bestellen - 24h Lieferung</span>
              </motion.button>
              
              <div className="text-center text-sm text-slate-500">
                ✓ Sichere Zahlung • ✓ Geld-zurück-Garantie • ✓ TÜV-geprüft
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PriceCalculator;

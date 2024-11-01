import React, { useState } from 'react';
import { Moon, Sun, Calculator } from 'lucide-react';

type Currency = 'CLP' | 'USD' | 'EUR';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [amount, setAmount] = useState<string>('');
  const [discount, setDiscount] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>('CLP');

  const calculateDiscount = () => {
    const originalAmount = parseFloat(amount) || 0;
    const discountPercent = parseFloat(discount) || 0;
    const discountAmount = (originalAmount * discountPercent) / 100;
    const finalAmount = originalAmount - discountAmount;
    return {
      discountAmount: formatCurrency(discountAmount),
      finalAmount: formatCurrency(finalAmount),
    };
  };

  const formatCurrency = (value: number): string => {
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'CLP' ? 0 : 2,
      maximumFractionDigits: currency === 'CLP' ? 0 : 2,
    });
    return formatter.format(value);
  };

  const { discountAmount, finalAmount } = calculateDiscount();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Calculator className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Calculadora de Descuentos
              </h1>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Calculator Card */}
          <div className={`rounded-xl shadow-lg p-6 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Currency Selection */}
            <div className="flex gap-2 mb-6">
              {(['CLP', 'USD', 'EUR'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    currency === curr
                      ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                      : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600')
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Monto Original
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Ingrese el monto"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>

              <div>
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Porcentaje de Descuento
                </label>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Ingrese el descuento"
                  min="0"
                  max="100"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
            </div>

            {/* Results */}
            <div className={`mt-6 p-4 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Descuento:
                  </span>
                  <span className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    {discountAmount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Precio Final:
                  </span>
                  <span className={`font-bold text-lg ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {finalAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
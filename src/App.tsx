import React, { useState, useEffect } from 'react';
import { Moon, Sun, DollarSign, Calculator, Percent, Users } from 'lucide-react';

type Currency = 'CLP' | 'USD';
type Tab = 'discount' | 'tip';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('discount');
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [currency, setCurrency] = useState<Currency>('CLP');
  const [tipAmount, setTipAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('10');
  const [splitCount, setSplitCount] = useState('1');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const calculateDiscount = () => {
    const originalAmount = parseFloat(amount) || 0;
    const discountPercentage = parseFloat(discount) || 0;
    return originalAmount - (originalAmount * discountPercentage / 100);
  };

  const calculateTip = () => {
    const billAmount = parseFloat(tipAmount) || 0;
    const tip = parseFloat(tipPercentage) || 0;
    return billAmount * (tip / 100);
  };

  const formatCurrency = (value: number) => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    }
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
  };

  const perPersonAmount = () => {
    const bill = parseFloat(tipAmount) || 0;
    const tip = calculateTip();
    const people = parseInt(splitCount) || 1;
    return (bill + tip) / people;
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl md:text-3xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Calculator className="w-6 h-6 md:w-8 md:h-8" />
            Calculator
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hover:opacity-80`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Currency Selection */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setCurrency('CLP')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              currency === 'CLP' 
                ? 'bg-blue-500 text-white' 
                : darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            CLP
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              currency === 'USD' 
                ? 'bg-blue-500 text-white' 
                : darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            USD
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab('discount')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'discount'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <Percent className="w-4 h-4" />
            Discount
          </button>
          <button
            onClick={() => setActiveTab('tip')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'tip'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <Users className="w-4 h-4" />
            Tip
          </button>
        </div>

        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
          {activeTab === 'discount' ? (
            // Discount Calculator
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Original Amount</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Discount (%)</label>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter discount percentage"
                />
              </div>
              <div className="pt-4 border-t">
                <p className="text-lg font-medium">Final Amount:</p>
                <p className="text-3xl font-bold text-blue-500">
                  {formatCurrency(calculateDiscount())}
                </p>
                <p className="text-sm opacity-75">
                  You save: {formatCurrency(parseFloat(amount) - calculateDiscount())}
                </p>
              </div>
            </div>
          ) : (
            // Tip Calculator
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Bill Amount</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                  <input
                    type="number"
                    value={tipAmount}
                    onChange={(e) => setTipAmount(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter bill amount"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tip: {tipPercentage}%</label>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={tipPercentage}
                  onChange={(e) => setTipPercentage(e.target.value)}
                  className="w-full accent-blue-500"
                />
                <div className="flex justify-between text-sm mt-1">
                  <span>0%</span>
                  <span>15%</span>
                  <span>30%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Split Between</label>
                <input
                  type="number"
                  min="1"
                  value={splitCount}
                  onChange={(e) => setSplitCount(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border focus:ring-2 focus:ring-blue-500`}
                  placeholder="Number of people"
                />
              </div>
              <div className="pt-4 border-t space-y-2">
                <p className="flex justify-between">
                  <span>Tip Amount:</span>
                  <span className="font-medium">{formatCurrency(calculateTip())}</span>
                </p>
                <p className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-medium">
                    {formatCurrency((parseFloat(tipAmount) || 0) + calculateTip())}
                  </span>
                </p>
                <p className="flex justify-between text-xl font-bold text-blue-500">
                  <span>Per Person:</span>
                  <span>{formatCurrency(perPersonAmount())}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
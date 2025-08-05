import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Gift className="h-16 w-16 text-green-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Get Exclusive <span className="text-green-600">Wellness Tips</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Subscribe to our newsletter and receive ancient Ayurvedic wisdom, exclusive discounts, and early access to new products.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Weekly wellness tips
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Exclusive offers
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  New product alerts
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe & Get 15% Off
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
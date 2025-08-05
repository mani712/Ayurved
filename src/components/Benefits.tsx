import React from 'react';
import { Shield, Leaf, Award, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "100% Natural",
      description: "Pure herbs and natural ingredients sourced directly from organic farms across India."
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Quality Assured",
      description: "Every product undergoes rigorous testing and quality checks to ensure purity and effectiveness."
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Traditional Formulations",
      description: "Ancient recipes passed down through generations, now backed by modern scientific research."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Expert Guidance",
      description: "Get personalized recommendations from certified Ayurvedic practitioners and wellness experts."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-green-600">Our Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that authentic Ayurvedic wisdom and modern quality standards can make in your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Rooted in Tradition, <span className="text-green-600">Proven by Science</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our products combine 5000 years of Ayurvedic wisdom with modern scientific validation. Each formulation is carefully crafted using time-tested recipes that have been healing people for generations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Clinically tested formulations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">GMP certified manufacturing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Zero harmful chemicals or additives</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Ayurvedic herbs and spices" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
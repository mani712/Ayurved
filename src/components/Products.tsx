import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ashwagandha Capsules",
      price: "₹599",
      originalPrice: "₹799",
      image: "https://images.pexels.com/photos/7723516/pexels-photo-7723516.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 245,
      benefits: "Stress Relief & Energy"
    },
    {
      id: 2,
      name: "Turmeric Gold Powder",
      price: "₹299",
      originalPrice: "₹399",
      image: "https://images.pexels.com/photos/4198881/pexels-photo-4198881.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 189,
      benefits: "Anti-inflammatory & Immunity"
    },
    {
      id: 3,
      name: "Triphala Tablets",
      price: "₹399",
      originalPrice: "₹499",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      benefits: "Digestive Health & Detox"
    },
    {
      id: 4,
      name: "Brahmi Oil",
      price: "₹449",
      originalPrice: "₹599",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 203,
      benefits: "Hair Care & Mental Clarity"
    },
    {
      id: 5,
      name: "Giloy Capsules",
      price: "₹349",
      originalPrice: "₹449",
      image: "https://images.pexels.com/photos/7656740/pexels-photo-7656740.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 132,
      benefits: "Immune Booster & Fever Relief"
    },
    {
      id: 6,
      name: "Neem Face Pack",
      price: "₹199",
      originalPrice: "₹299",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 287,
      benefits: "Skin Purification & Glow"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-green-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hand-picked selection of our most popular Ayurvedic remedies, each crafted with authentic herbs and traditional formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-green-600 text-sm font-semibold mb-3">{product.benefits}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center group">
                  <ShoppingCart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartModal';
import { sweeties } from '../data/products';

interface SweetiesProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

function Sweeties({ addToCart }: SweetiesProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const categories = ["All", "Brownies", "Cookies", "Mousses"];
  
  const filteredSweeties = selectedCategory === "All" 
    ? sweeties 
    : sweeties.filter(sweet => sweet.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-serif text-[#C71585] text-center mb-12">
          Delightful Sweeties
        </h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[#C71585] text-white'
                  : 'bg-[#FFD1DC]/20 text-[#C71585] hover:bg-[#FFD1DC]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sweeties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSweeties.map(sweet => (
            <div key={sweet.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link to={`/sweeties/${sweet.id}`} className="block relative h-64">
                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-[#C71585] px-3 py-1 rounded-full text-sm">
                    {sweet.category}
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Link to={`/sweeties/${sweet.id}`} className="text-xl font-serif text-gray-800 hover:text-[#C71585] transition-colors">
                    {sweet.name}
                  </Link>
                  <span className="text-[#C71585] font-semibold">{sweet.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{sweet.description}</p>
                <button 
                  onClick={() => addToCart(sweet)}
                  className="w-full bg-[#C71585] text-white px-6 py-2 rounded-full hover:bg-[#C71585]/90 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sweeties;
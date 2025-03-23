import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CartItem } from '../components/CartModal';
import { Product } from '../types/product';

interface SearchResultsProps {
  products: (Product & { type: string })[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

function SearchResults({ products, addToCart }: SearchResultsProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-serif text-[#C71585] text-center mb-6">
          Search Results
        </h1>
        <p className="text-center text-gray-600 mb-12">
          {filteredProducts.length} results for "{query}"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={`${product.type}-${product.id}`} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link 
                to={`/${product.type === 'cake' ? 'portfolio' : 'sweeties'}/${product.id}`} 
                className="block relative h-64"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-[#C71585] px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Link 
                    to={`/${product.type === 'cake' ? 'portfolio' : 'sweeties'}/${product.id}`}
                    className="text-xl font-serif text-gray-800 hover:text-[#C71585] transition-colors"
                  >
                    {product.name}
                  </Link>
                  <span className="text-[#C71585] font-semibold">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#C71585] text-white px-6 py-2 rounded-full hover:bg-[#C71585]/90 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found matching your search.</p>
            <Link to="/" className="text-[#C71585] hover:text-[#C71585]/80 mt-4 inline-block">
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
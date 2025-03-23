import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Sweeties from './pages/Sweeties';
import ProductDetail from './components/ProductDetail';
import CartModal, { CartItem } from './components/CartModal';
import SearchResults from './pages/SearchResults';
import { cakes, sweeties } from './data/products';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Combine all products for search
  const allProducts = [
    ...cakes.map(cake => ({ ...cake, type: 'cake' })),
    ...sweeties.map(sweet => ({ ...sweet, type: 'sweet' }))
  ];

  // Filter products based on search query
  const searchResults = searchQuery
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity === 0) {
        return prevItems.filter(item => item.id !== id);
      }
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding the search results to allow for clicking on them
    setTimeout(() => {
      setIsSearching(false);
    }, 200);
  };

  const handleSearchItemClick = (type: string, id: number) => {
    setSearchQuery('');
    setIsSearching(false);
    navigate(`/${type === 'cake' ? 'portfolio' : 'sweeties'}/${id}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/assets/aesthetic-cakes-logo.png" 
                  alt="Aesthetic Cakes Logo" 
                  className="h-12 w-12"
                />
                <span className="ml-3 text-2xl font-serif text-[#C71585]">Aesthetic Cakes</span>
              </Link>
            </div>

            {/* Search Panel */}
            <div className="hidden md:flex flex-1 justify-center px-8 relative">
              <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search for cakes, cookies and more"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C71585]/50 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                
                {/* Search Results Dropdown */}
                {isSearching && searchQuery && (
                  <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                    {searchResults.length > 0 ? (
                      searchResults.map((product) => (
                        <div
                          key={`${product.type}-${product.id}`}
                          onClick={() => handleSearchItemClick(product.type, product.id)}
                          className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.category}</p>
                          </div>
                          <span className="text-[#C71585] font-medium">{product.price}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-[#C71585] transition-colors">Home</Link>
              <a href="/#about" onClick={scrollToAbout} className="text-gray-600 hover:text-[#C71585] transition-colors">About</a>
              <Link to="/portfolio" className="text-gray-600 hover:text-[#C71585] transition-colors">Portfolio</Link>
              <Link to="/sweeties" className="text-gray-600 hover:text-[#C71585] transition-colors">Sweeties</Link>
              <a href="/#contact" onClick={scrollToContact} className="text-gray-600 hover:text-[#C71585] transition-colors">Contact</a>
              <button 
                onClick={handleCartClick}
                className="relative p-2 hover:bg-[#FFD1DC]/20 rounded-full transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-6 w-6 text-[#C71585]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C71585] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/portfolio" element={<Portfolio addToCart={addToCart} />} />
        <Route path="/portfolio/:id" element={<ProductDetail type="cake" addToCart={addToCart} />} />
        <Route path="/sweeties" element={<Sweeties addToCart={addToCart} />} />
        <Route path="/sweeties/:id" element={<ProductDetail type="sweet" addToCart={addToCart} />} />
        <Route path="/search" element={<SearchResults products={allProducts} addToCart={addToCart} />} />
      </Routes>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Footer */}
      <footer className="bg-[#F5F5F5] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Aesthetic Cakes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
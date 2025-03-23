import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Circle } from 'lucide-react';
import { Product } from '../types/product';
import { getProductById } from '../data/products';

interface ProductDetailProps {
  type: 'cake' | 'sweet';
  addToCart: (item: Omit<Product, 'quantity'>) => void;
}

export default function ProductDetail({ type, addToCart }: ProductDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductById(Number(id), type);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-600">Product not found</p>
        </div>
      </div>
    );
  }

  const allImages = [product.image, ...product.additionalImages];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-[#C71585] mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#C71585]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-4xl font-serif text-gray-800">{product.name}</h1>
              <div className="flex items-center">
                <Circle
                  fill={product.isVeg ? '#00A36C' : '#FF0000'}
                  stroke={product.isVeg ? '#00A36C' : '#FF0000'}
                  className="h-6 w-6"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {product.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                </span>
              </div>
            </div>

            <p className="text-2xl font-semibold text-[#C71585] mb-6">{product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Quantity per Unit</h2>
                <p className="text-gray-600">{product.quantity}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Ingredients</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Allergens</h2>
                <div className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Nutritional Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Serving Size</p>
                    <p className="font-medium">{product.nutritionalInfo.servingSize}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Calories</p>
                    <p className="font-medium">{product.nutritionalInfo.calories} kcal</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Protein</p>
                    <p className="font-medium">{product.nutritionalInfo.protein}g</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Carbohydrates</p>
                    <p className="font-medium">{product.nutritionalInfo.carbohydrates}g</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Fat</p>
                    <p className="font-medium">{product.nutritionalInfo.fat}g</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Storage & Shelf Life</h2>
                <p className="text-gray-600 mb-2">{product.storageInstructions}</p>
                <p className="text-gray-600">{product.shelfLife}</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-[#C71585] text-white px-8 py-3 rounded-full hover:bg-[#C71585]/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
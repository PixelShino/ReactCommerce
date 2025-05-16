import React, { useState, useEffect } from 'react';
import { products } from '../data/data';
import ProductCard from '../components/ProductCard';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  
  useEffect(() => {
    // Загружаем список желаний из localStorage
    const wishlistIds = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    // Находим товары по их ID
    const items = products.filter(product => wishlistIds.includes(product.id));
    setWishlistItems(items);
  }, []);
  
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">My Wishlist</h1>
        
        {wishlistItems.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p className="text-xl text-gray-600 dark:text-gray-300">Your wishlist is empty</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Add items to your wishlist by clicking the heart icon on products</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
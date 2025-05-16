import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import WishlistButton from './WishlistButton';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 dark:bg-gray-800 relative">
      <WishlistButton productId={product.id} productName={product.name} />
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-white">{product.name}</h3>
        </Link>
        <p className="text-indigo-600 font-medium mb-4 dark:text-indigo-400">${product.price}</p>
        <div className="flex justify-between items-center">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
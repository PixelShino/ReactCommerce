import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/data';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const filteredResults = products.filter(product => 
        product.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5); // Ограничиваем результаты до 5
      
      setResults(filteredResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelectProduct = (productId) => {
    navigate(`/product/${productId}`);
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleBlur = () => {
    // Небольшая задержка, чтобы успеть обработать клик по результату
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div className="relative w-full max-w-xs">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onBlur={handleBlur}
          onFocus={() => query.length > 1 && setIsOpen(true)}
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <ul className="py-1">
            {results.map(product => (
              <li 
                key={product.id}
                onClick={() => handleSelectProduct(product.id)}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-8 h-8 mr-3 rounded object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
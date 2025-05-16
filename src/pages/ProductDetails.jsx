import { useParams } from 'react-router-dom';
import { products } from '../data/data';
import { useContext } from 'react';
import { CartContext } from '../App';
import WishlistButton from '../components/WishlistButton';

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(productId, 10));

  return (
    <div className='min-h-screen px-4 py-12 bg-gray-100 dark:bg-gray-800 sm:px-6 lg:px-8'>
      {product ? (
        <div className='max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700'>
          <div className='p-8'>
            <h1 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
              Product Details
            </h1>
            <div className='flex flex-col gap-8 md:flex-row'>
              <div className='md:w-1/2'>
                <img
                  src={product.img}
                  alt={product.name}
                  className='object-cover w-full h-auto transition-shadow duration-300 rounded-lg shadow-md hover:shadow-xl'
                />
              </div>
              <div className='md:w-1/2'>
                <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                    {product.name}
                  </h2>
                  <WishlistButton
                    productId={product.id}
                    productName={product.name}
                  />
                </div>
                <p className='mb-6 text-xl font-medium text-indigo-600 dark:text-indigo-400'>
                  Price: ${product.price}
                </p>
                <button
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.name} добавлен в корзину!`);
                  }}
                  className='w-full px-6 py-3 text-white transition-colors duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center'>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            Product Not Found
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;

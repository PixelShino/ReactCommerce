import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { categories, products } from '../data/data';
import ProductCard from '../components/ProductCard';

function Home() {
  const location = useLocation();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // Выбираем случайные популярные товары при загрузке страницы
  useEffect(() => {
    const getRandomProducts = () => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    };

    setFeaturedProducts(getRandomProducts());
  }, []);

  return (
    <div className='py-10'>
      <h1 className='mb-8 text-2xl font-extrabold tracking-tight text-center text-gray-900 sm:mb-12 sm:text-4xl'>
        Categories
      </h1>
      <ul className='grid grid-cols-1 gap-4 px-5 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-7xl'>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/category/${category.name}`}
              className='relative flex flex-col items-center justify-center group'
            >
              <span className='absolute z-10 text-lg font-semibold text-white transition-all sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl group-hover:text-3xl'>
                {category.name}
              </span>
              <img
                src={category.img}
                alt={category.name}
                className='transition-all rounded-2xl group-hover:blur-[2px] w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[160px] xl:h-[180px] object-cover'
              />
              <div className='absolute inset-0 rounded-2xl bg-gray-950 opacity-35 bg-gradient-to-tr from-gray-900 via-gray-700  via-50% to-gray-300'></div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Популярные товары */}
      <div className='px-5 mx-auto mt-16 max-w-7xl'>
        <h2 className='mb-8 text-2xl font-bold text-center text-gray-900 dark:text-white'>
          Featured Products
        </h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Подписка на новости */}
      <div className='max-w-4xl px-5 py-10 mx-auto mt-16 bg-indigo-100 rounded-lg dark:bg-indigo-900'>
        <h2 className='mb-4 text-xl font-bold text-center text-gray-900 dark:text-white'>
          Subscribe to Our Newsletter
        </h2>
        <p className='mb-6 text-center text-gray-700 dark:text-gray-300'>
          Get the latest updates on new products and special discounts!
        </p>
        <form className='flex flex-col max-w-md gap-2 mx-auto sm:flex-row'>
          <input
            type='email'
            placeholder='Your email address'
            className='flex-grow px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white'
            required
          />
          <button
            type='submit'
            className='px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

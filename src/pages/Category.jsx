import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { products } from '../data/data';
import WishlistButton from '../components/WishlistButton';

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);

  const maxPrice = searchParams.get('maxPrice')
    ? Number(searchParams.get('maxPrice'))
    : Infinity;
  // const maxPrice = location.state.maxPrice;

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice,
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900'>
      <div className='container px-4 py-8 mx-auto sm:px-6 sm:py-12'>
        <h1 className='mb-8 text-2xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white sm:mb-12 sm:text-4xl'>
          Category{' '}
          <span className='text-indigo-600 dark:text-indigo-400'>
            {categoryId}
          </span>
        </h1>

        <div className='max-w-full mx-auto mb-8 sm:max-w-md sm:mb-12'>
          <label
            htmlFor='maxPrice'
            className='block mb-2 text-base font-medium text-gray-700 dark:text-gray-300 sm:mb-3 sm:text-lg'
          >
            Filter by Maximum Price
          </label>
          <div className='relative'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 sm:pl-4'>
              $
            </span>
            <input
              type='number'
              id='maxPrice'
              placeholder='Enter max price'
              value={searchParams.get('maxPrice') || ''}
              onChange={handleChange}
              className='w-full py-2 pr-3 text-sm text-gray-700 transition duration-200 ease-in-out bg-white border border-gray-300 rounded-lg shadow-sm dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 sm:py-3 pl-7 sm:pl-8 sm:pr-4 sm:text-base focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
            />
          </div>
        </div>

        <ul className='grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {currentCategoryArray.map((product) => (
            <li
              key={product.name}
              className='relative overflow-hidden transition duration-300 transform bg-white shadow-lg dark:bg-gray-700 group rounded-xl sm:rounded-2xl hover:scale-105 hover:shadow-xl'
            >
              <Link to={`/product/${product.id}`} className='block'>
                <div className='relative'>
                  <WishlistButton
                    productId={product.id}
                    productName={product.name}
                  />
                  <img
                    src={product.img}
                    alt={product.name}
                    className='object-cover w-full h-40 transition duration-300 sm:h-48 md:h-56 group-hover:opacity-90'
                  />
                  <div className='absolute px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full sm:px-3 sm:text-sm top-2 sm:top-3 left-2 sm:left-3'>
                    ${product.price}
                  </div>
                </div>
                <div className='p-4 sm:p-6'>
                  <h2 className='mb-2 text-lg font-bold text-gray-900 transition duration-300 dark:text-white sm:text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
                    {product.name}
                  </h2>
                  <div className='flex items-center justify-between'>
                    <span className='text-xs text-gray-500 dark:text-gray-400 sm:text-sm'>
                      View Details
                    </span>
                    <svg
                      className='w-4 h-4 text-indigo-600 sm:w-5 sm:h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;

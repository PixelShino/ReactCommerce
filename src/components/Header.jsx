import { NavLink } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import NavMenuLink from '../UI/NavLinkMenu';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import { CartContext } from '../App';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [wishlistCount, setWishlistCount] = useState(0);
  
  // Подсчет общего количества товаров в корзине
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // Получаем количество товаров в избранном из localStorage
  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };
    
    // Обновляем счетчик при загрузке
    updateWishlistCount();
    
    // Добавляем слушатель события storage для обновления счетчика при изменении localStorage
    window.addEventListener('storage', updateWishlistCount);
    
    // Создаем интервал для периодической проверки localStorage
    const interval = setInterval(updateWishlistCount, 1000);
    
    return () => {
      window.removeEventListener('storage', updateWishlistCount);
      clearInterval(interval);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className='z-[9999] fixed w-full flex justify-between px-5 py-8 bg-indigo-500 drop-shadow-sm mt-[-80px]'>
      <div className="flex items-center">
        <NavLink
          to={'/'}
          className='text-xl font-bold text-gray-100 hover:text-gray-50 mr-4'
        >
          E-commerce
        </NavLink>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>

      <button className='text-white md:hidden' onClick={toggleMenu}>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block fixed md:relative top-[88px] left-0 right-0 bg-indigo-500 md:w-2/5 md:top-0 z-[9999] w-full`}
      >
        <ul className='flex flex-col items-center justify-around py-4 md:flex-row md:py-0'>
          <li className='py-2 md:py-0' onClick={closeMenu}>
            <NavMenuLink to={'/'}>Home</NavMenuLink>
          </li>
          <li className='py-2 md:py-0' onClick={closeMenu}>
            <NavMenuLink to={'/about'}>About</NavMenuLink>
          </li>
          <li className='py-2 md:py-0' onClick={closeMenu}>
            <NavMenuLink to={'/cart'}>
              Cart {cartItemsCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-red-500 rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </NavMenuLink>
          </li>
          <li className='py-2 md:py-0' onClick={closeMenu}>
            <NavMenuLink to={'/wishlist'}>
              Wishlist {wishlistCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-pink-500 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </NavMenuLink>
          </li>
          <li className='py-2 md:py-0 ml-4'>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

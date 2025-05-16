import { createContext, useState, useContext, useEffect } from 'react';

// Создаем контекст для избранного
const WishlistContext = createContext();

// Провайдер контекста
export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    // Инициализируем состояние из localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Обновляем localStorage при изменении списка избранного
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    // Создаем событие для оповещения других компонентов
    window.dispatchEvent(new Event('storage'));
  }, [wishlistItems]);

  // Добавление/удаление товара из избранного
  const toggleWishlistItem = (productId) => {
    setWishlistItems((prevItems) => {
      if (prevItems.includes(productId)) {
        return prevItems.filter(id => id !== productId);
      } else {
        return [...prevItems, productId];
      }
    });
  };

  // Проверка наличия товара в избранном
  const isInWishlist = (productId) => {
    return wishlistItems.includes(productId);
  };

  // Получение количества товаров в избранном
  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlistItem,
        isInWishlist,
        getWishlistCount
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Хук для использования контекста избранного
export function useWishlist() {
  return useContext(WishlistContext);
}
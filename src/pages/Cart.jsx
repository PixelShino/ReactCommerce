import React, { useContext } from 'react';
import { CartContext } from '../App';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className='max-w-4xl p-6 mx-auto'>
      <h1 className='mb-8 text-3xl font-bold text-gray-800'>Shopping Cart</h1>

      {/* Список товаров */}
      <div className='p-6 mb-8 bg-white rounded-lg shadow-md'>
        <h2 className='mb-4 text-xl font-semibold text-gray-700'>
          Your Items:
        </h2>
        {cartItems.length === 0 ? (
          <p className='py-4 text-gray-500'>Ваша корзина пуста</p>
        ) : (
          <ul className='divide-y divide-gray-200'>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className='flex items-center justify-between py-4'
              >
                <div className='flex items-center'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='w-12 h-12 mr-4 rounded'
                  />
                  <div>
                    <span className='text-gray-800'>{item.name}</span>
                    <div className='flex items-center mt-1'>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className='px-2 py-1 text-xs text-white bg-gray-500 rounded'
                      >
                        -
                      </button>
                      <span className='mx-2'>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className='px-2 py-1 text-xs text-white bg-gray-500 rounded'
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-end'>
                  <span className='font-medium text-gray-900'>
                    ${item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='mt-1 text-sm text-red-500 hover:text-red-700'
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className='mt-4 text-xl font-bold text-gray-900'>
          Total: ${getTotalPrice()}
        </p>
      </div>

      {/* Форма */}
      <form
        onSubmit={handleSubmit}
        className='p-6 bg-white rounded-lg shadow-md'
      >
        <h2 className='mb-6 text-xl font-semibold text-gray-700'>
          Enter Your Details:
        </h2>

        {/* Поле Name */}
        <div className='mb-6'>
          <input
            id='name'
            type='text'
            placeholder='Enter your full name'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
          />
          <label
            htmlFor='name'
            className='block mt-1 text-sm font-medium text-gray-700 peer-hover:text-blue-400'
          >
            Name
          </label>
        </div>

        {/* Поле Email */}
        <div className='mb-6'>
          <input
            id='email'
            type='email'
            placeholder='Enter your email address'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
          />
          <label
            htmlFor='email'
            className='block mt-1 text-sm font-medium text-gray-700 peer-hover:text-blue-400'
          >
            Email
          </label>
        </div>

        {/* Поле Address */}
        <div className='mb-6'>
          <textarea
            id='address'
            placeholder='Enter your delivery address'
            rows='3'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
          ></textarea>
          <label
            htmlFor='address'
            className='block mt-1 text-sm font-medium text-gray-700 peer-hover:text-blue-400'
          >
            Address
          </label>
        </div>

        {/* Поле Payment */}
        <div className='mb-8'>
          <select
            id='payment'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
          >
            <option value='' disabled>
              Select payment method
            </option>
            <option value='creditCard'>Credit Card</option>
            <option value='paypal'>PayPal</option>
            <option value='cash'>Cash on Delivery</option>
          </select>
          <label
            htmlFor='payment'
            className='block mt-1 text-sm font-medium text-gray-700 peer-hover:text-blue-400'
          >
            Payment Method
          </label>
        </div>

        {/* Кнопка Submit */}
        <button
          type='submit'
          className='w-full px-6 py-3 text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Cart;

import cusomersImg from '../assets/images/customers.png';
function About() {
  return (
    <div className='max-w-4xl px-4 py-8 mx-auto prose '>
      {/* Заголовки */}
      <h1 className='mb-8 text-4xl font-bold text-center text-indigo-600 transition-colors duration-300 hover:text-indigo-700'>
        About Our E-commerce Platform
      </h1>
      <h2 className='mt-12 mb-6 text-3xl font-semibold text-gray-800'>
        Our Vision
      </h2>
      <h3 className='mt-8 mb-4 text-2xl font-medium text-gray-700'>
        How We Started
      </h3>
      <h4 className='mt-6 mb-3 text-xl font-medium text-gray-600'>
        Key Milestones
      </h4>
      <h5 className='mt-4 mb-2 text-lg font-medium text-gray-600'>
        Smaller Heading Example
      </h5>
      <h6 className='mt-4 mb-2 text-base font-medium text-gray-600'>
        Even Smaller Heading Example
      </h6>

      {/* Абзацы */}
      <p className='mb-6 leading-relaxed text-gray-600 transition-colors duration-200 hover:text-gray-700'>
        Welcome to our e-commerce platform! We are dedicated to providing the
        best online shopping experience. With a wide range of products,
        competitive pricing, and exceptional customer service, we strive to make
        your shopping journey as seamless as possible.
      </p>
      <p className='mb-8 leading-relaxed text-gray-600 transition-colors duration-200 hover:text-gray-700'>
        Our mission is to connect customers with products they love, from
        trusted sellers around the world. Whether you're looking for the latest
        gadgets, fashion, or home essentials, we've got you covered.
      </p>

      {/* Списки */}
      <h2 className='mt-12 mb-6 text-3xl font-semibold text-gray-800'>
        Why Choose Us?
      </h2>
      <ul className='pl-6 mb-8 space-y-2 text-gray-600 list-disc'>
        <li className='transition-colors duration-200 hover:text-indigo-600'>
          Wide variety of products
        </li>
        <li className='transition-colors duration-200 hover:text-indigo-600'>
          Competitive prices
        </li>
        <li className='transition-colors duration-200 hover:text-indigo-600'>
          Fast and reliable shipping
        </li>
        <li className='transition-colors duration-200 hover:text-indigo-600'>
          Excellent customer support
        </li>
      </ul>

      <h3 className='mt-8 mb-4 text-2xl font-medium text-gray-700'>
        Our Key Features:
      </h3>
      <ol className='pl-6 mb-8 space-y-2 text-gray-600 list-decimal'>
        <li className='transition-colors duration-200 hover:text-indigo-600'>
          User-friendly interface
        </li>
        <li className='transition-colors duration-200 hover:text-indigo-600'>
          Secure payment options
        </li>
        <li className='transition-colors duration-200 hover:text-indigo-600'>
          Real-time order tracking
        </li>
      </ol>

      {/* Блок цитат */}
      <blockquote className='pl-4 my-8 italic text-gray-700 transition-colors duration-200 border-l-4 border-indigo-500 hover:text-gray-800'>
        "E-commerce is not the cherry on the cake, it's the new cake." —
        <span className='font-semibold'>Jean-Paul Ago</span>
      </blockquote>

      {/* Кодовые блоки */}
      <h3 className='mt-8 mb-4 text-2xl font-medium text-gray-700'>
        Example Code Block
      </h3>
      <pre className='p-4 overflow-x-auto text-gray-100 bg-gray-800 rounded-lg'>
        <code>
          {`function Shop() {
  return (
    <div>
      <h1>Welcome to the Shop</h1>
      <p>Find your favorite products here.</p>
    </div>
  );
}`}
        </code>
      </pre>

      {/* Ссылки */}
      <h3 className='mt-8 mb-4 text-2xl font-medium text-gray-700'>
        Learn More
      </h3>
      <p className='mb-6 text-gray-600'>
        Check out our{' '}
        <a
          href='https://www.example.com'
          className='text-indigo-600 underline transition-colors duration-200 hover:text-indigo-700'
        >
          official website
        </a>{' '}
        for more information about our services.
      </p>

      {/* Изображения */}
      <h3 className='mt-8 mb-4 text-2xl font-medium text-gray-700'>
        Our Happy Customers
      </h3>
      <img
        src={cusomersImg}
        alt='Happy customers'
        className='mb-4 transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl'
      />
      <p className='mb-8 text-gray-600'>
        Join thousands of happy customers who trust us with their shopping
        needs.
      </p>
    </div>
  );
}

export default About;

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='py-12 text-xs text-white bg-gray-900'>
      <div className='container px-4 mx-auto'>
        <div className='grid grid-cols-3 gap-12'>
          {/* Customer Support */}
          <div className='flex flex-col items-center space-y-6'>
            <h3 className='items-center text-2xl font-bold text-center'>
              Customer Support
            </h3>
            <ul className='space-y-4 text-center'>
              <li>
                <Link to='#' className='transition-colors hover:text-gray-300'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to='#' className='transition-colors hover:text-gray-300'>
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to='#' className='transition-colors hover:text-gray-300'>
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  to='#'
                  className='text-center transition-colors hover:text-gray-300 '
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-2xl font-bold'>Follow Us</h3>
            <ul className='space-y-4 text-center'>
              <li>
                <Link to='#' className='transition-colors hover:text-gray-300'>
                  Facebook
                </Link>
              </li>
              <li>
                <Link to='#' className='transition-colors hover:text-gray-300'>
                  Instagram
                </Link>
              </li>
              <li>
                <Link to='#' className='transition-colors hover:text-gray-300'>
                  Twitter
                </Link>
              </li>
              <li>
                <Link to='#' className='transition-colors hover:text-gray-300'>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col items-center space-y-6 '>
            <h3 className='text-2xl font-bold text-center'>Contact Us</h3>
            <div className='space-y-4 text-center'>
              <p className='text-gray-300'>Email: support@E-commerce.com</p>
              <p className='text-gray-300'>Phone: +1 234 567 890</p>
              <p className='text-gray-300'>
                Address: 123 Market Street,
                <br /> City, Country
              </p>
            </div>
          </div>
        </div>

        <div className='pt-8 mt-12 text-2xl border-t border-gray-800 '>
          <a>
            <p className='text-center text-gray-400'>&copy; Dmitrii Goldobin</p>
          </a>
          <a
            href='https://github.com/PixelShino'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-center text-gray-400'>
              <i className='fab fa-github'></i>GitHub
            </p>
          </a>
          <a
            href='https://t.me/PixelShino'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-center text-gray-400'>
              <i className='fab fa-telegram'></i> Telegrem
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

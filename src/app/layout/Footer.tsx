import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-primary-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and brief info */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary-white">
              Captech
            </Link>
            <p className="mt-2 text-sm text-primary-400">
              Brightening the future with innovative street lighting solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="text-primary-400 hover:text-primary-white">
              Home
            </Link>
            <Link href="/about" className="text-primary-400 hover:text-primary-white">
              About
            </Link>
            <Link href="/products" className="text-primary-400 hover:text-primary-white">
              Products
            </Link>
            <Link href="/contact" className="text-primary-400 hover:text-primary-white">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-primary-400 hover:text-primary-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.6 9.1 8.3 9.9v-7h-2.5V12h2.5v-2.1c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.7l-.4 2.9h-2.3v7C18.4 21.1 22 17 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-primary-400 hover:text-primary-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.633 7.897c.014.196.014.394.014.59 0 6.023-4.584 12.96-12.96 12.96-2.576 0-4.971-.753-6.992-2.049.358.043.717.057 1.089.057 2.145 0 4.117-.716 5.685-1.92-2.007-.042-3.706-1.37-4.291-3.197.28.042.565.07.857.07.41 0 .807-.056 1.186-.154-2.096-.425-3.677-2.27-3.677-4.493 0-.02 0-.042.014-.063.615.343 1.328.552 2.08.574-1.236-.826-2.043-2.236-2.043-3.834 0-.843.227-1.633.626-2.313C6.55 8.4 9.44 10.08 12.723 10.22c-.07-.33-.114-.676-.114-1.03 0-2.49 2.02-4.513 4.513-4.513 1.3 0 2.475.552 3.3 1.435a8.954 8.954 0 002.865-1.1 4.485 4.485 0 01-1.983 2.486 8.978 8.978 0 002.586-.708c-.596.877-1.348 1.646-2.215 2.262z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-primary-400 hover:text-primary-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.5 3h-15C3.7 3 3 3.7 3 4.5v15c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zM8.5 18H5.5V10h3v8zm-1.5-9.1C6.2 8.9 5.5 8.2 5.5 7.5S6.2 6.1 7 6.1c.8 0 1.5.7 1.5 1.4S7.8 8.9 7 8.9zm12 9.1h-3V14c0-1-.8-1.9-1.9-1.9-1 0-1.9.8-1.9 1.9v4H9.5V10h3v1.1c.7-.6 1.6-1 2.5-1 1.9 0 3.5 1.5 3.5 3.5v4.4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-primary-400 text-sm">
          &copy; {new Date().getFullYear()} Captech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

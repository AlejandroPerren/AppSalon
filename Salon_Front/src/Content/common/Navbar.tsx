import { useState } from 'react';

export const NavbarAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <a href="/">
        <h1 className="text-3xl font-bold">App Salon</h1>
        </a>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 text-lg md:items-center`}>
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/api/servicios" className="hover:text-gray-200">Servicios</a></li>
          <li><a href="/contacto" className="hover:text-gray-200">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

import * as React from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold cursor-pointer">
          <Link to="/" className="text-white hover:text-gray-400">MyBrand</Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-5 mt-4 md:mt-0">
            <li><Link to="/home" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/service" className="hover:text-gray-400">Service</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/" className="hover:text-gray-400">Products</Link></li>
           
          </ul>
        </div>

        {/* Icons and Dashboard */}
        <div className="hidden md:flex gap-5 items-center">
          <Link to="/cart" className="flex items-center hover:text-gray-400">
            <ShoppingCartIcon fontSize="large" />
            <span className="ml-2">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


import * as React from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide cursor-pointer">
          <Link to="/" className="text-green-500 hover:text-green-400 transition-colors duration-300">
            KitchenMart
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`md:flex md:items-center ${isOpen ? 'block mt-4' : 'hidden'} md:mt-0 md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 text-lg font-medium">
            <li><Link to="/home" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-green-400 transition">Products</Link></li>
            <li><Link to="/service" className="hover:text-green-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
            <li><Link to="/about" className="hover:text-green-400 transition">About</Link></li>
          </ul>
        </div>

        {/* Cart */}
        <div className="hidden md:flex gap-5 items-center">
          <Link to="/cart" className="flex items-center bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition">
            <ShoppingCartIcon fontSize="medium" />
            <span className="ml-2 font-semibold">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

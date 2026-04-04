import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center shadow-md">
      {/* Clickable Logo */}
      <Link to="/" className="text-xl font-bold tracking-tight hover:text-blue-400 transition-colors">
        MyLabApp
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        <Link to="/login" className="hover:text-blue-400 transition-colors">Login</Link>
        
        {/* Register Button styled differently */}
        <Link 
          to="/register" 
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
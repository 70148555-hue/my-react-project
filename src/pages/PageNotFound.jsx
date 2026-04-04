import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <p className="text-2xl font-bold text-gray-800 mt-4">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2">The page you're looking for doesn't exist or has been moved.</p>
      
      <Link 
        to="/" 
        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
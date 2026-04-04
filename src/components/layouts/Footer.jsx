import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">MyLabApp</h4>
          <p className="text-sm">Building the future of React applications with speed and style.</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Newsletter</h4>
          <input type="text" placeholder="Email" className="bg-gray-800 p-2 rounded w-full border-none focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
        © 2026 MyLabApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
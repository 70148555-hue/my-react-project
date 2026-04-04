import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate a successful login
    alert(`Welcome, ${email}!`);
    navigate('/'); // Send user back to home page
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-lg rounded-xl w-96 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required 
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
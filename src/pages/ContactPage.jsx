import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch ✉️
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* 2. Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                <input type="text" placeholder="Last Name" className="p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              <textarea placeholder="How can we help you?" rows="4" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* 3. Info & Socials */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="font-bold text-gray-900">Our Office</h4>
                  <p className="text-gray-600">123 Tech Avenue, Silicon Valley, CA 94043</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="text-3xl">📧</span>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">support@mylabapp.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-8 bg-gray-900 rounded-3xl text-white">
              <h4 className="font-bold mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4 text-2xl">
                <button className="hover:text-blue-400 transition-colors">🌐</button>
                <button className="hover:text-blue-400 transition-colors">📸</button>
                <button className="hover:text-blue-400 transition-colors">💼</button>
                <button className="hover:text-blue-400 transition-colors">🐦</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
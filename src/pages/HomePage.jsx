export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
          The Future of <span className="text-blue-600">Development</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Everything you need to build, deploy, and scale your React applications in record time.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">Get Started Free</button>
          <button className="bg-white border-2 border-gray-200 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">Watch Demo</button>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Built with Vite for near-instant hot module replacement.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Secure by Default</h3>
            <p className="text-gray-600">Enterprise-grade security for your data and users.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Modern Styling</h3>
            <p className="text-gray-600">Fully responsive layouts powered by Tailwind CSS.</p>
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-blue-600 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          <div><h4 className="text-4xl font-black">99.9%</h4><p className="opacity-80">Uptime</p></div>
          <div><h4 className="text-4xl font-black">24/7</h4><p className="opacity-80">Support</p></div>
          <div><h4 className="text-4xl font-black">10k+</h4><p className="opacity-80">Users</p></div>
          <div><h4 className="text-4xl font-black">0$</h4><p className="opacity-80">Entry Fee</p></div>
        </div>
      </section>
    </div>
  );
}
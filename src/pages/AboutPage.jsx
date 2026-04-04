export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 1. Page Header */}
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-5xl font-bold">Our Story</h1>
        <p className="mt-4 text-gray-400 text-lg">Leading the way in modern web solutions.</p>
      </div>

      {/* 2. Mission Section */}
      <div className="max-w-5xl mx-auto -mt-12 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that web development should be accessible, fast, and beautiful. 
              Our team works tirelessly to bridge the gap between complex backend logic 
              and elegant frontend design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2024, MyLabApp started as a small project and has grown into 
              a platform used by developers worldwide to showcase their skills.
            </p>
          </div>
          <div className="flex-1 bg-blue-100 h-64 w-full rounded-2xl flex items-center justify-center text-5xl">
            🏗️
          </div>
        </div>
      </div>

      {/* 3. Values Section */}
      <div className="max-w-5xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border-l-4 border-blue-500 text-left shadow-sm">
            <h4 className="font-bold text-lg">Innovation</h4>
            <p className="text-gray-500 mt-2">We never stop learning and implementing the latest tech.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border-l-4 border-green-500 text-left shadow-sm">
            <h4 className="font-bold text-lg">Community</h4>
            <p className="text-gray-500 mt-2">Open source and collaboration are at our heart.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
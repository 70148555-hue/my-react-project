export default function RegisterPage() {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-full max-w-lg p-10 bg-white rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-black mb-2 text-gray-900">Create Account ✨</h2>
        <p className="text-gray-500 mb-8">Join 1,000+ developers today.</p>
        <div className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-400" />
          <input type="password" placeholder="Create Password" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-400" />
          <button className="w-full bg-gray-900 text-white p-4 rounded-xl font-bold hover:bg-black transition-all">Create Free Account</button>
        </div>
      </div>
    </div>
  );
}
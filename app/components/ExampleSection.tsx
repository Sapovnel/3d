export default function ExampleSection() {
  return (
    <section className="bg-linear-to-br from-gray-50 to-white py-20 px-6 relative overflow-hidden">
      {/* Decorative 3D Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our 3D virtual try-on experience with real-world examples
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Example 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-video bg-linear-to-br from-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-purple-200/30 to-blue-200/30"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">👕</div>
                <p className="text-gray-600">Interactive 3D Model</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Classic T-Shirt Collection</h3>
              <p className="text-gray-600 mb-4">
                Virtually try on our premium classic T-shirt collection in real-time with accurate fabric draping and lighting.
              </p>
              <button className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm">
                Try Now
              </button>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-blue-200/30 to-purple-200/30"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-600">Customization Tools</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Design Studio</h3>
              <p className="text-gray-600 mb-4">
                Create your own designs with our immersive 3D customization tools. See your designs in real-time environments.
              </p>
              <button className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm">
                Design Now
              </button>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-video bg-linear-to-br from-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-purple-200/30 to-blue-200/30"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">🌍</div>
                <p className="text-gray-600">Immersive Environments</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">360° Environments</h3>
              <p className="text-gray-600 mb-4">
                Experience apparel in stunning 3D environments including urban scenes, outdoor settings, and more.
              </p>
              <button className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm">
                Explore
              </button>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-blue-200/30 to-purple-200/30"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-600">Mobile Compatible</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Experience</h3>
              <p className="text-gray-600 mb-4">
                Enjoy the full 3D experience on your mobile device. Optimized for smooth performance on any screen size.
              </p>
              <button className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm">
                View Mobile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

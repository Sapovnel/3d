import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Luxury Designer Collection Launch",
      brand: "Premium Fashion House",
      category: "Fashion Brand",
      status: "completed",
      description: "Complete 3D virtual showroom for a luxury designer's latest collection with interactive environment and real-time customization.",
      image: "👗",
      metrics: {
        users: "250K+",
        conversions: "35%",
      },
    },
    {
      id: 2,
      title: "Sustainable Fashion Initiative",
      brand: "EcoWear Global",
      category: "Sustainability",
      status: "completed",
      description: "Immersive 3D experience showcasing sustainable fabric innovations and eco-friendly production processes.",
      image: "🌿",
      metrics: {
        users: "180K+",
        conversions: "28%",
      },
    },
    {
      id: 3,
      title: "Sports Performance Apparel Simulator",
      brand: "Athletic Excellence Inc.",
      category: "Sports Tech",
      status: "completed",
      description: "Advanced 3D simulation for performance wear showing fabric behavior, fit precision, and athletic movement.",
      image: "⚽",
      metrics: {
        users: "420K+",
        conversions: "42%",
      },
    },
    {
      id: 4,
      title: "Streetwear Collaboration Platform",
      brand: "Urban Culture Brands",
      category: "Streetwear",
      status: "ongoing",
      description: "Interactive 3D platform enabling multiple streetwear brands to collaborate and showcase limited edition collections.",
      image: "🎨",
      metrics: {
        users: "150K+",
        conversions: "In Progress",
      },
    },
    {
      id: 5,
      title: "Virtual Try-On Mobile Experience",
      brand: "Global Fashion Retailer",
      category: "Mobile App",
      status: "ongoing",
      description: "Mobile-first 3D apparel simulator with AR integration for seamless on-device virtual try-on experience.",
      image: "📱",
      metrics: {
        users: "520K+",
        conversions: "In Progress",
      },
    },
    {
      id: 6,
      title: "Enterprise B2B Fashion Portal",
      brand: "Fashion Wholesale Corp",
      category: "B2B Commerce",
      status: "completed",
      description: "Professional 3D catalog system for wholesale buyers with bulk ordering and customization capabilities.",
      image: "💼",
      metrics: {
        users: "5K+ Businesses",
        conversions: "68%",
      },
    },
    {
      id: 7,
      title: "Metaverse Fashion Week Experience",
      brand: "Virtual Fashion Week",
      category: "Metaverse",
      status: "ongoing",
      description: "Immersive virtual fashion week with 3D runway shows, designer boutiques, and interactive networking spaces.",
      image: "🌐",
      metrics: {
        users: "800K+",
        conversions: "In Progress",
      },
    },
    {
      id: 8,
      title: "Luxury Personalization Engine",
      brand: "Bespoke Tailoring House",
      category: "Premium",
      status: "completed",
      description: "AI-powered 3D fitting system with real-time customization for made-to-measure luxury garments.",
      image: "✨",
      metrics: {
        users: "45K+",
        conversions: "52%",
      },
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "45+" },
    { label: "Active Brands", value: "500+" },
    { label: "Total Users Engaged", value: "5M+" },
    { label: "Avg. Conversion Lift", value: "40%" },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center overflow-hidden pt-20 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse"></div>
        </div>

        {/* 3D Visual Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-40 pointer-events-none hidden lg:block">
          <div className="w-full h-full bg-linear-to-br from-purple-300 to-blue-300 rounded-3xl transform -rotate-12 shadow-2xl blur-md"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-8">
            <span className="px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg">
              🎯 Our Portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            3D Fashion Simulation
            <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Projects</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful 3D fashion simulations that have transformed how brands showcase and sell apparel online.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-linear-to-b from-gray-50 to-white py-20 px-6 relative overflow-hidden">
        {/* Decorative 3D Blobs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600">Case studies from our most impactful 3D fashion initiatives</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Visual */}
                <div className="bg-linear-to-br from-purple-100 to-blue-100 h-48 flex items-center justify-center text-7xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'completed'
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-blue-100 text-blue-700 border border-blue-300'
                      }`}
                    >
                      {project.status === 'completed' ? '✓ Completed' : '⏳ Ongoing'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-purple-600 text-sm font-semibold mb-1">{project.brand}</p>
                  <p className="text-blue-600 text-xs font-medium mb-4">{project.category}</p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>

                  {/* Metrics */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Users Engaged</p>
                        <p className="text-gray-900 font-bold text-lg">{project.metrics.users}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Conversions</p>
                        <p className="text-purple-600 font-bold text-lg">{project.metrics.conversions}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href={`/projects/${project.id}`} className="block w-full">
                    <button className="w-full px-4 py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white rounded-lg font-semibold transition-all duration-300">
                      View Case Study
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Filter Info */}
          <div className="bg-white border border-gray-200 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "👗", name: "Fashion Brands", count: "15 Projects" },
                { icon: "🌿", name: "Sustainability", count: "8 Projects" },
                { icon: "⚽", name: "Sports & Performance", count: "12 Projects" },
                { icon: "📱", name: "Mobile Solutions", count: "10 Projects" },
              ].map((cat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-3">{cat.icon}</div>
                  <h4 className="text-gray-900 font-semibold mb-1">{cat.name}</h4>
                  <p className="text-gray-600 text-sm">{cat.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-b from-gray-50 via-purple-50/20 to-blue-50/20 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Launch Your 3D Fashion Project?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let our team of experts help you create an immersive 3D experience that drives engagement and conversions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-3 border-2 border-gray-800 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

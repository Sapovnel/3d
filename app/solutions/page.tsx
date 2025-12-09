import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "3D Clothing Design Solutions | Virtual Fashion Software | virtuality.fashion",
  description: "Discover our 3D fashion design software solutions: virtual clothing prototyping, digital fitting rooms, photorealistic rendering, and collaborative design platform. Sustainable fashion design tools for modern brands.",
  keywords: "3d clothing design software, virtual fashion software, digital garment design, virtual try-on fashion software, 3d visualization clothing, virtual fitting room software, sustainable fashion 3d design",
};

export default function SolutionsPage() {
  const solutions = [
    {
      id: 1,
      category: "3D Clothing Design & Modeling",
      icon: "🎨",
      headline: "Professional 3D Fashion Design Software",
      description: "Industry-leading 3D clothing design software with CLO3D, Browzwear, and Marvelous Designer integration.",
      benefits: [
        "Realistic 3D clothing simulation with accurate draping and fabric behavior",
        "Easy-to-use 3D modeling software designed for fashion professionals",
        "Fast to market with digital-first design workflows",
        "Create photorealistic 3D garment visualizations"
      ],
      keywords: ["3d fashion design software", "3d clothing software", "fashion 3d software", "3d clothes modeling software"]
    },
    {
      id: 2,
      category: "Virtual Prototyping & Sampling",
      icon: "💎",
      headline: "Virtual Clothing Prototyping Platform",
      description: "Digital garment design and virtual prototyping that eliminates physical sampling costs.",
      benefits: [
        "Reduce production cost by 60% with virtual samples",
        "Virtual clothing designer tools for rapid iteration",
        "Sustainable fashion design approach reducing waste",
        "Digital sample creation with photorealistic rendering"
      ],
      keywords: ["virtual clothing prototyping", "digital sample creation", "sustainable fashion", "virtual 3d software"]
    },
    {
      id: 3,
      category: "Ecommerce & Visualization",
      icon: "🛍️",
      headline: "3D Clothing Visualization for Ecommerce",
      description: "Photorealistic 3D clothing visualization and virtual try-on solutions for fashion ecommerce.",
      benefits: [
        "3D cloth visualization for product pages",
        "Virtual try-on fashion software integration",
        "Digital fitting room for enhanced shopping experience",
        "3D clothing configurator for custom designs"
      ],
      keywords: ["fashion ecommerce 3d clothing visualization", "virtual try-on software", "digital fitting room", "3d clothing configurator online"]
    },
    {
      id: 4,
      category: "CAD & Technical Design",
      icon: "📐",
      headline: "Clothing CAD 3D Tool & Software",
      description: "Professional garment CAD software online for technical design and pattern making.",
      benefits: [
        "Clothing CAD 3D tool for technical flats and spec sheets",
        "Garment CAD software online - cloud-based access anywhere",
        "Fashion design software for professionals with advanced features",
        "Custom clothing 3D design online capabilities"
      ],
      keywords: ["clothing cad 3d tool", "garment cad software online", "fashion design software for professionals"]
    },
    {
      id: 5,
      category: "Collaborative Platform",
      icon: "🌐",
      headline: "Cloud-Based 3D Fashion Design Platform",
      description: "Collaborative fashion design online platform connecting brands with expert designers.",
      benefits: [
        "Cloud-based 3D fashion design platform accessible anywhere",
        "Collaborative fashion design online workflows",
        "Virtual 3D design teams for scalable production",
        "Online fashion design software with real-time collaboration"
      ],
      keywords: ["collaborative fashion design online", "cloud-based 3d fashion design platform", "online fashion design software"]
    },
    {
      id: 6,
      category: "Industry-Specific Solutions",
      icon: "🏭",
      headline: "Solutions for Apparel Manufacturing",
      description: "Specialized 3D design software for fashion brands, wholesale, and manufacturing.",
      benefits: [
        "Fashion brands 3D design software with enterprise features",
        "Apparel manufacturing 3D design software for production",
        "Fashion wholesale 3D clothing software for buyers",
        "Top 3D modeling software trusted by leading brands"
      ],
      keywords: ["fashion brands 3d design software", "apparel manufacturing 3d design software", "fashion wholesale 3d clothing software"]
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-white min-h-[60vh] flex items-center border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Solutions & Capabilities</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Complete 3D Fashion Design Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              From virtual clothing prototyping to collaborative design platforms—discover how our 3D fashion design software and services transform your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/team">
                <button className="px-8 py-4 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors">
                  Explore Platform
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={solution.id} className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <p className="text-sm uppercase tracking-wide text-purple-600 font-semibold mb-3">
                    {solution.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    {solution.headline}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="shrink-0 text-purple-600">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {solution.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-gray-200 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">[{solution.category} Visual]</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
            Why Choose Our Virtual Fashion Design Software?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Easiest 3D Modeling Software</h3>
              <p className="text-gray-700 leading-relaxed">
                Simple 3D modeling software designed for fashion professionals. No steep learning curve—start designing in hours, not weeks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Fast to Market</h3>
              <p className="text-gray-700 leading-relaxed">
                Fast to market clothing 3D design software that reduces collection development time by 50%. Launch faster than competitors.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Sustainable Fashion</h3>
              <p className="text-gray-700 leading-relaxed">
                Sustainable fashion 3D design software that eliminates physical sampling waste and reduces your environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Virtual Fashion Design Software Use Cases
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            From design to production to ecommerce—our platform supports your entire workflow
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Design Your Own Clothes Virtually</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Virtual clothes designer platform for creating custom garments. Design your own clothes virtually with intuitive 3D tools.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Virtual clothing designer interface</li>
                <li>• 3D clothes maker tools</li>
                <li>• 3D clothes making workflows</li>
                <li>• Online 3D design capabilities</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Fashion Ecommerce Visualization</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                3D visualization clothing solutions for fashion ecommerce brands. Photorealistic product imagery at scale.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 3D cloth visualization for products</li>
                <li>• Virtual try-on integration</li>
                <li>• 360° product views</li>
                <li>• Custom configurators</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Apparel Manufacturing & Production</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Apparel manufacturing 3D design software that streamlines production workflows and reduces errors.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Tech pack creation</li>
                <li>• Grading and sizing</li>
                <li>• Production-ready files</li>
                <li>• Quality control tools</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Virtual 3D Collaboration</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cloud-based collaborative platform for distributed teams. Virtual 3D software accessible from anywhere.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Real-time collaboration</li>
                <li>• Version control</li>
                <li>• Review and approval workflows</li>
                <li>• Asset management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Software Stack Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Top 3D Modeling Software & Tools
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            We use the industry's leading 3D fashion design tools
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {['CLO3D', 'Browzwear', 'Marvelous Designer', 'Adobe Illustrator'].map((tool, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="text-lg font-bold text-black">{tool}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Looking for online fashion design software or free clothing design software?
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors">
                Request a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Fashion Design Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading fashion brands using our virtual fashion design software platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/team">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors">
                Explore Platform
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded font-medium hover:bg-white hover:text-black transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

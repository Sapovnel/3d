'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Palette, Gem, ShoppingBag, PenTool, Globe, Factory } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SolutionsPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsHeroVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      id: 1,
      title: "3D Fashion Design",
      description: "Create stunning digital garments with industry-leading software. Our expert designers work with CLO3D and Browzwear to bring your concepts to life with photorealistic accuracy.",
      features: [
        "Realistic fabric simulation and draping",
        "Full pattern development and grading",
        "Animation-ready digital assets"
      ],
      icon: Palette
    },
    {
      id: 2,
      title: "Virtual Prototyping",
      description: "Eliminate physical sampling costs and accelerate your design process. Review and approve designs digitally before committing to production.",
      features: [
        "60% reduction in sampling costs",
        "Faster design iteration cycles",
        "Sustainable development process"
      ],
      icon: Gem
    },
    {
      id: 3,
      title: "Ecommerce Visualization",
      description: "Transform your online shopping experience with interactive product visualization. Enable customers to see garments from every angle and customize options in real-time.",
      features: [
        "360-degree product views",
        "Virtual try-on integration",
        "Real-time color and style configurators"
      ],
      icon: ShoppingBag
    },
    {
      id: 4,
      title: "Technical CAD Services",
      description: "Professional technical drawings and pattern development services. Production-ready documentation that meets manufacturing specifications.",
      features: [
        "Detailed technical flat sketches",
        "Complete spec sheets and tech packs",
        "Pattern making and grading"
      ],
      icon: PenTool
    },
    {
      id: 5,
      title: "Cloud Collaboration Platform",
      description: "Connect with designers, manufacturers, and stakeholders in real-time. Our cloud platform enables seamless collaboration across global teams.",
      features: [
        "Real-time design sharing and feedback",
        "Version control and asset management",
        "Secure file transfer and storage"
      ],
      icon: Globe
    },
    {
      id: 6,
      title: "Manufacturing Integration",
      description: "Bridge the gap between design and production with manufacturing-ready outputs. Direct integration with production systems for seamless handoff.",
      features: [
        "Production-ready file exports",
        "Bill of materials generation",
        "Factory specification packages"
      ],
      icon: Factory
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section with Background Pattern */}
      <div ref={heroRef} className="relative bg-white min-h-[80vh] flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-40" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-200 rounded-full opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-100 rounded-full opacity-20" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className={`transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Digital Fashion Solutions
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
              Transform Your<br />
              <span className="text-gray-400">Design Workflow</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              From virtual prototyping to production-ready outputs. End-to-end 3D fashion solutions for modern brands.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/team">
                <button className="px-10 py-5 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 text-lg shadow-lg">
                  Meet Our Team
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-5 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transform transition-all duration-300 text-lg">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital fashion services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  data-index={index}
                  className={`bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all duration-500 flex flex-col min-h-[400px] ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-white border-2 border-black flex items-center justify-center mb-6 group-hover:bg-black transition-all duration-300">
                    <Icon className="w-7 h-7 text-black" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4">
                    {solution.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us - Enhanced */}
      <div className="bg-white border-t border-gray-200 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-6 py-40 relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Our Advantage
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry expertise combined with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-50 rounded-3xl p-10 border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Easy Integration</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Seamless onboarding process with dedicated support. Start producing digital samples within days, not weeks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Dedicated project manager assigned</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Step-by-step onboarding guidance</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Full training and documentation</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-50 rounded-3xl p-10 border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Faster Time-to-Market</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Reduce collection development time by 50%. Digital-first workflows eliminate sampling delays.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Rapid design iteration cycles</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Instant digital approvals</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>No shipping delays for samples</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-50 rounded-3xl p-10 border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Sustainable Process</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eliminate physical sampling waste and reduce your environmental footprint significantly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Zero physical waste in design phase</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Reduced carbon footprint</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Sustainable brand positioning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section - Enhanced */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-40">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Technology Stack
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Industry-Leading Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with the best software in digital fashion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'CLO3D', desc: '3D Garment Design', detail: 'Industry-standard software for realistic garment simulation and pattern development' },
              { name: 'Browzwear', desc: 'Digital Fashion', detail: 'End-to-end 3D design platform trusted by leading fashion brands worldwide' },
              { name: 'Marvelous Designer', desc: '3D Clothing', detail: 'Advanced cloth simulation for photorealistic digital garments' },
              { name: 'Adobe Illustrator', desc: 'Technical Design', detail: 'Professional vector graphics for detailed technical flats and specs' }
            ].map((tool, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">{tool.name.substring(0, 2).toUpperCase()}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{tool.name}</h3>
                <p className="text-sm font-medium text-gray-500 mb-4">{tool.desc}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{tool.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/contact">
              <button className="px-10 py-5 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 text-lg shadow-lg">
                Request a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Get Started - Black CTA */}
      <div className="bg-black text-white py-32 md:py-40 relative overflow-hidden">
        {/* Pattern background */}
        <img
          src="/images/6224739.jpg"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="max-w-7xl mx-auto px-8 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Get Started
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your fashion design workflow? Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 text-xl shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </Link>
            <Link href="/team">
              <button className="w-full sm:w-auto px-12 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black hover:scale-105 transform transition-all duration-300 text-xl">
                View Team
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
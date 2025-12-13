import { Ruler, Palette, Gem, Image, Users, Cloud } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "2D Technical Drawings",
      description: "Professional flat sketches and technical specifications for production-ready garments.",
      features: [
        "Detailed tech packs with measurements",
        "Construction details and specifications",
        "Multiple views and variations"
      ],
      icon: Ruler,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "3D Fashion Design",
      description: "Create realistic digital garments using industry-leading CLO3D and Browzwear software.",
      features: [
        "Realistic fabric simulation",
        "Pattern making and grading",
        "Animation and fit testing"
      ],
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Virtual Prototyping",
      description: "Eliminate physical sampling costs with photorealistic digital prototypes.",
      features: [
        "60% reduction in sampling costs",
        "Faster iteration and approvals",
        "Sustainable design process"
      ],
      icon: Gem,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Product Rendering",
      description: "Studio-quality product images and marketing visuals without photoshoots.",
      features: [
        "Photorealistic product shots",
        "Multiple angles and lighting",
        "Lifestyle and e-commerce ready"
      ],
      icon: Image,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Virtual Try-On",
      description: "Interactive digital fitting solutions for e-commerce and retail experiences.",
      features: [
        "AR try-on integration",
        "Size recommendation engine",
        "Reduced return rates"
      ],
      icon: Users,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Collaborative Platform",
      description: "Cloud-based workspace connecting you with expert fashion designers worldwide.",
      features: [
        "On-demand expert designers",
        "Real-time collaboration tools",
        "Project management dashboard"
      ],
      icon: Cloud,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end digital fashion solutions to transform your design workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-10 border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-base text-gray-700">
                      <span className="text-gray-400 mr-3 text-lg">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "2D Technical Flats & CAD",
      description: "Professional clothing CAD software for precise technical drawings, spec sheets, and garment design",
      icon: "📐"
    },
    {
      id: 2,
      title: "3D Fashion Design Software",
      description: "Industry-leading 3D clothing design software with CLO3D and Browzwear for realistic cloth simulation",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Virtual Clothing Prototyping",
      description: "Digital garment design and virtual prototypes that reduce production costs by 60%",
      icon: "💎"
    },
    {
      id: 4,
      title: "3D Visualization & Rendering",
      description: "Photorealistic 3D clothing visualization for ecommerce and marketing materials",
      icon: "📊"
    },
    {
      id: 5,
      title: "Virtual Try-On Integration",
      description: "Digital fitting room and virtual try-on software for immersive shopping experiences",
      icon: "👥"
    },
    {
      id: 6,
      title: "Collaborative Design Platform",
      description: "Cloud-based fashion design platform connecting brands with expert 3D designers",
      icon: "🌐"
    }
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Virtual Fashion Design Software & Services
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Easy-to-use 3D modeling software and professional design services for apparel manufacturing, ecommerce, and fashion brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

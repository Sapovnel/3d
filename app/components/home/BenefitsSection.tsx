import Image from 'next/image';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Launch Collections Faster",
      description: "3D digital samples eliminate physical prototyping delays. Iterate in days, not weeks. Get to market faster than your competition.",
      visual: "speed",
      image: "/images/portfolio/f2.jpg"
    },
    {
      id: 2,
      title: "Reduce Development Costs by 60%",
      description: "Lower sampling costs, fewer production errors, optimized workflows. Save thousands on every collection with digital-first design.",
      visual: "cost",
      image: null
    },
    {
      id: 3,
      title: "Work With the Best",
      description: "Our marketplace features only rigorously vetted Fashion Technical Designers with proven track records at leading brands.",
      visual: "talent",
      image: "/images/portfolio/f3.jpg"
    },
    {
      id: 4,
      title: "Industry-Leading Technology",
      description: "Cutting-edge 3D tools (CLO3D, Browzwear) combined with deep fashion industry knowledge and technical expertise.",
      visual: "tech",
      image: null
    }
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose virtuality.fashion
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            The competitive advantages that set us apart
          </p>
        </div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                {benefit.image ? (
                  <div className="aspect-square rounded-2xl border border-gray-200 overflow-hidden relative">
                    <Image
                      src={benefit.image}
                      alt={`${benefit.title} - 3D Fashion Design`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-gray-200 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">[{benefit.visual} visual]</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

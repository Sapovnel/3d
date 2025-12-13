import Image from 'next/image';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Faster Production",
      description: "Digital samples, no delays.",
      visual: "speed",
      image: "/images/portfolio/f2.jpg"
    },
    {
      id: 2,
      title: "60% Cost Savings",
      description: "Lower sampling costs.",
      visual: "cost",
      image: null
    },
    {
      id: 3,
      title: "Expert Team",
      description: "Vetted professionals.",
      visual: "talent",
      image: "/images/portfolio/f3.jpg"
    },
    {
      id: 4,
      title: "Top Technology",
      description: "CLO3D, Browzwear.",
      visual: "tech",
      image: null
    }
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-20 text-center">
          Benefits
        </h2>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="grid md:grid-cols-2 gap-16 items-center">
              {/* Text content */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''} flex flex-col justify-center`}>
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Visual - Full height */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                {benefit.image ? (
                  <div className="relative h-[60vh] min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-[60vh] min-h-[500px] bg-linear-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-gray-300 flex items-center justify-center shadow-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
                    <div className="relative z-10 text-center px-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl">
                        <span className="text-white text-4xl font-bold">{benefit.id}</span>
                      </div>
                      <p className="text-white text-2xl font-semibold mb-3">{benefit.title}</p>
                      <p className="text-gray-300 text-lg">{benefit.description}</p>
                    </div>
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

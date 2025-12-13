import Link from 'next/link';

export default function AudienceSegments() {
  const segments = [
    {
      id: 1,
      headline: "SMBs",
      description: "On-demand support",
      cta: "Get Started",
      ctaLink: "/contact"
    },
    {
      id: 2,
      headline: "Brands",
      description: "Faster workflow",
      cta: "View Services",
      ctaLink: "/pricing"
    },
    {
      id: 3,
      headline: "Enterprise",
      description: "Dedicated teams",
      cta: "Contact Sales",
      ctaLink: "/enterprise"
    }
  ];

  return (
    <section className="bg-white border-t border-gray-200 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-20 text-center">
          For Teams
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-10 hover:border-black transition-colors text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {segment.headline}
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                {segment.description}
              </p>
              <Link href={segment.ctaLink}>
                <button className="w-full px-8 py-4 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors text-lg">
                  {segment.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

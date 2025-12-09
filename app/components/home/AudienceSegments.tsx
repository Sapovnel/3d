import Link from 'next/link';

export default function AudienceSegments() {
  const segments = [
    {
      id: 1,
      headline: "Grow Without Overhead",
      audience: "SMBs & Emerging Brands",
      painPoint: "No in-house design team needed",
      solution: "Get expert technical design support on-demand",
      cta: "See Packages",
      ctaLink: "/contact"
    },
    {
      id: 2,
      headline: "Accelerate Your Workflow",
      audience: "Established Fashion Brands",
      painPoint: "Speed up collection development",
      solution: "2D/3D design services that integrate with your process",
      cta: "View Services",
      ctaLink: "/contact"
    },
    {
      id: 3,
      headline: "Scale With Confidence",
      audience: "Enterprise Teams",
      painPoint: "Need flexible, skilled teams fast",
      solution: "Dedicated technical design teams for major brands",
      cta: "Contact Sales",
      ctaLink: "/contact"
    }
  ];

  return (
    <section className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Who We Help
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            From emerging designers to global enterprises, we have the right solution for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-600 transition-colors group"
            >
              <p className="text-sm uppercase tracking-wide text-purple-600 font-semibold mb-3">
                {segment.audience}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                {segment.headline}
              </h3>
              <p className="text-gray-600 mb-4">
                {segment.painPoint}
              </p>
              <p className="text-gray-700 font-medium mb-6">
                {segment.solution}
              </p>
              <Link href={segment.ctaLink}>
                <button className="w-full px-6 py-3 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors">
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

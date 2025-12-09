import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Design Process?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join leading fashion brands using virtuality.fashion for faster, cost-effective design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/contact">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
          </Link>
          <Link href="/team">
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded font-medium hover:bg-white hover:text-black transition-colors">
              Meet the Team
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Trusted by 500+ fashion brands worldwide
        </p>
      </div>
    </section>
  );
}

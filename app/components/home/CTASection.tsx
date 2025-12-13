import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10">
          Get Started
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors text-xl">
              Contact Us
            </button>
          </Link>
          <Link href="/team">
            <button className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white rounded font-medium hover:bg-white hover:text-black transition-colors text-xl">
              View Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

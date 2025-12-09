'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left: Content (3/5 width) */}
          <div className="md:col-span-3">
            {/* Eyebrow */}
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              3D Fashion Design Software & Virtual Clothing Design Platform
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Professional 3D Clothing Design Software for Fashion Brands
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Cloud-based virtual fashion design software with realistic 3D clothing simulation.
              From digital garment design to photorealistic rendering. Reduce production costs and get to market faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/team">
                <button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors">
                  Hire the Team
                </button>
              </Link>
              <Link href="/join">
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors">
                  Join the Team
                </button>
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-lg italic text-gray-600 mb-6">
              Digitizing fashion, the good ole' fashion way
            </p>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-500">
              Trusted by <span className="font-semibold text-gray-700">Adidas, Under Armour, Armani</span> and 500+ brands
            </p>
          </div>

          {/* Right: Visual (2/5 width) */}
          <div className="md:col-span-2">
            <div className="aspect-square rounded-2xl border border-gray-200 overflow-hidden relative">
              <Image
                src="/images/hero/f1.jpg"
                alt="3D Fashion Design - Geometric Metallic Dress"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* About Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold text-black mb-6">About Virtuality.Fashion</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            We&apos;re a team of 3D fashion specialists dedicated to transforming how brands visualize and design clothing.
          </p>
        </div>
      </div>

      {/* Company Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Virtuality.Fashion pioneered 3D garment design and modeling services for fashion brands. We combine cutting-edge technology with artistic expertise to deliver photorealistic digital clothing that accelerates innovation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                In an era where digital-first fashion is essential, we help brands reduce prototyping costs, speed up design iterations, and create stunning visual content—all through advanced 3D modeling and rendering.
              </p>
            </div>
            <div className="bg-gray-100 rounded aspect-square flex items-center justify-center">
              <p className="text-gray-500">[Company Image]</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-black mb-12">Our Story</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Founded 2023</h3>
              <p className="text-gray-700 text-lg">
                Virtuality.Fashion was founded by a team of 3D artists, software engineers, and fashion industry veterans who saw a gap in the market. Fashion brands needed a better way to design, prototype, and visualize garments in the digital age.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Rapid Growth</h3>
              <p className="text-gray-700 text-lg">
                Since launch, we&apos;ve worked with emerging designers, established fashion houses, and major retailers. Our portfolio spans haute couture, ready-to-wear, sportswear, and virtual fashion experiences.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Looking Forward</h3>
              <p className="text-gray-700 text-lg">
                We&apos;re constantly pushing the boundaries of 3D fashion technology. From game-ready assets to metaverse integration, we&apos;re building the future of digital fashion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-black mb-12">Our Founder</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 aspect-square rounded flex items-center justify-center">
              <p className="text-gray-500">[Founder Photo]</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-3">Creative Director & Founder</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our founder is a creative technologist with 10+ years in 3D design, digital fashion, and software development. Having worked with leading fashion brands and game studios, they envisioned a platform where 3D fashion design becomes accessible and efficient for all creators.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With a background in both fine art and computer science, they believed that the future of fashion lies in embracing digital tools and seeing 3D design not as a limitation, but as a creative opportunity.
              </p>
              <div className="space-y-2">
                <h4 className="font-bold text-black">Background</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>10+ years in 3D design and digital fashion</li>
                  <li>Worked with game studios (Unreal Engine, Unity)</li>
                  <li>Collaborated with luxury fashion brands</li>
                  <li>Featured speaker at fashion tech conferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-black mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Quality</h3>
              <p className="text-gray-700">We deliver photorealistic results that exceed industry standards and client expectations.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Innovation</h3>
              <p className="text-gray-700">We continuously explore new technologies and techniques to push creative boundaries.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Partnership</h3>
              <p className="text-gray-700">We work closely with clients as collaborators, understanding their vision deeply.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Accessibility</h3>
              <p className="text-gray-700">We make advanced 3D design tools and expertise available to brands of all sizes.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import experts from '@/data/experts.json';

export default function ExpertsPage() {
  return (
    <>
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold text-black mb-6">Our Team</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Meet the 3D fashion designers and specialists who bring your concepts to life.
          </p>
        </div>
      </div>

      {/* Experts Grid with Alternating Layout */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-20">
            {experts.map((expert, index) => (
              <Link href={`/experts/${expert.id}`} key={expert.id}>
                <div className={`grid md:grid-cols-2 gap-12 items-start cursor-pointer group`}>
                  {/* Expert Info - Order based on index */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="bg-gray-100 aspect-square rounded mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <div className="text-center">
                        <p className="text-gray-500">[Expert Photo]</p>
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                      {expert.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">{expert.title}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{expert.bio}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h3 className="font-bold text-black mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {expert.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-black text-white text-sm rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="px-6 py-3 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors">
                      View Profile
                    </button>
                  </div>

                  {/* Projects Preview - Order based on index */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h3 className="text-2xl font-bold text-black mb-6">Featured Projects</h3>
                    <div className="space-y-4">
                      {expert.projects.map((projectId) => (
                        <div key={projectId} className="bg-gray-100 aspect-video rounded flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <p className="text-gray-500">[Project Image]</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

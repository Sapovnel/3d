'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import experts from '@/data/experts.json';
import projects from '@/data/projects.json';

export default function ProjectDetailPage() {
  const params = useParams();
  const expertId = params.id as string;
  const projectId = params.projectId as string;

  const expert = experts.find((e) => e.id === expertId);
  const project = projects.find((p) => p.id === projectId);

  if (!expert || !project) {
    return (
      <>
        <Header />
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Project Not Found</h1>
            <Link href="/experts">
              <button className="px-6 py-3 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors">
                Back to Team
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <Link href={`/experts/${expertId}`} className="text-gray-600 hover:text-black transition-colors mb-4 inline-block">
              ← Back to {expert.name}
            </Link>
            <h1 className="text-6xl font-bold text-black mb-6">{project.title}</h1>
            <div className="flex gap-6 items-center">
              <span className="px-4 py-2 bg-black text-white rounded font-medium">{project.status}</span>
              <span className="text-gray-600 font-medium">{project.year}</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="bg-gray-100 aspect-video rounded flex items-center justify-center mb-12">
            <p className="text-gray-500 text-lg">[Project Main Image]</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.description}</p>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Challenge</h3>
                <p className="text-gray-700 leading-relaxed">{project.process}</p>
              </div>
            </div>

            {/* Right Column - Tools & Info */}
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-4 py-2 border-2 border-black text-black rounded font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded">
                <h3 className="text-2xl font-bold text-black mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-medium">Designer</p>
                    <p className="text-black text-lg">{expert.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Status</p>
                    <p className="text-black text-lg capitalize">{project.status}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Year</p>
                    <p className="text-black text-lg">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-black mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="bg-gray-100 aspect-video rounded flex items-center justify-center">
                <p className="text-gray-500">{image}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Want Similar Work?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can create stunning 3D assets for your brand.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

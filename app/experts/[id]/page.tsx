'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import experts from '@/data/experts.json';
import projects from '@/data/projects.json';

export default function ExpertDetailPage() {
  const params = useParams();
  const expertId = params.id as string;

  const expert = experts.find((e) => e.id === expertId);

  if (!expert) {
    return (
      <>
        <Header />
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Expert Not Found</h1>
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

  const expertProjects = projects.filter((p) => expert.projects.includes(p.id));

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="bg-gray-100 aspect-square rounded flex items-center justify-center">
              <p className="text-gray-500">[Expert Photo]</p>
            </div>

            {/* Info */}
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Team Member</p>
              <h1 className="text-5xl font-bold text-black mb-3">{expert.name}</h1>
              <p className="text-2xl text-gray-600 mb-6">{expert.title}</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{expert.bio}</p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="font-bold text-black mb-4 text-lg">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {expert.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-black text-white rounded font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="font-bold text-black mb-4 text-lg">Tools & Software</h3>
                <div className="flex flex-wrap gap-3">
                  {expert.tools.map((tool) => (
                    <span key={tool} className="px-4 py-2 border-2 border-black text-black rounded font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-black mb-12">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertProjects.map((project) => (
              <Link href={`/experts/${expert.id}/${project.id}`} key={project.id}>
                <div className="group cursor-pointer">
                  <div className="bg-gray-100 aspect-video rounded mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <p className="text-gray-500">[Project Image]</p>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{project.year}</span>
                    <span className="text-black font-medium group-hover:underline">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With {expert.name}?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your 3D fashion project with our talented team today.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

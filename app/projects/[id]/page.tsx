'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface ProjectDetails {
  id: number;
  title: string;
  brand: string;
  category: string;
  image: string;
  status: 'completed' | 'ongoing';
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric1: { label: string; value: string };
    metric2: { label: string; value: string };
    metric3: { label: string; value: string };
  };
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  client: {
    name: string;
    industry: string;
    description: string;
  };
  deliverables: string[];
  technologies: string[];
  teamSize: number;
  budget: string;
}

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = parseInt(params.id as string);

  // Sample project data - in a real app, this would come from an API
  const projectsData: Record<number, ProjectDetails> = {
    1: {
      id: 1,
      title: 'Premium Collection 3D Visualization',
      brand: 'StylePro Fashion',
      category: '3D Fashion Simulation',
      image: '👗',
      status: 'completed',
      description: 'Complete 3D visualization suite for StylePro Fashion brand, featuring photorealistic product rendering and interactive virtual try-on technology for their premium collection.',
      challenge: 'StylePro needed a way to showcase their premium apparel collection in immersive 3D without requiring customers to purchase expensive VR equipment. Traditional 2D images were failing to capture the quality and detail of their designs.',
      solution: 'We developed a comprehensive 3D visualization platform with photorealistic rendering, real-time fabric simulation, and an interactive try-on experience accessible through web browsers. The solution included custom material libraries matching their fabric specifications.',
      results: {
        metric1: { label: 'Engagement Increase', value: '156%' },
        metric2: { label: 'Conversion Lift', value: '42%' },
        metric3: { label: 'Users Engaged', value: '2.3M+' },
      },
      timeline: {
        start: 'January 2024',
        end: 'March 2024',
        duration: '3 months',
      },
      client: {
        name: 'StylePro Fashion',
        industry: 'Premium Apparel',
        description: 'Leading luxury fashion brand specializing in high-end casual wear and accessories.',
      },
      deliverables: [
        '50+ 3D product models',
        'Interactive web platform',
        'Mobile app integration',
        'Custom material library',
        'Analytics dashboard',
      ],
      technologies: [
        'Three.js',
        'WebGL',
        'React',
        'Node.js',
        'Blender 3D',
        'Unity',
      ],
      teamSize: 12,
      budget: '$85,000',
    },
    2: {
      id: 2,
      title: 'Sustainable Fashion AR Experience',
      brand: 'EcoWear Co',
      category: 'AR Experience',
      image: '🌿',
      status: 'completed',
      description: 'Augmented Reality shopping experience for sustainable fashion brand, enabling customers to visualize eco-friendly apparel in their real-world environment.',
      challenge: 'EcoWear wanted to highlight their sustainable practices and help customers visualize products before purchase, particularly for their new collection focusing on environmentally-friendly materials.',
      solution: 'Built an AR-enabled mobile app with advanced body tracking, real-time lighting adjustment, and seamless integration with their e-commerce platform. Included educational content about sustainable materials.',
      results: {
        metric1: { label: 'Return Rate Reduction', value: '38%' },
        metric2: { label: 'Mobile Sales Growth', value: '78%' },
        metric3: { label: 'Users Engaged', value: '1.8M+' },
      },
      timeline: {
        start: 'February 2024',
        end: 'May 2024',
        duration: '4 months',
      },
      client: {
        name: 'EcoWear Co',
        industry: 'Sustainable Fashion',
        description: 'B2C fashion brand focused on eco-friendly, sustainable apparel and ethical manufacturing.',
      },
      deliverables: [
        'iOS & Android AR app',
        'Body tracking system',
        '30+ virtual try-on models',
        'E-commerce integration',
        'Educational content library',
      ],
      technologies: [
        'ARKit',
        'ARCore',
        'React Native',
        'Firebase',
        'TensorFlow',
        'Blender',
      ],
      teamSize: 10,
      budget: '$95,000',
    },
    3: {
      id: 3,
      title: 'Athletic Performance Wear Simulation',
      brand: 'SportTech Innovations',
      category: '3D Apparel Design',
      image: '⚽',
      status: 'ongoing',
      description: 'Advanced 3D simulation platform for athletic wear, demonstrating fabric performance under different conditions and body movements.',
      challenge: 'SportTech needed to demonstrate how their performance fabrics behave during athletic activities without physical prototypes. Traditional product images couldn&apos;t convey the dynamic nature of their materials.',
      solution: 'Created physics-based 3D simulations showing fabric movement, stretch, and behavior during various athletic activities. Integrated biomechanical analysis for optimal fit recommendations.',
      results: {
        metric1: { label: 'Design Approval Time', value: '-65%' },
        metric2: { label: 'Prototype Cost Savings', value: '$2.5M' },
        metric3: { label: 'B2B Partnerships', value: '45+' },
      },
      timeline: {
        start: 'March 2024',
        end: 'August 2024',
        duration: '6 months (ongoing)',
      },
      client: {
        name: 'SportTech Innovations',
        industry: 'Athletic Apparel',
        description: 'Leading developer of performance athletic wear with focus on fabric innovation and biomechanical design.',
      },
      deliverables: [
        'Physics simulation engine',
        'Biomechanical analysis tools',
        'Performance dashboard',
        'Design collaboration platform',
        'Training documentation',
      ],
      technologies: [
        'Unreal Engine',
        'C++',
        'Maya 3D',
        'Custom Physics Engine',
        'Python',
        'AWS',
      ],
      teamSize: 15,
      budget: '$150,000',
    },
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white pt-32 px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/projects">
              <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Back to Projects
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
      <div className="bg-linear-to-br from-white via-gray-50 to-gray-100 min-h-screen flex items-center overflow-hidden pt-20 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/projects" className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
              ← Back to Projects
            </Link>
          </div>

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Text Content */}
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'completed'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-blue-100 text-blue-700 border border-blue-300'
                  }`}
                >
                  {project.status === 'completed' ? '✓ Completed' : '⏳ Ongoing'}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h1>

              {/* Client Info */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Client</p>
                  <p className="text-2xl font-bold text-gray-900">{project.client.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Industry</p>
                  <p className="text-lg text-purple-600 font-semibold">{project.client.industry}</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/inquiry">
                <button className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  Request Similar Project
                </button>
              </Link>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="bg-linear-to-br from-purple-100 to-blue-100 rounded-3xl p-12 flex items-center justify-center h-96">
                <div className="text-8xl">{project.image}</div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Timeline</p>
              <p className="text-2xl font-bold text-gray-900">{project.timeline.duration}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Team Size</p>
              <p className="text-2xl font-bold text-purple-600">{project.teamSize} Members</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Budget</p>
              <p className="text-2xl font-bold text-blue-600">{project.budget}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Category</p>
              <p className="text-lg font-bold text-gray-900">{project.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Challenge */}
            <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Challenge</h3>
              <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Solution</h3>
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-200 p-8 text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  {project.results.metric1.value}
                </div>
                <p className="text-gray-700 font-semibold">{project.results.metric1.label}</p>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-200 p-8 text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  {project.results.metric2.value}
                </div>
                <p className="text-gray-700 font-semibold">{project.results.metric2.label}</p>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-200 p-8 text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  {project.results.metric3.value}
                </div>
                <p className="text-gray-700 font-semibold">{project.results.metric3.label}</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Timeline</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">Start Date</p>
                  <p className="text-2xl font-bold text-gray-900">{project.timeline.start}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">End Date</p>
                  <p className="text-2xl font-bold text-gray-900">{project.timeline.end}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">Duration</p>
                  <p className="text-2xl font-bold text-purple-600">{project.timeline.duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Deliverables</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="text-2xl shrink-0">✓</div>
                  <p className="text-gray-700 font-semibold">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-linear-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Description */}
          <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-200 p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Client</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-1">Company</p>
                <p className="text-2xl font-bold text-gray-900">{project.client.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-1">Industry</p>
                <p className="text-lg text-purple-600 font-semibold">{project.client.industry}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">About</p>
                <p className="text-gray-700 leading-relaxed">{project.client.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-b from-gray-50 via-purple-50/20 to-blue-50/20 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interested in a Similar Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our team of experts help you create an immersive 3D experience that drives engagement and results.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/inquiry">
              <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Start Your Project
              </button>
            </Link>
            <Link href="/projects">
              <button className="px-8 py-3 border-2 border-gray-800 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

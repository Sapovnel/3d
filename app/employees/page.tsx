'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Project {
  id: number;
  name: string;
  description: string;
  emoji: string;
  employeeName: string;
  employeeRole: string;
}

interface Employee {
  id: number;
  name: string;
  role: string;
  emoji: string;
  projects: Project[];
}

export default function EmployeesPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterByEmployee, setFilterByEmployee] = useState<string>('all');

  // Employee and project data
  const employees: Employee[] = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: '3D Fashion Designer',
      emoji: '👩‍💼',
      projects: [
        { id: 1, name: 'Premium Tee Collection', description: 'Photorealistic 3D rendered classic t-shirts with multiple color variations and fabric textures', emoji: '👕', employeeName: 'Sarah Mitchell', employeeRole: '3D Fashion Designer' },
        { id: 2, name: 'Oversized Hoodies', description: 'Comfortable and stylish hoodie designs featuring advanced fabric simulation and realistic draping', emoji: '🧥', employeeName: 'Sarah Mitchell', employeeRole: '3D Fashion Designer' },
        { id: 3, name: 'Casual Joggers', description: 'Modern athletic wear with precision details including stitching, seams, and material authenticity', emoji: '👖', employeeName: 'Sarah Mitchell', employeeRole: '3D Fashion Designer' },
      ],
    },
    {
      id: 2,
      name: 'James Rodriguez',
      role: 'Visualization Specialist',
      emoji: '👨‍💼',
      projects: [
        { id: 4, name: 'Luxury Polo Shirts', description: 'High-end polo collection with detailed texturing, embroidery simulation, and premium fabric rendering', emoji: '🎽', employeeName: 'James Rodriguez', employeeRole: 'Visualization Specialist' },
        { id: 5, name: 'Athletic Wear Line', description: 'Performance-focused 3D apparel designs with dynamic movement simulation and ergonomic precision', emoji: '⛹️', employeeName: 'James Rodriguez', employeeRole: 'Visualization Specialist' },
        { id: 6, name: 'Accessory Pack', description: 'Hats, belts, and complementary pieces with realistic material properties and interactive styling', emoji: '🧢', employeeName: 'James Rodriguez', employeeRole: 'Visualization Specialist' },
      ],
    },
    {
      id: 3,
      name: 'Emma Chen',
      role: 'Materials & Textures Lead',
      emoji: '👩‍🎨',
      projects: [
        { id: 7, name: 'Fabric Simulation', description: 'Realistic fabric physics and rendering with advanced material properties and environmental interactions', emoji: '🎨', employeeName: 'Emma Chen', employeeRole: 'Materials & Textures Lead' },
        { id: 8, name: 'Color Variations', description: 'Premium color palettes and finishes including metallic, matte, and gradient effects for visual diversity', emoji: '🌈', employeeName: 'Emma Chen', employeeRole: 'Materials & Textures Lead' },
        { id: 9, name: 'Pattern Library', description: 'Detailed pattern and print designs with seamless tiling, scale accuracy, and brand consistency', emoji: '✨', employeeName: 'Emma Chen', employeeRole: 'Materials & Textures Lead' },
      ],
    },
  ];

  // Flatten all projects for easier filtering
  const allProjects = employees.flatMap((emp) => emp.projects);
  const filteredProjects = filterByEmployee === 'all'
    ? allProjects
    : allProjects.filter((proj) => proj.employeeName === filterByEmployee);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center overflow-hidden pt-20 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-8">
            <span className="px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg">
              👥 Our Team Portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Employee
            <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Projects</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Explore the diverse portfolio of projects created by our talented team members specializing in 3D fashion design and visualization.
          </p>
        </div>
      </div>

      {/* Employee Filter & Projects Section */}
      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Filter by Employee</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setFilterByEmployee('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filterByEmployee === 'all'
                    ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              {employees.map((emp) => (
                <button
                  key={emp.id}
                  onClick={() => setFilterByEmployee(emp.name)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    filterByEmployee === emp.name
                      ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {emp.emoji} {emp.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Project Visual */}
                <div className="bg-linear-to-br from-purple-100 to-blue-100 h-40 flex items-center justify-center text-6xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
                  {project.emoji}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-purple-600 text-sm font-semibold mb-2">{project.employeeName}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* View Details Button */}
                  <button className="w-full px-4 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl">
            {/* Modal Content */}
            <div className="p-8">
              {/* Close Button */}
              <div className="flex justify-between items-start mb-6">
                <div className="text-6xl">{selectedProject.emoji}</div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* Project Info */}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.name}</h3>
              <p className="text-purple-600 font-semibold mb-1">{selectedProject.employeeName}</p>
              <p className="text-blue-600 text-sm font-medium mb-6">{selectedProject.employeeRole}</p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">{selectedProject.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link href="/inquiry" className="flex-1">
                  <button className="w-full px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    Get Inquiry
                  </button>
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

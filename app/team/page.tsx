'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TeamPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    volume: '',
    timeline: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Check if user already has access
  useEffect(() => {
    const access = localStorage.getItem('teamAccess');
    if (access === 'granted') {
      setHasAccess(true);
    }
  }, []);

  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: '3D Fashion Designer',
      skills: ['CLO3D', '3D Simulation', 'Texturing'],
      image: '/placeholder.jpg'
    },
    {
      id: 2,
      name: 'Marco Rossi',
      role: 'Technical Designer',
      skills: ['2D Flats', 'Tech Packs', 'Patternmaking'],
      image: '/placeholder.jpg'
    },
    {
      id: 3,
      name: 'Aisha Kumar',
      role: '3D Visualization Specialist',
      skills: ['Browzwear', 'Rendering', 'Material Design'],
      image: '/placeholder.jpg'
    },
    {
      id: 4,
      name: 'Lucas Silva',
      role: 'Collection Developer',
      skills: ['Collection Planning', 'Line Sheets', 'Concept Design'],
      image: '/placeholder.jpg'
    },
    {
      id: 5,
      name: 'Emma Thompson',
      role: 'Senior Technical Designer',
      skills: ['3D Simulation', '2D Flats', 'Quality Control'],
      image: '/placeholder.jpg'
    },
    {
      id: 6,
      name: 'Hiroshi Tanaka',
      role: 'Digital Fashion Artist',
      skills: ['CLO3D', 'Marvelous Designer', 'Virtual Prototyping'],
      image: '/placeholder.jpg'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.consent) newErrors.consent = 'You must agree to the privacy policy';

    if (Object.keys(newErrors).length === 0) {
      // Store form data in localStorage (in production, this would be sent to a backend)
      localStorage.setItem('teamAccess', 'granted');
      localStorage.setItem('clientData', JSON.stringify(formData));
      setHasAccess(true);
      setSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold text-black mb-6">Meet the Team</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            {hasAccess
              ? 'Our vetted Fashion Technical Designers ready to bring your vision to life.'
              : 'Unlock access to our marketplace of vetted Fashion Technical Designers.'}
          </p>
        </div>
      </div>

      {!hasAccess ? (
        <>
          {/* Blurred Team Grid */}
          <div className="bg-gray-50 border-b border-gray-200 relative">
            <div className="max-w-6xl mx-auto px-6 py-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 blur-md pointer-events-none select-none">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white rounded-2xl p-8 border border-gray-200">
                    <div className="aspect-square bg-gray-200 rounded-full mb-6"></div>
                    <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay with unlock message */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md text-center border-2 border-black">
                <div className="text-4xl mb-4">🔒</div>
                <h2 className="text-3xl font-bold text-black mb-4">Access Required</h2>
                <p className="text-gray-700 mb-6">
                  Submit your project details below to unlock full access to our team of designers.
                </p>
                <a href="#unlock-form" className="px-8 py-4 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors inline-block">
                  Unlock Access
                </a>
              </div>
            </div>
          </div>

          {/* Unlock Form */}
          <div id="unlock-form" className="bg-white">
            <div className="max-w-2xl mx-auto px-6 py-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4">Get Access to Our Team</h2>
                <p className="text-lg text-gray-700">
                  Tell us about your project and we'll unlock the full team marketplace for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-black font-semibold mb-3">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-black font-semibold mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-black font-semibold mb-3">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.company ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                    placeholder="Your Company"
                  />
                  {errors.company && <p className="text-red-600 text-sm mt-2">{errors.company}</p>}
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-black font-semibold mb-3">Type of Project *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.projectType ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                  >
                    <option value="">Select project type</option>
                    <option value="2d-flats">2D Technical Flats</option>
                    <option value="3d-simulation">3D Fashion Simulation</option>
                    <option value="digital-samples">Digital Sample Creation</option>
                    <option value="collection-dev">Collection Development</option>
                    <option value="tech-packs">Tech Pack Preparation</option>
                    <option value="full-service">Full Service Design</option>
                  </select>
                  {errors.projectType && <p className="text-red-600 text-sm mt-2">{errors.projectType}</p>}
                </div>

                {/* Estimated Volume */}
                <div>
                  <label className="block text-black font-semibold mb-3">Estimated Volume</label>
                  <input
                    type="text"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                    placeholder="e.g., 50 designs per month"
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-black font-semibold mb-3">Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                    placeholder="e.g., 2-3 months"
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-black font-semibold mb-3">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium resize-none focus:border-black focus:bg-white outline-none transition-colors"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the processing of my personal data in accordance with the{' '}
                      <a href="/privacy" className="text-black font-semibold underline">Privacy Policy</a> and consent to being contacted about my project.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-600 text-sm mt-2">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white rounded font-semibold hover:bg-gray-900 transition-colors"
                >
                  Unlock Team Access
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        /* Full Team Grid (After Unlock) */
        <div className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-20">
            {submitted && (
              <div className="mb-12 text-center py-8 bg-white rounded-2xl border-2 border-black">
                <h2 className="text-2xl font-bold text-black mb-2">Access Granted!</h2>
                <p className="text-gray-700">You can now view and contact our team members.</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-colors">
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-blue-50 rounded-full mb-6 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="w-full px-6 py-3 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

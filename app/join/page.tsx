'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: [] as string[],
    portfolioLink: '',
    experience: '',
    availability: '',
    hourlyRate: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const skillOptions = [
    '2D Technical Flats',
    '3D Fashion Simulation',
    'CLO3D',
    'Browzwear',
    'Marvelous Designer',
    'Patternmaking',
    'Tech Pack Creation',
    'Grading',
    'Textile Design',
    'Color Theory',
    'Adobe Illustrator',
    'Photoshop'
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

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
    }));

    if (errors.skills) {
      setErrors((prev) => ({
        ...prev,
        skills: ''
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
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.skills.length === 0) newErrors.skills = 'Please select at least one skill';
    if (!formData.portfolioLink.trim()) newErrors.portfolioLink = 'Portfolio link is required';
    if (!formData.experience) newErrors.experience = 'Please select your experience level';
    if (!formData.availability) newErrors.availability = 'Please select your availability';
    if (!formData.consent) newErrors.consent = 'You must agree to the terms';

    if (Object.keys(newErrors).length === 0) {
      // In production, this would send to a backend API
      console.log('Freelancer Application:', formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        skills: [],
        portfolioLink: '',
        experience: '',
        availability: '',
        hourlyRate: '',
        message: '',
        consent: false
      });
      setTimeout(() => setSubmitted(false), 10000);
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
          <h1 className="text-6xl font-bold text-black mb-6">Join the Team</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Become part of our vetted network of Fashion Technical Designers and connect with leading fashion brands.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Why Join virtuality.fashion?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-black mb-3">Premium Projects</h3>
              <p className="text-gray-700">
                Work with established fashion brands including Adidas, Under Armour, and Armani.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-black mb-3">Competitive Rates</h3>
              <p className="text-gray-700">
                Earn competitive hourly rates based on your skills and experience level.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-black mb-3">Work Remotely</h3>
              <p className="text-gray-700">
                Flexible remote work from anywhere in the world. Set your own schedule.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-black mb-8">Requirements</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">✓</div>
              <p className="text-lg text-gray-700">
                <strong>Technical Skills:</strong> Proficiency in at least one major 3D fashion software (CLO3D, Browzwear, Marvelous Designer) or 2D technical design tools
              </p>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">✓</div>
              <p className="text-lg text-gray-700">
                <strong>Experience:</strong> Minimum 2 years of professional fashion design experience
              </p>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">✓</div>
              <p className="text-lg text-gray-700">
                <strong>Portfolio:</strong> A portfolio demonstrating your technical design work
              </p>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">✓</div>
              <p className="text-lg text-gray-700">
                <strong>Communication:</strong> Strong English communication skills for client interaction
              </p>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">✓</div>
              <p className="text-lg text-gray-700">
                <strong>Availability:</strong> Ability to commit to project deadlines and timelines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-20">
          {submitted ? (
            <div className="text-center py-12 bg-white rounded-2xl p-8 border-2 border-black">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-black mb-4">Application Submitted!</h2>
              <p className="text-gray-700 text-lg mb-6">
                Thank you for applying to join virtuality.fashion. Our team will review your application and get back to you within 5 business days.
              </p>
              <p className="text-gray-600">
                Next steps: If approved, we'll schedule an interview to discuss your skills and portfolio in detail.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4">Application Form</h2>
                <p className="text-lg text-gray-700">
                  Fill out the form below to apply. We review all applications carefully.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 border border-gray-200">
                {/* Name */}
                <div>
                  <label className="block text-black font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                    placeholder="Your Full Name"
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

                {/* Phone */}
                <div>
                  <label className="block text-black font-semibold mb-3">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-2">{errors.phone}</p>}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-black font-semibold mb-3">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                    placeholder="City, Country"
                  />
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-black font-semibold mb-3">Skills * (Select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skillOptions.map((skill) => (
                      <label key={skill} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill)}
                          onChange={() => handleSkillToggle(skill)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                  {errors.skills && <p className="text-red-600 text-sm mt-2">{errors.skills}</p>}
                </div>

                {/* Portfolio Link */}
                <div>
                  <label className="block text-black font-semibold mb-3">Portfolio Link *</label>
                  <input
                    type="url"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.portfolioLink ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                    placeholder="https://yourportfolio.com"
                  />
                  {errors.portfolioLink && <p className="text-red-600 text-sm mt-2">{errors.portfolioLink}</p>}
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-black font-semibold mb-3">Experience Level *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.experience ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                  >
                    <option value="">Select experience level</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {errors.experience && <p className="text-red-600 text-sm mt-2">{errors.experience}</p>}
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-black font-semibold mb-3">Availability *</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                      errors.availability ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                    } outline-none`}
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full-time (40+ hours/week)</option>
                    <option value="part-time">Part-time (20-30 hours/week)</option>
                    <option value="project-based">Project-based</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.availability && <p className="text-red-600 text-sm mt-2">{errors.availability}</p>}
                </div>

                {/* Hourly Rate */}
                <div>
                  <label className="block text-black font-semibold mb-3">Expected Hourly Rate (USD)</label>
                  <input
                    type="text"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                    placeholder="e.g., $50-75"
                  />
                  <p className="text-sm text-gray-500 mt-2">Optional - helps us match you with appropriate projects</p>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-black font-semibold mb-3">Why do you want to join virtuality.fashion?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium resize-none focus:border-black focus:bg-white outline-none transition-colors"
                    placeholder="Tell us about your experience and what makes you a great fit..."
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
                      I agree to the{' '}
                      <a href="/privacy" className="text-black font-semibold underline">Privacy Policy</a> and{' '}
                      <a href="/terms" className="text-black font-semibold underline">Terms of Service</a>.
                      I consent to being contacted regarding my application and understand that virtuality.fashion
                      takes a commission on projects.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-600 text-sm mt-2">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white rounded font-semibold hover:bg-gray-900 transition-colors"
                >
                  Submit Application
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 5 business days
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

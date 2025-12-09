'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EnterprisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    monthlyVolume: '',
    services: [] as string[],
    timeline: '',
    budget: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Dedicated Design Pod',
    '2D Technical Flats',
    '3D Fashion Simulation',
    'Tech Pack Development',
    'Collection Development',
    'Grading & Sizing',
    'Material Research',
    'Quality Control'
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

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }));
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
    if (!formData.role.trim()) newErrors.role = 'Role/title is required';
    if (!formData.consent) newErrors.consent = 'You must agree to the privacy policy';

    if (Object.keys(newErrors).length === 0) {
      console.log('Enterprise Request:', formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 10000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-white min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Enterprise Solutions</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Scale Your Fashion Design with Dedicated Teams
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Trusted by Adidas, Under Armour, and Armani. Get dedicated design pods, volume pricing, and enterprise-grade support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="px-8 py-4 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors text-center">
                Get Custom Quote
              </a>
              <Link href="/pricing">
                <button className="px-8 py-4 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">Enterprise Solutions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-black mb-4">Dedicated Design Pods</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Full-time teams of 3-10 vetted Fashion Technical Designers working exclusively for your brand. Integrated into your workflow with dedicated communication channels.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Dedicated team exclusively for your brand</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Consistent quality and brand knowledge</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Integrated with your tools and processes</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Flexible scaling up or down as needed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-black mb-4">High-Volume Production</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Manage hundreds of designs per season with streamlined workflows, volume discounts, and guaranteed turnaround times.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Volume pricing for 100+ hours/month</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Guaranteed SLAs and turnaround times</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Priority support and account management</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Custom invoicing and payment terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-black mb-4">End-to-End Collection Support</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From concept sketches to final tech packs, our teams handle complete collection development with seamless coordination.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Concept development to production-ready files</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">2D flats + 3D samples + tech packs</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Material sourcing and trim research</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Fit reviews and production support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-black mb-4">Custom Integration</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We integrate with your existing tools, PLM systems, and workflows. API access available for enterprise clients.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">PLM system integration (Centric, Backbone, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Custom file delivery formats and naming</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">Brand guidelines and quality standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">✓</span>
                  <span className="text-gray-700">NDA and IP protection agreements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies / Social Proof */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">Trusted by Leading Brands</h2>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            We've helped global fashion brands reduce costs and accelerate time-to-market
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-black mb-2">60%</div>
              <p className="text-gray-700">Reduction in sampling costs for a major sportswear brand</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-black mb-2">500+</div>
              <p className="text-gray-700">Designs delivered monthly for enterprise clients</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-black mb-2">50%</div>
              <p className="text-gray-700">Faster collection development cycle with 3D workflows</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-black">
            <p className="text-xl text-gray-700 italic mb-4">
              "virtuality.fashion has been instrumental in scaling our design operations. Their dedicated team feels like an extension of our in-house staff, and the quality is consistently excellent."
            </p>
            <p className="text-gray-600 font-semibold">— Design Director, Global Athletic Wear Brand</p>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">Enterprise Pricing Structure</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Volume Discounts</h3>
              <p className="text-gray-700 mb-4">For commitments of 100+ hours per month:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 10-15% discount on standard rates</li>
                <li>• Monthly billing with NET 30 terms</li>
                <li>• Dedicated account manager</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Dedicated Pods</h3>
              <p className="text-gray-700 mb-4">Full-time team of 3-10 designers:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom pricing based on team size</li>
                <li>• 15-25% discount vs hourly rates</li>
                <li>• Minimum 3-month commitment</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Custom Solutions</h3>
              <p className="text-gray-700 mb-4">Tailored packages for unique needs:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Fixed-price project quotes</li>
                <li>• Retainer agreements</li>
                <li>• Multi-year partnerships</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/pricing">
              <button className="px-8 py-4 border-2 border-black text-black rounded font-medium hover:bg-black hover:text-white transition-colors">
                View Standard Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-20">
          {submitted ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl p-8 border-2 border-black">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-black mb-4">Thank You!</h2>
              <p className="text-gray-700 text-lg mb-6">
                We've received your enterprise inquiry. Our team will review your requirements and get back to you within 24 hours with a custom proposal.
              </p>
              <p className="text-gray-600">
                If you have urgent needs, please email us directly at enterprise@virtuality.fashion
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get Your Custom Quote</h2>
                <p className="text-lg text-gray-700">
                  Tell us about your needs and we'll create a tailored enterprise package for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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

                  {/* Role */}
                  <div>
                    <label className="block text-black font-semibold mb-3">Role/Title *</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded font-medium transition-colors ${
                        errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 focus:border-black focus:bg-white'
                      } outline-none`}
                      placeholder="e.g., Design Director"
                    />
                    {errors.role && <p className="text-red-600 text-sm mt-2">{errors.role}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Team Size */}
                  <div>
                    <label className="block text-black font-semibold mb-3">Current Design Team Size</label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="1-5">1-5 people</option>
                      <option value="6-15">6-15 people</option>
                      <option value="16-50">16-50 people</option>
                      <option value="50+">50+ people</option>
                    </select>
                  </div>

                  {/* Monthly Volume */}
                  <div>
                    <label className="block text-black font-semibold mb-3">Estimated Monthly Volume</label>
                    <input
                      type="text"
                      name="monthlyVolume"
                      value={formData.monthlyVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                      placeholder="e.g., 100-200 designs/month"
                    />
                  </div>
                </div>

                {/* Services Needed */}
                <div>
                  <label className="block text-black font-semibold mb-3">Services Needed (Select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Timeline */}
                  <div>
                    <label className="block text-black font-semibold mb-3">Timeline to Start</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-black font-semibold mb-3">Monthly Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium focus:border-black focus:bg-white outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-black font-semibold mb-3">Tell us about your needs</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded font-medium resize-none focus:border-black focus:bg-white outline-none transition-colors"
                    placeholder="Describe your project requirements, challenges, and what you're looking for in a design partner..."
                  />
                </div>

                {/* Consent */}
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
                      <a href="/privacy" className="text-black font-semibold underline">Privacy Policy</a> and consent to being contacted about enterprise solutions.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-600 text-sm mt-2">{errors.consent}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white rounded font-semibold hover:bg-gray-900 transition-colors"
                >
                  Request Custom Quote
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 24 hours with a tailored proposal
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

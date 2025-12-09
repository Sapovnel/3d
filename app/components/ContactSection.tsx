'use client';

import { useState } from 'react';

// Web3Forms Access Key - Replace with your actual key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    queryType: 'pricing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare form data for Web3Forms
      const formPayload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        queryType: formData.queryType,
        message: formData.message,
        to_email: `contact@virtuality.fashion,${formData.email}`,
        subject: `New Contact Query: ${formData.queryType} from ${formData.name}`,
        from_name: formData.name,
        redirect: '',
      };

      // Send to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            queryType: 'pricing',
            message: '',
          });
          setSubmitted(false);
        }, 3000);
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-linear-to-b from-gray-50 via-purple-50/20 to-blue-50/20 py-20 px-6 relative overflow-hidden">
      {/* Decorative 3D Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Request a quote, get pricing information, or schedule a demo with our team
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-linear-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                Your query has been submitted successfully. Our team will get back to you within 24 hours.
              </p>
              <div className="flex gap-4 justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Email us at</p>
                  <p className="text-purple-600 font-semibold">hello@virtuality.fashion</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Company and Query Type Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-colors"
                    placeholder="Your Brand Co."
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Query Type *</label>
                  <select
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-500 focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="pricing">Pricing Information</option>
                    <option value="demo">Schedule a Demo</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 font-semibold mb-3">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your needs and how we can help..."
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  required
                  className="w-5 h-5 rounded border border-gray-300 bg-gray-50 text-purple-600 cursor-pointer mt-1"
                />
                <label htmlFor="agree" className="text-gray-600 text-sm cursor-pointer">
                  I agree to the privacy policy and terms of service. We&apos;ll get back to you within 24 hours.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Submit Query'}
              </button>

              {/* Help Text */}
              <p className="text-center text-gray-500 text-sm">
                Prefer to call? Reach us at <span className="text-purple-600 font-semibold">+1 (555) 123-4567</span>
              </p>
            </form>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">hello@virtuality.fashion</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-gray-900 font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-gray-900 font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm">Available 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </section>
  );
}

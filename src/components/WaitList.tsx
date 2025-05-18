'use client';

import { useState } from 'react';
import { addClientToWaitList } from '../../loaders';
import { LoaderCircle } from 'lucide-astro';
import { LoaderCircleIcon } from 'lucide-react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    updates: false,
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    setError(null);
    setSuccess(false);

    const { name, email, company, updates } = formData;

    if (!name || name.trim().length < 2) {
      setError('Please provide a valid name (at least 2 characters).');
      return;
    }

    if (!email || !emailRegex.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }

    try {
      console.log('Submitting:', { name: name.trim(), email: email.trim(), company: company.trim(), updates });
      await addClientToWaitList(name.trim(), email.trim(), company.trim());
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        updates: false,
      });
    } catch (err: any) {
      console.error('Waitlist error:', err);
      setError(err?.message || 'Something went wrong. Please try again.');
    }finally {
      setLoading(false)
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Improved Left Section */}
            <div className="p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                Get Early Access to the Future
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Join our exclusive waitlist to be among the first to experience
                our cutting-edge platform. Stay ahead with priority access and
                receive updates on game-changing features designed to transform
                your workflow.
              </p>
              <p className="mt-4 text-gray-600 text-sm">
                Don’t miss out—secure your spot today!
              </p>
            </div>

            {/* Form Section */}
            <div className="p-10 lg:p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-black mb-6">
                Reserve your spot
              </h3>

              {success && (
                <div
                  className="p-4 mb-6 rounded-md bg-green-50 border border-green-200"
                  role="alert"
                >
                  <p className="text-green-700 font-semibold mb-1">
                    ✅ You're on the waitlist!
                  </p>
                  <p className="text-green-600">
                    Join our community on Discord to share ideas and get early
                    updates:
                    <a
                      href="https://discord.gg/Z96uGm9w"
                      className="ml-1 underline text-blue-600 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join the Discord Server
                    </a>
                  </p>
                </div>
              )}

              {error && (
                <div className="p-4 mb-6 rounded-md bg-red-50" role="alert">
                  <p className="text-red-800 font-medium">Error: {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:ring-[#4250D8] focus:border-[#4250D8] sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:ring-[#4250D8] focus:border-[#4250D8] sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-black"
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:ring-[#4250D8] focus:border-[#4250D8] sm:text-sm"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    id="updates"
                    name="updates"
                    type="checkbox"
                    checked={formData.updates}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#4250D8] focus:ring-[#4250D8] border-gray-300 rounded"
                    aria-describedby="updates-description"
                  />
                  <div className="ml-3 text-sm">
                    <label htmlFor="updates" className="font-medium text-black">
                      Email me about product updates
                    </label>
                    <p id="updates-description" className="text-gray-500">
                      Occasional updates on new features and improvements.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4250D8] hover:bg-[#2f3bbf] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4250D8]"
                >
                  {loading ? (
                    <LoaderCircleIcon className="h-5 w-5 animate-spin" />
                  ) : (
                    "Join the waitlist"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
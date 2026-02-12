'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('success');
      e.currentTarget.reset();
    } else {
      setStatus('idle');
    }
  }

  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Let’s Work Together
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
          />

          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows={5}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none resize-none transition"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all duration-200 text-white py-3 rounded-xl font-semibold shadow-md"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center">
              Message sent successfully ✨
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

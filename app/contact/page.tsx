import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-center mb-12">
          We'd love to hear from you. Send us a message or find us using the details below.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Form</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-2 px-4 rounded-md text-white bg-green-900 hover:bg-green-800 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Details</h2>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Address:</strong> 123 Artisan Street, Creative City, 90210</p>
              <p className="text-gray-700"><strong>Email:</strong> support@bidoro.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
            </div>
            <div className="mt-6">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2842484050215!2d144.9630573153406!3d-37.81362797975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af5e1b0d23%3A0x5045675218d6a80!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1625032508103!5m2!1sen!2sau"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen={true} // Corrected syntax
  loading="lazy"
></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
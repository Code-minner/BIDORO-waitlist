import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
        <p className="text-lg text-gray-600 mb-8">
          At BIDORO, we believe in building a marketplace centered on trust, community, and transparency.
        </p>

        <div className="text-left text-gray-700 space-y-6">
          <p>
            Founded in 2023, our platform was created to bridge the gap between talented local artisans and buyers seeking unique, high-quality goods. We saw an opportunity to create a space where everyone could trade with confidence, knowing that every transaction is secure and every profile is verified.
          </p>
          <p>
            We are passionate about empowering sellers to showcase their craft and providing buyers with a seamless, reliable experience. Our team is committed to continuously improving our platform to foster a thriving, connected community where people are at the heart of commerce.
          </p>
          <p>
            Thank you for being a part of our journey.
          </p>
        </div>
      </div>
    </div>
  );
}
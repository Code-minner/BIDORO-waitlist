"use client";
import React, { useState, Fragment } from 'react';
import Link from 'next/link';

export default function Home() {
  // Polygon for the blob shape, generated to approximate the user's design.
  const blobClipPath = 'polygon(50% 0%, 80% 10%, 100% 30%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 30%, 20% 10%)';

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans">
      {/* Gradient background wrapper for navbar + hero */}
      <div className="relative pb-20 rounded-b-[3rem] overflow-hidden">
        {/* Horizontal gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to right, #F5F7CF 10%, #ffffff 50%, #F5F7CF 90%)',
          }}
        ></div>

        {/* This overlay adds a subtle, gentle gradient from top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-[#F5F7CF]/20 z-10"></div>

        <div className="relative z-20">
          {/* Navbar */}
          <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-2">
              <img src="/images/Union.png" alt="BIDORO Logo" className="w-8 h-8 object-contain" />
              <div className="text-2xl font-bold text-green-900">BIDORO</div>
            </div>
            <div className="hidden md:flex gap-8 text-gray-700 font-medium">
              <Link href="/" className="hover:text-green-900 transition">Home</Link>
              <Link href="/browse-stores" className="hover:text-green-900 transition">Browse stores</Link>
              <Link href="/about" className="hover:text-green-900 transition">About</Link>
              <Link href="/contact" className="hover:text-green-900 transition">Contact</Link>
            </div>
            <div className="flex gap-4">
              <Link href="/login" className="text-gray-700 font-medium hover:text-green-900 transition">Login</Link>
              <Link href="/signup" className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                Sign up
              </Link>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative text-center max-w-4xl mx-auto mt-20 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Buy smarter, sell with ease, <br />
              <span className="text-gray-800">enjoy a seamless experience.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl px-14 mx-auto mb-8">
              From pre-owned products to expert services, everything you need to
              simplify and enrich your lifestyle is right here
            </p>

            {/* Search bar */}
            <div className="flex flex-col md:flex-row gap-3 justify-center max-w-2xl mx-auto mb-16">
              <div className="relative">
                <select className="appearance-none bg-white px-4 py-3 pr-8 border border-gray-300 rounded-lg w-full md:w-40 text-gray-700">
                  <option>📍 Location</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="🔍 Search for products, sellers or service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                />
              </div>
              <button className="bg-green-900 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition font-medium">
                Search
              </button>
            </div>

            {/* Profile Images with Blob Shape */}
            <div
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-lg"
              style={{ clipPath: blobClipPath }}
            >
              <img
                src="/images/Rectangle 3.png"
                alt="Craftsman profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right - Professional */}
            <div
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-lg"
              style={{ clipPath: blobClipPath }}
            >
              <img
                src="/images/Rectangle 4.png"
                alt="Professional profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left - Artisan */}
            <div
              className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-3/4 w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-lg"
              style={{ clipPath: blobClipPath }}
            >
              <img
                src="/images/Rectangle 1.png"
                alt="Artisan profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right - Seller */}
            <div
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-3/4 w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-lg"
              style={{ clipPath: blobClipPath }}
            >
              <img
                src="/images/Rectangle 2.png"
                alt="Seller profile"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mt-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900">Why choose us</h2>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto text-lg">
          We believe marketplaces are built on people, not just products, so our
          platform combines convenience, security, and trust
        </p>
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="p-6 bg-white rounded-xl hover:shadow-lg transition">
            <div className="w-12 h-12 bg-[#f0f0e6] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Buy with Confidence</h3>
            <p className="text-sm text-gray-600">
              Set your budget, get offers, and pay securely with escrow.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl hover:shadow-lg transition">
            <div className="w-12 h-12 bg-[#f0f0e6] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Sell with Ease</h3>
            <p className="text-sm text-gray-600">
              List items or services, showcase with videos, and build trust fast.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl hover:shadow-lg transition">
            <div className="w-12 h-12 bg-[#f0f0e6] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Secure and reliable</h3>
            <p className="text-sm text-gray-600">
              All checks, fraud detection, and verified profiles keep you protected.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl hover:shadow-lg transition">
            <div className="w-12 h-12 bg-[#f0f0e6] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Search & Connect Nearby</h3>
            <p className="text-sm text-gray-600">
              Search by location and chat directly with buyers or artisans.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Section: Customers + Sellers */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20 bg-white">
        {/* Customers Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image container on the left, now fluid */}
          <div className="relative rounded-2xl overflow-hidden bg-[#62775C] w-full h-auto flex items-center justify-center p-4">
            <img
              src="/images/Rectangle 2.png"
              alt="Customer shopping"
              className="w-full h-full object-cover rounded-xl border-4 border-white"
            />
          </div>
          {/* Text content on the right, now larger */}
          <div>
            <span className="inline-flex items-center text-sm font-medium text-gray-600 mb-2 bg-gray-100 px-3 py-1 rounded-full space-x-2">
              <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
              <span>Customers</span>
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Shop the smarter way
            </h2>
            <p className="mt-3 text-gray-600 text-xl">
              Whether you're hunting for a bargain, searching for unique finds, or hiring skilled artisans nearby, our platform makes it easy to discover, compare, and shop with complete peace of mind.
            </p>
            {/* Button is now bigger */}
            <button className="mt-6 px-8 py-4 bg-[#15340B] text-white rounded-full hover:bg-green-700 transition font-medium">
              Get started →
            </button>
          </div>
        </div>

        {/* Sellers Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content on the left, now larger */}
          <div>
            <span className="inline-flex items-center text-sm font-medium text-gray-600 mb-2 bg-gray-100 px-3 py-1 rounded-full space-x-2">
              <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
              <span>Sellers</span>
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Sell more with stress less
            </h2>
            <p className="mt-3 text-gray-600 text-xl">
              Post items quickly with photos or video, let AI verify receipts for authenticity, and set up a storefront to showcase your craft. With ratings and verified profiles, you can build trust, reach more buyers, and grow your earnings.
            </p>
            {/* Button is now bigger */}
            <button className="mt-6 px-8 py-4 bg-[#415b42] text-white rounded-full hover:bg-green-700 transition font-medium">
              Become a Seller →
            </button>
          </div>
          {/* Image container on the right, now fluid */}
          <div className="relative rounded-2xl overflow-hidden bg-[#62775C] w-full h-auto flex items-center justify-center p-4">
            <img
              src="/images/Rectangle 3.png"
              alt="Seller packaging items"
              className="w-full h-full object-cover rounded-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-1">
        <div className="text-center mb-8 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse top categories</h2>
          <p className="text-gray-600 px-4 max-w-2xl mx-auto">
            Explore the most popular categories and discover everything from everyday
            essentials to unique finds.
          </p>
        </div>
        {/* Updated grid with reduced gap and 8 columns on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 px-4">
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Phone.png"
                alt="Phones and tablets"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Phones & tablets</p>
          </a>
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Home.png"
                alt="Properties"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Properties</p>
          </a>
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Tv.png"
                alt="Electronics"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Electronics</p>
          </a>
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Chair.png"
                alt="Furniture and appliances"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Furniture & appliances</p>
          </a>
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Pc.png"
                alt="Laptops and desktops"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Laptops & desktops</p>
          </a>
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Car.png"
                alt="Automobiles"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Automobiles</p>
          </a>
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Fashion.png"
                alt="Fashion"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Fashion</p>
          </a>
          <a href="#" className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-100 transition">
            <div className="w-28 h-28 rounded-lg bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src="/images/Beauty.png"
                alt="Beauty and care"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Beauty & care</p>
          </a>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition">
            View all →
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured products</h2>
            <p className="text-gray-600 max-w-2xl">
              Check out our top picks - trending items and services handcrafted just for you.
            </p>
          </div>
          <button className="hidden sm:block px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="relative h-48 bg-gray-200">
              <img src="https://placehold.co/568x329/E2E8F0/A0AEC0?text=TV" alt="LG Television" className="object-cover w-full h-full" />
              <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">₦ 650,000</div>
              <p className="text-gray-700 text-sm mb-1">LG 55 inches television</p>
              <p className="text-gray-500 text-xs">📍 Lagos</p>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="relative h-48 bg-gray-200">
              <img src="https://placehold.co/568x329/E2E8F0/A0AEC0?text=TV" alt="Samsung Television" className="object-cover w-full h-full" />
              <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">₦ 650,000</div>
              <p className="text-gray-700 text-sm mb-1">LG 55 inches television</p>
              <p className="text-gray-500 text-xs">📍 Lagos</p>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="relative h-48 bg-gray-200">
              <img src="https://placehold.co/568x329/E2E8F0/A0AEC0?text=TV" alt="LG Television" className="object-cover w-full h-full" />
              <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">₦ 650,000</div>
              <p className="text-gray-700 text-sm mb-1">LG 55 inches television</p>
              <p className="text-gray-500 text-xs">📍 Lagos</p>
            </div>
          </div>
          {/* Product Card 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="relative h-48 bg-gray-200">
              <img src="https://placehold.co/568x329/E2E8F0/A0AEC0?text=TV" alt="Samsung Television" className="object-cover w-full h-full" />
              <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">₦ 650,000</div>
              <p className="text-gray-700 text-sm mb-1">LG 55 inches television</p>
              <p className="text-gray-500 text-xs">📍 Lagos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">

        {/* Featured Reels Section */}
        <div className="mb-16">
          {/* The title and text are still centered within a max-width container */}
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">Featured reels</h2>
            <p className="text-gray-600 max-w-2xl">
              See products in action throught short reels from our sellers.
            </p>
          </div>

          {/* The reels container is now full-width, with horizontal scrolling */}
          <div className="flex overflow-x-auto space-x-6 mt-8 py-2 px-6">
            {/* Reel Card 1 */}
            <div className="relative flex-1 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/reel1.png"
                alt="Featured reel 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Reel Card 2 */}
            <div className="relative flex-1 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/reel2.png"
                alt="Featured reel 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Reel Card 3 */}
            <div className="relative flex-1 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/reel3.png"
                alt="Featured reel 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Reel Card 4 */}
            <div className="relative flex-1 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/reel4.png"
                alt="Featured reel 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="pt-16 pb-8 rounded-[3rem]">
          <div className="text-center max-w-2xl mx-auto px-14 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Testimonials</h2>
            <p className="text-gray-600">
              See how buyers, sellers, and artisans are using our platform to shop smarter, sell faster, and connect with trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "I love how easy it is to set my budget and get multiple offers. The
                escrow payment system gives me peace of mind, and I've discovered amazing
                deals from sellers near me."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800">Jessica Okoro</p>
                  <p className="text-sm text-gray-500">Buyer</p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "I love how easy it is to set my budget and get multiple offers. The
                escrow payment system gives me peace of mind, and I've discovered amazing
                deals from sellers near me."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800">Amanda Chike</p>
                  <p className="text-sm text-gray-500">Buyer</p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "I love how easy it is to set my budget and get multiple offers. The
                escrow payment system gives me peace of mind, and I've discovered amazing
                deals from sellers near me."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800">Benjamin Obi</p>
                  <p className="text-sm text-gray-500">Buyer</p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "I love how easy it is to set my budget and get multiple offers. The
                escrow payment system gives me peace of mind, and I've discovered amazing
                deals from sellers near me."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800">Chisom Nnadi</p>
                  <p className="text-sm text-gray-500">Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

{/* Newsletter Section */}
    <Newsletter />

    {/* Footer */}
    <Footer />

    </div>
  );
}

// All FAQ logic and state are now self-contained in this component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Who is Bidoro a good fit for?",
      answer: "Our platform is a perfect fit for both buyers and sellers. It's designed for people looking for unique pre-owned items or specialized services, as well as for artisans and sellers who want to connect with new customers and grow their business."
    },
    {
      question: "Can I search for sellers or artisans near my location?",
      answer: "Yes, you can. The platform features a location-based search function that allows you to find sellers and services right in your neighborhood. This makes it easier to connect, meet up, and transact with people near you."
    },
    {
      question: "What do I need to start selling or offering a service?",
      answer: "Starting is easy. Simply create a profile, post items quickly with photos or videos, and showcase your skills by creating a storefront. Our AI-powered tools can also help verify authenticity and build trust with your customers."
    },
    {
      question: "How does the platform ensure safety and provide escrow?",
      answer: "We prioritize safety with verified user profiles and a secure escrow payment system. This means your payment is held securely until you confirm the successful delivery of a product or completion of a service, giving you complete peace of mind."
    },
    {
      question: "Can I list both second-hand items and handmade products?",
      answer: "Yes, our platform is built to support a wide range of goods and services. You are welcome to list both pre-owned products you wish to sell and unique handmade items you've crafted yourself."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-6 pb-20">
      <h2 className="text-center text-3xl font-bold font-poppins text-gray-900 mb-8">
        Frequently asked questions (FAQ)
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-sm cursor-pointer transition-all duration-300 ${
              openIndex === index ? 'shadow-md border border-gray-200' : ''
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-800">
                {item.question}
              </p>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600 animate-fade-in">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// src/components/Newsletter.jsx (You can create this in a separate file or add it to Home.js)
const Newsletter = () => {
  const blobClipPath = 'polygon(50% 0%, 80% 10%, 100% 30%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 30%, 20% 10%)';

  return (
    <div className="py-14" style={{ backgroundColor: '#FCFCEF' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Join our newsletter</h2>
          <p className="text-lg text-gray-600 mb-6">
            Stay updated with new deals, tips, and trusted sellers delivered <br />straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900 transition"
            />
            <button
              className="text-white px-7 py-3.5 rounded-lg font-medium text-lg hover:opacity-90 transition"
              style={{ backgroundColor: '#15340B' }}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div
            className="w-48 h-48 md:w-64 md:h-64 overflow-hidden"
            style={{ clipPath: blobClipPath }}
          >
            <img
              src="/images/Rectangle 3.png" // Changed to Rectangle 3.png as per the image
              alt="Person smiling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// src/components/Footer.jsx (You can create this in a separate file or add it to Home.js)
const Footer = () => {
  return (
    <footer className="text-white py-12 px-6" style={{ backgroundColor: '#15340B' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Socials */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Unionw.png" alt="BIDORO Logo" className="w-8 h-8 object-contain" />
            <div className="text-2xl font-bold">BIDORO</div>
          </div>
          <div className="flex gap-4">
            {/* Social Media SVG icons */}
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 hover:text-gray-300 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.908c0-.829.742-1.092 1.092-1.092h3.908v-5h-4.481c-4.704 0-5.519 2.805-5.519 5.378v2.622z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6 hover:text-gray-300 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919.058 1.267.069 1.647.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.647.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.253-.148-4.771-1.691-4.919-4.919-.058-1.267-.069-1.647-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.267-.058 1.647-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.204-6.78 2.62-6.981 6.981-.058 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.204 4.357 2.62 6.78 6.981 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.204 6.78-2.619 6.981-6.981.058-1.281.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.204-4.359-2.62-6.78-6.981-6.981-1.281-.058-1.689-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.646-1.442-1.442-1.442z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 hover:text-gray-300 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.39-1.831.654-2.825.775a4.99 4.99 0 002.163-2.736 9.927 9.927 0 01-3.153 1.205 4.978 4.978 0 00-8.49 4.57c-4.143-.207-7.818-2.193-10.27-5.186a5.006 5.006 0 001.53 6.643 4.939 4.939 0 01-2.253-.623c-.022 2.44 1.734 4.475 4.022 4.938a4.977 4.977 0 01-2.247.086 4.981 4.981 0 004.646 3.442A9.957 9.957 0 010 19.54a14.004 14.004 0 007.575 2.22c9.083 0 14.05-7.513 14.05-14.05v-.633a10.038 10.038 0 002.46-2.585z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6 hover:text-gray-300 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.565-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigations */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Navigations</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/browse-stores" className="hover:underline">Browse stores</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Solutions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Buyers</a></li>
            <li><a href="#" className="hover:underline">Sellers</a></li>
            <li><a href="#" className="hover:underline">Artisans</a></li>
          </ul>
        </div>

        {/* About Bidoro */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">About Bidoro</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Terms & condition</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
        <p>© 2025 Bidoro. All rights reserved.</p>
      </div>
    </footer>
  );
};
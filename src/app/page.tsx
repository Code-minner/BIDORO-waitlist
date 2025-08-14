"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Logo from "@/components/svgs/svg";
import WaitlistModal from "@/components/WaitlistModal"; // Import your modal

interface PhotoProps {
  src?: string;
  className?: string;
  alt?: string;
}

const Photo: React.FC<PhotoProps> = ({
  src,
  className = "",
  alt = "Photo",
}) => (
  <div
    className={`rounded-xl md:rounded-2xl shadow-md overflow-hidden ${className}`}
  >
    <img
      src={
        src || "https://via.placeholder.com/400x400/e2e8f0/cbd5e1?text=Photo"
      }
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

const BidoroLayout: React.FC = () => {
  const router = useRouter();
  
  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Main form state (for the inline form)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Show modal after animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 3 seconds after page load (adjust timing as needed)

    return () => clearTimeout(timer);
  }, []);

  // Handle main form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          referralSource: 'landing_page_form'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Redirect to thank-you page
      router.push('/thank-you');
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Each image appears 0.15s after the previous
        delayChildren: 0.2, // Initial delay before starting
      },
    },
  };

  // Animation variants for individual images
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  // Side images slide from left
  const slideFromLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  // Side images slide from right
  const slideFromRight = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  // Center image scales up
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleJoinWaitlist = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16 px-4 relative">
      <div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[400px] sm:w-[900px] sm:h-[900px]"
        style={{
          background:
            "radial-gradient(circle, #dee56340 0%, #dee56320 30%, #dee56310 50%, transparent 70%)",
        }}
      />
      <div className="max-w-[1400px] mx-auto text-center relative">
        {/* Header */}
        <motion.div
          className="flex items-center justify-center w-full max-w-[550px] mx-auto border border-[#E3E3E3] rounded-full p-2 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-full flex items-center justify-between gap-2 ml-4">
            <Logo className="h-auto" />
            <button
              onClick={handleJoinWaitlist}
              className="text-[14px] sm:text-[18px] bg-[#1C341A] text-[#DEE563] px-6 py-2 rounded-full md:ml-4 hover:bg-[#2A4A28] transition-colors cursor-pointer"
            >
              Join waitlist
            </button>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-[1.5em] sm:text-3xl md:text-4xl lg:text-[3.9em] font-semibold text-[#1C341A] mb-4 leading-[1.1em] px-4 tracking-[0.035em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Smarter Shopping. Safer Selling.
          <br />
          Stronger Community.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-[14px] sm:text-base md:text-[18px] text-gray-600 mb-8 md:mb-16 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Join the future of local commerce — where budget finds beauty, clutter
          finds a home and trust is built into every transaction.
        </motion.p>

        {/* Photo Collage - Animated Grid */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center mx-auto"
            style={{
              gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr", // 20% 20% 40% 20% 20%
              gridTemplateRows: "auto auto",
              maxWidth: "100%",
              height: "auto",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Column 1 - Single item spanning both rows */}
            <motion.div
              className="row-span-2 flex items-center justify-center"
              variants={slideFromLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full aspect-[3/4] rounded-[30px] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/handshake.jpg"
                  alt="Handshake"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Column 2 Row 1 */}
            <motion.div
              className="flex items-end justify-center"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full aspect-[4/5] rounded-[30px] overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/jackets.jpg"
                  alt="Jackets"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Column 3 - Center large image spanning both rows */}
            <motion.div
              className="row-span-2 flex items-center justify-center"
              variants={scaleUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="w-full aspect-[3/4] rounded-[30px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/assets/infinix.jpg"
                  alt="Phone"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Column 4 Row 1 */}
            <motion.div
              className="flex items-end justify-center"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full aspect-[4/5] rounded-[30px] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/fruits.jpg"
                  alt="Fruits"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Column 5 - Single item spanning both rows */}
            <motion.div
              className="row-span-2 flex items-center justify-center"
              variants={slideFromRight}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full aspect-[3/4] rounded-[30px] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/rings.jpg"
                  alt="Jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Column 2 Row 2 */}
            <motion.div
              className="flex items-start justify-center"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full aspect-[4/5] rounded-[30px] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/baskets.jpg"
                  alt="Baskets"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Column 4 Row 2 */}
            <motion.div
              className="flex items-start justify-center"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full aspect-[4/5] rounded-[30px] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/shoes.jpg"
                  alt="Shoes"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Inline Waitlist Form Section */}
        <motion.div 
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 py-16 md:p-12 max-w-[1400px] mx-auto">
            <div className="max-w-3xl mx-auto">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-4">
                  Join waitlist
                </h2>
                <p className="text-[1.6em] md:text-[2.2em] text-gray-700 mb-2">
                  Be First to Experience <span className="text-[#1C341A] font-semibold">Bidoro</span>
                </p>
                <p className="text-gray-600 text-[14px] md:text-[18px] leading-relaxed max-w-2xl mx-auto leading-[1.1em] px-4 tracking-[0.035em]">
                  Get early access, exclusive perks, and be part of a new era of trust-based commerce.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name Field */}
                <div>
                  <label htmlFor="inline-name" className="block text-sm font-semibold text-gray-700 mb-2 leading-[1.1em] px-4 tracking-[0.035em]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="inline-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#1C341A] focus:border-[#1C341A] outline-none transition-colors text-base"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="inline-email" className="block text-sm font-medium text-gray-700 mb-2 leading-[1.1em] px-4 tracking-[0.035em]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="inline-email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="JohnDoe@gmail.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#1C341A] focus:border-[#1C341A] outline-none transition-colors text-base"
                  />
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {error && (
                    <motion.p 
                      className="text-red-500 text-sm text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1C341A] text-[#DEE563] py-4 px-6 rounded-full font-medium hover:bg-[#2A4A28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#DEE563]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </span>
                  ) : 'Join waitlist'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default BidoroLayout;
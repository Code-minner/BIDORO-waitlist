'use client'

import React, { useState } from 'react'

// ShoppingSection component, as updated previously, now part of the complete page.
const ShoppingSection = () => {
  const sampleImage = "/assets/young-woman-shopping-clothes.jpg";
  const starImage = "/assets/Star 5.png";

  return (
    <div className="relative flex flex-col lg:flex-row items-stretch bg-white max-w-[1260px] min-h-[643px] mx-auto rounded-[50px] shadow-xl border border-black overflow-hidden">
      
      {/* Left text section */}
      <div className="w-full lg:w-1/2 max-w-md space-y-6 md:space-y-8 flex flex-col justify-center p-6 md:p-16 h-full relative z-10">
        <div>
          <span className="bg-lime-300 px-2 py-1 font-bold text-base md:text-lg inline-block">
            Buy Smarter
          </span>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Discover budget-friendly deals, unique handmade goods, and second-hand
            treasures — all verified and trusted.
          </p>
        </div>

        <div>
          <span className="bg-purple-100 px-2 py-1 font-bold text-base md:text-lg inline-block">
            Sell Clutter
          </span>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Turn unused items into extra income with AI-backed listing tools and
            secure escrow payments.
          </p>
        </div>

        <div>
          <span className="bg-lime-300 px-2 py-1 font-bold text-base md:text-lg inline-block">
            Support Local
          </span>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Showcase local craftsmanship and connect with a community that values
            quality, authenticity, and fairness.
          </p>
        </div>
      </div>

      {/* Right image section */}
      <div className="flex-1 h-full">
        <img
          src={sampleImage}
          alt="Shopping woman"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Stars */}
      <img
        src={starImage}
        alt="Star"
        className="absolute top-[15%] left-[48%] w-6 h-6 md:w-8 md:h-8"
      />
      <img
        src={starImage}
        alt="Star"
        className="absolute top-[45%] left-[48%] w-6 h-6 md:w-8 md:h-8"
      />
      <img
        src={starImage}
        alt="Star"
        className="absolute top-[20%] right-[3%] w-6 h-6 md:w-8 md:h-8"
      />
    </div>



  );
};






// A new component to provide the main layout.
// This uses a flex container to create a responsive, full-page layout.
const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Header - No longer sticky */}
      <header className="bg-transparent p-4 flex items-center justify-center z-50">
        <div className="flex items-center space-x-4 md:space-x-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 p-2 px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <img src="/assets/BIDORO-icon-img.jpg" alt="BIDORO logo" width="32" height="32" className="rounded-full md:w-10 md:h-10" />
            <span className="text-xl md:text-2xl font-bold text-gray-900">BIDORO</span>
          </div>
          <button className="bg-green-700 text-white px-4 py-1 md:px-6 md:py-2 rounded-full font-medium hover:bg-green-800 transition-colors text-xs md:text-sm">
            Join waitlist
          </button>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - A simple example of a new section */}
      
    </div>
  )
}

// Main content for the homepage.
const HomeContent = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (!email) {
        throw new Error('Email is required')
      }

      setSuccess(true)
      setEmail('')
      setName('')

    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  // Success state - "We're launching Soon!" page
  if (success) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Main content container for text and sand timer */}
        <div className="flex flex-col items-center justify-center z-10 w-full max-w-4xl space-y-8">
          {/* Text container, centered */}
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-green-800 mb-4">
              We're launching<br />Soon!
            </h1>
          </div>
        </div>

        {/* The new larger sand timer, now with an even larger negative margin */}
        <div className="absolute right-0 bottom-0 top-[250px] w-[500px] md:w-[600px] -mr-32 hidden md:block">
          {/* The image now uses object-cover to eliminate white space and fills its container */}
          <img src="/assets/sandtimer.png" alt="Hourglass" className="w-full h-full object-cover" />
        </div>
        <div className="md:hidden absolute w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <img src="/assets/sandtimer.png" alt="Hourglass" className="w-full h-full object-cover" />
        </div>

        {/* Updated confetti images */}
        <img src="/assets/Confetti Triangle.png" alt="Confetti triangle" className="absolute top-10 left-10 w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-30" />
        <img src="/assets/Confetti Dot.png" alt="Confetti dot" className="absolute top-1/2 left-4 md:left-24 w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-90" />
        <img src="/assets/Polygon 5.png" alt="Confetti polygon" className="absolute bottom-10 left-1/4 w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-lg -rotate-30" />
        <img src="/assets/Confetti Square.png" alt="Confetti square" className="absolute bottom-10 left-10 w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-lg -rotate-12" />

        <img src="/assets/Confetti Arch.png" alt="Confetti arch" className="absolute top-10 right-10 w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-12" />
        <img src="/assets/Confetti Ribbon.png" alt="Confetti ribbon" className="absolute top-20 right-20 w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-lg -rotate-45" />
        <img src="/assets/Confetti Circle.png" alt="Confetti circle" className="absolute bottom-1/4 right-1/4 w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-45 z-20" />
      </div>
    )
  }

  // Main waitlist page
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative font-sans"
      style={{
        backgroundImage: 'url(/assets/Background.jpg)'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="container mx-auto px-4 md:px-6 py-8 relative z-10">
        {/* Top Section with navigation and tagline */}
        <div className="text-center mb-8 md:mb-16">
          {/* Main tagline */}
          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight">
            Smarter Shopping. Safer Selling.<br />
            <span className="text-green-700">Stronger Community.</span>
          </h1>

          <p className="text-sm md:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the future of local commerce — where budget finds beauty,<br />
            clutter finds a home, and trust is built into every transaction.
          </p>

          {/* Product showcase images - matching exact layout from Figma */}
          <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-2 gap-4 max-w-6xl mx-auto mb-8 md:mb-16 h-auto md:h-80">
            {/* Left edge - handshake (centered vertically) */}
            <div className="row-span-1 md:row-span-2 relative rounded-xl md:rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/handshake.jpg" alt="Handshake" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Top left - jackets */}
            <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/jackets.jpg" alt="Clothing rack" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Center large - person with phone (spans 1 col, 2 rows) */}
            <div className="row-span-2 md:row-span-2 relative rounded-xl md:rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/infinix.jpg" alt="Person on phone" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Top right - fruits */}
            <div className="hidden md:block relative rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/fruits.jpg" alt="Fresh vegetables" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right edge - rings (centered vertically) */}
            <div className="row-span-1 md:row-span-2 relative rounded-xl md:rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/rings.jpg" alt="Rings" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Bottom left - baskets */}
            <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/baskets.jpg" alt="Handcrafted baskets" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Bottom right - shoes */}
            <div className="hidden md:block relative rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/shoes.jpg" alt="Sneakers" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Image of woman with shopping bags (wider version) */}
        <div className="mb-8 md:mb-16">
          <ShoppingSection />
        </div>

{/* Trust Features */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Trust Features</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* AI Verification */}
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-lg text-center border border-gray-400">
              <div className="w-20 h-30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-800">
                  <path d="M71.2138 31.724V23.9119H63.3926V16.0998C63.3864 14.0298 62.5604 12.0464 61.095 10.5826C59.6296 9.11893 57.6439 8.29388 55.5715 8.2877H47.7503V0.475586H39.9292V8.2877H32.108V0.475586H24.2869V8.2877H16.4657C14.3933 8.29388 12.4076 9.11893 10.9422 10.5826C9.47676 12.0464 8.65076 14.0298 8.64457 16.0998V23.9119H0.823425V31.724H8.64457V39.5362H0.823425V47.3483H8.64457V55.1604C8.65076 57.2304 9.47676 59.2138 10.9422 60.6776C12.4076 62.1413 14.3933 62.9663 16.4657 62.9725H24.2869V70.7846H32.108V62.9725H39.9292V70.7846H47.7503V62.9725H55.5715C57.6439 62.9663 59.6296 62.1413 61.095 60.6776C62.5604 59.2138 63.3864 57.2304 63.3926 55.1604V47.3483H71.2138V39.5362H63.3926V31.724H71.2138ZM55.5715 55.1604H16.4657V16.0998H55.5715V55.1604Z" fill="currentColor" />
                  <path d="M33.5197 18.3613H28.26L20.3997 49.6098H24.4159L26.2304 42.2859H35.2873L37.0549 49.6098H41.2079L33.5197 18.3613ZM26.7583 39.1572L30.7393 22.0721H30.9192L34.7633 39.1572H26.7583ZM44.7939 18.3613H48.7045V49.6098H44.7939V18.3613Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3 text-lg text-gray-900">AI Verification</h3>
              <p className="text-gray-600 text-base">Protects against scams</p>
            </div>

            {/* Escrow Payment */}
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-lg text-center border border-gray-400">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src="data:image/svg+xml;charset=UTF-8,%3csvg width='65' height='73' viewBox='0 0 65 73' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M63.2533 10.133C62.9699 9.80199 62.618 9.53628 62.222 9.3541C61.826 9.17193 61.3951 9.07761 60.9591 9.07764H33.7909C33.3623 9.07818 32.9387 9.16988 32.5483 9.34664C32.158 9.52341 31.8098 9.78118 31.5269 10.1028C31.2433 10.4254 31.032 10.8048 30.907 11.2156C30.7821 11.6264 30.7464 12.0591 30.8024 12.4848L33.8211 35.0988C33.8726 35.4948 34.0017 35.8767 34.201 36.2229C34.4003 36.569 34.666 36.8725 34.9827 37.1161C35.2995 37.3597 35.6612 37.5386 36.0471 37.6425C36.4331 37.7465 36.8358 37.7735 37.2322 37.7221C37.6286 37.6706 38.011 37.5416 38.3575 37.3425C38.704 37.1435 39.0079 36.8781 39.2518 36.5618C39.4957 36.2454 39.6748 35.8841 39.7788 35.4986C39.8829 35.1131 39.91 34.7108 39.8585 34.3149L37.4133 15.9523C37.3962 15.8493 37.4037 15.7437 37.4352 15.6442C37.4667 15.5447 37.5212 15.4539 37.5944 15.3794C37.6578 15.3026 37.7358 15.239 37.8238 15.1925C37.9119 15.1459 38.0084 15.1172 38.1076 15.108H56.4311C56.5417 15.1019 56.6522 15.1235 56.7524 15.1709C56.8526 15.2183 56.9393 15.29 57.0046 15.3794C57.0783 15.4598 57.1329 15.5558 57.1643 15.6602C57.1956 15.7646 57.203 15.8748 57.1857 15.9825L53.8954 35.7923C53.7633 36.592 53.9546 37.4114 54.4273 38.0701C54.9 38.7289 55.6154 39.1731 56.416 39.305C56.8124 39.3704 57.2178 39.3571 57.6091 39.2659C58.0003 39.1747 58.3698 39.0075 58.6964 38.7737C59.3559 38.3015 59.8006 37.587 59.9327 36.7873L63.9778 12.6657C64.0567 12.2163 64.0326 11.7549 63.9071 11.3161C63.7816 10.8774 63.558 10.4729 63.2533 10.133Z' fill='%231C341A'/%3e%3cpath d='M53.4126 42.2449H35.3004C35.16 42.25 35.0213 42.2123 34.9027 42.137C34.7841 42.0616 34.6912 41.9521 34.6363 41.8228L31.7384 36.2145C31.6288 35.9865 31.4636 35.7896 31.2578 35.642C31.0521 35.4945 30.8125 35.401 30.5611 35.3703C30.3074 35.3411 30.0504 35.3754 29.8132 35.4702C29.5761 35.5649 29.3663 35.7171 29.2027 35.913L23.5275 42.8781C23.0606 43.3724 22.4251 43.6736 21.7465 43.7224H18.7278C18.5245 43.7183 18.3225 43.7553 18.1339 43.8311C17.9452 43.9069 17.7739 44.02 17.6301 44.1637C17.4863 44.3073 17.373 44.4784 17.2971 44.6669C17.2212 44.8553 17.1842 45.0571 17.1883 45.2601V63.3514C17.1834 63.5862 17.2358 63.8188 17.341 64.0289C17.4461 64.2391 17.601 64.4205 17.792 64.5574C24.735 69.7738 30.1083 72.397 33.7911 72.397H50.5448C51.8592 72.6191 53.2085 72.3216 54.3072 71.5675C55.4059 70.8134 56.1676 69.6618 56.4313 68.3566C57.902 61.2328 58.9103 54.0215 59.4499 46.7677C59.4499 44.5063 57.367 42.2449 53.4126 42.2449ZM10.6377 40.7373H1.34018C1.14003 40.7373 0.948077 40.8168 0.806549 40.9581C0.66502 41.0995 0.58551 41.2912 0.58551 41.4911V68.628C0.58551 68.8279 0.66502 69.0196 0.806549 69.161C0.948077 69.3024 1.14003 69.3818 1.34018 69.3818H10.6377C10.8902 69.4114 11.1461 69.3876 11.3887 69.312C11.6314 69.2364 11.8554 69.1105 12.0461 68.9427C12.2369 68.7749 12.3902 68.5689 12.496 68.3381C12.6018 68.1072 12.6578 67.8567 12.6603 67.6028V42.5163C12.6578 42.2624 12.6018 42.0119 12.496 41.7811C12.3902 41.5502 12.2369 41.3442 12.0461 41.1764C11.8554 41.0086 11.6314 40.8828 11.3887 40.8071C11.1461 40.7315 10.8902 40.7077 10.6377 40.7373ZM42.8472 27.1689C42.8472 28.3685 43.3242 29.5188 44.1734 30.367C45.0226 31.2152 46.1743 31.6917 47.3752 31.6917C48.5761 31.6917 49.7278 31.2152 50.577 30.367C51.4262 29.5188 51.9032 28.3685 51.9032 27.1689C51.9032 25.9694 51.4262 24.819 50.577 23.9708C49.7278 23.1226 48.5761 22.6461 47.3752 22.6461C46.1743 22.6461 45.0226 23.1226 44.1734 23.9708C43.3242 24.819 42.8472 25.9694 42.8472 27.1689ZM26.2444 33.1993C26.6849 33.205 27.1214 33.1143 27.5231 32.9336C27.9248 32.7528 28.282 32.4864 28.5697 32.1531C28.8574 31.8198 29.0685 31.4276 29.1883 31.0041C29.3081 30.5807 29.3336 30.1361 29.2631 29.7017L25.4293 6.93692C25.355 6.74277 25.355 6.52804 25.4293 6.33388C25.5214 6.21122 25.6488 6.11953 25.7944 6.07105C25.94 6.02256 26.097 6.01958 26.2444 6.06252H50.3939C51.1945 6.06252 51.9623 5.74484 52.5284 5.17938C53.0945 4.61392 53.4126 3.847 53.4126 3.04731C53.4126 2.24763 53.0945 1.4807 52.5284 0.915244C51.9623 0.349783 51.1945 0.0321111 50.3939 0.0321111H21.7163C21.2758 0.0264358 20.8393 0.117151 20.4376 0.297888C20.0359 0.478625 19.6787 0.745003 19.391 1.07832C19.1033 1.41163 18.8922 1.80381 18.7724 2.2273C18.6526 2.6508 18.6271 3.09535 18.6976 3.52975L23.2257 30.6666C23.3414 31.38 23.7098 32.0283 24.2639 32.4931C24.818 32.958 25.5208 33.2086 26.2444 33.1993Z' fill='%231C341A'/%3e%3c/svg%3e"
                  alt="Escrow Payment logo"
                  className="w-10 h-10 text-green-800"
                />
              </div>
              <h3 className="font-semibold mb-3 text-lg text-gray-900">Escrow Payment</h3>
              <p className="text-gray-600 text-base">Safe money handling until delivery</p>
            </div>

            {/* Shop and Sell with Confidence */}
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-lg text-center border border-gray-400">
<div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
<img
src="data:image/svg+xml;charset=UTF-8,%3csvg width='91' height='63' viewBox='0 0 91 63' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M73.5245 0.76062C70.4655 3.68661 66.8278 5.93963 62.8454 7.37465C58.6457 8.11578 47.0234 2.72574 41.2965 8.22807C40.342 9.18256 39.1629 10.137 37.9277 11.0915C35.2327 9.91246 31.0779 8.11578 28.046 6.37525C25.0141 4.63471 17.3782 0.76062 17.3782 0.76062L0.534302 20.4118C0.534302 20.4118 4.68913 26.0264 7.27186 29.7321C8.95624 32.2025 11.0337 35.9643 12.3812 38.4909L10.4722 40.7368C10.0183 41.6457 9.85563 42.6724 10.0063 43.6771C10.157 44.6818 10.6138 45.6157 11.3144 46.3514C12.1253 46.9628 13.1137 47.2925 14.1292 47.2905C15.1447 47.2885 16.1318 46.9548 16.9402 46.3402C16.6401 46.6916 16.4129 47.0994 16.272 47.5396C16.131 47.9797 16.0792 48.4436 16.1194 48.904C16.1597 49.3645 16.2912 49.8123 16.5063 50.2214C16.7215 50.6305 17.016 50.9926 17.3726 51.2867C18.2311 51.784 19.2061 52.045 20.1982 52.043C21.1904 52.041 22.1644 51.7762 23.0209 51.2754C22.3794 52.075 22.0284 53.0687 22.0253 54.0938C22.0222 55.1189 22.3673 56.1147 23.004 56.9181C23.8316 57.2055 24.7144 57.2973 25.5833 57.1862C26.4523 57.0752 27.2837 56.7643 28.0123 56.2781C27.6475 57.1374 27.5526 58.0873 27.7401 59.0018C27.9276 59.9163 28.3887 60.7522 29.0622 61.3986C30.0125 61.8169 31.053 61.9888 32.0873 61.8985C33.1217 61.8082 34.1166 61.4586 34.98 60.8821L37.8772 58.26C40.5273 60.8989 44.1824 62.5328 48.2193 62.5328L48.5618 62.5271C49.8924 62.4142 51.1671 61.9411 52.2492 61.1587C53.3313 60.3763 54.18 59.3141 54.7042 58.086C55.524 58.4004 56.456 58.6137 57.4442 58.6137C58.7692 58.6137 59.9988 58.232 61.0375 57.575C64.3221 55.4022 63.536 53.7178 63.536 53.7178C64.704 54.2205 66.0013 54.3397 67.2413 54.0582C68.4813 53.7767 69.6 53.1091 70.4364 52.1513C71.3056 51.2622 71.8536 50.1088 71.9939 48.8733C72.1343 47.6379 71.8588 46.3909 71.2112 45.3295C71.2472 45.3495 71.288 45.3592 71.3291 45.3576C73.6929 45.3576 75.7479 44.055 76.8203 42.1348C77.35 40.7704 77.5294 39.295 77.3421 37.8434C77.1548 36.3918 76.6067 35.0103 75.7479 33.8252L75.7647 33.8532C80.3687 32.9549 80.2003 30.6529 82.4461 27.2841C84.5699 24.5325 87.2164 22.2275 90.2336 20.5016L73.5245 0.76062ZM73.2437 40.3999C70.7733 42.8703 68.8643 41.8035 64.6534 38.6032C60.4424 35.4029 52.0766 29.3952 52.0766 29.3952C52.4191 31.1077 53.2107 32.5956 54.3281 33.7802C56.1191 35.7959 61.453 40.3999 63.9796 42.758C65.5517 44.2178 69.5942 47.1374 67.2361 49.3833C64.8779 51.6291 63.0251 49.3833 59.151 46.2391C55.2769 43.0949 46.6304 35.3467 46.6304 35.3467C46.5838 36.0893 46.6948 36.8334 46.9561 37.5301C47.2174 38.2268 47.623 38.8604 48.1463 39.3893C49.1008 40.5122 54.4347 45.6776 56.6806 48.0358C58.9264 50.3939 60.8916 51.7976 58.9826 53.6504C57.0736 55.5032 53.1995 52.5836 51.066 50.3939C47.7533 47.1936 41.1842 41.2421 41.1842 41.2421L41.1786 41.5397C41.1786 43.1342 41.7288 44.594 42.6552 45.7506C44.2723 47.873 47.4164 50.6241 49.3254 52.7577C51.2344 54.8912 52.3573 56.6879 49.3254 58.3723C46.2935 60.0567 41.8018 55.9019 39.8367 53.8806V53.8694C39.8428 53.3138 39.6428 52.7757 39.2752 52.359C38.6023 51.7391 37.7737 51.3134 36.8778 51.1275C35.982 50.9416 35.0524 51.0024 34.1884 51.3035C34.543 50.9849 34.8271 50.5957 35.0227 50.161C35.2183 49.7262 35.3209 49.2554 35.3241 48.7787C35.3273 48.302 35.2309 47.8299 35.0411 47.3926C34.8514 46.9553 34.5724 46.5624 34.2221 46.2391C33.4851 45.6807 32.5855 45.379 31.6609 45.38C30.7362 45.381 29.8373 45.6847 29.1015 46.2447C29.4736 45.8893 29.7608 45.4547 29.9418 44.9731C30.1228 44.4915 30.193 43.9753 30.1472 43.4629C30.1013 42.9504 29.9406 42.4549 29.6769 42.0131C29.4133 41.5712 29.0535 41.1945 28.6243 40.9108C27.6192 40.2793 26.4398 39.9825 25.2554 40.0632C24.0711 40.1439 22.9429 40.5979 22.0327 41.36C22.641 40.6227 22.9409 39.679 22.8698 38.7258C22.7986 37.7726 22.3619 36.8838 21.6509 36.2451C20.7655 35.4258 19.6397 34.9136 18.4403 34.7841C17.241 34.6547 16.0318 34.915 14.992 35.5264L11.2582 29.2212C8.67551 25.1225 5.64361 20.8554 5.64361 20.8554L18.445 5.30285C18.445 5.30285 22.9928 8.11017 26.7546 10.2437C28.6074 11.3105 31.8078 12.7142 34.2221 13.8371C30.4041 16.7005 27.2038 19.4517 28.1583 21.3607C29.858 22.5847 31.8912 23.2601 33.9855 23.2962C36.0798 23.3323 38.1351 22.7275 39.876 21.5628C42.1082 20.0748 44.7338 19.2869 47.4164 19.3001C49.3647 19.3001 51.2175 19.7044 52.8963 20.4399C56.0068 22.5398 61.7337 27.7052 66.9553 30.9617C73.5245 35.7341 74.8158 38.8222 73.2437 40.3943V40.3999Z' fill='%231C341A'/%3e%3c/svg%3e"
alt="Shop with confidence logo"
className="w-10 h-10 text-green-800"
/>
</div>
              <h3 className="font-semibold mb-3 text-lg text-gray-900">Shop and sell with confidence</h3>
              <p className="text-gray-600 text-base">Community Trust Scores</p>
            </div>
          </div>
        </div>

        {/* Join waitlist section */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-16 px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 text-center border border-white/50">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Join waitlist</h2>
              <p className="text-gray-600 mb-6 md:mb-8">
                <span className="text-lg md:text-xl">
                  Be first to Experience{' '}
                  <span className="text-green-800 font-bold text-xl md:text-3xl">
                    Bidoro
                  </span>
                </span>
                <br />
                <span className="text-sm md:text-lg">
                  Get early access, exclusive perks, and be part of a new era of trust-based commerce.
                </span>
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                />
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl md:rounded-2xl p-4">
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 md:py-4 px-6 rounded-xl md:rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl text-base md:text-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </span>
                  ) : 'Join the waitlist'}
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 md:mt-6 leading-relaxed">
                By joining our waitlist, you agree to receive updates about Bidoro.<br />
                Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* New "We are launching soon" section - now a large card */}
   <div className="max-w-6xl mx-auto my-8 md:my-16 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-white/50 relative overflow-hidden flex flex-col min-h-[500px]">

  {/* Centered text at the top */}
  <div className="text-center p-4 md:p-0">
    <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 leading-none drop-shadow-lg">
      We're launching
      <br />
      <span>Soon</span>
    </h1>
  </div>

  {/* Sand timer at the bottom right */}
  <div className="mt-auto flex justify-end">
    <div className="w-[400px] md:w-[500px]">
      <img
        src="/assets/sandtimer.png"
        alt="Hourglass"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>


  {/* Confetti images - updated positions */}
  <img src="/assets/Confetti Triangle.png" alt="Confetti triangle" className="absolute top-4 left-4 w-6 h-6 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-30" />
  <img src="/assets/Confetti Dot.png" alt="Confetti dot" className="absolute bottom-1/3 left-4 w-6 h-6 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-90" />
  <img src="/assets/Polygon 5.png" alt="Confetti polygon" className="absolute top-1/4 left-1/4 w-6 h-6 md:w-12 md:h-12 object-cover rounded-full shadow-lg -rotate-30" />
  <img src="/assets/Confetti Square.png" alt="Confetti square" className="absolute bottom-4 left-4 w-6 h-6 md:w-12 md:h-12 object-cover rounded-full shadow-lg -rotate-12" />

  <img src="/assets/Confetti Arch.png" alt="Confetti arch" className="absolute top-4 right-60 w-6 h-6 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-12" />
  <img src="/assets/Confetti Ribbon.png" alt="Confetti ribbon" className="absolute top-8 right-8 w-6 h-6 md:w-12 md:h-12 object-cover rounded-full shadow-lg -rotate-45" />
  <img
  src="/assets/Confetti Circle.png"
  alt="Confetti circle"
  className="absolute bottom-[650px] right-[200px] w-6 h-6 md:w-12 md:h-12 object-cover rounded-full shadow-lg rotate-45 z-30"
/>



        {/* New social media section added at the very bottom */}
        <div className="flex flex-col items-center justify-center p-4 mb-8">
          <p className="text-sm md:text-xl text-gray-500 mb-4 md:mb-6 text-center">
            The market that works for you and not <br />
            the other way around.
          </p>
          <div className="flex space-x-4 md:space-x-6 items-center">
            {/* LinkedIn Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-green-700 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.762s.784-1.762 1.75-1.762 1.75.79 1.75 1.762-.783 1.762-1.75 1.762zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            {/* WhatsApp Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-green-700 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2.03c-5.527 0-9.999 4.472-9.999 9.999 0 1.792.496 3.454 1.354 4.908l-1.391 5.084 5.207-1.377c1.41.776 3.011 1.229 4.829 1.229h.005c5.526 0 10.001-4.471 10.001-9.999s-4.475-10.001-10.001-10.001zm0 18.232c-1.536 0-3.076-.445-4.409-1.294l-3.21.846.95-.3.155.009-.005.008-.005c-1.332-1.378-2.091-3.219-2.091-5.183 0-4.604 3.743-8.344 8.349-8.344s8.349 3.74 8.349 8.344c.001 4.605-3.743 8.349-8.349 8.349zm3.565-5.698c-.201-.1-.734-.366-.848-.407-.115-.042-.198-.057-.282.057-.084.114-.325.407-.398.49-.074.084-.148.099-.272.042-.125-.057-.527-.197-1.002-.62-.375-.333-.627-.745-.701-.86-.075-.114-.008-.175.066-.248.067-.067.149-.165.223-.248.075-.084.1-.143.149-.236.05-.093.025-.175-.012-.249-.036-.074-.329-.789-.452-1.071-.125-.282-.25-.236-.344-.236-.094 0-.201-.015-.308-.015-.107 0-.282.042-.43.21-.148.167-.566.557-.566 1.359 0 .802.58 1.574.664 1.689.083.114 1.144 1.745 2.766 2.457.408.179.725.269.967.359.349.129.67.108.924.066.273-.042.734-.3.848-.659.115-.365.115-.678.084-.734-.03-.057-.114-.084-.249-.142z" /></svg>
            {/* Instagram Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-green-700 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.385.9.425.425.684.823.9 1.385.166.422.36 1.057.413 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.247 1.805-.413 2.227-.217.562-.477.96-.9 1.385-.425.425-.823.684-1.385.9-.422.166-1.057.36-2.227.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.805-.247-2.227-.413-.562-.217-.96-.477-1.385-.9-.425-.425-.684-.823-.9-1.385-.166-.422-.36-1.057-.413-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.247-1.805.413-2.227.217-.562.477-.96.9-1.385.425-.425.823-.684 1.385-.9.422-.166 1.057-.36 2.227-.413 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.268 0-3.67.013-4.949.072-1.303.061-2.216.291-3.003.606-.795.319-1.44.755-2.088 1.403-.648.648-1.083 1.293-1.403 2.088-.315.787-.545 1.699-.606 3.003-.059 1.279-.072 1.681-.072 4.949s.013 3.67.072 4.949c.061 1.303.291 2.216.606 3.003.319.795.755 1.44 1.403 2.088.648.648 1.293 1.083 2.088 1.403.787.315 1.699.545 3.003.606 1.279.059 1.681.072 4.949.072s3.67-.013 4.949-.072c1.303-.061 2.216-.291 3.003-.606.795-.319 1.44-.755 2.088-1.403.648-.648 1.293-1.083 1.403-2.088.315-.787.545-1.699.606-3.003.059-1.279.072-1.681.072-4.949s-.013-3.67-.072-4.949c-.061-1.303-.291-2.216-.606-3.003-.319-.795-.755-1.44-1.403-2.088-.648-.648-1.293-1.083-2.088-1.403-.787-.315-1.699-.545-3.003-.606-1.279-.059-1.681-.072-4.949-.072zm0 5.867c-3.142 0-5.704 2.562-5.704 5.704s2.562 5.704 5.704 5.704 5.704-2.562 5.704-5.704c0-3.142-2.562-5.704-5.704-5.704zm0 9.22c-1.932 0-3.516-1.584-3.516-3.516s1.584-3.516 3.516-3.516 3.516 1.584 3.516 3.516-1.584 3.516-3.516 3.516zm6.301-11.234c0 .88-.714 1.594-1.594 1.594s-1.594-.714-1.594-1.594c0-.88.714-1.594 1.594-1.594s1.594.714 1.594 1.594z" /></svg>
            {/* Twitter Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-green-700 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.179-1.556-3.593-1.556-3.584 0-6.494 2.911-6.494 6.492 0 .509.058 1.002.167 1.474-5.399-.271-10.198-2.868-13.407-6.804-.561.968-.888 2.086-.888 3.284 0 2.262 1.152 4.254 2.908 5.424-.538-.016-1.04-.165-1.48-.407v.081c0 3.153 2.24 5.786 5.213 6.398-.546.149-1.127.23-1.727.23-.424 0-.834-.041-1.23-.116.829 2.583 3.235 4.475 6.094 4.527-2.224 1.748-5.041 2.793-8.093 2.793-.526 0-1.04-.03-1.547-.091 2.87 1.834 6.257 2.908 9.943 2.908 11.93 0 18.455-9.882 18.455-18.455 0-.281-.008-.562-.02-.843.91-1.042 1.7-2.353 2.324-3.832z" /></svg>
            {/* TikTok Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-600 hover:text-green-700 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.003 14.954h-1.996c-.552 0-1-.447-1-1v-2.148c0-.553.448-1 1-1h2c.552 0 1 .447 1 1v2.148c0 .553-.448 1-1 1zm8.003 0h-1.996c-.552 0-1-.447-1-1v-2.148c0-.553.448-1 1-1h2c.552 0 1 .447 1 1v2.148c0 .553-.448 1-1 1zm-4.004-1.954h-1.996c-.552 0-1-.447-1-1v-2.148c0-.553.448-1 1-1h2c.552 0 1 .447 1 1v2.148c0 .553-.448 1-1 1z" /></svg>
          </div>
          <div className="text-xs md:text-sm mt-2 text-gray-500 flex items-center space-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.154c-5.602 0-10.154-4.552-10.154-10.154S6.398 1.846 12 1.846 22.154 6.398 22.154 12 17.602 22.154 12 22.154zm0-15.076c-2.713 0-4.923 2.21-4.923 4.923s2.21 4.923 4.923 4.923c1.506 0 2.856-.693 3.748-1.77l-1.238-1.005c-.54.662-1.34 1.078-2.51 1.078-1.675 0-3.038-1.363-3.038-3.038s1.363-3.038 3.038-3.038c1.07 0 1.97.46 2.51 1.078l1.238-1.005c-.892-1.077-2.242-1.77-3.748-1.77z" />
    </svg>
    <span>All rights reserved, Bidoro, Inc</span>
  </div>
        </div>

        </div>

        
      </div>
    </div>
  )
}

// Default export to be used in pages.
export default function App() {
  return (
    <PageLayout>
      <HomeContent />
    </PageLayout>
  )
}

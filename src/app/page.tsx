'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          referralSource: 'landing_page'
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      // Show success message
      setSuccess(true)
      setEmail('')
      setName('')
      
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Success state
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-8">
        <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-green-600 text-3xl">✓</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            You're In!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Thanks for joining the Bidoro waitlist. We'll notify you as soon as we launch.
          </p>
          
          <div className="space-y-4 mb-6">
            <p className="text-sm text-gray-500">What's next?</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>📧 Check your email for confirmation</li>
              <li>🚀 Get early access when we launch</li>
              <li>💰 Exclusive launch discounts</li>
            </ul>
          </div>

          <button
            onClick={() => setSuccess(false)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    )
  }

  // Main waitlist page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-blue-600">BIDORO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The future of online marketplace is coming. 
              Be the first to know when we launch.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Fast & Secure</h3>
                <p className="text-gray-600 text-sm">Lightning-fast transactions with bank-level security</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">💎</span>
                </div>
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Curated products from verified sellers only</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🌟</span>
                </div>
                <h3 className="font-semibold mb-2">Best Experience</h3>
                <p className="text-gray-600 text-sm">Intuitive interface designed for modern users</p>
              </div>
            </div>
          </div>

          {/* Waitlist Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 mb-8">
              Get early access and exclusive updates. No spam, ever.
            </p>
            
            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </span>
                  ) : 'Join Waitlist'}
                </button>
              </div>
            </form>
            
            <p className="text-sm text-gray-500 mt-6">
              By joining, you agree to receive updates about Bidoro. 
              Unsubscribe anytime.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Trusted by innovators at</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-bold text-gray-400">TechCorp</div>
              <div className="text-lg font-bold text-gray-400">InnovateLab</div>
              <div className="text-lg font-bold text-gray-400">FutureSync</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
        <p>&copy; 2025 Bidoro. All rights reserved.</p>
      </footer>
    </div>
  )
}
import React from 'react';
import Link from 'next/link';

export default function BrowseStores() {
  const stores = [
    { id: 1, name: 'Artisan Crafts', description: 'Handmade goods from local artisans.' },
    { id: 2, name: 'Vintage Finds', description: 'Curated collection of unique vintage items.' },
    { id: 3, name: 'Electronic Hub', description: 'Latest gadgets and refurbished electronics.' },
    { id: 4, name: 'Organic Foods Co.', description: 'Fresh, locally sourced produce and groceries.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Browse Stores</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover unique shops and trusted sellers in your community.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stores.map(store => (
            <div key={store.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">{store.name}</h3>
              <p className="text-gray-600 text-sm">{store.description}</p>
              <Link href={`/stores/${store.id}`} className="mt-4 inline-block text-green-700 hover:underline transition">
                View Store →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
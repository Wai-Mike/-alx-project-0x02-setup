import React from 'react';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Next.js Project
          </h1>
          <p className="text-xl text-gray-600">
            This is a comprehensive introduction to Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </main>
    </div>
  );
}


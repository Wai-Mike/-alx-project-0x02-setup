import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Page</h1>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button size="small" shape="rounded-sm">
              Small Button
            </Button>
            <Button size="medium" shape="rounded-md">
              Medium Button
            </Button>
            <Button size="large" shape="rounded-full">
              Large Button
            </Button>
          </div>

          <div className="mt-8">
            <p className="text-gray-600 mb-4">
              This page demonstrates the Button component with different sizes and shapes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="small" shape="rounded-sm">Small Rounded-Sm</Button>
              <Button size="small" shape="rounded-md">Small Rounded-Md</Button>
              <Button size="small" shape="rounded-full">Small Rounded-Full</Button>
              <Button size="medium" shape="rounded-sm">Medium Rounded-Sm</Button>
              <Button size="medium" shape="rounded-md">Medium Rounded-Md</Button>
              <Button size="medium" shape="rounded-full">Medium Rounded-Full</Button>
              <Button size="large" shape="rounded-sm">Large Rounded-Sm</Button>
              <Button size="large" shape="rounded-md">Large Rounded-Md</Button>
              <Button size="large" shape="rounded-full">Large Rounded-Full</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


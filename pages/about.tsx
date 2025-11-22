import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Next.js Project</title>
      </Head>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        
        <div className="space-y-4 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Small Buttons</h2>
            <div className="flex space-x-3">
              <Button size="small" shape="rounded-sm">Small Rounded-Sm</Button>
              <Button size="small" shape="rounded-md">Small Rounded-Md</Button>
              <Button size="small" shape="rounded-full">Small Rounded-Full</Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Medium Buttons</h2>
            <div className="flex space-x-3">
              <Button size="medium" shape="rounded-sm">Medium Rounded-Sm</Button>
              <Button size="medium" shape="rounded-md">Medium Rounded-Md</Button>
              <Button size="medium" shape="rounded-full">Medium Rounded-Full</Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Large Buttons</h2>
            <div className="flex space-x-3">
              <Button size="large" shape="rounded-sm">Large Rounded-Sm</Button>
              <Button size="large" shape="rounded-md">Large Rounded-Md</Button>
              <Button size="large" shape="rounded-full">Large Rounded-Full</Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-700">
            This page demonstrates the Button component with different sizes and shapes.
            All buttons are reusable and customizable through props.
          </p>
        </div>
      </div>
    </>
  );
}


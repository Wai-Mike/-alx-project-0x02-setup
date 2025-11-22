import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Next.js Project</title>
        <meta name="description" content="Next.js Project Setup and Basics" />
      </Head>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Next.js Project
          </h1>
          <p className="text-lg text-gray-600">
            This is a comprehensive introduction to Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
}


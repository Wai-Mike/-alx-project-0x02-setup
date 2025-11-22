import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/home" className="hover:text-blue-200 transition-colors">
            Home Page
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link href="/posts" className="hover:text-blue-200 transition-colors">
            Posts
          </Link>
          <Link href="/users" className="hover:text-blue-200 transition-colors">
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;


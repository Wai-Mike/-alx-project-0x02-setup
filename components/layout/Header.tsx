import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex space-x-6">
          <Link href="/home" className="text-blue-600 hover:text-blue-800 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
            About
          </Link>
          <Link href="/posts" className="text-blue-600 hover:text-blue-800 font-medium">
            Posts
          </Link>
          <Link href="/users" className="text-blue-600 hover:text-blue-800 font-medium">
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
}


import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page</h1>
        
        <div className="mb-6">
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Create New Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="Sample Card 1"
            content="This is a sample card component demonstrating reusable components in Next.js."
          />
          <Card
            title="Sample Card 2"
            content="Cards can be used throughout the application with different content."
          />
        </div>

        {posts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Posts</h2>
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>
        )}

        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitPost}
        />
      </main>
    </div>
  );
}


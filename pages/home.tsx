import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import Button from '../components/common/Button';

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home - Next.js Project</title>
      </Head>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>
        
        <div className="mb-6">
          <Button onClick={handleOpenModal}>Add New Post</Button>
        </div>

        <div className="mb-6">
          <Card 
            title="Welcome to the Home Page" 
            content="This is a sample card component demonstrating reusable components in Next.js."
          />
          <Card 
            title="Another Card Example" 
            content="You can use the Card component multiple times with different content."
          />
        </div>

        {posts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>
        )}

        <PostModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}


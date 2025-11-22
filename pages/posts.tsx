import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        // Limit to first 10 posts for better display
        setPosts(data.slice(0, 10));
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts - Next.js Project</title>
      </Head>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>
        
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <div>
            {posts.length > 0 ? (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  userId={post.userId}
                />
              ))
            ) : (
              <p className="text-gray-600">No posts available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}


import { PostProps } from '../../interfaces';

export default function PostCard({ title, content, body, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{content || body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}


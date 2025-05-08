import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import DiscussionCard from '@/app/components/community/DiscussionCard';
import { Plus, Search } from 'lucide-react';
import Link from 'next/link';

// Mock data
const mockDiscussions = [
  {
    id: '1',
    userId: '1',
    title: 'Best practices for React hooks',
    content: 'I\'ve been working with React hooks and would love to hear about best practices and common pitfalls to avoid.',
    tags: ['React', 'JavaScript', 'Hooks'],
    likes: 15,
    replies: 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    userId: '2',
    title: 'TypeScript vs JavaScript - When to use what?',
    content: 'Looking for insights on when to choose TypeScript over JavaScript for new projects.',
    tags: ['TypeScript', 'JavaScript', 'Web Development'],
    likes: 32,
    replies: 45,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    userId: '3',
    title: 'Next.js 13 App Router Experiences',
    content: 'Share your experiences with the new Next.js 13 app router. What are the pros and cons?',
    tags: ['Next.js', 'React', 'Web Development'],
    likes: 28,
    replies: 34,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export default async function DiscussionsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  const popularTags = [
    'JavaScript',
    'React',
    'Next.js',
    'Python',
    'Node.js',
    'TypeScript'
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Discussions</h1>
          <p className="text-gray-600 mt-2">
            Join conversations, ask questions, and share your knowledge.
          </p>
        </div>
        <Link
          href="/community/discussions/create"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Start Discussion
        </Link>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Discussion List */}
          <div className="space-y-4">
            {mockDiscussions.map((discussion) => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))}
          </div>

          {mockDiscussions.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No discussions yet
              </h3>
              <p className="text-gray-600">
                Start a conversation and get the community talking!
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-80">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

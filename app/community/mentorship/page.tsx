import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import MentorshipCard from '@/app/components/community/MentorshipCard';
import { Plus, Search, Filter } from 'lucide-react';
import Link from 'next/link';

// Mock data
const mockMentorshipRequests = [
  {
    id: '1',
    menteeId: '1',
    mentorId: null,
    topic: 'React and Next.js Development',
    description: 'Looking for guidance in building scalable React applications with Next.js.',
    status: 'open',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    menteeId: '2',
    mentorId: null,
    topic: 'DevOps and Cloud Architecture',
    description: 'Need mentorship in AWS, Docker, and CI/CD pipelines.',
    status: 'open',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    menteeId: '3',
    mentorId: null,
    topic: 'Data Structures and Algorithms',
    description: 'Seeking help with advanced algorithms and interview preparation.',
    status: 'open',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export default async function MentorshipPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  const topics = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'DevOps',
    'UI/UX Design',
    'Machine Learning'
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find a Mentor</h1>
          <p className="text-gray-600 mt-2">
            Connect with experienced developers who can guide you on your journey.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/community/mentorship/become-mentor"
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            Become a Mentor
          </Link>
          <Link
            href="/community/mentorship/request"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Request Mentor
          </Link>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search mentorship requests..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>

          {/* Mentorship Requests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockMentorshipRequests.map((request) => (
              <MentorshipCard key={request.id} request={request} />
            ))}
          </div>

          {mockMentorshipRequests.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No mentorship requests
              </h3>
              <p className="text-gray-600">
                Be the first to request mentorship from our community!
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-80 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Why Become a Mentor?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Share your knowledge and experience</li>
              <li>• Help others grow in their career</li>
              <li>• Build your professional network</li>
              <li>• Strengthen your own skills</li>
              <li>• Make a positive impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

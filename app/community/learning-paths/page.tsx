import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import LearningPathCard from '@/app/components/community/LearningPathCard';
import { Plus } from 'lucide-react';
import Link from 'next/link';

// Mock data
const mockLearningPaths = [
  {
    id: '1',
    userId: '1',
    title: 'Full Stack Development with Next.js',
    description: 'A comprehensive path to learn full-stack development using Next.js, Prisma, and PostgreSQL.',
    technologies: ['Next.js', 'React', 'Prisma', 'PostgreSQL'],
    progress: 75,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    userId: '2',
    title: 'Machine Learning Fundamentals',
    description: 'Learn the basics of machine learning with Python and popular ML libraries.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    progress: 45,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    userId: '3',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile apps using React Native and Expo.',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    progress: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export default async function LearningPathsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Learning Paths</h1>
          <p className="text-gray-600 mt-2">
            Share your learning journey and discover paths from other developers.
          </p>
        </div>
        <Link
          href="/community/learning-paths/create"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Path
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockLearningPaths.map((path) => (
          <LearningPathCard key={path.id} path={path} />
        ))}
      </div>

      {mockLearningPaths.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No learning paths yet
          </h3>
          <p className="text-gray-600">
            Be the first to share your learning journey!
          </p>
        </div>
      )}
    </div>
  );
}

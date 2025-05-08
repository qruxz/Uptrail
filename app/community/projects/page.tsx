import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ProjectCard from '@/app/components/community/ProjectCard';
import { Plus, Search, Filter } from 'lucide-react';
import Link from 'next/link';

// Mock data
const mockProjects = [
  {
    id: '1',
    userId: '1',
    title: 'AI-Powered Code Assistant',
    description: 'A VS Code extension that helps developers write better code using AI.',
    technologies: ['TypeScript', 'Node.js', 'OpenAI'],
    githubUrl: 'https://github.com/user/ai-code-assistant',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=ai-code-assistant',
    imageUrl: '/projects/ai-assistant.png',
    likes: 45,
    comments: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    userId: '2',
    title: 'Real-time Chat Application',
    description: 'A modern chat app built with Next.js and WebSocket for real-time communication.',
    technologies: ['Next.js', 'WebSocket', 'TailwindCSS'],
    githubUrl: 'https://github.com/user/chat-app',
    liveUrl: 'https://chat-app-demo.vercel.app',
    imageUrl: '/projects/chat-app.png',
    likes: 32,
    comments: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    userId: '3',
    title: 'Personal Finance Tracker',
    description: 'Track your expenses and investments with this easy-to-use finance app.',
    technologies: ['React', 'Firebase', 'ChartJS'],
    githubUrl: 'https://github.com/user/finance-tracker',
    liveUrl: 'https://finance-tracker-demo.vercel.app',
    imageUrl: '/projects/finance-tracker.png',
    likes: 28,
    comments: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'TailwindCSS'
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Showcase</h1>
          <p className="text-gray-600 mt-2">
            Share your projects and discover amazing work from the community.
          </p>
        </div>
        <Link
          href="/community/projects/create"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Project
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {technologies.map((tech) => (
            <button
              key={tech}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md whitespace-nowrap hover:bg-gray-200 transition-colors"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {mockProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No projects yet
          </h3>
          <p className="text-gray-600">
            Be the first to showcase your amazing work!
          </p>
        </div>
      )}

      {/* Load More Button */}
      {mockProjects.length >= 9 && (
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

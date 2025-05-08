import { LearningPath } from '@/types/community';
import { CalendarDays, Code2, BarChart } from 'lucide-react';

interface LearningPathCardProps {
  path: LearningPath;
}

export default function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{path.title}</h3>
        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {path.progress}% Complete
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{path.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {path.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <span>{new Date(path.createdAt).toLocaleDateString()}</span>
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}

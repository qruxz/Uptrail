import { MentorshipRequest } from '@/types/community';
import { Users, Calendar, Tag } from 'lucide-react';

interface MentorshipCardProps {
  request: MentorshipRequest;
}

export default function MentorshipCard({ request }: MentorshipCardProps) {
  const statusColors = {
    open: 'bg-green-100 text-green-800',
    matched: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{request.topic}</h3>
        <span className={`${statusColors[request.status]} text-xs font-medium px-2.5 py-0.5 rounded capitalize`}>
          {request.status}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{request.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(request.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      
      {request.status === 'open' && (
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Apply as Mentor
        </button>
      )}
    </div>
  );
}

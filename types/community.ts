export interface LearningPath {
  id: string;
  userId: string;
  title: string;
  description: string;
  technologies: string[];
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Discussion {
  id: string;
  userId: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  replies: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  userId: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MentorshipRequest {
  id: string;
  menteeId: string;
  mentorId?: string;
  topic: string;
  description: string;
  status: 'open' | 'matched' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  skills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  isMentor: boolean;
  mentorTopics?: string[];
}

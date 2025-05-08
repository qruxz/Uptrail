import type { ProjectIdea } from './sections';

export const frontendProjectIdeas: ProjectIdea[] = [
  {
    title: 'Task Management Dashboard',
    description: 'Build a Trello-like task management app with drag and drop functionality, real-time updates, and team collaboration features.',
    iconName: 'ClipboardDocumentListIcon',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks',
    topics: ['React', 'DnD', 'State Management', 'REST API'],
    features: [
      'Drag and drop task management',
      'Real-time updates',
      'Team collaboration',
      'Task filtering and search',
      'Due date reminders'
    ],
    path: '/roadmaps/frontend/projects/task-dashboard',
    isNew: true
  },
  {
    title: 'Real-time Chat Application',
    description: 'Create a modern chat app with real-time messaging, file sharing, and group chat capabilities.',
    iconName: 'ChatBubbleLeftRightIcon',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks',
    topics: ['WebSocket', 'Authentication', 'UI Design', 'State Management'],
    features: [
      'Real-time messaging',
      'File sharing',
      'Group chats',
      'Message search',
      'Online status indicators'
    ],
    path: '/roadmaps/frontend/projects/chat-app'
  },
  {
    title: 'Portfolio Website',
    description: 'Design and build a personal portfolio website with animations and dark mode support.',
    iconName: 'UserCircleIcon',
    difficulty: 'Beginner',
    estimatedTime: '1-2 weeks',
    topics: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Responsive design',
      'Dark/Light mode',
      'Project showcase',
      'Contact form',
      'Smooth animations'
    ],
    path: '/roadmaps/frontend/projects/portfolio'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Build a comprehensive e-commerce admin dashboard with analytics, order management, and inventory tracking.',
    iconName: 'ShoppingBagIcon',
    difficulty: 'Advanced',
    estimatedTime: '4-6 weeks',
    topics: ['React', 'Data Visualization', 'State Management', 'API Integration'],
    features: [
      'Sales analytics',
      'Order management',
      'Inventory tracking',
      'Customer insights',
      'Product management'
    ],
    path: '/roadmaps/frontend/projects/ecommerce-dashboard',
    isNew: true
  },
  {
    title: 'Social Media Feed',
    description: 'Create a social media feed with infinite scroll, post creation, and engagement features.',
    iconName: 'HashtagIcon',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks',
    topics: ['React', 'Infinite Scroll', 'REST API', 'State Management'],
    features: [
      'Infinite scroll feed',
      'Post creation',
      'Like and comment system',
      'User profiles',
      'Image uploads'
    ],
    path: '/roadmaps/frontend/projects/social-feed'
  },
  {
    title: 'Weather Dashboard',
    description: 'Build a weather dashboard with location-based forecasts, maps, and weather alerts.',
    iconName: 'CloudIcon',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks',
    topics: ['API Integration', 'Data Visualization', 'Geolocation', 'Maps'],
    features: [
      'Location-based weather',
      'Interactive maps',
      'Weather alerts',
      '7-day forecast',
      'Weather history'
    ],
    path: '/roadmaps/frontend/projects/weather-dashboard',
    isNew: true
  },
  {
    title: 'Recipe Finder App',
    description: 'Create a recipe finder app with search, filtering, and meal planning features.',
    iconName: 'CakeIcon',
    difficulty: 'Beginner',
    estimatedTime: '1-2 weeks',
    topics: ['API Integration', 'Search/Filter', 'UI Design', 'Local Storage'],
    features: [
      'Recipe search',
      'Dietary filters',
      'Meal planning',
      'Shopping lists',
      'Favorite recipes'
    ],
    path: '/roadmaps/frontend/projects/recipe-finder'
  },
  {
    title: 'Code Editor',
    description: 'Build a web-based code editor with syntax highlighting and live preview.',
    iconName: 'CodeBracketIcon',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks',
    topics: ['Monaco Editor', 'WebWorkers', 'File System API', 'State Management'],
    features: [
      'Syntax highlighting',
      'Live preview',
      'File management',
      'Multiple themes',
      'Code formatting'
    ],
    path: '/roadmaps/frontend/projects/code-editor',
    isNew: true
  },
  {
    title: 'Fitness Tracker',
    description: 'Develop a fitness tracking app with workout logging and progress visualization.',
    iconName: 'ChartBarIcon',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks',
    topics: ['Data Visualization', 'LocalStorage', 'PWA', 'UI Design'],
    features: [
      'Workout logging',
      'Progress charts',
      'Goal setting',
      'Exercise library',
      'Workout plans'
    ],
    path: '/roadmaps/frontend/projects/fitness-tracker'
  }
];

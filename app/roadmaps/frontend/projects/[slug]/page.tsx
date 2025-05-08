'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as HeroIcons from '@heroicons/react/24/outline';
import { frontendProjectIdeas } from '@/app/roadmaps/data/projectIdeas';
import type { ProjectIdea } from '@/app/roadmaps/data/sections';

interface Step {
  title: string;
  description: string;
  tasks: string[];
  resources: Array<{
    title: string;
    url: string;
    type: 'documentation' | 'tutorial' | 'video' | 'article';
  }>;
}

interface ProjectDetails {
  overview: string;
  prerequisites: string[];
  learningOutcomes: string[];
  steps: Step[];
  tips: string[];
  extensions: string[];
}

const projectDetails: Record<string, ProjectDetails> = {
  'task-dashboard': {
    overview: 'Build a modern task management dashboard inspired by Trello and Jira. This project will teach you essential concepts in frontend development, including drag-and-drop functionality, state management, and real-time updates.',
    prerequisites: [
      'Basic understanding of React and TypeScript',
      'Familiarity with modern CSS and Tailwind',
      'Knowledge of state management concepts',
      'Understanding of REST APIs'
    ],
    learningOutcomes: [
      'Master drag-and-drop implementation in React',
      'Learn advanced state management patterns',
      'Implement real-time updates with WebSocket',
      'Build responsive and accessible UI components',
      'Practice TypeScript with React'
    ],
    steps: [
      {
        title: 'Project Setup and Basic Structure',
        description: 'Set up the project with Next.js, TypeScript, and essential dependencies.',
        tasks: [
          'Initialize Next.js project with TypeScript',
          'Set up Tailwind CSS and required dependencies',
          'Create basic project structure and components',
          'Implement basic routing'
        ],
        resources: [
          {
            title: 'Next.js Documentation',
            url: 'https://nextjs.org/docs',
            type: 'documentation'
          },
          {
            title: 'Setting up Tailwind CSS',
            url: 'https://tailwindcss.com/docs/guides/nextjs',
            type: 'documentation'
          }
        ]
      },
      {
        title: 'Authentication and User Management',
        description: 'Implement user authentication and profile management.',
        tasks: [
          'Set up authentication with NextAuth.js',
          'Create login and signup pages',
          'Implement user profile management',
          'Add protected routes'
        ],
        resources: [
          {
            title: 'NextAuth.js Documentation',
            url: 'https://next-auth.js.org/',
            type: 'documentation'
          },
          {
            title: 'Authentication in Next.js',
            url: 'https://www.youtube.com/watch?v=w2h54xz6Ndw',
            type: 'video'
          }
        ]
      },
      {
        title: 'Task Board Implementation',
        description: 'Create the main task board with drag-and-drop functionality.',
        tasks: [
          'Set up react-beautiful-dnd',
          'Create board, list, and card components',
          'Implement drag-and-drop between lists',
          'Add card creation and editing'
        ],
        resources: [
          {
            title: 'react-beautiful-dnd Tutorial',
            url: 'https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd',
            type: 'tutorial'
          }
        ]
      },
      {
        title: 'Real-time Updates',
        description: 'Add real-time functionality using WebSocket.',
        tasks: [
          'Set up WebSocket connection',
          'Implement real-time board updates',
          'Add collaborative features',
          'Handle offline state'
        ],
        resources: [
          {
            title: 'WebSocket with Next.js',
            url: 'https://socket.io/docs/v4/',
            type: 'documentation'
          }
        ]
      }
    ],
    tips: [
      'Use TypeScript interfaces for better type safety',
      'Implement proper error handling for API calls',
      'Focus on accessibility features',
      'Use proper state management patterns',
      'Write unit tests for critical components'
    ],
    extensions: [
      'Add file attachments to cards',
      'Implement board templates',
      'Add activity log and notifications',
      'Create board sharing functionality',
      'Add data export features'
    ]
  },
  'chat-app': {
    overview: 'Create a modern real-time chat application with features like instant messaging, file sharing, and group chats. This project will help you master real-time communication, state management, and modern UI design.',
    prerequisites: [
      'Understanding of React and TypeScript',
      'Knowledge of WebSocket concepts',
      'Basic understanding of authentication',
      'Experience with UI component libraries'
    ],
    learningOutcomes: [
      'Implement real-time communication with WebSocket',
      'Build complex UI layouts with modern CSS',
      'Handle real-time state updates efficiently',
      'Implement secure user authentication',
      'Create responsive and accessible chat interfaces'
    ],
    steps: [
      {
        title: 'Project Setup and UI Framework',
        description: 'Set up the project and implement the basic UI structure.',
        tasks: [
          'Initialize Next.js with TypeScript',
          'Set up UI component library (e.g., Shadcn UI)',
          'Create chat layout components',
          'Implement responsive design'
        ],
        resources: [
          {
            title: 'Shadcn UI Documentation',
            url: 'https://ui.shadcn.com/',
            type: 'documentation'
          },
          {
            title: 'Modern CSS Layout',
            url: 'https://css-tricks.com/modern-css-layouts/',
            type: 'article'
          }
        ]
      },
      {
        title: 'Authentication System',
        description: 'Implement secure user authentication and profile management.',
        tasks: [
          'Set up NextAuth.js with providers',
          'Create login and registration flows',
          'Implement user profiles',
          'Add avatar upload functionality'
        ],
        resources: [
          {
            title: 'NextAuth.js Guide',
            url: 'https://next-auth.js.org/getting-started/introduction',
            type: 'documentation'
          },
          {
            title: 'File Upload in Next.js',
            url: 'https://www.youtube.com/watch?v=YPH_WdL4wm4',
            type: 'video'
          }
        ]
      },
      {
        title: 'Real-time Chat Implementation',
        description: 'Build the core chat functionality with WebSocket.',
        tasks: [
          'Set up Socket.io with Next.js',
          'Implement message sending and receiving',
          'Add typing indicators',
          'Handle message history'
        ],
        resources: [
          {
            title: 'Socket.io Documentation',
            url: 'https://socket.io/docs/v4/',
            type: 'documentation'
          },
          {
            title: 'Real-time Chat Tutorial',
            url: 'https://www.youtube.com/watch?v=ZKEqqIO7n-k',
            type: 'video'
          }
        ]
      },
      {
        title: 'Advanced Features',
        description: 'Add advanced chat features and polish the application.',
        tasks: [
          'Implement file sharing',
          'Add group chat functionality',
          'Create message search',
          'Add read receipts'
        ],
        resources: [
          {
            title: 'File Upload with Socket.io',
            url: 'https://socket.io/docs/v4/uploading-binary-data/',
            type: 'documentation'
          }
        ]
      }
    ],
    tips: [
      'Use WebSocket for real-time features',
      'Implement proper error handling',
      'Cache messages for better performance',
      'Use optimistic updates for better UX',
      'Handle offline state gracefully'
    ],
    extensions: [
      'Add voice and video calls',
      'Implement message reactions',
      'Add message threading',
      'Create chat bots',
      'Add end-to-end encryption'
    ]
  },
  'portfolio': {
    overview: 'Create a modern and professional portfolio website to showcase your work and skills. This project will teach you essential web development concepts, including responsive design, animations, and modern CSS techniques.',
    prerequisites: [
      'Basic HTML and CSS knowledge',
      'Understanding of JavaScript fundamentals',
      'Familiarity with React basics',
      'Basic command of Git'
    ],
    learningOutcomes: [
      'Master responsive design techniques',
      'Learn modern CSS animations',
      'Implement SEO best practices',
      'Create accessible web components',
      'Build performant web applications'
    ],
    steps: [
      {
        title: 'Project Setup and Design',
        description: 'Set up the project and create the initial design.',
        tasks: [
          'Initialize Next.js project',
          'Set up Tailwind CSS and animations',
          'Create design mockups',
          'Plan content structure'
        ],
        resources: [
          {
            title: 'Next.js 13 Portfolio Tutorial',
            url: 'https://www.youtube.com/watch?v=bSMZgXzC9AA',
            type: 'video'
          },
          {
            title: 'Modern CSS Techniques',
            url: 'https://css-tricks.com/modern-css-techniques-to-know/',
            type: 'article'
          }
        ]
      },
      {
        title: 'Hero and Navigation',
        description: 'Create an engaging hero section and responsive navigation.',
        tasks: [
          'Build responsive navigation',
          'Create animated hero section',
          'Add smooth scrolling',
          'Implement dark mode'
        ],
        resources: [
          {
            title: 'Framer Motion Animations',
            url: 'https://www.framer.com/motion/',
            type: 'documentation'
          },
          {
            title: 'Dark Mode in Next.js',
            url: 'https://www.youtube.com/watch?v=3VKMTVHfnfA',
            type: 'video'
          }
        ]
      },
      {
        title: 'Projects Section',
        description: 'Showcase your projects with filtering and animations.',
        tasks: [
          'Create project cards',
          'Add filtering functionality',
          'Implement smooth transitions',
          'Add project details modal'
        ],
        resources: [
          {
            title: 'CSS Grid Tutorial',
            url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            type: 'article'
          }
        ]
      },
      {
        title: 'Contact and Deployment',
        description: 'Add contact form and deploy the website.',
        tasks: [
          'Create contact form',
          'Add form validation',
          'Implement email service',
          'Deploy to Vercel'
        ],
        resources: [
          {
            title: 'Form Validation with React Hook Form',
            url: 'https://react-hook-form.com/',
            type: 'documentation'
          }
        ]
      }
    ],
    tips: [
      'Focus on performance optimization',
      'Use semantic HTML for better SEO',
      'Implement proper meta tags',
      'Optimize images and assets',
      'Add proper analytics'
    ],
    extensions: [
      'Add blog section',
      'Implement CMS integration',
      'Add multilingual support',
      'Create RSS feed',
      'Add case studies section'
    ]
  },
  'ecommerce-dashboard': {
    overview: 'Build a comprehensive e-commerce admin dashboard with analytics, order management, and inventory tracking. This project will teach you advanced state management, data visualization, and complex UI patterns.',
    prerequisites: [
      'Strong understanding of React and TypeScript',
      'Experience with state management libraries',
      'Knowledge of data visualization',
      'Understanding of REST APIs'
    ],
    learningOutcomes: [
      'Master complex state management',
      'Create interactive data visualizations',
      'Build advanced table components',
      'Implement complex filtering and sorting',
      'Handle real-time data updates'
    ],
    steps: [
      {
        title: 'Project Setup and Architecture',
        description: 'Set up the project and establish the core architecture.',
        tasks: [
          'Initialize Next.js with TypeScript',
          'Set up state management (Redux Toolkit)',
          'Create project structure',
          'Set up API client'
        ],
        resources: [
          {
            title: 'Redux Toolkit Documentation',
            url: 'https://redux-toolkit.js.org/',
            type: 'documentation'
          },
          {
            title: 'Clean Architecture in React',
            url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
            type: 'article'
          }
        ]
      },
      {
        title: 'Dashboard Analytics',
        description: 'Implement the analytics dashboard with charts and metrics.',
        tasks: [
          'Set up Recharts or Chart.js',
          'Create sales analytics',
          'Add revenue metrics',
          'Implement date filtering'
        ],
        resources: [
          {
            title: 'Recharts Documentation',
            url: 'https://recharts.org/',
            type: 'documentation'
          },
          {
            title: 'Data Visualization Best Practices',
            url: 'https://www.youtube.com/watch?v=5KaEKAezV9w',
            type: 'video'
          }
        ]
      },
      {
        title: 'Order Management',
        description: 'Create the order management system with filtering and actions.',
        tasks: [
          'Build advanced table component',
          'Add sorting and filtering',
          'Implement order actions',
          'Create order details view'
        ],
        resources: [
          {
            title: 'TanStack Table Documentation',
            url: 'https://tanstack.com/table/v8',
            type: 'documentation'
          }
        ]
      },
      {
        title: 'Inventory System',
        description: 'Implement inventory tracking and management.',
        tasks: [
          'Create product catalog',
          'Add stock management',
          'Implement categories',
          'Add bulk actions'
        ],
        resources: [
          {
            title: 'Building a Product Catalog',
            url: 'https://www.smashingmagazine.com/2020/07/react-apps-typescript/',
            type: 'article'
          }
        ]
      }
    ],
    tips: [
      'Use proper state management patterns',
      'Implement error boundaries',
      'Add proper loading states',
      'Use proper TypeScript patterns',
      'Implement proper caching'
    ],
    extensions: [
      'Add customer management',
      'Implement shipping integration',
      'Add marketing tools',
      'Create reporting system',
      'Add multi-vendor support'
    ]
  },
  'weather-dashboard': {
    overview: 'Create a beautiful and functional weather dashboard with location-based forecasts, interactive maps, and weather alerts. This project will teach you API integration, geolocation, and data visualization.',
    prerequisites: [
      'Understanding of React and APIs',
      'Basic knowledge of maps and geolocation',
      'Experience with data visualization',
      'Familiarity with weather APIs'
    ],
    learningOutcomes: [
      'Master API integration',
      'Learn geolocation handling',
      'Create interactive maps',
      'Build weather visualizations',
      'Handle real-time updates'
    ],
    steps: [
      {
        title: 'Project Setup and API Integration',
        description: 'Set up the project and integrate weather APIs.',
        tasks: [
          'Initialize Next.js project',
          'Set up OpenWeatherMap API',
          'Create API services',
          'Handle API errors'
        ],
        resources: [
          {
            title: 'OpenWeatherMap API Docs',
            url: 'https://openweathermap.org/api',
            type: 'documentation'
          },
          {
            title: 'API Integration Best Practices',
            url: 'https://www.youtube.com/watch?v=F7jY_OQy4YY',
            type: 'video'
          }
        ]
      },
      {
        title: 'Location and Maps',
        description: 'Implement location services and interactive maps.',
        tasks: [
          'Add geolocation support',
          'Integrate Google Maps',
          'Create location search',
          'Add map markers'
        ],
        resources: [
          {
            title: 'Google Maps React',
            url: 'https://www.npmjs.com/package/@react-google-maps/api',
            type: 'documentation'
          }
        ]
      },
      {
        title: 'Weather Display',
        description: 'Create weather displays and forecasts.',
        tasks: [
          'Build current weather display',
          'Add 7-day forecast',
          'Create hourly forecast',
          'Add weather animations'
        ],
        resources: [
          {
            title: 'Weather Icons',
            url: 'https://erikflowers.github.io/weather-icons/',
            type: 'documentation'
          }
        ]
      },
      {
        title: 'Advanced Features',
        description: 'Add advanced features and polish the application.',
        tasks: [
          'Implement weather alerts',
          'Add weather history',
          'Create weather maps',
          'Add unit conversion'
        ],
        resources: [
          {
            title: 'Weather Data Visualization',
            url: 'https://www.chartjs.org/docs/latest/',
            type: 'documentation'
          }
        ]
      }
    ],
    tips: [
      'Cache weather data appropriately',
      'Handle API rate limits',
      'Implement proper error handling',
      'Add loading skeletons',
      'Optimize for mobile devices'
    ],
    extensions: [
      'Add weather notifications',
      'Implement severe weather alerts',
      'Add weather widgets',
      'Create weather comparisons',
      'Add climate data analysis'
    ]
  },
  'recipe-finder': {
    overview: 'Build a recipe finder application with search, filtering, and meal planning features. This project will teach you search implementation, filtering, and working with external APIs.',
    prerequisites: [
      'Basic React knowledge',
      'Understanding of API integration',
      'Experience with forms and filters',
      'Basic state management knowledge'
    ],
    learningOutcomes: [
      'Implement advanced search features',
      'Create complex filtering systems',
      'Build responsive layouts',
      'Handle complex form state',
      'Implement data persistence'
    ],
    steps: [
      {
        title: 'Project Setup and API',
        description: 'Set up the project and integrate recipe APIs.',
        tasks: [
          'Initialize Next.js project',
          'Set up Spoonacular API',
          'Create API services',
          'Implement caching'
        ],
        resources: [
          {
            title: 'Spoonacular API Documentation',
            url: 'https://spoonacular.com/food-api/docs',
            type: 'documentation'
          }
        ]
      },
      {
        title: 'Search and Filters',
        description: 'Implement search functionality and filters.',
        tasks: [
          'Create search component',
          'Add dietary filters',
          'Implement cuisine filters',
          'Add ingredient search'
        ],
        resources: [
          {
            title: 'Advanced React Patterns',
            url: 'https://kentcdodds.com/blog/advanced-react-patterns',
            type: 'article'
          }
        ]
      },
      {
        title: 'Recipe Details',
        description: 'Create detailed recipe views and interactions.',
        tasks: [
          'Build recipe cards',
          'Create detailed view',
          'Add nutritional info',
          'Implement favorites'
        ],
        resources: [
          {
            title: 'CSS Grid for Layouts',
            url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            type: 'article'
          }
        ]
      },
      {
        title: 'Meal Planning',
        description: 'Add meal planning functionality.',
        tasks: [
          'Create meal planner',
          'Add shopping lists',
          'Implement calendar',
          'Add portion calculator'
        ],
        resources: [
          {
            title: 'React Calendar Component',
            url: 'https://github.com/wojtekmaj/react-calendar',
            type: 'documentation'
          }
        ]
      }
    ],
    tips: [
      'Implement proper API caching',
      'Add offline support',
      'Use proper form validation',
      'Optimize images',
      'Add proper loading states'
    ],
    extensions: [
      'Add recipe collections',
      'Implement social sharing',
      'Add user reviews',
      'Create meal cost calculator',
      'Add dietary analysis'
    ]
  }
};

function ResourceIcon({ type }: { type: string }) {
  switch (type) {
    case 'documentation':
      return <HeroIcons.BookOpenIcon className="h-5 w-5" />;
    case 'tutorial':
      return <HeroIcons.AcademicCapIcon className="h-5 w-5" />;
    case 'video':
      return <HeroIcons.PlayCircleIcon className="h-5 w-5" />;
    case 'article':
      return <HeroIcons.DocumentTextIcon className="h-5 w-5" />;
    default:
      return <HeroIcons.LinkIcon className="h-5 w-5" />;
  }
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const project = frontendProjectIdeas.find(p => p.path.endsWith(slug));
  const details = projectDetails[slug];

  if (!project || !details) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link 
            href="/roadmaps"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Roadmaps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/roadmaps"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <HeroIcons.ArrowLeftIcon className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-white">{project.title}</h1>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
              project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {project.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
              {project.estimatedTime}
            </span>
            {project.topics.map((topic, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600">{details.overview}</p>
            </motion.section>

            {/* Steps */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900">Implementation Steps</h2>
              <div className="space-y-6">
                {details.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Tasks:</h4>
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li 
                            key={taskIndex}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Resources:</h4>
                      <div className="space-y-2">
                        {step.resources.map((resource, resourceIndex) => (
                          <a
                            key={resourceIndex}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
                          >
                            <ResourceIcon type={resource.type} />
                            <span>{resource.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites</h2>
              <ul className="space-y-2">
                {details.prerequisites.map((prerequisite, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <HeroIcons.CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Learning Outcomes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Outcomes</h2>
              <ul className="space-y-2">
                {details.learningOutcomes.map((outcome, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <HeroIcons.AcademicCapIcon className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Tips */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Pro Tips</h2>
              <ul className="space-y-2">
                {details.tips.map((tip, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <HeroIcons.LightBulbIcon className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Extensions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Extensions</h2>
              <ul className="space-y-2">
                {details.extensions.map((extension, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <HeroIcons.PlusCircleIcon className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>{extension}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}

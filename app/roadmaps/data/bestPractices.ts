import type { BestPractice } from './sections';

export const frontendBestPractices: BestPractice[] = [
  {
    title: 'Component Architecture',
    description: 'Learn how to structure your components for maximum reusability',
    iconName: 'CubeTransparentIcon',
    difficulty: 'Intermediate',
    topics: ['Component Design', 'Props', 'State Management', 'Custom Hooks'],
    path: '/roadmaps/frontend/best-practices/component-architecture',
    isNew: true
  },
  {
    title: 'Performance Optimization',
    description: 'Techniques to improve your app performance and loading speed',
    iconName: 'BoltIcon',
    difficulty: 'Advanced',
    topics: ['Code Splitting', 'Lazy Loading', 'Caching', 'Bundle Size'],
    path: '/roadmaps/frontend/best-practices/performance'
  },
  {
    title: 'Responsive Design',
    description: 'Best practices for creating responsive and mobile-first layouts',
    iconName: 'DevicePhoneMobileIcon',
    difficulty: 'Beginner',
    topics: ['Media Queries', 'Flexbox', 'Grid', 'Mobile First'],
    path: '/roadmaps/frontend/best-practices/responsive-design'
  },
  {
    title: 'Clean Code & Documentation',
    description: 'Write maintainable code with proper documentation and comments',
    iconName: 'DocumentTextIcon',
    difficulty: 'Intermediate',
    topics: ['Code Style', 'JSDoc', 'TypeScript', 'Documentation'],
    path: '/roadmaps/frontend/best-practices/clean-code',
    isNew: true
  },
  {
    title: 'Testing Strategies',
    description: 'Learn different testing approaches for frontend applications',
    iconName: 'BeakerIcon',
    difficulty: 'Advanced',
    topics: ['Unit Testing', 'Integration Tests', 'E2E Testing', 'TDD'],
    path: '/roadmaps/frontend/best-practices/testing'
  },
  {
    title: 'State Management',
    description: 'Best practices for managing application state effectively',
    iconName: 'CircleStackIcon',
    difficulty: 'Advanced',
    topics: ['Redux', 'Context API', 'Zustand', 'State Machines'],
    path: '/roadmaps/frontend/best-practices/state-management'
  },
  {
    title: 'Security Best Practices',
    description: 'Protect your frontend applications from common vulnerabilities',
    iconName: 'ShieldCheckIcon',
    difficulty: 'Advanced',
    topics: ['XSS Prevention', 'CSRF', 'Content Security', 'Input Validation'],
    path: '/roadmaps/frontend/best-practices/security',
    isNew: true
  },
  {
    title: 'Accessibility (A11y)',
    description: 'Make your applications accessible to all users',
    iconName: 'UserGroupIcon',
    difficulty: 'Intermediate',
    topics: ['ARIA', 'Semantic HTML', 'Keyboard Navigation', 'Screen Readers'],
    path: '/roadmaps/frontend/best-practices/accessibility'
  },
  {
    title: 'Git & Version Control',
    description: 'Master Git workflows and collaboration best practices',
    iconName: 'CodeBracketSquareIcon',
    difficulty: 'Intermediate',
    topics: ['Branching Strategy', 'Commit Messages', 'Code Review', 'Git Flow'],
    path: '/roadmaps/frontend/best-practices/git'
  }
];

'use client';

import { motion } from 'framer-motion';
import { 
  ClipboardDocumentListIcon, 
  CommandLineIcon, 
  CodeBracketIcon,
  WindowIcon,
  ServerIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  ViewColumnsIcon
} from '@heroicons/react/24/outline';
import ProjectLayout from '@/app/components/roadmaps/projects/ProjectLayout';

const features = [
  {
    title: 'Drag and Drop Interface',
    description: 'Implement smooth drag and drop functionality with react-beautiful-dnd',
    icon: <WindowIcon className="h-6 w-6 text-purple-400" />,
    code: `// Using react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TaskBoard() {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setTasks(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {columns.map((column) => (
          <div key={column.id} className="w-80">
            <h3 className="font-medium mb-4">{column.title}</h3>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-2"
                >
                  {column.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-4 bg-white rounded-lg shadow"
                        >
                          {task.title}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}`
  },
  {
    title: 'State Management',
    description: 'Manage application state using Redux Toolkit with TypeScript',
    icon: <ServerIcon className="h-6 w-6 text-blue-400" />,
    code: `// Task slice with Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
}

interface TaskState {
  items: Task[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TaskState = {
  items: [],
  loading: 'idle',
  error: null
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.items.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    moveTask: (state, action: PayloadAction<{
      taskId: string;
      sourceStatus: string;
      destinationStatus: string;
    }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        task.status = action.payload.destinationStatus as Task['status'];
      }
    }
  }
});`
  },
  {
    title: 'Responsive Layout',
    description: 'Create a responsive layout that works on all devices',
    icon: <ViewColumnsIcon className="h-6 w-6 text-green-400" />,
    code: `// Responsive board layout with Tailwind CSS
function ResponsiveBoard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <nav className="space-y-2">
            <button className="w-full p-2 rounded hover:bg-gray-100">
              My Tasks
            </button>
            <button className="w-full p-2 rounded hover:bg-gray-100">
              Team Tasks
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-x-auto">
          <div className="inline-flex gap-4 lg:flex pb-4">
            {columns.map((column) => (
              <div
                key={column.id}
                className="w-80 shrink-0 first:ml-0 last:mr-0"
              >
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-medium mb-4">{column.title}</h3>
                  <div className="space-y-2">
                    {column.tasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`
  }
];

const steps = [
  {
    title: 'Project Setup',
    description: 'Initialize your Next.js project with TypeScript and required dependencies',
    command: 'npx create-next-app task-dashboard --typescript --tailwind --eslint'
  },
  {
    title: 'Install Dependencies',
    description: 'Add necessary packages for drag and drop and state management',
    command: 'npm install @reduxjs/toolkit react-beautiful-dnd @heroicons/react framer-motion'
  },
  {
    title: 'Development Server',
    description: 'Start the development server and begin coding',
    command: 'npm run dev'
  }
];

const learningResources = [
  {
    title: 'React Beautiful DnD Documentation',
    url: 'https://github.com/atlassian/react-beautiful-dnd',
    description: 'Official documentation for implementing drag and drop'
  },
  {
    title: 'Redux Toolkit Guide',
    url: 'https://redux-toolkit.js.org/introduction/getting-started',
    description: 'Learn how to manage state with Redux Toolkit'
  },
  {
    title: 'Framer Motion Animation Guide',
    url: 'https://www.framer.com/motion/',
    description: 'Add smooth animations to your components'
  }
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function TaskDashboardPage() {
  return (
    <ProjectLayout
      title="Task Management Dashboard"
      description="Build a Trello-like task management app with drag and drop functionality"
      icon={<ClipboardDocumentListIcon className="h-6 w-6 text-purple-400" />}
      difficulty="Intermediate"
      estimatedTime="2-3 weeks"
      topics={['React', 'DnD', 'State Management', 'TypeScript', 'Tailwind CSS']}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Project Preview */}
        <motion.div variants={cardVariants} className="relative h-80 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
          <div className="absolute inset-0 backdrop-blur-sm p-6">
            <div className="h-full rounded-lg border border-gray-800 bg-[#1a1f2c]/80 p-4">
              <div className="flex h-full flex-col">
                <div className="border-b border-gray-800 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-medium text-white">Project Tasks</h3>
                    <button className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                      Add Task
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-[#161922] transition-colors">
                      <ArrowsPointingOutIcon className="h-5 w-5 text-gray-400" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-[#161922] transition-colors">
                      <ArrowsPointingInIcon className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 py-4">
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {['To Do', 'In Progress', 'Done'].map((column) => (
                      <div key={column} className="bg-[#161922] rounded-lg p-3">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">{column}</h4>
                        <div className="space-y-2">
                          {column === 'To Do' && (
                            <div className="p-3 rounded bg-[#1a1f2c] border border-gray-800">
                              <p className="text-sm text-white">Implement drag and drop</p>
                              <div className="mt-2 flex items-center justify-between">
                                <span className="text-xs text-purple-300">High Priority</span>
                                <span className="text-xs text-gray-500">2d</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div variants={cardVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="p-4 rounded-lg bg-[#1a1f2c] border border-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                    <div className="mt-3 flex items-center gap-2 p-2 rounded bg-[#161922]">
                      <CommandLineIcon className="h-4 w-4 text-gray-400" />
                      <code className="text-sm text-gray-300">{step.command}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={cardVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="grid gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#161922]">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-400">
                      {feature.description}
                    </p>
                    <pre className="mt-4 p-4 rounded-lg bg-[#161922] overflow-x-auto">
                      <code className="text-sm text-gray-300">
                        {feature.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div variants={cardVariants} className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Learning Resources
          </h2>
          <div className="grid gap-4">
            {learningResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[#161922] hover:bg-[#1e2230] transition-colors"
              >
                <h3 className="text-lg font-medium text-blue-400">
                  {resource.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </ProjectLayout>
  );
}

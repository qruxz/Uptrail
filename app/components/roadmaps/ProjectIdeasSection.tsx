'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import * as HeroIcons from '@heroicons/react/24/outline';
import type { ProjectIdea } from '@/app/roadmaps/data/sections';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

interface ProjectCardProps {
  project: ProjectIdea;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = HeroIcons[project.iconName as keyof typeof HeroIcons];

  return (
    <motion.div 
      variants={itemVariants}
      className="relative group"
    >
      <motion.div 
        className={`rounded-lg bg-white shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-200 ${isExpanded ? 'ring-2 ring-blue-500/20' : ''}`}
        layout
      >
        <motion.div className="relative p-6" layout>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {project.difficulty}
                </span>
                <span className="text-xs text-gray-500">
                  {project.estimatedTime}
                </span>
                {project.isNew && (
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ChevronDownIcon 
                className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={project.path}
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Start Project
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface ProjectIdeasSectionProps {
  projects: ProjectIdea[];
}

export default function ProjectIdeasSection({ projects }: ProjectIdeasSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Project Ideas</h2>
          <p className="mt-4 text-lg text-gray-600">
            Build real-world projects to strengthen your skills and expand your portfolio
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BookmarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import * as HeroIcons from '@heroicons/react/24/outline';
import type { BestPractice } from '@/app/roadmaps/data/sections';

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

interface BestPracticeCardProps {
  practice: BestPractice;
}

function BestPracticeCard({ practice }: BestPracticeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = HeroIcons[practice.iconName as keyof typeof HeroIcons];

  return (
    <motion.div 
      variants={itemVariants}
      className="relative group"
    >
      <motion.div 
        className={`rounded-lg bg-[#1e2330] hover:bg-[#252b3b] transition-all overflow-hidden ${isExpanded ? 'ring-2 ring-blue-500/20' : ''}`}
        layout
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <motion.div className="relative p-6" layout>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-[#161922] text-white">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {practice.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  practice.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  practice.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {practice.difficulty}
                </span>
                {practice.isNew && (
                  <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-[#161922] rounded-lg transition-colors"
            >
              <ChevronDownIcon 
                className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          
          <p className="text-gray-400 mb-4">
            {practice.description}
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
                <div className="pt-4 border-t border-gray-700/50">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {practice.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#161922] text-gray-400 px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={practice.path}
                    className="inline-flex items-center gap-2 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <BookmarkIcon className="h-4 w-4" />
                    Learn More
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

interface BestPracticesSectionProps {
  practices: BestPractice[];
}

export default function BestPracticesSection({ practices }: BestPracticesSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Best Practices</h2>
          <p className="mt-4 text-lg text-gray-600">
            Master these essential practices to write better, more maintainable code
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {practices.map((practice, index) => (
            <BestPracticeCard key={practice.title} practice={practice} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

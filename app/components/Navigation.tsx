'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiUser, FiLogOut, FiLogIn, FiAward, FiPieChart } from 'react-icons/fi';

export default function Navigation() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800 font-space-grotesk">Uptrail</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {session ? (
              <>
                <Link
                  href="/roadmaps"
                  className={`${
                    pathname === '/roadmaps'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  } rounded-md px-3 py-2 text-sm font-medium transition-colors`}
                >
                  Roadmaps
                </Link>
                <Link
                  href="/community"
                  className={`${
                    pathname === '/community'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  } rounded-md px-3 py-2 text-sm font-medium transition-colors`}
                >
                  Community
                </Link>
                <Link
                  href="/challenges"
                  className={`${
                    pathname === '/challenges'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  } rounded-md px-3 py-2 text-sm font-medium transition-colors`}
                >
                  Challenges
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
                >
                  <FiLogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
              >
                <FiLogIn className="w-4 h-4" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {session ? (
                <>
                  <Link
                    href="/roadmaps"
                    className={`${
                      pathname === '/roadmaps'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    } block rounded-md px-3 py-2 text-base font-medium transition-colors`}
                  >
                    Roadmaps
                  </Link>
                  <Link
                    href="/community"
                    className={`${
                      pathname === '/community'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    } block rounded-md px-3 py-2 text-base font-medium transition-colors`}
                  >
                    Community
                  </Link>
                  <Link
                    href="/challenges"
                    className={`${
                      pathname === '/challenges'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    } block rounded-md px-3 py-2 text-base font-medium transition-colors`}
                  >
                    Challenges
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

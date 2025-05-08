'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiCode, FiClock, FiZap } from 'react-icons/fi';
import MigrationDialog from '../components/MigrationDialog';
import type { UserProgress, Badge, Submission } from '@/types/challenges';

interface Profile {
  bio?: string;
  title?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  skills?: string[];
  preferences?: any;
}

interface ProfileStats {
  totalPoints: number;
  completedChallenges: number;
  streak: number;
  badges: Badge[];
  recentSubmissions: Submission[];
}

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Profile>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'progress'>('profile');

  useEffect(() => {
    Promise.all([fetchProfile(), fetchStats()]);
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/profile');
      const data = await response.json();
      if (data.profile) {
        setProfile(data.profile);
        setFormData(data.profile);
      }
    } catch (err) {
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/profile/stats');
      const data = await response.json();
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (err) {
      console.error('Failed to load stats:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.profile) {
        setProfile(data.profile);
        setIsEditing(false);
      }
    } catch (err) {
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please sign in to view your profile</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'Profile'}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold">{session.user?.name}</h1>
                <p className="text-gray-600">{session.user?.email}</p>
              </div>
            </div>
            {activeTab === 'profile' && (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            )}
          </div>

          {/* Stats Overview */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FiAward className="w-5 h-5" />
                  <span className="text-sm">Total Points</span>
                </div>
                <div className="text-2xl font-bold">{stats.totalPoints}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FiCode className="w-5 h-5" />
                  <span className="text-sm">Challenges</span>
                </div>
                <div className="text-2xl font-bold">{stats.completedChallenges}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FiTrendingUp className="w-5 h-5" />
                  <span className="text-sm">Streak</span>
                </div>
                <div className="text-2xl font-bold">{stats.streak} days</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FiZap className="w-5 h-5" />
                  <span className="text-sm">Badges</span>
                </div>
                <div className="text-2xl font-bold">{stats.badges.length}</div>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('profile')}
                className={`pb-4 text-sm font-medium ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-gray-800 text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('progress')}
                className={`pb-4 text-sm font-medium ${
                  activeTab === 'progress'
                    ? 'border-b-2 border-gray-800 text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Progress
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-500 rounded">
              {error}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <>
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Data Migration</h2>
                <p className="text-gray-600 mb-4">
                  If you have been using PathForge without an account, you can migrate your local progress
                  to your account. This will allow you to access your progress from any device.
                </p>
                <MigrationDialog />
              </div>

              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Bio
                    </label>
                    <textarea
                      value={formData.bio || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                      }
                      rows={4}
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      value={formData.githubUrl || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, githubUrl: e.target.value })
                      }
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={formData.linkedinUrl || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, linkedinUrl: e.target.value })
                      }
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Website URL
                    </label>
                    <input
                      type="url"
                      value={formData.websiteUrl || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, websiteUrl: e.target.value })
                      }
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Skills (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.skills?.join(', ') || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: e.target.value.split(',').map((s) => s.trim()),
                        })
                      }
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  {profile?.title && (
                    <div>
                      <h2 className="text-lg font-semibold">Title</h2>
                      <p className="text-gray-600">{profile.title}</p>
                    </div>
                  )}

                  {profile?.bio && (
                    <div>
                      <h2 className="text-lg font-semibold">Bio</h2>
                      <p className="text-gray-600">{profile.bio}</p>
                    </div>
                  )}

                  {(profile?.githubUrl ||
                    profile?.linkedinUrl ||
                    profile?.websiteUrl) && (
                    <div>
                      <h2 className="text-lg font-semibold">Links</h2>
                      <div className="space-y-2">
                        {profile.githubUrl && (
                          <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline block"
                          >
                            GitHub
                          </a>
                        )}
                        {profile.linkedinUrl && (
                          <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline block"
                          >
                            LinkedIn
                          </a>
                        )}
                        {profile.websiteUrl && (
                          <a
                            href={profile.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline block"
                          >
                            Website
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {profile?.skills && profile.skills.length > 0 && (
                    <div>
                      <h2 className="text-lg font-semibold">Skills</h2>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {profile.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && stats && (
            <div className="space-y-8">
              {/* Badges */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Badges</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className="bg-gray-50 p-4 rounded-lg text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">{badge.icon}</span>
                      </div>
                      <h3 className="font-medium text-gray-900">{badge.name}</h3>
                      <p className="text-sm text-gray-500">{badge.description}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        Unlocked {new Date(badge.unlockedAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Submissions */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Submissions</h2>
                <div className="space-y-4">
                  {stats.recentSubmissions.map((submission) => (
                    <div
                      key={submission.id}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">
                          {submission.challengeId}
                        </h3>
                        <span
                          className={`px-2 py-1 text-sm rounded ${
                            submission.status === 'passed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {submission.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiAward className="w-4 h-4" />
                          {submission.points} points
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

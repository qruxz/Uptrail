import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';

// Mock data - replace with actual database queries
const mockStats = {
  totalPoints: 450,
  completedChallenges: 12,
  streak: 5,
  badges: [
    {
      id: 'first-challenge',
      name: 'First Steps',
      description: 'Complete your first coding challenge',
      icon: '🎯',
      unlockedAt: new Date('2024-12-20'),
    },
    {
      id: 'streak-3',
      name: 'On Fire',
      description: 'Maintain a 3-day streak',
      icon: '🔥',
      unlockedAt: new Date('2024-12-22'),
    },
    {
      id: 'points-100',
      name: 'Century',
      description: 'Earn 100 points',
      icon: '💯',
      unlockedAt: new Date('2024-12-23'),
    },
  ],
  recentSubmissions: [
    {
      id: '1',
      challengeId: 'Array Sum',
      status: 'passed',
      points: 20,
      createdAt: new Date('2024-12-24'),
      executionTime: 0.05,
      results: [
        { passed: true, message: 'All test cases passed', executionTime: 0.05 },
      ],
    },
    {
      id: '2',
      challengeId: 'String Reverse',
      status: 'passed',
      points: 30,
      createdAt: new Date('2024-12-23'),
      executionTime: 0.03,
      results: [
        { passed: true, message: 'All test cases passed', executionTime: 0.03 },
      ],
    },
    {
      id: '3',
      challengeId: 'Binary Search',
      status: 'failed',
      points: 0,
      createdAt: new Date('2024-12-22'),
      executionTime: 0.04,
      results: [
        { passed: false, message: 'Test case 3 failed', executionTime: 0.04 },
      ],
    },
  ],
};

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'You must be signed in to view stats' }),
      { status: 401 }
    );
  }

  // TODO: Replace with actual database query
  const stats = mockStats;

  return new NextResponse(JSON.stringify({ stats }), {
    status: 200,
  });
}

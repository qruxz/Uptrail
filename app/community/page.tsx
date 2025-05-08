'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600">Stay tuned for our community features!</p>
      </div>
    </div>
  );
}

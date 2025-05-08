export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  points: number;
  timeLimit: string;
  template: string;
  testCases: TestCase[];
  hints: string[];
  solution?: string;
}

export interface TestCase {
  input: any;
  expected: any;
  isHidden?: boolean;
  description?: string;
}

export interface Submission {
  id: string;
  userId: string;
  challengeId: string;
  code: string;
  status: 'pending' | 'running' | 'passed' | 'failed';
  results: TestResult[];
  points: number;
  executionTime: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface TestResult {
  passed: boolean;
  message: string;
  executionTime: number;
  memory?: number;
  error?: string;
}

export interface UserProgress {
  userId: string;
  totalPoints: number;
  completedChallenges: number;
  streak: number;
  lastActive: Date;
  badges: Badge[];
  submissions: Submission[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export type TaskType = 'input' | 'multiple-choice' | 'multiple-select' | 'sorting' | 'mentor' | 'categorize' | 'timeline' | 'scenario';

export interface Task {
  id: number;
  type: TaskType;
  question: string;
  answer: string | string[];
  options?: string[];
  hint?: string;
  explanation: string;
  initialItems?: string[];
  correctOrder?: string[];
  // For mentor dialogue
  dialogue?: {
    mentorMessage: string;
    userOptions: {
      text: string;
      reaction: string;
      isCorrect?: boolean;
      deepening?: string;
    }[];
  };
  // For categorize tasks
  categorize?: {
    items: string[];
    buckets: string[];
    correctMapping: Record<string, string>;
  };
  // For timeline tasks
  timeline?: {
    events: { label: string; year: string }[];
    correctOrder: string[];
  };
  // For scenario tasks
  scenario?: {
    brief: string;
    constraints: string[];
    choices: {
      text: string;
      outcome: string;
      score: number;
      tags?: string[];
    }[];
    passingScore?: number;
  };
}

export interface Room {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  users: number;
  time: string;
  image?: string;
  tasks: Task[];
  // Theory content can be a structured array of blocks
  content: ContentBlock[];
}

export type ContentBlock = 
  | { type: 'text'; content: string }
  | { type: 'info' | 'cpu' | 'book' | 'globe' | 'thermometer'; title: string; content: string }
  | { type: 'analogy'; title: string; content: string }
  | { type: 'grid'; items: { title: string; content: string }[] }
  | { type: 'warning' | 'tip' | 'danger'; title: string; content: string }
  | { type: 'lab'; title: string; scenario: string; tools: string; steps: string[]; conclusion?: string; advanced?: unknown };

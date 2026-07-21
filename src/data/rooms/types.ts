import { Task } from '@/types/room';

export interface LocalizedString {
  en: string;
  ru: string;
}

export type TaskCountByType = Partial<Record<Task['type'], number>>;

export interface LocalizedRoomMetadata {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  category: LocalizedString;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: LocalizedString;
  image: string;
  pathIds?: string[];
  icon?: string;
  locked?: boolean;
  outcomes?: LocalizedString[];
  taskCountByType?: TaskCountByType;
}

export interface PathMetadata {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  difficulty: LocalizedString;
  unlocked: boolean;
  /**
   * Ordered room sequence for this path — the curriculum decision, kept here
   * rather than inferred from ROOMS_METADATA array position (which only records
   * when a room happened to be added). A room can sit at different positions in
   * different paths, so order must belong to the path, not the room.
   *
   * Membership still lives on the room (`pathIds`); this list only orders it.
   * The two are kept in sync by a Vitest guard — see
   * src/data/rooms/__tests__/data-integrity.test.ts ("path room ordering").
   */
  roomIds: string[];
}

export interface LocalizedTask {
  id: number;
  type: Task['type'];
  question: LocalizedString;
  answer: unknown;
  // Optional illustration rendered above the question (see AGENTS.md "Task data validation gate")
  image?: {
    src: string; // must exist under public/
    alt: LocalizedString;
    caption?: LocalizedString;
  };
  options?: LocalizedString[] | string[];
  hint?: LocalizedString;
  explanation: LocalizedString;
  initialItems?: LocalizedString[] | string[];
  correctOrder?: LocalizedString[] | string[];
  dialogue?: {
    mentorMessage: LocalizedString;
    userOptions: {
      text: LocalizedString;
      reaction: LocalizedString;
      isCorrect?: boolean;
      deepening?: LocalizedString;
    }[];
  };
  // For categorize tasks
  categorize?: {
    items: LocalizedString[];
    buckets: LocalizedString[];
    correctMapping: Record<string, string>; // localized item → localized bucket (resolved at render)
  };
  // For timeline tasks
  timeline?: {
    events: { label: LocalizedString; year: string }[];
    correctOrder: LocalizedString[];
  };
  // For scenario tasks
  scenario?: {
    brief: LocalizedString;
    constraints: LocalizedString[];
    choices: {
      text: LocalizedString;
      outcome: LocalizedString;
      score: number;
      tags?: string[];
    }[];
    passingScore?: number;
  };
}

// Maps each room to the skill axes it contributes to, with weights (0.0–1.0).
// Only the "foundational" role is covered by current rooms.
// Other roles will show 0% with a "coming soon" message.

export interface SkillWeight {
  skillSlug: string;
  weight: number;
}

export const ROOM_SKILL_MAPPINGS: Record<string, SkillWeight[]> = {
  'llm-landscape': [
    { skillSlug: 'ml-basics', weight: 0.7 },
    { skillSlug: 'ethics', weight: 0.3 },
    { skillSlug: 'dl-basics', weight: 0.4 },
  ],
  'llm-mechanics': [
    { skillSlug: 'ml-basics', weight: 0.8 },
    { skillSlug: 'dl-basics', weight: 0.6 },
    { skillSlug: 'math', weight: 0.3 },
  ],
  'ai-history': [
    { skillSlug: 'ml-basics', weight: 0.3 },
    { skillSlug: 'ethics', weight: 0.5 },
  ],
  'chatgpt-moment': [
    { skillSlug: 'ml-basics', weight: 0.2 },
    { skillSlug: 'ethics', weight: 0.4 },
  ],
  'ai-singularity': [
    { skillSlug: 'ethics', weight: 0.7 },
    { skillSlug: 'ml-basics', weight: 0.2 },
  ],
  'prompting-101': [
    { skillSlug: 'ml-basics', weight: 0.5 },
    { skillSlug: 'data-wrangling', weight: 0.3 },
    { skillSlug: 'python', weight: 0.2 },
  ],
  'native-multimodality': [
    { skillSlug: 'dl-basics', weight: 0.8 },
    { skillSlug: 'ml-basics', weight: 0.4 },
    { skillSlug: 'math', weight: 0.3 },
  ],
  'prompt-evals': [
    { skillSlug: 'ml-basics', weight: 0.5 },
    { skillSlug: 'data-wrangling', weight: 0.5 },
    { skillSlug: 'math', weight: 0.4 },
  ],
  'deep-search-agents': [
    { skillSlug: 'ml-basics', weight: 0.6 },
    { skillSlug: 'data-wrangling', weight: 0.5 },
    { skillSlug: 'ethics', weight: 0.3 },
  ],
  'ai-image-creation': [
    { skillSlug: 'dl-basics', weight: 0.5 },
    { skillSlug: 'ml-basics', weight: 0.3 },
    { skillSlug: 'data-wrangling', weight: 0.2 },
  ],
};

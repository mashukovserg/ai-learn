import { LocalizedTask } from '../types';
import { llmLandscapeTasks } from './llm-landscape';
import { llmMechanicsTasks } from './llm-mechanics';
import { aiHistoryTasks } from './ai-history';
import { prompting101Tasks } from './prompting-101';
import { chatgptMomentTasks } from './chatgpt-moment';
import { scalingHypothesisTasks } from './scaling-hypothesis';
import { aiRagTasks } from './ai-rag';
import { aiSecurityTasks } from './ai-security';
import { aiResearchTasks } from './ai-research';
import { aiAlignmentTasks } from './ai-alignment';
import { aiAgentsTasks } from './ai-agents';
import { deepSearchAgentsTasks } from './deep-search-agents';
import { aiSingularityTasks } from './ai-singularity';
import { nativeMultimodalityTasks } from './native-multimodality';
import { aiImageCreationTasks } from './ai-image-creation';
import { fineTuning101Tasks } from './fine-tuning-101';
import { embeddings101Tasks } from './embeddings-101';
import { researchGroundingTasks } from './research-grounding';
import { postChatgptHistoryTasks } from './post-chatgpt-history';
import { llmGuardrailsTasks } from './llm-guardrails';
import { aiRegulationRuTasks } from './ai-regulation-ru';
import { aiRegulationEuTasks } from './ai-regulation-eu';
import { agentCodingFoundationsTasks } from './agent-coding-foundations';

export const ROOM_TASKS: Record<string, LocalizedTask[]> = {
  'llm-landscape': llmLandscapeTasks,
  'llm-mechanics': llmMechanicsTasks,
  'ai-history': aiHistoryTasks,
  'prompting-101': prompting101Tasks,
  'chatgpt-moment': chatgptMomentTasks,
  'scaling-hypothesis': scalingHypothesisTasks,
  'ai-rag': aiRagTasks,
  'ai-security': aiSecurityTasks,
  'ai-research': aiResearchTasks,
  'ai-alignment': aiAlignmentTasks,
  'ai-agents': aiAgentsTasks,
  'deep-search-agents': deepSearchAgentsTasks,
  'ai-singularity': aiSingularityTasks,
  'native-multimodality': nativeMultimodalityTasks,
  'ai-image-creation': aiImageCreationTasks,
  'fine-tuning-101': fineTuning101Tasks,
  'embeddings-101': embeddings101Tasks,
  'research-grounding': researchGroundingTasks,
  'post-chatgpt-history': postChatgptHistoryTasks,
  'llm-guardrails': llmGuardrailsTasks,
  'ai-regulation-ru': aiRegulationRuTasks,
  'ai-regulation-eu': aiRegulationEuTasks,
  'agent-coding-foundations': agentCodingFoundationsTasks,
};

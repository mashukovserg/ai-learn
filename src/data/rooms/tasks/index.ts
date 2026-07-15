import { LocalizedTask } from '../types';
import { llmLandscapeTasks } from './llm-landscape';
import { llmMechanicsTasks } from './llm-mechanics';
import { aiHistoryTasks } from './ai-history';
import { prompting101Tasks } from './prompting-101';
import { aiCareerTrajectoriesTasks } from './ai-career-trajectories';
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
import { localModels101Tasks } from './local-models-101';
import { llama31_8bTasks } from './llama-3-1-8b';
import { embeddings101Tasks } from './embeddings-101';
import { researchGroundingTasks } from './research-grounding';
import { postChatgptHistoryTasks } from './post-chatgpt-history';
import { llmGuardrailsTasks } from './llm-guardrails';
import { aiRegulationRuTasks } from './ai-regulation-ru';
import { aiRegulationEuTasks } from './ai-regulation-eu';
import { agentCodingFoundationsTasks } from './agent-coding-foundations';
import { agenticCodingToolsTasks } from './agentic-coding-tools';
import { agenticCliToolsTasks } from './agentic-cli-tools';
import { mcpToolEcosystemsTasks } from './mcp-tool-ecosystems';
import { agenticSwarmManagementTasks } from './agentic-swarm-management';
import { frontierEvalsLogicTasks } from './frontier-evals-logic';
import { claudeCodeAgenticLoopTasks } from './claude-code-agentic-loop';
import { claudeCodeProWorkflowTasks } from './claude-code-pro-workflow';

import { promptContractsTasks } from './prompt-contracts';
import { multiAgentCollaborationTasks } from './multi-agent-collaboration';
import { agenticTestingLoopTasks } from './agentic-testing-loop';
import { agenticUiDeliveryTasks } from './agentic-ui-delivery';
import { taxonomyMatchingTasks } from './taxonomy-matching';

export const ROOM_TASKS: Record<string, LocalizedTask[]> = {
  'llm-landscape': llmLandscapeTasks,
  'llm-mechanics': llmMechanicsTasks,
  'ai-history': aiHistoryTasks,
  'prompting-101': prompting101Tasks,
  'ai-career-trajectories': aiCareerTrajectoriesTasks,
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
  'local-models-101': localModels101Tasks,
  'llama-3-1-8b': llama31_8bTasks,
  'embeddings-101': embeddings101Tasks,
  'research-grounding': researchGroundingTasks,
  'post-chatgpt-history': postChatgptHistoryTasks,
  'llm-guardrails': llmGuardrailsTasks,
  'ai-regulation-ru': aiRegulationRuTasks,
  'ai-regulation-eu': aiRegulationEuTasks,
  'agent-coding-foundations': agentCodingFoundationsTasks,
  'agentic-coding-tools': agenticCodingToolsTasks,
  'agentic-cli-tools': agenticCliToolsTasks,
  'prompt-contracts': promptContractsTasks,
  'multi-agent-collaboration': multiAgentCollaborationTasks,
  'agentic-testing-loop': agenticTestingLoopTasks,
  'agentic-ui-delivery': agenticUiDeliveryTasks,
  'mcp-tool-ecosystems': mcpToolEcosystemsTasks,
  'agentic-swarm-management': agenticSwarmManagementTasks,
  'frontier-evals-logic': frontierEvalsLogicTasks,
  'claude-code-agentic-loop': claudeCodeAgenticLoopTasks,
  'claude-code-pro-workflow': claudeCodeProWorkflowTasks,
  'taxonomy-matching': taxonomyMatchingTasks,
};

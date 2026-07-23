import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

/**
 * Theory registry: room id → lazily-loaded theory component.
 *
 * Why dynamic imports: the room page is a client component, and with static
 * imports every visitor of ANY room downloaded the code of ALL theories in one
 * bundle. With `next/dynamic` each room ships only its own chapter content
 * (SSR still renders the full HTML — no ssr:false here, so the theory text
 * stays server-rendered and crawlable).
 *
 * Adding a room: add one line here. The registry's completeness is enforced by
 * a Vitest guard (every id in ROOMS_METADATA must have an entry), so a missing
 * mapping fails `check-all` instead of silently rendering a placeholder.
 */

const loading = () => null;

export const THEORY_COMPONENTS: Record<string, ComponentType<{ lang: string }>> = {
  'llm-mechanics': dynamic(() => import('./LlmMechanicsTheory'), { loading }),
  'llm-landscape': dynamic(() => import('./LlmLandscapeTheory'), { loading }),
  'ai-history': dynamic(() => import('./AiHistoryTheory'), { loading }),
  'ai-career-trajectories': dynamic(() => import('./AiCareerTrajectoriesTheory'), { loading }),
  'chatgpt-moment': dynamic(() => import('./ChatgptMomentTheory'), { loading }),
  'post-chatgpt-history': dynamic(() => import('./PostChatgptHistoryTheory'), { loading }),
  'ai-image-creation': dynamic(() => import('./AiImageCreationTheory'), { loading }),
  'prompting-101': dynamic(() => import('./Prompting101Theory'), { loading }),
  'scaling-hypothesis': dynamic(() => import('./ScalingHypothesisTheory'), { loading }),
  'research-grounding': dynamic(() => import('./ResearchGroundingTheory'), { loading }),
  'ai-alignment': dynamic(() => import('./AiAlignmentTheory'), { loading }),
  'native-multimodality': dynamic(() => import('./NativeMultimodalityTheory'), { loading }),
  'ai-agents': dynamic(() => import('./AiAgentsTheory'), { loading }),
  'deep-search-agents': dynamic(() => import('./DeepSearchAgentsTheory'), { loading }),
  'ai-rag': dynamic(() => import('./AiRagTheory'), { loading }),
  'ai-security': dynamic(() => import('./AiSecurityTheory'), { loading }),
  'ai-research': dynamic(() => import('./AiResearchTheory'), { loading }),
  'fine-tuning-101': dynamic(() => import('./FineTuning101Theory'), { loading }),
  'local-models-101': dynamic(() => import('./LocalModels101Theory'), { loading }),
  'llama-3-1-8b': dynamic(() => import('./Llama318bTheory'), { loading }),
  'prompt-evals': dynamic(() => import('./PromptEvalsTheory'), { loading }),
  'ai-singularity': dynamic(() => import('./AiSingularityTheory'), { loading }),
  'embeddings-101': dynamic(() => import('./Embeddings101Theory'), { loading }),
  'llm-guardrails': dynamic(() => import('./LlmGuardrailsTheory'), { loading }),
  'ai-regulation-ru': dynamic(() => import('./AiRegulationRuTheory'), { loading }),
  'ai-regulation-eu': dynamic(() => import('./AiRegulationEuTheory'), { loading }),
  'agent-coding-foundations': dynamic(() => import('./AgentCodingFoundationsTheory'), { loading }),
  'agentic-coding-tools': dynamic(() => import('./AgenticCodingToolsTheory'), { loading }),
  'agentic-cli-tools': dynamic(() => import('./AgenticCliToolsTheory'), { loading }),
  'prompt-contracts': dynamic(() => import('./PromptContractsTheory'), { loading }),
  'multi-agent-collaboration': dynamic(() => import('./MultiAgentCollaborationTheory'), { loading }),
  'agentic-testing-loop': dynamic(() => import('./AgenticTestingLoopTheory'), { loading }),
  'agentic-ui-delivery': dynamic(() => import('./AgenticUiDeliveryTheory'), { loading }),
  'mcp-tool-ecosystems': dynamic(() => import('./McpToolEcosystemsTheory'), { loading }),
  'agentic-swarm-management': dynamic(() => import('./AgenticSwarmTheory'), { loading }),
  'frontier-evals-logic': dynamic(() => import('./FrontierEvalsTheory'), { loading }),
  'claude-code-agentic-loop': dynamic(() => import('./ClaudeCodeAgenticLoopTheory'), { loading }),
  'claude-code-pro-workflow': dynamic(() => import('./ClaudeCodeProWorkflowTheory'), { loading }),
  'context-engineering-101': dynamic(() => import('./ContextEngineering101Theory'), { loading }),
  'ai-existential-risk': dynamic(() => import('./AiExistentialRiskTheory'), { loading }),
  'taxonomy-matching': dynamic(() => import('./TaxonomyMatchingTheory'), { loading }),
};

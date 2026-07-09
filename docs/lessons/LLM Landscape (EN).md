---
title: LLM Landscape
aliases:
  - The LLM Landscape
lang: en
lesson_id: llm-landscape
tags:
  - ai-learning
  - llm
  - geopolitics
  - elo
source: src/app/[lang]/rooms/[id]/page.tsx
---

# LLM Landscape

**Level:** Beginner  
**Learners:** 1.2k  
**Duration:** 1h

Related: [[How LLMs Think (EN)]]

## Introduction

In 2025, the AI ecosystem has grown into a rich and diverse landscape. While OpenAI's ChatGPT was the first to go viral in 2022, it now faces stiff competition.

As Andrej Karpathy notes, OpenAI remains the "incumbent" (market leader), but alternatives like Claude, Gemini, and DeepSeek are pushing the boundaries.

## AI Geopolitics: The Battle for Sovereignty

AI is no longer just technology - it is a new form of "soft power" and national security. Today, the world is split into several key centers of influence.

### 🇺🇸 US: Dominance and Capital

Silicon Valley maintains leadership through massive compute and access to capital. OpenAI, Google, and Anthropic set the standards for "closed" proprietary models.

### 🇨🇳 China: Rapid Leap

Companies like DeepSeek and Alibaba (Qwen) have proven they can build world-class models using far fewer resources. China bets on algorithmic efficiency under chip constraints.

### 🇪🇺 Europe: Regulation and Openness

French Mistral has become a symbol of "open" AI, promoting the idea that European values and transparency are more important than total corporate control.

The concept of "Sovereign AI" implies that every nation should have its own model, trained on national data and language, to avoid dependence on foreign cloud services.

## The Leaderboard Wars: Understanding ELO

How do we know which model is truly the "smartest"? To solve this problem, the industry adopted the ELO rating system.

### Origins in Chess

Developed by Arpad Elo, this system was originally designed to rank chess players.

### Chatbot Arena

In AI, projects like LMSYS Chatbot Arena use "blind A/B testing."

Practical takeaway: ELO is a useful signal, but you should not select a model by one leaderboard alone. Production decisions also require latency, cost, reliability, and safety.

## Open vs Closed Models: When to Choose Which

Each strategy has tradeoffs. Closed APIs often deliver state-of-the-art quality and easier infrastructure. Open-weight models offer control, customization, and on-prem deployment.

### Closed APIs

- Fast launch with less DevOps overhead
- Strong quality across broad task classes
- Limited control over data and internals

### Open-weight models

- Greater privacy and infrastructure control
- Fine-tuning and adaptation flexibility
- Requires resources for optimization and maintenance

## A Practical Model Selection Framework

Use a short loop: define KPIs -> build a shortlist -> run A/B evals -> define fallback strategy. This prevents hype-driven decisions.

1. KPI: Quality, latency, cost, risk
2. Shortlist: 3-5 models from different vendors
3. Eval: Blind tests on real production prompts
4. Fallback: Primary + fallback model routing

## Model Reputation: Typical Best-Fit Use Cases

This is not an absolute ranking; it is a practical market reputation map. It changes quickly, so always validate with your own evals.

### ChatGPT (OpenAI)

Strong generalist: stable quality, coding/copilot workflows, and mature tooling ecosystem.

### Claude (Anthropic)

Often preferred for long-form careful explanations, analytical writing, and enterprise content quality.

### Gemini (Google)

Strong reputation in multimodal workflows and for teams already integrated into the Google ecosystem.

### DeepSeek

Often discussed as a cost/performance option, especially for technical and coding-heavy use cases.

### Mistral

Strong open-weight and EU positioning: useful for on-prem deployment, customization, and data-sovereignty requirements.

## Room Tasks

### Task 1
**Type:** input  
**Question:** Which company developed ChatGPT, which Karpathy calls the "Original Gangster"?  
**Answer:** OpenAI  
**Hint:** It was founded by Sam Altman and others.

### Task 2
**Type:** multiple-choice  
**Question:** If Model A consistently beats Model B in blind tests, what happens to their ELO ratings?  
**Options:**  
- Model A goes up, Model B goes down
- Model B goes up, Model A goes down
- Both stay exactly the same  
**Answer:** Model A goes up, Model B goes down  
**Hint:** Think about how chess rankings work.

### Task 3
**Type:** multiple-select  
**Question:** Select models that do NOT belong to US companies.  
**Options:**  
- Claude
- DeepSeek
- Gemini
- Mistral
- Qwen
- Llama
- Yi
- Jamba  
**Answer:** DeepSeek, Mistral, Qwen, Yi, Jamba  
**Hint:** Look for models from China, France, and Israel.

### Task 4
**Type:** input  
**Question:** What is the concept of a country having its own AI model for independence called?  
**Answer:** Sovereign AI  
**Hint:** The word starts with "Sov...".

### Task 5
**Type:** multiple-choice  
**Question:** Who is considered the current "incumbent" in mainstream generative AI?  
**Options:**  
- OpenAI
- Mistral
- DeepSeek
- Cohere  
**Answer:** OpenAI  
**Hint:** Think about the company that scaled ChatGPT first.

### Task 6
**Type:** multiple-select  
**Question:** Select model families that are typically part of the open-weight ecosystem.  
**Options:**  
- Llama
- Mistral
- Qwen
- Claude
- Gemini  
**Answer:** Llama, Mistral, Qwen  
**Hint:** Pick those commonly self-hosted on your own infrastructure.

### Task 7
**Type:** input  
**Question:** What is the strategy called where a nation builds its own models and AI stack for independence?  
**Answer:** Sovereign AI  
**Hint:** Two words, starts with "Sovereign".

### Task 8
**Type:** multiple-choice  
**Question:** If Model A consistently wins against Model B in blind comparisons, what happens in ELO?  
**Options:**  
- Model A goes up, Model B goes down
- Model B goes up, Model A goes down
- Both stay exactly the same  
**Answer:** Model A goes up, Model B goes down  
**Hint:** Think about how chess rankings work.

### Task 9
**Type:** input  
**Question:** What is the popular platform for blind LLM head-to-head comparisons called?  
**Answer:** Chatbot Arena  
**Hint:** Two words; second word is Arena.

### Task 10
**Type:** multiple-choice  
**Question:** For sensitive data and strict on-prem requirements, what is usually preferred?  
**Options:**  
- Open-weight model in a private environment
- Unrestricted public API
- Maximum generation temperature  
**Answer:** Open-weight model in a private environment  
**Hint:** Think data control and infrastructure ownership.

### Task 11
**Type:** multiple-select  
**Question:** Which metrics should you compare when selecting a model for production?  
**Options:**  
- Response quality
- Latency
- Token cost
- Safety/risk
- Logo color  
**Answer:** Response quality, Latency, Token cost, Safety/risk  
**Hint:** Think SLA, budget, and reliability.

### Task 12
**Type:** multiple-choice  
**Question:** Which vendor is most associated with European open-weight models and on-prem strategy?  
**Options:**  
- Mistral
- ChatGPT
- Gemini
- Claude  
**Answer:** Mistral  
**Hint:** Think EU-based open-weight positioning.

### Task 13
**Type:** multiple-choice  
**Question:** What is the best first step when choosing between Claude/Gemini/DeepSeek/ChatGPT/Mistral?  
**Options:**  
- Run evals on your own tasks and KPIs
- Pick whoever is trending on social media
- Rely only on a global ELO table  
**Answer:** Run evals on your own tasks and KPIs  
**Hint:** There is no universally best model for every product.

---
title: How LLMs Think
aliases:
  - Как мыслят LLM
lang: en
lesson_id: llm-mechanics
tags:
  - ai-learning
  - tokens
  - bpe
  - temperature
  - attention
source: src/app/[lang]/rooms/[id]/page.tsx
---

# How LLMs Think: Inside the Black Box

**Level:** Beginner  
**Duration:** 1.5h

Related: [[ChatGPT Moment (EN)]], [[LLM Landscape (EN)]]

## Chapter 1: Tokenization and BPE

Neural networks do not read text letter by letter. They break it into tokens using the BPE (Byte Pair Encoding) algorithm. A token is a statistically significant fragment of text. Understanding tokens is critical for controlling API costs and understanding model limitations (e.g., why AI is bad at counting letters in words).

## Chapter 2: Next-Token Prediction

All model intelligence is a prediction loop. Based on the entire dialogue history, the model calculates probabilities for each token in its vocabulary (usually around 100,000 options). This is a local process: the model doesn't know the end of a sentence until it gets there.

## Chapter 3: Temperature and Sampling

Temperature is a way to control randomness. At T=0, the model always picks the most likely token (Greedy Search), which is ideal for code. At T=0.7, the model starts taking "risks," making the text feel more natural and human.

## Chapter 4: Context Window and Memory

The context window is the amount of data the model can "see" at once. Using KV-Cache allows for resource savings when generating long texts, but even the most powerful models are subject to the "Lost in the Middle" effect, losing focus in the middle of massive documents.

## Chapter 5: Why Hallucinations Occur

Hallucinations are a direct consequence of the probabilistic nature of models. If a false but plausible-sounding answer has a higher probability than a dry fact, the model may choose the lie, especially at higher temperature values.
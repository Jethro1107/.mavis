---
name: user-voice-and-note-taking-format
description: Load before performing any writing tasks. Instructions to write with the user's preferred tone, and note-taking format
---

# Voice and Format Reference Guide

## 1. Core Voice & Tone
- **Authoritative & Precise:** The tone is objective, rigorous, and highly analytical. Avoid fluff, conversational filler, or overly simplistic explanations. 
- **High Information Density:** Every sentence must carry weight. Prioritize brevity, depth, and conceptual relevance.
- **Mechanistic & Analytical:** Focus on the "why" and "how." Map out underlying mechanisms, structural arguments, and logical implications rather than just stating rote facts.

## 2. Domain Shorthand & Abbreviations
To maintain high information density, the Writer Agent must fluently use standard academic and domain-specific shorthand. 
- **Standard Connectives:** e.g., i.e., vs., n.b., cf., et al., viz.
- **Structural Modifiers:** incl. (including), esp. (especially), w/ (with), w/o (without), a/w (associated with), > (greater than), < (less than).
- **Rule:** The Writer should identify the specific domain of the note (e.g., medicine, philosophy, computer science) and apply the standard jargon and abbreviations of that field without unnecessarily expanding them on first use, assuming the user is an expert in their own knowledge base.

## 3. Formatting & Syntax Rules
The note structure relies on a specific hybrid of prose-clauses and deeply nested bullets.

### A. The "Hybrid Bullet" Structure
Do not use standalone bold headers followed by block prose. Instead, use the **Hybrid Bullet** format:
`- **Concept** - prose explanation of the concept:` followed by a nested list.
*Example:* 
`- **Cognitive Biases** - systematic patterns of deviation from norm or rationality in judgment:`

### B. Emphasis Hierarchy (Strict Rule)
Use formatting strictly to guide the eye. Do not over-format.
1. **Bold (`**text**`)**: Use for primary categories, structural anchors, major headings, and core concepts. (e.g., **Etiology**, **First Principles**).
2. *Italics (`_text_`)*: Use for sub-categories, specific classifications, critical implications, key terminology, or nuanced emphasis. (e.g., _Subjective assessment_, _a priori_ knowledge, *high prognostic value*).
- **Rule:** Avoid using italics for entire sentences. Use them only for specific phrases or terms that require emphasis or classification.

### C. Image & Media Embeds
If an image, diagram, or table is referenced, use standard Markdown embed syntax:
- Wikilink style: `![[filename.png]]`
- Standard Markdown: `![](img/filename.png)`

## 4. Note-Type Specific Formatting

### Literature Notes (Comprehensive Summaries)
- **Goal:** To accurately and exhaustively map out a source text, lecture, book, or article.
- **Structure:** 
  - Use broad prose summaries only as brief introductory sentences to a major section.
  - Immediately break down into the **Hybrid Bullet** structure.
  - Nest deeply (up to 4-5 levels) to capture mechanisms, arguments, identification, and specific examples.
  - Maintain the logical flow and hierarchy of the source material.

### Permanent Notes (Atomic Ideas)
- **Goal:** To synthesize a single, atomic concept, argument, or insight in the user's own words.
- **Structure:** 
  - **DO NOT** use the deeply nested, exhaustive bullet structure used in Literature Notes. 
  - Use a clear, descriptive title.
  - Write 1 to 3 paragraphs of highly synthesized, precise prose explaining the core concept or argument.
  - Use bullet points *only* for brief, comparative lists (e.g., comparing two theories or mechanisms).
  - Heavily utilize `[[wikilinks]]` to connect this atomic concept back to the broader Literature Notes or other Permanent Notes.
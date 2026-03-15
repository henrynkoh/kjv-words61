/**
 * KJV verses by topic for discussing and spreading words of truth.
 * Use depending on audience, situation, and level of intelligence/knowledge on Bible verses.
 * Format and purpose aligned with https://github.com/henrynkoh/kjv-faith-ai
 */

export interface VerseEntry {
  id: string;
  theme: string;
  korean: string;
  ref: string;
  text: string;
}

/** Suggested use: who you're speaking to */
export type Audience = "believers" | "seekers" | "new believers" | "mature" | "mixed" | "children";

/** Suggested use: context of sharing */
export type Situation = "evangelism" | "teaching" | "comfort" | "correction" | "devotion" | "worship" | "counsel";

/** Suggested level of Bible knowledge for this topic */
export type KnowledgeLevel = "any" | "beginner" | "moderate" | "deeper";

export interface TopicCategory {
  id: string;
  title: string;
  description?: string;
  /** Use these verses when speaking to these audiences */
  audienceSuggestions?: Audience[];
  /** Use in these situations when discussing or spreading the word */
  situationSuggestions?: Situation[];
  /** Fits this level of Bible knowledge */
  knowledgeLevel?: KnowledgeLevel;
  verses: VerseEntry[];
}

/** All 24 topic categories with KJV verses (no redundancy, no omissions). */
import { topicsData } from "./topics-data";
export const topics = topicsData;

export function getTopic(id: string): TopicCategory | undefined {
  return topics.find((t) => t.id === id);
}

export function getAllVerses(): VerseEntry[] {
  return topics.flatMap((t) => t.verses);
}

export function getVerseById(id: string): VerseEntry | undefined {
  for (const topic of topics) {
    const verse = topic.verses.find((v) => v.id === id);
    if (verse) return verse;
  }
  return undefined;
}

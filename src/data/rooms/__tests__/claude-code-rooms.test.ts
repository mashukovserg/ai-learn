/**
 * Room-level guards for the two Claude Code rooms: `claude-code-agentic-loop`
 * and `claude-code-pro-workflow`.
 *
 * Both rooms were rebuilt on 2026-10-20 against the official Claude Code
 * documentation (v2.1.304). The generic suites (data-integrity, task-shapes)
 * cover ID sequencing and per-type shape for every room. Checked here is what
 * those cannot know: the chapter structure both rooms ship in both locales, that
 * every glossary term their theory references exists, the task-mix rule, and
 * that the facts the rebuild corrected stay corrected — the settings precedence
 * order in the sorting task, and that no task leans on material the theory no
 * longer contains (the old "22% auto-compact buffer" and the course-author
 * questions it could not answer).
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOMS = [
  { id: 'claude-code-agentic-loop', file: 'ClaudeCodeAgenticLoopTheory.tsx', chapters: 5 },
  { id: 'claude-code-pro-workflow', file: 'ClaudeCodeProWorkflowTheory.tsx', chapters: 6 },
] as const;

const source = (file: string) =>
  readFileSync(join(process.cwd(), 'src/components/theory', file), 'utf8');

describe.each(ROOMS)('room $id', ({ id, file, chapters }) => {
  const theory = source(file);

  it('is registered on the agent-coding path with tasks', () => {
    const room = ROOMS_METADATA.find(r => r.id === id);
    expect(room).toBeDefined();
    expect(room!.pathIds).toContain('agent-coding');
    expect(PATHS_METADATA.find(p => p.id === 'agent-coding')!.roomIds).toContain(id);
    expect(ROOM_TASKS[id].length).toBeGreaterThanOrEqual(10);
  });

  it(`ships ${chapters} numbered chapters in both locales`, () => {
    const expected = Array.from({ length: chapters }, (_, i) => i + 1);
    expect([...theory.matchAll(/'Глава (\d+):/g)].map(m => Number(m[1]))).toEqual(expected);
    expect([...theory.matchAll(/'Chapter (\d+):/g)].map(m => Number(m[1]))).toEqual(expected);
  });

  it('references only glossary terms that exist', () => {
    const ids = [...theory.matchAll(/<Term id="([^"]+)"/g)].map(m => m[1]);
    expect(ids.length).toBeGreaterThan(0);
    for (const termId of ids) {
      expect(GLOSSARY[termId], `<Term id="${termId}"> has no entry in GLOSSARY`).toBeDefined();
    }
  });

  it('satisfies the task mix rule and is not MCQ-heavy', () => {
    const types = ROOM_TASKS[id].map(t => t.type);
    expect(types.some(t => t === 'sorting' || t === 'mentor')).toBe(true);
    const mcq = types.filter(t => t === 'multiple-choice').length;
    expect(mcq / types.length).toBeLessThanOrEqual(0.4);
  });

  it('shows at least one terminal exhibit', () => {
    expect(theory).toContain('<Terminal');
  });

  it('no task leans on material the rebuilt theory dropped', () => {
    const text = JSON.stringify(ROOM_TASKS[id]);
    for (const stale of ['Andrew Brown', '22%', 'Goldilocks', 'CC Usage']) {
      expect(text, `task text still mentions "${stale}"`).not.toContain(stale);
    }
  });
});

describe('claude-code-pro-workflow settings precedence', () => {
  it('orders the sorting task managed → --settings → local → project → user', () => {
    const sorting = ROOM_TASKS['claude-code-pro-workflow'].find(t => t.type === 'sorting');
    const order = (sorting as { correctOrder: { en: string }[] }).correctOrder.map(i => i.en);
    expect(order).toEqual([
      "The organization's managed settings",
      'Command line (--settings)',
      'Local project (.claude/settings.local.json)',
      'Shared project (.claude/settings.json)',
      'User (~/.claude/settings.json)',
    ]);
  });
});

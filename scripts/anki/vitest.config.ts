import { defineConfig, mergeConfig } from 'vitest/config';
import root from '../../vitest.config';

// Same aliases as the root config, but only the dump "test" is included.
export default mergeConfig(
  root,
  defineConfig({
    test: { include: ['scripts/anki/dump-rooms.test.ts'] },
  }),
);

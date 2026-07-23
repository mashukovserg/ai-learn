import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    // Resolves the @/* alias from tsconfig.json so imports like @/data/rooms
    // work in tests. A plain alias replaces the vite-tsconfig-paths plugin,
    // which printed a deprecation warning on every run.
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  test: {
    environment: 'node',
    include: ['src/**/__tests__/**/*.test.ts', 'src/**/*.test.ts'],
    reporters: ['default'],
  },
});

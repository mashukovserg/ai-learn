import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "backend/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Agent worktrees are separate working copies (with their own .next output);
    // linting them duplicates every warning and fails check-all on generated code.
    ".claude/worktrees/**",
  ]),
]);

export default eslintConfig;

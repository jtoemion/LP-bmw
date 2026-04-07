# Bolt's Journal - Critical Learnings

## 2026-04-07 - ESLint config incompatibility
**Learning:** This repo uses `eslint.config.js` (flat config / ESLint v9+) but the `lint` script in package.json uses `--ext` flag which is only valid for legacy `.eslintrc` config. `npm run lint` fails due to this mismatch - it's a pre-existing issue, not caused by our changes.
**Action:** Use `npx vite build` or `npx tsc --noEmit` for verification instead of relying on the broken lint script.

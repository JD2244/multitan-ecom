# Development Guide

## Prerequisites
- Bun >= 1.0.0
- Node.js >= 18 (for compatibility)

## Setup
```bash
bun install
```

## Development
```bash
bun dev
```

## Code Quality Commands

### Type Checking
```bash
bun run typecheck
```

### Linting & Formatting
```bash
bun run lint        # Check only
bun run lint:fix    # Fix issues
bun run format      # Format all files
```

### Dead Code Detection
```bash
bun run knip
```

### Bundle Size Check
```bash
bun run size
```

## Git Commit Rules

This project uses Conventional Commits:

- `feat: add new feature`
- `fix: bug fix`
- `docs: documentation changes`
- `style: formatting, missing semicolons, etc.`
- `refactor: code refactoring`
- `test: adding tests`
- `chore: maintenance tasks`

### Pre-commit Checks
- Auto-formats code with Biome
- Checks for TypeScript errors
- Blocks commits with `any` type
- Blocks commits with `console.log`

### Pre-push Checks
- Full type check
- Full lint check
- Build verification

## Strict Rules Enforced

✅ No `any` type allowed
✅ No `console.log` in commits (use `console.warn` or `console.error`)
✅ All unused imports removed automatically
✅ Strict TypeScript checks enabled
✅ Auto-formatting on save
✅ Bundle size limits enforced
✅ Dead code detection

## Troubleshooting

### If Husky hooks don't work:
```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
chmod +x .husky/pre-push
```

### If Biome isn't found:
```bash
bunx @biomejs/biome --version
```

### To temporarily bypass hooks (emergency only):
```bash
git commit --no-verify
```

## Summary of What Gets Enforced

| Rule | Enforced By | When |
|------|-------------|------|
| No `any` type | Biome + TypeScript | Pre-commit |
| No `console.log` | Biome linter | Pre-commit |
| Auto-formatting | Biome formatter | Pre-commit |
| Unused imports removed | Biome organizeImports | Pre-commit |
| Conventional commits | Commitlint | Commit message |
| Type checking | TypeScript | Pre-push |
| Build success | Next.js build | Pre-push |
| Bundle size limits | size-limit | Pre-push |
| Dead code detection | Knip | Manual/CI |
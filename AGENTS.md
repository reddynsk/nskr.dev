# Agent Guidelines for nskr.me Portfolio

## Build & Development Commands

- **Development server**: `pnpm dev` (runs on port 1408)
- **Build**: `pnpm build`
- **Type checking**: `pnpm check-types`
- **Linting**: `pnpm lint`
- **Lint with fixes**: `pnpm lint:fix`
- **Format check**: `pnpm format:check`
- **Format and write**: `pnpm format:write`
- **Testing**: `pnpm test` (currently no tests configured)
- **Registry build**: `pnpm registry:build`

## Code Style Guidelines

### TypeScript & Imports

- Use strict TypeScript with consistent type imports (`import type`)
- Sort imports/exports with `simple-import-sort` plugin
- Use `@/*` path alias for src directory imports
- Import React components with `* as React from "react"`

### Formatting

- 2-space indentation, 80 character line width
- Double quotes, semicolons required
- ES5 trailing commas
- Tailwind CSS with `clsx`, `cn`, `cva` utility functions
- Use Prettier with Tailwind plugin for class sorting

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `PanelHeader`)
- **Hooks**: camelCase with `use` prefix (e.g., `useConfig`)
- **Files**: kebab-case (e.g., `panel-header.tsx`)
- **Types**: PascalCase with descriptive names
- **Constants**: UPPER_SNAKE_CASE

### Component Patterns

- Use class-variance-authority (cva) for component variants
- Forward refs properly with `React.forwardRef`
- Use Radix UI primitives for accessible components
- Export component and variants separately

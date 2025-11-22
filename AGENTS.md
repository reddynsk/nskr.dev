# Project Overview & Agent Guidelines

## Project Overview

**nskr.me** is a personal portfolio, blog, and component registry built for Narra Suryakoushik Reddy (Red). It serves as a showcase for design engineering work, a platform for sharing technical content, and a distribution hub for reusable UI components.

### Key Features
- **Portfolio**: Showcases projects, experience, and skills.
- **Blog**: MDX-powered blog with syntax highlighting and AI-friendly endpoints.
- **Component Registry**: A custom registry powered by `shadcn` CLI to distribute React components.
- **PWA**: Installable Progressive Web App.
- **SEO & AI**: Optimized for search engines and LLMs (`/llms.txt`).

## Tech Stack & Frameworks

### Core
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/)
- **Runtime**: Node.js >=18
- **Package Manager**: [pnpm](https://pnpm.io/)

### Styling & UI
- **CSS Engine**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **Icons**: `lucide-react`, `react-icons`
- **Animations**: `motion` (Framer Motion), `tw-animate-css`
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority` (cva)

### State & Data Fetching
- **State Management**: `jotai`
- **Data Fetching**: `swr`
- **Forms**: `react-hook-form` with `@hookform/resolvers` and `zod`

### Content & Markdown
- **MDX**: `next-mdx-remote`, `remark`, `rehype` ecosystem
- **Documentation**: `fumadocs-core`
- **Syntax Highlighting**: `shiki`, `rehype-pretty-code`

### Utilities
- **Date Handling**: `date-fns`, `dayjs`
- **Validation**: `zod`
- **Image Processing**: `sharp`

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Shared UI components (atoms, molecules).
- `src/features`: Feature-specific code (e.g., `blog`, `profile`) containing components, data, and logic.
- `src/registry`: Source code for the component registry.
- `src/lib` & `src/utils`: Helper functions and utilities.
- `src/hooks`: Custom React hooks.
- `src/config`: Site-wide configuration files.
- `src/scripts`: Build and maintenance scripts (e.g., registry generation).

---

## Agent Guidelines

### Build & Development Commands

- **Development server**: `pnpm dev` (runs on port 1408)
- **Build**: `pnpm build`
- **Type checking**: `pnpm check-types`
- **Linting**: `pnpm lint`
- **Lint with fixes**: `pnpm lint:fix`
- **Format check**: `pnpm format:check`
- **Format and write**: `pnpm format:write`
- **Testing**: `pnpm test` (currently no tests configured)
- **Registry build**: `pnpm registry:build`

### Code Style Guidelines

#### TypeScript & Imports

- Use strict TypeScript with consistent type imports (`import type`)
- Sort imports/exports with `simple-import-sort` plugin
- Use `@/*` path alias for src directory imports
- Import React components with `* as React from "react"`

#### Formatting

- 2-space indentation, 80 character line width
- Double quotes, semicolons required
- ES5 trailing commas
- Tailwind CSS with `clsx`, `cn`, `cva` utility functions
- Use Prettier with Tailwind plugin for class sorting

#### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `PanelHeader`)
- **Hooks**: camelCase with `use` prefix (e.g., `useConfig`)
- **Files**: kebab-case (e.g., `panel-header.tsx`)
- **Types**: PascalCase with descriptive names
- **Constants**: UPPER_SNAKE_CASE

#### Component Patterns

- Use class-variance-authority (cva) for component variants
- Forward refs properly with `React.forwardRef`
- Use Radix UI primitives for accessible components
- Export component and variants separately

 # me-portfolio Implementation Plan

 > **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

 **Goal:** Build and deploy a Bento/Apple-style personal open-source tools showcase site at `~/Friday/idea_workspace/me-portfolio`.

 **Architecture:** Static Next.js 14+ site using App Router, Tailwind CSS, shadcn/ui components, Framer Motion for light animations, and a hand-curated `data/projects.json` for content. Deployed to Vercel.

 **Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React, next-themes, Vercel.

 ---

 ## Task 1: Initialize Next.js Project with shadcn/ui

 **Files:**
- Create: entire project scaffold under `/Users/zhangyaolong.5/Friday/idea_workspace/me-portfolio`

 **Step 1: Run shadcn/ui init**

 Run:
```bash
cd /Users/zhangyaolong.5/Friday/idea_workspace/me-portfolio
npx shadcn@latest init --yes --template next --base-color stone
```

 Expected: Project scaffolded with `app/`, `components/`, `lib/`, `next.config.ts`, `tailwind.config.ts`, etc.

 **Step 2: Verify initial build**

 Run:
```bash
npm run build
```

 Expected: Build succeeds with no errors.

 **Step 3: Commit**

```bash
git add .
git commit -m "chore: initialize Next.js project with shadcn/ui"
```

 ---

 ## Task 2: Install Additional Dependencies

 **Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

 **Step 1: Install animation, theme, and icon libraries**

 Run:
```bash
cd /Users/zhangyaolong.5/Friday/idea_workspace/me-portfolio
npm install framer-motion next-themes lucide-react
```

 Expected: Dependencies installed and reflected in `package.json`.

 **Step 2: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add framer-motion, next-themes, lucide-react"
```

 ---

 ## Task 3: Configure Tailwind Theme and Global Styles

 **Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

 **Step 1: Update Tailwind config for Chinese-friendly font stack and custom colors**

 Modify `tailwind.config.ts` to extend theme with a `font-sans` stack:

```typescript
fontFamily: {
  sans: [
    '"PingFang SC"',
    '"Microsoft YaHei"',
    '"Noto Sans SC"',
    '"Hiragino Sans GB"',
    '"WenQuanYi Micro Hei"',
    'sans-serif',
  ],
}
```

 **Step 2: Refine globals.css for smooth scrolling and base styles**

 Ensure `app/globals.css` includes:

```css
html {
  scroll-behavior: smooth;
}

body {
  @apply antialiased;
}
```

 **Step 3: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "style: configure font stack and base styles"
```

 ---

 ## Task 4: Add Theme Provider and Dark Mode Toggle

 **Files:**
- Create: `app/providers.tsx`
- Create: `components/theme-toggle.tsx`
- Modify: `app/layout.tsx`

 **Step 1: Create theme provider wrapper**

 Create `app/providers.tsx`:

```tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

 **Step 2: Create theme toggle button**

 Create `components/theme-toggle.tsx` using `lucide-react` Sun/Moon icons and `next-themes`.

 **Step 3: Wire provider into layout**

 Modify `app/layout.tsx` to wrap children with `<Providers>`.

 **Step 4: Commit**

```bash
git add app/providers.tsx components/theme-toggle.tsx app/layout.tsx
git commit -m "feat: add dark mode support"
```

 ---

 ## Task 5: Create Project Data File

 **Files:**
- Create: `data/projects.json`

 **Step 1: Hand-curate project metadata**

 Create `data/projects.json` with entries for all projects in `~/Friday/idea_workspace/me`, including:
- `id`, `name`, `nameZh`, `description`, `category`, `tags`, `techStack`, `githubUrl`, `status`

 Categories: `automation`, `web`, `cli`, `skill`, `other`.

 **Step 2: Commit**

```bash
git add data/projects.json
git commit -m "data: add project metadata"
```

 ---

 ## Task 6: Create Project Types

 **Files:**
- Create: `types/project.ts`

 **Step 1: Define TypeScript interfaces**

 Create `types/project.ts`:

```typescript
export type ProjectCategory = 'automation' | 'web' | 'cli' | 'skill' | 'other';
export type ProjectStatus = 'maintained' | 'completed' | 'experimental';

export interface Project {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  techStack: string[];
  githubUrl: string;
  status: ProjectStatus;
}
```

 **Step 2: Commit**

```bash
git add types/project.ts
git commit -m "types: add Project types"
```

 ---

 ## Task 7: Create Layout with Metadata and Navigation

 **Files:**
- Modify: `app/layout.tsx`
- Create: `components/navbar.tsx`

 **Step 1: Update layout metadata**

 Set site title to "Friday" and description to Chinese personal brand copy.

 **Step 2: Build minimal navbar**

 Create `components/navbar.tsx` with:
- Site logo/name "Friday"
- Nav links: 项目、关于
- Theme toggle button

 **Step 3: Commit**

```bash
git add app/layout.tsx components/navbar.tsx
git commit -m "feat: add layout, navbar, and metadata"
```

 ---

 ## Task 8: Build Hero Section

 **Files:**
- Create: `components/sections/hero.tsx`

 **Step 1: Implement Hero**

 Requirements:
- Large heading "Friday"
- Subtitle: "开发者 / 工具创作者 / 开源项目集合"
- Two CTAs: "查看项目" (scroll to projects) and "GitHub" (external link)
- Clean, centered or left-aligned layout
- Responsive typography

 **Step 2: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "feat: add hero section"
```

 ---

 ## Task 9: Build Bento Stats Section

 **Files:**
- Create: `components/sections/stats.tsx`

 **Step 1: Compute stats from projects.json**

 Display:
- Total project count
- Skill count
- Category counts (e.g., 自动化工具 x 个)
- Top tech stack tags

 **Step 2: Render as Bento grid of cards**

 Use varying card sizes for visual rhythm. Light shadows, rounded corners.

 **Step 3: Commit**

```bash
git add components/sections/stats.tsx
git commit -m "feat: add bento stats section"
```

 ---

 ## Task 10: Build Project Filter Tabs

 **Files:**
- Create: `components/project-filter.tsx`

 **Step 1: Implement category filter buttons**

 Categories: 全部、自动化、Web、CLI、Skill、其他.

 **Step 2: Accept active filter and onChange props**

```tsx
interface ProjectFilterProps {
  active: ProjectCategory | 'all';
  onChange: (category: ProjectCategory | 'all') => void;
}
```

 **Step 3: Commit**

```bash
git add components/project-filter.tsx
git commit -m "feat: add project category filter"
```

 ---

 ## Task 11: Build Project Card Component

 **Files:**
- Create: `components/project-card.tsx`

 **Step 1: Implement card UI**

 Each card shows:
- Project name (English) and Chinese name if available
- One-line description
- Category badge
- Tech stack tags
- GitHub link icon
- Status badge

 **Step 2: Add hover animation**

 Use Framer Motion for subtle hover lift and shadow change.

 **Step 3: Commit**

```bash
git add components/project-card.tsx
git commit -m "feat: add project card component"
```

 ---

 ## Task 12: Build Projects Grid Section

 **Files:**
- Create: `components/sections/projects.tsx`

 **Step 1: Combine filter and cards**

- Read projects from `data/projects.json`
- Manage filter state
- Animate layout changes on filter

 **Step 2: Responsive grid**

- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

 **Step 3: Commit**

```bash
git add components/sections/projects.tsx
git commit -m "feat: add projects grid section"
```

 ---

 ## Task 13: Build About Section

 **Files:**
- Create: `components/sections/about.tsx`

 **Step 1: Implement About section**

- Short bio (2-3 sentences)
- Contact links (GitHub, email)
- Optional avatar placeholder

 **Step 2: Commit**

```bash
git add components/sections/about.tsx
git commit -m "feat: add about section"
```

 ---

 ## Task 14: Build Footer

 **Files:**
- Create: `components/footer.tsx`

 **Step 1: Implement footer**

- Copyright
- Built with Next.js / Vercel / shadcn
- Social/contact links

 **Step 2: Commit**

```bash
git add components/footer.tsx
git commit -m "feat: add footer"
```

 ---

 ## Task 15: Assemble Home Page

 **Files:**
- Modify: `app/page.tsx`

 **Step 1: Compose sections**

 Import and render:
1. Navbar
2. Hero
3. Stats
4. Projects
5. About
6. Footer

 **Step 2: Verify page renders**

 Run:
```bash
npm run dev
```

 Open `http://localhost:3000` and verify all sections appear.

 **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble home page"
```

 ---

 ## Task 16: Build and Verify Locally

 **Files:**
- Modify: `next.config.ts` if static export is needed

 **Step 1: Configure static export**

 In `next.config.ts`, set:

```typescript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
};
```

 **Step 2: Run production build**

```bash
npm run build
```

 Expected: Build completes with no errors.

 **Step 3: Verify dist output**

 Check that `dist/index.html` exists and all assets are present.

 **Step 4: Commit**

```bash
git add next.config.ts
git commit -m "chore: configure static export"
```

 ---

 ## Task 17: Deploy to Vercel

 **Files:**
- N/A (deployment step)

 **Step 1: Use Vercel plugin to deploy**

 Run:
```bash
cd /Users/zhangyaolong.5/Friday/idea_workspace/me-portfolio
vercel --prod
```

 Or use the Vercel MCP deploy tool.

 **Step 2: Verify deployment**

 Open the deployed URL and verify:
- Hero renders
- Theme toggle works
- Project filtering works
- All external links open correctly
- Mobile layout is acceptable

 **Step 3: Commit any final changes**

```bash
git add .
git commit -m "chore: deploy to vercel"
```

 ---

 ## Testing Checklist

- [ ] Build passes (`npm run build`)
- [ ] Dev server loads without errors
- [ ] Hero, Stats, Projects, About, Footer all render
- [ ] Dark/light mode toggle works
- [ ] Project category filtering works
- [ ] Responsive layout on mobile/tablet/desktop
- [ ] All GitHub links are valid
- [ ] Vercel deployment is live

 ---

 ## Notes

- Do not read files from `~/Friday/idea_workspace/me`; only use the curated `data/projects.json`.
- Keep animations subtle and performant.
- Prioritize static generation for fast Vercel deployment.

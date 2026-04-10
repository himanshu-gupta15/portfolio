## Copilot Instructions for Portfolio Monorepo

This workspace contains two main Next.js projects:

- **my-portfolio/**: Public-facing portfolio site (Next.js, app directory, TypeScript)
- **potfolio_admin/**: Admin dashboard for managing portfolio content (Next.js, app directory, TypeScript)

### Architecture & Structure

- Both projects use the Next.js App Router (`app/` directory) and TypeScript.
- Shared logic is not centralized; each project maintains its own models, controllers, and components.
- `my-portfolio/src/component/` and `potfolio_admin/components/` contain React UI components. Naming is PascalCase.
- Data for portfolio sections (e.g., LeetCode, projects) is stored in `my-portfolio/src/app/data/` as TypeScript modules.
- Admin-side business logic is in `potfolio_admin/controllers/` and API routes under `potfolio_admin/app/api/`.
- MongoDB models are in `potfolio_admin/models/` (e.g., `Project.ts`, `User.ts`).
- Cloudinary integration for media uploads is handled in `potfolio_admin/lib/cloudinary.ts`.

### Developer Workflows

- **Start dev server:** `npm run dev` (in either project root)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Styling:** Uses Tailwind CSS (see `postcss.config.mjs` and `globals.css`)
- **No custom test scripts** are present; add tests in `__tests__/` if needed.
- **Environment variables:** Managed via `.env.local` (not committed)

### Project-Specific Conventions

- Use TypeScript for all new code.
- Use functional React components and hooks.
- For 3D/visual effects, use `@react-three/fiber` (see `ThreeScene.tsx`, `Galaxy.tsx`).
- API routes in admin follow RESTful patterns (see `app/api/projects/route.ts`).
- Admin authentication uses NextAuth.js (see `app/api/auth/`).
- Use absolute imports where possible (configured in `tsconfig.json`).

### Integration & Data Flow

- Public site fetches data from static files or, if extended, from an API.
- Admin dashboard manages content via API routes, which interact with MongoDB and Cloudinary.
- No direct code sharing between projects; keep logic DRY within each project.

### Key Files & Directories

- `my-portfolio/src/app/page.tsx`: Main landing page
- `my-portfolio/src/app/data/`: Static data for portfolio
- `my-portfolio/src/component/`: UI and visual components
- `potfolio_admin/app/api/`: API endpoints for admin actions
- `potfolio_admin/controllers/`: Business logic for admin
- `potfolio_admin/models/`: Mongoose models
- `potfolio_admin/lib/cloudinary.ts`: Media upload integration

### Examples

- To add a new project: Update `my-portfolio/src/app/data/projects.ts` (public) or use the admin dashboard (admin, via API).
- To add a new admin route: Create a file in `potfolio_admin/app/api/` and corresponding controller/model logic.

---
For more details, see the respective `README.md` files in each project root.
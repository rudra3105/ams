# Association Management SaaS

Production-oriented multi-tenant Association Management SaaS built with Next.js App Router, TypeScript, Supabase/PostgreSQL, Prisma, TailwindCSS, Zod, and deployable to Vercel.

## Included Modules
- Dashboard (KPIs scaffold + chart-ready architecture)
- Companies (CRUD-ready validation + API layer scaffolding)
- Contacts
- Members
- Invoices & Payments
- Events
- Activity logs (schema + indexing)
- Settings (association-level config flags)
- Bulk import/export API scaffolding (CSV/XLSX ready hooks)

## Multi-Tenant & Roles
- `Association` root tenant table with tenant foreign keys across entities
- Roles enum: `SUPER_ADMIN`, `ASSOCIATION_ADMIN`, `COMPANY_ADMIN`, `MEMBER`
- Middleware entry point for route protection

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env.local
   ```
3. Generate Prisma client and migrate:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Seed demo data:
   ```bash
   npm run db:seed
   ```
5. Run app:
   ```bash
   npm run dev
   ```

## Vercel Deployment (One-Click Ready)
1. Import this repo into Vercel.
2. Set environment variables from `.env.example`.
3. Use Supabase hosted Postgres connection string as `DATABASE_URL`.
4. Deploy.

## Folder Structure
- `src/app`: route modules (dashboard, companies, members, invoices, events, imports, exports, settings)
- `src/app/api`: backend endpoints (health/import/export)
- `src/components/layout`: dashboard shell components
- `src/lib/db`: DB client setup
- `src/lib/validations`: Zod schemas
- `prisma`: full relational schema + seed script
- `supabase`: SQL helper files and policies location

## Notes
This codebase is structured for production growth. It contains core domain schema and app scaffolding in one delivery, with API and UI primitives ready for extending into full per-module transactional workflows.

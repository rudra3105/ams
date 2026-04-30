# Association Management SaaS

## Zero-Setup Local Run (No Manual DB Setup)

One command:

```bash
npm run setup
```

What it does automatically:
1. Starts a local PostgreSQL container via Docker Compose.
2. Creates/updates `.env.local` with local `DATABASE_URL`.
3. Installs npm dependencies.
4. Generates Prisma client.
5. Runs migrations.
6. Seeds demo data.

Then run:

```bash
npm run dev
```

## Manual Commands (optional)
- `npm run prisma:generate`
- `npm run prisma:migrate`
- `npm run db:seed`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Deploy on Vercel
For production, set Vercel environment variables from `.env.example` and point `DATABASE_URL` to managed Postgres/Supabase.

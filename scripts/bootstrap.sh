#!/usr/bin/env bash
set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required for zero-setup local database." >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose plugin is required." >&2
  exit 1
fi

if [ ! -f .env.local ]; then
  cp .env.example .env.local
fi

if ! grep -q '^DATABASE_URL=' .env.local; then
  echo 'DATABASE_URL=postgresql://ams:ams@localhost:54329/ams?schema=public' >> .env.local
fi

if grep -q 'db.supabase.co' .env.local; then
  sed -i 's#^DATABASE_URL=.*#DATABASE_URL=postgresql://ams:ams@localhost:54329/ams?schema=public#' .env.local
fi

docker compose up -d db

echo "Waiting for database to be healthy..."
for i in {1..40}; do
  if docker inspect --format='{{json .State.Health.Status}}' ams-postgres 2>/dev/null | grep -q 'healthy'; then
    break
  fi
  sleep 2
done

export $(grep -E '^(DATABASE_URL|NEXT_PUBLIC_SUPABASE_URL|NEXT_PUBLIC_SUPABASE_ANON_KEY|SUPABASE_SERVICE_ROLE_KEY)=' .env.local | xargs)

npm install
npm run prisma:generate
npx prisma migrate deploy || npm run prisma:migrate -- --name init
npm run db:seed || true

echo "✅ Bootstrap complete"
echo "Run: npm run dev"

# SolidITPro Platform

Full-stack SolidITPro IT + AI services platform.

## Included
- Public marketing website
- Full IT/AI service catalog
- Interactive Build Your Solution configurator
- Customer portal
- SolidITPro internal operations portal
- CRM, tickets, projects, quotes, billing, knowledge and approvals surfaces
- PostgreSQL/Prisma backend
- Service, assessment, lead, ticket and work-item APIs
- Paperclip-style specialized AI agent registry
- Risk 0–4 human approval policy
- Docker PostgreSQL + Redis

## Run
```bash
cp .env.example .env
docker compose up -d
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```
Open http://localhost:3000.

## Demo routes
- `/` public site
- `/services` service catalog
- `/ai-solutions` AI offerings
- `/build-your-solution` interactive configurator
- `/portal` customer portal
- `/admin` internal operations portal
- `/api/health` health check

## Production notes
The UI is usable in demo mode even if PostgreSQL is offline. Database-backed APIs become persistent after the Docker database is started and Prisma is pushed/seeded. Authentication is intentionally represented by a demo login screen in this build; before public production deployment, connect your chosen IdP (Microsoft Entra External ID/Auth.js/Clerk/etc.) and enforce tenant-aware server sessions in middleware and every write path.

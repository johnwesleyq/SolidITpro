# SolidITPro architecture

## Surfaces
- Public site and service marketplace
- Dynamic solution configurator
- Customer portal
- Internal operations portal
- REST endpoints

## Control plane
All inbound events normalize into WorkItem records. Routing assigns a specialized agent or human. Risk 0-2 can proceed according to policy; risk 3-4 requires explicit approval. Important output proceeds through QA before delivery.

## Agent organization
Operations Manager -> Sales, IT Support, Microsoft 365, Cybersecurity, Network, AI Solutions Architect, Automation, Project Manager, Documentation, QA, Security/Policy.

## Tenant model
Every customer-owned operational object carries organizationId. Production deployment should enable PostgreSQL RLS and set tenant context per authenticated request. AI retrieval and object storage must use the same tenant boundary.

## Next implementation slices
1. Auth + sessions + RLS tenant context
2. Admin CRUD for service catalog/discovery questions
3. Persist solution-builder submissions as leads/work items
4. CRM + quote/proposal flow
5. Ticket comments/time entries/SLA engine
6. Durable workflow queue + agent provider adapters
7. Knowledge ingestion/RAG with pgvector
8. Documents/object storage
9. Billing/subscriptions
10. Microsoft/Google/PSA/RMM/VoIP connectors

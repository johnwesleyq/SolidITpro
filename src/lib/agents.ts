export type RiskLevel=0|1|2|3|4;export const agents=[
{name:'AI Operations Manager',key:'ops-manager',role:'Classifies work, selects specialists, manages handoffs and escalations.'},
{name:'Sales Agent',key:'sales',role:'Lead analysis, discovery preparation, service matching and proposal support.'},
{name:'IT Support Agent',key:'support',role:'Ticket triage, knowledge retrieval, troubleshooting and response drafting.'},
{name:'Microsoft 365 Agent',key:'m365',role:'Microsoft tenant, identity, licensing and configuration guidance.'},
{name:'Cybersecurity Agent',key:'security',role:'Security posture review, alert analysis and remediation planning.'},
{name:'Network Agent',key:'network',role:'Connectivity troubleshooting, configuration analysis and documentation.'},
{name:'AI Solutions Architect',key:'ai-architect',role:'Workflow analysis, AI solution design and model/integration selection.'},
{name:'Automation Agent',key:'automation',role:'Workflow design, integration specification and execution validation.'},
{name:'Project Manager Agent',key:'pm',role:'Plans projects, tracks milestones and surfaces blockers.'},
{name:'Documentation Agent',key:'docs',role:'Creates SOPs, customer documentation and knowledge articles.'},
{name:'QA Agent',key:'qa',role:'Reviews important agent outputs before delivery.'},
{name:'Security / Policy Agent',key:'policy',role:'Checks permissions, policies, risk and approval requirements.'}
];
export const riskPolicy=(risk:RiskLevel)=>({requiresApproval:risk>=3,mode:risk===0?'auto-read':risk===1?'draft':risk===2?'policy-auto':risk===3?'human-approval':'explicit-authorized-approval'});
export function routeWork(type:string){const t=type.toLowerCase();if(t.includes('security'))return 'security';if(t.includes('network'))return 'network';if(t.includes('microsoft')||t.includes('365'))return 'm365';if(t.includes('automation'))return 'automation';if(t.includes('sales')||t.includes('lead'))return 'sales';if(t.includes('project'))return 'pm';if(t.includes('ai'))return 'ai-architect';return 'support'}
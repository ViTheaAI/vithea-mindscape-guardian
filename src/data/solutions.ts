export interface Solution {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  capabilities: string[];
  useCases: string[];
  technologies: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'intelligent-applications',
    title: 'Intelligent Applications',
    shortDescription:
      'Custom AI-powered applications designed for specific business and organizational needs.',
    longDescription:
      'We design and develop intelligent applications that integrate modern AI capabilities directly into your day-to-day operations. Rather than generic chatbots, we build purpose-driven software tools that assist employees, organize domain knowledge, and accelerate complex workflows.',
    capabilities: [
      'Intelligent domain assistants',
      'Context-aware knowledge query tools',
      'Document and text intelligence',
      'Custom business logic integration',
      'Responsive web & mobile interfaces'
    ],
    useCases: [
      'Automated inquiry triage & support routing',
      'Standard operating procedure assistance',
      'Contract & specification information lookup',
      'Multi-modal asset indexing'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vector Databases', 'Cloud Infrastructure']
  },
  {
    id: 'automation-systems',
    title: 'Automation Systems',
    shortDescription:
      'Software that reduces repetitive manual workflows and connects information across processes.',
    longDescription:
      'Manual data transcription, multi-system status copying, and repetitive operational chores drain valuable team focus. ViThea builds reliable automation engines and connectors that quietly orchestrate tasks between your existing software systems.',
    capabilities: [
      'End-to-end workflow automation',
      'Event-triggered notifications & reminders',
      'Data extraction from emails, files, and chats',
      'Cross-system synchronization',
      'Error handling and audit logging'
    ],
    useCases: [
      'Customer order & job milestone dispatch',
      'Automated invoice preparation and routing',
      'Inventory and status sync between tools',
      'Operational handoff notifications'
    ],
    technologies: ['Python', 'Node.js', 'PostgreSQL', 'Redis', 'Webhooks', 'REST APIs']
  },
  {
    id: 'data-powered-tools',
    title: 'Data-Powered Tools',
    shortDescription:
      'Applications that organize complex information and turn it into useful insights and operational visibility.',
    longDescription:
      'Valuable information is often trapped in disconnected databases, spreadsheets, and operational logs. We engineer clean data processing pipelines and intuitive dashboards that synthesize scattered metrics into actionable operational clarity.',
    capabilities: [
      'Data structuring & normalization pipelines',
      'Operational visibility dashboards',
      'Automated anomaly and trend detection',
      'Interactive filtering & scenario exploration',
      'Scheduled reporting & data exports'
    ],
    useCases: [
      'Daily operational performance monitoring',
      'Supply & service delivery tracking',
      'Resource utilization analysis',
      'Customer engagement & fulfillment trends'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Modern Charting Libraries', 'Tailwind CSS']
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    shortDescription:
      'Purpose-built software systems, internal tools, APIs, and integrations.',
    longDescription:
      'Off-the-shelf software often forces organizations to contort their processes into rigid templates. We build bespoke software systems, internal administration portals, and custom API architectures designed specifically around how your team actually works.',
    capabilities: [
      'Full-stack web application development',
      'Custom internal portals and administration tools',
      'RESTful & GraphQL API architecture',
      'Relational and document database design',
      'Secure authentication and permission layers'
    ],
    useCases: [
      'Bespoke client onboarding workflows',
      'Proprietary service coordination platforms',
      'Legacy database modern web wrappers',
      'Secure internal operations portals'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker']
  },
  {
    id: 'ai-prototypes-poc',
    title: 'AI Prototypes & Proofs of Concept',
    shortDescription:
      'Rapid technical validation for organizations exploring new AI opportunities.',
    longDescription:
      'Before committing extensive capital to full-scale technology deployments, organizations benefit from rapid, rigorous technical validation. We build functioning proofs of concept that test feasibility, assess accuracy, and demonstrate tangible utility in real-world conditions.',
    capabilities: [
      'Rapid functional prototyping',
      'Feasibility and accuracy benchmarking',
      'Data readiness assessment',
      'User experience interaction testing',
      'Architectural recommendations for scale'
    ],
    useCases: [
      'Testing AI document parsing viability',
      'Validating automated categorization on real data',
      'Building pilot applications for stakeholder review',
      'Assessing workflow latency and feasibility'
    ],
    technologies: ['Python', 'Jupyter/FastAPI', 'React', 'Cloud Services', 'Docker']
  },
  {
    id: 'ai-technology-integration',
    title: 'AI Technology Integration',
    shortDescription:
      'Integrating AI models and emerging technologies into existing or newly developed systems.',
    longDescription:
      'Deploying AI into existing software requires careful architecture, robust error boundaries, low latency, and predictable operational costs. We help organizations safely integrate state-of-the-art AI models and APIs into their current technology stack.',
    capabilities: [
      'API orchestration and middleware design',
      'Model evaluation and selection',
      'Latency optimization and response caching',
      'Fallback logic and graceful degradation',
      'Privacy and data boundary compliance'
    ],
    useCases: [
      'Adding intelligent search to existing portals',
      'Enabling automated document indexing in legacy CRMs',
      'Embedding contextual suggestions in user workflows',
      'Connecting private databases to analytical AI services'
    ],
    technologies: ['Python', 'TypeScript', 'FastAPI', 'Redis', 'REST/gRPC', 'Cloud Infrastructure']
  }
];

export interface TechnicalCapability {
  id: string;
  title: string;
  category: string;
  tag: string;
  summary: string;
  architectureHighlights: string[];
  technologies: string[];
  impactArea: string;
}

export const TECHNICAL_CAPABILITIES: TechnicalCapability[] = [
  {
    id: 'document-intelligence',
    title: 'Document Intelligence & Parsing Engines',
    category: 'Information Processing',
    tag: 'Computer Vision & OCR',
    summary:
      'Multi-format ingestion pipelines that transform complex documents, invoices, and contracts into validated, structured JSON schemas.',
    architectureHighlights: [
      'Multi-engine OCR with automated pre-processing and deskewing',
      'Contextual entity and key-value pair extraction',
      'Human-in-the-loop validation and confidence scoring',
      'Direct downstream ERP and database synchronization'
    ],
    technologies: ['Python', 'OCR Engines', 'FastAPI', 'PostgreSQL', 'Docker'],
    impactArea: 'Eliminates manual paperwork transcription and entry errors.'
  },
  {
    id: 'workflow-automation',
    title: 'Event-Driven Workflow Automation',
    category: 'Process Engineering',
    tag: 'Asynchronous Architecture',
    summary:
      'Resilient software connectors and queue workers that automate repetitive multi-step tasks across disconnected business applications.',
    architectureHighlights: [
      'Bi-directional webhook listeners with automated retries',
      'Dead-letter queuing and fault-tolerant message handling',
      'Automated status dispatch and calendar milestone synchronization',
      'Comprehensive audit logging and execution telemetry'
    ],
    technologies: ['TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'REST APIs'],
    impactArea: 'Streamlines cross-tool data flow and operational handoffs.'
  },
  {
    id: 'operational-data',
    title: 'Operational Visibility & Data Synthesis',
    category: 'Data Engineering',
    tag: 'Real-Time Telemetry',
    summary:
      'Unified data pipelines that normalize fragmented operational streams into clear metrics, trend analysis, and automated anomaly detection.',
    architectureHighlights: [
      'Multi-source telemetry ingestion and schema normalization',
      'Automated statistical anomaly and pattern detection',
      'High-performance aggregation for fast visual rendering',
      'Custom role-based operational dashboards'
    ],
    technologies: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    impactArea: 'Delivers real-time clarity over operational performance.'
  },
  {
    id: 'knowledge-retrieval',
    title: 'Domain Knowledge & Semantic Search',
    category: 'Applied AI',
    tag: 'Vector Embeddings',
    summary:
      'Context-aware knowledge query systems that enable instant natural-language search across private technical documentation and SOPs.',
    architectureHighlights: [
      'Document chunking and semantic vector indexing',
      'Hybrid keyword and vector retrieval with citation grounding',
      'Strict enterprise permission boundaries and private hosting',
      'Low-latency query interfaces for internal team operations'
    ],
    technologies: ['Python', 'Vector Search', 'FastAPI', 'Embeddings Models', 'TypeScript'],
    impactArea: 'Accelerates internal problem resolution with cited accuracy.'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Systems & Internal Tools',
    category: 'Software Engineering',
    tag: 'Full-Stack Architecture',
    summary:
      'Bespoke web applications, administrative portals, and microservices engineered specifically around organizational workflows.',
    architectureHighlights: [
      'Secure full-stack web application development',
      'Custom internal portals and operational administration views',
      'RESTful & event-driven API architecture',
      'Clean relational schema design and cloud staging'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    impactArea: 'Replaces rigid generic tools with purpose-built systems.'
  },
  {
    id: 'ai-integration',
    title: 'AI Model Integration & Rapid Prototyping',
    category: 'Technology Innovation',
    tag: 'Technical Validation',
    summary:
      'Rapid proof-of-concept development to validate technical feasibility, latency, and cost before committing to full-scale rollout.',
    architectureHighlights: [
      'Rapid prototype validation on real-world sample inputs',
      'Model evaluation, response caching, and latency optimization',
      'Fallback logic and graceful degradation architectures',
      'Data boundary and operational cost modeling'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'Cloud Services', 'Docker'],
    impactArea: 'Validates technical feasibility rapidly and cost-effectively.'
  }
];

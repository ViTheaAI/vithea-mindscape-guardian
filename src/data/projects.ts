export type ProjectStatus =
  | 'Delivered'
  | 'In Development'
  | 'Proof of Concept'
  | 'Exploration'
  | 'Internal R&D';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  statusColor: 'emerald' | 'blue' | 'purple' | 'amber' | 'slate';
  shortDescription: string;
  challenge: string;
  approach: string;
  technologies: string[];
  currentStatusDescription: string;
  capabilities: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'business-data-dashboard',
    slug: 'ai-powered-business-data-dashboard',
    title: 'AI-Powered Business Data Dashboard',
    category: 'Data & Operational Visibility',
    status: 'In Development',
    statusColor: 'blue',
    shortDescription:
      'A technology project exploring how operational information can be structured, analyzed, and presented through an intelligent dashboard for rapid operational insight.',
    challenge:
      'Growing businesses frequently accumulate fragmented operational records across disparate systems, spreadsheets, and third-party tools. This fragmentation makes it difficult for operators to maintain a coherent view of ongoing activities, detect bottlenecks, and identify emerging opportunities in real time.',
    approach:
      'ViThea designed an automated data transformation and synthesis pipeline that normalizes multi-source operational metrics into structured feeds. Machine learning routines evaluate trends, surface operational anomalies, and generate contextual summaries to support human decision-making.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Data Analytics & ML Models',
      'Tailwind CSS',
      'REST APIs'
    ],
    currentStatusDescription:
      'Currently in active development with interactive data pipeline prototypes and unified dashboard interfaces under iterative testing.',
    capabilities: [
      'Multi-source data normalization',
      'Operational anomaly detection',
      'Automated trend summaries',
      'Interactive visual decision support',
      'Role-based operational visibility'
    ],
    featured: true
  },
  {
    id: 'contractor-workflow-assistant',
    slug: 'contractor-workflow-assistant',
    title: 'Contractor Workflow Assistant',
    category: 'Workflow Automation',
    status: 'Proof of Concept',
    statusColor: 'purple',
    shortDescription:
      'An AI-powered workflow concept designed to help service professionals organize job information, payment tracking, scope changes, reminders, and related operational records.',
    challenge:
      'Independent contractors and field service teams frequently communicate with clients and subcontractors across text messages, quick emails, and voice memos. Crucial scope adjustments, scheduled deadlines, and payment milestones often get lost in scattered message threads.',
    approach:
      'Engineered an intelligent workflow assistant that extracts actionable project milestones, line items, and payment schedules directly from unstructured communications. The tool automates reminder dispatch and helps trade professionals keep records current without manual administrative overhead.',
    technologies: [
      'Python',
      'Natural Language Processing',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Event-Driven Webhooks',
      'Cloud Functions'
    ],
    currentStatusDescription:
      'Functional proof of concept demonstrating message-to-milestone extraction and milestone-triggered payment notifications.',
    capabilities: [
      'Message-to-data extraction',
      'Job timeline & milestone tracking',
      'Automated reminder notifications',
      'Scope change capture',
      'Operational record organization'
    ],
    featured: true
  },
  {
    id: 'receipt-document-processing',
    slug: 'intelligent-receipt-document-processing',
    title: 'Intelligent Receipt & Document Processing',
    category: 'Document Intelligence',
    status: 'In Development',
    statusColor: 'blue',
    shortDescription:
      'An AI application concept for extracting structured information from receipts and business documents with high parsing precision.',
    challenge:
      'Teams expend significant time manually transcribing data from physical receipts, digital invoices, and vendor bills into internal records. Variations in formatting, low image contrast, and non-standard layouts make conventional template parsing brittle.',
    approach:
      'Developed a multi-stage document processing engine pairing Optical Character Recognition (OCR) with contextual entity extraction. The system identifies vendor names, transaction dates, line items, and totals, outputting clean structured JSON ready for downstream business workflows.',
    technologies: [
      'Python',
      'OCR Engines',
      'Document Parsing Models',
      'FastAPI',
      'PostgreSQL',
      'S3 Object Storage',
      'Docker'
    ],
    currentStatusDescription:
      'Core parsing pipeline operational for common receipt formats and PDF invoices; currently undergoing precision calibration and integration testing.',
    capabilities: [
      'OCR & image pre-processing',
      'Contextual entity extraction',
      'Line-item classification',
      'Structured JSON output',
      'Human-in-the-loop review interface'
    ],
    featured: true
  },
  {
    id: 'operational-automation-connectors',
    slug: 'operational-automation-connectors',
    title: 'Operational Automation & System Connectors',
    category: 'Custom Software & Automation',
    status: 'Delivered',
    statusColor: 'emerald',
    shortDescription:
      'Purpose-built system connectors and event-driven automation bridges that eliminate repetitive manual data entry between business tools.',
    challenge:
      'Disconnected internal software required staff to manually copy status updates between internal project management boards, customer communications, and database records.',
    approach:
      'Engineered resilient API bridges, webhook listeners, and validation microservices to automatically synchronize events and notifications across platforms, complete with retry logic and detailed audit logging.',
    technologies: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Webhook Architecture'
    ],
    currentStatusDescription:
      'Delivered and operating in active production, orchestrating continuous event synchronization.',
    capabilities: [
      'Bi-directional webhook synchronization',
      'Data format normalization',
      'Automated error recovery',
      'Comprehensive audit logging'
    ],
    featured: false
  },
  {
    id: 'intelligent-knowledge-base',
    slug: 'internal-knowledge-retrieval-system',
    title: 'Internal Knowledge Retrieval System',
    category: 'AI Application Development',
    status: 'Exploration',
    statusColor: 'amber',
    shortDescription:
      'An exploration into semantic retrieval and context-aware querying for internal company documentation, technical guides, and standard operating procedures.',
    challenge:
      'Finding specific operational guidelines across dozens of manuals, wikis, and SOP documents is slow and often results in contradictory information reaching frontline staff.',
    approach:
      'Investigating vector embeddings and contextual chunking techniques to enable natural-language Q&A across private repositories, returning cited answers directly mapped to source documents.',
    technologies: [
      'Python',
      'Vector Search',
      'FastAPI',
      'Embeddings Models',
      'React'
    ],
    currentStatusDescription:
      'Early exploration and prototype testing on synthetic organizational document sets.',
    capabilities: [
      'Semantic document retrieval',
      'Citation-backed Q&A',
      'Document chunking & vector indexing',
      'Access permission boundaries'
    ],
    featured: false
  }
];

export const PROJECT_STATUSES: { label: ProjectStatus; description: string; color: string }[] = [
  { label: 'Delivered', description: 'Production deployment completed and validated.', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  { label: 'In Development', description: 'Actively being engineered and refined.', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { label: 'Proof of Concept', description: 'Technical feasibility and workflow validated.', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  { label: 'Exploration', description: 'Early-stage research, problem discovery, and prototyping.', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  { label: 'Internal R&D', description: 'ViThea proprietary research into emerging technologies.', color: 'bg-slate-500/10 text-slate-300 border-slate-500/20' }
];

export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    headline: 'Learn how the organization works and what the actual problem is.',
    description:
      'We never start with a pre-packaged technology looking for a problem. Instead, we examine your day-to-day operations, review existing workflows, map where friction occurs, and clarify what specific outcome would deliver practical value.',
    deliverables: [
      'Operational workflow mapping',
      'Friction point & bottleneck identification',
      'Problem definition & scope boundary',
      'Value assessment & feasibility criteria'
    ]
  },
  {
    number: '02',
    title: 'Explore',
    headline: 'Identify where AI, automation, software, or data technology may be useful.',
    description:
      'We systematically evaluate potential solutions. Not every problem requires AI; often, clean software architecture or deterministic automation is faster and more reliable. When AI is appropriate, we select the right approach for your specific data and constraints.',
    deliverables: [
      'Technology selection matrix',
      'AI vs. deterministic automation comparison',
      'Data availability & readiness audit',
      'Recommended architecture outline'
    ]
  },
  {
    number: '03',
    title: 'Design',
    headline: 'Define the technical approach, user experience, workflow, and architecture.',
    description:
      'We design both the human interface and the technical plumbing. We define clear data models, API boundaries, security parameters, and intuitive user experiences so that the technology feels natural to the people using it.',
    deliverables: [
      'System architecture specifications',
      'User workflow & interface wireframes',
      'Data flow & schema design',
      'Integration points with existing systems'
    ]
  },
  {
    number: '04',
    title: 'Build & Validate',
    headline: 'Develop prototypes or production solutions and test against real requirements.',
    description:
      'We build iteratively with clean, maintainable code. We test against real operational scenarios and data to verify accuracy, latency, resilience, and usability before widespread rollout.',
    deliverables: [
      'Functional prototype / production codebase',
      'Edge-case & accuracy validation',
      'User acceptance testing sessions',
      'Documentation and deployment staging'
    ]
  },
  {
    number: '05',
    title: 'Evolve',
    headline: 'Solutions continue to improve as feedback, technology, and organizational needs evolve.',
    description:
      'Technology is never static. We establish monitoring, feedback loops, and modular architecture so that solutions can easily incorporate improvements in AI models, adapt to organizational growth, and expand capabilities over time.',
    deliverables: [
      'Performance & operational monitoring',
      'User feedback integration loops',
      'Iterative capability expansion',
      'Ongoing technical maintenance'
    ]
  }
];

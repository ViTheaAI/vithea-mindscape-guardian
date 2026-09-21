export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const COMPANY_INFO = {
  name: 'ViThea',
  tagline: 'Practical technology. Intelligent possibilities.',
  email: 'contact@vithea.online',
  location: 'Toronto, Canada',
  region: 'North America'
};

export const FOOTER_SOLUTIONS = [
  { label: 'Intelligent Applications', href: '/solutions#intelligent-applications' },
  { label: 'Workflow Automation', href: '/solutions#automation-systems' },
  { label: 'Data-Powered Tools', href: '/solutions#data-powered-tools' },
  { label: 'Custom Software', href: '/solutions#custom-software' },
  { label: 'Document Intelligence', href: '/capabilities#document-intelligence' },
  { label: 'AI Model Integration', href: '/solutions#ai-technology-integration' }
];

export const FOOTER_COMPANY = [
  { label: 'About ViThea', href: '/about' },
  { label: 'Technical Capabilities', href: '/capabilities' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' }
];

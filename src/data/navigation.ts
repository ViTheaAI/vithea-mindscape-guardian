export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Selected Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_SOLUTIONS = [
  { label: 'Intelligent Applications', href: '/solutions#intelligent-applications' },
  { label: 'Workflow Automation', href: '/solutions#automation-systems' },
  { label: 'Data-Powered Tools', href: '/solutions#data-powered-tools' },
  { label: 'Custom Software', href: '/solutions#custom-software' },
  { label: 'AI Prototypes & POCs', href: '/solutions#ai-prototypes-poc' },
  { label: 'AI Technology Integration', href: '/solutions#ai-technology-integration' }
];

export const FOOTER_COMPANY = [
  { label: 'About ViThea', href: '/about' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Selected Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' }
];

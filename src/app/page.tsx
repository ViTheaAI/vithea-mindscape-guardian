import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { TransformationFlow } from '@/components/home/TransformationFlow';
import { SolutionsGrid } from '@/components/home/SolutionsGrid';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { FounderSection } from '@/components/home/FounderSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatWeDo />
      <TransformationFlow />
      <SolutionsGrid />
      <CapabilitiesSection />
      <ProcessSection />
      <FounderSection />
      <CTASection />
    </div>
  );
}

import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { TransformationFlow } from '@/components/home/TransformationFlow';
import { SolutionsGrid } from '@/components/home/SolutionsGrid';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { WorkShowcase } from '@/components/home/WorkShowcase';
import { ProcessSection } from '@/components/home/ProcessSection';
import { FounderSection } from '@/components/home/FounderSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. What We Do */}
      <WhatWeDo />

      {/* 3. How We Help (Transformation Flow) */}
      <TransformationFlow />

      {/* 4. Solutions (What We Build) */}
      <SolutionsGrid />

      {/* 5. Industries Flexibility */}
      <IndustriesSection />

      {/* 6. Selected Work */}
      <WorkShowcase />

      {/* 7. How We Work (5-Step Process) */}
      <ProcessSection />

      {/* 8. About ViThea & Founder */}
      <FounderSection />

      {/* 9. Final CTA */}
      <CTASection />
    </div>
  );
}

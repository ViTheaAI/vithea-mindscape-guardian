import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/navigation';
import { Scale, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use — ViThea',
  description:
    'ViThea Terms of Use governing website access, commercial service parameters, intellectual property, and Ontario/Canadian jurisdiction.'
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="py-12 border-b border-white/5 mb-10">
        <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Terms of Use
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-4">
          <span>Effective Date: September 21, 2026</span>
          <span>•</span>
          <span>Governing Law: Ontario, Canada</span>
        </p>
      </div>

      {/* Summary Box */}
      <div className="p-6 rounded-3xl bento-card border border-sky-500/20 mb-12 space-y-3">
        <div className="flex items-center gap-2.5 text-sky-400 font-semibold text-sm">
          <Scale className="w-5 h-5 shrink-0" />
          <span>Terms Overview</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          These Terms of Use govern your access to the website of ViThea (&ldquo;vithea.online&rdquo;). Formal technical consulting, software engineering, and AI development engagements are governed by separate, mutually executed client agreements.
        </p>
      </div>

      {/* Main Sections */}
      <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using this website, you confirm that you have read, understood, and agreed to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must immediately discontinue your use of this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            2. Scope of Services & Company Positioning
          </h2>
          <p>
            ViThea is an independent AI technology and software solutions company based in Toronto, Canada. We design and develop practical software, intelligent applications, and workflow automation systems.
          </p>
          <p>
            The content, technical demonstrations, and architecture overviews on this website are provided for informational and business evaluation purposes. Nothing on this website constitutes a formal binding commitment to engineer specific systems until formal project terms are agreed upon in writing.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            3. Commercial Engagements & Master Services Agreements
          </h2>
          <p>
            Submitting a project inquiry through this website or communicating with our team does not establish a vendor-client relationship. All technical services, deliverables, milestones, fee schedules, and performance metrics are governed exclusively by separate written agreements (such as a Master Services Agreement or Statement of Work) executed by authorized representatives.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            4. Confidentiality & Non-Disclosure
          </h2>
          <p>
            We take commercial confidentiality seriously:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
            <li>Any operational workflows, specifications, or proprietary business details shared through our project intake are treated as confidential.</li>
            <li>We do not disclose proprietary client details, operational metrics, or commercial contracts publicly.</li>
            <li>We are prepared to execute bilateral Non-Disclosure Agreements (NDAs) prior to in-depth technical discovery sessions.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            5. Intellectual Property Rights
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-400">
            <p>
              <strong className="text-white">A. Website IP:</strong> All content, source code, visual designs, SVGs, layout structures, and trademarks on vithea.online are the exclusive property of ViThea and protected under Canadian and international copyright and trademark laws.
            </p>
            <p>
              <strong className="text-white">B. Client IP:</strong> Under our commercial agreements, custom software code, data transformations, and dedicated systems developed specifically for a client become the client&apos;s property according to the terms of the applicable Statement of Work.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            6. Acceptable Use
          </h2>
          <p>When interacting with this website, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
            <li>Attempt to probe, scan, or breach the security of our infrastructure.</li>
            <li>Use automated scrapers, spiders, or extraction tools without express written permission.</li>
            <li>Submit fraudulent, deceptive, or malicious project inquiries.</li>
            <li>Interfere with the normal operation or latency of the web service.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            7. Disclaimer of Warranties
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            THIS WEBSITE AND ITS CONTENTS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. VITHEA DOES NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            8. Limitation of Liability
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW IN THE PROVINCE OF ONTARIO AND CANADA, IN NO EVENT SHALL VITHEA, ITS DIRECTORS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR ACCESS TO OR USE OF THIS WEBSITE.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            9. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms of Use and any disputes arising out of or related to this website shall be governed by and construed in accordance with the <strong>laws of the Province of Ontario and the federal laws of Canada</strong> applicable therein, without regard to conflict of law principles.
          </p>
          <p className="text-xs text-slate-400">
            You irrevocably consent to the exclusive jurisdiction of the courts located in the City of Toronto, Ontario, Canada, for any legal proceeding arising out of these Terms.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4 pt-6 border-t border-white/10">
          <h2 className="text-xl font-bold text-white">
            10. Contact Information
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            For inquiries regarding these Terms of Use or project collaborations, contact:
          </p>
          
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono">
            <div className="text-white font-bold">ViThea Technologies</div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-sky-400 hover:underline">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

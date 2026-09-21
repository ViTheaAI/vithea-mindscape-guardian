import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/navigation';
import { ShieldCheck, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — ViThea',
  description:
    'ViThea Privacy Policy governing information collection, data handling, PIPEDA compliance, and AI data governance.'
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="py-12 border-b border-white/5 mb-10">
        <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-4">
          <span>Effective Date: September 21, 2026</span>
          <span>•</span>
          <span>Jurisdiction: Ontario, Canada</span>
          <span>•</span>
          <span>PIPEDA Compliant</span>
        </p>
      </div>

      {/* Core Privacy Guarantee Callout */}
      <div className="p-6 rounded-3xl bento-card border border-sky-500/20 mb-12 space-y-3">
        <div className="flex items-center gap-2.5 text-sky-400 font-semibold text-sm">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <span>Core AI Data Governance & Confidentiality Pledge</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          ViThea enforces strict commercial boundaries: <strong className="text-white">We never use client proprietary business data, private documents, or workflow information to train public foundation models without explicit authorization.</strong> We do not sell, license, or monetize your personal or company data.
        </p>
      </div>

      {/* Main Sections */}
      <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>1. Introduction & Corporate Scope</span>
          </h2>
          <p>
            ViThea (&ldquo;ViThea&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating from Toronto, Ontario, Canada, is an independent AI technology and software solutions company. We provide practical software engineering, intelligent applications, and workflow automation systems for businesses, entrepreneurs, and organizations.
          </p>
          <p>
            This Privacy Policy sets out how we collect, process, store, and safeguard personal and operational information when you visit our website (<a href="https://vithea.online" className="text-sky-400 underline underline-offset-2">vithea.online</a>) or communicate with us regarding potential technical projects.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            2. Compliance with Canadian Privacy Legislation (PIPEDA)
          </h2>
          <p>
            We adhere strictly to the <em>Personal Information Protection and Electronic Documents Act</em> (<strong>PIPEDA</strong>) and applicable provincial privacy legislation in Ontario. In accordance with Canadian privacy standards, we collect, use, and disclose personal information only for purposes that a reasonable person would consider appropriate under the circumstances.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            3. Information We Collect
          </h2>
          <p>
            We limit collection strictly to information necessary for business evaluation and technical service delivery:
          </p>
          <div className="space-y-2.5 pl-2">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <strong className="text-white block mb-1">A. Project Inquiry & Contact Information</strong>
              <p className="text-xs text-slate-400">
                When you reach out via our contact form or email, we collect your name, organizational affiliation, business email address, project focus, operational challenges, timelines, and requirements you voluntarily provide.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <strong className="text-white block mb-1">B. Technical & Operational Logs</strong>
              <p className="text-xs text-slate-400">
                Standard server and network telemetry, including IP address, browser type, referral URLs, device characteristics, and interaction timestamps, collected solely for security verification and denial-of-service prevention.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            4. Strict AI Data Governance & Confidentiality
          </h2>
          <p>
            As an applied AI technology company, we recognize the sensitivity of corporate data, internal workflows, and technical architectures:
          </p>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Zero Public AI Training:</strong> Client project inputs, raw files, and proprietary datasets are never used to train or fine-tune public foundation models.</span>
            </li>
            <li className="flex items-start gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Isolated Environments:</strong> Client development and prototyping workflows execute within isolated containers with strict access boundaries.</span>
            </li>
            <li className="flex items-start gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Commercial Non-Disclosure:</strong> All conversations regarding client friction points, software architectures, and business operations are protected by professional non-disclosure obligations.</span>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            5. How We Use Collected Information
          </h2>
          <p>We process information solely for legitimate commercial purposes:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
            <li>Evaluating technical project feasibility, scope, and implementation timelines.</li>
            <li>Responding directly to business inquiries dispatched to {COMPANY_INFO.email}.</li>
            <li>Executing agreed-upon technical engagements under formal Master Services Agreements.</li>
            <li>Ensuring the stability, security, and operational availability of our infrastructure.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            6. Zero Selling or Commercial Sharing of Data
          </h2>
          <p>
            <strong>ViThea does not sell, rent, lease, or trade personal or proprietary information to data brokers, advertising networks, or third-party marketing companies.</strong>
          </p>
          <p className="text-xs text-slate-400">
            We only disclose information to trusted technical infrastructure providers (such as cloud hosting and secure email services) strictly necessary to operate our website and services, bound by confidentiality agreements.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            7. Data Security & Storage
          </h2>
          <p>
            We implement enterprise-grade administrative, technical, and physical safeguards. All web transmissions utilize modern TLS 1.3 encryption. Internal access to inquiry payloads is restricted to authorized engineering personnel on a strict need-to-know basis.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            8. Individual Privacy Rights
          </h2>
          <p>Under PIPEDA and applicable data protection regulations, you possess the right to:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
            <li>Request access to personal information we hold regarding your inquiry.</li>
            <li>Request the correction of inaccurate or incomplete information.</li>
            <li>Request the deletion or disposal of your contact records.</li>
            <li>Withdraw your consent to ongoing business communications at any time.</li>
          </ul>
          <p className="text-xs text-slate-400">
            To exercise any of these rights, contact us directly at <a href={`mailto:${COMPANY_INFO.email}`} className="text-sky-400 underline">{COMPANY_INFO.email}</a>.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">
            9. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect evolving technical capabilities, regulatory requirements, or legal guidance. The revised version will be indicated by an updated Effective Date.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4 pt-6 border-t border-white/10">
          <h2 className="text-xl font-bold text-white">
            10. Contacting Our Privacy Officer
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data governance practices, please contact us:
          </p>
          
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <strong className="text-white">Entity:</strong> ViThea Technologies
            </div>
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

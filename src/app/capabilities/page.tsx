import type { Metadata } from 'next';
import Link from 'next/link';
import { TECHNICAL_CAPABILITIES } from '@/data/capabilities';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Capabilities & Engineering Systems',
  description:
    'Explore ViThea technical capabilities: Document Intelligence, Event-Driven Workflow Automation, Operational Data Synthesis, and Domain Knowledge Retrieval.'
};

export default function CapabilitiesPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#040711] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              Engineering Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Technical Capabilities
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We design and construct production-ready software systems built around practical operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {TECHNICAL_CAPABILITIES.map((cap) => (
          <div
            key={cap.id}
            id={cap.id}
            className="rounded-3xl p-8 sm:p-10 bento-card scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20">
                  {cap.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {cap.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {cap.summary}
                </p>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-sky-300">
                  <strong>Impact:</strong> {cap.impactArea}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cap.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-black/40 text-slate-300 text-xs font-mono border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3 lg:pl-6 lg:border-l lg:border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Architectural Specifications
                </h3>
                <ul className="space-y-2.5">
                  {cap.architectureHighlights.map((item) => (
                    <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href={`/contact?type=${encodeURIComponent(cap.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    <span>Discuss implementation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Confidentiality Commitment Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Confidentiality Commitment:</strong> ViThea enforces strict commercial and data confidentiality. Specific client implementations, proprietary records, and business workflows are never published publicly.
          </p>
        </div>
      </section>
    </div>
  );
}

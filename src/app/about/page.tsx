import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'About ViThea — Independent AI Technology',
  description:
    'ViThea is an independent AI technology company based in Toronto, Canada, focused on developing practical software solutions, intelligent applications, and automation tools.'
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#040711] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              About ViThea
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Building Technology Around Possibilities.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              ViThea is an independent AI technology company developing practical software solutions, intelligent applications, and automation tools.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">
              Understanding the Problem Before Choosing the Tool
            </h2>
            <p>
              We believe the most useful technology begins with a real problem. Instead of forcing every challenge into the same product or framework, we explore the specific needs of each project and determine where AI, software, and emerging technologies can provide meaningful value.
            </p>
            <p>
              Our work spans different applications and industries. Across all of them, our goal is the same: build technology that is useful, thoughtful, and grounded in real-world needs.
            </p>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <h3 className="text-base font-bold text-white">Core Principles</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Practical Over Hype:</strong> We build tools that address tangible bottlenecks rather than speculative claims.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Human-Centered:</strong> AI should assist human capability, clarify information, and simplify decisions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Strict Confidentiality:</strong> Client data and proprietary business logic remain 100% confidential.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-7 bento-card space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0e1d2e] via-[#07111c] to-[#040911] border border-sky-400/30 flex items-center justify-center p-2.5 shadow-lg shadow-sky-950/50">
                    <Image
                      src="/vithea-mark.png"
                      alt="ViThea"
                      width={28}
                      height={28}
                      className="object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">ViThea Core Practice</h3>
                    <p className="text-xs text-sky-400 font-medium">Engineering & Applied AI</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  {COMPANY_INFO.location}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                <strong>ViThea brings together multidisciplinary capabilities across software architecture, operational data systems, and practical artificial intelligence to build dependable, production-grade solutions.</strong>
              </p>

              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Independent AI & Software Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

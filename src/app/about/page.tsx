import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ViThea — Technology Built Around Possibilities',
  description:
    'ViThea is an independent AI technology company focused on developing practical software solutions, intelligent applications, and automation tools.'
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#070b14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              Company Positioning & Philosophy
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Building Technology Around Possibilities.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              ViThea is an independent AI technology company focused on developing practical software solutions, intelligent applications, and automation tools.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-base text-slate-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Understanding the Problem Before Choosing the Tool
            </h2>
            <p>
              We believe the most useful technology begins with a real problem. Instead of forcing every challenge into the same product or framework, we explore the specific needs of each project and determine where AI, software, and emerging technologies can provide meaningful value.
            </p>
            <p>
              Our work spans different applications and industries. Some projects begin as experiments or proofs of concept; others evolve into custom software solutions or longer-term products. Across all of them, our goal is the same: build technology that is useful, thoughtful, and grounded in real-world needs.
            </p>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-white">Our Operating Principles</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Practical Over Hype:</strong> We build tools that address tangible bottlenecks rather than chasing speculative claims.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Human-Centered Engineering:</strong> AI should assist human capability, clarify information, and simplify decisions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Transparent Evolution:</strong> We are open about what is currently delivered, what is in development, and what is in exploration.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Founder Profile */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-8 bg-gradient-to-b from-[#0f182c] to-[#0a101f] border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/30 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold text-2xl">
                  IO
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Iris Ou</h3>
                  <p className="text-xs text-sky-400 font-medium">Founder & Technology Lead</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                <p>
                  <strong>Founded by Iris Ou, ViThea brings together a background in technology, data, business, and product development to explore practical applications of artificial intelligence.</strong>
                </p>
                <p className="text-slate-400 text-xs">
                  With a commitment to grounded software engineering and thoughtful application design, Iris directs ViThea&apos;s technical initiatives, ensuring that every project addresses measurable operational needs with durable architecture.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Technical & Domain Disciplines
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Applied Artificial Intelligence',
                    'Full-Stack Software Architecture',
                    'Data Transformation & Modeling',
                    'Product Strategy & Prototyping',
                    'Operational Workflow Design',
                    'System Integration & APIs'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-white/[0.03] text-slate-300 text-xs border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Independent AI & Software Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0d162a] via-[#0a101f] to-[#0d162a] border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Technology built around people, problems, and possibilities.
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Explore how ViThea can partner with your organization on your next AI or software initiative.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

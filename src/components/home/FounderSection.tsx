import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function FounderSection() {
  return (
    <section id="about" className="py-24 bg-[#080e1c] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Company Philosophy & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              About ViThea
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Building Technology Around Possibilities.
            </h2>
            <div className="space-y-4 text-base text-slate-300 leading-relaxed">
              <p>
                ViThea is an independent AI technology company focused on developing practical software solutions, intelligent applications, and automation tools.
              </p>
              <p>
                We believe the most useful technology begins with a real problem. Instead of forcing every challenge into the same product or framework, we explore the specific needs of each project and determine where AI, software, and emerging technologies can provide meaningful value.
              </p>
              <p className="text-sm text-slate-400">
                Our work spans different applications and industries. Some projects begin as experiments or proofs of concept; others evolve into custom software solutions or longer-term products. Across all of them, our goal is the same: build technology that is useful, thoughtful, and grounded in real-world needs.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Read our full company story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Founder Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-8 bg-gradient-to-b from-[#0f182c] to-[#0a101f] border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/30 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold text-xl">
                  IO
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Iris Ou</h3>
                  <p className="text-xs text-sky-400 font-medium">Founder & Technology Lead</p>
                </div>
              </div>

              <blockquote className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-sky-400/40 pl-4">
                &ldquo;Founded by Iris Ou, ViThea brings together a background in technology, data, business, and product development to explore practical applications of artificial intelligence.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Core Background Focus
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'AI & Machine Learning',
                    'Software Engineering',
                    'Data Architecture',
                    'Product Development',
                    'Business Operations',
                    'Workflow Automation'
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-white/[0.03] text-slate-300 text-xs border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Dedicated to building honest, durable technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

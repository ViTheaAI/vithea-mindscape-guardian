import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/navigation';

export function FounderSection() {
  return (
    <section id="about" className="py-24 bg-[#050914] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              About ViThea
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Building Technology Around Possibilities.
            </h2>
            <div className="space-y-3 text-base text-slate-300 leading-relaxed">
              <p>
                ViThea is an independent AI technology company developing practical software solutions, intelligent applications, and automation systems.
              </p>
              <p className="text-sm text-slate-400">
                We believe the most useful technology begins with a real problem. Instead of forcing rigid frameworks, we engineer custom software grounded in real-world operational needs.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Read company story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-7 bento-card space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/30 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold text-lg">
                    IO
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Iris Ou</h3>
                    <p className="text-xs text-sky-400 font-medium">Founder & Technology Lead</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  {COMPANY_INFO.location}
                </span>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-sky-400/40 pl-3.5">
                &ldquo;Founded by Iris Ou, ViThea brings together a background in technology, data, business, and product development to explore practical applications of artificial intelligence.&rdquo;
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {[
                  'AI & Machine Learning',
                  'Software Architecture',
                  'Data Pipelines',
                  'Product Strategy',
                  'Workflow Automation'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-white/[0.03] text-slate-400 text-xs border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Strict commercial & client confidentiality</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

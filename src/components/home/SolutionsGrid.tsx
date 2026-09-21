import React from 'react';
import Link from 'next/link';
import { SOLUTIONS } from '@/data/solutions';
import { ArrowUpRight, Cpu, Workflow, BarChart3, Code2, Lightbulb, GitMerge } from 'lucide-react';

export function SolutionsGrid() {
  const iconMap: Record<string, React.ElementType> = {
    'intelligent-applications': Cpu,
    'automation-systems': Workflow,
    'data-powered-tools': BarChart3,
    'custom-software': Code2,
    'ai-prototypes-poc': Lightbulb,
    'ai-technology-integration': GitMerge
  };

  return (
    <section id="solutions" className="py-24 bg-[#080e1c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Solutions Overview
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              What We Build
            </h2>
            <p className="text-base text-slate-300">
              Purpose-built technology solutions designed to address distinct operational friction points.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>View detailed solution specifications</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((sol) => {
            const Icon = iconMap[sol.id] || Cpu;
            return (
              <div
                key={sol.id}
                className="group relative rounded-2xl p-7 bg-gradient-to-b from-[#0d1527] to-[#080e1a] border border-white/5 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-200 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {sol.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Capabilities
                  </span>
                  <ul className="space-y-1 mb-5">
                    {sol.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-sky-400" />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/solutions#${sol.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    <span>Explore details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

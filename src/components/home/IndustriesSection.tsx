import React from 'react';
import { Building2, Briefcase, Store, GraduationCap, Laptop, Rocket, Network } from 'lucide-react';

export function IndustriesSection() {
  const industries = [
    { icon: Building2, title: 'Small & Medium Businesses', note: 'Operational streamlining & reporting' },
    { icon: Briefcase, title: 'Professional Services', note: 'Document indexing & administrative tools' },
    { icon: Store, title: 'Retail & Hospitality', note: 'Inventory sync & customer message parsing' },
    { icon: GraduationCap, title: 'Education & Organizations', note: 'Knowledge retrieval & workflow coordination' },
    { icon: Laptop, title: 'Technology Companies', note: 'API bridges & technical prototype acceleration' },
    { icon: Rocket, title: 'Entrepreneurship & Startups', note: 'Rapid AI proof-of-concept validation' },
    { icon: Network, title: 'Emerging Applications', note: 'Bespoke operational challenges' }
  ];

  return (
    <section className="py-20 bg-[#070b14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            Industry Flexibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Across Industries. Built Around the Problem.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every organization has different workflows, information, and challenges. Our approach is to understand the problem first, then determine where AI and technology can create practical value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white mb-1">{ind.title}</div>
                <div className="text-xs text-slate-400">{ind.note}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

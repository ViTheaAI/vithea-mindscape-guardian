import React from 'react';
import Link from 'next/link';
import { Bot, Workflow, Sparkles, ArrowRight } from 'lucide-react';

export function WhatWeDo() {
  const capabilities = [
    {
      icon: Bot,
      title: 'AI Application Development',
      description:
        'Building intelligent applications and AI-powered tools designed around specific use cases and real-world needs.',
      clientValue: 'Turn scattered operational knowledge into instant, cited answers and eliminate hours of manual document review.',
      examples: [
        'Domain assistants',
        'Document intelligence',
        'Context-aware search',
        'Custom internal tools',
        'AI-enabled software'
      ],
      href: '/solutions#intelligent-applications'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description:
        'Turning repetitive manual processes into streamlined, software-driven workflows.',
      clientValue: 'Connect fragmented software and eliminate error-prone copy-pasting across tools, spreadsheets, and emails.',
      examples: [
        'Process automation',
        'Information extraction',
        'Cross-system synchronization',
        'Task & status dispatch',
        'API & webhook pipelines'
      ],
      href: '/solutions#automation-systems'
    },
    {
      icon: Sparkles,
      title: 'AI & Technology Innovation',
      description:
        'Exploring emerging technologies and turning promising ideas into practical prototypes, systems, and applications.',
      clientValue: 'Validate feasibility and ROI with working technical proofs of concept in weeks before committing large capital.',
      examples: [
        'AI model integration',
        'Working prototypes (POCs)',
        'Technical feasibility audits',
        'Latency & cost optimization',
        'Emerging AI technology pilots'
      ],
      href: '/solutions#ai-prototypes-poc'
    }
  ];

  return (
    <section className="py-24 bg-[#080e1c] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Technology Built Around Real Problems.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We combine AI, software engineering, and emerging technologies to eliminate operational friction and deliver measurable value for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group relative rounded-2xl p-8 bg-gradient-to-b from-[#0e1629] to-[#0a101e] border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-200 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {cap.description}
                  </p>

                  {/* Concrete Client Benefit Callout */}
                  <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/20 mb-6">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-sky-400 font-bold block mb-1">
                      Business Value
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {cap.clientValue}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="pt-5 border-t border-white/5 mb-6">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-3">
                      Selected Focus
                    </span>
                    <ul className="space-y-1.5">
                      {cap.examples.map((item) => (
                        <li key={item} className="text-xs text-slate-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

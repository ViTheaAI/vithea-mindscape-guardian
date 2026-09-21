'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/projects';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProjectModal } from '@/components/work/ProjectModal';
import { ArrowUpRight, ArrowRight, Layers, Cpu, Filter } from 'lucide-react';

export function WorkShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'In Development', 'Proof of Concept', 'Delivered'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.status === activeFilter);

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#060a14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Technical Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A selection of projects and technology explorations that illustrate how ViThea applies AI and software to real-world problems. We maintain transparent status indicators across all technical initiatives.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors whitespace-nowrap"
          >
            <span>Browse complete repository</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Toolbar (Scale AI & Quantiphi Style) */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Filter by status:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setActiveFilter(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                activeFilter === opt
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl p-7 sm:p-9 bento-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Challenge & Approach Split Blocks */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-sky-400" />
                      The Friction Point
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/20 space-y-1">
                    <div className="text-[11px] font-mono font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-sky-400" />
                      ViThea Approach
                    </div>
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 text-xs font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-white/[0.02] text-slate-400 text-xs font-mono">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>Inspect Case Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Status: {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Detail Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}

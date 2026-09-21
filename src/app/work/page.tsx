'use client';

import React, { useState } from 'react';
import { PROJECTS, PROJECT_STATUSES, Project } from '@/data/projects';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProjectModal } from '@/components/work/ProjectModal';
import { ArrowRight, Filter, Layers, Clock } from 'lucide-react';
import Link from 'next/link';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const statuses = ['All', 'Delivered', 'In Development', 'Proof of Concept', 'Exploration'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.status === activeFilter);

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#070b14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              Selected Work & Explorations
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Selected Work
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A selection of projects and technology explorations that illustrate how ViThea applies AI and software to real-world problems. We maintain transparent status indicators across all technical initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Status Legend */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <span className="text-xs text-slate-500 font-medium mr-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              Filter by status:
            </span>
            {statuses.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setActiveFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeFilter === st
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400">
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-8 bg-gradient-to-b from-[#0e1629] to-[#09101f] border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-sky-400" />
                      The Challenge
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-3">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-sky-400" />
                      Current Status
                    </div>
                    <p className="text-xs text-slate-400">
                      {project.currentStatusDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 text-[11px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </section>

      {/* Transparent Status Definition Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-white/5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Project Status Definitions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROJECT_STATUSES.map((st) => (
            <div key={st.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <StatusBadge status={st.label} className="mb-2" />
              <p className="text-xs text-slate-400 mt-2">
                {st.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Have an AI application or workflow you would like to explore?
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          We can evaluate feasibility, build prototypes, or engineer production solutions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-md"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

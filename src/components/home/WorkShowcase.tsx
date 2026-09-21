'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/projects';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProjectModal } from '@/components/work/ProjectModal';
import { ArrowUpRight, ArrowRight, Layers } from 'lucide-react';

export function WorkShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 bg-[#080e1c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Portfolio & Explorations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Selected Work
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A selection of projects and technology explorations that illustrate how ViThea applies AI and software to real-world problems.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>Browse all work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl p-8 bg-gradient-to-b from-[#0e1629] to-[#09101f] border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Challenge snippet */}
                <div className="mb-6 p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-sky-400" />
                    Problem Addressed
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {project.challenge}
                  </p>
                </div>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 text-[11px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 text-[11px] font-mono">
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
                    <span>View Case Details</span>
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

        {/* Modal for project details */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}

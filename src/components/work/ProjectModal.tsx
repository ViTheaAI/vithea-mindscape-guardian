'use client';

import React from 'react';
import { Project } from '@/data/projects';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { X, CheckCircle2, Layers, Cpu, Clock } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0d1527] border border-white/15 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                {project.category}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              {project.shortDescription}
            </p>
          </div>

          <div className="space-y-4 pt-2 border-t border-white/10">
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                The Challenge
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-lg border border-white/5">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1.5 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                ViThea Approach
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-lg border border-white/5">
                {project.approach}
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1.5 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                Current Status & Progress
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-lg border border-white/5">
                {project.currentStatusDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Technologies Utilized
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Core Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.capabilities.map((cap) => (
                  <li key={cap} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

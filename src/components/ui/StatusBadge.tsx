import React from 'react';
import { ProjectStatus } from '@/data/projects';

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const styles: Record<ProjectStatus, { bg: string; dot: string }> = {
    'Delivered': {
      bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dot: 'bg-emerald-400'
    },
    'In Development': {
      bg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      dot: 'bg-sky-400'
    },
    'Proof of Concept': {
      bg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      dot: 'bg-purple-400'
    },
    'Exploration': {
      bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      dot: 'bg-amber-400'
    },
    'Internal R&D': {
      bg: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
      dot: 'bg-slate-400'
    }
  };

  const current = styles[status] || styles['Exploration'];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${current.bg} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot} animate-pulse`} />
      {status}
    </span>
  );
}

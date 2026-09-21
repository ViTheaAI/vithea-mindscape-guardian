import React from 'react';

export type StatusType =
  | 'Active'
  | 'Production'
  | 'In Development'
  | 'Validated'
  | 'Architecture';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono border bg-sky-500/10 text-sky-400 border-sky-500/20 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
      {status}
    </span>
  );
}

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-sky-500/30 flex items-center justify-center shadow-lg shadow-sky-950/40 group-hover:border-sky-400/50 transition-all duration-300">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          {/* Stylized geometric V + Node path */}
          <path
            d="M6 8L16 26L26 8"
            stroke="url(#vithea-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 12H21"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="16" cy="12" r="2" fill="#38BDF8" />
          <circle cx="6" cy="8" r="1.5" fill="#93C5FD" />
          <circle cx="26" cy="8" r="1.5" fill="#93C5FD" />
          <circle cx="16" cy="26" r="2" fill="#60A5FA" />
          <defs>
            <linearGradient id="vithea-gradient" x1="6" y1="8" x2="26" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors">
          ViThea
        </span>
        {showTagline && (
          <span className="text-[11px] tracking-wider uppercase text-slate-400 font-medium -mt-1">
            AI & Software
          </span>
        )}
      </div>
    </Link>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0e1d2e] via-[#07111c] to-[#040911] border border-sky-500/30 flex items-center justify-center shadow-lg shadow-sky-950/50 group-hover:border-sky-400/60 transition-all duration-300">
        <Image
          src="/vithea-mark.png"
          alt="ViThea Logo"
          width={26}
          height={26}
          priority
          className="object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] group-hover:scale-105 transition-transform duration-300"
        />
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

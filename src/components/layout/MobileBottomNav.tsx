'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, Cpu, Workflow, MessageSquare } from 'lucide-react';

interface NavTab {
  label: string;
  href: string;
  icon: React.ElementType;
  isSpecial?: boolean;
}

const TABS: NavTab[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Solutions', href: '/solutions', icon: Layers },
  { label: 'Capabilities', href: '/capabilities', icon: Cpu },
  { label: 'Process', href: '/how-we-work', icon: Workflow },
  { label: 'Inquire', href: '/contact', icon: MessageSquare, isSpecial: true }
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050914]/92 backdrop-blur-2xl border-t border-white/10 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)] shadow-[0_-8px_24px_rgba(0,0,0,0.6)] transition-all"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          if (tab.isSpecial) {
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center justify-center -mt-3.5 group focus:outline-none"
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                    isActive
                      ? 'bg-sky-400 text-slate-950 shadow-sky-400/40 scale-105'
                      : 'bg-gradient-to-br from-sky-500 to-blue-600 text-slate-950 shadow-sky-500/25 group-active:scale-95'
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span
                  className={`text-[10px] font-medium tracking-tight mt-1 transition-colors ${
                    isActive ? 'text-sky-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 ${
                isActive ? 'text-sky-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 stroke-[2.2]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400 drop-shadow-[0_0_4px_rgba(56,189,248,0.8)]" />
                )}
              </div>
              <span
                className={`text-[10px] tracking-tight mt-1 transition-colors ${
                  isActive ? 'font-bold text-white' : 'font-medium'
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

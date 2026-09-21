import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { FOOTER_SOLUTIONS, FOOTER_COMPANY } from '@/data/navigation';
import { ArrowUpRight, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Logo showTagline={false} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              ViThea is an independent AI technology company developing practical software solutions, intelligent applications, and automation tools for businesses and organizations.
            </p>
            <p className="text-xs text-slate-500 italic">
              Technology built around people, problems, and possibilities.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-sky-400 hover:text-sky-300"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Discuss a project with our team</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Positioning statement */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Capability
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We focus on understanding operational challenges first, applying AI and engineering where it delivers practical value.
            </p>
            <div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-[11px] text-slate-400 block font-medium">Independent Company</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Software & AI Engineering</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} ViThea. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

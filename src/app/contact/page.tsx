import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Start a Project — Contact ViThea',
  description:
    'Have a problem worth solving? Tell us what you are trying to build, automate, improve, or explore. ViThea evaluates whether AI or software can provide a practical solution.'
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#070b14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Have a Problem Worth Solving?
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us what you&apos;re trying to build, automate, improve, or explore. We&apos;ll help determine whether AI or software can provide a practical solution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Context */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Context & Guidance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                What to expect when you reach out
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We review every project inquiry with an engineering-first lens. We examine your operational context, existing tools, and desired outcomes to determine if there is a practical technical solution.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Strict Confidentiality</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Your process details and business ideas remain completely confidential.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Direct Technical Evaluation</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    You talk directly with engineers who understand feasibility, cost, and architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0d1629] to-[#080d1a] border border-white/10 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Not sure where to start?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                You don&apos;t need a detailed technical spec. Just describe your daily friction points or the manual chore that slows your team down.
              </p>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Learn about our 5-step methodology</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

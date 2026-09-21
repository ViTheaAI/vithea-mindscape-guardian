import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Start a Project — Contact ViThea',
  description:
    'Have a problem worth solving? Inquiries sent directly to contact@vithea.online. ViThea is based in Toronto, Canada.'
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#040711] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Have a Problem Worth Solving?
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us what you&apos;re trying to build, automate, improve, or explore.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                Direct Engineering Collaboration
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We review every project inquiry with an engineering-first lens to determine feasibility and deliver practical software solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">Inquiry Email</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs text-sky-400 hover:text-sky-300 font-mono"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">Headquarters</h3>
                  <p className="text-xs text-slate-400">{COMPANY_INFO.location}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">Confidentiality Assured</h3>
                  <p className="text-xs text-slate-400">All discussions and data remain strictly confidential.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}

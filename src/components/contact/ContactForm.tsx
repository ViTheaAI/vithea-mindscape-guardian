'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, Copy, Check, Mail, ExternalLink, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '@/data/navigation';

const PROJECT_TYPES = [
  'AI Application Development',
  'Workflow Automation',
  'Document Intelligence',
  'Data-Powered Tools',
  'Custom Software / APIs',
  'Proof of Concept / Prototype',
  'Other'
];

function getInitialProjectType(requestedType: string | null): string {
  if (!requestedType) return 'AI Application Development';
  const match = PROJECT_TYPES.find((pt) =>
    pt.toLowerCase().includes(requestedType.toLowerCase()) ||
    requestedType.toLowerCase().includes(pt.toLowerCase())
  );
  return match || requestedType;
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get('type');

  const [formState, setFormState] = useState(() => ({
    name: '',
    company: '',
    email: '',
    projectType: getInitialProjectType(requestedType),
    description: '',
    timeline: '1-3 Months'
  }));

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInquiry, setCopiedInquiry] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const formattedInquiryText = `Name: ${formState.name}
Company: ${formState.company || 'Not specified'}
Email: ${formState.email}
Project Focus: ${formState.projectType}
Timeline: ${formState.timeline}

Project Details:
${formState.description}`;

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(
      `To: ${COMPANY_INFO.email}\nSubject: [Project Inquiry] ${formState.projectType} - ${formState.name}\n\n${formattedInquiryText}`
    );
    setCopiedInquiry(true);
    setTimeout(() => setCopiedInquiry(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`[Project Inquiry] ${formState.projectType} - ${formState.name}`);
    const body = encodeURIComponent(formattedInquiryText);
    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoUrl;
    } catch {
      // Handled in submitted UI
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      {/* Quick Direct Email Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/30 to-[#0c1426] border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <Mail className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Direct Email:</span>
          <strong className="text-white font-mono">{COMPANY_INFO.email}</strong>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors border border-white/10"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
          </button>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-colors"
          >
            <span>Send Email</span>
          </a>
        </div>
      </div>

      {submitted ? (
        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0d1629] to-[#080d19] border border-sky-500/30 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Inquiry Formatted & Ready</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been prepared for <span className="text-sky-400 font-mono font-semibold">{COMPANY_INFO.email}</span>.
            </p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              If your email application did not launch automatically, you can open it directly or copy the full formatted text below.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                `[Project Inquiry] ${formState.projectType} - ${formState.name}`
              )}&body=${encodeURIComponent(formattedInquiryText)}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-all shadow-md"
            >
              <span>Launch Email Client</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleCopyInquiry}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-colors"
            >
              {copiedInquiry ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Inquiry Details Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Inquiry Text</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-4 border-t border-white/5">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-300 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Submit another message or edit details</span>
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-3xl bento-card space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Name <span className="text-sky-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Iris Smith"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                placeholder="Company Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email Address <span className="text-sky-400">*</span>
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Project Focus <span className="text-sky-400">*</span>
              </label>
              <select
                value={formState.projectType}
                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
              >
                {PROJECT_TYPES.map((pt) => (
                  <option key={pt} value={pt} className="bg-slate-900 text-white">
                    {pt}
                  </option>
                ))}
                {!PROJECT_TYPES.includes(formState.projectType) && (
                  <option value={formState.projectType} className="bg-slate-900 text-white">
                    {formState.projectType}
                  </option>
                )}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Project Description <span className="text-sky-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formState.description}
              onChange={(e) => setFormState({ ...formState, description: e.target.value })}
              placeholder="Tell us about the workflow bottleneck you are facing, or the software/AI system you would like to build..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[11px] text-slate-400 font-mono">
              Inquiries dispatched directly to {COMPANY_INFO.email}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-all shadow-md disabled:opacity-50 hover:-translate-y-0.5"
            >
              {isSubmitting ? 'Preparing...' : 'Send Inquiry'}
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="p-8 rounded-3xl bento-card text-center text-xs text-slate-400">
          Loading contact form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}

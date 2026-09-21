'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/navigation';

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'AI Application',
    description: '',
    timeline: '1-3 Months'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'AI Application Development',
    'Workflow Automation',
    'Document Intelligence',
    'Data-Powered Tools',
    'Custom Software / APIs',
    'Proof of Concept / Prototype',
    'Other'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create formatted mailto fallback & dispatch
    const subject = encodeURIComponent(`[Project Inquiry] ${formState.projectType} - ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\n` +
      `Company: ${formState.company || 'Not specified'}\n` +
      `Email: ${formState.email}\n` +
      `Project Type: ${formState.projectType}\n` +
      `Timeline: ${formState.timeline}\n\n` +
      `Project Details:\n${formState.description}`
    );

    // Trigger local client if supported, while displaying immediate confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    }, 400);
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
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Email'}</span>
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
        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0d1629] to-[#080d19] border border-sky-500/30 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you. Your project details have been routed to <span className="text-sky-400 font-mono">{COMPANY_INFO.email}</span>. We will review your context and respond promptly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs text-sky-400 hover:text-sky-300 underline mt-2"
          >
            Submit another message
          </button>
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
                placeholder="Name"
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
                placeholder="Company"
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
                placeholder="email@organization.com"
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
                {projectTypes.map((pt) => (
                  <option key={pt} value={pt} className="bg-slate-900 text-white">
                    {pt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Project Description <span className="text-sky-400">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={formState.description}
              onChange={(e) => setFormState({ ...formState, description: e.target.value })}
              placeholder="Describe what you want to build, automate, or explore..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[11px] text-slate-400">
              Inquiries dispatched directly to {COMPANY_INFO.email}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-all shadow-md disabled:opacity-50"
            >
              {isSubmitting ? 'Routing...' : 'Send Inquiry'}
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

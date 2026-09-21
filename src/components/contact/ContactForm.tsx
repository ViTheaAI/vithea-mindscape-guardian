'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'AI Application',
    industry: '',
    projectDescription: '',
    currentChallenge: '',
    desiredOutcome: '',
    timeline: '1-3 Months',
    budgetRange: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'AI Application',
    'Workflow Automation',
    'Custom Software',
    'Data & Analytics',
    'AI Integration',
    'Proof of Concept',
    'Technical Development',
    'Other'
  ];

  const timelines = [
    'Immediate (Next few weeks)',
    '1-3 Months',
    '3-6 Months',
    'Exploration / Planning Stage'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable project inquiry intake
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#0d1629] to-[#080d19] border border-sky-500/30 text-center space-y-5 animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Project Inquiry Received</h3>
        <p className="text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          Thanks for reaching out. We&apos;ll review your project details and get back to you.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline"
          >
            Submit another project inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0e162a] to-[#09101f] border border-white/10 shadow-2xl space-y-6"
    >
      <div className="border-b border-white/5 pb-4">
        <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
        <p className="text-xs text-slate-400 mt-1">
          Tell us what you&apos;re trying to build, automate, improve, or explore.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Your Name <span className="text-sky-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="Jane Doe"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            value={formState.company}
            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
            placeholder="Acme Inc."
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Email Address <span className="text-sky-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="jane@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Project Type <span className="text-sky-400">*</span>
          </label>
          <select
            value={formState.projectType}
            onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          >
            {projectTypes.map((pt) => (
              <option key={pt} value={pt} className="bg-slate-900 text-white">
                {pt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Industry / Domain
          </label>
          <input
            type="text"
            value={formState.industry}
            onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
            placeholder="e.g. Field Services, Retail, Logistics, Education"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Estimated Timeline
          </label>
          <select
            value={formState.timeline}
            onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          >
            {timelines.map((tl) => (
              <option key={tl} value={tl} className="bg-slate-900 text-white">
                {tl}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          Project Description <span className="text-sky-400">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={formState.projectDescription}
          onChange={(e) => setFormState({ ...formState, projectDescription: e.target.value })}
          placeholder="Briefly describe what you are aiming to build or achieve..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Current Challenge / Friction Point
          </label>
          <textarea
            rows={2}
            value={formState.currentChallenge}
            onChange={(e) => setFormState({ ...formState, currentChallenge: e.target.value })}
            placeholder="Where is the process getting slowed down or disorganized?"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Desired Outcome
          </label>
          <textarea
            rows={2}
            value={formState.desiredOutcome}
            onChange={(e) => setFormState({ ...formState, desiredOutcome: e.target.value })}
            placeholder="What does practical success look like for your team?"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Budget Range (Optional)
          </label>
          <input
            type="text"
            value={formState.budgetRange}
            onChange={(e) => setFormState({ ...formState, budgetRange: e.target.value })}
            placeholder="e.g. $10k - $25k, $25k - $50k, Exploration"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Additional Information
          </label>
          <input
            type="text"
            value={formState.additionalInfo}
            onChange={(e) => setFormState({ ...formState, additionalInfo: e.target.value })}
            placeholder="Existing software stack, APIs, or reference tools"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-[11px] text-slate-400">
          Your project information is kept strictly confidential and used solely to evaluate project fit.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-semibold transition-all shadow-md shadow-sky-500/20 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

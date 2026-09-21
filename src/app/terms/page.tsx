import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'ViThea Website Terms of Use.'
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 border-b border-white/5 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Terms of Use
        </h1>
        <p className="text-sm text-slate-400">
          Last Updated: September 2026
        </p>
      </div>

      <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website of ViThea (&ldquo;vithea.online&rdquo;), you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not access or use this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Nature of Information</h2>
          <p>
            The content on this website is provided for informational and business exploration purposes. While we strive to maintain accurate descriptions of our engineering services, capabilities, and project statuses, content is provided on an &ldquo;as-is&rdquo; basis without warranties of any kind.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
          <p>
            All content, trademarks, code samples, logos, and visual materials displayed on this website are the property of ViThea or their respective owners and are protected by applicable intellectual property laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Project Engagements</h2>
          <p>
            Submission of a project inquiry through this website does not constitute a formal engineering contract. Technical services, deliverables, and timelines are governed by separate, mutually executed client agreements.
          </p>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ViThea Privacy Policy and data handling practices.'
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 border-b border-white/5 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400">
          Last Updated: September 2026
        </p>
      </div>

      <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Overview</h2>
          <p>
            ViThea is an independent AI technology and software solutions company. We respect your privacy and are committed to handling information transparently and responsibly. This Privacy Policy outlines how we collect, use, and protect information submitted through our website (vithea.online).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
          <p>
            When you submit a project inquiry or contact us via our website, we may collect the following information:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Contact details such as your name, business email address, and company name.</li>
            <li>Project descriptions, operational challenges, timelines, and requirements you voluntarily provide.</li>
            <li>Standard technical metadata collected by web servers (IP address, browser type, and access timestamps) for security and operational integrity.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. How We Use Information</h2>
          <p>
            Information you provide is used solely to evaluate project fit, communicate with you regarding your inquiry, and deliver agreed-upon technology services. We do not sell, rent, or trade your personal or operational data with third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Data Security</h2>
          <p>
            We implement industry-standard organizational and technical measures to protect submitted information against unauthorized access, loss, or alteration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or your data, please contact ViThea via our website contact form.
          </p>
        </section>
      </div>
    </div>
  );
}

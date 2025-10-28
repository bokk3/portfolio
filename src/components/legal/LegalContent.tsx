'use client';

import { useTranslations } from 'next-intl';

interface LegalContentProps {
  type: 'privacy' | 'terms' | 'cookies';
  locale: string;
}

export function LegalContent({ type }: LegalContentProps) {

  const renderPrivacyContent = () => (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h2>Data Collection</h2>
      <p>We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us.</p>
      
      <h3>Personal Information We Collect</h3>
      <ul>
        <li>Name and contact information</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company information</li>
        <li>Messages and communications</li>
      </ul>

      <h2>How We Use Your Data</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Improve our services and user experience</li>
        <li>Send you marketing communications (with your consent)</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

      <h2>Data Security</h2>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

      <h2>Your Rights (GDPR)</h2>
      <p>Under GDPR, you have the following rights:</p>
      <ul>
        <li>Right to access your personal data</li>
        <li>Right to rectification of inaccurate data</li>
        <li>Right to erasure (right to be forgotten)</li>
        <li>Right to data portability</li>
        <li>Right to object to processing</li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <p>
        <strong>Email:</strong> privacy@truyens.pro<br />
        <strong>Address:</strong> Leuven, Belgium
      </p>
    </div>
  );

  const renderTermsContent = () => (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h2>Acceptance of Terms</h2>
      <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h2>Use of Services</h2>
      <p>Our services are provided for lawful purposes only. You agree to use our services in compliance with all applicable laws and regulations.</p>

      <h2>User Responsibilities</h2>
      <p>You are responsible for:</p>
      <ul>
        <li>Using our services in a lawful manner</li>
        <li>Providing accurate and complete information</li>
        <li>Maintaining respectful communication</li>
        <li>Keeping your account information secure</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>All content on this website, including text, graphics, logos, and software, is the property of truyens.pro and is protected by copyright laws.</p>

      <h2>Limitation of Liability</h2>
      <p>truyens.pro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>

      <h2>Termination</h2>
      <p>We reserve the right to terminate or suspend access to our services at any time, without prior notice, for conduct that we believe violates these terms.</p>

      <h2>Governing Law</h2>
      <p>These terms shall be governed by and construed in accordance with the laws of Belgium.</p>

      <h2>Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website.</p>
    </div>
  );

  const renderCookiesContent = () => (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h2>What Are Cookies</h2>
      <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience.</p>

      <h2>How We Use Cookies</h2>
      <p>We use different types of cookies for various purposes:</p>

      <h3>Essential Cookies</h3>
      <p>These cookies are necessary for the website to function properly:</p>
      <ul>
        <li>Session management and user authentication</li>
        <li>Remembering your preferences and settings</li>
        <li>Security and fraud prevention</li>
      </ul>

      <h3>Analytics Cookies</h3>
      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>

      <h3>Marketing Cookies</h3>
      <p>These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.</p>

      <h2>Third-Party Cookies</h2>
      <p>We may use third-party services that set their own cookies:</p>
      <ul>
        <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
        <li><strong>Google Fonts:</strong> Font delivery and optimization</li>
      </ul>

      <h2>Cookie Control</h2>
      <p>You can control and manage cookies through your browser settings or by using our cookie preference center.</p>

      <h2>Policy Updates</h2>
      <p>We may update this cookie policy from time to time. Please check this page regularly for any changes.</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <style jsx global>{`
        .prose {
          color: rgb(55 65 81);
        }
        .dark .prose {
          color: rgb(209 213 219);
        }
        .prose h1,
        .prose h2,
        .prose h3,
        .prose h4 {
          color: rgb(17 24 39);
        }
        .dark .prose h1,
        .dark .prose h2,
        .dark .prose h3,
        .dark .prose h4 {
          color: rgb(243 244 246);
        }
        .prose a {
          color: rgb(37 99 235);
        }
        .dark .prose a {
          color: rgb(96 165 250);
        }
        .prose strong {
          color: rgb(17 24 39);
        }
        .dark .prose strong {
          color: rgb(243 244 246);
        }
      `}</style>
      
      {type === 'privacy' && renderPrivacyContent()}
      {type === 'terms' && renderTermsContent()}
      {type === 'cookies' && renderCookiesContent()}
    </div>
  );
}
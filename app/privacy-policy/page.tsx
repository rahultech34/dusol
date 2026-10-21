import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Database,
  ExternalLink,
  Cookie,
  UserCheck,
  Baby,
  RefreshCw,
  Phone,
  Mail,
  CheckCircle2,
  FileText,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DU SOL Educational Information by Edukyu",
  description:
    "Official privacy policy for Edukyu.com, operated by Edukyu Pvt. Ltd. Learn how we collect, use, store, protect, and handle your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#652a7c] via-purple-900 to-indigo-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#652a7c]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-purple-200 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-3 backdrop-blur-md">
              <Lock className="w-3.5 h-3.5" />
              <span>Data Protection & Privacy</span>
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-purple-100/90 leading-relaxed">
              How Edukyu.com, operated by Edukyu Pvt. Ltd., collects, uses, handles, and protects your information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {/* Introduction Box */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm leading-relaxed space-y-3">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#652a7c]" />
                  <span>Introduction</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  <strong>Edukyu.com</strong>, operated by <strong>Edukyu Pvt. Ltd.</strong>, is an independent educational information platform that helps students explore universities, compare courses, access educational resources, and make informed academic decisions. We are committed to respecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and share information when you visit our website, use our educational tools, or submit an enquiry through our platform.
                </p>
              </div>

              {/* Policy Sections */}
              <div className="space-y-6">
                {/* 1. No Personal Data Collected by Default */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      1. No Personal Data Collected by Default
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      You can browse Edukyu.com and access most of its publicly available educational content without providing personal information. We do not require you to submit your name, phone number, email address, or other personally identifiable information simply to view our website.
                    </p>
                    <p>
                      However, if you voluntarily complete an enquiry form, use a contact form, subscribe to updates, or communicate with us directly, we may collect the information you choose to provide. Certain technical information, such as your IP address, browser type, device information, and website usage data, may also be collected automatically through server logs, cookies, analytics tools, or similar technologies, where applicable.
                    </p>
                  </div>
                </div>

                {/* 2. How We Use Your Information */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      2. How We Use Your Information
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pl-11">
                    <p>The information collected through Edukyu.com may be used for the following purposes:</p>
                    <ul className="space-y-2">
                      {[
                        "To respond to your enquiries and provide requested educational information.",
                        "To help you explore and compare universities, courses, entrance examinations, and academic opportunities.",
                        "To provide educational guidance or counselling where such services are offered.",
                        "To communicate relevant admission updates, application deadlines, examination notifications, and other educational information.",
                        "To improve website functionality, user experience, content quality, and educational tools.",
                        "To analyse website traffic, understand user engagement, and identify opportunities for improvement.",
                        "To maintain website security, prevent misuse, and comply with applicable legal obligations.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#652a7c] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Where you have provided your contact details and applicable consent or other legal requirements have been satisfied, we may communicate with you through email, telephone, SMS, or WhatsApp regarding your enquiry or relevant educational updates.
                    </p>
                    <p className="bg-purple-50/50 p-3 rounded-xl border border-purple-100 text-slate-700">
                      You may opt out of promotional communications at any time by using the available unsubscribe option or contacting us through the details provided on our website. Opting out of promotional messages will not prevent us from sending essential service-related or legally required communications where applicable.
                    </p>
                  </div>
                </div>

                {/* 3. Scope of This Privacy Policy */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      3. Scope of This Privacy Policy
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      This Privacy Policy applies to visitors and users who access Edukyu.com, operated by Edukyu Pvt. Ltd. It covers information collected through our website, including educational content pages, university comparison pages, online calculators, educational utilities, enquiry forms, and other features available on the platform.
                    </p>
                    <p>
                      This policy also explains how we handle information collected through our website&apos;s integrated tools and services, where applicable.
                    </p>
                    <p>
                      When you visit third-party websites through links available on Edukyu.com, those websites may collect and process your information under their own privacy policies. This Privacy Policy does not govern the independent data collection practices of external websites or services.
                    </p>
                  </div>
                </div>

                {/* 4. Data Sharing and Disclosure */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      4. Data Sharing and Disclosure
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pl-11">
                    <p className="font-semibold text-slate-800">
                      Edukyu Pvt. Ltd. does not sell your personal information to third parties.
                    </p>
                    <p>We may share information in the following circumstances, where applicable:</p>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <strong className="text-slate-900 block mb-0.5">University and Educational Partners:</strong>
                        <span>If you submit an enquiry or expressly request information about a particular university or course, we may share the relevant details with the concerned institution or authorised educational partner to respond to your request or facilitate further communication, subject to applicable law and consent requirements.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <strong className="text-slate-900 block mb-0.5">Service Providers:</strong>
                        <span>We may engage trusted third-party service providers for website hosting, analytics, communication, technical support, security, and other operational services. Such providers may process information as necessary to perform their services.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <strong className="text-slate-900 block mb-0.5">Legal and Regulatory Requirements:</strong>
                        <span>We may disclose information when required by applicable law, a lawful request from a competent authority, or to protect our legal rights and the security of our users and platform.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <strong className="text-slate-900 block mb-0.5">Business Operations:</strong>
                        <span>Information may be processed or transferred as part of a merger, restructuring, acquisition, or similar corporate transaction, subject to applicable legal requirements and appropriate safeguards.</span>
                      </div>
                    </div>
                    <p>
                      We do not share personal information with third parties for their independent marketing purposes without an appropriate legal basis or consent where required.
                    </p>
                  </div>
                </div>

                {/* 5. External Links and Third-Party Websites */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      5. External Links and Third-Party Websites
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Edukyu.com may contain links to official university websites, examination portals, regulatory authorities, educational service providers, and other external resources.
                    </p>
                    <p>
                      These links are provided for informational and convenience purposes. Edukyu Pvt. Ltd. does not control the privacy policies, data collection practices, security measures, or content of third-party websites.
                    </p>
                    <p>
                      We encourage users to review the privacy policy and terms of use of any external website before submitting personal information or using its services.
                    </p>
                  </div>
                </div>

                {/* 6. Cookies and Analytics */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Cookie className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      6. Cookies and Analytics
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pl-11">
                    <p>
                      Edukyu.com may use cookies, pixels, analytics tools, and similar technologies to improve website functionality and understand how visitors interact with our platform.
                    </p>
                    <p>These technologies may help us understand:</p>
                    <ul className="space-y-1.5">
                      {[
                        "Which pages and educational resources receive the most visits.",
                        "How visitors navigate through the website.",
                        "The approximate duration of visits and engagement with website features.",
                        "Browser, device, and technical performance information.",
                        "Website errors, usability issues, and opportunities to improve our services.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#652a7c] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Depending on the tools used, cookies and analytics technologies may collect technical identifiers or information that could be associated with a particular user or device. We do not assume that all cookies or analytics data are anonymous.
                    </p>
                    <p>
                      You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality or performance of some website features. Where required by applicable law, we will seek consent before using non-essential cookies or similar tracking technologies.
                    </p>
                  </div>
                </div>

                {/* 7. Data Security and Retention */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      7. Data Security and Retention
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss, or misuse.
                    </p>
                    <p>
                      Access to personal information is limited where appropriate to authorised personnel and service providers who need it for legitimate operational purposes. However, no website, electronic transmission, or data storage system can be guaranteed to be completely secure.
                    </p>
                    <p>
                      We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this Privacy Policy, respond to enquiries, maintain relevant records, resolve disputes, and meet applicable legal or regulatory requirements.
                    </p>
                  </div>
                </div>

                {/* 8. Your Privacy Rights and Choices */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      8. Your Privacy Rights and Choices
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Subject to applicable law, you may have the right to request access to, correction of, or deletion of your personal information, withdraw consent where processing is based on consent, or opt out of promotional communications.
                    </p>
                    <p>
                      To exercise an applicable privacy right or raise a concern about the handling of your information, you may contact Edukyu Pvt. Ltd. using the contact details available on Edukyu.com.
                    </p>
                    <p>
                      We may need to verify your identity and assess your request before taking action. Certain information may need to be retained where required by law or necessary for legitimate legal and operational purposes.
                    </p>
                  </div>
                </div>

                {/* 9. Children's Privacy */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Baby className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      9. Children&apos;s Privacy
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Edukyu.com provides educational information that may be relevant to students, including younger learners. We do not knowingly seek to collect personal information from children in violation of applicable law.
                    </p>
                    <p>
                      Where a user&apos;s age requires parental or guardian consent under applicable law, the relevant consent requirements must be followed before collecting or processing that user&apos;s personal information. Parents or legal guardians who believe that a child has provided personal information inappropriately may contact us to request its review or deletion, subject to applicable legal requirements.
                    </p>
                  </div>
                </div>

                {/* 10. Changes to This Privacy Policy */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      10. Changes to This Privacy Policy
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Edukyu Pvt. Ltd. reserves the right to update or modify this Privacy Policy to reflect changes in our website, services, data-handling practices, technologies, or applicable laws and regulations.
                    </p>
                    <p>
                      Any revised version will be published on this page. We encourage users to review this Privacy Policy periodically to remain informed about how their information is handled.
                    </p>
                  </div>
                </div>

                {/* Related Legal Policies */}
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
                  <span className="font-medium text-slate-800">
                    Review our complete legal guidance disclosures:
                  </span>
                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href="/disclaimer"
                      className="inline-flex items-center gap-1 text-[#652a7c] font-bold hover:underline"
                    >
                      <span>Disclaimer Policy</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <span>•</span>
                    <Link
                      href="/terms-conditions"
                      className="inline-flex items-center gap-1 text-[#652a7c] font-bold hover:underline"
                    >
                      <span>Terms &amp; Conditions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 11. Contact Us */}
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50/50 border border-purple-200/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#652a7c] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">11. Contact Us</h3>
                      <p className="text-xs text-slate-600">
                        Questions, concerns, or requests relating to this Privacy Policy
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you have any questions, concerns, or requests relating to this Privacy Policy or the handling of your personal information, please contact Edukyu Pvt. Ltd. through the contact details provided below:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <a
                      href="tel:+918336889553"
                      className="p-3 rounded-xl bg-white border border-purple-200 flex items-center gap-2.5 text-slate-800 hover:text-[#652a7c] font-semibold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#652a7c]" />
                      <span>+91 83368 89553</span>
                    </a>
                    <a
                      href="mailto:hi@edukyu.com"
                      className="p-3 rounded-xl bg-white border border-purple-200 flex items-center gap-2.5 text-slate-800 hover:text-[#652a7c] font-semibold transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#652a7c]" />
                      <span>hi@edukyu.com</span>
                    </a>
                  </div>
                </div>
              </div>
        </div>
      </section>
    </main>
  );
}

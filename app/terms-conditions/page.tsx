import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Building2,
  CheckCircle2,
  CreditCard,
  ShieldAlert,
  UserCheck,
  Award,
  ExternalLink,
  Calculator,
  Scale,
  Lock,
  RefreshCw,
  Gavel,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | DU SOL Educational Information by Edukyu",
  description:
    "Official Terms and Conditions for Edukyu.com, operated by Edukyu Pvt. Ltd. Review terms of access, educational services, user responsibilities, and legal governance.",
};

export default function TermsConditionsPage() {
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
            <span className="text-white font-medium">Terms and Conditions</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-3 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Terms &amp; Conditions</span>
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Terms and Conditions
            </h1>
            <p className="mt-3 text-sm sm:text-base text-purple-100/90 leading-relaxed">
              Guidelines and terms governing your access to and use of Edukyu.com, operated by Edukyu Pvt. Ltd.
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
                  <FileText className="w-5 h-5 text-[#652a7c]" />
                  <span>Welcome to Edukyu.com</span>
                </h2>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 text-justify">
                  <p>
                    Welcome to <strong>Edukyu.com</strong>, operated by <strong>Edukyu Pvt. Ltd.</strong> These Terms and Conditions govern your access to and use of our website, educational resources, online tools, university comparison services, and other features available through our platform.
                  </p>
                  <p>
                    Edukyu.com is an independent educational information platform designed to help students, parents, and working professionals explore universities, academic programmes, entrance examinations, educational resources, and career opportunities. By accessing or using our website, you acknowledge that you have read and understood these Terms and Conditions and agree to comply with them.
                  </p>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="space-y-6">
                {/* 1. Our Role and Services */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      1. Our Role and Services
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Edukyu.com provides educational information, university comparisons, academic resources, educational calculators, examination-related information, and guidance to help users make informed educational decisions.
                    </p>
                    <p>
                      Edukyu Pvt. Ltd. is not a university, degree-awarding institution, examination authority, or government regulatory body. Unless explicitly stated otherwise, we do not represent or act as an authorised admission authority for any university.
                    </p>
                    <p>
                      We do not independently grant admission, determine eligibility, issue academic credentials, or guarantee admission to any educational institution. Final admission decisions, eligibility assessments, fee structures, and academic requirements are determined by the respective universities and competent authorities.
                    </p>
                  </div>
                </div>

                {/* 2. Accuracy and Verification of Information */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      2. Accuracy and Verification of Information
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      We make reasonable efforts to provide relevant, accurate, and updated information on Edukyu.com. However, university details, course offerings, eligibility requirements, tuition fees, admission schedules, entrance examination dates, results, rankings, and regulatory approvals may change without prior notice.
                    </p>
                    <p>
                      We do not guarantee that all information published on the website will always be complete, accurate, current, or free from errors or omissions.
                    </p>
                    <p>
                      Users are responsible for verifying important information through the official websites of the respective universities, examination authorities, and regulatory bodies before making academic, financial, or admission-related decisions.
                    </p>
                  </div>
                </div>

                {/* 3. Fees, Payments, and Third-Party Transactions */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      3. Fees, Payments, and Third-Party Transactions
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Edukyu.com primarily provides educational information and related services through its platform. Unless expressly stated otherwise, Edukyu does not collect university tuition fees, examination fees, registration fees, or other academic charges on behalf of universities.
                    </p>
                    <p>
                      All university-related payments should be made through the official payment channels of the respective institution or an authorised payment provider.
                    </p>
                    <p>
                      If any paid service is offered directly by Edukyu or through an authorised third-party provider, the applicable pricing, payment terms, cancellation conditions, and refund policy, where relevant, will be communicated separately.
                    </p>
                    <p className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900 font-medium">
                      Edukyu Pvt. Ltd. shall not be responsible for unauthorised payments made to individuals or entities falsely claiming to represent the company. Users should verify payment instructions and the identity of the intended recipient before making a transaction.
                    </p>
                  </div>
                </div>

                {/* 4. Unauthorised Use, Fraud, and Security */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      4. Unauthorised Use, Fraud, and Security
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Users must not misuse Edukyu.com, attempt unauthorised access to its systems, interfere with website functionality, submit fraudulent information, or engage in activities that violate applicable laws or infringe the rights of others.
                    </p>
                    <p>
                      If you suspect an unauthorised transaction, fraudulent communication, impersonation, or suspicious activity associated with our platform, please report it promptly using the contact details available on our website.
                    </p>
                    <p>
                      Where appropriate, Edukyu may investigate the reported incident and coordinate with the relevant payment provider, service provider, or competent authority. Any investigation or remedial action will be subject to applicable law and the procedures of the relevant parties.
                    </p>
                  </div>
                </div>

                {/* 5. User Responsibilities and Acceptable Use */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      5. User Responsibilities and Acceptable Use
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pl-11">
                    <p>By using Edukyu.com, you agree to:</p>
                    <ul className="space-y-2">
                      {[
                        "Provide accurate information when submitting enquiries or using services that require personal details.",
                        "Use the website only for lawful purposes.",
                        "Avoid uploading or transmitting malicious code, spam, fraudulent content, or misleading information.",
                        "Refrain from attempting to disrupt, damage, reverse-engineer, or gain unauthorised access to the website or its infrastructure.",
                        "Respect the intellectual property rights of Edukyu Pvt. Ltd. and other third-party rights holders.",
                        "Avoid copying, reproducing, distributing, or commercially exploiting website content without appropriate authorisation, except where permitted by applicable law.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#652a7c] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="bg-purple-50/50 p-3 rounded-xl border border-purple-100 text-slate-700">
                      We reserve the right to restrict or suspend access where we reasonably believe that a user has violated these Terms and Conditions or applicable law.
                    </p>
                  </div>
                </div>

                {/* 6. Intellectual Property Rights */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      6. Intellectual Property Rights
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Unless otherwise stated, the content published on Edukyu.com, including original text, articles, website design, graphics, educational resources, and proprietary tools, is owned by or licensed to Edukyu Pvt. Ltd. and may be protected under applicable intellectual property laws.
                    </p>
                    <p>
                      University names, logos, trademarks, images, and other third-party materials remain the property of their respective owners. Their appearance on our platform does not necessarily imply endorsement, sponsorship, or an official partnership with Edukyu.
                    </p>
                    <p>
                      Unauthorised reproduction, republication, distribution, or commercial use of protected content is prohibited, except as permitted by applicable law or with the necessary permission.
                    </p>
                  </div>
                </div>

                {/* 7. Third-Party Websites and Services */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      7. Third-Party Websites and Services
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Edukyu.com may provide links to external university websites, examination portals, regulatory authorities, payment gateways, analytics services, and other third-party platforms.
                    </p>
                    <p>
                      These links are provided for convenience and informational purposes. Edukyu Pvt. Ltd. does not control or guarantee the accuracy, availability, security, privacy practices, or terms of service of third-party websites.
                    </p>
                    <p>
                      Your use of third-party websites and services is subject to their respective terms, conditions, and privacy policies. Users should review those policies before submitting information or making payments through external platforms.
                    </p>
                  </div>
                </div>

                {/* 8. Educational Tools and Informational Resources */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      8. Educational Tools and Informational Resources
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Educational tools available on Edukyu.com, including age calculators, CGPA and SGPA converters, examination resources, rank predictors, and other utilities, are provided for general informational and educational purposes.
                    </p>
                    <p>
                      Results generated by these tools may depend on user-provided information, calculation methods, assumptions, and available data. Such results should not be treated as official academic records, guaranteed examination outcomes, or definitive eligibility assessments.
                    </p>
                    <p>
                      Users should verify consequential calculations and educational information with the relevant university or competent authority.
                    </p>
                  </div>
                </div>

                {/* 9. Limitation of Liability */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Scale className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      9. Limitation of Liability
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      To the extent permitted by applicable law, Edukyu Pvt. Ltd. shall not be liable for losses, damages, or adverse consequences arising from reliance on website content, inaccurate or outdated third-party information, changes in university policies, admission decisions, educational tool outputs, service interruptions, or the use of external websites.
                    </p>
                    <p>
                      We do not guarantee uninterrupted or error-free website access and reserve the right to modify, suspend, or discontinue any website feature or service, subject to applicable legal obligations.
                    </p>
                    <p>
                      Nothing in these Terms and Conditions is intended to exclude or restrict any right, remedy, or liability that cannot lawfully be excluded or restricted under applicable law.
                    </p>
                  </div>
                </div>

                {/* 10. Privacy and Personal Information */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      10. Privacy and Personal Information
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Your use of Edukyu.com is also subject to our{" "}
                      <Link href="/privacy-policy" className="text-[#652a7c] font-semibold underline hover:text-[#521f66]">
                        Privacy Policy
                      </Link>
                      , which explains how we collect, use, disclose, and protect personal information.
                    </p>
                    <p>
                      By using features that require personal information, you acknowledge that such information will be handled in accordance with the applicable Privacy Policy and relevant legal requirements.
                    </p>
                    <p>
                      Users are encouraged to review our Privacy Policy before submitting personal information through enquiry forms or other website features.
                    </p>
                  </div>
                </div>

                {/* 11. Changes to These Terms and Conditions */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      11. Changes to These Terms and Conditions
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      Edukyu Pvt. Ltd. reserves the right to revise, update, or modify these Terms and Conditions from time to time to reflect changes in our services, operational practices, website features, or applicable laws and regulations.
                    </p>
                    <p>
                      The revised terms will be published on this page. Where required by applicable law, we will provide appropriate notice or obtain any necessary consent.
                    </p>
                    <p>
                      Your continued use of Edukyu.com after revised terms become effective constitutes acceptance of those changes to the extent permitted by applicable law. If you do not agree with the revised terms, you should discontinue using the affected services.
                    </p>
                  </div>
                </div>

                {/* 12. Governing Law and Jurisdiction */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                      <Gavel className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      12. Governing Law and Jurisdiction
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 pl-11">
                    <p>
                      These Terms and Conditions shall be governed by the laws of India, subject to applicable legal requirements.
                    </p>
                    <p>
                      Any disputes arising from the use of Edukyu.com shall be addressed in accordance with applicable Indian law and by courts having competent jurisdiction, subject to any mandatory legal provisions.
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
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span>•</span>
                    <Link
                      href="/privacy-policy"
                      className="inline-flex items-center gap-1 text-[#652a7c] font-bold hover:underline"
                    >
                      <span>Privacy Policy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 13. Contact Us */}
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50/50 border border-purple-200/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#652a7c] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">13. Contact Us</h3>
                      <p className="text-xs text-slate-600">
                        Questions, concerns, or complaints regarding these Terms and Conditions
                      </p>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                    <p>
                      If you have questions, concerns, or complaints regarding these Terms and Conditions, our website, or the services provided by Edukyu.com, please contact Edukyu Pvt. Ltd. through the contact details published on our website:
                    </p>
                    <p>
                      We will make reasonable efforts to review and respond to enquiries within an appropriate timeframe.
                    </p>
                  </div>

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

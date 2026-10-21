import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  FileText,
  Phone,
  Mail,
  Scale,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Guidance Policy | DU SOL Educational Information by Edukyu",
  description:
    "Official disclaimer, guidance policy, and transparency disclosure for DU SOL educational information, course comparisons, and counseling services operated by Edukyu Pvt. Ltd.",
};

export default function DisclaimerPage() {
  const points = [
    {
      icon: Building2,
      title: "Independent Education Platform",
      text: "Edukyu.com, operated by Edukyu Pvt. Ltd., is an independent educational information and comparison platform designed to help students explore universities, courses, entrance examinations, educational resources, and career opportunities.",
    },
    {
      icon: CheckCircle2,
      title: "Verification of Official Information",
      text: "Although we make reasonable efforts to maintain accurate and updated information, Edukyu does not guarantee the completeness, accuracy, reliability, or timeliness of all content published on the website. Students should verify admission dates, eligibility requirements, course structures, fees, examination schedules, results, and other official information through the respective university or examination authority.",
    },
    {
      icon: ShieldCheck,
      title: "University Approvals and Recognition",
      text: "Information concerning UGC recognition, AICTE approval, NAAC accreditation, NIRF rankings, and other institutional recognitions is provided for general informational purposes. Such status may vary by institution, programme, academic session, or applicable regulatory requirements. Users should confirm the status directly with the relevant university and competent regulatory authority.",
    },
    {
      icon: Scale,
      title: "Trademarks and Copyrights",
      text: "All university names, logos, trademarks, service marks, images, and other brand assets displayed on Edukyu.com belong to their respective owners. Such materials are used, where applicable, for identification, informational, educational, and comparison purposes. Their appearance on our platform does not imply ownership, endorsement, sponsorship, affiliation, or partnership unless explicitly stated.",
    },
    {
      icon: AlertCircle,
      title: "No Admission Guarantee",
      text: "Edukyu does not guarantee admission to any university, course, or educational programme. Admission decisions are made by the respective institutions in accordance with their eligibility criteria, selection procedures, seat availability, and applicable policies.",
    },
    {
      icon: HelpCircle,
      title: "Educational Tools and Calculators",
      text: "Tools available on Edukyu.com, including age calculators, CGPA-to-percentage converters, SGPA calculators, entrance examination resources, rank predictors, and other educational utilities, are intended to provide general guidance and estimated results. Their outputs may depend on the information entered by users and the assumptions or calculation methods applied. Users should verify consequential results with the relevant institution or official authority.",
    },
    {
      icon: Info,
      title: "Third-Party Websites and Services",
      text: "Edukyu.com may contain links to external websites, university portals, examination authorities, educational service providers, or other third-party resources. These links are provided for convenience and informational purposes. Edukyu does not control or assume responsibility for the content, availability, accuracy, privacy practices, policies, or services of third-party websites.",
    },
    {
      icon: FileText,
      title: "Information Integrity",
      text: "We make reasonable efforts to publish relevant, useful, and updated educational information. However, we do not warrant that all content will always be error-free, complete, uninterrupted, or current. Information may be revised, corrected, updated, or removed without prior notice.",
    },
    {
      icon: ShieldAlert,
      title: "No Professional or Official Advice",
      text: "Content published on Edukyu.com should not be treated as a substitute for official university communications, regulatory notifications, legal advice, or other professional advice where required. Users are responsible for independently assessing the suitability of any educational opportunity or information before acting on it.",
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      text: "To the extent permitted by applicable law, Edukyu Pvt. Ltd. shall not be held liable for any direct or indirect loss, damage, inconvenience, or adverse consequence arising from reliance on website content, calculation outputs, third-party information, changes in university policies, admission decisions, or inaccuracies and omissions in published information.",
    },
    {
      icon: Sparkles,
      title: "Transparency and Student Support",
      text: "Our objective is to help students and learners make informed educational decisions by providing accessible information, university comparisons, educational resources, and guidance. Edukyu aims to maintain transparency and present information responsibly without misleading users about institutional affiliations, official recognition, or admission outcomes.",
    },
  ];

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
            <span className="text-white font-medium">Disclaimer</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-3 backdrop-blur-md">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Transparency & Guidance Policy</span>
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Website Disclaimer & Guidance Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-purple-100/90 leading-relaxed">
              Essential disclosure regarding information published on Edukyu.com, operated by Edukyu Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {/* Primary Disclaimer Box */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm leading-relaxed">
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#652a7c]" />
                  <span>General Disclosure</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  The information provided on <strong>Edukyu.com</strong>, operated by <strong>Edukyu Pvt. Ltd.</strong>, is intended solely for educational information, guidance, comparison, and general informational purposes. Edukyu operates as an independent education information platform and is not a university, regulatory authority, degree-awarding institution, or admission authority. Information published on the platform, including university details, courses, eligibility criteria, fees, admission procedures, entrance examinations, results, rankings, and regulatory approvals, may change from time to time. Users are advised to verify all important information directly through the official websites of the respective universities, examination authorities, and regulatory bodies before making any educational or admission-related decisions.
                </p>
              </div>

              {/* Essential Points & Guidance Policy */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
                  Essential Points & Guidance Policy
                </h2>

                <div className="space-y-4">
                  {points.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#652a7c]/40 hover:shadow-md transition-all space-y-2 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] group-hover:bg-[#652a7c] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Updates to This Disclaimer */}
              <div className="p-6 rounded-2xl bg-slate-100/80 border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">Updates to This Disclaimer</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Edukyu Pvt. Ltd. reserves the right to modify, update, or revise this Disclaimer at any time to reflect changes in our services, website content, operational practices, or applicable laws and regulations. Any revisions will be published on this page. Users are encouraged to review this page periodically.
                </p>
              </div>

              {/* Related Legal Policies */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
                <span className="font-medium text-slate-800">
                  Review our complete legal guidance disclosures:
                </span>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-1 text-[#652a7c] font-bold hover:underline"
                  >
                    <span>Privacy Policy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span>•</span>
                  <Link
                    href="/terms-conditions"
                    className="inline-flex items-center gap-1 text-[#652a7c] font-bold hover:underline"
                  >
                    <span>Terms &amp; Conditions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Contact Us Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50/50 border border-purple-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#652a7c] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Have Questions or Concerns?</h3>
                    <p className="text-xs text-slate-600">Contact our administrative and student support desk</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
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
      </section>
    </main>
  );
}

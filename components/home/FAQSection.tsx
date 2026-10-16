"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion, PhoneCall, Sparkles } from "lucide-react";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { HomePageFAQ } from "@/lib/home-page-types";

interface FAQSectionProps {
  data?: HomePageFAQ[];
}

export function FAQSection({ data }: FAQSectionProps) {
  const { openModal } = useAdmissionModal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = data && data.length > 0 ? data : [
    {
      id: "faq-1",
      question: "Are DU SOL degrees valid?",
      answer: "Yes, DU SOL degrees are recognized and valid throughout India. They are approved by UGC (University Grants Commission).",
    },
    {
      id: "faq-2",
      question: "What courses does DU SOL offer?",
      answer: "DU SOL offers a wide range of undergraduate (UG) and postgraduate (PG) programs in various disciplines like Arts, Commerce, Management, Science, and Humanities. You can find the complete list on the Edukyu website or the official DU SOL website.",
    },
    {
      id: "faq-3",
      question: "How much do DU SOL courses cost?",
      answer: "Fees vary depending on the program you choose. However, DU SOL is generally known for its affordable fees. The annual fee range is typically between INR 5,040 and INR 51,720 (approx.).",
    },
    {
      id: "faq-4",
      question: "When does the DU SOL application process start?",
      answer: "Applications for DU SOL admissions typically commence in June. Keep an eye on Edukyu and the official DU SOL website (https://sol.du.ac.in/) for the latest updates.",
    },
    {
      id: "faq-5",
      question: "What is the eligibility criteria for DU SOL admission?",
      answer: "Eligibility criteria vary for different programs. Generally, you’ll need a minimum percentage in your Class 12th exams for UG courses and a bachelor’s degree for PG programs.",
    },
    {
      id: "faq-6",
      question: "Is there an entrance exam for DU SOL admissions?",
      answer: "DU SOL admissions are based on merit (your previous academic performance) for most programs. For some courses you have to give an entrance exam.",
    },
    {
      id: "faq-7",
      question: "How to apply for DU SOL courses?",
      answer: "DU SOL admissions are conducted online through the official DU SOL website. Edukyu counsellors can guide you through the process.",
    },
    {
      id: "faq-8",
      question: "What kind of study materials do I receive for DU SOL courses?",
      answer: "DU SOL provides self-learning study materials that include textbooks, assignments, and other resources.",
    },
    {
      id: "faq-9",
      question: "Does DU SOL offer any support for distance learners?",
      answer: "Yes, DU SOL offers various student support services, including online learning resources, counselling, and examination centers across India.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200/70 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#652a7c]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Everything you need to know about DU SOL degrees validity, course offerings, fees, application deadlines, and student support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id || idx}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isOpen
                    ? "bg-white border-[#652a7c]/30 shadow-md ring-1 ring-[#652a7c]/10"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-[#652a7c] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#652a7c]/10 text-[#652a7c]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#652a7c] via-purple-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300">
              <MessageCircleQuestion className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Still have questions regarding DU SOL Admission?
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 mt-0.5">
                Speak directly with an authorized Edukyu admission counselor for personalized guidance.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#f1ba02] hover:bg-[#e2ad00] active:bg-[#c99a00] text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Connect with Edukyu</span>
          </button>
        </div>
      </div>
    </section>
  );
}

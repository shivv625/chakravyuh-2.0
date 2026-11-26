'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/content/site';
import {
  BookOpen,
  Users,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

export const GuidelinesSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      qNum: 'Q1',
      question: 'Is there a registration fee for shortlisted teams?',
      answer:
        'Idea submission is completely free. Shortlisted teams pay a nominal ₹400 per member hospitality fee covering all meals, snacks, and campus accommodation for 24 hours.',
    },
    {
      qNum: 'Q2',
      question: 'Can we use pre-trained AI models or public APIs?',
      answer:
        'Yes, open-weight models and public APIs are permitted, provided your core application logic, integration, and product workflow are built during the hackathon.',
    },
    {
      qNum: 'Q3',
      question: 'Will travel reimbursement or certificates be provided?',
      answer:
        'Every finalist receives an official BPUT-recognized participation certificate, swag kit, and mentor feedback. Travel support is available for outstation winners.',
    },
  ];

  return (
    <section id="guidelines" className="py-20 md:py-28 bg-cream-parchment border-t-2 border-gold-rich">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gold-rich/50 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-gold-rich" />
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold tracking-wider">
                Niyam · Code of Conduct
              </span>
            </div>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown">
              Rules of the Battlefield
            </h2>
            <p className="font-body text-body-md text-navy-ink mt-2 max-w-2xl font-normal">
              Every warrior enters Kurukshetra under the same sacred code—fair play, original engineering, and live working demos.
            </p>
          </div>
          <a
            href={SITE_CONFIG.DOCUMENTS.RULEBOOK_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase tracking-widest hover:bg-bronze-brown hover:text-cream-parchment transition-colors shrink-0 shadow-sm font-bold"
          >
            <BookOpen className="w-4 h-4 text-gold-highlight" />
            <span>Download Full Rulebook</span>
          </a>
        </div>

        {/* Asymmetric 7+5 Tactical Rulebook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Cols: 3 Split-Crest Niyam Scroll Tablets */}
          <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
            {/* NIYAM 01 */}
            <article className="bg-light-surface-container-lowest border-2 border-gold-rich rounded-lg overflow-hidden shadow-sm hover:-translate-y-0.5 transition-transform duration-card-lift flex flex-col sm:flex-row">
              <div className="sm:w-28 bg-dark-chocolate text-gold-highlight p-4 flex sm:flex-col items-center justify-between sm:justify-center gap-2 border-b sm:border-b-0 sm:border-r-2 border-gold-rich shrink-0">
                <span className="font-display text-headline-md text-gold-highlight leading-none font-bold">
                  01
                </span>
                <Users className="w-6 h-6 text-gold-highlight" />
                <span className="font-label text-label-sm uppercase text-cream-parchment font-semibold">
                  Squads
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-title text-title-lg text-dark-chocolate font-bold">
                    Team Size &amp; Eligibility
                  </h3>
                  <span className="px-2.5 py-0.5 bg-light-surface-container border border-gold-rich/60 rounded-sm font-label text-label-sm uppercase text-bronze-brown font-semibold">
                    Niyam 01
                  </span>
                </div>
                <p className="font-body text-body-md text-navy-ink font-normal">
                  Teams must consist of 2 to 4 students currently enrolled in any recognized UG/PG program across India.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cream-parchment border border-gold-rich/50 rounded-sm font-label text-label-sm text-bronze-brown font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-peacock-green shrink-0" />
                    2–4 Warriors
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cream-parchment border border-gold-rich/50 rounded-sm font-label text-label-sm text-bronze-brown font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-peacock-green shrink-0" />
                    Inter-College Allowed
                  </span>
                </div>
              </div>
            </article>

            {/* NIYAM 02 */}
            <article className="bg-light-surface-container-lowest border-2 border-gold-rich rounded-lg overflow-hidden shadow-sm hover:-translate-y-0.5 transition-transform duration-card-lift flex flex-col sm:flex-row">
              <div className="sm:w-28 bg-dark-chocolate text-gold-highlight p-4 flex sm:flex-col items-center justify-between sm:justify-center gap-2 border-b sm:border-b-0 sm:border-r-2 border-gold-rich shrink-0">
                <span className="font-display text-headline-md text-gold-highlight leading-none font-bold">
                  02
                </span>
                <ShieldCheck className="w-6 h-6 text-gold-highlight" />
                <span className="font-label text-label-sm uppercase text-cream-parchment font-semibold">
                  Integrity
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-title text-title-lg text-dark-chocolate font-bold">
                    Original Work &amp; GitHub
                  </h3>
                  <span className="px-2.5 py-0.5 bg-light-surface-container border border-gold-rich/60 rounded-sm font-label text-label-sm uppercase text-bronze-brown font-semibold">
                    Niyam 02
                  </span>
                </div>
                <p className="font-body text-body-md text-navy-ink font-normal">
                  All code must be written during the 24-hour window and pushed to a jury-accessible GitHub repository initialized at kickoff.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cream-parchment border border-gold-rich/50 rounded-sm font-label text-label-sm text-bronze-brown font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-peacock-green shrink-0" />
                    Fresh Repo at Kickoff
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cream-parchment border border-gold-rich/50 rounded-sm font-label text-label-sm text-bronze-brown font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-peacock-green shrink-0" />
                    Timestamped Commits
                  </span>
                </div>
              </div>
            </article>

            {/* NIYAM 03 */}
            <article className="bg-light-surface-container-lowest border-2 border-gold-rich rounded-lg overflow-hidden shadow-sm hover:-translate-y-0.5 transition-transform duration-card-lift flex flex-col sm:flex-row">
              <div className="sm:w-28 bg-dark-chocolate text-gold-highlight p-4 flex sm:flex-col items-center justify-between sm:justify-center gap-2 border-b sm:border-b-0 sm:border-r-2 border-gold-rich shrink-0">
                <span className="font-display text-headline-md text-gold-highlight leading-none font-bold">
                  03
                </span>
                <Wrench className="w-6 h-6 text-gold-highlight" />
                <span className="font-label text-label-sm uppercase text-cream-parchment font-semibold">
                  Arsenal
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-title text-title-lg text-dark-chocolate font-bold">
                    Tech Stack &amp; Gear
                  </h3>
                  <span className="px-2.5 py-0.5 bg-light-surface-container border border-gold-rich/60 rounded-sm font-label text-label-sm uppercase text-bronze-brown font-semibold">
                    Niyam 03
                  </span>
                </div>
                <p className="font-body text-body-md text-navy-ink font-normal">
                  Any open-source framework, cloud API, or hardware kit is allowed. Bring laptops, chargers, college ID cards, and extension boards.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cream-parchment border border-gold-rich/50 rounded-sm font-label text-label-sm text-bronze-brown font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-peacock-green shrink-0" />
                    Open-Source &amp; APIs OK
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cream-parchment border border-gold-rich/50 rounded-sm font-label text-label-sm text-bronze-brown font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-peacock-green shrink-0" />
                    College ID Mandatory
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Right 5 Cols: Dark-Chocolate & Gold Jury Scorecard (NIYAM 04) */}
          <div className="lg:col-span-5 flex">
            <article className="w-full bg-dark-chocolate text-cream-parchment border-2 border-gold-highlight rounded-lg p-6 md:p-7 shadow-xl flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-gold-rich/40">
                  <div>
                    <span className="font-label text-label-sm uppercase text-gold-highlight tracking-widest block font-bold">
                      Niyam 04 · Evaluation
                    </span>
                    <h3 className="font-display text-headline-md text-cream-parchment mt-1 font-bold">
                      Jury Scorecard
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-bronze-brown border border-gold-highlight font-label text-label-sm uppercase text-gold-highlight tabular-nums font-bold shadow-xs">
                    100 Pts Total
                  </span>
                </div>

                <div className="flex flex-col gap-5 pt-5">
                  {/* Criterion 1 */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-title text-body-md font-bold text-cream-parchment">
                        Innovation &amp; Originality
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-saffron text-dark-chocolate font-label text-label-sm tabular-nums font-bold">
                        30%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-bronze-brown/70 rounded-full overflow-hidden border border-gold-rich/30">
                      <div className="h-full bg-saffron w-[30%] rounded-full shadow-sm" />
                    </div>
                    <span className="font-body text-label-sm text-cream-parchment/90 font-medium">
                      Novelty of problem framing &amp; creative solution design
                    </span>
                  </div>

                  {/* Criterion 2 */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-title text-body-md font-bold text-cream-parchment">
                        Technical Depth
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-gold-highlight text-dark-chocolate font-label text-label-sm tabular-nums font-bold">
                        30%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-bronze-brown/70 rounded-full overflow-hidden border border-gold-rich/30">
                      <div className="h-full bg-gold-highlight w-[30%] rounded-full shadow-sm" />
                    </div>
                    <span className="font-body text-label-sm text-cream-parchment/90 font-medium">
                      Architecture soundness, code quality &amp; working prototype
                    </span>
                  </div>

                  {/* Criterion 3 */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-title text-body-md font-bold text-cream-parchment">
                        Real-World Impact
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-sky-light text-dark-chocolate font-label text-label-sm tabular-nums font-bold">
                        25%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-bronze-brown/70 rounded-full overflow-hidden border border-gold-rich/30">
                      <div className="h-full bg-sky-light w-[25%] rounded-full shadow-sm" />
                    </div>
                    <span className="font-body text-label-sm text-cream-parchment/90 font-medium">
                      Practical viability, user adoption &amp; measurable benefit
                    </span>
                  </div>

                  {/* Criterion 4 */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-title text-body-md font-bold text-cream-parchment">
                        Presentation &amp; Demo
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-cream-parchment text-dark-chocolate font-label text-label-sm tabular-nums font-bold">
                        15%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-bronze-brown/70 rounded-full overflow-hidden border border-gold-rich/30">
                      <div className="h-full bg-cream-parchment w-[15%] rounded-full shadow-sm" />
                    </div>
                    <span className="font-body text-label-sm text-cream-parchment/90 font-medium">
                      Clarity of 5-minute live demo &amp; jury Q&amp;A defense
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-md bg-bronze-brown/70 border border-gold-rich/60 flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-gold-highlight shrink-0" />
                <p className="font-body text-label-sm text-cream-parchment font-medium">
                  <strong className="text-gold-highlight font-bold">Jury Tip:</strong> Live working software always outweighs static slide decks.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Framed Royal FAQ Scroll */}
        <div className="bg-light-surface-container-low border-2 border-gold-rich rounded-lg p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-2 border-b border-gold-rich/60">
            <div>
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold tracking-wider">
                Clarifications
              </span>
              <h3 className="font-headline text-headline-md text-bronze-brown">
                Frequently Asked Questions
              </h3>
            </div>
            <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
              Tap any question to expand
            </span>
          </div>

          <div className="divide-y divide-gold-rich/60">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.qNum} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 cursor-pointer text-left font-title text-title-lg text-dark-chocolate group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-dark-chocolate text-gold-highlight font-label text-label-sm flex items-center justify-center shrink-0 font-bold">
                        {faq.qNum}
                      </span>
                      <span className="font-title text-title-lg text-dark-chocolate group-hover:text-bronze-brown transition-colors">
                        {faq.question}
                      </span>
                    </span>
                    <Sparkles
                      className={`w-5 h-5 text-bronze-brown shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-gold-rich scale-110' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-3 pl-11 pr-6 animate-fadeIn">
                      <p className="font-body text-body-md text-navy-ink font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

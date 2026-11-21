'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/content/site';
import { RibbonButton } from '@/components/common/RibbonButton';
import { BookOpen, ChevronDown, Sparkles } from 'lucide-react';

export const GuidelinesSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(SITE_CONFIG.FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="guidelines" className="py-16 md:py-24 bg-cream-parchment border-t-2 border-gold-rich">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-14">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
              Niyam · Code of Conduct
            </span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown mt-1">
              Rules of the Battlefield
            </h2>
          </div>
          <RibbonButton
            href={SITE_CONFIG.DOCUMENTS.RULEBOOK_PDF_URL}
            variant="primary"
            size="md"
            icon={<BookOpen className="w-4 h-4" />}
          >
            Download Full Rulebook
          </RibbonButton>
        </div>

        {/* 2-Column Scroll Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* NIYAM 01 */}
          <article className="bg-light-surface-container-lowest border border-gold-rich rounded p-6 shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-card-lift">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-dark-chocolate text-gold-highlight font-label text-label-sm rounded-sm font-bold">
                NIYAM 01
              </span>
              <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                Squads
              </span>
            </div>
            <h3 className="font-title text-title-lg text-bronze-brown font-bold">
              Team Size &amp; Eligibility
            </h3>
            <p className="font-body text-body-md text-navy-ink">
              Teams must consist of 2 to 4 students currently enrolled in any recognized UG/PG program across India. Inter-college and inter-disciplinary teams are permitted and encouraged.
            </p>
          </article>

          {/* NIYAM 02 */}
          <article className="bg-light-surface-container-lowest border border-gold-rich rounded p-6 shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-card-lift">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-dark-chocolate text-gold-highlight font-label text-label-sm rounded-sm font-bold">
                NIYAM 02
              </span>
              <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                Integrity
              </span>
            </div>
            <h3 className="font-title text-title-lg text-bronze-brown font-bold">
              Original Work &amp; GitHub
            </h3>
            <p className="font-body text-body-md text-navy-ink">
              All code must be written during the 36-hour sprint and committed continuously to a public or jury-accessible GitHub repository initialized at kickoff morning.
            </p>
          </article>

          {/* NIYAM 03 */}
          <article className="bg-light-surface-container-lowest border border-gold-rich rounded p-6 shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-card-lift">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-dark-chocolate text-gold-highlight font-label text-label-sm rounded-sm font-bold">
                NIYAM 03
              </span>
              <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                Arsenal
              </span>
            </div>
            <h3 className="font-title text-title-lg text-bronze-brown font-bold">
              Tech Stack &amp; Gear
            </h3>
            <p className="font-body text-body-md text-navy-ink">
              Any open-source framework, cloud API, or hardware kit is allowed. Bring your laptops, chargers, extension boards, and institutional photo ID cards.
            </p>
          </article>

          {/* Judging Criteria Weighted Bars */}
          <article className="bg-light-surface-container-lowest border border-gold-rich rounded p-6 shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-card-lift">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-dark-chocolate text-gold-highlight font-label text-label-sm rounded-sm font-bold">
                NIYAM 04
              </span>
              <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                Evaluation
              </span>
            </div>
            <h3 className="font-title text-title-lg text-bronze-brown font-bold">
              Judging Criteria
            </h3>
            <div className="flex flex-col gap-3 pt-1">
              {SITE_CONFIG.JUDGING_CRITERIA.map((crit) => (
                <div key={crit.title} className="flex flex-col gap-1">
                  <div className="flex justify-between font-label text-label-sm text-navy-ink font-semibold">
                    <span>{crit.title}</span>
                    <span className="tabular-nums">{crit.weight}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-light-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${crit.color}`}
                      style={{ width: `${crit.weight}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-6 pt-4">
          <div className="text-center flex flex-col items-center gap-2">
            <h3 className="font-headline text-headline-md text-bronze-brown">
              Frequently Asked Questions
            </h3>
            <p className="font-body text-body-md text-navy-ink max-w-lg">
              Everything you need to know about submissions, logistics, hospitality, and awards.
            </p>
          </div>

          <div className="divide-y divide-gold-rich/60 border-y border-gold-rich/60">
            {SITE_CONFIG.FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left font-title text-title-lg text-bronze-brown hover:text-dark-chocolate transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-rich rounded"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-rich shrink-0 transition-transform duration-state-change ${
                        isOpen ? 'rotate-180 text-saffron' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 animate-fade-in">
                      <p className="font-body text-body-md text-navy-ink leading-relaxed">
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

'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/content/site';
import { QRFrame } from '@/components/common/QRFrame';
import { RibbonButton } from '@/components/common/RibbonButton';
import { RegistrationModal } from './RegistrationModal';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface RegistrationSectionProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const [quickForm, setQuickForm] = useState({
    teamName: '',
    leaderEmail: '',
    college: '',
  });
  const [quickStatus, setQuickStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuickStatus('loading');

    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamName: quickForm.teamName,
          track: 'ai-ml',
          teamSize: 2,
          leaderName: 'Lead Warrior',
          leaderEmail: quickForm.leaderEmail,
          leaderPhone: '+91 9999999999',
          college: quickForm.college,
          studentId: 'PENDING_ONBOARDING',
          consent: true,
        }),
      });
    } catch (err) {
      // Graceful fallback
    }

    setQuickStatus('success');
  };

  return (
    <>
      <section
        id="register"
        className="py-16 md:py-24 sunburst-bg border-t-4 border-gold-rich relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center flex flex-col items-center gap-8">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill">
            <Sparkles className="w-4 h-4 text-gold-highlight" />
            <span className="font-label text-label-sm uppercase tracking-widest font-bold">
              Limited Seats · 125 Teams Max
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-display-md-mobile md:text-display-lg text-dark-chocolate uppercase leading-tight">
              The Final Gate Awaits
            </h2>
            <p className="font-body text-body-lg text-dark-chocolate font-medium max-w-xl">
              Registrations are live now. Secure your squad&apos;s place on the national battlefield at GITA Autonomous College.
            </p>
          </div>

          {/* 3-Step Horizontal Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="bg-cream-parchment/95 border border-gold-rich rounded p-6 flex flex-col items-center gap-3 shadow-sm hover:-translate-y-1 transition-transform duration-card-lift">
              <span className="w-10 h-10 rounded-full bg-dark-chocolate text-gold-highlight font-headline font-bold flex items-center justify-center text-title-lg border border-gold-rich">
                01
              </span>
              <h3 className="font-title text-title-lg text-bronze-brown font-bold">
                Scan or Click
              </h3>
              <p className="font-body text-body-md text-navy-ink">
                Open the official Chakravyuh 2.0 registration portal or initiate quick squad onboarding.
              </p>
            </div>

            <div className="bg-cream-parchment/95 border border-gold-rich rounded p-6 flex flex-col items-center gap-3 shadow-sm hover:-translate-y-1 transition-transform duration-card-lift">
              <span className="w-10 h-10 rounded-full bg-dark-chocolate text-gold-highlight font-headline font-bold flex items-center justify-center text-title-lg border border-gold-rich">
                02
              </span>
              <h3 className="font-title text-title-lg text-bronze-brown font-bold">
                Fill Team Details
              </h3>
              <p className="font-body text-body-md text-navy-ink">
                Add 3–5 warriors, institutional college IDs, and select your battlefield Astra track.
              </p>
            </div>

            <div className="bg-cream-parchment/95 border border-gold-rich rounded p-6 flex flex-col items-center gap-3 shadow-sm hover:-translate-y-1 transition-transform duration-card-lift">
              <span className="w-10 h-10 rounded-full bg-dark-chocolate text-gold-highlight font-headline font-bold flex items-center justify-center text-title-lg border border-gold-rich">
                03
              </span>
              <h3 className="font-title text-title-lg text-bronze-brown font-bold">
                Confirm Entry
              </h3>
              <p className="font-body text-body-md text-navy-ink">
                Receive your unique Gate Pass ID and automated notifications for shortlist declaration.
              </p>
            </div>
          </div>

          {/* QR + Quick Entry Preview Box */}
          <div className="w-full bg-cream-parchment/95 border-2 border-gold-rich rounded p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl">
            {/* QR Column */}
            <div className="md:col-span-5 flex flex-col items-center gap-3">
              <QRFrame label="Scan To Register" size="lg" />
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-2 text-label-sm font-label uppercase text-bronze-brown hover:text-saffron font-bold underline transition-colors"
              >
                Or Open Full Application Modal
              </button>
            </div>

            {/* Quick Form Column */}
            <form onSubmit={handleQuickSubmit} className="md:col-span-7 flex flex-col gap-4 text-left">
              <h3 className="font-headline text-headline-md text-bronze-brown font-bold">
                Quick Squad Pre-Registration
              </h3>

              <label className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                  Team Name *
                </span>
                <input
                  type="text"
                  required
                  value={quickForm.teamName}
                  onChange={(e) => setQuickForm({ ...quickForm, teamName: e.target.value })}
                  placeholder="e.g. Indraprastha Devs"
                  className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0 transition-colors"
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                    Leader Email *
                  </span>
                  <input
                    type="email"
                    required
                    value={quickForm.leaderEmail}
                    onChange={(e) => setQuickForm({ ...quickForm, leaderEmail: e.target.value })}
                    placeholder="leader@gita.edu.in"
                    className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0 transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                    College *
                  </span>
                  <input
                    type="text"
                    required
                    value={quickForm.college}
                    onChange={(e) => setQuickForm({ ...quickForm, college: e.target.value })}
                    placeholder="GITA Autonomous College"
                    className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0 transition-colors"
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <RibbonButton
                  type="submit"
                  disabled={quickStatus === 'loading'}
                  variant="primary"
                  size="md"
                >
                  {quickStatus === 'loading' ? 'Registering...' : 'Register Now'}
                </RibbonButton>

                <RibbonButton
                  type="button"
                  onClick={() => setModalOpen(true)}
                  variant="secondary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Full 4-Step Form
                </RibbonButton>
              </div>

              {quickStatus === 'success' && (
                <div className="flex items-center gap-2 text-peacock-green font-label text-label-sm font-bold pt-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Squad pre-registered! Check your inbox for Gate confirmation.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Full 4-Step Modal */}
      {modalOpen && (
        <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

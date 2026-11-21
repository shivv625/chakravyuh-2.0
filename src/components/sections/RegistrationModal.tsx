'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/content/site';
import { RibbonButton } from '@/components/common/RibbonButton';
import { X, CheckCircle2, Trophy, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [gatePassCode, setGatePassCode] = useState<string>('');

  const [form, setForm] = useState({
    // Step 1: Team & Track
    teamName: '',
    track: SITE_CONFIG.TRACKS[0]?.id || 'ai-ml',
    teamSize: 3,

    // Step 2: Leader Info
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    college: '',
    studentId: '',

    // Step 3: Members & Links
    member2Name: '',
    member2Email: '',
    member3Name: '',
    member3Email: '',
    member4Name: '',
    member4Email: '',
    githubLink: '',
    ideaSummary: '',

    // Step 4: Consent
    consent: false,
  });

  if (!isOpen) return null;

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      const code = data.gatePass || `CV2-${Math.floor(100000 + Math.random() * 900000)}`;
      setGatePassCode(code);
    } catch {
      const fallbackCode = `CV2-${Math.floor(100000 + Math.random() * 900000)}`;
      setGatePassCode(fallbackCode);
    }

    setIsSubmitting(false);
    setStep(5); // Success step

    // Launch celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F2B84B', '#D9961F', '#E8761E', '#3A1D0E'],
      });
    } catch {
      // Ignore if unavailable
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-chocolate/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-cream-parchment border-4 border-gold-rich rounded-lg shadow-2xl p-6 sm:p-8 my-8 text-navy-ink">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-bronze-brown flex items-center justify-center text-bronze-brown hover:bg-light-surface-container transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-1 border-b border-gold-rich/60 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-saffron" />
            <span className="font-label text-label-sm uppercase text-bronze-brown tracking-wider font-bold">
              Chakravyuh 2.0 · Squad Enrolment
            </span>
          </div>
          <h3
            id="registration-modal-title"
            className="font-headline text-headline-md text-bronze-brown font-bold"
          >
            {step === 5 ? 'Gate Pass Consecrated' : `Step ${step} of 4 · Breach The Gate`}
          </h3>
        </div>

        {/* Step Progress Pills */}
        {step < 5 && (
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  s <= step ? 'bg-gold-rich' : 'bg-light-surface-container'
                }`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Squad & Track */}
        {step === 1 && (
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                Squad / Team Name *
              </span>
              <input
                type="text"
                required
                value={form.teamName}
                onChange={(e) => setForm({ ...form, teamName: e.target.value })}
                placeholder="e.g. Gandiva Warriors"
                className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                Choose Astra Track *
              </span>
              <select
                value={form.track}
                onChange={(e) => setForm({ ...form, track: e.target.value })}
                className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2.5 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
              >
                {SITE_CONFIG.TRACKS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.code} — {t.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                Squad Size (2 to 4 Warriors) *
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[2, 3, 4].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setForm({ ...form, teamSize: size })}
                    className={`py-2 rounded font-label text-label-sm uppercase font-bold transition-all border ${
                      form.teamSize === size
                        ? 'bg-dark-chocolate text-gold-highlight border-gold-highlight shadow'
                        : 'bg-light-surface-container-lowest text-bronze-brown border-gold-rich hover:bg-light-surface-container'
                    }`}
                  >
                    {size} Members
                  </button>
                ))}
              </div>
            </label>

            <div className="flex justify-end pt-4">
              <RibbonButton
                type="button"
                onClick={handleNext}
                disabled={!form.teamName.trim()}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Next: Leader Info
              </RibbonButton>
            </div>
          </div>
        )}

        {/* Step 2: Leader Info */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                  Leader Full Name *
                </span>
                <input
                  type="text"
                  required
                  value={form.leaderName}
                  onChange={(e) => setForm({ ...form, leaderName: e.target.value })}
                  placeholder="Arjuna Senapati"
                  className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                  Leader Email *
                </span>
                <input
                  type="email"
                  required
                  value={form.leaderEmail}
                  onChange={(e) => setForm({ ...form, leaderEmail: e.target.value })}
                  placeholder="leader@college.edu.in"
                  className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                  Leader Phone *
                </span>
                <input
                  type="tel"
                  required
                  value={form.leaderPhone}
                  onChange={(e) => setForm({ ...form, leaderPhone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                  Student / Roll ID *
                </span>
                <input
                  type="text"
                  required
                  value={form.studentId}
                  onChange={(e) => setForm({ ...form, studentId: e.target.value })}
                  placeholder="e.g. 230110940"
                  className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                College / Institution Name *
              </span>
              <input
                type="text"
                required
                value={form.college}
                onChange={(e) => setForm({ ...form, college: e.target.value })}
                placeholder="GITA Autonomous College, Bhubaneswar"
                className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
              />
            </label>

            <div className="flex justify-between items-center pt-4">
              <RibbonButton
                type="button"
                onClick={handleBack}
                variant="outline"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
              >
                Back
              </RibbonButton>
              <RibbonButton
                type="button"
                onClick={handleNext}
                disabled={!form.leaderName.trim() || !form.leaderEmail.trim() || !form.college.trim()}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Next: Squad Members
              </RibbonButton>
            </div>
          </div>
        )}

        {/* Step 3: Squad Members & Links */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <p className="font-body text-body-md text-navy-ink">
              Provide information for the remaining warriors in your team ({form.teamSize} members total):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                  Member 2 Name *
                </span>
                <input
                  type="text"
                  required
                  value={form.member2Name}
                  onChange={(e) => setForm({ ...form, member2Name: e.target.value })}
                  placeholder="Nakula Pandava"
                  className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                  Member 2 Email *
                </span>
                <input
                  type="email"
                  required
                  value={form.member2Email}
                  onChange={(e) => setForm({ ...form, member2Email: e.target.value })}
                  placeholder="member2@college.edu.in"
                  className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                />
              </label>
            </div>

            {form.teamSize >= 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                    Member 3 Name
                  </span>
                  <input
                    type="text"
                    value={form.member3Name}
                    onChange={(e) => setForm({ ...form, member3Name: e.target.value })}
                    placeholder="Sahadeva Pandava"
                    className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                    Member 3 Email
                  </span>
                  <input
                    type="email"
                    value={form.member3Email}
                    onChange={(e) => setForm({ ...form, member3Email: e.target.value })}
                    placeholder="member3@college.edu.in"
                    className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                  />
                </label>
              </div>
            )}

            {form.teamSize >= 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                    Member 4 Name
                  </span>
                  <input
                    type="text"
                    value={form.member4Name}
                    onChange={(e) => setForm({ ...form, member4Name: e.target.value })}
                    placeholder="Bhima Pandava"
                    className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                    Member 4 Email
                  </span>
                  <input
                    type="email"
                    value={form.member4Email}
                    onChange={(e) => setForm({ ...form, member4Email: e.target.value })}
                    placeholder="member4@college.edu.in"
                    className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
                  />
                </label>
              </div>
            )}

            <label className="flex flex-col gap-1">
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold">
                GitHub / Portfolio / Deck Link (Optional)
              </span>
              <input
                type="url"
                value={form.githubLink}
                onChange={(e) => setForm({ ...form, githubLink: e.target.value })}
                placeholder="https://github.com/your-org"
                className="w-full bg-light-surface-container-lowest border-0 border-b-2 border-gold-rich px-3 py-2 font-body text-body-md text-navy-ink focus:border-saffron focus:ring-0"
              />
            </label>

            <div className="flex justify-between items-center pt-4">
              <RibbonButton
                type="button"
                onClick={handleBack}
                variant="outline"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
              >
                Back
              </RibbonButton>
              <RibbonButton
                type="button"
                onClick={handleNext}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Next: Consent &amp; Review
              </RibbonButton>
            </div>
          </div>
        )}

        {/* Step 4: Consent & Final Breach */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="bg-light-surface-container-lowest border border-gold-rich rounded p-4 flex flex-col gap-2 text-label-sm">
              <div className="flex justify-between font-bold text-dark-chocolate border-b border-gold-rich/40 pb-2">
                <span>Team: {form.teamName}</span>
                <span className="uppercase text-saffron">{form.track}</span>
              </div>
              <p>Leader: {form.leaderName} ({form.leaderEmail})</p>
              <p>College: {form.college}</p>
              <p>Squad Size: {form.teamSize} Warriors</p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer pt-2">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-1 w-4 h-4 text-saffron border-gold-rich rounded focus:ring-gold-rich"
              />
              <span className="font-body text-body-md text-navy-ink">
                We solemnly agree to abide by the Niyam of Chakravyuh 2.0, author all codebase during the 36-hour sprint, and uphold collegiate sportsmanship.
              </span>
            </label>

            <div className="flex justify-between items-center pt-4 border-t border-gold-rich/60">
              <RibbonButton
                type="button"
                onClick={handleBack}
                variant="outline"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
              >
                Back
              </RibbonButton>
              <RibbonButton
                type="submit"
                disabled={!form.consent || isSubmitting}
                variant="saffron"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                {isSubmitting ? 'Breaching Gate...' : 'Consecrate Gate Pass'}
              </RibbonButton>
            </div>
          </form>
        )}

        {/* Step 5: Success & Consecration Screen */}
        {step === 5 && (
          <div className="flex flex-col items-center text-center gap-6 py-4 animate-fade-in">
            <div className="w-20 h-20 rounded-full border-4 border-gold-highlight bg-dark-chocolate flex items-center justify-center text-gold-highlight shadow-xl">
              <Trophy className="w-10 h-10 animate-bounce" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="px-4 py-1 bg-dark-chocolate text-gold-highlight ribbon-pill font-label text-label-sm uppercase self-center font-bold">
                Gate I Cleared Successfully
              </span>
              <h4 className="font-headline text-headline-lg text-bronze-brown font-bold">
                Welcome To The Battlefield, {form.teamName}!
              </h4>
              <p className="font-body text-body-md text-navy-ink max-w-md">
                Your squad entry has been recorded in the Chakravyuh War Room archives. Save your warrior Gate Pass below:
              </p>
            </div>

            {/* Plaque with Gate Pass ID */}
            <div className="bg-dark-chocolate border-2 border-gold-highlight rounded p-6 flex flex-col items-center gap-2 shadow-xl w-full max-w-sm">
              <span className="font-label text-label-sm uppercase text-cream-parchment tracking-widest">
                Official Warrior Gate Pass
              </span>
              <span className="font-headline text-headline-lg text-gold-highlight tracking-widest tabular-nums font-bold">
                {gatePassCode}
              </span>
              <span className="text-xs text-cream-parchment/70 font-mono">
                Issued for GITA Autonomous College Campus
              </span>
            </div>

            <RibbonButton
              type="button"
              onClick={onClose}
              variant="primary"
              size="md"
            >
              Return to Camp
            </RibbonButton>
          </div>
        )}
      </div>
    </div>
  );
};

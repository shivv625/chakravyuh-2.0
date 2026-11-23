'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { RibbonBannerSection } from '@/components/sections/RibbonBannerSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { GuidelinesSection } from '@/components/sections/GuidelinesSection';
import { GlimpseSection } from '@/components/sections/GlimpseSection';
import { SponsorsSection } from '@/components/sections/SponsorsSection';
import { CoordinatorsModal } from '@/components/sections/CoordinatorsModal';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';
import { IntroVideoTransition } from '@/components/common/IntroVideoTransition';
import { CustomCursor } from '@/components/common/CustomCursor';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [coordinatorsModalOpen, setCoordinatorsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-cream-parchment text-navy-ink selection:bg-gold-highlight selection:text-dark-chocolate">
      {/* 1. Cinematic Intro Video Loading Overlay (Plays smoothly on load, skippable, seamless reveal) */}
      <IntroVideoTransition />

      {/* 2. Custom Gold Cursor Glow on Desktop */}
      <CustomCursor />

      {/* 3. Sticky Responsive Navbar */}
      <Navbar
        onRegisterClick={() => setModalOpen(true)}
        onCoordinatorsClick={() => setCoordinatorsModalOpen(true)}
      />

      {/* 4. Main Section Sequence (Coordinators is opened via modal from navbar, not shown in scroll flow) */}
      <main>
        <HeroSection onRegisterClick={() => setModalOpen(true)} />
        <RibbonBannerSection />
        <AboutSection />
        <TimelineSection />
        <GuidelinesSection />
        <GlimpseSection />
        <SponsorsSection />
        <CommunitySection />
        <ContactSection />
        <RegistrationSection
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </main>

      {/* 5. Institutional Footer */}
      <Footer onCoordinatorsClick={() => setCoordinatorsModalOpen(true)} />

      {/* 6. Coordinators / Commanders Modal Overlay (Opened on navbar/footer click) */}
      <CoordinatorsModal
        isOpen={coordinatorsModalOpen}
        onClose={() => setCoordinatorsModalOpen(false)}
      />
    </div>
  );
}

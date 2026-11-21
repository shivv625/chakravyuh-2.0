import React from 'react';
import Link from 'next/link';
import { RibbonButton } from '@/components/common/RibbonButton';
import { ChakraWatermark } from '@/components/common/ChakraWatermark';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-cream-parchment text-navy-ink sunburst-bg overflow-hidden text-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <ChakraWatermark size="xl" />
      </div>

      <div className="relative z-10 max-w-lg flex flex-col items-center gap-6 bg-light-surface-container-lowest/90 border-4 border-gold-rich rounded-lg p-8 shadow-2xl backdrop-blur-sm">
        <div className="w-16 h-16 rounded-full border-2 border-gold-rich bg-dark-chocolate flex items-center justify-center text-gold-highlight shadow-lg">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-label text-label-sm uppercase text-saffron tracking-widest font-bold">
            Lost in the Labyrinth · 404 Error
          </span>
          <h1 className="font-display text-display-md text-bronze-brown uppercase">
            Path Not Found
          </h1>
          <p className="font-body text-body-md text-navy-ink">
            You have wandered into an uncharted sector of the Kurukshetra battlefield. Return to the main camp to rejoin the forces.
          </p>
        </div>

        <RibbonButton
          href="/"
          variant="primary"
          size="lg"
          icon={<ArrowLeft className="w-5 h-5" />}
        >
          Return to Camp
        </RibbonButton>
      </div>
    </div>
  );
}

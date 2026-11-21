'use client';

import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import { Phone } from 'lucide-react';

export const CoordinatorsSection: React.FC = () => {
  return (
    <section id="coordinators" className="py-16 md:py-24 bg-cream-parchment border-t-2 border-gold-rich">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-10">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
            Faculty &amp; Student Organizing Committee
          </span>
          <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown uppercase">
            The Commanders
          </h2>
        </div>

        {/* 4-Column Desktop Grid / Horizontal Swipe Mobile with Snap */}
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory">
          {SITE_CONFIG.TEAM.map((member) => (
            <article
              key={member.name}
              className="min-w-[270px] snap-center bg-light-surface-container-lowest border-2 border-gold-rich rounded-t-full p-6 flex flex-col items-center text-center gap-4 shadow-sm hover:-translate-y-1.5 transition-transform duration-card-lift"
            >
              <div className="w-28 h-28 rounded-full border-2 border-gold-rich p-1 bg-cream-parchment shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-headline text-title-lg text-bronze-brown font-bold">
                  {member.name}
                </h3>
                <p className="font-label text-label-sm uppercase text-bronze-brown mt-1 font-semibold">
                  {member.role}
                </p>
                {member.department && (
                  <p className="font-label text-xs text-navy-ink/70">
                    {member.department}
                  </p>
                )}
              </div>

              <p className="font-body text-body-md text-navy-ink italic">
                &ldquo;{member.quote}&rdquo;
              </p>

              <a
                href={`tel:${member.phone.replace(/\s+/g, '')}`}
                className="mt-auto inline-flex items-center gap-1.5 font-label text-label-sm text-bronze-brown hover:text-saffron transition-colors tabular-nums font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{member.phone}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

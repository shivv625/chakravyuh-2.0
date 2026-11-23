'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/content/site';
import { RibbonButton } from '@/components/common/RibbonButton';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onRegisterClick?: () => void;
  onCoordinatorsClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onCoordinatorsClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Guidelines', href: '#guidelines' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Coordinators', href: '#coordinators' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section
    const sections = ['hero', 'about', 'timeline', 'guidelines', 'sponsors', 'coordinators', 'contact', 'register'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Trap focus or prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#coordinators') {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (onCoordinatorsClick) {
        onCoordinatorsClick();
      }
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="site-navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-state-change ${
          isScrolled
            ? 'bg-cream-parchment/95 backdrop-blur-md border-b-2 border-gold-rich shadow-md py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="w-10 h-10 rounded-full border-2 border-gold-rich bg-dark-chocolate flex items-center justify-center transition-transform group-hover:rotate-45 duration-card-lift">
              <svg
                className="w-6 h-6 text-gold-highlight"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-title-lg text-dark-chocolate leading-none">
                CHAKRAVYUH
              </span>
              <span className="font-label text-label-sm text-bronze-brown tracking-widest leading-none mt-1">
                2.0 · NATIONAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-label text-label-sm uppercase transition-colors relative py-1 ${
                    isActive
                      ? 'text-saffron font-bold'
                      : 'text-dark-chocolate hover:text-saffron'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <RibbonButton
              href="#register"
              onClick={onRegisterClick}
              variant="primary"
              size="md"
              className="hidden sm:inline-flex"
            >
              Register Now
            </RibbonButton>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-bronze-brown bg-cream-parchment text-bronze-brown hover:bg-light-surface-container transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Parchment Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-50 bg-cream-parchment flex flex-col justify-between p-6 overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between border-b border-gold-rich pb-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-title-lg text-bronze-brown">
                CHAKRAVYUH 2.0
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-bronze-brown text-bronze-brown hover:bg-light-surface-container transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-headline text-headline-md text-bronze-brown hover:text-saffron transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-gold-rich flex flex-col items-center gap-3">
            <RibbonButton
              href="#register"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRegisterClick) onRegisterClick();
              }}
              variant="primary"
              size="lg"
              className="w-full max-w-xs"
            >
              Register Now
            </RibbonButton>
            <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest">
              GITA Autonomous College · BPUT Odisha
            </span>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { Heart, ArrowRight, X, Globe } from 'lucide-react';
import { PageId } from './Navbar';

interface CommunitySupportNoticeProps {
  activePage: PageId;
  showBackToTop: boolean;
  isSuppressed?: boolean;
  onNavigate: (page: PageId) => void;
}

const NOTICE_STORAGE_KEY = 'ilwana_community_support_notice_seen_v1';

export const CommunitySupportNotice: React.FC<CommunitySupportNoticeProps> = ({
  activePage,
  showBackToTop,
  isSuppressed = false,
  onNavigate
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // If the visitor lands on or navigates to 'contribute', mark seen and hide immediately
  useEffect(() => {
    if (activePage === 'contribute') {
      try {
        localStorage.setItem(NOTICE_STORAGE_KEY, 'true');
      } catch {
        // Ignore storage restrictions
      }
      setIsVisible(false);
    }
  }, [activePage]);

  // Show gently once per visitor after 4.5 seconds on the site
  useEffect(() => {
    if (activePage === 'contribute' || isSuppressed) return;

    let alreadySeen = false;
    try {
      alreadySeen = localStorage.getItem(NOTICE_STORAGE_KEY) === 'true';
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      try {
        // Mark as shown immediately so it never repeats or irritates on subsequent visits
        localStorage.setItem(NOTICE_STORAGE_KEY, 'true');
      } catch {
        // Ignore storage restrictions
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [activePage, isSuppressed]);

  const handleDismiss = () => {
    try {
      localStorage.setItem(NOTICE_STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleGoToContributions = () => {
    try {
      localStorage.setItem(NOTICE_STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
    setIsVisible(false);
    onNavigate('contribute');
  };

  if (!isVisible || isSuppressed) return null;

  return (
    <aside
      role="status"
      aria-live="polite"
      aria-label="Community Contributions Invitation"
      className={`fixed right-4 left-4 sm:left-auto sm:right-6 sm:w-[395px] z-[35] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
        showBackToTop ? 'bottom-20 sm:bottom-20' : 'bottom-20 sm:bottom-6'
      }`}
    >
      <div className="bg-[#fcfbf8] border-2 border-[#0f4c5c]/40 rounded-2xl shadow-2xl overflow-hidden">
        {/* Accent Top Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#0f4c5c] via-[#14532d] to-amber-500" />

        <div className="p-4 sm:p-5 space-y-3">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 text-[#14532d]">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0f4c5c] block">
                  Wailwana seerekoo!
                </span>
                <h3 className="font-serif text-base sm:text-lg font-black text-stone-950 leading-tight">
                  Help Put Ilwana on Google
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              className="p-1.5 text-stone-500 hover:text-stone-950 hover:bg-stone-200/70 rounded-lg transition-colors cursor-pointer shrink-0"
              aria-label="Close invitation"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Warm, Purpose-Driven Copy */}
          <p className="text-sm text-stone-800 leading-relaxed font-medium">
            Proud to be <strong className="font-bold text-stone-950">Mwilwana</strong>? Review our
            work &amp; share your <em className="font-semibold">maoni</em>, or support us
            university students with even <strong className="font-bold text-[#14532d]">10/=</strong>{' '}
            to launch the domain on Google Search.
          </p>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              type="button"
              onClick={handleGoToContributions}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#14532d] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 text-rose-300" />
              <span>Community Contributions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleDismiss}
              className="px-3 py-2 text-xs font-bold text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

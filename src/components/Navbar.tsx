import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  Users,
  Shield,
  Book,
  Camera,
  ChevronDown,
  Search,
  Menu,
  X,
  Compass,
  Hammer,
  Sparkles,
  MapPin,
  Heart
} from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export type PageId =
  | 'home'
  | 'history'
  | 'geography'
  | 'language'
  | 'social'
  | 'religion'
  | 'governance'
  | 'arts'
  | 'material'
  | 'glossary'
  | 'documentation'
  | 'contribute'
  | 'gallery';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch?: () => void;
  onOpenAssistant?: () => void;
}

export const SECTIONS: { id: PageId; label: string; number: string; icon: any }[] = [
  { id: 'home', label: 'Home', number: '01', icon: Home },
  { id: 'history', label: 'History & Identity', number: '02', icon: BookOpen },
  { id: 'geography', label: 'Geography & Homeland', number: '03', icon: MapPin },
  { id: 'language', label: 'Kilwana Language', number: '04', icon: Book },
  { id: 'social', label: 'Social & Culture (Our People)', number: '05', icon: Users },
  { id: 'religion', label: 'Belief Systems (Our Faith)', number: '06', icon: Heart },
  { id: 'governance', label: 'Governance & Hayu', number: '07', icon: Shield },
  { id: 'arts', label: 'Arts & Music (Our Culture)', number: '08', icon: Sparkles },
  { id: 'material', label: 'Material Culture & Crafts', number: '09', icon: Hammer },
  { id: 'glossary', label: 'Kilwana Glossary (A–Z)', number: '10', icon: BookOpen },
  { id: 'gallery', label: 'Visual Photo Gallery', number: '11', icon: Camera },
  { id: 'documentation', label: 'Documentation & Sources', number: '12', icon: Compass },
  { id: 'contribute', label: 'Community Contributions', number: '13', icon: Users },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenSearch,
  onOpenAssistant
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll so background home screen never scrolls behind open drawer
  useBodyScrollLock(mobileMenuOpen);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home' as PageId, label: 'Home', icon: Home },
    { id: 'history' as PageId, label: 'History', icon: BookOpen },
    { id: 'social' as PageId, label: 'Our People', icon: Users },
    { id: 'arts' as PageId, label: 'Culture', icon: Shield },
    { id: 'language' as PageId, label: 'Language', icon: Book },
    { id: 'gallery' as PageId, label: 'Gallery', icon: Camera },
    { id: 'governance' as PageId, label: 'Governance', icon: Shield },
    { id: 'glossary' as PageId, label: 'Glossary', icon: BookOpen },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-stone-200/90 shadow-xs">
        {/* Main Header Row */}
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-6 h-20 sm:h-24">
            
            {/* Left Zone: Mobile Menu Button (on the left) + Brand Logo & Typography */}
            <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
              {/* Mobile Menu Button - Positioned on the LEFT */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 bg-[#1b4332] text-white rounded-xl shadow-sm hover:bg-[#14532d] transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                aria-label="Open Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span className="text-xs font-bold hidden sm:inline">Menu</span>
              </button>

              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 sm:gap-3.5 text-left group shrink-0 min-w-0"
                aria-label="Ilwana Community Heritage Homepage"
              >
                <img
                  src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                  alt="Ilwana Community Heritage Emblem"
                  className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-amber-500 shadow-md group-hover:scale-105 transition-transform shrink-0 bg-white"
                />
                <div className="flex flex-col justify-center min-w-0">
                  <span className="font-serif text-lg sm:text-2xl lg:text-3xl font-black text-[#14532d] tracking-tight leading-none group-hover:text-[#064e3b] transition-colors truncate">
                    ILWANA
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs lg:text-sm font-black text-[#166534] tracking-wider uppercase mt-0.5 truncate">
                    COMMUNITY HERITAGE
                  </span>
                  <span className="text-[9.5px] sm:text-xs font-serif italic text-[#78350f] font-semibold tracking-normal mt-0.5 truncate max-w-[160px] sm:max-w-xs md:max-w-md">
                    Preserving the History, Language, Culture, and Heritage of the Wailwana.
                  </span>
                </div>
              </button>
            </div>

            {/* Right Zone: Desktop Floating Capsule Navbar Container */}
            <div className="hidden xl:flex items-center">
              <nav className="bg-white rounded-full border border-stone-300 shadow-sm p-1.5 flex items-center gap-1">
                {navLinks.slice(0, 6).map((item) => {
                  const IconComp = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#1b4332] text-white shadow-xs'
                          : 'text-stone-800 hover:text-[#1b4332] hover:bg-stone-100'
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-600'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                {/* More dropdown */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-stone-800 hover:text-[#1b4332] hover:bg-stone-100 font-bold text-sm transition-colors cursor-pointer"
                >
                  <span>More</span>
                  <ChevronDown className="w-4 h-4 text-stone-500" />
                </button>

                {/* AI Guide Button */}
                {onOpenAssistant && (
                  <button
                    onClick={onOpenAssistant}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0f4c5c] to-[#14532d] text-white hover:from-[#135d70] hover:to-[#1a6b3b] font-bold text-xs transition-all ml-1 cursor-pointer shadow-xs hover:scale-105"
                    title="Ask Ilwana AI Cultural Guide"
                    aria-label="Ask Ilwana AI Cultural Guide"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span className="font-serif">AI Guide</span>
                  </button>
                )}

                {/* Search Icon button */}
                {onOpenSearch && (
                  <button
                    onClick={onOpenSearch}
                    className="p-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-[#1b4332] transition-colors ml-0.5 cursor-pointer"
                    title="Search Archive (Ctrl+K)"
                    aria-label="Search Heritage Content"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </nav>
            </div>

            {/* Mobile / Tablet Quick Search & AI Guide on Right */}
            <div className="flex xl:hidden items-center gap-1.5 shrink-0">
              {onOpenAssistant && (
                <button
                  onClick={onOpenAssistant}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#0f4c5c] to-[#14532d] rounded-full shadow-xs cursor-pointer active:scale-95"
                  aria-label="AI Cultural Guide"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span className="font-serif">AI Guide</span>
                </button>
              )}
              {onOpenSearch && (
                <button
                  onClick={onOpenSearch}
                  className="p-2 text-stone-800 hover:text-[#14532d] hover:bg-stone-100 rounded-full border border-stone-300 cursor-pointer shadow-2xs"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ALWAYS-VISIBLE MOBILE & TABLET HORIZONTAL SCROLL NAV BAR */}
        <div className="xl:hidden border-t border-stone-200 bg-stone-50/95 backdrop-blur-md px-2 py-1.5 shadow-inner">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth px-1">
            {navLinks.map((item) => {
              const IconComp = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1b4332] text-white shadow-xs'
                      : 'bg-white text-stone-800 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-stone-600'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 bg-amber-100 text-amber-950 border border-amber-300 cursor-pointer"
            >
              <span>All 13</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden overscroll-contain">
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity touch-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 left-0 max-w-full flex pr-6 sm:pr-10">
            <aside className="w-screen max-w-md bg-[#fcfbf9] border-r-2 border-stone-300 shadow-2xl flex flex-col overscroll-contain">
              {/* Header */}
              <div className="p-5 sm:p-6 border-b-2 border-stone-300 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/ilwana_logo_5e073fe7.png"
                    alt="Ilwana Logo"
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500 shadow-sm"
                  />
                  <div>
                    <h2 className="font-serif text-lg sm:text-xl font-black text-[#14532d] leading-tight">
                      ILWANA HERITAGE
                    </h2>
                    <p className="text-xs font-bold text-amber-700 mt-0.5">
                      13 Principal Heritage Sections
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-800 hover:bg-stone-100 rounded-xl border border-stone-300 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* AI Cultural Guide Banner in Drawer */}
              {onOpenAssistant && (
                <div className="p-4 pb-0">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAssistant();
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-r from-[#0f4c5c] to-[#14532d] text-white font-black shadow-md cursor-pointer hover:opacity-95 transition-opacity border border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                      <div className="text-left">
                        <span className="text-sm font-black tracking-tight block font-serif">Ilwana AI Cultural Guide</span>
                        <span className="text-[11px] font-normal text-stone-200">Instant answers & language quiz</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold bg-amber-400 text-stone-950 px-2 py-0.5 rounded-full shrink-0">
                      100% Free
                    </span>
                  </button>
                </div>
              )}

              {/* Links list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {SECTIONS.map((sec) => {
                  const isActive = activePage === sec.id;
                  const IconComp = sec.icon;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleNavClick(sec.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#1b4332] text-white font-black shadow-md'
                          : 'text-stone-950 hover:bg-stone-200/80 border border-stone-200 font-bold bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComp className={`w-5 h-5 ${isActive ? 'text-amber-300' : 'text-stone-600'}`} />
                        <span className="text-sm sm:text-base font-black tracking-tight">{sec.label}</span>
                      </div>
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-amber-300' : 'text-stone-500'}`}>
                        {sec.number}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 m-4 bg-amber-50 rounded-xl border-2 border-amber-300 text-xs text-stone-950 space-y-1">
                <p className="font-black text-amber-950">Chaana Do Kweeto</p>
                <p className="leading-relaxed">
                  Preserving the history, Kilwana language, cultural leadership, and indigenous technology of the Wailwana.
                </p>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};

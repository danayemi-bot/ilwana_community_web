import React, { useState } from 'react';
import { Menu, X, BookOpen, Search } from 'lucide-react';

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
  | 'contribute';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch?: () => void;
}

export const SECTIONS: { id: PageId; label: string; number: string }[] = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'history', label: 'History & Identity', number: '02' },
  { id: 'geography', label: 'Geography & Homeland', number: '03' },
  { id: 'language', label: 'Kilwana Language', number: '04' },
  { id: 'social', label: 'Social & Culture', number: '05' },
  { id: 'religion', label: 'Belief Systems', number: '06' },
  { id: 'governance', label: 'Governance & Hayu', number: '07' },
  { id: 'arts', label: 'Arts & Music', number: '08' },
  { id: 'material', label: 'Material Culture', number: '09' },
  { id: 'glossary', label: 'Glossary', number: '10' },
  { id: 'documentation', label: 'Documentation', number: '11' },
  { id: 'contribute', label: 'Future Contributions', number: '12' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-18">
            {/* Zone 1: Wordmark with Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 hover:text-[#0f4c5c] transition-colors whitespace-nowrap shrink-0 group"
              aria-label="Ilwana Community Heritage Homepage"
            >
              <img
                src="/assets/aistudio/image_ae57196b.png"
                alt="Ilwana Community Heritage Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-stone-300 shadow-2xs group-hover:scale-105 transition-transform shrink-0"
              />
              <span>Ilwana Community Heritage</span>
            </button>

            {/* Zone 2: 4-5 concise single-line primary links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
              <button
                onClick={() => handleNavClick('home')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activePage === 'home'
                    ? 'text-[#0f4c5c] font-semibold border-b-2 border-[#0f4c5c]'
                    : 'hover:text-stone-950'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleNavClick('history')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activePage === 'history'
                    ? 'text-[#0f4c5c] font-semibold border-b-2 border-[#0f4c5c]'
                    : 'hover:text-stone-950'
                }`}
              >
                History
              </button>
              <button
                onClick={() => handleNavClick('language')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activePage === 'language'
                    ? 'text-[#0f4c5c] font-semibold border-b-2 border-[#0f4c5c]'
                    : 'hover:text-stone-950'
                }`}
              >
                Language
              </button>
              <button
                onClick={() => handleNavClick('governance')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activePage === 'governance'
                    ? 'text-[#0f4c5c] font-semibold border-b-2 border-[#0f4c5c]'
                    : 'hover:text-stone-950'
                }`}
              >
                Governance
              </button>
              <button
                onClick={() => handleNavClick('arts')}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activePage === 'arts'
                    ? 'text-[#0f4c5c] font-semibold border-b-2 border-[#0f4c5c]'
                    : 'hover:text-stone-950'
                }`}
              >
                Arts & Music
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="whitespace-nowrap shrink-0 text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5 py-1"
                title="View all 12 heritage sections"
              >
                <span>All Sections</span>
                <span className="text-xs font-mono text-stone-400">12</span>
              </button>
            </nav>

            {/* Zone 3: Primary Action (Compulsory Glossary access) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {onOpenSearch && (
                <button
                  onClick={onOpenSearch}
                  className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
                  aria-label="Search Heritage Content"
                  title="Search Archive & Vocabulary"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => handleNavClick('glossary')}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 shadow-xs ${
                  activePage === 'glossary'
                    ? 'bg-[#0f4c5c] text-white ring-2 ring-[#0f4c5c]/30'
                    : 'bg-stone-900 hover:bg-[#0f4c5c] text-white'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Glossary</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
                aria-label="Toggle Navigation Drawer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Section Drawer (Desktop & Mobile) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <aside className="w-screen max-w-md bg-[#fbf9f5] border-l border-stone-200 shadow-2xl flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/image_ae57196b.png"
                    alt="Ilwana Community Heritage Logo"
                    className="w-10 h-10 rounded-full object-cover border border-stone-300 shadow-2xs shrink-0"
                  />
                  <div>
                    <h2 className="font-serif text-lg font-bold text-stone-900">Archive Directory</h2>
                    <p className="text-xs text-stone-500 mt-0.5">12 Principal Heritage Sections</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/50 rounded-md transition-colors"
                  aria-label="Close Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {SECTIONS.map((sec) => {
                  const isActive = activePage === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleNavClick(sec.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-left transition-colors ${
                        isActive
                          ? 'bg-[#0f4c5c] text-white font-medium'
                          : 'text-stone-800 hover:bg-stone-200/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono tabular-nums ${
                            isActive ? 'text-teal-200' : 'text-stone-400'
                          }`}
                        >
                          {sec.number}
                        </span>
                        <span className="text-sm font-medium">{sec.label}</span>
                      </div>
                      {sec.id === 'glossary' && (
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded text-xs font-semibold ${
                            isActive ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'
                          }`}
                        >
                          A–Z
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Drawer Card */}
              <div className="p-4 m-4 bg-stone-100 rounded-lg border border-stone-200 text-xs text-stone-600 space-y-2">
                <p className="font-semibold text-stone-900">Ilwana Heritage Preservation</p>
                <p>
                  A community repository documenting the history, language, governance, and culture of the Wailwana of the River Tana.
                </p>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { GeographyPage } from './pages/GeographyPage';
import { LanguagePage } from './pages/LanguagePage';
import { SocialCulturePage } from './pages/SocialCulturePage';
import { ReligionPage } from './pages/ReligionPage';
import { GovernancePage } from './pages/GovernancePage';
import { ArtsMusicPage } from './pages/ArtsMusicPage';
import { MaterialCulturePage } from './pages/MaterialCulturePage';
import { GlossaryPage } from './pages/GlossaryPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { ContributionsPage } from './pages/ContributionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { CulturalAssistantModal } from './components/CulturalAssistantModal';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync with browser hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'history',
        'geography',
        'language',
        'social',
        'religion',
        'governance',
        'arts',
        'material',
        'glossary',
        'gallery',
        'documentation',
        'contribute',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGlossaryTerm = (termId: string) => {
    setSelectedGlossaryTerm(termId);
    handleNavigate('glossary');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-stone-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Top Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAssistant={() => setAssistantOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
          />
        )}
        {activePage === 'history' && <HistoryPage onNavigate={handleNavigate} />}
        {activePage === 'geography' && <GeographyPage onNavigate={handleNavigate} />}
        {activePage === 'language' && (
          <LanguagePage
            onNavigate={handleNavigate}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
          />
        )}
        {activePage === 'social' && <SocialCulturePage onNavigate={handleNavigate} />}
        {activePage === 'religion' && <ReligionPage onNavigate={handleNavigate} />}
        {activePage === 'governance' && <GovernancePage onNavigate={handleNavigate} />}
        {activePage === 'arts' && <ArtsMusicPage onNavigate={handleNavigate} />}
        {activePage === 'material' && (
          <MaterialCulturePage
            onNavigate={handleNavigate}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
          />
        )}
        {activePage === 'glossary' && (
          <GlossaryPage
            onNavigate={handleNavigate}
            selectedTermId={selectedGlossaryTerm}
            onClearSelectedTerm={() => setSelectedGlossaryTerm(undefined)}
          />
        )}
        {activePage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {activePage === 'documentation' && <DocumentationPage onNavigate={handleNavigate} />}
        {activePage === 'contribute' && <ContributionsPage onNavigate={handleNavigate} />}
      </main>

      {/* Neutral Community Heritage Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Heritage Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectGlossaryTerm={handleSelectGlossaryTerm}
      />

      {/* 100% Free Client-Side AI Cultural Guide Modal */}
      <CulturalAssistantModal
        isOpen={assistantOpen}
        onClose={() => setAssistantOpen(false)}
        onNavigate={handleNavigate}
        onSelectGlossaryTerm={handleSelectGlossaryTerm}
      />

      {/* Floating AI Cultural Guide Action Button */}
      <button
        onClick={() => setAssistantOpen(true)}
        className="fixed bottom-6 left-5 z-30 inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-[#0f4c5c] to-[#14532d] hover:from-[#135d70] hover:to-[#1b6b3e] text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-amber-400/40 font-bold text-xs sm:text-sm cursor-pointer group"
        aria-label="Open Ilwana AI Cultural Guide"
        title="Ask the Ilwana AI Cultural Guide"
      >
        <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
        <span className="font-serif tracking-wide">Ask AI Guide</span>
        <span className="hidden sm:inline text-[10px] uppercase font-mono font-bold bg-amber-400 text-stone-950 px-1.5 py-0.2 rounded-full">
          Free
        </span>
      </button>

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 p-3 bg-stone-900 hover:bg-[#0f4c5c] text-white rounded-full shadow-lg transition-all focus:outline-hidden"
          aria-label="Back to top"
          title="Return to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

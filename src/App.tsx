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
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [searchOpen, setSearchOpen] = useState(false);
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

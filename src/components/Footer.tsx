import React from 'react';
import { PageId, SECTIONS } from './Navbar';
import { BookOpen, Compass, Shield, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Identity & Core Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/image_ae57196b.png"
                alt="Ilwana Community Heritage Logo"
                className="w-10 h-10 rounded-full object-cover border border-stone-700 shadow-xs shrink-0"
              />
              <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                Ilwana Community Heritage
              </h3>
            </div>
            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Preserving the History, Language, Culture, and Heritage of the Wailwana. Dedicated to documenting indigenous knowledge, the Kilwana language, and community governance along the River Tana for present and future generations.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-teal-400" /> River Tana Homeland
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-400" /> Hayu & Gasa Governance
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-400" /> Living Cultural Memory
              </span>
            </div>
          </div>

          {/* Quick Heritage Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Heritage Archive
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="hover:text-white transition-colors"
                >
                  Origins & Migration History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('geography')}
                  className="hover:text-white transition-colors"
                >
                  River Tana & Settlements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('governance')}
                  className="hover:text-white transition-colors"
                >
                  Traditional Hayu & Gasa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('arts')}
                  className="hover:text-white transition-colors"
                >
                  Songs, Dances & Music
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('material')}
                  className="hover:text-white transition-colors"
                >
                  Food, Tools & Beekeeping
                </button>
              </li>
            </ul>
          </div>

          {/* Language & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Language & Community
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('language')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Kilwana Language Centre
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glossary')}
                  className="hover:text-white transition-colors font-medium text-teal-300 flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Complete A–Z Glossary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('social')}
                  className="hover:text-white transition-colors"
                >
                  Kinship & Social Life
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documentation')}
                  className="hover:text-white transition-colors"
                >
                  Sources & Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contribute')}
                  className="hover:text-white transition-colors"
                >
                  Future Contributions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Standard Neutral Footer Requirement */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p className="text-center sm:text-left">
            Ilwana Community Heritage — Preserving the history, language, culture, and heritage of the Wailwana.
          </p>
          <p className="text-stone-500">
            A digital community knowledge-preservation archive.
          </p>
        </div>
      </div>
    </footer>
  );
};

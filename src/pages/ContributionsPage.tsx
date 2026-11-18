import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import {
  Heart,
  Mail,
  Phone,
  Copy,
  CheckCircle2,
  Globe,
  BookOpen,
  ExternalLink
} from 'lucide-react';

interface ContributionsPageProps {
  onNavigate: (page: PageId) => void;
}

const CONTACT_EMAIL = 'wailwanadevelopers@gmail.com';
const AIRTEL_NUMBER = '0106745060';
const RECIPIENT_NAME = 'RAHMA MAALIM';

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall back to execCommand below
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

export const ContributionsPage: React.FC<ContributionsPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(CONTACT_EMAIL);
    if (ok) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  const handleCopyPhone = async () => {
    const ok = await copyToClipboard(AIRTEL_NUMBER);
    if (ok) {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 3000);
    }
  };

  const amounts = ['10/=', '20/=', '30/=', '50/=', '100/=', '500/=', '1000/='];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Header & Main Community Callout */}
      <header className="space-y-5 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c]">
          <Heart className="w-4 h-4 text-rose-600" />
          <span>Section 13 · Community Contributions & Support</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Wailwana seerekoo!!!!
        </h1>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#0f4c5c] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#14532d]">
            <Globe className="w-4 h-4" />
            <span>Domain & Google Search Setup</span>
          </div>
          <p className="text-base sm:text-xl text-stone-950 leading-relaxed font-medium">
            Tunataka tu set mambo vizuri na ili uki search kwa google , the name{' '}
            <strong className="font-black text-[#0f4c5c]">ilwana/wailwana/kilwana</strong> , hiyo
            website inaonekana. But we want our community to prove it by reviewing the website and
            support us ile pesa kidogo yenye mtu anayo, coz step tumefika google inaitisha pesa! And
            we are still students at <strong className="font-black">UNIVERSITY</strong>.
          </p>
        </div>
      </header>

      {/* Reviews / Concerns Email Card */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-5">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-[#0f4c5c]">
            <Mail className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0f4c5c]">
              Maoni & Marekebisho
            </span>
            <h2 className="font-serif text-2xl font-black text-stone-950">
              Maoni/marekebisho tuma kwa email:
            </h2>
            <p className="text-sm sm:text-base text-stone-700 font-medium">
              Review the website and send any concerns, corrections, or suggestions directly to our
              student development team email below.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#fdfbf7] p-4 sm:p-5 rounded-xl border-2 border-stone-300">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="text-left font-mono text-base sm:text-xl font-black text-stone-950 break-all hover:text-[#0f4c5c] transition-colors cursor-pointer"
            title="Tap to copy email address"
          >
            {CONTACT_EMAIL}
          </button>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-bold transition-colors cursor-pointer shadow-xs ${
                copiedEmail
                  ? 'bg-[#14532d] text-white'
                  : 'bg-[#0f4c5c] hover:bg-[#135d70] text-white'
              }`}
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Maoni%20%2F%20Marekebisho%20-%20Ilwana%20Website`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm sm:text-base font-bold bg-stone-100 hover:bg-stone-200 text-stone-950 border-2 border-stone-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Airtel Money Support Card */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-6">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 text-rose-700">
            <Phone className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
              Support University Students · Domain & Google Setup
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-black text-stone-950 leading-snug">
              If you are proud to be Mwilwana, Mchango wako pia ata kama ni shilingi 10 , 20, 30, 50,
              100, 500, ...1000/= :
            </h2>
          </div>
        </div>

        {/* Contribution Amounts */}
        <div className="flex flex-wrap gap-2">
          {amounts.map((amount) => (
            <span
              key={amount}
              className="px-3.5 py-1.5 bg-[#fdfbf7] border-2 border-stone-300 rounded-lg font-mono text-sm font-black text-stone-950"
            >
              {amount}
            </span>
          ))}
        </div>

        {/* Send Money Details Box */}
        <div className="bg-[#fdfbf7] p-5 sm:p-6 rounded-2xl border-2 border-[#14532d] space-y-5">
          <div className="inline-block px-3 py-1 bg-[#14532d] text-white text-xs font-mono font-black uppercase tracking-widest rounded-md">
            SEND MONEY · AIRTEL MONEY
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 block">
                AIRTEL NUMBER
              </span>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="font-mono text-3xl sm:text-4xl font-black tracking-wider text-stone-950 hover:text-[#14532d] transition-colors cursor-pointer text-left"
                title="Tap to copy Airtel number"
              >
                {AIRTEL_NUMBER}
              </button>
            </div>

            <div className="space-y-1 sm:border-l-2 sm:border-stone-300 sm:pl-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 block">
                NAME
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
                {RECIPIENT_NAME}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyPhone}
              className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold transition-colors cursor-pointer shadow-xs ${
                copiedPhone
                  ? 'bg-[#0f4c5c] text-white'
                  : 'bg-[#14532d] hover:bg-[#166534] text-white'
              }`}
            >
              {copiedPhone ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Number Copied! ({AIRTEL_NUMBER})</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy Airtel Number ({AIRTEL_NUMBER})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="bg-gradient-to-r from-[#0f4c5c] to-[#14532d] text-white p-6 sm:p-8 rounded-2xl shadow-md text-center space-y-4">
        <p className="font-serif text-2xl sm:text-3xl font-black tracking-wide">
          WAILWANA TO THE WORLD. WAILWANA HOYEEEE!!!
        </p>
        <div className="pt-1 flex justify-center">
          <button
            type="button"
            onClick={() => onNavigate('glossary')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white text-sm font-bold rounded-xl border border-white/30 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore the Ilwana Cultural Glossary</span>
          </button>
        </div>
      </section>
    </div>
  );
};

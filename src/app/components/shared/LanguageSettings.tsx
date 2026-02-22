import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Check } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { useApp } from '../AppContext';

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇦🇪' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷' },
];

export default function LanguageSettings() {
  const navigate = useNavigate();
  const { userType } = useApp();
  const [selected, setSelected] = useState('en');

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="bg-white shrink-0 border-b border-[#F0F0F0]">
        <StatusBar />
        <div className="flex items-center px-4 h-14">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-[#F8F8F8] rounded-full flex items-center justify-center shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]"
          >
            <ChevronRight size={16} color="#333" className="rotate-180" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '20px', fontWeight: 600 }}>
            Languages
          </p>
          <div className="w-9" />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="bg-white rounded-[16px] overflow-hidden" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          {LANGUAGES.map((lang, i) => (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-4 ${i > 0 ? 'border-t border-[#F8F8F8]' : ''}`}
            >
              <span style={{ fontSize: '24px' }}>{lang.flag}</span>
              <div className="flex-1 flex flex-col items-start">
                <span
                  className="text-[#050B2E]"
                  style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '16px', fontWeight: selected === lang.code ? 600 : 400 }}
                >
                  {lang.name}
                </span>
                <span className="text-[#999]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '13px' }}>
                  {lang.native}
                </span>
              </div>
              {selected === lang.code && <Check size={18} color="#01CBD2" />}
            </button>
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="px-4 pb-4 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="w-full h-11 bg-[#01CBD2] rounded-full text-white"
          style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '16px', fontWeight: 600 }}
        >
          Save Language
        </button>
      </div>

      <BottomNav userType={userType === 'agent' ? 'agent' : 'investor'} />
    </div>
  );
}

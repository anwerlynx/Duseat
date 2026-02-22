import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { useApp } from '../AppContext';

const FAQS = [
  {
    q: 'How does Duseat work?',
    a: 'Duseat connects investors with verified real estate agents. Investors post property requests and agents submit tailored offers. Once matched, they communicate via in-app chat to close deals.',
  },
  {
    q: 'How do I post a property request?',
    a: 'Go to the Home tab and tap the "+" button. Fill in your requirements — property type, budget, location, and payment plan — and submit. Agents will start sending you offers.',
  },
  {
    q: 'How are agents verified?',
    a: 'All agents on Duseat must upload their RERA license, Emirates ID, and trade license. Our team manually reviews and approves each agent before they can submit offers.',
  },
  {
    q: 'Can I contact an agent before accepting an offer?',
    a: 'Yes! Once an agent submits an offer, you can open a chat with them directly from the offer card to ask questions before making a decision.',
  },
  {
    q: 'What is the "Upgrade to Plus" plan?',
    a: 'Plus gives investors priority matching, advanced filtering, and early access to off-plan launches. Agents get unlimited offer submissions and featured profile placement.',
  },
  {
    q: 'How do I delete my account?',
    a: `Go to Profile \u2192 Edit profile \u2192 Delete account. You'll be asked for a reason, then you must type "delete account" to confirm. Accounts are permanently removed after 14 days.`,
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Duseat uses industry-standard encryption for all data. Your personal information is never shared with third parties without your consent.',
  },
];

export default function FaqPage() {
  const navigate = useNavigate();
  const { userType } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            FAQ
          </p>
          <div className="w-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="text-[#666] mb-4" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '14px' }}>
          Frequently asked questions
        </p>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] overflow-hidden"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-3 px-4 py-4 text-left"
              >
                <p
                  className="flex-1 text-[#050B2E]"
                  style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px', fontWeight: openIndex === i ? 600 : 400 }}
                >
                  {faq.q}
                </p>
                <ChevronDown
                  size={18}
                  color="#01CBD2"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 border-t border-[#F8F8F8]">
                  <p className="text-[#666] pt-3" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '14px', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav userType={userType === 'agent' ? 'agent' : 'investor'} />
    </div>
  );
}

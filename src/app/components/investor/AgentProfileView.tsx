import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, MoreHorizontal, MessageCircle, Info, Star, X, CheckCircle2 } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { MOCK_AGENTS } from '../MockData';

const DUBAI_BG = 'https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800';

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
      <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= Math.floor(rating) ? '#FFC42D' : i - 0.5 <= rating ? 'url(#halfYellow)' : '#E8E8E8'}>
          <defs>
            <linearGradient id="halfYellow">
              <stop offset="50%" stopColor="#FFC42D" />
              <stop offset="50%" stopColor="#E8E8E8" />
            </linearGradient>
          </defs>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function AgentProfileView() {
  const navigate = useNavigate();
  const { agentId } = useParams<{ agentId: string }>();
  const [showMenu, setShowMenu] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);
  const [hireMessage, setHireMessage] = useState('');
  const [hireSubmitted, setHireSubmitted] = useState(false);

  const agent = MOCK_AGENTS.find(a => a.id === agentId) || MOCK_AGENTS[0];

  const ratingBreakdown = [
    { label: 'COMMUNICATION', score: 5.0 },
    { label: 'RELEVANCE', score: 4.8 },
    { label: 'COMMITMENT', score: 4.9 },
  ];

  const handleHireSubmit = () => {
    setHireSubmitted(true);
    setTimeout(() => {
      setShowHireModal(false);
      setHireSubmitted(false);
      setHireMessage('');
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="flex items-center px-4 h-14">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-[#01CBD2] rounded-full flex items-center justify-center"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <ChevronLeft size={18} color="white" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            Profile
          </p>
          <button
            onClick={() => setShowMenu(true)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center border border-[#E8E8E8]"
          >
            <MoreHorizontal size={18} color="#050B2E" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        {/* Cover */}
        <div className="relative h-24 bg-[#050B2E] overflow-hidden">
          <img src={DUBAI_BG} alt="Cover" className="w-full h-full object-cover opacity-60" />
        </div>

        {/* Profile card */}
        <div className="bg-white px-4 pb-5 mb-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="-mt-9 mb-3">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-[75px] h-[75px] rounded-full object-cover border-4 border-white"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            />
          </div>

          {/* Name + verified */}
          <div className="flex items-center gap-2 mb-1">
            <p className="text-[#050B2E]" style={{ fontSize: '21px', fontWeight: 600 }}>{agent.name}</p>
            {agent.verified && <VerifiedBadge />}
            {agent.title === 'Pro Agent' && (
              <div className="bg-[rgba(255,233,177,0.71)] rounded-[12px] px-1.5 py-0.5">
                <span style={{ fontSize: '12px' }}>🏆</span>
              </div>
            )}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="border border-[#E8E8E8] bg-[rgba(1,2,11,0.04)] rounded-full px-2.5 py-1 text-[#050B2E]" style={{ fontSize: '12px', fontWeight: 500 }}>
              {agent.title}
            </span>
            {agent.reraVerified && (
              <span className="bg-[#CCFDFF] text-[#019398] rounded-full px-2.5 py-1" style={{ fontSize: '12px', fontWeight: 500 }}>
                Rera verified
              </span>
            )}
          </div>

          {/* Achievement badges */}
          <div className="space-y-1.5 mb-3">
            {agent.badges.map((badge, i) => (
              <div
                key={badge}
                className={`flex items-center gap-2 rounded-full px-3 py-1 self-start w-fit ${i === 0 ? 'bg-gradient-to-r from-[#FFC42D] to-transparent' : 'bg-gradient-to-r from-[#FF8981] to-transparent'}`}
                style={{ border: `2px solid ${i === 0 ? '#AF7E00' : '#BE1A0E'}`, borderRight: 'none' }}
              >
                <span style={{ fontSize: '12px' }}>{i === 0 ? '🏆' : '🔥'}</span>
                <span style={{ fontSize: '11px', fontWeight: 600, color: i === 0 ? '#745400' : '#970A00' }}>{badge}</span>
              </div>
            ))}
          </div>

          <p className="text-[#666] mb-4" style={{ fontSize: '13px', lineHeight: 1.5 }}>{agent.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowHireModal(true)}
              className="flex-1 h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} color="white" />
              <span className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>Hire me</span>
            </button>
            <button
              className="flex-1 h-11 border border-[#E8E8E8] bg-white rounded-full flex items-center justify-center gap-2"
              onClick={() => {
                const el = document.getElementById('bio-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Info size={15} color="#050B2E" />
              <span className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 500 }}>More about agent</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mx-4 mb-4">
          {[
            { value: `${agent.deals}+`, label: 'Deals' },
            { value: agent.experience, label: 'Exp' },
            { value: `${agent.rating}`, label: 'Avg rate' },
          ].map(stat => (
            <div key={stat.label} className="flex-1 bg-white rounded-[14px] p-3 text-center" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p className="text-[#050B2E]" style={{ fontSize: '18px', fontWeight: 700 }}>{stat.value}</p>
              <p className="text-[#999]" style={{ fontSize: '11px' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Investor Reviews */}
        <div className="bg-white mx-4 rounded-[16px] p-4 mb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#050B2E]" style={{ fontSize: '17px', fontWeight: 700 }}>Investor Reviews</p>
            <span className="text-[#01CBD2]" style={{ fontSize: '13px', fontWeight: 500 }}>See all</span>
          </div>
          <div className="border-b border-[#D5D5D5] pb-3 mb-3">
            <div className="flex gap-4">
              <div>
                <p style={{ fontSize: '38px', fontWeight: 800, color: '#050B2E', lineHeight: 1 }}>
                  {agent.rating}
                  <span style={{ fontSize: '15px', color: '#999', fontWeight: 400 }}>/5.0</span>
                </p>
                <StarRating rating={agent.rating} />
                <p className="text-[#999] mt-1" style={{ fontSize: '12px' }}>{agent.reviews} Reviews</p>
              </div>
              <div className="flex-1 space-y-2">
                {ratingBreakdown.map(r => (
                  <div key={r.label}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[#999]" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>{r.label}</span>
                      <span className="text-[#050B2E]" style={{ fontSize: '11px', fontWeight: 600 }}>{r.score}</span>
                    </div>
                    <div className="h-1.5 bg-[#999] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#01CBD2] rounded-full"
                        style={{ width: `${(r.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#999] italic" style={{ fontSize: '13px', lineHeight: 1.5 }}>
            "Alexander's knowledge of Dubai Hills is unparalleled. He secured a pre-launch unit for me that has already seen 15% appreciation."
          </p>
          <p className="text-[#333] mt-1" style={{ fontSize: '12px', fontWeight: 600 }}>— J. Miller, Private Investor</p>
        </div>

        {/* Core Expertise */}
        <div className="bg-white mx-4 rounded-[16px] p-4 mb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p className="text-[#050B2E] mb-3" style={{ fontSize: '17px', fontWeight: 700 }}>Core Expertise</p>
          <div className="flex flex-wrap gap-2">
            {agent.expertise.map(tag => (
              <span
                key={tag}
                className="rounded-full px-3 py-1"
                style={{ fontSize: '12px', fontWeight: 500, background: 'rgba(1,203,210,0.1)', color: '#01CBD2', border: '1px solid rgba(1,203,210,0.21)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div id="bio-section" className="bg-white mx-4 rounded-[16px] p-4 mb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p className="text-[#050B2E] mb-3" style={{ fontSize: '17px', fontWeight: 700 }}>Bio & Specializations</p>
          <p className="text-[#666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>{agent.bio}</p>
        </div>
      </div>

      {/* Menu Bottom Sheet */}
      {showMenu && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowMenu(false)} />
          <div className="relative bg-white rounded-t-[24px] pb-8">
            <div className="w-10 h-1 bg-[#050B2E] rounded-full mx-auto mt-3 mb-4" />
            {[
              { label: 'About this account', action: () => setShowMenu(false) },
              { label: 'Copy profile URL', action: () => setShowMenu(false) },
              { label: 'Share this profile', action: () => setShowMenu(false) },
            ].map(item => (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full text-left px-6 py-4 border-b border-[#F8F8F8]"
                style={{ fontSize: '16px', color: '#050B2E' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setShowMenu(false)}
              className="w-full text-left px-6 py-4"
              style={{ fontSize: '16px', color: '#BE1A0E' }}
            >
              Report
            </button>
          </div>
        </div>
      )}

      {/* Hire Me Modal */}
      {showHireModal && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => !hireSubmitted && setShowHireModal(false)} />
          <div className="relative bg-white rounded-t-[24px] pb-8">
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <p className="text-[#050B2E]" style={{ fontSize: '18px', fontWeight: 700 }}>Send Hire Request</p>
              {!hireSubmitted && (
                <button onClick={() => setShowHireModal(false)}>
                  <X size={20} color="#999" />
                </button>
              )}
            </div>

            {hireSubmitted ? (
              <div className="px-5 py-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-[#F0FBFB] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} color="#01CBD2" />
                </div>
                <p className="text-[#050B2E]" style={{ fontSize: '18px', fontWeight: 700 }}>Request Sent!</p>
                <p className="text-[#999] text-center mt-1" style={{ fontSize: '14px' }}>
                  {agent.name} will review your hire request shortly.
                </p>
              </div>
            ) : (
              <div className="px-5 pt-2">
                {/* Agent mini card */}
                <div className="flex items-center gap-3 bg-[#F8F8F8] rounded-[12px] p-3 mb-4">
                  <img src={agent.avatar} alt={agent.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>{agent.name}</span>
                      {agent.verified && <VerifiedBadge />}
                    </div>
                    <span className="text-[#999]" style={{ fontSize: '12px' }}>{agent.title}</span>
                  </div>
                </div>

                <p className="text-[#050B2E] mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
                  Tell the agent about your requirements
                </p>
                <div
                  className="rounded-[12px] border border-[#01CBD2] mb-4"
                  style={{ boxShadow: '0 1px 5px rgba(0,0,0,0.06)' }}
                >
                  <textarea
                    value={hireMessage}
                    onChange={e => setHireMessage(e.target.value)}
                    placeholder="Describe the type of property you are looking for, your budget range, and any specific requirements..."
                    className="w-full p-3 outline-none bg-transparent resize-none text-[#050B2E]"
                    style={{ fontSize: '14px', height: '130px', lineHeight: 1.5 }}
                  />
                </div>

                <button
                  onClick={handleHireSubmit}
                  disabled={!hireMessage.trim()}
                  className="w-full h-12 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <MessageCircle size={16} color="white" />
                  <span className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>Send Request</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

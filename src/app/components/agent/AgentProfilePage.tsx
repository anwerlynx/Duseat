import { useNavigate } from 'react-router';
import { ChevronLeft, Settings, MessageCircle } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { CURRENT_AGENT } from '../MockData';
import { useApp } from '../AppContext';

const DUBAI_BG = 'https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800';
const AGENT_PHOTO = 'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';

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
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= Math.floor(rating) ? '#FFC42D' : i - 0.5 <= rating ? 'url(#halfGold)' : '#E8E8E8'}>
          <defs>
            <linearGradient id="halfGold">
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

export default function AgentProfilePage() {
  const navigate = useNavigate();
  const { userName, logout } = useApp();

  const ratingBreakdown = [
    { label: 'COMMUNICATION', score: 5.0 },
    { label: 'RELEVANCE', score: 4.8 },
    { label: 'COMMITMENT', score: 4.9 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="flex items-center px-4 h-14 border-b border-[#F8F8F8]">
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
            onClick={() => navigate('/agent/settings')}
            className="w-9 h-9 bg-[#01CBD2] rounded-full flex items-center justify-center"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <Settings size={17} color="white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        {/* Cover + Avatar overlap container */}
        <div className="relative">
          {/* Cover image */}
          <div className="h-28 bg-[#050B2E]">
            <img src={DUBAI_BG} alt="Cover" className="w-full h-full object-cover opacity-60" />
          </div>

          {/* Profile avatar — sits on top of cover */}
          <div className="absolute left-4 bottom-0 translate-y-1/2 z-10">
            <img
              src={AGENT_PHOTO}
              alt="Agent"
              className="w-[80px] h-[80px] rounded-full object-cover border-4 border-white"
              style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.18)' }}
            />
          </div>
        </div>

        {/* Profile card */}
        <div className="bg-white px-4 pb-5 mb-4 pt-12" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>

          {/* Name + verified + trophy */}
          <div className="flex items-center gap-2 mb-1">
            <p className="text-[#050B2E]" style={{ fontSize: '21px', fontWeight: 600 }}>{userName || CURRENT_AGENT.name}</p>
            <VerifiedBadge />
            <div className="bg-[rgba(255,233,177,0.71)] rounded-[12px] px-1.5 py-0.5">
              <span style={{ fontSize: '12px' }}>🏆</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="border border-[#E8E8E8] bg-[rgba(1,2,11,0.04)] rounded-full px-2.5 py-1 text-[#050B2E]" style={{ fontSize: '12px', fontWeight: 500 }}>
              Pro agent
            </span>
            <span className="bg-[#CCFDFF] text-[#019398] rounded-full px-2.5 py-1" style={{ fontSize: '12px', fontWeight: 500 }}>
              Rera verified
            </span>
          </div>

          {/* Achievement badges */}
          <div className="space-y-1.5 mb-3">
            <div
              className="flex items-center gap-2 rounded-full px-3 py-1.5 w-fit"
              style={{ background: 'linear-gradient(90deg, #FFC42D 0%, transparent 100%)', borderLeft: '2px solid #AF7E00' }}
            >
              <span style={{ fontSize: '12px' }}>🏆</span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#745400' }}>RANK 1# ON DUSEAT THIS MONTH</span>
            </div>
            <div
              className="flex items-center gap-2 rounded-full px-3 py-1.5 w-fit"
              style={{ background: 'linear-gradient(90deg, #FF8981 0%, transparent 100%)', borderLeft: '2px solid #BE1A0E' }}
            >
              <span style={{ fontSize: '12px' }}>🔥</span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#970A00' }}>Hit 25 million sales on Duseat</span>
            </div>
          </div>

          <p className="text-[#666] mb-4" style={{ fontSize: '13px', lineHeight: 1.5 }}>
            Helps investors achieve 7–9% annual ROI in Dubai Hills & Downtown
          </p>

          {/* Edit profile button */}
          <button
            onClick={() => navigate('/agent/edit-profile')}
            className="w-full h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
          >
            <MessageCircle size={15} color="white" />
            <span className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>Edit profile</span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mx-4 mb-4">
          {[
            { value: '150+', label: 'Deals' },
            { value: '8 yrs', label: 'Exp' },
            { value: '4.9', label: 'Avg rate' },
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
                  4.9<span style={{ fontSize: '15px', color: '#999', fontWeight: 400 }}>/5.0</span>
                </p>
                <StarRating rating={4.9} />
                <p className="text-[#999] mt-1" style={{ fontSize: '12px' }}>125 Reviews</p>
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
            {CURRENT_AGENT.expertise.map(tag => (
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

        {/* Bio & Specializations */}
        <div className="bg-white mx-4 rounded-[16px] p-4 mb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p className="text-[#050B2E] mb-3" style={{ fontSize: '17px', fontWeight: 700 }}>Bio & Specializations</p>
          <p className="text-[#666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>{CURRENT_AGENT.bio}</p>
        </div>

        {/* Plans */}
        <div className="mx-4 mb-2">
          <button
            onClick={() => navigate('/agent/plans')}
            className="w-full h-11 bg-[#050B2E] rounded-full flex items-center justify-center gap-2 mb-2"
          >
            <span style={{ fontSize: '16px' }}>🏆</span>
            <span className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>Upgrade Plan</span>
          </button>
          <button
            onClick={() => { logout(); navigate('/'); }}
            className="w-full h-11 border border-[#E8E8E8] rounded-full text-[#999]"
            style={{ fontSize: '15px' }}
          >
            Log Out
          </button>
        </div>
      </div>

      <BottomNav userType="agent" />
    </div>
  );
}

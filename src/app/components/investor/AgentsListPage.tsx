import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Search, Star } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { MOCK_AGENTS } from '../MockData';

function VerifiedBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
      <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AgentsListPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = MOCK_AGENTS.filter(a =>
    search === '' ||
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.expertise.some(e => e.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
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
            Browse Agents
          </p>
          <div className="w-9" />
        </div>
        {/* Search */}
        <div className="px-4 pb-3 pt-2">
          <div className="flex items-center gap-2 bg-[#F8F8F8] rounded-[12px] px-3 h-10">
            <Search size={15} color="#A6A6A6" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name or expertise..."
              className="flex-1 outline-none bg-transparent text-[#050B2E]"
              style={{ fontSize: '14px' }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-4 space-y-3">
        {filtered.map(agent => (
          <button
            key={agent.id}
            onClick={() => navigate(`/investor/agent/${agent.id}`)}
            className="w-full bg-white rounded-[16px] p-4 text-left"
            style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-start gap-3">
              <div className="relative shrink-0">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {agent.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#0ED221] rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>{agent.name}</p>
                  {agent.verified && <VerifiedBadge />}
                  {agent.title === 'Pro Agent' && (
                    <span style={{ fontSize: '14px' }}>🏆</span>
                  )}
                </div>
                <div className="flex gap-2 mb-1">
                  <span className="bg-[rgba(1,2,11,0.04)] rounded-full px-2 py-0.5 text-[#050B2E]" style={{ fontSize: '11px', fontWeight: 500 }}>
                    {agent.title}
                  </span>
                  {agent.reraVerified && (
                    <span className="bg-[#CCFDFF] text-[#019398] rounded-full px-2 py-0.5" style={{ fontSize: '11px', fontWeight: 500 }}>
                      RERA verified
                    </span>
                  )}
                </div>
                <p className="text-[#666] mb-2 truncate" style={{ fontSize: '12px', lineHeight: 1.4 }}>{agent.subtitle}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#FFC42D" color="#FFC42D" />
                    <span style={{ fontSize: '12px', color: '#050B2E', fontWeight: 600 }}>{agent.rating}</span>
                    <span className="text-[#999]" style={{ fontSize: '11px' }}>({agent.reviews})</span>
                  </div>
                  <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>•</span>
                  <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>{agent.deals} deals</span>
                  <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>•</span>
                  <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>{agent.experience}</span>
                </div>
              </div>
              <ChevronLeft size={16} color="#CCC" className="rotate-180 shrink-0 mt-1" />
            </div>
            {/* Expertise tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {agent.expertise.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="rounded-full px-2 py-0.5"
                  style={{ fontSize: '10px', fontWeight: 500, background: 'rgba(1,203,210,0.1)', color: '#01CBD2' }}
                >
                  {tag}
                </span>
              ))}
              {agent.expertise.length > 3 && (
                <span className="text-[#A6A6A6]" style={{ fontSize: '10px' }}>+{agent.expertise.length - 3} more</span>
              )}
            </div>
          </button>
        ))}
      </div>

      <BottomNav userType="investor" />
    </div>
  );
}

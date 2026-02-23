import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Bell, Search, ChevronRight, Star, MessageCircle } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { MOCK_REQUESTS, MOCK_AGENTS, MY_REQUESTS } from '../MockData';
import { useApp } from '../AppContext';
// @ts-ignore
import logoIcon from '../../../assets/logo-icon.png';

const INVESTOR_PHOTO = 'https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';

function VerifiedBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
      <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InvestorHome() {
  const navigate = useNavigate();
  const { userName } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRequests = MOCK_REQUESTS.filter(r =>
    searchQuery === '' ||
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <div className="bg-white shrink-0">
        <StatusBar />
        {/* Header */}
        <div className="px-4 pt-2 pb-3 border-b border-[rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/investor/profile')}>
                <img
                  src={INVESTOR_PHOTO}
                  alt="Investor"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
                />
              </button>
              <div>
                <p className="text-[#050B2E]" style={{ fontSize: '17px' }}>
                  <span className="text-[#01CBD2]" style={{ fontWeight: 600 }}>Hello,</span>
                  {' '}
                  <span style={{ fontWeight: 500 }}>{userName || 'Mohamed'}</span>
                </p>
                <p className="text-[#999]" style={{ fontSize: '11px' }}>Discover requests &amp; top agents</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="Duseat" className="h-7 w-auto opacity-80" />
              <button
                onClick={() => navigate('/investor/chats')}
                className="w-9 h-9 bg-[#F8F8F8] rounded-full flex items-center justify-center relative"
              >
                <MessageCircle size={18} color="#050B2E" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#01CBD2] rounded-full" />
              </button>
              <button
                onClick={() => navigate('/investor/notifications')}
                className="w-9 h-9 bg-[#F8F8F8] rounded-full flex items-center justify-center relative"
              >
                <Bell size={18} color="#050B2E" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E31D1C] rounded-full" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        {/* Search */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-2 bg-white rounded-[12px] px-3 h-11" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <Search size={16} color="#A6A6A6" />
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search requests by area or type..."
              className="flex-1 outline-none text-[#050B2E] bg-transparent"
              style={{ fontSize: '14px' }}
            />
          </div>
        </div>

        {/* My Activity Quick Link */}
        <div className="px-4 pb-3">
          <button
            onClick={() => navigate('/investor/activity')}
            className="w-full bg-[#050B2E] rounded-[14px] p-3 flex items-center justify-between"
            style={{ boxShadow: '0 4px 16px rgba(5,11,46,0.25)' }}
          >
            <div className="text-left">
              <p className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>My Activity</p>
              <p className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>
                {MY_REQUESTS.length} requests · {MY_REQUESTS.reduce((a, r) => a + r.offersCount, 0)} offers received
              </p>
            </div>
            <ChevronRight size={18} color="#01CBD2" />
          </button>
        </div>

        {/* Browse Agents Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between px-4 mb-3">
            <p className="text-[#050B2E]" style={{ fontSize: '17px', fontWeight: 700 }}>Browse Agents</p>
            <button
              onClick={() => navigate('/investor/agents')}
              className="text-[#01CBD2]"
              style={{ fontSize: '13px', fontWeight: 500 }}
            >
              See all
            </button>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-1">
            {MOCK_AGENTS.map(agent => (
              <button
                key={agent.id}
                onClick={() => navigate(`/investor/agent/${agent.id}`)}
                className="shrink-0 bg-white rounded-[16px] p-3 text-left"
                style={{ width: '140px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
              >
                <div className="relative mb-2">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {agent.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#0ED221] rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex items-center gap-1 mb-0.5">
                  <p className="text-[#050B2E] truncate" style={{ fontSize: '13px', fontWeight: 600 }}>{agent.name}</p>
                  {agent.verified && <VerifiedBadge />}
                </div>
                <p className="text-[#999] truncate mb-1" style={{ fontSize: '11px' }}>{agent.title}</p>
                <div className="flex items-center gap-1">
                  <Star size={11} fill="#FFC42D" color="#FFC42D" />
                  <span style={{ fontSize: '11px', color: '#050B2E', fontWeight: 600 }}>{agent.rating}</span>
                  <span className="text-[#999]" style={{ fontSize: '10px' }}>({agent.deals} deals)</span>
                </div>
                {agent.reraVerified && (
                  <div className="mt-1.5 bg-[#CCFDFF] rounded-full px-2 py-0.5 inline-block">
                    <span style={{ fontSize: '9px', color: '#019398', fontWeight: 600 }}>RERA verified</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Investors' Requests Feed */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#050B2E]" style={{ fontSize: '17px', fontWeight: 700 }}>Investors' Requests</p>
            <span className="text-[#999]" style={{ fontSize: '12px' }}>{filteredRequests.length} active</span>
          </div>

          {filteredRequests.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-[#999]" style={{ fontSize: '15px' }}>No requests found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredRequests.map(req => (
                <button
                  key={req.id}
                  onClick={() => navigate(`/investor/offers/${req.id}`)}
                  className="w-full bg-white rounded-[16px] p-4 text-left"
                  style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
                >
                  {/* Investor info row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={req.investorAvatar} alt={req.investorName} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-[#050B2E]" style={{ fontSize: '13px', fontWeight: 600 }}>{req.investorName}</span>
                          {req.investorVerified && <VerifiedBadge />}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${req.investorOnline ? 'bg-[#0ED221]' : 'bg-[#CCC]'}`} />
                          <span className="text-[#A6A6A6]" style={{ fontSize: '10px' }}>
                            {req.investorOnline ? `Online (Avg ${req.investorAvgResponse})` : 'Offline'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>
                      🕐 {req.createdAt}
                    </span>
                  </div>

                  {/* Title */}
                  <p className="text-[#050B2E] mb-1" style={{ fontSize: '15px', lineHeight: 1.4, fontWeight: 600 }}>
                    {req.title}
                  </p>

                  {/* Note */}
                  {req.note && (
                    <p className="text-[#999] mb-2" style={{ fontSize: '12px' }}>
                      ↳ Note: {req.note}
                    </p>
                  )}

                  {/* Budget/Type/Method chips */}
                  <div className="flex gap-2 mb-3">
                    {[
                      { label: 'Budget', value: req.budget },
                      { label: 'Type', value: req.purpose },
                      { label: 'Method', value: req.method },
                    ].map(chip => (
                      <div key={chip.label} className="bg-[#F8F8F8] rounded-[8px] px-2.5 py-1.5 flex-1">
                        <p className="text-[#A6A6A6]" style={{ fontSize: '9px' }}>{chip.label}</p>
                        <p className="text-[#050B2E]" style={{ fontSize: '12px', fontWeight: 600 }}>{chip.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <MessageCircle size={13} color="#A6A6A6" />
                      <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>{req.offersCount} offers submitted</span>
                    </div>
                    {req.isNew && (
                      <span className="bg-[#F0FBFB] text-[#01CBD2] px-2 py-0.5 rounded-full" style={{ fontSize: '10px', fontWeight: 600 }}>
                        NEW
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="h-4" />
      </div>

      <BottomNav userType="investor" />
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Clock, MessageSquare, Send, MoreHorizontal, Bookmark, Share2, UserPlus, Flag, Bell, MessageCircle } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { MOCK_REQUESTS, InvestorRequest } from '../MockData';
import { useApp } from '../AppContext';
// @ts-ignore
import logoIcon from '../../../assets/logo-icon.png';

type FeedTab = 'General' | 'Offers' | 'Real estate owners' | 'Archives';

const AGENT_PHOTO = 'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';

function RequestCard({ req, onViewDetails, onApply, onMore, onComments }: {
  req: InvestorRequest;
  onViewDetails: () => void;
  onApply: () => void;
  onMore: () => void;
  onComments: () => void;
}) {
  return (
    <div className="bg-white mx-3 mb-3 rounded-[16px] p-4" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={req.investorAvatar}
              alt={req.investorName}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="absolute -left-1 -top-1 w-3 h-3 rounded-full overflow-hidden border border-white">
              <div className="w-full h-1/3 bg-[#E31D1C]" />
              <div className="w-full h-1/3 bg-white" />
              <div className="w-full h-1/3 bg-[#3D58DB]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>
                {req.investorName}
              </span>
              {req.investorVerified && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
                  <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${req.investorOnline ? 'bg-[#0ED221]' : 'bg-[#CCC]'}`} />
              <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>
                {req.investorOnline ? `Online (Avg ${req.investorAvgResponse})` : 'Offline'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {req.isNew && (
            <div className="flex items-center gap-1 border border-[rgba(5,11,46,0.63)] rounded-full px-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[rgba(5,11,46,0.63)]" />
              <span style={{ fontSize: '10px', color: 'rgba(5,11,46,0.63)' }}>New request</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Clock size={10} color="#A6A6A6" />
            <span className="text-[#A6A6A6]" style={{ fontSize: '10px' }}>{req.createdAt}</span>
          </div>
        </div>
      </div>

      {/* Request title */}
      <div className="mb-3">
        <p className="text-[#050B2E]" style={{ fontSize: '16px', lineHeight: 1.35 }}>
          {req.title}
        </p>
        {req.note && (
          <div className="flex items-center gap-1 mt-1">
            <MessageSquare size={10} color="#666" />
            <span className="text-[#666]" style={{ fontSize: '10px' }}>Note:</span>
            <span className="text-[#050B2E]" style={{ fontSize: '10px' }}>{req.note}</span>
          </div>
        )}
      </div>

      {/* Stats row */}
      <div className="flex gap-2 mb-3">
        {[
          { label: 'Budget', value: req.budget },
          { label: 'Type', value: req.purpose },
          { label: 'Method', value: req.method },
        ].map(item => (
          <div key={item.label} className="flex-1 bg-[#F8F8F8] rounded-[10px] px-2 py-2">
            <p className="text-[#A6A6A6]" style={{ fontSize: '9px' }}>{item.label}</p>
            <p className="text-[#050B2E]" style={{ fontSize: '13px', fontWeight: 600 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Offers count */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 bg-[rgba(5,11,46,0.07)] rounded-[6px] px-2 py-1">
          <span className="text-[#999]" style={{ fontSize: '11px', fontWeight: 500 }}>
            {req.offersCount} offers submitted
          </span>
        </div>
        <button
          onClick={onComments}
          className="flex items-center gap-1 text-[#999] hover:text-[#01CBD2] transition-colors"
        >
          <MessageSquare size={14} />
          <span style={{ fontSize: '10px' }}>{req.offersCount}</span>
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          onClick={onViewDetails}
          className="flex-1 h-10 border border-[#01CBD2] rounded-full flex items-center justify-center gap-1.5"
        >
          <span className="text-[#01CBD2]" style={{ fontSize: '13px', fontWeight: 600 }}>See Details</span>
        </button>
        <button
          onClick={onApply}
          className="flex-1 h-10 bg-[#01CBD2] rounded-full flex items-center justify-center gap-1.5"
        >
          <Send size={11} color="white" />
          <span className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>Apply</span>
        </button>
        <button
          onClick={onMore}
          className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center"
        >
          <MoreHorizontal size={16} color="#666" />
        </button>
      </div>
    </div>
  );
}

function MoreBottomSheet({ req, onClose }: { req: InvestorRequest; onClose: () => void }) {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
      <div className="w-full bg-[#F8F8F8] rounded-t-[16px] pb-6 px-4 pt-3">
        <div className="w-10 h-1 bg-[#050B2E] rounded-full mx-auto mb-4" />

        <div className="bg-white rounded-[12px] p-3 mb-3">
          <button className="flex items-center gap-3 w-full" onClick={() => { onClose(); navigate(`/agent/request/${req.id}`); }}>
            <UserPlus size={20} color="#050B2E" />
            <div className="text-left">
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>View profile</p>
              <p className="text-[#999]" style={{ fontSize: '12px' }}>View investor full request details</p>
            </div>
          </button>
        </div>

        <div className="bg-white rounded-[12px] p-3 mb-3 space-y-3">
          <button className="flex items-center gap-3 w-full" onClick={() => { onClose(); navigate('/agent/favourites'); }}>
            <Bookmark size={20} color="#050B2E" />
            <div className="text-left">
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Save request</p>
              <p className="text-[#999]" style={{ fontSize: '12px' }}>Add this request to your favourite requests</p>
            </div>
          </button>
          <button className="flex items-center gap-3 w-full" onClick={onClose}>
            <Share2 size={20} color="#050B2E" />
            <div className="text-left">
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Share the request</p>
              <p className="text-[#999]" style={{ fontSize: '12px' }}>Share this request with others</p>
            </div>
          </button>
        </div>

        <div className="bg-white rounded-[12px] px-3 py-3 space-y-3">
          <button className="flex items-center gap-3 w-full">
            <UserPlus size={20} color="#050B2E" />
            <div className="text-left">
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Investor interested</p>
              <p className="text-[#999]" style={{ fontSize: '12px' }}>More of your posts will be like this</p>
            </div>
          </button>
          <button className="flex items-center gap-3 w-full">
            <Flag size={20} color="#050B2E" />
            <div className="text-left">
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Report investor</p>
              <p className="text-[#999]" style={{ fontSize: '12px' }}>More of your posts will be like this</p>
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 h-10 text-center text-[#999]"
          style={{ fontSize: '15px' }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function AgentFeed() {
  const navigate = useNavigate();
  const { userName } = useApp();
  const [activeTab, setActiveTab] = useState<FeedTab>('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [moreSheet, setMoreSheet] = useState<InvestorRequest | null>(null);

  const tabs: FeedTab[] = ['General', 'Offers', 'Real estate owners', 'Archives'];

  const filtered = MOCK_REQUESTS.filter(r => {
    if (!searchQuery) return true;
    return (
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.investorName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <div className="bg-white shrink-0">
        <StatusBar />
        {/* Header */}
        <div className="px-4 pt-1 pb-2 border-b border-[rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3 mb-2">
            <button onClick={() => navigate('/agent/profile')}>
              <img
                src={AGENT_PHOTO}
                alt="Agent"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            </button>
            <div className="flex-1">
              <p className="text-[#050B2E]" style={{ fontSize: '17px' }}>
                <span className="text-[#01CBD2]" style={{ fontWeight: 600 }}>Welcome,</span>
                {' '}
                <span style={{ fontWeight: 500 }}>{userName || 'Mohamed Salah'}</span>
              </p>
              <p className="text-[#999]" style={{ fontSize: '11px' }}>
                Opportunities don't wait — post your request and let offers come to you
              </p>
            </div>
            {/* Logo + action icons */}
            <div className="flex items-center gap-2 shrink-0">
              <img src={logoIcon} alt="Duseat" className="h-7 w-auto opacity-80" />
              <button
                onClick={() => navigate('/agent/chats')}
                className="w-9 h-9 bg-[#F8F8F8] rounded-full flex items-center justify-center relative"
              >
                <MessageCircle size={18} color="#050B2E" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#01CBD2] rounded-full" />
              </button>
              <button
                onClick={() => navigate('/agent/notifications')}
                className="w-9 h-9 bg-[#F8F8F8] rounded-full flex items-center justify-center relative"
              >
                <Bell size={18} color="#050B2E" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E31D1C] rounded-full" />
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="shrink-0 px-2 py-1.5 relative"
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: activeTab === tab ? 600 : 400,
                    color: activeTab === tab ? '#01CBD2' : '#999',
                  }}
                >
                  {tab}
                </span>
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01CBD2]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2 bg-white">
          <div className="flex items-center gap-2 bg-[#F8F8F8] rounded-full h-10 px-4">
            <Search size={16} color="#CCC" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-[#050B2E]"
              style={{ fontSize: '14px' }}
            />
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-y-auto pt-2">
        {filtered.map(req => (
          <RequestCard
            key={req.id}
            req={req}
            onViewDetails={() => navigate(`/agent/request/${req.id}`)}
            onApply={() => navigate(`/agent/submit-offer/${req.id}`)}
            onMore={() => setMoreSheet(req)}
            onComments={() => navigate(`/agent/comments/${req.id}`)}
          />
        ))}
        <div className="h-2" />
      </div>

      {moreSheet && (
        <MoreBottomSheet req={moreSheet} onClose={() => setMoreSheet(null)} />
      )}

      <BottomNav userType="agent" />
    </div>
  );
}

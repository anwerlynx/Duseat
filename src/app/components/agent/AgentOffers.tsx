import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Eye, Edit3, Trash2, MessageCircle, X } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { MY_OFFERS, Offer } from '../MockData';

type OffersTab = 'All' | 'Pending' | 'Negotiating' | 'Closed';

function OfferCard({ offer, onManage }: { offer: Offer; onManage: () => void }) {
  const statusConfig = {
    active_chat: { label: 'Active chat', bg: 'bg-white', border: 'border-[rgba(5,11,46,0.4)]', dot: '#0ED221', textColor: '#050B2E' },
    pending: { label: 'Pending', bg: 'bg-[#FFF9E8]', border: 'border-[#F5A623]', dot: '#F5A623', textColor: '#F5A623' },
    accepted: { label: 'Accepted', bg: 'bg-[#F0FBFB]', border: 'border-[#01CBD2]', dot: '#01CBD2', textColor: '#01CBD2' },
    declined: { label: 'Declined', bg: 'bg-white', border: 'border-[#E31D1C]', dot: '#E31D1C', textColor: '#E31D1C' },
  };

  const s = statusConfig[offer.status];

  return (
    <div
      className="bg-white mx-4 mb-3 rounded-[16px] p-4"
      style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={offer.agentAvatar} alt={offer.agentName} className="w-9 h-9 rounded-full object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>Anwar hosny</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
                <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#0ED221]" />
              <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>Online (Avg 10m)</span>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center gap-1.5 border rounded-full px-3 py-1 ${s.bg} ${s.border}`}
          style={{ borderWidth: 1 }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
          <span style={{ fontSize: '13px', color: s.textColor, fontWeight: 500 }}>{s.label}</span>
        </div>
      </div>

      {/* Request title + price */}
      <div className="mb-1">
        <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Request title</p>
        <div className="flex items-center justify-between">
          <p className="text-[#050B2E]" style={{ fontSize: '17px', fontWeight: 700 }}>
            {offer.propertyTitle}
          </p>
          <p className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 700 }}>3.8M AED</p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Sent 1 day ago</span>
        <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>· 5 agents competing</span>
      </div>

      {/* Manage button */}
      <button
        onClick={onManage}
        className="w-full h-9 border border-[#E8E8E8] rounded-full flex items-center justify-center"
      >
        <span className="text-[#666]" style={{ fontSize: '13px', fontWeight: 500 }}>Manage offer</span>
      </button>
    </div>
  );
}

function ManageSheet({ offer, onClose }: { offer: Offer; onClose: () => void }) {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
      <div className="w-full max-w-[393px] bg-[#F8F8F8] rounded-t-[20px] pb-8 px-4 pt-4">
        <div className="w-10 h-1 bg-[#333] rounded-full mx-auto mb-5" />
        <p className="text-[#999] mb-1" style={{ fontSize: '13px' }}>Manage offer</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 700 }}>{offer.propertyTitle}</p>
          <p className="text-[#01CBD2]" style={{ fontSize: '18px', fontWeight: 700 }}>{offer.price}</p>
        </div>

        <div className="space-y-2">
          <button
            className="w-full bg-white rounded-[12px] p-4 flex items-center gap-3"
            onClick={onClose}
          >
            <Eye size={22} color="#050B2E" />
            <span className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 500 }}>View details</span>
          </button>

          <button
            className="w-full bg-white rounded-[12px] p-4 flex items-center gap-3"
            onClick={onClose}
          >
            <Edit3 size={22} color="#050B2E" />
            <span className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 500 }}>Edit offer</span>
          </button>

          <button className="w-full bg-white border border-[#E31D1C] rounded-[12px] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trash2 size={22} color="#E31D1C" />
              <span className="text-[#E31D1C]" style={{ fontSize: '16px', fontWeight: 500 }}>Withdraw offer</span>
            </div>
            <div className="w-6 h-6 rounded-full border border-[#E31D1C] flex items-center justify-center">
              <span className="text-[#E31D1C]" style={{ fontSize: '14px' }}>!</span>
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 h-11 text-center text-[#999]"
          style={{ fontSize: '16px' }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function AgentOffers() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<OffersTab>('All');
  const [managingOffer, setManagingOffer] = useState<Offer | null>(null);

  const tabs: OffersTab[] = ['All', 'Pending', 'Negotiating', 'Closed'];

  const filtered = MY_OFFERS.filter(o => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Pending') return o.status === 'pending';
    if (activeTab === 'Negotiating') return o.status === 'active_chat';
    if (activeTab === 'Closed') return o.status === 'declined';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="flex items-center px-4 h-14 border-b border-[#F8F8F8]">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            My offers
          </p>
          <div className="w-9" />
        </div>

        {/* Tabs */}
        <div className="flex items-center border-b border-[#F0F0F0]">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-3 relative"
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: activeTab === tab ? 600 : 400,
                  color: activeTab === tab ? '#01CBD2' : '#999',
                }}
              >
                {tab}
              </span>
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-[#01CBD2]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pt-4">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20 px-8">
            <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mb-4">
              <MessageCircle size={28} color="#CCC" />
            </div>
            <p className="text-[#050B2E] text-center mb-1" style={{ fontSize: '18px', fontWeight: 600 }}>
              No offers yet
            </p>
            <p className="text-[#999] text-center" style={{ fontSize: '14px' }}>
              Start browsing requests and submit your first offer
            </p>
          </div>
        ) : (
          filtered.map(offer => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onManage={() => setManagingOffer(offer)}
            />
          ))
        )}
        <div className="h-2" />
      </div>

      {managingOffer && (
        <ManageSheet offer={managingOffer} onClose={() => setManagingOffer(null)} />
      )}

      <BottomNav userType="agent" />
    </div>
  );
}

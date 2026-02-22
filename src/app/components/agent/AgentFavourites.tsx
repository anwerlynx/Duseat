import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Heart, Clock, DollarSign, MapPin, Trash2, Send, Users } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';

const FONT = "'TT Commons', sans-serif";

interface SavedRequest {
  id: string;
  investorName: string;
  investorAvatar: string;
  investorVerified: boolean;
  online: boolean;
  title: string;
  budget: string;
  area: string;
  type: string;
  purpose: string;
  offersCount: number;
  createdAt: string;
  note?: string;
}

const SAVED_REQUESTS: SavedRequest[] = [
  {
    id: 'r1',
    investorName: 'Mohamed Salah',
    investorAvatar: 'https://images.unsplash.com/photo-1541571162-f82e2dd9c3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
    investorVerified: true,
    online: true,
    title: "I'm looking for a ready-to-move 4 Bedroom Villa for living in Al Barsha",
    budget: '3.8M AED',
    area: 'Al Barsha',
    type: 'Villa',
    purpose: 'Living',
    offersCount: 12,
    createdAt: '3 min ago',
    note: 'Flexible on handover date',
  },
  {
    id: 'r2',
    investorName: 'Anwar Hosny',
    investorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
    investorVerified: false,
    online: false,
    title: "Looking for investment apartment with high ROI near Downtown Dubai",
    budget: '1.5M AED',
    area: 'Downtown Dubai',
    type: 'Apartment',
    purpose: 'Investment',
    offersCount: 5,
    createdAt: '1 hr ago',
  },
  {
    id: 'r3',
    investorName: 'Fatima Al-Zahra',
    investorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b4c0f8f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
    investorVerified: true,
    online: true,
    title: "Urgent: Need a 2BR apartment in JBR or Dubai Marina with sea view",
    budget: '2.2M AED',
    area: 'JBR, Dubai Marina',
    type: 'Apartment',
    purpose: 'Investment',
    offersCount: 8,
    createdAt: '30 min ago',
    note: 'Must have sea view',
  },
];

export default function AgentFavourites() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState<string[]>(SAVED_REQUESTS.map(r => r.id));

  const removeRequest = (id: string) => setSaved(prev => prev.filter(r => r !== id));
  const visibleRequests = SAVED_REQUESTS.filter(r => saved.includes(r.id));

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col" style={{ fontFamily: FONT }}>
      {/* Header */}
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="px-4 pt-2 pb-3 border-b border-[rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <p style={{ fontSize: '22px', fontWeight: 700, color: '#050B2E', fontFamily: FONT }}>
              Saved Requests
            </p>
            <div className="flex items-center gap-1">
              <Heart size={16} fill="#01CBD2" color="#01CBD2" />
              <span style={{ fontSize: '13px', color: '#01CBD2', fontFamily: FONT }}>
                {visibleRequests.length} saved
              </span>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#999', fontFamily: FONT, marginTop: '4px' }}>
            Investor requests you bookmarked for later
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {visibleRequests.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'rgba(1,203,210,0.1)' }}
            >
              <Heart size={28} color="#01CBD2" />
            </div>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#050B2E', fontFamily: FONT, marginBottom: '6px' }}>
              No saved requests yet
            </p>
            <p style={{ fontSize: '14px', color: '#999', fontFamily: FONT, textAlign: 'center' }}>
              Bookmark investor requests from the feed to see them here
            </p>
            <button
              onClick={() => navigate('/agent')}
              className="mt-6 px-6 py-3 rounded-full"
              style={{ background: '#01CBD2', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: FONT }}
            >
              Browse Feed
            </button>
          </div>
        ) : (
          visibleRequests.map(req => (
            <div
              key={req.id}
              className="bg-white rounded-[16px] p-4"
              style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
            >
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
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>
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
                      <div className={`w-1.5 h-1.5 rounded-full ${req.online ? 'bg-[#0ED221]' : 'bg-[#CCC]'}`} />
                      <span style={{ fontSize: '10px', color: '#A6A6A6', fontFamily: FONT }}>
                        {req.online ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Clock size={10} color="#A6A6A6" />
                    <span style={{ fontSize: '10px', color: '#A6A6A6', fontFamily: FONT }}>{req.createdAt}</span>
                  </div>
                  <button
                    onClick={() => removeRequest(req.id)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFF0F0]"
                  >
                    <Trash2 size={12} color="#E31D1C" />
                  </button>
                </div>
              </div>

              {/* Title */}
              <p style={{ fontSize: '15px', color: '#050B2E', lineHeight: 1.35, fontFamily: FONT, marginBottom: '4px' }}>
                {req.title}
              </p>
              {req.note && (
                <p style={{ fontSize: '11px', color: '#666', fontFamily: FONT, marginBottom: '8px' }}>
                  📝 Note: {req.note}
                </p>
              )}

              {/* Stats */}
              <div className="flex items-center gap-4 mb-3 mt-2">
                <div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={10} color="#999" />
                    <span style={{ fontSize: '9px', color: '#999', fontFamily: FONT }}>Budget</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>{req.budget}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <MapPin size={10} color="#999" />
                    <span style={{ fontSize: '9px', color: '#999', fontFamily: FONT }}>Type</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>{req.type}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Users size={10} color="#999" />
                    <span style={{ fontSize: '9px', color: '#999', fontFamily: FONT }}>Offers</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>{req.offersCount}</span>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => navigate(`/agent/submit-offer/${req.id}`)}
                className="w-full h-10 rounded-[24px] flex items-center justify-center gap-2"
                style={{ background: '#01CBD2' }}
              >
                <Send size={14} color="white" />
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'white', fontFamily: FONT }}>Submit Offer</span>
              </button>
            </div>
          ))
        )}
      </div>

      <BottomNav userType="agent" />
    </div>
  );
}

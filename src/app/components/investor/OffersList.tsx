import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, MessageCircle, Check, X, Star } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { MY_REQUESTS, RECEIVED_OFFERS, Offer } from '../MockData';

function OfferCard({
  offer,
  onAccept,
  onDecline,
  onChat,
}: {
  offer: Offer;
  onAccept: () => void;
  onDecline: () => void;
  onChat: () => void;
}) {
  const statusConfig = {
    pending: { label: 'Pending review', color: '#F5A623' },
    accepted: { label: 'Accepted', color: '#01CBD2' },
    declined: { label: 'Declined', color: '#E31D1C' },
    active_chat: { label: 'In negotiation', color: '#01CBD2' },
  };

  const s = statusConfig[offer.status];

  return (
    <div className="bg-white mx-4 mb-3 rounded-[16px] overflow-hidden" style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}>
      {/* Agent header */}
      <div className="p-4 border-b border-[#F8F8F8]">
        <div className="flex items-center gap-3">
          <img
            src={offer.agentAvatar}
            alt={offer.agentName}
            className="w-11 h-11 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 700 }}>
                {offer.agentName}
              </span>
              {offer.agentVerified && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
                  <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>{offer.createdAt}</span>
              <span className="w-1 h-1 rounded-full bg-[#E8E8E8]" />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={10} fill={i <= 4 ? '#F5A623' : '#E8E8E8'} color={i <= 4 ? '#F5A623' : '#E8E8E8'} />
                ))}
                <span className="text-[#666] ml-0.5" style={{ fontSize: '11px' }}>4.8</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#01CBD2]" style={{ fontSize: '18px', fontWeight: 800 }}>{offer.price}</p>
            <span
              style={{ fontSize: '11px', color: s.color, fontWeight: 500 }}
            >
              {s.label}
            </span>
          </div>
        </div>
      </div>

      {/* Property title */}
      <div className="px-4 py-3 border-b border-[#F8F8F8]">
        <p className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 700 }}>{offer.propertyTitle}</p>
        <p className="text-[#666] mt-1" style={{ fontSize: '13px', lineHeight: 1.5 }}>{offer.message}</p>
      </div>

      {/* Actions */}
      {offer.status === 'pending' && (
        <div className="flex gap-3 p-4">
          <button
            onClick={onDecline}
            className="flex-1 h-11 border border-[#E8E8E8] rounded-full flex items-center justify-center gap-1.5"
          >
            <X size={16} color="#999" />
            <span className="text-[#999]" style={{ fontSize: '14px', fontWeight: 500 }}>Decline</span>
          </button>
          <button
            onClick={onAccept}
            className="flex-1 h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-1.5"
          >
            <Check size={16} color="white" />
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>Accept Offer</span>
          </button>
        </div>
      )}

      {(offer.status === 'accepted' || offer.status === 'active_chat') && (
        <div className="flex gap-3 p-4">
          <button
            onClick={onChat}
            className="flex-1 h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} color="white" />
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>Open Chat</span>
          </button>
        </div>
      )}

      {offer.status === 'declined' && (
        <div className="px-4 py-3">
          <p className="text-[#999] text-center" style={{ fontSize: '13px' }}>This offer was declined</p>
        </div>
      )}
    </div>
  );
}

export default function OffersList() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const [offers, setOffers] = useState(RECEIVED_OFFERS);
  const [acceptedOffer, setAcceptedOffer] = useState<string | null>(null);

  const req = MY_REQUESTS.find(r => r.id === requestId) || MY_REQUESTS[0];

  const handleAccept = (offerId: string) => {
    setAcceptedOffer(offerId);
    setOffers(prev =>
      prev.map(o => ({
        ...o,
        status: o.id === offerId ? ('accepted' as const) : ('declined' as const),
      }))
    );
  };

  const handleDecline = (offerId: string) => {
    setOffers(prev =>
      prev.map(o => o.id === offerId ? { ...o, status: 'declined' as const } : o)
    );
  };

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
            Offers Received
          </p>
          <div className="w-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pt-3 pb-4">
        {/* Request summary */}
        <div className="bg-white mx-4 mt-4 rounded-[14px] p-4 mb-1" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p className="text-[#A6A6A6] mb-1" style={{ fontSize: '12px' }}>Your Request</p>
          <p className="text-[#050B2E] mb-2" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4 }}>
            {req.title}
          </p>
          <div className="flex gap-2">
            <span className="bg-[#F0FBFB] text-[#01CBD2] rounded-full px-2.5 py-1" style={{ fontSize: '12px', fontWeight: 600 }}>
              {req.budget}
            </span>
            <span className="bg-[#F8F8F8] text-[#666] rounded-full px-2.5 py-1" style={{ fontSize: '12px' }}>
              {req.area}
            </span>
            <span className="bg-[#F8F8F8] text-[#666] rounded-full px-2.5 py-1" style={{ fontSize: '12px' }}>
              {offers.length} offers
            </span>
          </div>
        </div>

        {acceptedOffer && (
          <div className="mx-4 mt-3 bg-[#F0FBFB] border border-[#01CBD2] rounded-[12px] p-3 flex items-center gap-2">
            <Check size={18} color="#01CBD2" />
            <p className="text-[#01CBD2]" style={{ fontSize: '14px', fontWeight: 500 }}>
              Offer accepted! Chat is now open with the agent.
            </p>
          </div>
        )}

        <div className="pt-3 pb-8">
          {offers.map(offer => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onAccept={() => handleAccept(offer.id)}
              onDecline={() => handleDecline(offer.id)}
              onChat={() => navigate('/investor/chat')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

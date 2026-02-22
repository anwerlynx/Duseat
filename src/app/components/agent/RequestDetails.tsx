import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, DollarSign, MapPin, Grid3X3, CreditCard, MoreHorizontal, Bookmark, Star } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { MOCK_REQUESTS } from '../MockData';

function MatchTooltip({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div
      className="absolute left-0 -top-10 bg-[#050B2E] text-white rounded-lg px-3 py-1.5 z-10 whitespace-nowrap"
      style={{ fontSize: '12px' }}
    >
      Based on your expertise, location, and deal history
      <div className="absolute bottom-0 left-8 translate-y-full w-2 h-2 bg-[#050B2E] rotate-45" />
    </div>
  );
}

export default function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const req = MOCK_REQUESTS.find(r => r.id === id) || MOCK_REQUESTS[0];

  const relatedRequests = MOCK_REQUESTS.filter(r => r.id !== req.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="shrink-0">
        <StatusBar />
        {/* Page bar */}
        <div className="flex items-center px-4 h-14 border-b border-[#F8F8F8]">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            Request details
          </p>
          <button className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center">
            <MoreHorizontal size={18} color="#666" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20 px-4">
        {/* Investor info */}
        <div className="flex items-center gap-3 mt-4 mb-3">
          <img
            src={req.investorAvatar}
            alt={req.investorName}
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <p className="text-[#050B2E]" style={{ fontSize: '17px', fontWeight: 600 }}>
                {req.investorName}
              </p>
              {req.investorVerified && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
                  <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#0ED221]" />
              <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>
                Online (Avg reply {req.investorAvgResponse})
              </span>
            </div>
            <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>investor</p>
          </div>
        </div>

        {/* Title */}
        <p className="text-[#050B2E] mb-3" style={{ fontSize: '20px', lineHeight: 1.35 }}>
          {req.title}
        </p>

        {/* High match rate badge */}
        {req.matchScore === 'High' && (
          <div className="relative inline-block mb-4">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
              className="flex items-center gap-1.5 border border-[#01CBD2] rounded-full px-3 py-1.5"
            >
              <Star size={13} color="#01CBD2" fill="#01CBD2" />
              <span className="text-[#01CBD2]" style={{ fontSize: '13px', fontWeight: 500 }}>
                High match rate
              </span>
            </button>
            <MatchTooltip visible={showTooltip} />
          </div>
        )}

        {/* Send offer button */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => navigate(`/agent/submit-offer/${req.id}`)}
            className="flex-1 h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" fill="white" />
            </svg>
            <span className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>
              Send offer to investor
            </span>
          </button>
          <button className="w-11 h-11 border border-[#E8E8E8] rounded-full flex items-center justify-center">
            <Bookmark size={18} color="#01CBD2" />
          </button>
        </div>

        {/* Related requests */}
        <div className="flex gap-3 mb-5 overflow-x-auto no-scrollbar">
          {[req, ...relatedRequests].slice(0, 2).map((r, i) => (
            <div
              key={r.id}
              className="shrink-0 border border-[#01CBD2] rounded-[12px] p-3 w-[160px]"
              style={{ background: i === 0 ? 'rgba(1,203,210,0.04)' : 'white' }}
            >
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>Request {i + 1}</span>
                {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-[#01CBD2]" />}
              </div>
              <p className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.3 }}>
                {r.bedrooms}BR Jumeirah Villa
              </p>
              <p className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>
                $ {r.budget} · 📍 Downtown
              </p>
            </div>
          ))}
        </div>

        {/* Core requirements */}
        <p className="text-[#A6A6A6] mb-3" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px' }}>
          CORE REQUIREMENTS
        </p>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { icon: DollarSign, label: 'Budget', value: `${req.budgetNum.toLocaleString()} AED`, color: '#01CBD2' },
            { icon: MapPin, label: 'Area', value: req.area, color: '#01CBD2' },
            { icon: Grid3X3, label: 'Unit Type', value: req.purpose === 'Living' ? 'Family living' : req.propertyType, color: '#01CBD2' },
            { icon: CreditCard, label: 'Payment', value: req.method, color: '#01CBD2' },
          ].map(item => (
            <div key={item.label} className="border border-[#F0F0F0] rounded-[14px] p-3">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-2"
                style={{ background: 'rgba(1,203,210,0.1)' }}
              >
                <item.icon size={20} color="#01CBD2" />
              </div>
              <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>{item.label}</p>
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 700 }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Investor notes */}
        {req.additionalNotes && (
          <>
            <p className="text-[#A6A6A6] mb-3" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px' }}>
              INVESTOR NOTES
            </p>
            <div className="border border-[#01CBD2] bg-[rgba(1,203,210,0.04)] rounded-[14px] p-4 mb-4">
              <p className="text-[#050B2E] italic" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                {req.additionalNotes}
              </p>
            </div>
          </>
        )}

        {/* Current interest */}
        <div className="border border-[#01CBD2] bg-[rgba(1,203,210,0.04)] rounded-[14px] p-4 flex items-center justify-between">
          <div>
            <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Current Interest</p>
            <p className="text-[#01CBD2]" style={{ fontSize: '18px', fontWeight: 700 }}>
              {req.offersCount}+ Agents pitching
            </p>
          </div>
          <div className="flex items-center">
            {[1, 2, 3].map(i => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=40`}
                alt=""
                className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2 first:ml-0"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-[#050B2E] border-2 border-white -ml-2 flex items-center justify-center">
              <span className="text-white" style={{ fontSize: '10px', fontWeight: 600 }}>
                {req.offersCount > 3 ? `${req.offersCount - 3}+` : '+'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Send offer floating button */}
      <div className="shrink-0 bg-white p-4 border-t border-[#F8F8F8]">
        <button
          onClick={() => navigate(`/agent/submit-offer/${req.id}`)}
          className="w-full h-12 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
        >
          <span className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
            Send offer to investor
          </span>
        </button>
      </div>
    </div>
  );
}

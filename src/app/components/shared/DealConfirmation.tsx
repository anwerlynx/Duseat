import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, CheckCircle2, Download, Star, Home, Building2, DollarSign, MapPin, Calendar } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { useApp } from '../AppContext';

export default function DealConfirmation() {
  const navigate = useNavigate();
  const { userType } = useApp();
  const [confirmed, setConfirmed] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const dealDetails = {
    id: 'DEAL-2024-001',
    property: '4BR Jumeirah Villa — Golf View',
    area: 'Jumeirah Golf Estates, Dubai',
    price: '4,300,000 AED',
    investor: 'Mohamed Salah',
    agent: 'Sarah Johnson',
    date: '22 Feb 2026',
    requestTitle: 'Looking for 4BR Villa in Jumeirah Golf Estates',
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <StatusBar />
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          {/* Success animation */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
            style={{ background: 'rgba(1,203,210,0.1)' }}
          >
            <CheckCircle2 size={52} color="#01CBD2" />
          </div>

          <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '24px', fontWeight: 800 }}>
            Deal Confirmed! 🎉
          </p>
          <p className="text-[#999] text-center mb-6" style={{ fontSize: '15px', lineHeight: 1.5 }}>
            Congratulations! The deal has been successfully closed. Both parties have been notified.
          </p>

          {/* Deal card */}
          <div
            className="w-full bg-[#050B2E] rounded-[20px] p-5 mb-6"
            style={{ boxShadow: '0 8px 32px rgba(5,11,46,0.3)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#01CBD2] rounded-[12px] flex items-center justify-center">
                <Home size={24} color="white" />
              </div>
              <div>
                <p className="text-white" style={{ fontSize: '16px', fontWeight: 700 }}>{dealDetails.property}</p>
                <p className="text-[#A6A6A6]" style={{ fontSize: '13px' }}>Deal ID: {dealDetails.id}</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {[
                { icon: DollarSign, label: 'Deal Value', value: dealDetails.price },
                { icon: MapPin, label: 'Location', value: dealDetails.area },
                { icon: Calendar, label: 'Closing Date', value: dealDetails.date },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <item.icon size={14} color="#A6A6A6" />
                    <span className="text-[#A6A6A6]" style={{ fontSize: '13px' }}>{item.label}</span>
                  </div>
                  <span className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rate experience */}
          <div className="w-full bg-white border border-[#F0F0F0] rounded-[16px] p-4 mb-6">
            <p className="text-[#050B2E] mb-3 text-center" style={{ fontSize: '16px', fontWeight: 700 }}>
              Rate your experience
            </p>
            <div className="flex justify-center gap-3 mb-3">
              {[1, 2, 3, 4, 5].map(star => (
                <button key={star} onClick={() => setRating(star)}>
                  <Star
                    size={28}
                    fill={star <= rating ? '#F5A623' : 'none'}
                    color={star <= rating ? '#F5A623' : '#E8E8E8'}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <textarea
                value={review}
                onChange={e => setReview(e.target.value)}
                placeholder="Share your experience..."
                className="w-full border border-[#E8E8E8] rounded-[12px] p-3 outline-none resize-none text-[#050B2E]"
                style={{ fontSize: '14px', height: '80px' }}
              />
            )}
          </div>

          <button
            onClick={() => navigate(userType === 'agent' ? '/agent' : '/investor')}
            className="w-full h-12 bg-[#01CBD2] rounded-full text-white"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
            Deal Summary
          </p>
          <button className="w-9 h-9 flex items-center justify-center">
            <Download size={18} color="#050B2E" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Deal header */}
        <div
          className="bg-[#050B2E] rounded-[20px] p-5 mb-4"
          style={{ boxShadow: '0 4px 16px rgba(5,11,46,0.2)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#0ED221]" />
            <span className="text-[#0ED221]" style={{ fontSize: '13px', fontWeight: 600 }}>
              Offer Accepted
            </span>
          </div>
          <p className="text-white mb-1" style={{ fontSize: '20px', fontWeight: 800 }}>
            {dealDetails.property}
          </p>
          <p className="text-[#01CBD2]" style={{ fontSize: '22px', fontWeight: 800 }}>
            {dealDetails.price}
          </p>
          <p className="text-[#A6A6A6] mt-1" style={{ fontSize: '13px' }}>{dealDetails.area}</p>
        </div>

        {/* Property image */}
        <div className="rounded-[16px] overflow-hidden mb-4 h-40">
          <img
            src="https://images.unsplash.com/photo-1637747022660-12ce5ce4e420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Deal participants */}
        <div className="bg-white rounded-[16px] p-4 mb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p className="text-[#A6A6A6] mb-3" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px' }}>
            DEAL PARTICIPANTS
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=60"
                  alt="Investor"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>{dealDetails.investor}</p>
                  <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Investor</p>
                </div>
              </div>
              <span className="bg-[#F0FBFB] text-[#01CBD2] px-2.5 py-1 rounded-full" style={{ fontSize: '12px', fontWeight: 500 }}>
                Buyer
              </span>
            </div>
            <div className="h-px bg-[#F8F8F8]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1704627363842-a169b9743309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=60"
                  alt="Agent"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>{dealDetails.agent}</p>
                  <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Agent</p>
                </div>
              </div>
              <span className="bg-[#F0F0F0] text-[#666] px-2.5 py-1 rounded-full" style={{ fontSize: '12px', fontWeight: 500 }}>
                Facilitator
              </span>
            </div>
          </div>
        </div>

        {/* Deal details */}
        <div className="bg-white rounded-[16px] p-4 mb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p className="text-[#A6A6A6] mb-3" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px' }}>
            DEAL DETAILS
          </p>
          {[
            { label: 'Deal ID', value: dealDetails.id },
            { label: 'Property', value: dealDetails.property },
            { label: 'Location', value: dealDetails.area },
            { label: 'Agreed Price', value: dealDetails.price },
            { label: 'Date', value: dealDetails.date },
            { label: 'Status', value: 'Pending Confirmation' },
          ].map((item, i) => (
            <div key={item.label} className={`flex items-start justify-between py-2.5 ${i > 0 ? 'border-t border-[#F8F8F8]' : ''}`}>
              <span className="text-[#999]" style={{ fontSize: '13px' }}>{item.label}</span>
              <span
                className={`text-right ml-4 max-w-[180px] ${item.label === 'Status' ? 'text-[#F5A623]' : 'text-[#050B2E]'}`}
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Original request */}
        <div className="bg-white rounded-[16px] p-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p className="text-[#A6A6A6] mb-2" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px' }}>
            ORIGINAL REQUEST
          </p>
          <p className="text-[#050B2E]" style={{ fontSize: '14px', lineHeight: 1.5 }}>
            {dealDetails.requestTitle}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="shrink-0 bg-white p-4 border-t border-[#F8F8F8] space-y-3">
        <button
          onClick={() => setConfirmed(true)}
          className="w-full h-12 bg-[#01CBD2] rounded-full text-white"
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          ✅ Confirm Deal
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 h-10 border border-[#E8E8E8] rounded-full text-[#666]"
            style={{ fontSize: '14px' }}
          >
            Continue Negotiating
          </button>
          <button
            onClick={() => navigate(userType === 'agent' ? '/agent' : '/investor')}
            className="flex-1 h-10 border border-[#E31D1C] rounded-full text-[#E31D1C]"
            style={{ fontSize: '14px' }}
          >
            Close Deal
          </button>
        </div>
      </div>
    </div>
  );
}

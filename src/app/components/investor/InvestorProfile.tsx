import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Settings, MessageCircle, MoreHorizontal } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { useApp } from '../AppContext';
import { MY_REQUESTS } from '../MockData';

const DUBAI_BG = 'https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800';
const INVESTOR_PHOTO = 'https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
      <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InvestorProfile() {
  const navigate = useNavigate();
  const { userName, logout } = useApp();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="flex items-center px-4 h-14 border-b border-[#F8F8F8]">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            {(userName || 'anwerhosney').toLowerCase().replace(/\s+/g, '')}
          </p>
          <button
            onClick={() => navigate('/investor/settings')}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <Settings size={17} color="#333" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        {/* Cover */}
        <div className="relative h-24 bg-[#050B2E] overflow-hidden">
          <img src={DUBAI_BG} alt="Cover" className="w-full h-full object-cover opacity-60" />
        </div>

        {/* Profile section */}
        <div className="bg-white px-4 pb-5 mb-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="-mt-9 mb-3">
            <img
              src={INVESTOR_PHOTO}
              alt="Profile"
              className="w-[75px] h-[75px] rounded-full object-cover border-4 border-white"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            />
          </div>
          <div className="flex items-center gap-2 mb-0.5">
            <p className="text-[#050B2E]" style={{ fontSize: '21px', fontWeight: 600 }}>
              {userName || 'Anwar hosny'}
            </p>
            <VerifiedBadge />
          </div>
          <p className="text-[#999] mb-3" style={{ fontSize: '13px' }}>Business Owner / Entrepreneur</p>
          <p className="text-[#050B2E] mb-4" style={{ fontSize: '13px', lineHeight: 1.6 }}>
            Specializing in high-yield off-plan developments and luxury secondary market portfolios. I provide data-driven insights to institutional and private investors looking to maximize their rental yield and capital appreciation in the Dubai market.
          </p>

          {/* Edit profile button */}
          <button
            onClick={() => navigate('/investor/edit-profile')}
            className="w-full h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
          >
            <MessageCircle size={15} color="white" />
            <span className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>Edit profile</span>
          </button>
        </div>

        {/* My Requests */}
        <div className="px-4">
          <p className="text-[#050B2E] mb-3" style={{ fontSize: '18px', fontWeight: 700 }}>My requests</p>

          <div className="space-y-3">
            {MY_REQUESTS.map(req => (
              <div
                key={req.id}
                className="bg-white rounded-[16px] p-4"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
              >
                {/* Top row */}
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
                        <span className="text-[#A6A6A6]" style={{ fontSize: '10px' }}>Online (Avg {req.investorAvgResponse})</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>🕐 {req.createdAt}</span>
                </div>

                {/* Title */}
                <p className="text-[#050B2E] mb-1" style={{ fontSize: '15px', lineHeight: 1.4, fontWeight: 600 }}>
                  {req.title}
                </p>

                {/* Note */}
                {req.note && (
                  <p className="text-[#999] mb-2" style={{ fontSize: '12px' }}>↳ Note: {req.note}</p>
                )}

                {/* Chips */}
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

                {/* Offers count row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="3" width="12" height="9" rx="2" stroke="#A6A6A6" strokeWidth="1.2" />
                      <path d="M1 6h12" stroke="#A6A6A6" strokeWidth="1.2" />
                      <path d="M7 3V1.5" stroke="#A6A6A6" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>{req.offersCount} offers submitted</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 1H3C2.45 1 2 1.45 2 2V11C2 11.55 2.45 12 3 12H5L8 15L11 12H13C13.55 12 14 11.55 14 11V2C14 1.45 13.55 1 13 1Z" stroke="#A6A6A6" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Action row */}
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/investor/offers/${req.id}`)}
                    className="flex-1 h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="3" width="12" height="9" rx="2" stroke="white" strokeWidth="1.2" />
                      <path d="M1 6h12" stroke="white" strokeWidth="1.2" />
                    </svg>
                    <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>Offers received</span>
                  </button>
                  <button
                    onClick={() => setActiveMenu(req.id)}
                    className="w-11 h-11 bg-[#01CBD2] rounded-full flex items-center justify-center shrink-0"
                  >
                    <MoreHorizontal size={18} color="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Logout */}
          <button
            onClick={() => { logout(); navigate('/'); }}
            className="w-full h-11 border border-[#E8E8E8] rounded-full text-[#999] mt-4"
            style={{ fontSize: '15px' }}
          >
            Log Out
          </button>
        </div>
      </div>

      <BottomNav userType="investor" />

      {/* Bottom sheet menu */}
      {activeMenu && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/30" onClick={() => setActiveMenu(null)} />
          <div className="relative bg-white rounded-t-[24px] pb-8">
            <div className="w-10 h-1 bg-[#050B2E] rounded-full mx-auto mt-3 mb-4" />
            <button
              onClick={() => { setActiveMenu(null); navigate(`/investor/edit-request/${activeMenu}`); }}
              className="w-full text-left px-6 py-4 border-b border-[#F8F8F8]"
              style={{ fontSize: '17px', color: '#050B2E' }}
            >
              Edit request
            </button>
            <button
              onClick={() => setActiveMenu(null)}
              className="w-full text-left px-6 py-4"
              style={{ fontSize: '17px', color: '#BE1A0E' }}
            >
              Delete request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

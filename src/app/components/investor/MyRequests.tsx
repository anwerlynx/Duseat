import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Plus, Clock, DollarSign, MapPin, ChevronRight } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { MY_REQUESTS } from '../MockData';

type FilterTab = 'All' | 'Active' | 'Matched' | 'Closed';

export default function MyRequests() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const filtered = MY_REQUESTS.filter(r => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Active') return r.status === 'active';
    if (activeTab === 'Matched') return r.status === 'matched';
    if (activeTab === 'Closed') return r.status === 'closed';
    return true;
  });

  const statusStyle = {
    active: { bg: 'bg-[#F0FBFB]', text: 'text-[#01CBD2]', label: 'Active' },
    matched: { bg: 'bg-[#F0FFF0]', text: 'text-[#0ED221]', label: 'Matched' },
    closed: { bg: 'bg-[#F8F8F8]', text: 'text-[#999]', label: 'Closed' },
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
            My Requests
          </p>
          <button
            onClick={() => navigate('/investor/add-request')}
            className="w-9 h-9 bg-[#01CBD2] rounded-full flex items-center justify-center"
          >
            <Plus size={18} color="white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center border-b border-[#F0F0F0]">
          {(['All', 'Active', 'Matched', 'Closed'] as FilterTab[]).map(tab => (
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

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 space-y-3">
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center pt-20">
            <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mb-4">
              <Plus size={28} color="#CCC" />
            </div>
            <p className="text-[#050B2E] mb-1" style={{ fontSize: '18px', fontWeight: 600 }}>No requests yet</p>
            <p className="text-[#999]" style={{ fontSize: '14px' }}>Post your first request to get offers</p>
            <button
              onClick={() => navigate('/investor/add-request')}
              className="mt-4 h-11 px-6 bg-[#01CBD2] rounded-full text-white"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              + Add Request
            </button>
          </div>
        )}

        {filtered.map(req => {
          const s = statusStyle[req.status];
          return (
            <div
              key={req.id}
              onClick={() => navigate(`/investor/offers/${req.id}`)}
              className="bg-white rounded-[16px] p-4 cursor-pointer"
              style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2.5 py-1 rounded-full ${s.bg} ${s.text}`} style={{ fontSize: '12px', fontWeight: 600 }}>
                  {s.label}
                </span>
                <div className="flex items-center gap-1">
                  <Clock size={12} color="#A6A6A6" />
                  <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>{req.createdAt}</span>
                </div>
              </div>
              <p className="text-[#050B2E] mb-3" style={{ fontSize: '16px', lineHeight: 1.4 }}>
                {req.title}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-1 bg-[#F8F8F8] rounded-full px-2.5 py-1">
                  <DollarSign size={11} color="#A6A6A6" />
                  <span className="text-[#050B2E]" style={{ fontSize: '12px', fontWeight: 600 }}>{req.budget}</span>
                </div>
                <div className="flex items-center gap-1 bg-[#F8F8F8] rounded-full px-2.5 py-1">
                  <MapPin size={11} color="#A6A6A6" />
                  <span className="text-[#666]" style={{ fontSize: '12px' }}>{req.area}</span>
                </div>
                <div className="flex items-center gap-1 bg-[#F8F8F8] rounded-full px-2.5 py-1">
                  <span className="text-[#666]" style={{ fontSize: '12px' }}>{req.method}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#666]" style={{ fontSize: '12px' }}>
                  {req.offersCount} agents competing
                </span>
                <div className="flex items-center gap-1 text-[#01CBD2]">
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>View offers</span>
                  <ChevronRight size={14} color="#01CBD2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <BottomNav userType="investor" />
    </div>
  );
}

import { useNavigate } from 'react-router';
import { ChevronLeft, Plus, TrendingUp, Home, CheckCircle2, ChevronRight } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { MY_REQUESTS, RECEIVED_OFFERS } from '../MockData';

export default function InvestorDashboard() {
  const navigate = useNavigate();

  const activeRequests = MY_REQUESTS.filter(r => r.status === 'active');
  const totalOffers = RECEIVED_OFFERS.length;
  const matchedRequests = MY_REQUESTS.filter(r => r.status === 'matched');

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
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
            My Activity
          </p>
          <button
            onClick={() => navigate('/investor/add-request')}
            className="w-9 h-9 bg-[#01CBD2] rounded-full flex items-center justify-center"
          >
            <Plus size={18} color="white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-4 space-y-4">
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Home, value: activeRequests.length, label: 'Active Requests', color: '#01CBD2' },
            { icon: TrendingUp, value: totalOffers, label: 'Offers Received', color: '#050B2E' },
            { icon: CheckCircle2, value: matchedRequests.length, label: 'Matched Deals', color: '#0ED221' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-[14px] p-3 text-center" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-1"
                style={{ background: `${stat.color}15` }}
              >
                <stat.icon size={14} color={stat.color} />
              </div>
              <p className="text-[#050B2E]" style={{ fontSize: '18px', fontWeight: 800 }}>{stat.value}</p>
              <p className="text-[#999]" style={{ fontSize: '9px', lineHeight: 1.2 }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Add request CTA */}
        <button
          onClick={() => navigate('/investor/add-request')}
          className="w-full bg-[#050B2E] rounded-[16px] p-4 flex items-center justify-between"
          style={{ boxShadow: '0 4px 16px rgba(5,11,46,0.3)' }}
        >
          <div className="flex-1 text-left">
            <p className="text-white mb-0.5" style={{ fontSize: '16px', fontWeight: 700 }}>
              Post a New Request
            </p>
            <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>
              Let agents compete to find your perfect property
            </p>
          </div>
          <div className="w-11 h-11 bg-[#01CBD2] rounded-full flex items-center justify-center shrink-0 ml-3">
            <Plus size={20} color="white" strokeWidth={2.5} />
          </div>
        </button>

        {/* My Requests */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 700 }}>My Requests</p>
            <button
              onClick={() => navigate('/investor/my-requests')}
              className="text-[#01CBD2]"
              style={{ fontSize: '13px' }}
            >
              See all
            </button>
          </div>
          <div className="space-y-3">
            {MY_REQUESTS.map(req => (
              <div
                key={req.id}
                onClick={() => navigate(`/investor/offers/${req.id}`)}
                className="bg-white rounded-[16px] p-4 cursor-pointer"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[#050B2E] flex-1 mr-2" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                    {req.title}
                  </p>
                  <span
                    className="shrink-0 px-2 py-0.5 rounded-full text-white"
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      background: req.status === 'active' ? '#01CBD2' : req.status === 'matched' ? '#0ED221' : '#999',
                    }}
                  >
                    {req.status === 'active' ? 'Active' : req.status === 'matched' ? 'Matched' : 'Closed'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="bg-[#F8F8F8] rounded-full px-2 py-0.5 text-[#050B2E]" style={{ fontSize: '11px', fontWeight: 600 }}>
                      {req.budget}
                    </span>
                    <span className="bg-[#F8F8F8] rounded-full px-2 py-0.5 text-[#666]" style={{ fontSize: '11px' }}>
                      {req.area}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#01CBD2]" style={{ fontSize: '12px', fontWeight: 600 }}>{req.offersCount} offers</span>
                    <ChevronRight size={13} color="#01CBD2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent offers */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 700 }}>Recent Offers</p>
            <button
              onClick={() => navigate('/investor/offers/my-req-1')}
              className="text-[#01CBD2]"
              style={{ fontSize: '13px' }}
            >
              See all
            </button>
          </div>
          <div className="space-y-3">
            {RECEIVED_OFFERS.slice(0, 2).map(offer => (
              <div
                key={offer.id}
                onClick={() => navigate('/investor/offers/my-req-1')}
                className="bg-white rounded-[16px] p-4 cursor-pointer"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={offer.agentAvatar} alt={offer.agentName} className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex-1">
                    <span className="text-[#050B2E]" style={{ fontSize: '13px', fontWeight: 600 }}>{offer.agentName}</span>
                    <span className="text-[#A6A6A6] ml-2" style={{ fontSize: '11px' }}>{offer.createdAt}</span>
                  </div>
                  <p className="text-[#01CBD2]" style={{ fontSize: '14px', fontWeight: 700 }}>{offer.price}</p>
                </div>
                <p className="text-[#050B2E]" style={{ fontSize: '13px', fontWeight: 600 }}>{offer.propertyTitle}</p>
                <p className="text-[#999]" style={{ fontSize: '12px', lineHeight: 1.4 }}>
                  {offer.message.substring(0, 70)}...
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-2" />
      </div>

      <BottomNav userType="investor" />
    </div>
  );
}

import { useNavigate, useParams, useLocation } from 'react-router';
import { ChevronLeft, X, CheckCircle2, MessageCircle } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { MOCK_REQUESTS } from '../MockData';

export default function OfferSentPage() {
  const navigate = useNavigate();
  const { requestId } = useParams<{ requestId: string }>();
  const location = useLocation();
  const requestNum = (location.state as { requestNum?: string })?.requestNum || '#5555500';

  const req = MOCK_REQUESTS.find(r => r.id === requestId) || MOCK_REQUESTS[0];

  const steps = [
    { label: 'Offer Sent', sub: 'Today 10:45 AM', done: true, active: false },
    { label: 'Investor Reviewing', sub: 'Processing', done: false, active: true },
    { label: 'Negotiation Chat', sub: 'Pending review', done: false, active: false },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="flex items-center px-4 h-14 border-b border-[#F8F8F8]">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <div className="flex-1" />
          <button
            onClick={() => navigate('/agent')}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
            style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
          >
            <X size={16} color="#333" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6">
        {/* Big check circle */}
        <div className="flex justify-center mt-8 mb-4">
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute -inset-4 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(1,203,210,0.15) 0%, transparent 70%)' }}
            />
            <div
              className="w-32 h-32 bg-[#01CBD2] rounded-full flex items-center justify-center border-[5px] border-[#F8F8F8]"
              style={{ boxShadow: '0 5px 20px rgba(0,209,216,0.22)' }}
            >
              <CheckCircle2 size={52} color="white" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Offer sent title */}
        <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '26px', fontWeight: 600 }}>
          Offer sent!
        </p>
        <p className="text-[#999] text-center px-8 mb-6" style={{ fontSize: '15px', lineHeight: 1.5 }}>
          Your offer has now been sent to request number {requestNum}
        </p>

        {/* Investor request card */}
        <div
          className="bg-white rounded-[12px] p-3 mb-6"
          style={{ boxShadow: '0 1px 5px rgba(0,0,0,0.08)', border: '1px solid #F8F8F8' }}
        >
          {/* Investor row */}
          <div className="flex items-center gap-2 mb-1.5 pb-2 border-b border-[#E9E9E9]">
            <img src={req.investorAvatar} alt={req.investorName} className="w-9 h-9 rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>{req.investorName}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
                  <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#0ED221] rounded-full" />
                <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>Online (Avg {req.investorAvgResponse})</span>
              </div>
            </div>
          </div>
          <p className="text-[#999] mb-2" style={{ fontSize: '12px', lineHeight: 1.4 }}>{req.title}</p>
          <p className="text-[#999] italic" style={{ fontSize: '12px', lineHeight: 1.5, color: '#999' }}>
            "Start your Pitch here Mention the ROI. neighbourhood trends. or Why this unit fits their portfolio...."
          </p>
        </div>

        {/* Next Steps */}
        <p className="text-[#999] mb-4" style={{ fontSize: '17px' }}>Next step</p>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-start gap-4">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div
                  className="w-6 h-6 rounded-[8px] flex items-center justify-center shrink-0"
                  style={{
                    background: step.done ? '#01CBD2' : step.active ? 'white' : '#CCC',
                    border: step.active ? '2px solid #01CBD2' : 'none',
                  }}
                >
                  {step.done ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  ) : step.active ? (
                    <div className="w-3 h-3 rounded-full bg-[#CCFDFF]" />
                  ) : (
                    <MessageCircle size={11} color="white" />
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 my-1"
                    style={{
                      height: '40px',
                      background: step.done ? '#01CBD2' : '#F8F8F8',
                    }}
                  />
                )}
              </div>

              {/* Step info */}
              <div className="pt-0.5 pb-4">
                <p className="text-[#050B2E]" style={{ fontSize: '17px', fontWeight: 500 }}>{step.label}</p>
                <p
                  style={{
                    fontSize: '13px',
                    color: step.active ? '#01CBD2' : '#999',
                    fontWeight: step.active ? 500 : 400,
                  }}
                >
                  {step.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to home button */}
      <div className="shrink-0 px-4 pb-6 bg-white pt-3 border-t border-[#F8F8F8]">
        <button
          onClick={() => navigate('/agent')}
          className="w-full h-11 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2"
        >
          <span className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>Back to home page</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
            <path d="M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

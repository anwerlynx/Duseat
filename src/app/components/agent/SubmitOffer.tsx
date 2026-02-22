import { useState, useRef, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, MapPin, Plus, Sparkles, CheckCircle2, X, FileText } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { MOCK_REQUESTS } from '../MockData';

type Step = 'select-request' | 'compose';

interface AttachedFile {
  id: string;
  name: string;
  type: 'image' | 'doc';
  preview?: string;
}

export default function SubmitOffer() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(requestId ? 'compose' : 'select-request');
  const [selectedRequestId, setSelectedRequestId] = useState(requestId || '');
  const [message, setMessage] = useState('');
  const [price, setPrice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const req = MOCK_REQUESTS.find(r => r.id === (selectedRequestId || requestId)) || MOCK_REQUESTS[0];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      const isImage = file.type.startsWith('image/');
      const newFile: AttachedFile = {
        id: Date.now().toString() + Math.random(),
        name: file.name,
        type: isImage ? 'image' : 'doc',
        preview: isImage ? URL.createObjectURL(file) : undefined,
      };
      setAttachedFiles(prev => [...prev, newFile]);
    });
    e.target.value = '';
  };

  const removeFile = (id: string) => {
    setAttachedFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      navigate(`/agent/offer-sent/${selectedRequestId || req.id}`, {
        state: { requestNum: `#${Math.floor(Math.random() * 9000000) + 1000000}` }
      });
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 bg-[#F0FBFB] rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} color="#01CBD2" />
        </div>
        <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
          Submitting...
        </p>
      </div>
    );
  }

  if (step === 'select-request') {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
        <div className="bg-white">
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
              Request apply
            </p>
            <div className="w-9" />
          </div>
        </div>

        {/* Bottom sheet style */}
        <div className="flex-1 flex flex-col justify-end pb-4">
          <div className="bg-white rounded-t-[20px] px-4 pt-4 pb-6">
            <div className="w-10 h-1 bg-[#050B2E] rounded-full mx-auto mb-4" />
            <p className="text-[#050B2E] mb-1" style={{ fontSize: '18px', fontWeight: 700 }}>
              Respond to a Request
            </p>
            <p className="text-[#999] mb-4" style={{ fontSize: '14px' }}>
              Select an active request
            </p>

            <div className="space-y-3">
              {MOCK_REQUESTS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRequestId(r.id)}
                  className={`w-full text-left border-2 rounded-[12px] p-4 flex items-center justify-between ${
                    selectedRequestId === r.id ? 'border-[#01CBD2]' : 'border-[#E8E8E8]'
                  }`}
                >
                  <div>
                    <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Budget</p>
                    <p className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 600 }}>
                      {r.title.substring(0, 28)}...
                    </p>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 text-[#01CBD2]">$</div>
                      <span className="text-[#666]" style={{ fontSize: '13px' }}>Budget: {r.budget}</span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedRequestId === r.id
                        ? 'border-[#01CBD2] bg-[#01CBD2]'
                        : 'border-[#CCC]'
                    }`}
                  >
                    {selectedRequestId === r.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep('compose')}
              disabled={!selectedRequestId}
              className="w-full h-12 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2 mt-5 disabled:opacity-50"
            >
              <span className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
                Next step
              </span>
              <span className="text-white">→</span>
            </button>
          </div>
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
            Request apply
          </p>
          <div className="w-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
        {/* Investor card */}
        <div className="bg-white rounded-[14px] p-4" style={{ boxShadow: '0 1px 5px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-2">
            <img src={req.investorAvatar} alt={req.investorName} className="w-9 h-9 rounded-full object-cover" />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>{req.investorName}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
                  <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#0ED221]" />
                <span className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>Online (Avg {req.investorAvgResponse})</span>
              </div>
            </div>
          </div>
          <p className="text-[#999]" style={{ fontSize: '12px', lineHeight: 1.4 }}>{req.title}</p>
        </div>

        {/* Price field */}
        <div>
          <p className="text-[#050B2E] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>Offer Price</p>
          <div className="bg-white rounded-[12px] border border-[#E8E8E8] flex items-center px-4 h-12">
            <span className="text-[#A6A6A6] mr-2" style={{ fontSize: '15px' }}>AED</span>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Enter offer price"
              className="flex-1 outline-none text-[#050B2E]"
              style={{ fontSize: '15px' }}
            />
          </div>
        </div>

        {/* Proposal message */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Proposal message</p>
            <button className="flex items-center gap-1">
              <Sparkles size={14} color="#01CBD2" />
              <span className="text-[#01CBD2]" style={{ fontSize: '13px', fontWeight: 600, textDecoration: 'underline' }}>
                AI ENHANCE
              </span>
            </button>
          </div>
          <div className="bg-white rounded-[12px] border border-[#01CBD2]" style={{ boxShadow: '0 1px 5px rgba(0,0,0,0.08)' }}>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Start your Pitch here Mention the ROI.&#10;neighborhood trends. or Why this unit fits&#10;their portfolio"
              className="w-full p-3 outline-none bg-transparent resize-none text-[#050B2E]"
              style={{ fontSize: '14px', height: '160px', lineHeight: 1.5, color: message ? '#050B2E' : '#CCC' }}
            />
          </div>
        </div>

        {/* Attachments */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Attachments</p>
            <span className="text-[#999]" style={{ fontSize: '13px' }}>{attachedFiles.length}/10 Uploaded</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {/* Add button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="shrink-0 w-20 h-20 border-2 border-dashed border-[#999] rounded-[10px] flex flex-col items-center justify-center gap-1"
            >
              <Plus size={18} color="#999" />
              <span className="text-[#999]" style={{ fontSize: '10px' }}>Add files</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Attached files */}
            {attachedFiles.map(f => (
              <div key={f.id} className="relative shrink-0 w-20 h-20">
                {f.type === 'image' && f.preview ? (
                  <img src={f.preview} alt={f.name} className="w-full h-full object-cover rounded-[10px]" />
                ) : (
                  <div className="w-full h-full rounded-[10px] bg-[#F8F8F8] flex flex-col items-center justify-center border border-[#E8E8E8] gap-1">
                    <div className="w-7 h-7 bg-[#050B2E] rounded-full flex items-center justify-center">
                      <FileText size={14} color="white" />
                    </div>
                    <span className="text-[#050B2E] text-center px-1" style={{ fontSize: '8px', lineHeight: 1.2 }}>
                      {f.name.length > 14 ? f.name.substring(0, 12) + '…' : f.name}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => removeFile(f.id)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#E31D1C] rounded-full flex items-center justify-center"
                >
                  <X size={10} color="white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <p className="text-[#050B2E] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>Location details</p>
          <div className="bg-white rounded-[12px] p-3 flex items-center gap-3" style={{ boxShadow: '0 1px 5px rgba(0,0,0,0.08)' }}>
            <div className="w-10 h-10 bg-[#050B2E] rounded-full flex items-center justify-center shrink-0">
              <MapPin size={18} color="white" />
            </div>
            <div className="flex-1">
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Add location</p>
              <p className="text-[#050B2E]" style={{ fontSize: '12px' }}>View on Google Maps</p>
            </div>
            <ChevronLeft size={18} color="#333" className="rotate-180" />
          </div>
        </div>
      </div>

      {/* Send offer button */}
      <div className="shrink-0 bg-white p-4 border-t border-[#F8F8F8]">
        <button
          onClick={handleSubmit}
          disabled={!message || !price}
          className="w-full h-12 bg-[#01CBD2] rounded-full flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <span className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>Send offer</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
            <path d="M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

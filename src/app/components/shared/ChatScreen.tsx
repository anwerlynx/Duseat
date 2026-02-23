import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Send, Paperclip, Camera, MapPin, Image, FileText, MoreVertical, CheckCheck, Home, DollarSign, Flag, BellOff, Search, X, Star } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { MOCK_CHATS, ChatMessage } from '../MockData';
import { useApp } from '../AppContext';

const AGENT_AVATAR = 'https://images.unsplash.com/photo-1704627363842-a169b9743309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';
const INVESTOR_AVATAR = 'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';

/* ─── Request card ─── */
function RequestDetailsCard({ onViewFull }: { onViewFull: () => void }) {
  return (
    <div className="mx-2 my-3 bg-white rounded-[20px] p-4" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
      <p className="text-[#050B2E] mb-3" style={{ fontSize: '16px', fontWeight: 600 }}>Request details</p>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={INVESTOR_AVATAR} alt="Ahmed" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>Ahmed Khaled</span>
        </div>
        <div className="text-right">
          <p className="text-[#A6A6A6]" style={{ fontSize: '10px' }}>Oct 12 at 3:12 PM</p>
          <p className="text-[#A6A6A6]" style={{ fontSize: '10px' }}>Investor</p>
        </div>
      </div>
      {[
        { icon: Home, label: 'Property Type', value: '4 Bedroom Villa - Ready to Move' },
        { icon: MapPin, label: 'Location', value: 'Al Barsha, Dubai' },
        { icon: DollarSign, label: 'Budget', value: '3-4M AED', badge: 'Cash' },
      ].map(({ icon: Icon, label, value, badge }) => (
        <div key={label} className="flex items-start gap-3 mb-3 last:mb-0">
          <div className="w-9 h-9 bg-[#01CBD2] rounded-full flex items-center justify-center shrink-0">
            <Icon size={16} color="white" />
          </div>
          <div>
            <p className="text-[#A6A6A6]" style={{ fontSize: '11px' }}>{label}</p>
            <div className="flex items-center gap-2">
              <p className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>{value}</p>
              {badge && (
                <span className="bg-[#01CBD2] text-white rounded-full px-2 py-0.5" style={{ fontSize: '10px', fontWeight: 600 }}>{badge}</span>
              )}
            </div>
          </div>
        </div>
      ))}
      <button onClick={onViewFull} className="w-full h-11 bg-[#01CBD2] rounded-full flex items-center justify-center mt-4">
        <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>View full request</span>
      </button>
    </div>
  );
}

/* ─── Attachment sheet ─── */
function AttachmentSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-40 flex flex-col justify-end" style={{ background: 'rgba(0,0,0,0.3)' }} onClick={onClose}>
      <div className="bg-[#F8F8F8] rounded-t-[24px] px-4 pt-5 pb-8" onClick={e => e.stopPropagation()}>
        <div className="flex justify-around">
          {[
            { icon: Image, label: 'Gallery' },
            { icon: Camera, label: 'Camera' },
            { icon: FileText, label: 'Document' },
            { icon: MapPin, label: 'Location' },
          ].map(({ icon: Icon, label }) => (
            <button key={label} onClick={onClose} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Icon size={26} color="#050B2E" />
              </div>
              <span className="text-[#050B2E]" style={{ fontSize: '12px' }}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Meatball menu ─── */
function ChatMenu({ isAgent, onConfirmDeal, onClose, onClosChat }: {
  isAgent: boolean; onConfirmDeal: () => void; onClose: () => void; onClosChat: () => void;
}) {
  return (
    <>
      <div className="absolute inset-0 z-40" onClick={onClose} />
      <div className="absolute top-14 right-3 z-50 bg-white rounded-[16px] w-56 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
        <button onClick={() => { onConfirmDeal(); onClose(); }} className="w-full flex items-center gap-3 px-4 py-4 border-b border-[#F8F8F8]">
          <div className="w-6 h-6 rounded-full border-2 border-[#01CBD2] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#01CBD2]" />
          </div>
          <span className="text-[#01CBD2]" style={{ fontSize: '15px', fontWeight: 600 }}>Confirm deal</span>
        </button>
        <button onClick={() => { onClosChat(); onClose(); }} className="w-full flex items-center gap-3 px-4 py-4 border-b border-[#F8F8F8]">
          <X size={18} color="#E31D1C" />
          <span className="text-[#E31D1C]" style={{ fontSize: '15px', fontWeight: 600 }}>Close chat</span>
        </button>
        {[
          { icon: Flag, label: 'Report user', color: '#050B2E' },
          { icon: Search, label: 'Search', color: '#050B2E' },
          { icon: BellOff, label: 'Mute notifications', color: '#050B2E' },
        ].map(({ icon: Icon, label, color }) => (
          <button key={label} onClick={onClose} className="w-full flex items-center gap-3 px-4 py-4 border-b border-[#F8F8F8] last:border-0">
            <Icon size={18} color={color} />
            <span style={{ fontSize: '15px', color }}>{label}</span>
          </button>
        ))}
      </div>
    </>
  );
}

/* ─── Close Chat Sheet ─── */
function CloseChatSheet({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-50 flex flex-col justify-end">
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} onClick={onCancel} />
      <div className="relative bg-white rounded-t-[24px] px-5 pt-4 pb-8" style={{ boxShadow: '0 -4px 32px rgba(0,0,0,0.12)' }}>
        <div className="w-10 h-1 bg-[#E0E0E0] rounded-full mx-auto mb-5" />
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[rgba(227,29,28,0.08)] flex items-center justify-center mb-3">
            <X size={26} color="#E31D1C" />
          </div>
          <p className="text-[#050B2E] text-center" style={{ fontSize: '18px', fontWeight: 700 }}>Close this chat?</p>
          <p className="text-[#999] text-center mt-1" style={{ fontSize: '14px', lineHeight: 1.5 }}>
            The conversation will be archived. You can still view it from your chat history.
          </p>
        </div>
        <div className="space-y-3">
          <button
            onClick={onConfirm}
            className="w-full h-12 rounded-full text-white"
            style={{ background: '#E31D1C', fontSize: '16px', fontWeight: 600 }}
          >
            Yes, close chat
          </button>
          <button
            onClick={onCancel}
            className="w-full h-12 border border-[#E8E8E8] rounded-full text-[#050B2E]"
            style={{ fontSize: '16px', fontWeight: 500 }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Confirm deal sheet (Step 1) ─── */
function ConfirmDealSheet({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-50 flex flex-col justify-end">
      <div className="bg-white rounded-t-[24px] px-5 pt-4 pb-8" style={{ boxShadow: '0 -4px 32px rgba(0,0,0,0.12)' }}>
        <div className="w-10 h-1 bg-[#050B2E] rounded-full mx-auto mb-5" />
        <p className="text-[#050B2E] text-center mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>Confirm deal</p>
        <p className="text-[#050B2E] mb-5" style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.4 }}>
          Did you complete a deal with this agent?
        </p>
        <div className="space-y-3">
          <button onClick={onYes} className="w-full h-12 bg-[#01CBD2] rounded-full text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
            Yes, deal completed
          </button>
          <button onClick={onNo} className="w-full h-12 border border-[#01CBD2] rounded-full text-[#01CBD2]" style={{ fontSize: '16px', fontWeight: 600 }}>
            No, deal not completed
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Budget sheet (Step 2) ─── */
function BudgetSheet({ onConfirm }: { onConfirm: (budget: string) => void }) {
  const [budget, setBudget] = useState('');
  return (
    <div className="absolute inset-x-0 bottom-0 z-50 flex flex-col justify-end">
      <div className="bg-white rounded-t-[24px] px-5 pt-4 pb-8" style={{ boxShadow: '0 -4px 32px rgba(0,0,0,0.12)' }}>
        <div className="w-10 h-1 bg-[#050B2E] rounded-full mx-auto mb-5" />
        <p className="text-[#050B2E] text-center mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>Confirm deal</p>
        <p className="text-[#050B2E] mb-5" style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.4 }}>
          What was the final agreed budget?
        </p>
        <input
          type="text"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          placeholder="Enter amount in AED (e.g. 3,500,000)"
          className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none focus:border-[#01CBD2] mb-2"
          style={{ fontSize: '15px', color: '#050B2E' }}
        />
        <p className="text-[#A6A6A6] mb-6" style={{ fontSize: '12px' }}>This is for internal analytics only</p>
        <button
          onClick={() => onConfirm(budget)}
          className="w-full h-12 bg-[#01CBD2] rounded-full text-white"
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

/* ─── Feedback sheet (Step 3) ─── */
function FeedbackSheet({ onSubmit }: { onSubmit: () => void }) {
  const [ratings, setRatings] = useState({ communication: 0, relevance: 0, commitment: 0 });
  const [feedback, setFeedback] = useState('');

  const StarRow = ({ question, key_, value, onChange }: { question: string; key_: keyof typeof ratings; value: number; onChange: (n: number) => void }) => (
    <div className="mb-6">
      <p className="text-[#050B2E] text-center mb-3" style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.4 }}>{question}</p>
      <div className="flex justify-center gap-3">
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} onClick={() => onChange(n)}>
            <Star size={32} fill={n <= value ? '#01CBD2' : 'none'} color={n <= value ? '#01CBD2' : '#E8E8E8'} />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="absolute inset-0 z-50 bg-white overflow-y-auto">
      <div className="px-5 pt-6 pb-8">
        <p className="text-[#050B2E] text-center mb-6" style={{ fontSize: '20px', fontWeight: 700 }}>Feedback</p>
        <StarRow
          question="How was the agent's communication?"
          key_="communication"
          value={ratings.communication}
          onChange={n => setRatings(p => ({ ...p, communication: n }))}
        />
        <StarRow
          question="How relevant were the offers to your request?"
          key_="relevance"
          value={ratings.relevance}
          onChange={n => setRatings(p => ({ ...p, relevance: n }))}
        />
        <StarRow
          question="How committed was the agent to the agreement?"
          key_="commitment"
          value={ratings.commitment}
          onChange={n => setRatings(p => ({ ...p, commitment: n }))}
        />
        <p className="text-[#050B2E] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>Anything we should know?</p>
        <textarea
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          placeholder="Optional feedback"
          className="w-full border border-[#E8E8E8] rounded-[12px] p-3 outline-none resize-none focus:border-[#01CBD2] mb-6"
          style={{ height: '100px', fontSize: '14px', color: '#050B2E' }}
        />
        <button
          onClick={onSubmit}
          className="w-full h-12 bg-[#01CBD2] rounded-full text-white"
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          Submit rating & close chat
        </button>
      </div>
    </div>
  );
}

export default function ChatScreen() {
  const navigate = useNavigate();
  const { userType } = useApp();
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_CHATS[0].messages);
  const [showAttachments, setShowAttachments] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNewMessages, setShowNewMessages] = useState(false);
  const [showCloseSheet, setShowCloseSheet] = useState(false);
  const [dealStep, setDealStep] = useState<'none' | 'confirm' | 'budget' | 'feedback' | 'done'>('none');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chat = MOCK_CHATS[0];
  const isAgent = userType === 'agent';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!messageText.trim()) return;
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'current',
      senderName: 'You',
      text: messageText.trim(),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
    };
    setMessages(prev => [...prev, newMsg]);
    setMessageText('');

    setTimeout(() => {
      const reply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        senderId: 'other',
        senderName: chat.participantName,
        text: "Thank you for your message! I'll check the property details and get back to you shortly.",
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isOwn: false,
      };
      setMessages(prev => [...prev, reply]);
      setShowNewMessages(true);
      setTimeout(() => setShowNewMessages(false), 3000);
    }, 1500);
  };

  if (dealStep === 'done') {
    return (
      <div className="min-h-screen bg-[#050B2E] flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(1,203,210,0.15)' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M14 24L21 31L34 18" stroke="#01CBD2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white text-center mb-2" style={{ fontSize: '24px', fontWeight: 800 }}>Deal Confirmed! 🎉</p>
        <p className="text-[#A6A6A6] text-center mb-8" style={{ fontSize: '15px', lineHeight: 1.6 }}>
          Your feedback has been submitted. The chat will be closed and archived.
        </p>
        <button
          onClick={() => navigate(isAgent ? '/agent' : '/investor')}
          className="w-full h-12 bg-[#01CBD2] rounded-full text-white"
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col relative">
      {/* Header */}
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="flex items-center px-4 h-[60px] border-b border-[rgba(0,0,0,0.08)]">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0"
            style={{ boxShadow: 'inset 0px -1px 4px 0px #00a2a8, inset 0px 4px 4px 0px rgba(255,255,255,0.25)' }}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7L7 13" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Avatar + name (clickable → profile) */}
          <button
            onClick={() => navigate(isAgent ? '/agent/profile' : '/investor/profile')}
            className="flex items-center gap-3 flex-1 mx-3"
          >
            <div className="relative shrink-0">
              <img src={chat.participantAvatar} alt={chat.participantName} className="w-[45px] h-[45px] rounded-full object-cover" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#0ED221] rounded-full border-2 border-white" />
            </div>
            <div className="text-left">
              <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>{chat.participantName}</p>
              <p className="text-[#01CBD2]" style={{ fontSize: '12px' }}>Rera verfied | Pro agent</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#0ED221]" />
                <span className="text-[#0ED221]" style={{ fontSize: '11px' }}>Online now</span>
              </div>
            </div>
          </button>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0"
            style={{ boxShadow: 'inset 0px -1px 4px 0px #00a2a8, inset 0px 4px 4px 0px rgba(255,255,255,0.25)' }}
          >
            <MoreVertical size={16} color="#333" />
          </button>
        </div>

        {/* Context pill */}
        <div className="flex justify-center py-2 border-b border-[#F0F0F0]">
          <div className="bg-[#F8F8F8] rounded-full px-4 py-1.5">
            <span className="text-[#050B2E]" style={{ fontSize: '12px' }}>
              4 Bedroom Villa • Al Barsha • 3-4M AED
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-2" onClick={() => showMenu && setShowMenu(false)}>
        {/* System message — styled as a centered bubble */}
        <div className="flex justify-center my-3 px-4">
          <div
            className="max-w-[85%] rounded-[18px] rounded-bl-sm px-4 py-3 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(1,203,210,0.12) 0%, rgba(5,11,46,0.06) 100%)',
              border: '1px solid rgba(1,203,210,0.2)',
            }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <div className="w-4 h-4 rounded-full bg-[#01CBD2] flex items-center justify-center">
                <span style={{ fontSize: '8px', color: 'white', fontWeight: 700 }}>S</span>
              </div>
              <span style={{ fontSize: '10px', color: '#01CBD2', fontWeight: 700, letterSpacing: '0.5px' }}>SYSTEM</span>
            </div>
            <p className="text-[#050B2E]" style={{ fontSize: '12px', lineHeight: 1.6 }}>
              The investor has accepted this offer for request <span style={{ fontWeight: 700, color: '#01CBD2' }}>#917212</span>. This chat has been created automatically to complete the deal details.
            </p>
            <p className="text-[#A6A6A6] mt-1" style={{ fontSize: '10px' }}>11:06</p>
          </div>
        </div>

        {/* Request card */}
        <RequestDetailsCard onViewFull={() => navigate('/deal/deal-1')} />

        {/* Date separator */}
        <div className="flex items-center gap-3 my-2 px-2">
          <div className="flex-1 h-px bg-[#F0F0F0]" />
          <span className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Oct 12 at 3:12 PM</span>
          <div className="flex-1 h-px bg-[#F0F0F0]" />
        </div>

        {/* Messages */}
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'} items-end gap-2 px-2`}>
            {!msg.isOwn && (
              <button onClick={() => navigate(isAgent ? '/investor/profile' : '/agent/profile')}>
                <img src={chat.participantAvatar} alt="" className="w-7 h-7 rounded-full object-cover shrink-0" />
              </button>
            )}
            <div className={`max-w-[70%] ${msg.isOwn ? 'items-end' : 'items-start'} flex flex-col`}>
              {!msg.isOwn && (
                <p className="text-[#01CBD2] mb-0.5 px-1" style={{ fontSize: '12px', fontWeight: 600 }}>
                  {chat.participantName}
                </p>
              )}
              <div
                className={`rounded-2xl px-4 py-2.5 ${msg.isOwn ? 'bg-[#01CBD2] rounded-br-sm' : 'bg-white rounded-bl-sm'}`}
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              >
                <p style={{ fontSize: '14px', lineHeight: 1.5, color: msg.isOwn ? 'white' : '#050B2E' }}>
                  {msg.text}
                </p>
              </div>
              <div className={`flex items-center gap-1 mt-1 ${msg.isOwn ? 'flex-row-reverse' : ''}`}>
                <span className="text-[#A6A6A6]" style={{ fontSize: '10px' }}>{msg.time}</span>
                {msg.isOwn && <CheckCheck size={12} color="#01CBD2" />}
              </div>
            </div>
          </div>
        ))}

        {showNewMessages && (
          <div className="flex justify-center">
            <button
              onClick={() => { setShowNewMessages(false); messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white rounded-full px-4 py-2 flex items-center gap-2"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            >
              <span className="text-[#050B2E]" style={{ fontSize: '13px', fontWeight: 500 }}>↓ New Messages</span>
            </button>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Complete deal CTA for investor */}
      {!isAgent && dealStep === 'none' && (
        <div className="shrink-0 px-4 pb-2">
          <button
            onClick={() => setDealStep('confirm')}
            className="w-full h-11 bg-[#050B2E] rounded-full flex items-center justify-center gap-2"
          >
            <span className="text-[#01CBD2]" style={{ fontSize: '14px', fontWeight: 700 }}>🤝</span>
            <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>Complete the Deal</span>
          </button>
        </div>
      )}

      {/* Input area */}
      <div className="shrink-0 bg-white border-t border-[#F0F0F0] px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={() => setShowAttachments(true)}>
            <Paperclip size={22} color="#050B2E" />
          </button>
          <button>
            <Camera size={22} color="#050B2E" />
          </button>
          <div
            className="flex-1 flex items-center bg-white rounded-[20px] px-4 h-10"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
          >
            <input
              type="text"
              value={messageText}
              onChange={e => setMessageText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Message"
              className="flex-1 bg-transparent outline-none"
              style={{ fontSize: '16px', color: messageText ? '#050B2E' : 'rgba(0,0,0,0.2)' }}
            />
          </div>
          <button
            onClick={handleSend}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${messageText.trim() ? 'bg-[#01CBD2]' : 'bg-[#F0F0F0]'}`}
          >
            <Send size={16} color={messageText.trim() ? 'white' : '#CCC'} />
          </button>
        </div>
      </div>

      {/* Overlays */}
      {showAttachments && <AttachmentSheet onClose={() => setShowAttachments(false)} />}
      {showMenu && (
        <ChatMenu
          isAgent={isAgent}
          onConfirmDeal={() => setDealStep('confirm')}
          onClose={() => setShowMenu(false)}
          onClosChat={() => setShowCloseSheet(true)}
        />
      )}
      {showCloseSheet && (
        <CloseChatSheet
          onConfirm={() => { setShowCloseSheet(false); navigate(-1); }}
          onCancel={() => setShowCloseSheet(false)}
        />
      )}
      {dealStep === 'confirm' && (
        <div className="absolute inset-0 z-40" style={{ background: 'rgba(0,0,0,0.3)' }} onClick={() => setDealStep('none')}>
          <div onClick={e => e.stopPropagation()}>
            <ConfirmDealSheet onYes={() => setDealStep('budget')} onNo={() => setDealStep('none')} />
          </div>
        </div>
      )}
      {dealStep === 'budget' && (
        <div className="absolute inset-0 z-40" style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div onClick={e => e.stopPropagation()}>
            <BudgetSheet onConfirm={() => setDealStep('feedback')} />
          </div>
        </div>
      )}
      {dealStep === 'feedback' && (
        <FeedbackSheet onSubmit={() => setDealStep('done')} />
      )}
    </div>
  );
}

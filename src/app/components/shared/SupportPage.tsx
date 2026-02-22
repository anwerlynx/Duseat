import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Mail, MessageCircle, Phone, Send, CheckCircle } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { useApp } from '../AppContext';

export default function SupportPage() {
  const navigate = useNavigate();
  const { userType, userName } = useApp();

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (subject && message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubject('');
        setMessage('');
        setSubmitted(false);
      }, 3000);
    }
  };

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email Support',
      value: 'support@duseat.com',
      action: () => {},
    },
    {
      icon: Phone,
      label: 'Call Support',
      value: '+971 4 000 0000',
      action: () => {},
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      value: 'Available 9am – 6pm GST',
      action: () => {},
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="bg-white shrink-0 border-b border-[#F0F0F0]">
        <StatusBar />
        <div className="flex items-center px-4 h-14">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-[#F8F8F8] rounded-full flex items-center justify-center shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]"
          >
            <ChevronRight size={16} color="#333" className="rotate-180" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '20px', fontWeight: 600 }}>
            Support
          </p>
          <div className="w-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-6">
        {/* Contact options */}
        <p className="text-[#999] mb-3" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '13px', letterSpacing: '0.5px' }}>
          CONTACT US
        </p>
        <div className="bg-white rounded-[16px] overflow-hidden mb-6" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          {contactOptions.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.label}
                onClick={opt.action}
                className={`w-full flex items-center gap-3 px-4 py-4 ${i > 0 ? 'border-t border-[#F8F8F8]' : ''}`}
              >
                <div className="w-9 h-9 bg-[#F0FBFB] rounded-full flex items-center justify-center shrink-0">
                  <Icon size={18} color="#01CBD2" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}>
                    {opt.label}
                  </p>
                  <p className="text-[#999]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '12px' }}>
                    {opt.value}
                  </p>
                </div>
                <ChevronRight size={16} color="#CCC" />
              </button>
            );
          })}
        </div>

        {/* Message form */}
        <p className="text-[#999] mb-3" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '13px', letterSpacing: '0.5px' }}>
          SEND A MESSAGE
        </p>
        <div className="bg-white rounded-[16px] p-4 flex flex-col gap-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          {/* Subject */}
          <div className="rounded-[12px] border border-[#01CBD2] px-3 h-[56px] flex flex-col justify-center">
            <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '11px', color: '#666', fontWeight: 500 }}>Subject</p>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="What can we help you with?"
              className="bg-transparent outline-none text-[#050B2E] placeholder-[#CCC] w-full"
              style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
            />
          </div>

          {/* Message */}
          <div className="rounded-[12px] border border-[#01CBD2] px-3 pt-2 pb-3">
            <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '11px', color: '#666', fontWeight: 500 }}>Message</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Describe your issue in detail…"
              rows={4}
              className="bg-transparent outline-none text-[#050B2E] placeholder-[#CCC] w-full resize-none"
              style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
            />
          </div>

          {/* Submit */}
          {submitted ? (
            <div className="flex items-center justify-center gap-2 h-11 bg-[#E8FDF5] rounded-full">
              <CheckCircle size={18} color="#0ED221" />
              <span className="text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}>
                Message sent!
              </span>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className={`w-full h-11 rounded-full flex items-center justify-center gap-2 transition-colors ${subject && message ? 'bg-[#01CBD2]' : 'bg-[#CCC]'}`}
            >
              <Send size={16} color="white" />
              <span className="text-white" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px', fontWeight: 600 }}>
                Send Message
              </span>
            </button>
          )}
        </div>
      </div>

      <BottomNav userType={userType === 'agent' ? 'agent' : 'investor'} />
    </div>
  );
}

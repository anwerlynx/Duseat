import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, ChevronDown, Eye, EyeOff, UserX } from 'lucide-react';
import imgMale01 from '@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png';
import { StatusBar } from '../StatusBar';
import { useApp } from '../AppContext';

/* ─── Constants ─── */
const REASONS = [
  'Privacy concerns',
  'I no longer need the service',
  'Too many notifications',
  'Found a better alternative',
  'Temporary break',
  'Other',
];

const WARNINGS = [
  "You won't be able to log in after deletion",
  "You can't create a new account with the same email",
  'Your data and conversations will be removed',
  'Account deletion is permanent after 14 days',
];

/* ─── Avatar with delete badge ─── */
function AvatarSection() {
  return (
    <div className="flex justify-center pt-8 pb-6">
      <div className="relative">
        <div className="size-[75px] rounded-full overflow-hidden">
          <img
            src={imgMale01}
            alt="avatar"
            className="w-full object-cover"
            style={{ height: '133.33%', marginTop: '-4.16%' }}
          />
        </div>
        <div className="absolute bottom-0.5 right-0.5 bg-white rounded-full p-1 shadow-sm">
          <UserX size={12} color="#BE1A0E" />
        </div>
      </div>
    </div>
  );
}

/* ─── Warning bullets ─── */
function WarningBullets() {
  return (
    <div className="flex flex-col gap-3">
      <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px', fontWeight: 600, color: '#050B2E' }}>
        Things to check when deleting your account:
      </p>
      <ul className="flex flex-col gap-1.5">
        {WARNINGS.map(w => (
          <li key={w} className="flex items-start gap-2">
            <span className="text-[#666] mt-0.5 shrink-0">•</span>
            <span style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '14px', color: '#666' }}>{w}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Confirm Delete Modal ─── */
function ConfirmModal({
  onBack,
  onProceed,
}: { onBack: () => void; onProceed: () => void }) {
  const [text, setText] = useState('');
  const isValid = text.toLowerCase() === 'delete account';

  return (
    <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)] flex items-end z-30">
      <div className="w-full bg-white rounded-t-[32px] px-6 py-8 flex flex-col gap-5 shadow-[0px_5px_20px_0px_rgba(0,0,0,0.15)]">
        {/* Handle */}
        <div className="flex justify-center -mt-2">
          <div className="w-12 h-1 bg-[#050B2E] rounded-full" />
        </div>
        <p className="text-center text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '20px', fontWeight: 600 }}>
          Delete Account
        </p>

        <div className="flex flex-col gap-2 text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}>
          <p>Are you sure you want to delete your account?</p>
          <p>You will permanently lose your:</p>
          <ul className="list-disc pl-5 space-y-0.5">
            <li>profile</li>
            <li>photos</li>
            <li>messages</li>
          </ul>
          <p className="mt-1">
            Type <span className="text-[#01CBD2] font-semibold">"delete account"</span> to confirm.
          </p>
        </div>

        {/* Input */}
        <div className="h-[56px] rounded-[12px] border border-[#01CBD2] bg-white shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] flex items-center px-4">
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="delete account"
            className="flex-1 bg-transparent outline-none text-[#050B2E] placeholder-[#CCC]"
            style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 h-11 border border-[#01CBD2] rounded-[20px] text-[#01CBD2] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]"
            style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
          >
            Back
          </button>
          <button
            onClick={isValid ? onProceed : undefined}
            className={`flex-1 h-11 rounded-[20px] text-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] transition-colors ${isValid ? 'bg-[#01CBD2]' : 'bg-[#CCC]'}`}
            style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
          >
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Verify Password Modal ─── */
function VerifyModal({
  onBack,
  onConfirm,
}: { onBack: () => void; onConfirm: () => void }) {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)] flex items-end z-30">
      <div className="w-full bg-white rounded-t-[32px] px-6 py-8 flex flex-col gap-5 shadow-[0px_5px_20px_0px_rgba(0,0,0,0.15)]">
        <div className="flex justify-center -mt-2">
          <div className="w-12 h-1 bg-[#050B2E] rounded-full" />
        </div>
        <p className="text-center text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '20px', fontWeight: 600 }}>
          Verify account
        </p>

        <p className="text-[#666]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}>
          Please verify your account by entering your password
        </p>

        {/* Password input */}
        <div className="h-[56px] rounded-[12px] border border-[#01CBD2] bg-white shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] flex items-center px-4 gap-3">
          <input
            type={show ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="flex-1 bg-transparent outline-none text-[#050B2E] placeholder-[#CCC]"
            style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
          />
          <button onClick={() => setShow(!show)} className="shrink-0">
            {show ? <EyeOff size={18} color="#333" /> : <Eye size={18} color="#333" />}
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 h-11 border border-[#01CBD2] rounded-[20px] text-[#01CBD2] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]"
            style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
          >
            Back
          </button>
          <button
            onClick={password.length > 0 ? onConfirm : undefined}
            className={`flex-1 h-11 rounded-[20px] text-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] transition-colors ${password.length > 0 ? 'bg-[#01CBD2]' : 'bg-[#CCC]'}`}
            style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
          >
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function DeleteAccount() {
  const navigate = useNavigate();
  const { logout } = useApp();

  const [selectedReason, setSelectedReason] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [otherText, setOtherText] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleDeleteMyAccount = () => {
    if (!selectedReason) {
      setDropdownOpen(true);
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmProceed = () => {
    setShowConfirmModal(false);
    setShowVerifyModal(true);
  };

  const handleFinalDelete = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
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
            Delete account
          </p>
          <div className="w-9" />
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto pb-6 px-4">
        <AvatarSection />

        <div className="flex flex-col gap-6">
          {/* Reason section */}
          <div className="flex flex-col gap-4">
            <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px', fontWeight: 600, color: '#050B2E' }}>
              Tell us the reason for closing your account:
            </p>

            {/* Dropdown trigger */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full h-[60px] rounded-[12px] border border-[#01CBD2] flex items-center justify-between px-4 bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]"
              >
                <span
                  style={{
                    fontFamily: "'TT Commons', sans-serif",
                    fontSize: '15px',
                    color: selectedReason ? '#050B2E' : '#666',
                  }}
                >
                  {selectedReason || "Tell us why you're closing your account"}
                </span>
                <ChevronDown
                  size={16}
                  color="#333"
                  style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                />
              </button>

              {/* Dropdown options */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-[#01CBD2] rounded-b-[8px] z-10 shadow-lg overflow-hidden">
                  {REASONS.map((reason, i) => (
                    <button
                      key={reason}
                      onClick={() => { setSelectedReason(reason); setDropdownOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F8F8F8] ${i < REASONS.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}
                    >
                      <div
                        className="size-5 rounded-full border-2 shrink-0 transition-colors"
                        style={{
                          borderColor: selectedReason === reason ? '#01CBD2' : '#D9D9D9',
                          backgroundColor: selectedReason === reason ? '#01CBD2' : 'transparent',
                        }}
                      />
                      <span style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px', color: '#050B2E' }}>
                        {reason}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* "Other" text input */}
            {selectedReason === 'Other' && (
              <div className="flex flex-col gap-2">
                <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px', fontWeight: 600, color: '#050B2E' }}>
                  Please describe the issue
                </p>
                <div className="h-[60px] rounded-[12px] border border-[#01CBD2] bg-white shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] flex items-center px-4">
                  <input
                    type="text"
                    value={otherText}
                    onChange={e => setOtherText(e.target.value)}
                    placeholder="This helps us keep the platform safe"
                    className="flex-1 bg-transparent outline-none text-[#050B2E] placeholder-[#CCC]"
                    style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Warnings */}
          <WarningBullets />
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 pb-6 flex flex-col gap-3 shrink-0">
        <button
          onClick={() => {}}
          className="w-full h-11 bg-[#01CBD2] rounded-full text-white"
          style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '16px', fontWeight: 600 }}
        >
          Deactivate Account
        </button>
        <button
          onClick={handleDeleteMyAccount}
          className="w-full text-center text-[#BE1A0E] underline"
          style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '16px', fontWeight: 600 }}
        >
          Delete My Account
        </button>
      </div>

      {/* Confirm modal */}
      {showConfirmModal && (
        <ConfirmModal
          onBack={() => setShowConfirmModal(false)}
          onProceed={handleConfirmProceed}
        />
      )}

      {/* Verify modal */}
      {showVerifyModal && (
        <VerifyModal
          onBack={() => { setShowVerifyModal(false); setShowConfirmModal(true); }}
          onConfirm={handleFinalDelete}
        />
      )}
    </div>
  );
}

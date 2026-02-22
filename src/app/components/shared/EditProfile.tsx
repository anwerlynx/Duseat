import { useState, useRef, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Camera, ChevronDown, Trash2, Check } from 'lucide-react';
import imgMale01 from '@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png';
import { StatusBar } from '../StatusBar';
import { useApp } from '../AppContext';

const COUNTRY_CODES = [
  { flag: '🇦🇪', code: '+971', name: 'UAE' },
  { flag: '🇸🇦', code: '+966', name: 'Saudi Arabia' },
  { flag: '🇪🇬', code: '+20', name: 'Egypt' },
  { flag: '🇶🇦', code: '+974', name: 'Qatar' },
  { flag: '🇰🇼', code: '+965', name: 'Kuwait' },
  { flag: '🇧🇭', code: '+973', name: 'Bahrain' },
  { flag: '🇴🇲', code: '+968', name: 'Oman' },
  { flag: '🇯🇴', code: '+962', name: 'Jordan' },
  { flag: '🇬🇧', code: '+44', name: 'UK' },
  { flag: '🇺🇸', code: '+1', name: 'USA' },
];

interface FormData {
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: string;
  gender: string;
  birthday: string;
  email: string;
  address: string;
  username: string;
  bio: string;
}

/* ─── Form field ─── */
function FormField({
  label, value, onChange, type = 'text', readOnly = false, multiline = false,
}: {
  label: string; value: string; onChange?: (v: string) => void;
  type?: string; readOnly?: boolean; multiline?: boolean;
}) {
  if (multiline) {
    return (
      <div className="flex-1 rounded-[12px] border border-[#01CBD2] px-3 py-2 min-w-0">
        <p style={{ fontSize: '11px', color: '#666', fontWeight: 500 }}>{label}</p>
        <textarea
          value={value}
          onChange={e => onChange?.(e.target.value)}
          readOnly={readOnly}
          rows={3}
          className="bg-transparent outline-none w-full text-[#050B2E] resize-none"
          style={{ fontSize: '15px', marginTop: 2 }}
        />
      </div>
    );
  }
  return (
    <div className="flex-1 rounded-[12px] border border-[#01CBD2] flex flex-col justify-center px-3 h-[56px] min-w-0">
      <p style={{ fontSize: '11px', color: '#666', fontWeight: 500 }}>{label}</p>
      <input
        type={type}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        readOnly={readOnly}
        className="bg-transparent outline-none w-full text-[#050B2E] placeholder-[#CCC]"
        style={{ fontSize: '15px' }}
      />
    </div>
  );
}

/* ─── Phone field with country picker ─── */
function PhoneField({
  countryCode, phone, onCountryChange, onPhoneChange,
}: {
  countryCode: string; phone: string;
  onCountryChange: (v: string) => void; onPhoneChange: (v: string) => void;
}) {
  const [showPicker, setShowPicker] = useState(false);
  const selected = COUNTRY_CODES.find(c => c.code === countryCode) || COUNTRY_CODES[0];

  return (
    <div className="flex gap-2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          className="h-[56px] border border-[#01CBD2] rounded-[12px] px-3 flex items-center gap-1 bg-white shrink-0"
          style={{ minWidth: '95px' }}
        >
          <span style={{ fontSize: '18px' }}>{selected.flag}</span>
          <span style={{ fontSize: '14px', color: '#050B2E' }}>{selected.code}</span>
          <ChevronDown size={12} color="#A6A6A6" />
        </button>
        {showPicker && (
          <div className="absolute top-full left-0 bg-white border border-[#E8E8E8] rounded-[12px] shadow-xl z-50 w-56 max-h-52 overflow-y-auto mt-1">
            {COUNTRY_CODES.map(c => (
              <button
                key={c.code}
                type="button"
                onClick={() => { onCountryChange(c.code); setShowPicker(false); }}
                className="w-full px-4 py-2.5 flex items-center gap-2 hover:bg-[#F8F8F8] border-b border-[#F8F8F8] last:border-0"
              >
                <span style={{ fontSize: '18px' }}>{c.flag}</span>
                <span style={{ fontSize: '13px', color: '#050B2E' }}>{c.name}</span>
                <span className="ml-auto text-[#A6A6A6]" style={{ fontSize: '12px' }}>{c.code}</span>
                {c.code === countryCode && <Check size={14} color="#01CBD2" />}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 border border-[#01CBD2] rounded-[12px] flex flex-col justify-center px-3 h-[56px]">
        <p style={{ fontSize: '11px', color: '#666', fontWeight: 500 }}>Phone number</p>
        <input
          type="tel"
          value={phone}
          onChange={e => onPhoneChange(e.target.value)}
          placeholder="50 123 4567"
          className="bg-transparent outline-none w-full text-[#050B2E]"
          style={{ fontSize: '15px' }}
        />
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function EditProfile() {
  const navigate = useNavigate();
  const { userType, userName } = useApp();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const base = userType === 'agent' ? '/agent' : '/investor';

  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [coverSrc, setCoverSrc] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [showGender, setShowGender] = useState(false);

  const [form, setForm] = useState<FormData>({
    firstName: userName?.split(' ')[0] || 'Anwar',
    lastName: userName?.split(' ')[1] || 'Hosny',
    countryCode: '+20',
    phone: '1017130116',
    gender: 'Male',
    birthday: '1/1/2001',
    email: 'anwerhosney@gmail.com',
    address: 'Egypt, Kafr-elshiekh',
    username: userName?.toLowerCase().replace(/\s+/g, '') || 'anwerhosney',
    bio: '',
  });

  const update = (k: keyof FormData) => (v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAvatarSrc(URL.createObjectURL(file));
  };

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCoverSrc(URL.createObjectURL(file));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => { setSaved(false); navigate(-1); }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            Edit profile
          </p>
          <button
            onClick={handleSave}
            className="bg-[#01CBD2] rounded-full px-4 h-8 flex items-center"
          >
            <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>
              {saved ? '✓ Saved' : 'Save'}
            </span>
          </button>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto pb-8">
        {/* Cover photo area */}
        <div className="relative h-32 bg-gradient-to-r from-[#050B2E] to-[#01CBD2] mb-12">
          {coverSrc && <img src={coverSrc} alt="cover" className="w-full h-full object-cover" />}
          <button
            onClick={() => coverInputRef.current?.click()}
            className="absolute inset-0 flex items-center justify-center gap-2 bg-black/20"
          >
            <Camera size={20} color="white" />
            <span className="text-white" style={{ fontSize: '13px', fontWeight: 500 }}>Change Cover</span>
          </button>
          <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />

          {/* Avatar — overlapping cover */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                {avatarSrc ? (
                  <img src={avatarSrc} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <img src={imgMale01} alt="avatar" className="w-full object-cover" style={{ height: '133.33%', marginTop: '-4.16%' }} />
                )}
              </div>
              {/* Camera badge on avatar */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#01CBD2] rounded-full flex items-center justify-center border-2 border-white"
              >
                <Camera size={14} color="white" />
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="px-4 flex flex-col gap-4">
          <p style={{ fontSize: '18px', color: '#666' }}>Personal details</p>

          {/* Name row */}
          <div className="flex gap-3">
            <FormField label="First name" value={form.firstName} onChange={update('firstName')} />
            <FormField label="Last name" value={form.lastName} onChange={update('lastName')} />
          </div>

          {/* Phone row */}
          <PhoneField
            countryCode={form.countryCode}
            phone={form.phone}
            onCountryChange={update('countryCode')}
            onPhoneChange={update('phone')}
          />

          {/* Gender + Birthday */}
          <div className="flex gap-3">
            <div className="relative">
              <button
                onClick={() => setShowGender(!showGender)}
                className="rounded-[12px] border border-[#01CBD2] flex flex-col justify-center px-3 h-[56px] w-[130px] text-left"
              >
                <p style={{ fontSize: '11px', color: '#666', fontWeight: 500 }}>Gender</p>
                <div className="flex items-center gap-1">
                  <span style={{ fontSize: '15px', color: '#050B2E' }}>{form.gender}</span>
                  <ChevronDown size={12} color="#333" />
                </div>
              </button>
              {showGender && (
                <div className="absolute top-full left-0 bg-white border border-[#01CBD2] rounded-[8px] shadow-lg z-10 w-[130px]">
                  {['Male', 'Female', 'Prefer not to say'].map(g => (
                    <button
                      key={g}
                      onClick={() => { update('gender')(g); setShowGender(false); }}
                      className="w-full px-3 py-2.5 text-left hover:bg-[#F8F8F8] first:rounded-t-[8px] last:rounded-b-[8px] flex items-center justify-between"
                      style={{ fontSize: '14px', color: '#050B2E' }}
                    >
                      {g}
                      {form.gender === g && <Check size={14} color="#01CBD2" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <FormField label="Birthday" value={form.birthday} onChange={update('birthday')} />
          </div>

          {/* Email */}
          <FormField label="Email" value={form.email} onChange={update('email')} type="email" />

          {/* Address */}
          <FormField label="Address" value={form.address} onChange={update('address')} />

          {/* Username */}
          <FormField label="Username" value={form.username} onChange={update('username')} />

          {/* Bio */}
          <FormField label="Bio" value={form.bio} onChange={update('bio')} multiline />

          {/* Other */}
          <p style={{ fontSize: '18px', color: '#666' }} className="mt-1">Other</p>

          {/* Delete account */}
          <button
            onClick={() => navigate(`${base}/delete-account`)}
            className="bg-white rounded-full shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] flex items-center gap-3 px-4 py-3"
          >
            <Trash2 size={18} color="#BE1A0E" />
            <span className="flex-1 text-left text-[#BE1A0E]" style={{ fontSize: '16px' }}>Delete account</span>
            <ChevronRight size={16} color="#BE1A0E" />
          </button>

          {/* Save button */}
          <button
            onClick={handleSave}
            className="w-full h-11 bg-[#01CBD2] rounded-full text-white mt-2"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            {saved ? '✓ Changes Saved' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}

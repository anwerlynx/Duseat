import { useState, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';
import { StatusBar } from '../StatusBar';
import { Eye, EyeOff, Building2, Users, ChevronLeft, ChevronDown, Check } from 'lucide-react';

type Step =
  | 'welcome'
  | 'login'
  | 'signup-type'
  | 'signup-investor-1'
  | 'signup-investor-2'
  | 'signup-agent-1'
  | 'signup-agent-2'
  | 'signup-password'
  | 'success';

/* ─── Country codes ─── */
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

const COUNTRIES = ['UAE', 'Saudi Arabia', 'Egypt', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Jordan', 'UK', 'USA', 'Other'];
const BUDGET_RANGES = ['Under 1M AED', '1M – 2M AED', '2M – 4M AED', '4M – 7M AED', '7M – 15M AED', '15M+ AED'];
const PROPERTY_TYPES = ['Apartment', 'Villa', 'Townhouse', 'Commercial', 'Land', 'Any'];
const AREAS = ['Downtown Dubai', 'Dubai Marina', 'Palm Jumeirah', 'Jumeirah', 'Business Bay', 'Dubai Hills', 'JBR', 'Al Barsha'];
const SPECIALIZATIONS = ['Residential', 'Commercial', 'Off-plan', 'Luxury', 'Investment', 'Short-term rental'];

/* ─── Label / Input component ─── */
function Field({
  label, children,
}: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-[#050B2E] mb-2" style={{ fontSize: '14px', fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );
}

function Input({
  type = 'text', value, onChange, placeholder, required,
}: {
  type?: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none focus:border-[#01CBD2] bg-white"
      style={{ fontSize: '15px', color: '#050B2E', transition: 'border-color 0.2s' }}
    />
  );
}

function SelectPicker({
  options, value, onChange, placeholder,
}: { options: string[]; value: string; onChange: (v: string) => void; placeholder: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none bg-white flex items-center justify-between"
      >
        <span style={{ fontSize: '15px', color: value ? '#050B2E' : '#CCC' }}>
          {value || placeholder}
        </span>
        <ChevronDown size={16} color="#A6A6A6" />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border border-[#E8E8E8] rounded-[12px] shadow-lg z-50 max-h-48 overflow-y-auto mt-1">
          {options.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-[#F8F8F8] border-b border-[#F8F8F8] last:border-0"
            >
              <span style={{ fontSize: '14px', color: '#050B2E' }}>{opt}</span>
              {value === opt && <Check size={16} color="#01CBD2" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MultiSelect({
  options, values, onChange,
}: { options: string[]; values: string[]; onChange: (vals: string[]) => void }) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) onChange(values.filter(v => v !== opt));
    else onChange([...values, opt]);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => {
        const active = values.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className="rounded-full px-3 py-1.5 border transition-all"
            style={{
              fontSize: '13px',
              background: active ? '#01CBD2' : '#FFFFFF',
              color: active ? 'white' : '#050B2E',
              borderColor: active ? '#01CBD2' : '#E8E8E8',
              fontWeight: active ? 600 : 400,
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

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
          className="h-[52px] border border-[#E8E8E8] rounded-[12px] px-3 flex items-center gap-1 bg-white shrink-0"
          style={{ minWidth: '90px' }}
        >
          <span style={{ fontSize: '18px' }}>{selected.flag}</span>
          <span style={{ fontSize: '14px', color: '#050B2E' }}>{selected.code}</span>
          <ChevronDown size={13} color="#A6A6A6" />
        </button>
        {showPicker && (
          <div className="absolute top-full left-0 bg-white border border-[#E8E8E8] rounded-[12px] shadow-xl z-50 w-52 max-h-56 overflow-y-auto mt-1">
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
              </button>
            ))}
          </div>
        )}
      </div>
      <input
        type="tel"
        value={phone}
        onChange={e => onPhoneChange(e.target.value)}
        placeholder="50 123 4567"
        className="flex-1 h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none focus:border-[#01CBD2] bg-white"
        style={{ fontSize: '15px', color: '#050B2E' }}
      />
    </div>
  );
}

function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-1.5 justify-center mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all"
          style={{
            width: i === current ? 20 : 8,
            height: 8,
            background: i <= current ? '#01CBD2' : '#E8E8E8',
          }}
        />
      ))}
    </div>
  );
}

export default function AuthScreen() {
  const [step, setStep] = useState<Step>('welcome');
  const [selectedType, setSelectedType] = useState<'agent' | 'investor'>('investor');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { login } = useApp();
  const navigate = useNavigate();

  /* ── Form State ── */
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    countryCode: '+971',
    country: '',
    // Investor-specific
    budgetRange: '',
    propertyTypes: [] as string[],
    purpose: '',
    // Agent-specific
    reraLicense: '',
    experience: '',
    specializations: [] as string[],
    areas: [] as string[],
    agencyName: '',
  });

  const set = (k: keyof typeof form) => (v: string | string[]) =>
    setForm(p => ({ ...p, [k]: v }));

  const handleFinalSubmit = () => {
    const fullName = `${form.firstName} ${form.lastName}`.trim() || 'User';
    login(selectedType, fullName);
    setStep('success');
    setTimeout(() => {
      navigate(selectedType === 'agent' ? '/agent' : '/investor');
    }, 2200);
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const name = form.email.split('@')[0] || 'Mohamed Salah';
    login('investor', name);
    setStep('success');
    setTimeout(() => navigate('/investor'), 2200);
  };

  /* ─────────────────── SUCCESS ─────────────────── */
  if (step === 'success') {
    const fullName = `${form.firstName} ${form.lastName}`.trim() || 'User';
    return (
      <div className="min-h-screen bg-[#050B2E] flex flex-col items-center justify-center px-6" style={{ fontFamily: "'TT Commons', sans-serif" }}>
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(1,203,210,0.15)' }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="rgba(1,203,210,0.2)" />
            <path d="M14 24L21 31L34 18" stroke="#01CBD2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white text-center mb-2" style={{ fontSize: '26px', fontWeight: 700 }}>
          Welcome to Duseat! 🎉
        </p>
        <p className="text-[#01CBD2] text-center mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>
          {fullName}
        </p>
        <p className="text-[#A6A6A6] text-center" style={{ fontSize: '15px', lineHeight: 1.6 }}>
          {selectedType === 'agent'
            ? 'Your agent profile is ready. Start browsing investor requests and submit targeted offers.'
            : 'Your account is set up. Start posting property requests and receive offers from top agents.'}
        </p>
        <div className="mt-8 flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-[#01CBD2] animate-pulse" />
          <span className="text-[#A6A6A6]" style={{ fontSize: '13px' }}>Taking you in…</span>
        </div>
      </div>
    );
  }

  /* ─────────────────── WELCOME ─────────────────── */
  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-[#050B2E] flex flex-col" style={{ fontFamily: "'TT Commons', sans-serif" }}>
        <StatusBar dark />
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-10">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#01CBD2] flex items-center justify-center mb-4 mx-auto">
              <Building2 size={32} color="white" />
            </div>
            <p className="text-white" style={{ fontSize: '30px', fontWeight: 800 }}>Duseat</p>
            <p className="text-[#01CBD2]" style={{ fontSize: '14px' }}>Real Estate Marketplace</p>
          </div>

          <div className="mb-10 text-center">
            <p className="text-white mb-2" style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.3 }}>
              Connect investors with agents
            </p>
            <p className="text-[#A6A6A6]" style={{ fontSize: '15px' }}>
              Post requests. Receive offers. Close deals.
            </p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden mb-10" style={{ height: '160px' }}>
            <img
              src="https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
              alt="Dubai skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B2E] to-transparent pointer-events-none" />
          </div>

          <div className="w-full space-y-3">
            <button
              onClick={() => setStep('login')}
              className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white"
              style={{ fontSize: '17px', fontWeight: 600 }}
            >
              Sign In
            </button>
            <button
              onClick={() => setStep('signup-type')}
              className="w-full h-[52px] border border-[rgba(255,255,255,0.3)] rounded-[26px] text-white"
              style={{ fontSize: '17px', fontWeight: 500 }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────── LOGIN ─────────────────── */
  if (step === 'login') {
    return (
      <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'TT Commons', sans-serif" }}>
        <StatusBar />
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
          <button onClick={() => setStep('welcome')} className="mb-6 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Welcome back 👋</p>
          <p className="text-[#999] mb-8" style={{ fontSize: '15px' }}>Sign in to your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <Field label="Email Address">
              <Input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" required />
            </Field>
            <Field label="Password">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => set('password')(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 pr-12 outline-none focus:border-[#01CBD2] bg-white"
                  style={{ fontSize: '15px' }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                  {showPassword ? <EyeOff size={20} color="#A6A6A6" /> : <Eye size={20} color="#A6A6A6" />}
                </button>
              </div>
            </Field>
            <div className="text-right">
              <span className="text-[#01CBD2] cursor-pointer" style={{ fontSize: '14px' }}>Forgot password?</span>
            </div>
            <button
              type="submit"
              className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white"
              style={{ fontSize: '17px', fontWeight: 600 }}
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#F0F0F0]" />
            <span className="text-[#A6A6A6]" style={{ fontSize: '13px' }}>or</span>
            <div className="flex-1 h-px bg-[#F0F0F0]" />
          </div>

          {/* Social login */}
          <div className="space-y-3">
            {[
              { label: 'Continue with Google', bg: 'white', color: '#050B2E' },
              { label: 'Continue with Apple', bg: '#050B2E', color: 'white' },
            ].map(({ label, bg, color }) => (
              <button
                key={label}
                onClick={() => setStep('success')}
                className="w-full h-[52px] rounded-[26px] flex items-center justify-center gap-3 border border-[#E8E8E8]"
                style={{ background: bg, fontSize: '15px', color, fontWeight: 500 }}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="text-center mt-6 text-[#999]" style={{ fontSize: '14px' }}>
            Don't have an account?{' '}
            <span className="text-[#01CBD2] cursor-pointer" style={{ fontWeight: 600 }} onClick={() => setStep('signup-type')}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    );
  }

  /* ─────────────────── SIGNUP: TYPE ─────────────────── */
  if (step === 'signup-type') {
    return (
      <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'TT Commons', sans-serif" }}>
        <StatusBar />
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
          <button onClick={() => setStep('welcome')} className="mb-6 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>I am a...</p>
          <p className="text-[#999] mb-8" style={{ fontSize: '15px' }}>Choose your role to get started</p>

          <div className="space-y-4">
            {[
              {
                type: 'investor' as const,
                icon: Users,
                title: 'Investor / Buyer',
                desc: 'I want to buy property. I\'ll post requirements and receive offers from agents.',
                tags: ['Post Requests', 'Receive Offers', 'Compare Options'],
                iconBg: '#F0FBFB',
                iconColor: '#01CBD2',
              },
              {
                type: 'agent' as const,
                icon: Building2,
                title: 'Real Estate Agent',
                desc: 'I\'m a licensed agent who wants to access qualified buyer demand and submit offers.',
                tags: ['Browse Requests', 'Submit Offers', 'Close Deals'],
                iconBg: '#050B2E',
                iconColor: 'white',
              },
            ].map(({ type, icon: Icon, title, desc, tags, iconBg, iconColor }) => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setStep(type === 'investor' ? 'signup-investor-1' : 'signup-agent-1');
                }}
                className="w-full border-2 rounded-[20px] p-5 flex items-start gap-4 text-left transition-all"
                style={{
                  borderColor: selectedType === type ? '#01CBD2' : '#E8E8E8',
                  background: selectedType === type ? '#F0FBFB' : 'white',
                }}
              >
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center shrink-0" style={{ background: iconBg }}>
                  <Icon size={28} color={iconColor} />
                </div>
                <div className="flex-1">
                  <p className="text-[#050B2E] mb-1" style={{ fontSize: '18px', fontWeight: 700 }}>{title}</p>
                  <p className="text-[#999] mb-3" style={{ fontSize: '13px', lineHeight: 1.5 }}>{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="bg-[#F0FBFB] text-[#01CBD2] rounded-full px-2 py-0.5" style={{ fontSize: '11px', fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center mt-6 text-[#999]" style={{ fontSize: '14px' }}>
            Already have an account?{' '}
            <span className="text-[#01CBD2] cursor-pointer" style={{ fontWeight: 600 }} onClick={() => setStep('login')}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    );
  }

  /* ─────────────────── INVESTOR STEP 1 ─────────────────── */
  if (step === 'signup-investor-1') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <StatusBar />
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
          <button onClick={() => setStep('signup-type')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={0} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Personal Info</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Tell us about yourself</p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Field label="First Name">
                  <Input value={form.firstName} onChange={set('firstName')} placeholder="Mohamed" />
                </Field>
              </div>
              <div className="flex-1">
                <Field label="Last Name">
                  <Input value={form.lastName} onChange={set('lastName')} placeholder="Salah" />
                </Field>
              </div>
            </div>

            <Field label="Email Address">
              <Input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" />
            </Field>

            <Field label="Phone Number">
              <PhoneField
                countryCode={form.countryCode}
                phone={form.phone}
                onCountryChange={set('countryCode')}
                onPhoneChange={set('phone')}
              />
            </Field>

            <Field label="Country of Residence">
              <SelectPicker options={COUNTRIES} value={form.country} onChange={set('country')} placeholder="Select country" />
            </Field>
          </div>

          <button
            onClick={() => setStep('signup-investor-2')}
            disabled={!form.firstName || !form.email}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6 disabled:opacity-50"
            style={{ fontSize: '17px', fontWeight: 600 }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─────────────────── INVESTOR STEP 2 ─────────────────── */
  if (step === 'signup-investor-2') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <StatusBar />
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
          <button onClick={() => setStep('signup-investor-1')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={1} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Investment Profile</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Help agents understand your needs</p>

          <div className="space-y-5">
            <Field label="Budget Range">
              <SelectPicker options={BUDGET_RANGES} value={form.budgetRange} onChange={set('budgetRange')} placeholder="Select budget range" />
            </Field>

            <Field label="Purchase Purpose">
              <div className="flex gap-2">
                {['Living', 'Investment'].map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => set('purpose')(p)}
                    className="flex-1 h-[48px] rounded-[12px] border-2 transition-all"
                    style={{
                      borderColor: form.purpose === p ? '#01CBD2' : '#E8E8E8',
                      background: form.purpose === p ? '#F0FBFB' : 'white',
                      color: form.purpose === p ? '#01CBD2' : '#050B2E',
                      fontSize: '15px',
                      fontWeight: form.purpose === p ? 600 : 400,
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Property Types (select all that apply)">
              <MultiSelect options={PROPERTY_TYPES} values={form.propertyTypes} onChange={v => setForm(p => ({ ...p, propertyTypes: v as string[] }))} />
            </Field>
          </div>

          <button
            onClick={() => setStep('signup-password')}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6"
            style={{ fontSize: '17px', fontWeight: 600 }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─────────────────── AGENT STEP 1 ─────────────────── */
  if (step === 'signup-agent-1') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <StatusBar />
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
          <button onClick={() => setStep('signup-type')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={0} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Personal Info</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Tell us about yourself</p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Field label="First Name">
                  <Input value={form.firstName} onChange={set('firstName')} placeholder="Sarah" />
                </Field>
              </div>
              <div className="flex-1">
                <Field label="Last Name">
                  <Input value={form.lastName} onChange={set('lastName')} placeholder="Johnson" />
                </Field>
              </div>
            </div>

            <Field label="Email Address">
              <Input type="email" value={form.email} onChange={set('email')} placeholder="agent@agency.com" />
            </Field>

            <Field label="Phone Number">
              <PhoneField
                countryCode={form.countryCode}
                phone={form.phone}
                onCountryChange={set('countryCode')}
                onPhoneChange={set('phone')}
              />
            </Field>

            <Field label="Country">
              <SelectPicker options={COUNTRIES} value={form.country} onChange={set('country')} placeholder="Select country" />
            </Field>
          </div>

          <button
            onClick={() => setStep('signup-agent-2')}
            disabled={!form.firstName || !form.email}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6 disabled:opacity-50"
            style={{ fontSize: '17px', fontWeight: 600 }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─────────────────── AGENT STEP 2 ─────────────────── */
  if (step === 'signup-agent-2') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <StatusBar />
        <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
          <button onClick={() => setStep('signup-agent-1')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={1} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Agent Profile</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Your professional details</p>

          <div className="space-y-5">
            <Field label="Agency / Brokerage Name">
              <Input value={form.agencyName} onChange={set('agencyName')} placeholder="e.g. Elite Properties Dubai" />
            </Field>

            <Field label="RERA License Number">
              <Input value={form.reraLicense} onChange={set('reraLicense')} placeholder="e.g. 1234567" />
            </Field>

            <Field label="Years of Experience">
              <SelectPicker
                options={['Less than 1 year', '1–3 years', '3–5 years', '5–10 years', '10+ years']}
                value={form.experience}
                onChange={set('experience')}
                placeholder="Select experience"
              />
            </Field>

            <Field label="Specializations (select all that apply)">
              <MultiSelect
                options={SPECIALIZATIONS}
                values={form.specializations}
                onChange={v => setForm(p => ({ ...p, specializations: v as string[] }))}
              />
            </Field>

            <Field label="Areas of Expertise">
              <MultiSelect
                options={AREAS}
                values={form.areas}
                onChange={v => setForm(p => ({ ...p, areas: v as string[] }))}
              />
            </Field>
          </div>

          <button
            onClick={() => setStep('signup-password')}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6"
            style={{ fontSize: '17px', fontWeight: 600 }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─────────────────── PASSWORD ─────────────────── */
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
        <button
          onClick={() => setStep(selectedType === 'investor' ? 'signup-investor-2' : 'signup-agent-2')}
          className="mb-4 flex items-center gap-1 text-[#01CBD2]"
        >
          <ChevronLeft size={18} color="#01CBD2" />
          <span style={{ fontSize: '15px' }}>Back</span>
        </button>
        <ProgressDots total={3} current={2} />
        <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Create Password</p>
        <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Choose a strong password to secure your account</p>

        <div className="space-y-4">
          <Field label="Password">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={e => set('password')(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 pr-12 outline-none focus:border-[#01CBD2] bg-white"
                style={{ fontSize: '15px' }}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                {showPassword ? <EyeOff size={20} color="#A6A6A6" /> : <Eye size={20} color="#A6A6A6" />}
              </button>
            </div>
          </Field>
          <Field label="Confirm Password">
            <div className="relative">
              <input
                type={showConfirmPass ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={e => set('confirmPassword')(e.target.value)}
                placeholder="Repeat password"
                className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 pr-12 outline-none focus:border-[#01CBD2] bg-white"
                style={{ fontSize: '15px' }}
              />
              <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-4 top-1/2 -translate-y-1/2">
                {showConfirmPass ? <EyeOff size={20} color="#A6A6A6" /> : <Eye size={20} color="#A6A6A6" />}
              </button>
            </div>
            {form.confirmPassword && form.password !== form.confirmPassword && (
              <p className="text-[#E31D1C] mt-1" style={{ fontSize: '12px' }}>Passwords do not match</p>
            )}
          </Field>

          {/* Password strength */}
          {form.password.length > 0 && (
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="flex-1 h-1 rounded-full"
                    style={{
                      background: form.password.length >= i * 3
                        ? i <= 1 ? '#E31D1C' : i <= 2 ? '#F5A623' : i <= 3 ? '#01CBD2' : '#0ED221'
                        : '#E8E8E8',
                    }}
                  />
                ))}
              </div>
              <p style={{ fontSize: '12px', color: '#A6A6A6' }}>
                {form.password.length < 6 ? 'Too short' : form.password.length < 9 ? 'Fair' : form.password.length < 12 ? 'Good' : 'Strong'}
              </p>
            </div>
          )}
        </div>

        {/* Terms */}
        <p className="text-center text-[#999] mt-5" style={{ fontSize: '12px', lineHeight: 1.7 }}>
          By creating an account, you agree to our{' '}
          <span className="text-[#01CBD2]">Terms of Service</span> and{' '}
          <span className="text-[#01CBD2]">Privacy Policy</span>
        </p>

        <button
          onClick={handleFinalSubmit}
          disabled={!form.password || form.password !== form.confirmPassword}
          className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-4 disabled:opacity-50"
          style={{ fontSize: '17px', fontWeight: 600 }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

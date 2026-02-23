import { useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';
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

/* ─── onboarding slides ─── */
const SLIDES = [
  {
    icon: '🏙️',
    headline: 'Where investors meet\nthe best agents',
    sub: 'Post your property requirements and receive tailored offers from verified agents.',
  },
  {
    icon: '💼',
    headline: 'Smart matching,\nreal results',
    sub: "Our AI connects you with the right buyers and sellers in Dubai's top communities.",
  },
  {
    icon: '✅',
    headline: 'Verified agents,\ntransparent deals',
    sub: 'Every agent on Duseat is RERA-verified. Your trust is our priority.',
  },
];

/* ─── shared form components ─── */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-[#050B2E] mb-2" style={{ fontSize: '14px', fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ type = 'text', value, onChange, placeholder, required }: {
  type?: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean;
}) {
  return (
    <input
      type={type} value={value} onChange={e => onChange(e.target.value)}
      placeholder={placeholder} required={required}
      className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none focus:border-[#01CBD2] bg-white"
      style={{ fontSize: '15px', color: '#050B2E', transition: 'border-color 0.2s' }}
    />
  );
}

function SelectPicker({ options, value, onChange, placeholder }: {
  options: string[]; value: string; onChange: (v: string) => void; placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen(!open)}
        className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none bg-white flex items-center justify-between">
        <span style={{ fontSize: '15px', color: value ? '#050B2E' : '#CCC' }}>{value || placeholder}</span>
        <ChevronDown size={16} color="#A6A6A6" />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border border-[#E8E8E8] rounded-[12px] shadow-lg z-50 max-h-48 overflow-y-auto mt-1">
          {options.map(opt => (
            <button key={opt} type="button" onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-[#F8F8F8] border-b border-[#F8F8F8] last:border-0">
              <span style={{ fontSize: '14px', color: '#050B2E' }}>{opt}</span>
              {value === opt && <Check size={16} color="#01CBD2" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MultiSelect({ options, values, onChange }: {
  options: string[]; values: string[]; onChange: (vals: string[]) => void;
}) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) onChange(values.filter(v => v !== opt));
    else onChange([...values, opt]);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => {
        const active = values.includes(opt);
        return (
          <button key={opt} type="button" onClick={() => toggle(opt)}
            className="rounded-full px-3 py-1.5 border transition-all"
            style={{ fontSize: '13px', background: active ? '#01CBD2' : '#FFFFFF', color: active ? 'white' : '#050B2E', borderColor: active ? '#01CBD2' : '#E8E8E8', fontWeight: active ? 600 : 400 }}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function PhoneField({ countryCode, phone, onCountryChange, onPhoneChange }: {
  countryCode: string; phone: string; onCountryChange: (v: string) => void; onPhoneChange: (v: string) => void;
}) {
  const [showPicker, setShowPicker] = useState(false);
  const selected = COUNTRY_CODES.find(c => c.code === countryCode) || COUNTRY_CODES[0];
  return (
    <div className="flex gap-2">
      <div className="relative">
        <button type="button" onClick={() => setShowPicker(!showPicker)}
          className="h-[52px] border border-[#E8E8E8] rounded-[12px] px-3 flex items-center gap-1 bg-white shrink-0" style={{ minWidth: '90px' }}>
          <span style={{ fontSize: '18px' }}>{selected.flag}</span>
          <span style={{ fontSize: '14px', color: '#050B2E' }}>{selected.code}</span>
          <ChevronDown size={13} color="#A6A6A6" />
        </button>
        {showPicker && (
          <div className="absolute top-full left-0 bg-white border border-[#E8E8E8] rounded-[12px] shadow-xl z-50 w-52 max-h-56 overflow-y-auto mt-1">
            {COUNTRY_CODES.map(c => (
              <button key={c.code} type="button" onClick={() => { onCountryChange(c.code); setShowPicker(false); }}
                className="w-full px-4 py-2.5 flex items-center gap-2 hover:bg-[#F8F8F8] border-b border-[#F8F8F8] last:border-0">
                <span style={{ fontSize: '18px' }}>{c.flag}</span>
                <span style={{ fontSize: '13px', color: '#050B2E' }}>{c.name}</span>
                <span className="ml-auto text-[#A6A6A6]" style={{ fontSize: '12px' }}>{c.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <input type="tel" value={phone} onChange={e => onPhoneChange(e.target.value)} placeholder="50 123 4567"
        className="flex-1 h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none focus:border-[#01CBD2] bg-white"
        style={{ fontSize: '15px', color: '#050B2E' }} />
    </div>
  );
}

function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-1.5 justify-center mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="rounded-full transition-all"
          style={{ width: i === current ? 20 : 8, height: 8, background: i <= current ? '#01CBD2' : '#E8E8E8' }} />
      ))}
    </div>
  );
}

/* ─── Floating particle ─── */
function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="absolute rounded-full pointer-events-none" style={style} />;
}

/* ─────────────────── MAIN COMPONENT ─────────────────── */
export default function AuthScreen() {
  const [step, setStep] = useState<Step>('welcome');
  const [slideIdx, setSlideIdx] = useState(0);
  const [animIn, setAnimIn] = useState(true);
  const [selectedType, setSelectedType] = useState<'agent' | 'investor'>('investor');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { login } = useApp();
  const navigate = useNavigate();

  /* auto-advance slides */
  useEffect(() => {
    if (step !== 'welcome') return;
    const t = setInterval(() => {
      setAnimIn(false);
      setTimeout(() => {
        setSlideIdx(p => (p + 1) % SLIDES.length);
        setAnimIn(true);
      }, 350);
    }, 3400);
    return () => clearInterval(t);
  }, [step]);

  const [form, setForm] = useState({
    email: '', password: '', confirmPassword: '',
    firstName: '', lastName: '', phone: '', countryCode: '+971', country: '',
    budgetRange: '', propertyTypes: [] as string[], purpose: '',
    reraLicense: '', experience: '', specializations: [] as string[], areas: [] as string[], agencyName: '',
  });

  const set = (k: keyof typeof form) => (v: string | string[]) => setForm(p => ({ ...p, [k]: v }));

  const handleFinalSubmit = () => {
    const fullName = `${form.firstName} ${form.lastName}`.trim() || 'User';
    login(selectedType, fullName);
    setStep('success');
    setTimeout(() => navigate(selectedType === 'agent' ? '/agent' : '/investor'), 2200);
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const name = form.email.split('@')[0] || 'Mohamed Salah';
    login('investor', name);
    setStep('success');
    setTimeout(() => navigate('/investor'), 2200);
  };

  /* ─── SUCCESS ─── */
  if (step === 'success') {
    const fullName = `${form.firstName} ${form.lastName}`.trim() || 'User';
    return (
      <div className="min-h-screen bg-[#050B2E] flex flex-col items-center justify-center px-6" style={{ fontFamily: "'TT Commons', sans-serif" }}>
        <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8" style={{ background: 'rgba(1,203,210,0.15)', animation: 'successPop 0.5s ease' }}>
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
            <path d="M12 24L21 33L36 16" stroke="#01CBD2" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white text-center mb-2" style={{ fontSize: '28px', fontWeight: 800, animation: 'fadeUp 0.6s ease 0.2s both' }}>
          Welcome to Duseat! 🎉
        </p>
        <p className="text-[#01CBD2] text-center mb-3" style={{ fontSize: '19px', fontWeight: 600, animation: 'fadeUp 0.6s ease 0.3s both' }}>
          {fullName}
        </p>
        <p className="text-[#A6A6A6] text-center" style={{ fontSize: '15px', lineHeight: 1.6, animation: 'fadeUp 0.6s ease 0.4s both' }}>
          {selectedType === 'agent'
            ? 'Your agent profile is ready. Browse investor requests and submit offers.'
            : 'Account is set up. Post requests and receive offers from top agents.'}
        </p>
        <div className="mt-8 flex gap-2 items-center" style={{ animation: 'fadeUp 0.6s ease 0.5s both' }}>
          <div className="w-2 h-2 rounded-full bg-[#01CBD2]" style={{ animation: 'pulse 1s ease infinite' }} />
          <span className="text-[#A6A6A6]" style={{ fontSize: '13px' }}>Taking you in…</span>
        </div>
        <style>{`
          @keyframes successPop { 0%{transform:scale(0.3);opacity:0} 70%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        `}</style>
      </div>
    );
  }

  /* ─── WELCOME with animated onboarding ─── */
  if (step === 'welcome') {
    const slide = SLIDES[slideIdx];
    return (
      <div className="min-h-screen bg-[#050B2E] flex flex-col overflow-hidden" style={{ fontFamily: "'TT Commons', sans-serif" }}>

        {/* ── Animated mesh background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large gradient orbs */}
          <div className="absolute rounded-full" style={{ width: 380, height: 380, top: '-80px', left: '-100px', background: 'radial-gradient(circle, rgba(1,203,210,0.18) 0%, transparent 70%)', animation: 'orbFloat1 8s ease-in-out infinite' }} />
          <div className="absolute rounded-full" style={{ width: 300, height: 300, bottom: '120px', right: '-80px', background: 'radial-gradient(circle, rgba(1,203,210,0.12) 0%, transparent 70%)', animation: 'orbFloat2 10s ease-in-out infinite' }} />
          <div className="absolute rounded-full" style={{ width: 200, height: 200, top: '40%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(5,11,46,0) 0%, rgba(1,203,210,0.06) 100%)' }} />

          {/* Small floating particles */}
          <Particle style={{ width: 6, height: 6, top: '18%', left: '15%', background: '#01CBD2', opacity: 0.5, animation: 'particleFloat 6s ease-in-out infinite' }} />
          <Particle style={{ width: 4, height: 4, top: '30%', right: '20%', background: '#01CBD2', opacity: 0.35, animation: 'particleFloat 8s ease-in-out infinite 1s' }} />
          <Particle style={{ width: 5, height: 5, top: '55%', left: '25%', background: 'white', opacity: 0.15, animation: 'particleFloat 7s ease-in-out infinite 2s' }} />
          <Particle style={{ width: 3, height: 3, top: '65%', right: '30%', background: '#01CBD2', opacity: 0.4, animation: 'particleFloat 9s ease-in-out infinite 0.5s' }} />
          <Particle style={{ width: 8, height: 8, bottom: '25%', left: '10%', background: '#01CBD2', opacity: 0.2, animation: 'particleFloat 11s ease-in-out infinite 3s' }} />

          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.04 }}>
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* ── Top hero area ── */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-8 pt-16">

          {/* Animated slide content */}
          <div
            key={slideIdx}
            style={{
              animation: animIn ? 'slideIn 0.4s cubic-bezier(0.16,1,0.3,1)' : 'slideOut 0.35s ease forwards',
              textAlign: 'center',
            }}
          >
            {/* Icon bubble */}
            <div className="w-24 h-24 rounded-[32px] mx-auto mb-8 flex items-center justify-center"
              style={{ background: 'rgba(1,203,210,0.12)', border: '1px solid rgba(1,203,210,0.25)', backdropFilter: 'blur(8px)' }}>
              <span style={{ fontSize: '42px' }}>{slide.icon}</span>
            </div>

            <p className="text-white mb-4" style={{ fontSize: '30px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.5px', whiteSpace: 'pre-line' }}>
              {slide.headline}
            </p>
            <p className="text-[#A6A6A6]" style={{ fontSize: '15px', lineHeight: 1.7, maxWidth: '300px', margin: '0 auto' }}>
              {slide.sub}
            </p>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 mt-10">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => { setAnimIn(false); setTimeout(() => { setSlideIdx(i); setAnimIn(true); }, 350); }}>
                <div className="rounded-full transition-all duration-300"
                  style={{ width: i === slideIdx ? 24 : 8, height: 8, background: i === slideIdx ? '#01CBD2' : 'rgba(255,255,255,0.2)' }} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA panel ── */}
        <div className="relative shrink-0 px-6 pb-14 pt-8"
          style={{ background: 'linear-gradient(to top, rgba(5,11,46,1) 0%, rgba(5,11,46,0.85) 80%, transparent 100%)' }}>

          {/* Brand name (text only, no logo) */}
          <p className="text-center mb-6" style={{ fontSize: '13px', letterSpacing: '3px', fontWeight: 600, color: 'rgba(1,203,210,0.7)' }}>
            DUSEAT
          </p>

          <div className="space-y-3">
            <button
              onClick={() => setStep('login')}
              className="w-full h-[54px] rounded-[27px] text-white flex items-center justify-center"
              style={{ fontSize: '17px', fontWeight: 700, background: '#01CBD2', boxShadow: '0 4px 24px rgba(1,203,210,0.45)', animation: 'fadeUp 0.6s ease 0.1s both' }}
            >
              Sign In
            </button>
            <button
              onClick={() => setStep('signup-type')}
              className="w-full h-[54px] rounded-[27px] text-white flex items-center justify-center"
              style={{ fontSize: '17px', fontWeight: 500, border: '1.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', animation: 'fadeUp 0.6s ease 0.2s both' }}
            >
              Create Account
            </button>
          </div>

          <p className="text-center mt-4 text-[rgba(255,255,255,0.25)]" style={{ fontSize: '12px' }}>
            By continuing you agree to our Terms & Privacy Policy
          </p>
        </div>

        <style>{`
          @keyframes orbFloat1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,15px) scale(1.08)} }
          @keyframes orbFloat2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-15px,-20px) scale(1.05)} }
          @keyframes particleFloat { 0%,100%{transform:translateY(0) scale(1);opacity:0.4} 50%{transform:translateY(-18px) scale(1.3);opacity:0.7} }
          @keyframes slideIn { from{opacity:0;transform:translateY(28px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
          @keyframes slideOut { from{opacity:1;transform:translateY(0)} to{opacity:0;transform:translateY(-20px)} }
          @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        `}</style>
      </div>
    );
  }

  /* ─── LOGIN ─── */
  if (step === 'login') {
    return (
      <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'TT Commons', sans-serif" }}>
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
          <button onClick={() => setStep('welcome')} className="mb-6 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '28px', fontWeight: 800 }}>Welcome back 👋</p>
          <p className="text-[#999] mb-8" style={{ fontSize: '15px' }}>Sign in to your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <Field label="Email Address">
              <Input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" required />
            </Field>
            <Field label="Password">
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={e => set('password')(e.target.value)}
                  placeholder="••••••••" required
                  className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 pr-12 outline-none focus:border-[#01CBD2] bg-white"
                  style={{ fontSize: '15px' }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                  {showPassword ? <EyeOff size={20} color="#A6A6A6" /> : <Eye size={20} color="#A6A6A6" />}
                </button>
              </div>
            </Field>
            <div className="text-right">
              <span className="text-[#01CBD2] cursor-pointer" style={{ fontSize: '14px' }}>Forgot password?</span>
            </div>
            <button type="submit" className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white" style={{ fontSize: '17px', fontWeight: 600 }}>
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#F0F0F0]" />
            <span className="text-[#A6A6A6]" style={{ fontSize: '13px' }}>or</span>
            <div className="flex-1 h-px bg-[#F0F0F0]" />
          </div>

          <div className="space-y-3">
            {[
              { label: 'Continue with Google', bg: 'white', color: '#050B2E', border: '#E8E8E8' },
              { label: 'Continue with Apple', bg: '#050B2E', color: 'white', border: '#050B2E' },
            ].map(({ label, bg, color, border }) => (
              <button key={label} onClick={() => setStep('success')}
                className="w-full h-[52px] rounded-[26px] flex items-center justify-center gap-3 border"
                style={{ background: bg, fontSize: '15px', color, fontWeight: 500, borderColor: border }}>
                {label}
              </button>
            ))}
          </div>

          <p className="text-center mt-6 text-[#999]" style={{ fontSize: '14px' }}>
            Don't have an account?{' '}
            <span className="text-[#01CBD2] cursor-pointer" style={{ fontWeight: 600 }} onClick={() => setStep('signup-type')}>Sign Up</span>
          </p>
        </div>
      </div>
    );
  }

  /* ─── SIGNUP: TYPE ─── */
  if (step === 'signup-type') {
    return (
      <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'TT Commons', sans-serif" }}>
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
          <button onClick={() => setStep('welcome')} className="mb-6 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" />
            <span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '28px', fontWeight: 800 }}>I am a...</p>
          <p className="text-[#999] mb-8" style={{ fontSize: '15px' }}>Choose your role to get started</p>

          <div className="space-y-4">
            {[
              { type: 'investor' as const, icon: Users, title: 'Investor / Buyer', desc: "I want to buy property. I'll post requirements and receive offers from agents.", tags: ['Post Requests', 'Receive Offers', 'Compare Options'], iconBg: '#F0FBFB', iconColor: '#01CBD2' },
              { type: 'agent' as const, icon: Building2, title: 'Real Estate Agent', desc: "I'm a licensed agent who wants to access qualified buyer demand and submit offers.", tags: ['Browse Requests', 'Submit Offers', 'Close Deals'], iconBg: '#050B2E', iconColor: 'white' },
            ].map(({ type, icon: Icon, title, desc, tags, iconBg, iconColor }) => (
              <button key={type}
                onClick={() => { setSelectedType(type); setStep(type === 'investor' ? 'signup-investor-1' : 'signup-agent-1'); }}
                className="w-full border-2 rounded-[20px] p-5 flex items-start gap-4 text-left transition-all"
                style={{ borderColor: selectedType === type ? '#01CBD2' : '#E8E8E8', background: selectedType === type ? '#F0FBFB' : 'white' }}>
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center shrink-0" style={{ background: iconBg }}>
                  <Icon size={28} color={iconColor} />
                </div>
                <div className="flex-1">
                  <p className="text-[#050B2E] mb-1" style={{ fontSize: '18px', fontWeight: 700 }}>{title}</p>
                  <p className="text-[#999] mb-3" style={{ fontSize: '13px', lineHeight: 1.5 }}>{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="bg-[#F0FBFB] text-[#01CBD2] rounded-full px-2 py-0.5" style={{ fontSize: '11px', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center mt-6 text-[#999]" style={{ fontSize: '14px' }}>
            Already have an account?{' '}
            <span className="text-[#01CBD2] cursor-pointer" style={{ fontWeight: 600 }} onClick={() => setStep('login')}>Sign In</span>
          </p>
        </div>
      </div>
    );
  }

  /* ─── INVESTOR STEP 1 ─── */
  if (step === 'signup-investor-1') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
          <button onClick={() => setStep('signup-type')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" /><span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={0} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Personal Info</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Tell us about yourself</p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1"><Field label="First Name"><Input value={form.firstName} onChange={set('firstName')} placeholder="Mohamed" /></Field></div>
              <div className="flex-1"><Field label="Last Name"><Input value={form.lastName} onChange={set('lastName')} placeholder="Salah" /></Field></div>
            </div>
            <Field label="Email Address"><Input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" /></Field>
            <Field label="Phone Number"><PhoneField countryCode={form.countryCode} phone={form.phone} onCountryChange={set('countryCode')} onPhoneChange={set('phone')} /></Field>
            <Field label="Country of Residence"><SelectPicker options={COUNTRIES} value={form.country} onChange={set('country')} placeholder="Select country" /></Field>
          </div>
          <button onClick={() => setStep('signup-investor-2')} disabled={!form.firstName || !form.email}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6 disabled:opacity-50" style={{ fontSize: '17px', fontWeight: 600 }}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─── INVESTOR STEP 2 ─── */
  if (step === 'signup-investor-2') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
          <button onClick={() => setStep('signup-investor-1')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" /><span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={1} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Investment Profile</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Help agents understand your needs</p>
          <div className="space-y-5">
            <Field label="Budget Range"><SelectPicker options={BUDGET_RANGES} value={form.budgetRange} onChange={set('budgetRange')} placeholder="Select budget range" /></Field>
            <Field label="Purchase Purpose">
              <div className="flex gap-2">
                {['Living', 'Investment'].map(p => (
                  <button key={p} type="button" onClick={() => set('purpose')(p)}
                    className="flex-1 h-[48px] rounded-[12px] border-2 transition-all"
                    style={{ borderColor: form.purpose === p ? '#01CBD2' : '#E8E8E8', background: form.purpose === p ? '#F0FBFB' : 'white', color: form.purpose === p ? '#01CBD2' : '#050B2E', fontSize: '15px', fontWeight: form.purpose === p ? 600 : 400 }}>
                    {p}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Property Types (select all that apply)">
              <MultiSelect options={PROPERTY_TYPES} values={form.propertyTypes} onChange={v => setForm(p => ({ ...p, propertyTypes: v as string[] }))} />
            </Field>
          </div>
          <button onClick={() => setStep('signup-password')}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6" style={{ fontSize: '17px', fontWeight: 600 }}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─── AGENT STEP 1 ─── */
  if (step === 'signup-agent-1') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
          <button onClick={() => setStep('signup-type')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" /><span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={0} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Personal Info</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Tell us about yourself</p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1"><Field label="First Name"><Input value={form.firstName} onChange={set('firstName')} placeholder="Sarah" /></Field></div>
              <div className="flex-1"><Field label="Last Name"><Input value={form.lastName} onChange={set('lastName')} placeholder="Johnson" /></Field></div>
            </div>
            <Field label="Email Address"><Input type="email" value={form.email} onChange={set('email')} placeholder="agent@agency.com" /></Field>
            <Field label="Phone Number"><PhoneField countryCode={form.countryCode} phone={form.phone} onCountryChange={set('countryCode')} onPhoneChange={set('phone')} /></Field>
            <Field label="Country"><SelectPicker options={COUNTRIES} value={form.country} onChange={set('country')} placeholder="Select country" /></Field>
          </div>
          <button onClick={() => setStep('signup-agent-2')} disabled={!form.firstName || !form.email}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6 disabled:opacity-50" style={{ fontSize: '17px', fontWeight: 600 }}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─── AGENT STEP 2 ─── */
  if (step === 'signup-agent-2') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
          <button onClick={() => setStep('signup-agent-1')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
            <ChevronLeft size={18} color="#01CBD2" /><span style={{ fontSize: '15px' }}>Back</span>
          </button>
          <ProgressDots total={3} current={1} />
          <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Agent Profile</p>
          <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Your professional details</p>
          <div className="space-y-5">
            <Field label="Agency / Brokerage Name"><Input value={form.agencyName} onChange={set('agencyName')} placeholder="e.g. Elite Properties Dubai" /></Field>
            <Field label="RERA License Number"><Input value={form.reraLicense} onChange={set('reraLicense')} placeholder="e.g. 1234567" /></Field>
            <Field label="Years of Experience">
              <SelectPicker options={['Less than 1 year', '1–3 years', '3–5 years', '5–10 years', '10+ years']} value={form.experience} onChange={set('experience')} placeholder="Select experience" />
            </Field>
            <Field label="Specializations (select all that apply)">
              <MultiSelect options={SPECIALIZATIONS} values={form.specializations} onChange={v => setForm(p => ({ ...p, specializations: v as string[] }))} />
            </Field>
            <Field label="Areas of Expertise">
              <MultiSelect options={AREAS} values={form.areas} onChange={v => setForm(p => ({ ...p, areas: v as string[] }))} />
            </Field>
          </div>
          <button onClick={() => setStep('signup-password')}
            className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6" style={{ fontSize: '17px', fontWeight: 600 }}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  /* ─── PASSWORD (final step) ─── */
  const strength = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : form.password.length < 14 ? 3 : 4;
  const strengthColor = ['#E8E8E8', '#E31D1C', '#F5A623', '#01CBD2', '#0ED221'][strength];
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
        <button onClick={() => setStep(selectedType === 'investor' ? 'signup-investor-2' : 'signup-agent-2')} className="mb-4 flex items-center gap-1 text-[#01CBD2]">
          <ChevronLeft size={18} color="#01CBD2" /><span style={{ fontSize: '15px' }}>Back</span>
        </button>
        <ProgressDots total={3} current={2} />
        <p className="text-[#050B2E] mb-1" style={{ fontSize: '26px', fontWeight: 700 }}>Create Password</p>
        <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>Choose a strong password to secure your account</p>

        <div className="space-y-4">
          <Field label="Password">
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={e => set('password')(e.target.value)} placeholder="At least 8 characters"
                className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 pr-12 outline-none focus:border-[#01CBD2] bg-white" style={{ fontSize: '15px' }} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                {showPassword ? <EyeOff size={20} color="#A6A6A6" /> : <Eye size={20} color="#A6A6A6" />}
              </button>
            </div>
          </Field>

          {/* Password strength bar */}
          {form.password.length > 0 && (
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex-1 h-1 rounded-full transition-all"
                    style={{ background: i <= strength ? strengthColor : '#E8E8E8' }} />
                ))}
              </div>
              <p style={{ fontSize: '12px', color: strengthColor, fontWeight: 600 }}>{strengthLabel}</p>
            </div>
          )}

          <Field label="Confirm Password">
            <div className="relative">
              <input type={showConfirmPass ? 'text' : 'password'} value={form.confirmPassword} onChange={e => set('confirmPassword')(e.target.value)} placeholder="Repeat password"
                className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 pr-12 outline-none focus:border-[#01CBD2] bg-white" style={{ fontSize: '15px' }} />
              <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-4 top-1/2 -translate-y-1/2">
                {showConfirmPass ? <EyeOff size={20} color="#A6A6A6" /> : <Eye size={20} color="#A6A6A6" />}
              </button>
            </div>
            {form.confirmPassword && form.password !== form.confirmPassword && (
              <p className="text-[#E31D1C] mt-1" style={{ fontSize: '12px' }}>Passwords do not match</p>
            )}
          </Field>

          {/* Terms */}
          <p className="text-[#999]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
            By creating an account, you agree to our{' '}
            <span className="text-[#01CBD2]">Terms of Service</span> and{' '}
            <span className="text-[#01CBD2]">Privacy Policy</span>.
          </p>
        </div>

        <button
          onClick={handleFinalSubmit}
          disabled={!form.password || form.password !== form.confirmPassword || form.password.length < 6}
          className="w-full h-[52px] bg-[#01CBD2] rounded-[26px] text-white mt-6 disabled:opacity-40 transition-all"
          style={{ fontSize: '17px', fontWeight: 600, boxShadow: '0 4px 16px rgba(1,203,210,0.35)' }}>
          Create Account 🚀
        </button>
      </div>
    </div>
  );
}

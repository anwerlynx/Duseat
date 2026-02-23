import { type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Settings, Shield, Globe, LogOut, HelpCircle, Phone, ChevronRight, Lock, SlidersHorizontal } from 'lucide-react';
import imgMale01 from '@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png';
import svgPaths from '../../../imports/svg-fm7jjgzdj6';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { useApp } from '../AppContext';

/* ─── Star icon for Upgrade card ─── */
function StarPlusIcon() {
  return (
    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
      <rect fill="#CCFDFF" height="48" rx="24" width="48" />
      <path clipRule="evenodd" d={svgPaths.p1f2b0e00} fill="url(#spg)" fillRule="evenodd" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="spg" x1="24" x2="24" y1="7.00002" y2="41">
          <stop stopColor="#060E3C" /><stop offset="1" stopColor="#01C4CB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Camera icon ─── */
function CameraIcon() {
  return (
    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
      <rect fill="white" height="26" rx="13" width="26" />
      <path clipRule="evenodd" d={svgPaths.p3eb6c100} fill="black" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p20703780} fill="black" fillRule="evenodd" />
      <path d={svgPaths.p31464000} fill="black" />
    </svg>
  );
}

/* ─── Row item ─── */
function RowItem({
  icon, label, onClick, danger,
}: { icon: ReactNode; label: string; onClick?: () => void; danger?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="backdrop-blur-[25px] bg-white w-full flex items-center gap-3 px-4 py-3 rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]"
    >
      <div className="size-6 flex items-center justify-center shrink-0" style={{ color: danger ? '#E31D1C' : '#333' }}>
        {icon}
      </div>
      <span className="flex-1 text-left" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '17px', color: danger ? '#E31D1C' : '#050B2E' }}>
        {label}
      </span>
      <ChevronRight size={18} color={danger ? '#E31D1C' : '#333'} />
    </button>
  );
}

/* ─── Section ─── */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '19px', fontWeight: 600, color: '#050B2E' }}>{title}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

/* ─── App icon button ─── */
function AppIconBtn({ icon, label, onClick }: { icon: ReactNode; label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col gap-2 items-center w-14">
      <div className="size-14 rounded-[32px] border border-[#050B2E] flex items-center justify-center">
        {icon}
      </div>
      <span style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '12px', color: '#050B2E' }}>{label}</span>
    </button>
  );
}

/* ─── Main Component ─── */
export default function ProfileSettings() {
  const navigate = useNavigate();
  const { userType, userName, logout } = useApp();

  const isAgent = userType === 'agent';
  const base = isAgent ? '/agent' : '/investor';
  const displayName = userName || 'Anwar hosny';
  const handle = '@' + (userName ? userName.toLowerCase().replace(/\s+/g, '') : 'anwerhosney');

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
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '20px', fontWeight: 600 }}>
            Profile
          </p>
          <div className="w-9" />
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto pb-6">

        {/* Avatar + info */}
        <div className="flex flex-col items-center gap-3 pt-8 pb-6">
          <div className="relative">
            <div className="size-[75px] rounded-full overflow-hidden">
              <img
                src={imgMale01}
                alt="avatar"
                className="w-full object-cover"
                style={{ height: '133.33%', marginTop: '-4.16%', marginLeft: '-0.81%' }}
              />
            </div>
            {/* Online dot */}
            <div className="absolute bottom-0.5 right-0.5">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" fill="#0ED221" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '20px', fontWeight: 600, color: '#050B2E' }}>
              {displayName}
            </p>
            <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '14px', color: '#CCC' }}>
              {handle}
            </p>
          </div>

          <button
            onClick={() => navigate(`${base}/edit-profile`)}
            className="bg-[#01CBD2] rounded-[20px] px-6 h-9 flex items-center justify-center"
          >
            <span style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '14px', color: 'white', letterSpacing: '-0.14px' }}>
              Edit profile
            </span>
          </button>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-8 px-4">

          {/* Subscription */}
          <Section title="Subscription">
            {/* Upgrade to Plus */}
            <div className="relative bg-white rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] overflow-hidden">
              <div className="flex items-center gap-3 p-3 relative">
                {/* Decorative blur */}
                <div className="absolute right-0 top-0 pointer-events-none overflow-hidden" style={{ width: 140, height: 148 }}>
                  <svg width="297" height="304" fill="none" viewBox="0 0 296.906 303.704" className="absolute right-0">
                    <g filter="url(#f2)">
                      <path d={svgPaths.p3d7cb780} fill="#01CBD2" />
                    </g>
                    <defs>
                      <filter id="f2" x="0" y="0" width="296.906" height="303.704" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="bg" />
                        <feBlend in="SourceGraphic" in2="bg" result="shape" />
                        <feGaussianBlur stdDeviation="39.05" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon */}
                <div className="relative size-12 shrink-0">
                  <StarPlusIcon />
                </div>
                {/* Text */}
                <div className="flex-1 flex flex-col gap-1">
                  <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '17px', fontWeight: 600, color: '#050B2E' }}>
                    Upgrade to Plus
                  </p>
                  <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '13px', color: '#666' }}>
                    Unlock advanced features
                  </p>
                </div>
                {/* Button */}
                <button
                  onClick={() => navigate('/agent/plans')}
                  className="bg-[#060E3C] rounded-full px-4 py-2.5 shrink-0"
                >
                  <span style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '13px', color: 'white' }}>See plan</span>
                </button>
              </div>
            </div>
          </Section>

          {/* App Details – icon grid */}
          <div className="flex flex-col gap-5 w-full">
            <p style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '19px', fontWeight: 600, color: '#050B2E' }}>App Details</p>
            <div className="flex gap-6 items-center">
              <AppIconBtn icon={<Lock size={22} color="#333" />} label="Privacy" onClick={() => navigate(`${base}/app-settings`)} />
              <AppIconBtn icon={<SlidersHorizontal size={22} color="#333" />} label="System" onClick={() => navigate(`${base}/system`)} />
              <AppIconBtn icon={<Globe size={22} color="#333" />} label="Language" onClick={() => navigate(`${base}/languages`)} />
              <AppIconBtn icon={<HelpCircle size={22} color="#333" />} label="FAQ" onClick={() => navigate(`${base}/faq`)} />
            </div>
          </div>

          {/* App Details – list rows */}
          <Section title="App Details">
            <RowItem
              icon={<Settings size={20} />}
              label="Settings"
              onClick={() => navigate(`${base}/app-settings`)}
            />
            <RowItem
              icon={<Shield size={20} />}
              label="Duseat Verified"
              onClick={() => navigate(`${base}/verified`)}
            />
            <RowItem
              icon={<Globe size={20} />}
              label="Languages"
              onClick={() => navigate(`${base}/languages`)}
            />
            <RowItem
              icon={<LogOut size={20} />}
              label="Log out"
              onClick={() => { logout(); navigate('/'); }}
              danger
            />
          </Section>

          {/* Support */}
          <Section title="Support">
            <RowItem icon={<HelpCircle size={20} />} label="FAQ" onClick={() => navigate(`${base}/faq`)} />
            <RowItem icon={<Phone size={20} />} label="Support" onClick={() => navigate(`${base}/support`)} />
          </Section>

        </div>
      </div>

      <BottomNav userType={isAgent ? 'agent' : 'investor'} />
    </div>
  );
}

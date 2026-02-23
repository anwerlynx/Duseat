import React from 'react';
import { useNavigate, useLocation } from 'react-router';

interface BottomNavProps {
  userType: 'agent' | 'investor';
}

/* ─── SVG Icons matching Figma ─── */
function HomeIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M2 8.5L10 2L18 8.5V18H13V13H7V18H2V8.5Z" stroke="#050B2E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function HomeIconFilled() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M2 8.5L10 2L18 8.5V18H13V13H7V18H2V8.5Z" fill="#050B2E" strokeWidth="0" />
    </svg>
  );
}

function HeartIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 18" fill="none">
      <path d="M10 16S2 11 2 5.5C2 3.5 3.5 1.5 5.5 1.5C7 1.5 8.5 2.5 10 4C11.5 2.5 13 1.5 14.5 1.5C16.5 1.5 18 3.5 18 5.5C18 11 10 16 10 16Z" stroke="#050B2E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function HeartIconFilled() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 18" fill="none">
      <path d="M10 16S2 11 2 5.5C2 3.5 3.5 1.5 5.5 1.5C7 1.5 8.5 2.5 10 4C11.5 2.5 13 1.5 14.5 1.5C16.5 1.5 18 3.5 18 5.5C18 11 10 16 10 16Z" fill="#050B2E" />
    </svg>
  );
}

function TicketIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 16" fill="none">
      <path d="M2 5C2 3.9 2.9 3 4 3H16C17.1 3 18 3.9 18 5V6.5C17.2 6.5 16.5 7.2 16.5 8C16.5 8.8 17.2 9.5 18 9.5V11C18 12.1 17.1 13 16 13H4C2.9 13 2 12.1 2 11V9.5C2.8 9.5 3.5 8.8 3.5 8C3.5 7.2 2.8 6.5 2 6.5V5Z" stroke="#050B2E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="3" x2="9" y2="13" stroke="#050B2E" strokeWidth="1.6" strokeDasharray="2 2" />
    </svg>
  );
}
function TicketIconFilled() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 16" fill="none">
      <path d="M2 5C2 3.9 2.9 3 4 3H8.5V13H4C2.9 13 2 12.1 2 11V9.5C2.8 9.5 3.5 8.8 3.5 8C3.5 7.2 2.8 6.5 2 6.5V5Z" fill="#050B2E" />
      <path d="M11.5 3H16C17.1 3 18 3.9 18 5V6.5C17.2 6.5 16.5 7.2 16.5 8C16.5 8.8 17.2 9.5 18 9.5V11C18 12.1 17.1 13 16 13H11.5V3Z" fill="#050B2E" />
    </svg>
  );
}

function SettingsIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#050B2E" strokeWidth="1.5" />
      <path d="M16.5 10C16.5 9.7 16.48 9.4 16.44 9.1L18 7.82L16.5 5.18L14.64 5.82C14.16 5.46 13.62 5.16 13.04 4.96L12.5 3H9.5L8.96 4.96C8.38 5.16 7.84 5.46 7.36 5.82L5.5 5.18L4 7.82L5.56 9.1C5.52 9.4 5.5 9.7 5.5 10C5.5 10.3 5.52 10.6 5.56 10.9L4 12.18L5.5 14.82L7.36 14.18C7.84 14.54 8.38 14.84 8.96 15.04L9.5 17H12.5L13.04 15.04C13.62 14.84 14.16 14.54 14.64 14.18L16.5 14.82L18 12.18L16.44 10.9C16.48 10.6 16.5 10.3 16.5 10Z" stroke="#050B2E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function SettingsIconFilled() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="white" />
      <path d="M16.5 10C16.5 9.7 16.48 9.4 16.44 9.1L18 7.82L16.5 5.18L14.64 5.82C14.16 5.46 13.62 5.16 13.04 4.96L12.5 3H9.5L8.96 4.96C8.38 5.16 7.84 5.46 7.36 5.82L5.5 5.18L4 7.82L5.56 9.1C5.52 9.4 5.5 9.7 5.5 10C5.5 10.3 5.52 10.6 5.56 10.9L4 12.18L5.5 14.82L7.36 14.18C7.84 14.54 8.38 14.84 8.96 15.04L9.5 17H12.5L13.04 15.04C13.62 14.84 14.16 14.54 14.64 14.18L16.5 14.82L18 12.18L16.44 10.9C16.48 10.6 16.5 10.3 16.5 10Z" fill="#050B2E" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2V20M2 11H20" stroke="#050B2E" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

interface TabItem {
  id: string;
  label: string;
  path: string;
  IconOutline: () => React.ReactElement;
  IconFilled: () => React.ReactElement;
}

export function BottomNav({ userType }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const agentTabs: TabItem[] = [
    { id: 'home', label: 'Home', path: '/agent', IconOutline: HomeIconOutline, IconFilled: HomeIconFilled },
    { id: 'favourite', label: 'Favourite', path: '/agent/favourites', IconOutline: HeartIconOutline, IconFilled: HeartIconFilled },
    { id: 'requests', label: 'Requests', path: '/agent/my-offers', IconOutline: TicketIconOutline, IconFilled: TicketIconFilled },
    { id: 'settings', label: 'Settings', path: '/agent/settings', IconOutline: SettingsIconOutline, IconFilled: SettingsIconFilled },
  ];

  const investorTabs: TabItem[] = [
    { id: 'home', label: 'Home', path: '/investor', IconOutline: HomeIconOutline, IconFilled: HomeIconFilled },
    { id: 'favourite', label: 'Favourite', path: '/investor/favourites', IconOutline: HeartIconOutline, IconFilled: HeartIconFilled },
    { id: 'requests', label: 'Requests', path: '/investor/my-requests', IconOutline: TicketIconOutline, IconFilled: TicketIconFilled },
    { id: 'settings', label: 'Settings', path: '/investor/settings', IconOutline: SettingsIconOutline, IconFilled: SettingsIconFilled },
  ];

  const tabs = userType === 'agent' ? agentTabs : investorTabs;
  const plusPath = userType === 'investor' ? '/investor/add-request' : '/agent/submit-offer';

  const isActive = (tabPath: string) => {
    if (tabPath === '/agent' || tabPath === '/investor') {
      return path === tabPath || (tabPath === '/investor' && (path === '/investor/activity' || path.startsWith('/investor/agent') || path === '/investor/agents'));
    }
    if (tabPath === '/agent/settings') {
      return ['/agent/settings', '/agent/edit-profile', '/agent/delete-account',
        '/agent/languages', '/agent/app-settings', '/agent/faq', '/agent/support',
        '/agent/profile', '/agent/plans'].some(p => path.startsWith(p));
    }
    if (tabPath === '/investor/settings') {
      return ['/investor/settings', '/investor/edit-profile', '/investor/delete-account',
        '/investor/languages', '/investor/app-settings', '/investor/faq', '/investor/support',
        '/investor/profile'].some(p => path.startsWith(p));
    }
    if (tabPath === '/agent/my-offers') return path.startsWith('/agent/my-offers');
    if (tabPath === '/investor/my-requests') return path.startsWith('/investor/my-requests');
    if (tabPath === '/agent/favourites') return path.startsWith('/agent/favourites');
    if (tabPath === '/investor/favourites') return path.startsWith('/investor/favourites');
    return path.startsWith(tabPath);
  };

  // Split tabs: 2 left, plus in middle, 2 right
  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2, 4);

  return (
    <>
      {/* Spacer so content isn't hidden behind the fixed nav */}
      <div style={{ height: '80px', flexShrink: 0 }} />

      <div
        className="bg-white fixed bottom-0 left-0 right-0"
        style={{
          boxShadow: '0 -1px 0 rgba(0,0,0,0.06)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          paddingTop: '20px',
          zIndex: 50,
        }}
      >
        <div className="flex items-center justify-around px-2" style={{ height: '60px' }}>
          {/* Left tabs */}
          {leftTabs.map((tab) => {
            const active = isActive(tab.path);
            const Icon = active ? tab.IconFilled : tab.IconOutline;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className="relative flex flex-col items-center justify-center gap-[2px] transition-all"
                style={{
                  width: '75px',
                  height: '42px',
                  borderRadius: '24px',
                  background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: active ? '1px solid rgba(5,11,46,0.15)' : '1px solid transparent',
                  fontFamily: "'TT Commons', sans-serif",
                }}
              >
                <Icon />
                <span
                  style={{
                    fontSize: '10px',
                    color: '#050B2E',
                    fontFamily: "'TT Commons', sans-serif",
                    fontWeight: active ? 600 : 400,
                    lineHeight: 1,
                  }}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}

          {/* Center Plus Button — floating */}
          <div className="relative flex flex-col items-center justify-center" style={{ width: '50px', height: '42px' }}>
            <button
              onClick={() => navigate(plusPath)}
              className="absolute flex items-center justify-center bg-white"
              style={{
                width: '57px',
                height: '57px',
                borderRadius: '32.571px',
                top: '-39px',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '-3.931px 3.931px 7.174px 0px rgba(0,0,0,0.32)',
                zIndex: 10,
              }}
            >
              <PlusIcon />
            </button>
          </div>

          {/* Right tabs */}
          {rightTabs.map((tab) => {
            const active = isActive(tab.path);
            const Icon = active ? tab.IconFilled : tab.IconOutline;
            /* Chat badge on Requests tab for both user types */
            const showChatBadge = tab.id === 'requests';
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className="relative flex flex-col items-center justify-center gap-[2px] transition-all"
                style={{
                  width: '75px',
                  height: '42px',
                  borderRadius: '24px',
                  background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: active ? '1px solid rgba(5,11,46,0.15)' : '1px solid transparent',
                  fontFamily: "'TT Commons', sans-serif",
                }}
              >
                <div className="relative">
                  <Icon />
                  {showChatBadge && (
                    <div
                      className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E31D1C] flex items-center justify-center"
                    >
                      <span style={{ fontSize: '8px', color: 'white', fontWeight: 700, lineHeight: 1 }}>3</span>
                    </div>
                  )}
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    color: '#050B2E',
                    fontFamily: "'TT Commons', sans-serif",
                    fontWeight: active ? 600 : 400,
                    lineHeight: 1,
                  }}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? 'text-white' : 'text-black';
  return (
    <div className={`flex items-center justify-between px-6 pt-12 pb-2 ${dark ? 'text-white' : 'text-black'}`} style={{ height: '47px' }}>
      <span className={`text-[15px] font-semibold ${textColor}`} style={{ fontFamily: 'sans-serif' }}>9:41</span>
      <div className="flex items-center gap-1">
        {/* Signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill={dark ? 'white' : 'black'}>
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="7" rx="1" />
          <rect x="9" y="2" width="3" height="10" rx="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.3" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 24 18" fill="none">
          <path d="M12 14a2 2 0 110 4 2 2 0 010-4z" fill={dark ? 'white' : 'black'} />
          <path d="M6 9.5C7.9 7.6 10.3 6.5 12 6.5s4.1 1.1 6 3" stroke={dark ? 'white' : 'black'} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M1 4.5C4.3 1.3 8 0 12 0s7.7 1.3 11 4.5" stroke={dark ? 'white' : 'black'} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={dark ? 'white' : 'black'} strokeOpacity="0.35" />
          <path d="M22 4v4a2 2 0 000-4z" fill={dark ? 'white' : 'black'} fillOpacity="0.4" />
          <rect x="2" y="2" width="17" height="8" rx="2" fill={dark ? 'white' : 'black'} />
        </svg>
      </div>
    </div>
  );
}

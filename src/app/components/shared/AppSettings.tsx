import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Bell, Moon, Smartphone, Shield, Eye, Volume2 } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { useApp } from '../AppContext';

interface ToggleItem {
  id: string;
  icon: typeof Bell;
  label: string;
  subtitle: string;
  value: boolean;
}

export default function AppSettings() {
  const navigate = useNavigate();
  const { userType } = useApp();

  const [toggles, setToggles] = useState<Record<string, boolean>>({
    notifications: true,
    pushAlerts: true,
    darkMode: false,
    biometric: false,
    dataUsage: true,
    sound: true,
  });

  const toggleItem = (id: string) => setToggles(p => ({ ...p, [id]: !p[id] }));

  const items: ToggleItem[] = [
    { id: 'notifications', icon: Bell, label: 'Notifications', subtitle: 'Receive app notifications', value: toggles.notifications },
    { id: 'pushAlerts', icon: Bell, label: 'Push Alerts', subtitle: 'New offer & message alerts', value: toggles.pushAlerts },
    { id: 'darkMode', icon: Moon, label: 'Dark Mode', subtitle: 'Switch to dark theme', value: toggles.darkMode },
    { id: 'biometric', icon: Smartphone, label: 'Biometric Login', subtitle: 'Use Face ID or fingerprint', value: toggles.biometric },
    { id: 'dataUsage', icon: Eye, label: 'Data Usage', subtitle: 'Optimize for low data', value: toggles.dataUsage },
    { id: 'sound', icon: Volume2, label: 'Sound Effects', subtitle: 'Play sounds on actions', value: toggles.sound },
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
            Settings
          </p>
          <div className="w-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Preferences */}
        <p className="text-[#999] mb-3" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '13px', letterSpacing: '0.5px' }}>
          PREFERENCES
        </p>
        <div className="bg-white rounded-[16px] overflow-hidden mb-6" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 px-4 py-4 ${i > 0 ? 'border-t border-[#F8F8F8]' : ''}`}
              >
                <div className="w-9 h-9 bg-[#F0FBFB] rounded-full flex items-center justify-center shrink-0">
                  <Icon size={18} color="#01CBD2" />
                </div>
                <div className="flex-1">
                  <p className="text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}>
                    {item.label}
                  </p>
                  <p className="text-[#999]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '12px' }}>
                    {item.subtitle}
                  </p>
                </div>
                {/* Toggle */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="relative w-[46px] h-[26px] rounded-full transition-colors shrink-0"
                  style={{ backgroundColor: item.value ? '#01CBD2' : '#D9D9D9' }}
                >
                  <div
                    className="absolute top-[3px] w-5 h-5 bg-white rounded-full shadow-sm transition-all"
                    style={{ left: item.value ? '23px' : '3px' }}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Privacy section */}
        <p className="text-[#999] mb-3" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '13px', letterSpacing: '0.5px' }}>
          PRIVACY & SECURITY
        </p>
        <div className="bg-white rounded-[16px] overflow-hidden" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          {[
            { icon: Shield, label: 'Privacy Policy', action: () => {} },
            { icon: Eye, label: 'Terms of Service', action: () => {} },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`w-full flex items-center gap-3 px-4 py-4 ${i > 0 ? 'border-t border-[#F8F8F8]' : ''}`}
              >
                <div className="w-9 h-9 bg-[#F0F0F0] rounded-full flex items-center justify-center shrink-0">
                  <Icon size={18} color="#050B2E" />
                </div>
                <span className="flex-1 text-left text-[#050B2E]" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '15px' }}>
                  {item.label}
                </span>
                <ChevronRight size={16} color="#CCC" />
              </button>
            );
          })}
        </div>

        {/* Version */}
        <p className="text-center text-[#CCC] mt-6" style={{ fontFamily: "'TT Commons', sans-serif", fontSize: '12px' }}>
          Duseat v1.0.0
        </p>
      </div>

      <BottomNav userType={userType === 'agent' ? 'agent' : 'investor'} />
    </div>
  );
}

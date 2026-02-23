import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    ChevronLeft, ChevronRight, Bell, Moon, Globe, Smartphone,
    Shield, Trash2, Download, ToggleLeft, ToggleRight, Volume2,
    Vibrate, Eye, Lock, Wifi
} from 'lucide-react';
import { StatusBar } from '../StatusBar';

/* ── Toggle row ── */
function ToggleRow({
    icon, label, desc, value, onChange, accent = '#01CBD2',
}: {
    icon: React.ReactNode; label: string; desc?: string;
    value: boolean; onChange: (v: boolean) => void; accent?: string;
}) {
    return (
        <div className="flex items-center gap-3 py-3.5 border-b border-[#F8F8F8] last:border-0">
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ background: value ? `${accent}18` : '#F0F0F0' }}>
                <div style={{ color: value ? accent : '#999' }}>{icon}</div>
            </div>
            <div className="flex-1 min-w-0">
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#050B2E' }}>{label}</p>
                {desc && <p style={{ fontSize: '12px', color: '#999', marginTop: '1px' }}>{desc}</p>}
            </div>
            <button onClick={() => onChange(!value)} className="shrink-0 transition-all">
                {value
                    ? <ToggleRight size={32} color={accent} />
                    : <ToggleLeft size={32} color="#CCC" />}
            </button>
        </div>
    );
}

/* ── Nav row ── */
function NavRow({ icon, label, value, onClick, danger }: {
    icon: React.ReactNode; label: string; value?: string; onClick: () => void; danger?: boolean;
}) {
    return (
        <button onClick={onClick}
            className="flex items-center gap-3 py-3.5 w-full border-b border-[#F8F8F8] last:border-0">
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ background: danger ? 'rgba(227,29,28,0.08)' : '#F0F0F0' }}>
                <div style={{ color: danger ? '#E31D1C' : '#666' }}>{icon}</div>
            </div>
            <span className="flex-1 text-left" style={{ fontSize: '15px', fontWeight: 500, color: danger ? '#E31D1C' : '#050B2E' }}>{label}</span>
            {value && <span style={{ fontSize: '13px', color: '#999', marginRight: '4px' }}>{value}</span>}
            <ChevronRight size={16} color={danger ? '#E31D1C' : '#CCC'} />
        </button>
    );
}

/* ── Section wrapper ── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-4">
            <p className="px-4 mb-2" style={{ fontSize: '13px', fontWeight: 700, color: '#999', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                {title}
            </p>
            <div className="bg-white rounded-[20px] px-4 mx-4" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                {children}
            </div>
        </div>
    );
}

/* ─────────────────── MAIN COMPONENT ─────────────────── */
export default function SystemSettings() {
    const navigate = useNavigate();

    /* Notification settings */
    const [pushNotifs, setPushNotifs] = useState(true);
    const [emailNotifs, setEmailNotifs] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrate, setVibrate] = useState(true);
    const [newOffers, setNewOffers] = useState(true);
    const [messages, setMessages] = useState(true);
    const [dealUpdates, setDealUpdates] = useState(true);
    const [marketing, setMarketing] = useState(false);

    /* Display settings */
    const [darkMode, setDarkMode] = useState(false);
    const [compactView, setCompactView] = useState(false);
    const [animationsOn, setAnimationsOn] = useState(true);

    /* Privacy settings */
    const [showOnline, setShowOnline] = useState(true);
    const [showProfile, setShowProfile] = useState(true);
    const [dataSharing, setDataSharing] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
            {/* ── Header ── */}
            <div className="bg-white shrink-0 border-b border-[#F0F0F0]">
                <StatusBar />
                <div className="flex items-center px-4 h-14">
                    <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-[#F0F0F0] flex items-center justify-center">
                        <ChevronLeft size={18} color="#333" />
                    </button>
                    <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
                        Settings
                    </p>
                    <div className="w-9" />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pt-4 pb-8">

                {/* ── Notifications ── */}
                <Section title="Notifications">
                    <ToggleRow icon={<Bell size={16} />} label="Push Notifications" desc="Alerts on your device" value={pushNotifs} onChange={setPushNotifs} />
                    <ToggleRow icon={<Globe size={16} />} label="Email Notifications" desc="Updates sent to your email" value={emailNotifs} onChange={setEmailNotifs} />
                    <ToggleRow icon={<Volume2 size={16} />} label="Sound" desc="Play sounds for new alerts" value={soundEnabled} onChange={setSoundEnabled} />
                    <ToggleRow icon={<Vibrate size={16} />} label="Vibration" desc="Haptic feedback on notifications" value={vibrate} onChange={setVibrate} />
                </Section>

                {/* ── Alert Types ── */}
                <Section title="Alert Types">
                    <ToggleRow icon={<Bell size={16} />} label="New Offers" desc="When agents submit offers on your requests" value={newOffers} onChange={setNewOffers} />
                    <ToggleRow icon={<Smartphone size={16} />} label="Messages" desc="New chat messages" value={messages} onChange={setMessages} />
                    <ToggleRow icon={<Shield size={16} />} label="Deal Updates" desc="Status changes on active deals" value={dealUpdates} onChange={setDealUpdates} />
                    <ToggleRow icon={<Globe size={16} />} label="Promotions" desc="Tips, news and special offers" value={marketing} onChange={setMarketing} accent="#F5A623" />
                </Section>

                {/* ── Display ── */}
                <Section title="Display">
                    <ToggleRow icon={<Moon size={16} />} label="Dark Mode" desc="Switch to dark theme" value={darkMode} onChange={setDarkMode} />
                    <ToggleRow icon={<Eye size={16} />} label="Compact View" desc="Show more content on screen" value={compactView} onChange={setCompactView} />
                    <ToggleRow icon={<Wifi size={16} />} label="Animations" desc="Enable motion effects" value={animationsOn} onChange={setAnimationsOn} />
                </Section>

                {/* ── Privacy ── */}
                <Section title="Privacy">
                    <ToggleRow icon={<Eye size={16} />} label="Show Online Status" desc="Let others see when you're active" value={showOnline} onChange={setShowOnline} />
                    <ToggleRow icon={<Eye size={16} />} label="Public Profile" desc="Allow others to view your profile" value={showProfile} onChange={setShowProfile} />
                    <ToggleRow icon={<Lock size={16} />} label="Data Sharing" desc="Help improve Duseat with usage data" value={dataSharing} onChange={setDataSharing} accent="#F5A623" />
                </Section>

                {/* ── Account ── */}
                <Section title="Account">
                    <NavRow icon={<Download size={16} />} label="Download My Data" onClick={() => { }} />
                    <NavRow icon={<Lock size={16} />} label="Change Password" onClick={() => { }} />
                    <NavRow icon={<Shield size={16} />} label="Two-Factor Auth" value="Off" onClick={() => { }} />
                    <NavRow icon={<Trash2 size={16} />} label="Delete Account" onClick={() => navigate(-1)} danger />
                </Section>

                {/* ── App Info ── */}
                <div className="mx-4 mt-2 bg-white rounded-[20px] p-4" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center justify-between mb-1">
                        <span style={{ fontSize: '14px', color: '#999' }}>Version</span>
                        <span style={{ fontSize: '14px', color: '#050B2E', fontWeight: 600 }}>1.0.0 (build 47)</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ fontSize: '14px', color: '#999' }}>Last Updated</span>
                        <span style={{ fontSize: '14px', color: '#050B2E', fontWeight: 600 }}>Feb 23, 2026</span>
                    </div>
                </div>

                <p className="text-center mt-4 text-[#CCC]" style={{ fontSize: '12px' }}>
                    Duseat · Real Estate Marketplace · © 2026
                </p>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    ChevronLeft, ChevronRight, Crown, Sparkles, Zap,
    RefreshCw, Calendar, CreditCard, AlertCircle, Check,
    X, Settings
} from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';

// Mock current subscription data
const MY_SUBSCRIPTION = {
    plan: 'plus' as 'free' | 'plus' | 'premium',
    billing: 'monthly' as 'monthly' | 'yearly',
    startDate: '2025-01-23',
    renewalDate: '2026-03-23',
    price: 199,
    card: {
        brand: 'Visa',
        last4: '4242',
        expiry: '08/27',
    },
    invoices: [
        { id: 'INV-0023', date: 'Jan 23, 2026', amount: 199, status: 'paid' },
        { id: 'INV-0019', date: 'Dec 23, 2025', amount: 199, status: 'paid' },
        { id: 'INV-0014', date: 'Nov 23, 2025', amount: 199, status: 'paid' },
    ],
};

const PLAN_META = {
    free: { name: 'Free', icon: Zap, color: '#999', bg: '#F0F0F0' },
    plus: { name: 'Plus', icon: Sparkles, color: '#01CBD2', bg: 'rgba(1,203,210,0.1)' },
    premium: { name: 'Premium', icon: Crown, color: '#F5A623', bg: 'rgba(245,166,35,0.1)' },
};

export default function MySubscription() {
    const navigate = useNavigate();
    const sub = MY_SUBSCRIPTION;
    const meta = PLAN_META[sub.plan];
    const Icon = meta.icon;

    const [cancelSheet, setCancelSheet] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    const daysLeft = Math.max(0, Math.round(
        (new Date(sub.renewalDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    ));

    // Format date nicely
    const fmtDate = (s: string) =>
        new Date(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
            {/* ── Header ── */}
            <div className="bg-white shrink-0 border-b border-[#F0F0F0]">
                <StatusBar />
                <div className="flex items-center px-4 h-14">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F0F0F0]"
                    >
                        <ChevronLeft size={18} color="#333" />
                    </button>
                    <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
                        My Subscription
                    </p>
                    <button
                        onClick={() => navigate('/agent/plans')}
                        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F0F0F0]"
                    >
                        <Settings size={16} color="#333" />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-6">

                {/* ── Current Plan Hero Card ── */}
                <div className="mt-4 mb-4">
                    {cancelled ? (
                        /* Cancelled state */
                        <div
                            className="rounded-[20px] p-5 relative overflow-hidden"
                            style={{ background: '#F8F8F8', border: '2px solid #E8E8E8' }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 bg-[#F0F0F0] rounded-[14px] flex items-center justify-center">
                                    <Zap size={22} color="#CCC" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 700, color: '#050B2E' }}>Free Plan</p>
                                    <p style={{ fontSize: '12px', color: '#999' }}>Your subscription was cancelled</p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/agent/plans')}
                                className="w-full h-11 rounded-full bg-[#01CBD2] text-white flex items-center justify-center gap-2"
                                style={{ fontSize: '14px', fontWeight: 600 }}
                            >
                                <Sparkles size={15} />
                                Reactivate Plan
                            </button>
                        </div>
                    ) : (
                        /* Active plan */
                        <div
                            className="rounded-[20px] p-5 relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #050B2E 0%, #0c1a52 100%)',
                                boxShadow: '0 4px 20px rgba(5,11,46,0.2)',
                            }}
                        >
                            {/* Glow */}
                            <div
                                className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
                                style={{ background: `radial-gradient(circle, ${meta.color}30 0%, transparent 70%)` }}
                            />

                            <div className="flex items-start justify-between mb-4 relative">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                                        style={{ background: meta.bg }}
                                    >
                                        <Icon size={22} color={meta.color} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p style={{ fontSize: '20px', fontWeight: 800, color: 'white' }}>
                                                {meta.name}
                                            </p>
                                            <span
                                                className="rounded-full px-2 py-0.5"
                                                style={{ fontSize: '10px', fontWeight: 700, background: 'rgba(1,255,100,0.15)', color: '#4ADE80' }}
                                            >
                                                ACTIVE
                                            </span>
                                        </div>
                                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                                            Billed {sub.billing}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p style={{ fontSize: '26px', fontWeight: 900, color: meta.color, letterSpacing: '-1px', lineHeight: 1 }}>
                                        {sub.price}
                                    </p>
                                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>AED/mo</p>
                                </div>
                            </div>

                            {/* Renewal bar */}
                            <div
                                className="rounded-[12px] p-3 relative"
                                style={{ background: 'rgba(255,255,255,0.07)' }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={13} color="rgba(255,255,255,0.5)" />
                                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                                            Renews {fmtDate(sub.renewalDate)}
                                        </span>
                                    </div>
                                    <span
                                        className="rounded-full px-2 py-0.5"
                                        style={{
                                            fontSize: '10px',
                                            fontWeight: 700,
                                            background: daysLeft < 7 ? 'rgba(227,29,28,0.2)' : 'rgba(1,203,210,0.15)',
                                            color: daysLeft < 7 ? '#F87171' : '#01CBD2',
                                        }}
                                    >
                                        {daysLeft}d left
                                    </span>
                                </div>
                                {/* Progress bar */}
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            width: `${Math.min(100, ((30 - daysLeft) / 30) * 100)}%`,
                                            background: meta.color,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Quick Actions ── */}
                {!cancelled && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <button
                            onClick={() => navigate('/agent/plans')}
                            className="bg-white rounded-[16px] p-4 flex flex-col items-start"
                            style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
                        >
                            <div className="w-9 h-9 rounded-[10px] bg-[rgba(1,203,210,0.1)] flex items-center justify-center mb-2">
                                <Sparkles size={16} color="#01CBD2" />
                            </div>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: '#050B2E' }}>Upgrade Plan</p>
                            <p style={{ fontSize: '11px', color: '#999' }}>Get more features</p>
                        </button>
                        <button
                            onClick={() => navigate('/agent/payment/plus/yearly')}
                            className="bg-white rounded-[16px] p-4 flex flex-col items-start"
                            style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
                        >
                            <div className="w-9 h-9 rounded-[10px] bg-[rgba(245,166,35,0.1)] flex items-center justify-center mb-2">
                                <RefreshCw size={16} color="#F5A623" />
                            </div>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: '#050B2E' }}>Switch to Yearly</p>
                            <p style={{ fontSize: '11px', color: '#999' }}>Save up to 33%</p>
                        </button>
                    </div>
                )}

                {/* ── Payment Method ── */}
                {!cancelled && (
                    <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                        <div className="flex items-center justify-between mb-3">
                            <p style={{ fontSize: '15px', fontWeight: 700, color: '#050B2E' }}>Payment Method</p>
                            <button style={{ fontSize: '13px', color: '#01CBD2', fontWeight: 600 }}>Update</button>
                        </div>
                        <div
                            className="flex items-center gap-3 rounded-[14px] p-3"
                            style={{ background: '#F8F8F8' }}
                        >
                            <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                                <CreditCard size={18} color="#050B2E" />
                            </div>
                            <div className="flex-1">
                                <p style={{ fontSize: '14px', fontWeight: 600, color: '#050B2E' }}>
                                    {sub.card.brand} •••• {sub.card.last4}
                                </p>
                                <p style={{ fontSize: '12px', color: '#999' }}>Expires {sub.card.expiry}</p>
                            </div>
                            <ChevronRight size={16} color="#CCC" />
                        </div>
                    </div>
                )}

                {/* ── Invoice History ── */}
                <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center justify-between mb-3">
                        <p style={{ fontSize: '15px', fontWeight: 700, color: '#050B2E' }}>Invoice History</p>
                        <button style={{ fontSize: '13px', color: '#01CBD2', fontWeight: 600 }}>View all</button>
                    </div>
                    <div className="space-y-2">
                        {sub.invoices.map((inv, i) => (
                            <div
                                key={inv.id}
                                className="flex items-center justify-between py-2.5"
                                style={{ borderBottom: i < sub.invoices.length - 1 ? '1px solid #F8F8F8' : 'none' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-[8px] bg-[#F0FBFB] flex items-center justify-center">
                                        <Check size={14} color="#01CBD2" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E' }}>{inv.id}</p>
                                        <p style={{ fontSize: '11px', color: '#999' }}>{inv.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#050B2E' }}>{inv.amount} AED</p>
                                    <span
                                        className="rounded-full px-2 py-0.5"
                                        style={{ fontSize: '10px', fontWeight: 600, background: '#F0FBFB', color: '#01CBD2' }}
                                    >
                                        Paid
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Cancel Subscription ── */}
                {!cancelled && (
                    <button
                        onClick={() => setCancelSheet(true)}
                        className="w-full py-3"
                        style={{ fontSize: '14px', color: '#E31D1C', fontWeight: 500 }}
                    >
                        Cancel Subscription
                    </button>
                )}
            </div>

            <BottomNav userType="agent" />

            {/* ── Cancel Confirmation Bottom Sheet ── */}
            {cancelSheet && (
                <div className="fixed inset-0 z-50 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setCancelSheet(false)} />
                    <div className="relative bg-white rounded-t-[28px] px-5 pb-8 pt-4">
                        {/* Handle */}
                        <div className="w-10 h-1 bg-[#E8E8E8] rounded-full mx-auto mb-5" />

                        <div className="w-14 h-14 rounded-full bg-[#FFF0F0] flex items-center justify-center mx-auto mb-4">
                            <AlertCircle size={28} color="#E31D1C" />
                        </div>

                        <p className="text-center text-[#050B2E] mb-2" style={{ fontSize: '20px', fontWeight: 800 }}>
                            Cancel Subscription?
                        </p>
                        <p className="text-center text-[#999] mb-6" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                            You'll lose access to all <span style={{ color: '#050B2E', fontWeight: 600 }}>{meta.name}</span> features
                            on <span style={{ color: '#050B2E', fontWeight: 600 }}>{fmtDate(sub.renewalDate)}</span>.
                            You can still use them until then.
                        </p>

                        {/* What you lose */}
                        <div className="bg-[#FFF0F0] rounded-[16px] p-4 mb-5">
                            <p className="text-[#E31D1C] mb-2" style={{ fontSize: '13px', fontWeight: 700 }}>
                                You will lose access to:
                            </p>
                            {['Unlimited offers', 'Featured profile', 'Priority support', 'AI matching'].map(f => (
                                <div key={f} className="flex items-center gap-2 mb-1.5">
                                    <X size={12} color="#E31D1C" strokeWidth={3} />
                                    <span style={{ fontSize: '13px', color: '#666' }}>{f}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => { setCancelled(true); setCancelSheet(false); }}
                            className="w-full h-12 rounded-full border-2 border-[#E31D1C] mb-3 flex items-center justify-center"
                        >
                            <span style={{ fontSize: '15px', fontWeight: 700, color: '#E31D1C' }}>
                                Yes, Cancel Subscription
                            </span>
                        </button>
                        <button
                            onClick={() => setCancelSheet(false)}
                            className="w-full h-12 rounded-full bg-[#01CBD2] flex items-center justify-center"
                            style={{ boxShadow: '0 4px 16px rgba(1,203,210,0.3)' }}
                        >
                            <span style={{ fontSize: '15px', fontWeight: 700, color: 'white' }}>
                                Keep My Subscription
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

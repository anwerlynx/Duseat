import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
    ChevronLeft, CreditCard, Lock, Check, AlertCircle, ShieldCheck
} from 'lucide-react';
import { StatusBar } from '../StatusBar';

const PLAN_INFO: Record<string, {
    name: string; price: { monthly: number; yearly: number }; features: string[];
}> = {
    plus: {
        name: 'Plus',
        price: { monthly: 199, yearly: 1599 },
        features: ['Unlimited offers', 'Featured profile', 'AI suggestions', 'Priority support'],
    },
    premium: {
        name: 'Premium',
        price: { monthly: 499, yearly: 3999 },
        features: ['Everything in Plus', 'Top placement', 'Dedicated manager', 'Off-plan leads'],
    },
};

type Billing = 'monthly' | 'yearly';

function formatCardNumber(val: string) {
    return val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}
function formatExpiry(val: string) {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
}

export default function PaymentPage() {
    const navigate = useNavigate();
    const { planId = 'plus', billing = 'monthly' } = useParams<{ planId: string; billing: string }>();

    const plan = PLAN_INFO[planId] ?? PLAN_INFO.plus;
    const billingType = (billing as Billing) ?? 'monthly';
    const price = billingType === 'monthly' ? plan.price.monthly : plan.price.yearly;
    const savePct = Math.round(((plan.price.monthly * 12 - plan.price.yearly) / (plan.price.monthly * 12)) * 100);

    const [form, setForm] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = 'Cardholder name is required';
        if (form.cardNumber.replace(/\s/g, '').length < 16) e.cardNumber = 'Enter a valid 16-digit card number';
        if (form.expiry.length < 5) e.expiry = 'Enter a valid expiry date';
        if (form.cvv.length < 3) e.cvv = 'Enter a valid CVV';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handlePay = () => {
        if (!validate()) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => navigate('/agent/subscription'), 2000);
        }, 2000);
    };

    /* ── Success Screen ── */
    if (success) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
                <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'rgba(1,203,210,0.1)', animation: 'pulse 1.5s ease infinite' }}
                >
                    <Check size={44} color="#01CBD2" strokeWidth={2.5} />
                </div>
                <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '24px', fontWeight: 800 }}>
                    You're all set! 🎉
                </p>
                <p className="text-[#999] text-center mb-1" style={{ fontSize: '15px' }}>
                    Welcome to <span style={{ color: '#01CBD2', fontWeight: 700 }}>{plan.name}</span>
                </p>
                <p className="text-[#CCC] text-center" style={{ fontSize: '13px' }}>
                    Redirecting to your subscription...
                </p>
            </div>
        );
    }

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
                        Payment
                    </p>
                    <div className="w-9 flex items-center justify-center">
                        <Lock size={16} color="#01CBD2" />
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-6">

                {/* ── Order Summary ── */}
                <div className="mt-4 mb-4">
                    <div
                        className="rounded-[20px] p-4"
                        style={{
                            background: 'linear-gradient(135deg, #050B2E 0%, #0c1a52 100%)',
                            boxShadow: '0 4px 16px rgba(5,11,46,0.2)',
                        }}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <p className="text-[#01CBD2]" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px' }}>
                                    ORDER SUMMARY
                                </p>
                                <p className="text-white mt-1" style={{ fontSize: '20px', fontWeight: 800 }}>
                                    {plan.name} Plan
                                </p>
                                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                                    Billed {billingType === 'monthly' ? 'monthly' : 'annually'}
                                </p>
                            </div>
                            <div className="text-right">
                                <p style={{ fontSize: '28px', fontWeight: 900, color: '#01CBD2', letterSpacing: '-1px', lineHeight: 1 }}>
                                    {price}
                                </p>
                                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                                    AED{billingType === 'monthly' ? '/mo' : '/yr'}
                                </p>
                                {billingType === 'yearly' && (
                                    <span
                                        className="inline-block mt-1 rounded-full px-2 py-0.5"
                                        style={{ fontSize: '10px', fontWeight: 700, background: 'rgba(1,203,210,0.2)', color: '#01CBD2' }}
                                    >
                                        Save {savePct}%
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Features included */}
                        <div className="border-t border-white/10 pt-3 grid grid-cols-2 gap-1.5">
                            {plan.features.map(f => (
                                <div key={f} className="flex items-center gap-1.5">
                                    <Check size={10} color="#01CBD2" strokeWidth={3} />
                                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Payment Method Selection ── */}
                <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                    <p className="text-[#050B2E] mb-3" style={{ fontSize: '15px', fontWeight: 700 }}>
                        Payment Method
                    </p>
                    {/* Card selected by default */}
                    <div
                        className="flex items-center gap-3 rounded-[14px] p-3 border-2"
                        style={{ borderColor: '#01CBD2', background: 'rgba(1,203,210,0.04)' }}
                    >
                        <div
                            className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(1,203,210,0.1)' }}
                        >
                            <CreditCard size={18} color="#01CBD2" />
                        </div>
                        <div className="flex-1">
                            <p style={{ fontSize: '14px', fontWeight: 600, color: '#050B2E' }}>Credit / Debit Card</p>
                            <p style={{ fontSize: '11px', color: '#999' }}>Visa, Mastercard, AMEX</p>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-[#01CBD2] flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#01CBD2]" />
                        </div>
                    </div>
                </div>

                {/* ── Card Details Form ── */}
                <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                    <p className="text-[#050B2E] mb-4" style={{ fontSize: '15px', fontWeight: 700 }}>
                        Card Details
                    </p>

                    {/* Card Number */}
                    <div className="mb-4">
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E' }}>Card Number</label>
                        <div
                            className="flex items-center mt-1.5 border-2 rounded-[12px] px-3 h-13 gap-2"
                            style={{
                                borderColor: errors.cardNumber ? '#E31D1C' : form.cardNumber ? '#01CBD2' : '#E8E8E8',
                                height: '50px',
                            }}
                        >
                            <CreditCard size={16} color={form.cardNumber ? '#01CBD2' : '#CCC'} />
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="1234 5678 9012 3456"
                                value={form.cardNumber}
                                onChange={e => setForm(f => ({ ...f, cardNumber: formatCardNumber(e.target.value) }))}
                                className="flex-1 outline-none bg-transparent text-[#050B2E]"
                                style={{ fontSize: '15px', letterSpacing: '1px' }}
                            />
                            {/* Card logos */}
                            <div className="flex gap-1 shrink-0">
                                {['💳', '💳'].map((_, i) => (
                                    <div key={i} className="w-7 h-5 rounded bg-[#F0F0F0]" />
                                ))}
                            </div>
                        </div>
                        {errors.cardNumber && (
                            <p className="text-[#E31D1C] mt-1 flex items-center gap-1" style={{ fontSize: '11px' }}>
                                <AlertCircle size={11} /> {errors.cardNumber}
                            </p>
                        )}
                    </div>

                    {/* Cardholder Name */}
                    <div className="mb-4">
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E' }}>Cardholder Name</label>
                        <input
                            type="text"
                            placeholder="Name as on card"
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            className="w-full mt-1.5 border-2 rounded-[12px] px-4 outline-none text-[#050B2E]"
                            style={{
                                height: '50px',
                                fontSize: '15px',
                                borderColor: errors.name ? '#E31D1C' : form.name ? '#01CBD2' : '#E8E8E8',
                            }}
                        />
                        {errors.name && (
                            <p className="text-[#E31D1C] mt-1 flex items-center gap-1" style={{ fontSize: '11px' }}>
                                <AlertCircle size={11} /> {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Expiry + CVV */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E' }}>Expiry Date</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="MM/YY"
                                value={form.expiry}
                                onChange={e => setForm(f => ({ ...f, expiry: formatExpiry(e.target.value) }))}
                                className="w-full mt-1.5 border-2 rounded-[12px] px-4 outline-none text-[#050B2E]"
                                style={{
                                    height: '50px',
                                    fontSize: '15px',
                                    borderColor: errors.expiry ? '#E31D1C' : form.expiry ? '#01CBD2' : '#E8E8E8',
                                }}
                            />
                            {errors.expiry && (
                                <p className="text-[#E31D1C] mt-1 flex items-center gap-1" style={{ fontSize: '11px' }}>
                                    <AlertCircle size={11} /> {errors.expiry}
                                </p>
                            )}
                        </div>
                        <div>
                            <label style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E' }}>CVV</label>
                            <input
                                type="password"
                                inputMode="numeric"
                                placeholder="•••"
                                maxLength={4}
                                value={form.cvv}
                                onChange={e => setForm(f => ({ ...f, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) }))}
                                className="w-full mt-1.5 border-2 rounded-[12px] px-4 outline-none text-[#050B2E]"
                                style={{
                                    height: '50px',
                                    fontSize: '18px',
                                    borderColor: errors.cvv ? '#E31D1C' : form.cvv ? '#01CBD2' : '#E8E8E8',
                                }}
                            />
                            {errors.cvv && (
                                <p className="text-[#E31D1C] mt-1 flex items-center gap-1" style={{ fontSize: '11px' }}>
                                    <AlertCircle size={11} /> {errors.cvv}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Security Note ── */}
                <div
                    className="rounded-[14px] p-3 mb-2 flex items-center gap-2.5"
                    style={{ background: '#F0FBFB', border: '1px solid rgba(1,203,210,0.2)' }}
                >
                    <ShieldCheck size={16} color="#01CBD2" className="shrink-0" />
                    <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.5 }}>
                        Your payment is secured with 256-bit SSL encryption. We never store your card details.
                    </p>
                </div>
            </div>

            {/* ── Pay Button ── */}
            <div className="shrink-0 bg-white px-4 py-4 border-t border-[#F8F8F8]">
                <button
                    onClick={handlePay}
                    disabled={loading}
                    className="w-full h-13 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    style={{
                        height: '52px',
                        background: loading ? '#E8E8E8' : '#01CBD2',
                        boxShadow: loading ? 'none' : '0 4px 16px rgba(1,203,210,0.35)',
                    }}
                >
                    {loading ? (
                        <>
                            <div
                                className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                                style={{ animation: 'spin 0.8s linear infinite' }}
                            />
                            <span className="text-white/70" style={{ fontSize: '16px', fontWeight: 600 }}>
                                Processing...
                            </span>
                        </>
                    ) : (
                        <>
                            <Lock size={16} color="white" strokeWidth={2.5} />
                            <span className="text-white" style={{ fontSize: '16px', fontWeight: 700 }}>
                                Pay {price} AED
                            </span>
                        </>
                    )}
                </button>
                <p className="text-center mt-2 text-[#CCC]" style={{ fontSize: '11px' }}>
                    By paying you agree to our Terms & Conditions
                </p>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
      `}</style>
        </div>
    );
}

import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    ChevronLeft, Shield, Check, Upload, FileText,
    BadgeCheck, Clock, AlertCircle, ChevronRight, Lock
} from 'lucide-react';
import { StatusBar } from '../StatusBar';

/* ── Verification steps ── */
const STEPS = [
    {
        id: 'identity',
        title: 'Identity Verification',
        desc: 'Verify your national ID or passport',
        icon: FileText,
        status: 'completed' as Status,
        detail: 'Emirates ID verified on Jan 15, 2026',
    },
    {
        id: 'rera',
        title: 'RERA License',
        desc: 'Upload your valid RERA broker card',
        icon: BadgeCheck,
        status: 'completed' as Status,
        detail: 'License #1234567 — expires Dec 2026',
    },
    {
        id: 'face',
        title: 'Face Verification',
        desc: 'Quick selfie to confirm your identity',
        icon: Shield,
        status: 'in_review' as Status,
        detail: 'Under review — usually within 24 hours',
    },
    {
        id: 'docs',
        title: 'Supporting Documents',
        desc: 'Bank statement or utility bill (last 3 months)',
        icon: Upload,
        status: 'pending' as Status,
        detail: 'Not uploaded yet',
    },
];

type Status = 'completed' | 'in_review' | 'pending' | 'rejected';

const STATUS_META: Record<Status, { label: string; color: string; bg: string }> = {
    completed: { label: 'Completed', color: '#0ED221', bg: 'rgba(14,210,33,0.1)' },
    in_review: { label: 'In Review', color: '#F5A623', bg: 'rgba(245,166,35,0.1)' },
    pending: { label: 'Pending', color: '#999', bg: 'rgba(0,0,0,0.05)' },
    rejected: { label: 'Rejected', color: '#E31D1C', bg: 'rgba(227,29,28,0.1)' },
};

/* ── Benefit row ── */
function Benefit({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-center gap-3">
            <span style={{ fontSize: '18px' }}>{icon}</span>
            <span style={{ fontSize: '14px', color: '#050B2E', lineHeight: 1.4 }}>{text}</span>
        </div>
    );
}

export default function DuseatVerified() {
    const navigate = useNavigate();
    const completed = STEPS.filter(s => s.status === 'completed').length;
    const total = STEPS.length;
    const pct = Math.round((completed / total) * 100);

    const [expanded, setExpanded] = useState<string | null>(null);

    const overallStatus: Status =
        completed === total ? 'completed' :
            STEPS.some(s => s.status === 'in_review') ? 'in_review' : 'pending';

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
                        Duseat Verified
                    </p>
                    <div className="w-9" />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-8">

                {/* ── Hero badge card ── */}
                <div className="mx-4 mt-4 mb-4 rounded-[24px] overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #050B2E 0%, #0c1a52 100%)', boxShadow: '0 4px 20px rgba(5,11,46,0.2)' }}>

                    {/* Glow orb */}
                    <div className="absolute pointer-events-none" style={{ width: 200, height: 200, top: -50, right: -50, background: 'radial-gradient(circle, rgba(1,203,210,0.2) 0%, transparent 70%)' }} />

                    <div className="p-5 relative">
                        {/* Badge row */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-14 h-14 rounded-[16px] flex items-center justify-center"
                                style={{ background: overallStatus === 'completed' ? 'rgba(1,203,210,0.15)' : 'rgba(245,166,35,0.15)' }}>
                                {overallStatus === 'completed'
                                    ? <BadgeCheck size={28} color="#01CBD2" />
                                    : <Clock size={28} color="#F5A623" />}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p style={{ fontSize: '19px', fontWeight: 800, color: 'white' }}>
                                        {overallStatus === 'completed' ? 'Verified Agent' : 'Verification Pending'}
                                    </p>
                                </div>
                                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                                    {overallStatus === 'completed' ? 'All checks passed — you\'re trusted' : 'Complete all steps to get verified'}
                                </p>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mb-2 flex items-center justify-between">
                            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Progress</span>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#01CBD2' }}>{completed}/{total} steps</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #01CBD2, #0ED221)' }} />
                        </div>

                        {/* Benefits */}
                        {overallStatus === 'completed' && (
                            <div className="rounded-[14px] p-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                <p style={{ fontSize: '11px', fontWeight: 700, color: '#01CBD2', letterSpacing: '1px', marginBottom: '8px' }}>
                                    YOUR BENEFITS
                                </p>
                                <div className="space-y-2">
                                    <Benefit icon="✅" text="Verified badge on your profile" />
                                    <Benefit icon="⬆️" text="Priority ranking in search results" />
                                    <Benefit icon="🔒" text="Investors trust verified agents 3× more" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Steps ── */}
                <div className="mx-4 mb-4">
                    <p className="text-[#050B2E] mb-3" style={{ fontSize: '15px', fontWeight: 700 }}>Verification Steps</p>
                    <div className="space-y-2">
                        {STEPS.map((step, idx) => {
                            const meta = STATUS_META[step.status];
                            const StepIcon = step.icon;
                            const isOpen = expanded === step.id;

                            return (
                                <div key={step.id} className="bg-white rounded-[18px] overflow-hidden"
                                    style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                                    <button className="w-full flex items-center gap-3 px-4 py-4"
                                        onClick={() => setExpanded(isOpen ? null : step.id)}>
                                        {/* Step number / status */}
                                        <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
                                            style={{ background: step.status === 'completed' ? 'rgba(1,203,210,0.1)' : meta.bg }}>
                                            {step.status === 'completed'
                                                ? <Check size={18} color="#01CBD2" strokeWidth={2.5} />
                                                : step.status === 'in_review'
                                                    ? <Clock size={18} color="#F5A623" />
                                                    : step.status === 'rejected'
                                                        ? <AlertCircle size={18} color="#E31D1C" />
                                                        : <span style={{ fontSize: '13px', fontWeight: 700, color: '#CCC' }}>{idx + 1}</span>}
                                        </div>

                                        <div className="flex-1 text-left">
                                            <p style={{ fontSize: '15px', fontWeight: 600, color: '#050B2E' }}>{step.title}</p>
                                            <p style={{ fontSize: '12px', color: '#999' }}>{step.desc}</p>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="rounded-full px-2 py-0.5" style={{ fontSize: '11px', fontWeight: 600, background: meta.bg, color: meta.color }}>
                                                {meta.label}
                                            </span>
                                            <ChevronRight size={14} color="#CCC"
                                                style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                                        </div>
                                    </button>

                                    {/* Expanded detail */}
                                    {isOpen && (
                                        <div className="px-4 pb-4 border-t border-[#F8F8F8]">
                                            <div className="flex items-start gap-2 mt-3">
                                                <StepIcon size={14} color="#999" className="shrink-0 mt-0.5" />
                                                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>{step.detail}</p>
                                            </div>

                                            {step.status === 'pending' && (
                                                <button className="mt-3 w-full h-10 bg-[#01CBD2] rounded-full text-white"
                                                    style={{ fontSize: '14px', fontWeight: 600 }}>
                                                    Upload Document
                                                </button>
                                            )}
                                            {step.status === 'rejected' && (
                                                <button className="mt-3 w-full h-10 rounded-full border-2 border-[#E31D1C] flex items-center justify-center gap-1">
                                                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#E31D1C' }}>Re-submit</span>
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Info note ── */}
                <div className="mx-4 rounded-[16px] p-4 flex items-start gap-3"
                    style={{ background: '#F0FBFB', border: '1px solid rgba(1,203,210,0.2)' }}>
                    <Lock size={16} color="#01CBD2" className="shrink-0 mt-0.5" />
                    <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                        Your documents are encrypted and stored securely. Duseat only shares verification status with investors — never your actual documents.
                    </p>
                </div>
            </div>
        </div>
    );
}

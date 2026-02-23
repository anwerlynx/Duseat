import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function SplashScreen() {
    const navigate = useNavigate();
    const [phase, setPhase] = useState(0);
    // phase 0 → logo appears
    // phase 1 → tagline appears
    // phase 2 → progress bar fills
    // phase 3 → fade out → navigate

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 600);
        const t2 = setTimeout(() => setPhase(2), 1300);
        const t3 = setTimeout(() => setPhase(3), 2800);
        const t4 = setTimeout(() => navigate('/auth'), 3300);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, [navigate]);

    const BRAND = 'DUSEAT';

    return (
        <div
            className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: '#050B2E',
                opacity: phase === 3 ? 0 : 1,
                transition: 'opacity 0.5s ease',
            }}
        >
            {/* ── Animated mesh grid ── */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}>
                <defs>
                    <pattern id="sg" width="64" height="64" patternUnits="userSpaceOnUse">
                        <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.6" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sg)" />
            </svg>

            {/* ── Large background orbs ── */}
            <div className="absolute pointer-events-none" style={{ width: 500, height: 500, top: '-150px', left: '-150px', background: 'radial-gradient(circle, rgba(1,203,210,0.14) 0%, transparent 65%)', animation: 'orbA 9s ease-in-out infinite' }} />
            <div className="absolute pointer-events-none" style={{ width: 400, height: 400, bottom: '-100px', right: '-120px', background: 'radial-gradient(circle, rgba(1,203,210,0.1) 0%, transparent 65%)', animation: 'orbB 12s ease-in-out infinite' }} />

            {/* ── Small particles ── */}
            {[
                { w: 5, h: 5, t: '12%', l: '18%', delay: 0 },
                { w: 4, h: 4, t: '25%', l: '78%', delay: 1 },
                { w: 6, h: 6, t: '60%', l: '12%', delay: 2 },
                { w: 3, h: 3, t: '72%', l: '85%', delay: 0.5 },
                { w: 5, h: 5, t: '40%', l: '90%', delay: 1.5 },
                { w: 4, h: 4, t: '82%', l: '35%', delay: 2.5 },
            ].map((p, i) => (
                <div key={i} className="absolute rounded-full pointer-events-none"
                    style={{
                        width: p.w, height: p.h,
                        top: p.t, left: p.l,
                        background: '#01CBD2',
                        opacity: 0.4,
                        animation: `particle 7s ease-in-out ${p.delay}s infinite`,
                    }}
                />
            ))}

            {/* ── Center content ── */}
            <div className="relative flex flex-col items-center z-10">

                {/* Pulsing ring behind icon */}
                <div className="absolute" style={{
                    width: 130, height: 130,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(1,203,210,0.25)',
                    animation: 'ring1 2s ease-in-out infinite',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                }} />
                <div className="absolute" style={{
                    width: 170, height: 170,
                    borderRadius: '50%',
                    border: '1px solid rgba(1,203,210,0.12)',
                    animation: 'ring2 2s ease-in-out infinite 0.3s',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                }} />

                {/* Icon bubble */}
                <div
                    className="relative w-[90px] h-[90px] rounded-[28px] flex items-center justify-center mb-7"
                    style={{
                        background: 'rgba(1,203,210,0.12)',
                        border: '1.5px solid rgba(1,203,210,0.3)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 40px rgba(1,203,210,0.25)',
                        animation: phase >= 0 ? 'iconPop 0.7s cubic-bezier(0.16,1,0.3,1)' : 'none',
                    }}
                >
                    {/* Custom D-shaped icon mark */}
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path
                            d="M8 6H24C34 6 40 12 40 23C40 34 34 40 24 40H8V6Z"
                            fill="none" stroke="#01CBD2" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                        />
                        <path
                            d="M16 15H22C28 15 32 18.5 32 23C32 27.5 28 31 22 31H16V15Z"
                            fill="rgba(1,203,210,0.25)"
                        />
                        <circle cx="23" cy="23" r="3" fill="#01CBD2" />
                    </svg>
                </div>

                {/* Brand name — letters animate in one by one */}
                <div className="flex gap-[3px] mb-3">
                    {BRAND.split('').map((letter, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: '38px',
                                fontWeight: 900,
                                letterSpacing: '2px',
                                color: 'white',
                                fontFamily: "'TT Commons', sans-serif",
                                display: 'inline-block',
                                opacity: phase >= 0 ? 1 : 0,
                                transform: phase >= 0 ? 'translateY(0)' : 'translateY(12px)',
                                transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                {/* Teal underline accent */}
                <div style={{
                    width: phase >= 0 ? '60px' : '0px',
                    height: '3px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, #01CBD2, rgba(1,203,210,0.3))',
                    transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s',
                    marginBottom: '20px',
                }} />

                {/* Tagline */}
                <p style={{
                    fontSize: '13px',
                    letterSpacing: '3px',
                    fontWeight: 500,
                    color: 'rgba(1,203,210,0.6)',
                    fontFamily: "'TT Commons', sans-serif",
                    textTransform: 'uppercase',
                    opacity: phase >= 1 ? 1 : 0,
                    transform: phase >= 1 ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    marginBottom: '48px',
                }}>
                    Real Estate Marketplace
                </p>

                {/* Progress bar */}
                <div style={{ width: '120px', height: '3px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                        height: '100%',
                        borderRadius: '2px',
                        background: 'linear-gradient(90deg, #01CBD2, #0ED221)',
                        width: phase >= 2 ? '100%' : '0%',
                        transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }} />
                </div>
            </div>

            {/* ── Bottom brand stamp ── */}
            <p
                className="absolute bottom-10"
                style={{
                    fontSize: '11px',
                    letterSpacing: '1px',
                    color: 'rgba(255,255,255,0.15)',
                    fontFamily: "'TT Commons', sans-serif",
                    opacity: phase >= 1 ? 1 : 0,
                    transition: 'opacity 0.6s ease 0.4s',
                }}
            >
                © 2026 Duseat · All rights reserved
            </p>

            <style>{`
        @keyframes orbA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(30px, 20px) scale(1.1); }
        }
        @keyframes orbB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-20px, -30px) scale(1.08); }
        }
        @keyframes particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.35; }
          50%       { transform: translateY(-18px) scale(1.4); opacity: 0.7; }
        }
        @keyframes iconPop {
          0%   { opacity: 0; transform: scale(0.4) rotate(-10deg); }
          70%  { transform: scale(1.08) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes ring1 {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.5; }
          50%       { transform: translate(-50%, -50%) scale(1.12); opacity: 0.15; }
        }
        @keyframes ring2 {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.3; }
          50%       { transform: translate(-50%, -50%) scale(1.1); opacity: 0.08; }
        }
      `}</style>
        </div>
    );
}

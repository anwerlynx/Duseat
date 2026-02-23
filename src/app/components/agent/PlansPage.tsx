import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ChevronLeft, ChevronDown, Zap, Crown, Sparkles, X, ShieldCheck } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';

type Billing = 'monthly' | 'yearly';

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Get started with the basics',
    icon: Zap,
    price: { monthly: 0, yearly: 0 },
    badge: null as string | null,
    isCurrent: true,
    features: [
      'Browse all investor requests',
      'Up to 3 offers per month',
      'Basic profile listing',
      'Standard response time',
      'In-app messaging',
    ],
    notIncluded: [
      'Featured profile in search',
      'AI-powered suggestions',
      'Priority support',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    tagline: 'For growing agents closing more deals',
    icon: Sparkles,
    price: { monthly: 199, yearly: 1599 },
    badge: 'Most Popular' as string | null,
    isCurrent: false,
    features: [
      'Unlimited offer submissions',
      'Featured profile in search',
      'Priority request matching',
      'Advanced analytics dashboard',
      'AI-powered offer suggestions',
      'Priority support (24h response)',
      'Deal completion tools',
    ],
    notIncluded: [],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'For top performers — dominate the market',
    icon: Crown,
    price: { monthly: 499, yearly: 3999 },
    badge: 'Best Value' as string | null,
    isCurrent: false,
    features: [
      'Everything in Plus',
      'Top placement in all searches',
      'Dedicated account manager',
      'Exclusive off-plan lead access',
      'Custom branding on offers',
      'White-glove onboarding',
      'Priority deal routing',
      'Monthly performance review',
    ],
    notIncluded: [],
  },
];

export default function PlansPage() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState<Billing>('monthly');
  const [expanded, setExpanded] = useState<string>('plus');
  const [confirmPlan, setConfirmPlan] = useState<typeof PLANS[0] | null>(null);

  const handleGetPlan = (plan: typeof PLANS[0]) => {
    if (plan.id === 'free') return;
    setConfirmPlan(plan);
  };

  const getPrice = (plan: typeof PLANS[0]) => {
    const p = billing === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12);
    if (p === 0) return 0;
    return p;
  };

  const savePct = (plan: typeof PLANS[0]) => {
    if (!plan.price.monthly) return 0;
    return Math.round(((plan.price.monthly * 12 - plan.price.yearly) / (plan.price.monthly * 12)) * 100);
  };

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
            Subscription Plans
          </p>
          <div className="w-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6">

        {/* ── Hero Banner ── */}
        <div className="mt-4 mb-5">
          <div
            className="rounded-[20px] p-5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #050B2E 0%, #0c1a52 100%)',
              boxShadow: '0 4px 20px rgba(5,11,46,0.2)',
            }}
          >
            {/* Teal orb */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(1,203,210,0.3) 0%, transparent 70%)' }}
            />
            <p className="text-white mb-1 relative" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3 }}>
              Unlock your{' '}
              <span style={{ color: '#01CBD2' }}>full potential</span>
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              More offers · More leads · More deals closed
            </p>

            {/* Trust chips */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {['🎁 1 month free trial', '↩️ Cancel anytime'].map(chip => (
                <div
                  key={chip}
                  className="rounded-full px-3 py-1"
                  style={{ background: 'rgba(1,203,210,0.15)', border: '1px solid rgba(1,203,210,0.3)' }}
                >
                  <span style={{ fontSize: '11px', color: '#01CBD2', fontWeight: 500 }}>{chip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Billing Toggle ── */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>
            Billing cycle
          </p>
          <div
            className="flex p-1 rounded-full"
            style={{ background: '#F0F0F0' }}
          >
            {(['monthly', 'yearly'] as Billing[]).map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className="relative px-5 py-1.5 rounded-full transition-all"
                style={{
                  background: billing === b ? 'white' : 'transparent',
                  boxShadow: billing === b ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: billing === b ? 700 : 400, color: billing === b ? '#050B2E' : '#999' }}>
                  {b === 'monthly' ? 'Monthly' : 'Yearly'}
                </span>
                {b === 'yearly' && (
                  <span
                    className="absolute -top-2.5 -right-1 rounded-full px-1.5 py-0.5"
                    style={{ fontSize: '8px', fontWeight: 800, background: '#01CBD2', color: 'white' }}
                  >
                    -33%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Plan Accordion ── */}
        <div className="space-y-3">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const isOpen = expanded === plan.id;
            const price = getPrice(plan);
            const pct = savePct(plan);
            const isFree = plan.id === 'free';
            const isPremium = plan.id === 'premium';

            return (
              <div
                key={plan.id}
                className="bg-white rounded-[20px] overflow-hidden"
                style={{
                  boxShadow: isOpen
                    ? '0 4px 20px rgba(1,203,210,0.12)'
                    : '0 1px 6px rgba(0,0,0,0.06)',
                  border: isOpen
                    ? '1.5px solid rgba(1,203,210,0.35)'
                    : '1.5px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* ── Collapsed Header Row ── */}
                <button
                  className="w-full flex items-center px-4 py-4 text-left"
                  onClick={() => setExpanded(isOpen ? '' : plan.id)}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center mr-3 shrink-0"
                    style={{
                      background: isOpen
                        ? 'rgba(1,203,210,0.1)'
                        : '#F8F8F8',
                    }}
                  >
                    <Icon
                      size={18}
                      color={isOpen ? '#01CBD2' : '#999'}
                    />
                  </div>

                  {/* Name + tagline */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#050B2E',
                        }}
                      >
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span
                          className="rounded-full px-2 py-0.5"
                          style={{
                            fontSize: '9px',
                            fontWeight: 800,
                            background: plan.id === 'premium' ? 'rgba(245,166,35,0.12)' : 'rgba(1,203,210,0.1)',
                            color: plan.id === 'premium' ? '#F5A623' : '#01CBD2',
                            letterSpacing: '0.3px',
                          }}
                        >
                          {plan.badge.toUpperCase()}
                        </span>
                      )}
                      {plan.isCurrent && (
                        <span
                          className="rounded-full px-2 py-0.5"
                          style={{ fontSize: '9px', fontWeight: 700, background: '#F0F0F0', color: '#999' }}
                        >
                          CURRENT
                        </span>
                      )}
                    </div>
                    {!isOpen && (
                      <p style={{ fontSize: '12px', color: '#999', marginTop: '1px' }}>
                        {plan.tagline}
                      </p>
                    )}
                  </div>

                  {/* Price (when collapsed) + chevron */}
                  <div className="flex items-center gap-2 shrink-0">
                    {!isOpen && (
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#050B2E' }}>
                        {isFree ? 'Free' : `${price} AED`}
                        {!isFree && (
                          <span style={{ fontSize: '11px', fontWeight: 400, color: '#999' }}>/mo</span>
                        )}
                      </span>
                    )}
                    <div
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                      }}
                    >
                      <ChevronDown size={16} color={isOpen ? '#01CBD2' : '#CCC'} />
                    </div>
                  </div>
                </button>

                {/* ── Expanded Content ── */}
                {isOpen && (
                  <div className="px-4 pb-5">
                    {/* Price Card */}
                    <div
                      className="rounded-[16px] p-4 mb-4"
                      style={{
                        background: isFree
                          ? '#F8F8F8'
                          : isPremium
                            ? 'linear-gradient(135deg, #050B2E 0%, #0c1a52 100%)'
                            : 'linear-gradient(135deg, #F0FBFB 0%, #E6FAFA 100%)',
                      }}
                    >
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span
                              style={{
                                fontSize: '40px',
                                fontWeight: 900,
                                letterSpacing: '-1.5px',
                                lineHeight: 1,
                                color: isFree ? '#CCC' : isPremium ? '#01CBD2' : '#050B2E',
                              }}
                            >
                              {isFree ? 'Free' : price}
                            </span>
                            {!isFree && (
                              <div className="mb-1">
                                <span style={{ fontSize: '14px', color: isPremium ? 'rgba(255,255,255,0.5)' : '#999' }}>
                                  {' '}AED
                                </span>
                                <span style={{ fontSize: '12px', color: isPremium ? 'rgba(255,255,255,0.4)' : '#999' }}>
                                  /month
                                </span>
                              </div>
                            )}
                          </div>
                          {!isFree && billing === 'yearly' && (
                            <p style={{ fontSize: '11px', color: isPremium ? 'rgba(255,255,255,0.35)' : '#999', marginTop: '2px' }}>
                              {plan.price.yearly} AED billed annually
                            </p>
                          )}
                          {!isFree && billing === 'monthly' && (
                            <p style={{ fontSize: '11px', color: isPremium ? 'rgba(255,255,255,0.35)' : '#999', marginTop: '2px' }}>
                              Save {pct}% with yearly billing
                            </p>
                          )}
                        </div>
                        {!isFree && billing === 'yearly' && (
                          <div
                            className="rounded-full px-3 py-1.5"
                            style={{ background: 'rgba(1,203,210,0.15)', border: '1px solid rgba(1,203,210,0.25)' }}
                          >
                            <p style={{ fontSize: '12px', fontWeight: 700, color: '#01CBD2' }}>
                              −{pct}%
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#F0F0F0] mb-4" />

                    {/* Features */}
                    <div className="space-y-2.5 mb-2">
                      {plan.features.map(f => (
                        <div key={f} className="flex items-start gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: 'rgba(1,203,210,0.1)' }}
                          >
                            <Check size={11} color="#01CBD2" strokeWidth={3} />
                          </div>
                          <span style={{ fontSize: '14px', color: '#050B2E', lineHeight: 1.4 }}>
                            {f}
                          </span>
                        </div>
                      ))}

                      {/* Not included */}
                      {plan.notIncluded.map(f => (
                        <div key={f} className="flex items-start gap-3 opacity-40">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: '#F0F0F0' }}
                          >
                            <X size={9} color="#999" strokeWidth={3} />
                          </div>
                          <span style={{ fontSize: '14px', color: '#999', lineHeight: 1.4, textDecoration: 'line-through' }}>
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#F0F0F0] my-4" />

                    {/* CTA */}
                    <button
                      onClick={() => handleGetPlan(plan)}
                      className="w-full h-12 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                      style={{
                        background: isFree
                          ? 'transparent'
                          : '#01CBD2',
                        border: isFree ? '1.5px solid #E8E8E8' : 'none',
                        boxShadow: isFree ? 'none' : '0 4px 16px rgba(1,203,210,0.35)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: isFree ? '#999' : 'white',
                        }}
                      >
                        {isFree ? 'Current Plan' : `Get ${plan.name}`}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Comparison Table ── */}
        <div className="mt-5 bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
          {/* Table header */}
          <div className="grid grid-cols-4 px-4 py-3 border-b border-[#F8F8F8]">
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#999', letterSpacing: '0.5px' }}>FEATURE</span>
            {PLANS.map(p => (
              <button
                key={p.id}
                onClick={() => setExpanded(p.id)}
                className="text-center"
              >
                <span style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: expanded === p.id ? '#01CBD2' : '#050B2E',
                }}>
                  {p.name}
                </span>
                {expanded === p.id && (
                  <div className="h-0.5 w-4 bg-[#01CBD2] rounded-full mx-auto mt-1" />
                )}
              </button>
            ))}
          </div>

          {[
            { label: 'Offers/mo', vals: ['3', '∞', '∞'] },
            { label: 'Featured', vals: [false, true, true] },
            { label: 'Analytics', vals: [false, true, true] },
            { label: 'AI Match', vals: [false, true, true] },
            { label: 'Manager', vals: [false, false, true] },
            { label: 'Off-plan', vals: [false, false, true] },
          ].map((row, ri) => (
            <div
              key={row.label}
              className="grid grid-cols-4 px-4 py-3"
              style={{ borderTop: ri > 0 ? '1px solid #F8F8F8' : undefined }}
            >
              <span style={{ fontSize: '12px', color: '#999' }}>{row.label}</span>
              {row.vals.map((v, vi) => {
                const plan = PLANS[vi];
                const isActive = expanded === plan.id;
                return (
                  <div key={vi} className="flex justify-center">
                    {typeof v === 'boolean' ? (
                      v ? (
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: isActive ? 'rgba(1,203,210,0.12)' : '#F0F0F0' }}
                        >
                          <Check size={10} color={isActive ? '#01CBD2' : '#999'} strokeWidth={3} />
                        </div>
                      ) : (
                        <span style={{ fontSize: '14px', color: '#E0E0E0' }}>—</span>
                      )
                    ) : (
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: isActive ? '#01CBD2' : '#050B2E',
                      }}>
                        {v}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <p className="text-center mt-4 text-[#CCC]" style={{ fontSize: '12px', lineHeight: 1.7 }}>
          Cancel anytime · No hidden fees · Prices exclude VAT
        </p>
      </div>

      <BottomNav userType="agent" />

      {/* ── Confirm Subscribe Bottom Sheet ── */}
      {confirmPlan && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setConfirmPlan(null)} />
          <div className="relative bg-white rounded-t-[28px] px-5 pb-8 pt-4">
            {/* Handle */}
            <div className="w-10 h-1 bg-[#E8E8E8] rounded-full mx-auto mb-4" />

            {/* Close */}
            <button
              onClick={() => setConfirmPlan(null)}
              className="absolute top-4 right-5 w-8 h-8 bg-[#F0F0F0] rounded-full flex items-center justify-center"
            >
              <X size={14} color="#999" />
            </button>

            {/* Plan header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                style={{ background: confirmPlan.id === 'premium' ? 'rgba(245,166,35,0.1)' : 'rgba(1,203,210,0.1)' }}
              >
                <confirmPlan.icon
                  size={22}
                  color={confirmPlan.id === 'premium' ? '#F5A623' : '#01CBD2'}
                />
              </div>
              <div>
                <p style={{ fontSize: '20px', fontWeight: 800, color: '#050B2E' }}>
                  {confirmPlan.name} Plan
                </p>
                <p style={{ fontSize: '13px', color: '#999' }}>{confirmPlan.tagline}</p>
              </div>
            </div>

            {/* Price summary */}
            <div
              className="rounded-[16px] p-4 mb-4 flex items-center justify-between"
              style={{ background: '#F8F8F8' }}
            >
              <div>
                <p style={{ fontSize: '13px', color: '#999' }}>Billed {billing}</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span style={{ fontSize: '28px', fontWeight: 900, color: '#050B2E', letterSpacing: '-1px' }}>
                    {billing === 'monthly' ? confirmPlan.price.monthly : confirmPlan.price.yearly}
                  </span>
                  <span style={{ fontSize: '13px', color: '#999' }}>AED</span>
                </div>
              </div>
              {billing === 'yearly' && (
                <div
                  className="rounded-full px-3 py-1.5"
                  style={{ background: 'rgba(1,203,210,0.1)' }}
                >
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#01CBD2' }}>
                    Save {savePct(confirmPlan)}%
                  </p>
                </div>
              )}
            </div>

            {/* Features preview */}
            <div className="space-y-2 mb-5">
              {confirmPlan.features.slice(0, 4).map(f => (
                <div key={f} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[rgba(1,203,210,0.1)] flex items-center justify-center shrink-0">
                    <Check size={11} color="#01CBD2" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '13px', color: '#050B2E' }}>{f}</span>
                </div>
              ))}
              {confirmPlan.features.length > 4 && (
                <p style={{ fontSize: '12px', color: '#999', paddingLeft: '28px' }}>
                  +{confirmPlan.features.length - 4} more features
                </p>
              )}
            </div>

            {/* Security note */}
            <div
              className="rounded-[12px] p-3 mb-5 flex items-center gap-2"
              style={{ background: '#F0FBFB', border: '1px solid rgba(1,203,210,0.2)' }}
            >
              <ShieldCheck size={14} color="#01CBD2" className="shrink-0" />
              <p style={{ fontSize: '11px', color: '#666' }}>
                Secured payment · Cancel anytime · No hidden fees
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                setConfirmPlan(null);
                navigate(`/agent/payment/${confirmPlan.id}/${billing}`);
              }}
              className="w-full h-13 rounded-full bg-[#01CBD2] flex items-center justify-center gap-2"
              style={{ height: '52px', boxShadow: '0 4px 16px rgba(1,203,210,0.35)' }}
            >
              <span style={{ fontSize: '16px', fontWeight: 700, color: 'white' }}>
                Continue to Payment →
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

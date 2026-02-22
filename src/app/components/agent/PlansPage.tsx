import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ChevronLeft, Zap, Crown, Sparkles } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';

type Billing = 'monthly' | 'yearly';

interface Plan {
  id: string;
  name: string;
  icon: typeof Zap;
  iconBg: string;
  price: { monthly: number; yearly: number };
  badge?: string;
  badgeBg?: string;
  description: string;
  features: string[];
  cta: string;
  ctaBg: string;
  ctaText: string;
  cardBg: string;
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    icon: Zap,
    iconBg: '#F0F0F0',
    price: { monthly: 0, yearly: 0 },
    description: 'Get started with the basics',
    features: [
      'Browse investor requests',
      'Up to 3 offers per month',
      'Basic profile listing',
      'Standard response time',
      'In-app messaging',
    ],
    cta: 'Current Plan',
    ctaBg: '#F0F0F0',
    ctaText: '#666',
    cardBg: '#FFFFFF',
  },
  {
    id: 'plus',
    name: 'Plus',
    icon: Sparkles,
    iconBg: '#CCFDFF',
    price: { monthly: 199, yearly: 1599 },
    badge: 'Most Popular',
    badgeBg: '#01CBD2',
    description: 'For growing agents closing more deals',
    features: [
      'Unlimited offer submissions',
      'Featured profile in search',
      'Priority request matching',
      'Advanced analytics dashboard',
      'AI-powered offer suggestions',
      'Priority support (24h response)',
      'Deal completion tools',
    ],
    cta: 'Upgrade to Plus',
    ctaBg: '#01CBD2',
    ctaText: '#FFFFFF',
    cardBg: '#FFFFFF',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Crown,
    iconBg: '#050B2E',
    price: { monthly: 499, yearly: 3999 },
    badge: 'Best Value',
    badgeBg: '#F5A623',
    description: 'For top performers — dominate the market',
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
    cta: 'Upgrade to Premium',
    ctaBg: '#050B2E',
    ctaText: '#FFFFFF',
    cardBg: '#050B2E',
  },
];

export default function PlansPage() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState<Billing>('monthly');
  const [selected, setSelected] = useState('plus');

  const formatPrice = (plan: Plan) => {
    const price = billing === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12);
    if (price === 0) return 'Free';
    return `${price} AED`;
  };

  const savingsPercent = (plan: Plan) => {
    if (plan.price.monthly === 0) return 0;
    const monthlyTotal = plan.price.monthly * 12;
    const savings = ((monthlyTotal - plan.price.yearly) / monthlyTotal) * 100;
    return Math.round(savings);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="bg-white shrink-0 border-b border-[#F0F0F0]">
        <StatusBar />
        <div className="flex items-center px-4 h-14">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
            style={{ boxShadow: 'inset 0px -1px 4px 0px #00a2a8, inset 0px 4px 4px 0px rgba(255,255,255,0.25)' }}
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            Subscription Plans
          </p>
          <div className="w-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Headline */}
        <div className="text-center px-6 pt-5 pb-4">
          <p className="text-[#050B2E]" style={{ fontSize: '24px', fontWeight: 700, lineHeight: 1.3 }}>
            Choose your plan
          </p>
          <p className="text-[#999] mt-1" style={{ fontSize: '14px' }}>
            Unlock more visibility, leads, and tools
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#F0F0F0] rounded-full p-1 flex gap-1">
            {(['monthly', 'yearly'] as Billing[]).map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`rounded-full px-5 py-2 transition-all ${
                  billing === b ? 'bg-white' : ''
                }`}
                style={{ boxShadow: billing === b ? '0 1px 4px rgba(0,0,0,0.1)' : undefined }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: billing === b ? 600 : 400,
                    color: billing === b ? '#050B2E' : '#999',
                  }}
                >
                  {b.charAt(0).toUpperCase() + b.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {billing === 'yearly' && (
          <div className="flex justify-center mb-4">
            <div className="bg-[#F0FBFB] border border-[#01CBD2] rounded-full px-4 py-1.5">
              <span className="text-[#01CBD2]" style={{ fontSize: '13px', fontWeight: 600 }}>
                💰 Save up to 33% with yearly billing
              </span>
            </div>
          </div>
        )}

        {/* Plan cards */}
        <div className="px-4 space-y-4">
          {PLANS.map(plan => {
            const Icon = plan.icon;
            const isPremium = plan.id === 'premium';
            const isSelected = selected === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                className={`rounded-[20px] overflow-hidden cursor-pointer transition-all ${
                  isSelected ? 'ring-2 ring-[#01CBD2]' : ''
                }`}
                style={{
                  background: isPremium ? '#050B2E' : '#FFFFFF',
                  boxShadow: isSelected
                    ? '0 4px 20px rgba(1,203,210,0.25)'
                    : '0 2px 10px rgba(0,0,0,0.08)',
                }}
              >
                <div className="p-5">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                        style={{ background: isPremium ? 'rgba(255,255,255,0.1)' : plan.iconBg }}
                      >
                        <Icon size={24} color={isPremium ? '#01CBD2' : isPremium ? '#050B2E' : '#333'} />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: isPremium ? '#FFFFFF' : '#050B2E',
                          }}
                        >
                          {plan.name}
                        </p>
                        <p
                          style={{
                            fontSize: '12px',
                            color: isPremium ? 'rgba(255,255,255,0.6)' : '#999',
                          }}
                        >
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    {plan.badge && (
                      <span
                        className="rounded-full px-3 py-1"
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          background: plan.badgeBg,
                          color: 'white',
                        }}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span
                        style={{
                          fontSize: plan.price.monthly === 0 ? '28px' : '32px',
                          fontWeight: 800,
                          color: isPremium ? '#01CBD2' : '#050B2E',
                        }}
                      >
                        {formatPrice(plan)}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span style={{ fontSize: '14px', color: isPremium ? 'rgba(255,255,255,0.5)' : '#999' }}>
                          /month
                        </span>
                      )}
                    </div>
                    {billing === 'yearly' && plan.price.yearly > 0 && (
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          style={{ fontSize: '12px', color: isPremium ? 'rgba(255,255,255,0.5)' : '#999' }}
                        >
                          {plan.price.yearly} AED/year
                        </span>
                        <span
                          className="bg-[#F0FBFB] text-[#01CBD2] rounded-full px-2 py-0.5"
                          style={{ fontSize: '11px', fontWeight: 600 }}
                        >
                          Save {savingsPercent(plan)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px mb-4"
                    style={{ background: isPremium ? 'rgba(255,255,255,0.1)' : '#F0F0F0' }}
                  />

                  {/* Features */}
                  <div className="space-y-2.5 mb-5">
                    {plan.features.map(feature => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: isPremium ? 'rgba(1,203,210,0.2)' : 'rgba(1,203,210,0.12)' }}
                        >
                          <Check size={11} color="#01CBD2" strokeWidth={2.5} />
                        </div>
                        <span
                          style={{
                            fontSize: '13px',
                            color: isPremium ? 'rgba(255,255,255,0.85)' : '#050B2E',
                            lineHeight: 1.4,
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <button
                    className="w-full h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: plan.id === 'free'
                        ? 'transparent'
                        : plan.id === 'plus'
                        ? '#01CBD2'
                        : '#FFFFFF',
                      border: plan.id === 'free' ? '1.5px solid #E8E8E8' : 'none',
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      if (plan.id !== 'free') {
                        // Navigate to payment or confirmation
                        navigate(-1);
                      }
                    }}
                  >
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: plan.id === 'free'
                          ? '#999'
                          : plan.id === 'plus'
                          ? '#FFFFFF'
                          : '#050B2E',
                      }}
                    >
                      {plan.cta}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#999] mt-5 px-6" style={{ fontSize: '12px', lineHeight: 1.6 }}>
          Cancel anytime. No hidden fees. Prices are exclusive of VAT.
        </p>
      </div>

      <BottomNav userType="agent" />
    </div>
  );
}

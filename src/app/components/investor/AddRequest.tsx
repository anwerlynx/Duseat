import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { StatusBar } from '../StatusBar';

interface RequestForm {
  // Step 1: Purpose
  purpose: 'Living' | 'Investment' | '';
  // Step 2: Investment Type (only for Investment)
  investmentType: 'Residential' | 'Commercial' | '';
  // Step 3: Unit Type
  unitType: 'Apartment' | 'Villa' | 'Townhouse' | 'Office' | 'Retail Shop' | 'Warehouse' | 'Other' | '';
  commercialOther: string;
  // Step 4: Bedrooms (for residential)
  bedrooms: 'Studio' | '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK' | '5 BHK' | '6 BHK' | '+7 BHK' | '';
  // Step 5: Unit Status
  unitStatus: 'Ready' | 'Offplan' | '';
  // For Ready
  budgetRange: string;
  areas: string[];
  paymentMethod: 'Cash' | 'Mortgage' | '';
  mortgageEligible: 'Yes' | 'No' | 'not sure' | '';
  // For Offplan
  paymentPlan: 'Long-term payment plan' | 'Short-term payment plan' | '';
  hasDeveloperPreference: boolean;
  selectedDevelopers: string[];
  // Final
  notes: string;
}

const AREAS = [
  'Downtown Dubai', 'Dubai Marina', 'Palm Jumeirah', 'Jumeirah Golf Estates',
  'Business Bay', 'Al Barsha', 'Jumeirah Village Circle', 'DIFC', 'Meydan',
  'Dubai Hills Estate', 'Arabian Ranches', 'Nad Al Sheba', 'The Springs',
  'Emirates Hills', 'Jumeirah Beach Residence', 'City Walk'
];

const BUDGET_RANGES = [
  '500K - 1M AED',
  '1M - 2M AED',
  '2M - 3M AED',
  '3M - 4M AED',
  '4M - 6M AED',
  '6M - 10M AED',
  '10M+ AED'
];

const DEVELOPERS = [
  'Emaar Properties',
  'Nakheel',
  'DAMAC Properties',
  'Dubai Properties',
  'Meraas',
  'Sobha Realty',
  'Aldar Properties',
  'Select Group',
  'Omniyat',
  'Azizi Developments'
];

export default function AddRequest() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<RequestForm>({
    purpose: '',
    investmentType: '',
    unitType: '',
    commercialOther: '',
    bedrooms: '',
    unitStatus: '',
    budgetRange: '',
    areas: [],
    paymentMethod: '',
    mortgageEligible: '',
    paymentPlan: '',
    hasDeveloperPreference: false,
    selectedDevelopers: [],
    notes: '',
  });

  // Determine the flow dynamically
  const getNextStep = (): number => {
    if (currentStep === 1 && form.purpose) {
      // After purpose, check if Investment
      if (form.purpose === 'Investment') return 2; // Investment Type
      else return 3; // Skip to Unit Type
    }
    if (currentStep === 2 && form.investmentType) {
      return 3; // Unit Type
    }
    if (currentStep === 3 && form.unitType) {
      // If Commercial, skip bedrooms
      if (isCommercial()) return 5; // Unit Status
      else return 4; // Bedrooms
    }
    if (currentStep === 4 && form.bedrooms) {
      return 5; // Unit Status
    }
    if (currentStep === 5 && form.unitStatus) {
      if (form.unitStatus === 'Ready') return 6; // Budget
      else return 10; // Payment Plan
    }
    if (currentStep === 6 && form.budgetRange) {
      return 7; // Areas
    }
    if (currentStep === 7 && form.areas.length > 0) {
      return 8; // Payment Method
    }
    if (currentStep === 8 && form.paymentMethod) {
      if (form.paymentMethod === 'Mortgage') return 9; // Mortgage Eligible
      else return 13; // Final Notes
    }
    if (currentStep === 9 && form.mortgageEligible) {
      return 13; // Final Notes
    }
    // Offplan flow
    if (currentStep === 10 && form.paymentPlan) {
      return 11; // Developer preference
    }
    if (currentStep === 11) {
      if (form.hasDeveloperPreference) return 12; // Developer list
      else return 13; // Final Notes
    }
    if (currentStep === 12 && form.selectedDevelopers.length > 0) {
      return 13; // Final Notes
    }
    if (currentStep === 13) {
      return 14; // Review
    }
    return currentStep + 1;
  };

  const getPrevStep = (): number => {
    if (currentStep === 2) return 1;
    if (currentStep === 3) {
      if (form.purpose === 'Investment') return 2;
      else return 1;
    }
    if (currentStep === 4) return 3;
    if (currentStep === 5) {
      if (isCommercial()) return 3;
      else return 4;
    }
    if (currentStep === 6) return 5;
    if (currentStep === 7) return 6;
    if (currentStep === 8) return 7;
    if (currentStep === 9) return 8;
    if (currentStep === 10) return 5;
    if (currentStep === 11) return 10;
    if (currentStep === 12) return 11;
    if (currentStep === 13) {
      if (form.unitStatus === 'Ready') {
        if (form.paymentMethod === 'Mortgage') return 9;
        else return 8;
      } else {
        if (form.hasDeveloperPreference) return 12;
        else return 11;
      }
    }
    if (currentStep === 14) return 13;
    return currentStep - 1;
  };

  const isCommercial = () => {
    return form.unitType === 'Office' || form.unitType === 'Retail Shop' || form.unitType === 'Warehouse' || form.unitType === 'Other';
  };

  const canContinue = (): boolean => {
    if (currentStep === 1) return !!form.purpose;
    if (currentStep === 2) return !!form.investmentType;
    if (currentStep === 3) return !!form.unitType && (form.unitType !== 'Other' || !!form.commercialOther);
    if (currentStep === 4) return !!form.bedrooms;
    if (currentStep === 5) return !!form.unitStatus;
    if (currentStep === 6) return !!form.budgetRange;
    if (currentStep === 7) return form.areas.length > 0;
    if (currentStep === 8) return !!form.paymentMethod;
    if (currentStep === 9) return !!form.mortgageEligible;
    if (currentStep === 10) return !!form.paymentPlan;
    if (currentStep === 11) return true; // Developer preference is optional
    if (currentStep === 12) return form.selectedDevelopers.length > 0 || !form.hasDeveloperPreference;
    if (currentStep === 13) return true; // Notes are optional
    return true;
  };

  const handleNext = () => {
    if (!canContinue()) return;
    const next = getNextStep();
    if (next <= 14) {
      setCurrentStep(next);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      navigate(-1);
    } else {
      setCurrentStep(getPrevStep());
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => navigate('/investor/my-requests'), 2500);
  };

  const toggleArea = (area: string) => {
    setForm(f => ({
      ...f,
      areas: f.areas.includes(area) ? f.areas.filter(a => a !== area) : [...f.areas, area],
    }));
  };

  const toggleDeveloper = (dev: string) => {
    setForm(f => ({
      ...f,
      selectedDevelopers: f.selectedDevelopers.includes(dev)
        ? f.selectedDevelopers.filter(d => d !== dev)
        : [...f.selectedDevelopers, dev],
    }));
  };

  const generateSummary = (): string => {
    let summary = `I'm looking for a ${form.unitStatus.toLowerCase()} `;
    if (form.bedrooms) summary += `${form.bedrooms} `;
    summary += `${form.unitType} for ${form.purpose.toLowerCase()} `;
    if (form.areas.length > 0) {
      summary += `in ${form.areas.join(', ')}.`;
    } else {
      summary += 'in Dubai.';
    }
    return summary;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 bg-[#F0FBFB] rounded-full flex items-center justify-center mb-6 animate-bounce">
          <Check size={40} color="#01CBD2" strokeWidth={3} />
        </div>
        <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
          Request Published!
        </p>
        <p className="text-[#999] text-center" style={{ fontSize: '15px' }}>
          Agents will start sending you offers shortly.
        </p>
      </div>
    );
  }

  const OptionButton = ({ value, label, selected, onSelect, icon }: {
    value: string; label: string; selected: boolean; onSelect: () => void; icon?: string;
  }) => (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full h-14 rounded-[14px] flex items-center justify-between px-4 border-2 transition-all ${
        selected ? 'border-[#01CBD2] bg-[rgba(1,203,210,0.06)]' : 'border-[#E8E8E8] bg-white'
      }`}
    >
      <span style={{ fontSize: '16px', fontWeight: selected ? 600 : 400, color: selected ? '#01CBD2' : '#050B2E' }}>
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </span>
      {selected && <Check size={18} color="#01CBD2" />}
    </button>
  );

  const getTotalSteps = (): number => {
    // Approximate total steps based on selections
    let total = 1; // Purpose
    if (form.purpose === 'Investment') total++; // Investment Type
    total++; // Unit Type
    if (!isCommercial()) total++; // Bedrooms
    total++; // Unit Status
    if (form.unitStatus === 'Ready') {
      total += 4; // Budget, Areas, Payment, Mortgage (if applicable)
    } else if (form.unitStatus === 'Offplan') {
      total += 2; // Payment Plan, Developer
      if (form.hasDeveloperPreference) total++; // Developer list
    }
    total += 2; // Notes + Review
    return total;
  };

  const getStepName = (): string => {
    if (currentStep === 1) return 'Purpose';
    if (currentStep === 2) return 'Investment Type';
    if (currentStep === 3) return 'Unit Type';
    if (currentStep === 4) return 'Bedrooms';
    if (currentStep === 5) return 'Unit Status';
    if (currentStep === 6) return 'Budget';
    if (currentStep === 7) return 'Preferred Areas';
    if (currentStep === 8) return 'Payment Method';
    if (currentStep === 9) return 'Mortgage';
    if (currentStep === 10) return 'Payment Plan';
    if (currentStep === 11) return 'Developer';
    if (currentStep === 12) return 'Select Developer';
    if (currentStep === 13) return 'Additional Notes';
    if (currentStep === 14) return 'Review';
    return '';
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="shrink-0">
        <StatusBar />
        {/* Header */}
        <div className="flex items-center px-4 h-14">
          <button
            onClick={handleBack}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E8E8E8] transition-colors"
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            Add Request
          </p>
          <div className="w-9" />
        </div>

        {/* Progress */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#999]" style={{ fontSize: '13px' }}>
              {getStepName()}
            </span>
            <span className="text-[#01CBD2]" style={{ fontSize: '13px', fontWeight: 600 }}>
              {Math.round((currentStep / getTotalSteps()) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#01CBD2] rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / getTotalSteps()) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Step 1: Purpose */}
        {currentStep === 1 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              What are you looking for?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Are you buying for living or investment?
            </p>
            <div className="space-y-3">
              <OptionButton
                value="Living"
                label="For Living"
                icon="🏠"
                selected={form.purpose === 'Living'}
                onSelect={() => setForm(f => ({ ...f, purpose: 'Living' }))}
              />
              <OptionButton
                value="Investment"
                label="For Investment"
                icon="📈"
                selected={form.purpose === 'Investment'}
                onSelect={() => setForm(f => ({ ...f, purpose: 'Investment' }))}
              />
            </div>
          </div>
        )}

        {/* Step 2: Investment Type (only for Investment) */}
        {currentStep === 2 && form.purpose === 'Investment' && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              What type of investment?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Select your investment category
            </p>
            <div className="space-y-3">
              <OptionButton
                value="Residential"
                label="Residential"
                icon="🏘️"
                selected={form.investmentType === 'Residential'}
                onSelect={() => setForm(f => ({ ...f, investmentType: 'Residential' }))}
              />
              <OptionButton
                value="Commercial"
                label="Commercial"
                icon="🏢"
                selected={form.investmentType === 'Commercial'}
                onSelect={() => setForm(f => ({ ...f, investmentType: 'Commercial' }))}
              />
            </div>
          </div>
        )}

        {/* Step 3: Unit Type */}
        {currentStep === 3 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              What's your preferred unit type?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Select the type of property
            </p>
            <div className="space-y-3">
              {form.investmentType === 'Commercial' || (form.purpose === 'Investment' && form.investmentType === 'Commercial') ? (
                <>
                  <OptionButton
                    value="Office"
                    label="Office"
                    icon="🏢"
                    selected={form.unitType === 'Office'}
                    onSelect={() => setForm(f => ({ ...f, unitType: 'Office' }))}
                  />
                  <OptionButton
                    value="Retail Shop"
                    label="Retail Shop"
                    icon="🏪"
                    selected={form.unitType === 'Retail Shop'}
                    onSelect={() => setForm(f => ({ ...f, unitType: 'Retail Shop' }))}
                  />
                  <OptionButton
                    value="Warehouse"
                    label="Warehouse"
                    icon="🏭"
                    selected={form.unitType === 'Warehouse'}
                    onSelect={() => setForm(f => ({ ...f, unitType: 'Warehouse' }))}
                  />
                  <OptionButton
                    value="Other"
                    label="Other"
                    icon="📦"
                    selected={form.unitType === 'Other'}
                    onSelect={() => setForm(f => ({ ...f, unitType: 'Other' }))}
                  />
                  {form.unitType === 'Other' && (
                    <input
                      type="text"
                      value={form.commercialOther}
                      onChange={e => setForm(f => ({ ...f, commercialOther: e.target.value }))}
                      placeholder="Specify commercial type..."
                      className="w-full h-12 border-2 border-[#E8E8E8] rounded-[12px] px-4 outline-none text-[#050B2E] focus:border-[#01CBD2]"
                      style={{ fontSize: '15px' }}
                    />
                  )}
                </>
              ) : (
                <>
                  <OptionButton
                    value="Apartment"
                    label="Apartment"
                    icon="🏢"
                    selected={form.unitType === 'Apartment'}
                    onSelect={() => setForm(f => ({ ...f, unitType: 'Apartment' }))}
                  />
                  <OptionButton
                    value="Villa"
                    label="Villa"
                    icon="🏡"
                    selected={form.unitType === 'Villa'}
                    onSelect={() => setForm(f => ({ ...f, unitType: 'Villa' }))}
                  />
                  <OptionButton
                    value="Townhouse"
                    label="Townhouse"
                    icon="🏘️"
                    selected={form.unitType === 'Townhouse'}
                    onSelect={() => setForm(f => ({ ...f, unitType: 'Townhouse' }))}
                  />
                </>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Bedrooms (for residential) */}
        {currentStep === 4 && !isCommercial() && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              How many bedrooms?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Select the number of bedrooms
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Studio', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK', '+7 BHK'].map(br => (
                <button
                  key={br}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, bedrooms: br as any }))}
                  className={`h-14 rounded-[14px] border-2 transition-all ${
                    form.bedrooms === br ? 'border-[#01CBD2] bg-[rgba(1,203,210,0.06)]' : 'border-[#E8E8E8]'
                  }`}
                >
                  <span style={{
                    fontSize: '15px',
                    fontWeight: form.bedrooms === br ? 700 : 400,
                    color: form.bedrooms === br ? '#01CBD2' : '#050B2E',
                  }}>
                    {br}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Unit Status */}
        {currentStep === 5 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              How do you prefer it?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Unit status preference
            </p>
            <div className="space-y-3">
              <OptionButton
                value="Ready"
                label="Ready to move"
                icon="✅"
                selected={form.unitStatus === 'Ready'}
                onSelect={() => setForm(f => ({ ...f, unitStatus: 'Ready' }))}
              />
              <OptionButton
                value="Offplan"
                label="Off-plan"
                icon="🏗️"
                selected={form.unitStatus === 'Offplan'}
                onSelect={() => setForm(f => ({ ...f, unitStatus: 'Offplan' }))}
              />
            </div>
          </div>
        )}

        {/* Step 6: Budget Range (Ready) */}
        {currentStep === 6 && form.unitStatus === 'Ready' && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              What's your budget range?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Select your budget range
            </p>
            <div className="space-y-3">
              {BUDGET_RANGES.map(range => (
                <OptionButton
                  key={range}
                  value={range}
                  label={range}
                  selected={form.budgetRange === range}
                  onSelect={() => setForm(f => ({ ...f, budgetRange: range }))}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 7: Preferred Areas (Ready) */}
        {currentStep === 7 && form.unitStatus === 'Ready' && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              What's your preferred area?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Select one or more areas (you can select multiple)
            </p>
            <div className="flex flex-wrap gap-2">
              {AREAS.map(area => (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleArea(area)}
                  className={`px-4 py-2.5 rounded-full border-2 transition-all ${
                    form.areas.includes(area)
                      ? 'border-[#01CBD2] bg-[#01CBD2] text-white'
                      : 'border-[#E8E8E8] text-[#050B2E]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: form.areas.includes(area) ? 600 : 400 }}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 8: Payment Method (Ready) */}
        {currentStep === 8 && form.unitStatus === 'Ready' && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              How are you willing to pay?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Select your payment method
            </p>
            <div className="space-y-3">
              <OptionButton
                value="Cash"
                label="Cash"
                icon="💵"
                selected={form.paymentMethod === 'Cash'}
                onSelect={() => setForm(f => ({ ...f, paymentMethod: 'Cash' }))}
              />
              <OptionButton
                value="Mortgage"
                label="Mortgage"
                icon="🏦"
                selected={form.paymentMethod === 'Mortgage'}
                onSelect={() => setForm(f => ({ ...f, paymentMethod: 'Mortgage' }))}
              />
            </div>
          </div>
        )}

        {/* Step 9: Mortgage Eligibility (Ready + Mortgage) */}
        {currentStep === 9 && form.paymentMethod === 'Mortgage' && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Are you eligible for a mortgage?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Let agents know your mortgage status
            </p>
            <div className="space-y-3">
              <OptionButton
                value="Yes"
                label="Yes, I am eligible"
                icon="✅"
                selected={form.mortgageEligible === 'Yes'}
                onSelect={() => setForm(f => ({ ...f, mortgageEligible: 'Yes' }))}
              />
              <OptionButton
                value="No"
                label="No, not yet"
                icon="❌"
                selected={form.mortgageEligible === 'No'}
                onSelect={() => setForm(f => ({ ...f, mortgageEligible: 'No' }))}
              />
              <OptionButton
                value="not sure"
                label="Not sure"
                icon="🤔"
                selected={form.mortgageEligible === 'not sure'}
                onSelect={() => setForm(f => ({ ...f, mortgageEligible: 'not sure' }))}
              />
            </div>
          </div>
        )}

        {/* Step 10: Payment Plan (Offplan) */}
        {currentStep === 10 && form.unitStatus === 'Offplan' && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              What's your preferred payment plan?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Choose your payment plan preference
            </p>
            <div className="space-y-3">
              <OptionButton
                value="Long-term payment plan"
                label="Long-term payment plan"
                icon="📅"
                selected={form.paymentPlan === 'Long-term payment plan'}
                onSelect={() => setForm(f => ({ ...f, paymentPlan: 'Long-term payment plan' }))}
              />
              <OptionButton
                value="Short-term payment plan"
                label="Short-term payment plan"
                icon="⚡"
                selected={form.paymentPlan === 'Short-term payment plan'}
                onSelect={() => setForm(f => ({ ...f, paymentPlan: 'Short-term payment plan' }))}
              />
            </div>
          </div>
        )}

        {/* Step 11: Developer Preference (Offplan) */}
        {currentStep === 11 && form.unitStatus === 'Offplan' && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Do you have a specific developer in mind?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              This helps agents match you better
            </p>
            <div className="space-y-3">
              <OptionButton
                value="Yes"
                label="Yes, I have preferences"
                icon="✅"
                selected={form.hasDeveloperPreference === true}
                onSelect={() => setForm(f => ({ ...f, hasDeveloperPreference: true }))}
              />
              <OptionButton
                value="No"
                label="No, open to all"
                icon="🌐"
                selected={form.hasDeveloperPreference === false}
                onSelect={() => setForm(f => ({ ...f, hasDeveloperPreference: false }))}
              />
            </div>
          </div>
        )}

        {/* Step 12: Select Developers (Offplan + Has Preference) */}
        {currentStep === 12 && form.hasDeveloperPreference && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Select your preferred developers
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              You can select multiple
            </p>
            <div className="flex flex-wrap gap-2">
              {DEVELOPERS.map(dev => (
                <button
                  key={dev}
                  type="button"
                  onClick={() => toggleDeveloper(dev)}
                  className={`px-4 py-2.5 rounded-full border-2 transition-all ${
                    form.selectedDevelopers.includes(dev)
                      ? 'border-[#01CBD2] bg-[#01CBD2] text-white'
                      : 'border-[#E8E8E8] text-[#050B2E]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: form.selectedDevelopers.includes(dev) ? 600 : 400 }}
                >
                  {dev}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 13: Additional Notes */}
        {currentStep === 13 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Would you like to add a note?
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Optional: Add any specific requirements
            </p>
            <textarea
              value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
              placeholder="E.g., I want to move ASAP, need a property with a garden..."
              className="w-full border-2 border-[#E8E8E8] rounded-[16px] p-4 outline-none text-[#050B2E] resize-none focus:border-[#01CBD2]"
              style={{ fontSize: '15px', height: '150px', lineHeight: 1.6 }}
            />
          </div>
        )}

        {/* Step 14: Review */}
        {currentStep === 14 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Review your request
            </p>
            <p className="text-[#999] mb-5" style={{ fontSize: '15px' }}>
              This is how your request will appear to agents
            </p>

            {/* Generated Summary */}
            <div className="bg-gradient-to-br from-[#01CBD2] to-[#00a8ae] rounded-[20px] p-5 mb-4 text-white">
              <p style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.5 }}>
                {generateSummary()}
              </p>
              {form.notes && (
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p style={{ fontSize: '13px', opacity: 0.9 }}>
                    <span className="font-semibold">Note:</span> {form.notes}
                  </p>
                </div>
              )}
            </div>

            {/* Detailed breakdown */}
            <div className="bg-white rounded-[16px] overflow-hidden" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
              {[
                { label: 'Purpose', value: form.purpose },
                form.investmentType && { label: 'Investment Type', value: form.investmentType },
                { label: 'Unit Type', value: form.unitType === 'Other' ? form.commercialOther : form.unitType },
                form.bedrooms && { label: 'Bedrooms', value: form.bedrooms },
                { label: 'Unit Status', value: form.unitStatus },
                form.budgetRange && { label: 'Budget', value: form.budgetRange },
                form.areas.length > 0 && { label: 'Areas', value: form.areas.join(', ') },
                form.paymentMethod && { label: 'Payment', value: form.paymentMethod },
                form.mortgageEligible && { label: 'Mortgage Eligible', value: form.mortgageEligible },
                form.paymentPlan && { label: 'Payment Plan', value: form.paymentPlan },
                form.selectedDevelopers.length > 0 && { label: 'Developers', value: form.selectedDevelopers.join(', ') },
              ].filter(Boolean).map((item: any, i) => (
                <div
                  key={item.label}
                  className={`flex items-start justify-between px-4 py-3.5 ${i > 0 ? 'border-t border-[#F8F8F8]' : ''}`}
                >
                  <span className="text-[#999]" style={{ fontSize: '14px' }}>{item.label}</span>
                  <span className="text-[#050B2E] text-right ml-4 max-w-[180px]" style={{ fontSize: '14px', fontWeight: 500 }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom navigation */}
      <div className="shrink-0 bg-white p-4 border-t border-[#F8F8F8]">
        <button
          onClick={handleNext}
          disabled={!canContinue()}
          className={`w-full h-12 rounded-full flex items-center justify-center gap-2 transition-all ${
            canContinue() ? 'bg-[#01CBD2] hover:bg-[#00a8ae]' : 'bg-[#E8E8E8] cursor-not-allowed'
          }`}
        >
          <span className={`${canContinue() ? 'text-white' : 'text-[#A6A6A6]'}`} style={{ fontSize: '16px', fontWeight: 600 }}>
            {currentStep === 14 ? '🚀 Publish Request' : 'Continue'}
          </span>
          {currentStep < 14 && canContinue() && <ChevronRight size={18} color="white" />}
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Upload, File, Check, AlertCircle, Camera, X } from 'lucide-react';
import { StatusBar } from '../StatusBar';

interface DocumentFile {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
}

interface VerificationForm {
  reraNumber: string;
  emiratesIdFront: DocumentFile | null;
  emiratesIdBack: DocumentFile | null;
  reraCard: DocumentFile | null;
  tradeLicense: DocumentFile | null;
  profilePhoto: DocumentFile | null;
}

type VerificationStatus = 'not_started' | 'pending' | 'verified' | 'rejected';

export default function AgentVerification() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<VerificationStatus>('not_started');
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<VerificationForm>({
    reraNumber: '',
    emiratesIdFront: null,
    emiratesIdBack: null,
    reraCard: null,
    tradeLicense: null,
    profilePhoto: null,
  });

  const handleFileUpload = (field: keyof VerificationForm, fileName: string) => {
    const mockFile: DocumentFile = {
      id: Math.random().toString(36).substr(2, 9),
      name: fileName,
      size: `${Math.floor(Math.random() * 3 + 1)}.${Math.floor(Math.random() * 10)}MB`,
      uploadedAt: new Date().toISOString(),
    };
    setForm(f => ({ ...f, [field]: mockFile }));
  };

  const removeFile = (field: keyof VerificationForm) => {
    setForm(f => ({ ...f, [field]: null }));
  };

  const handleSubmit = () => {
    setStatus('pending');
    // In a real app, this would submit to backend
    setTimeout(() => {
      setStatus('verified');
    }, 3000);
  };

  const canContinue = (): boolean => {
    if (currentStep === 1) return form.reraNumber.length > 0;
    if (currentStep === 2) return !!form.emiratesIdFront && !!form.emiratesIdBack;
    if (currentStep === 3) return !!form.reraCard;
    if (currentStep === 4) return true; // Trade license is optional
    if (currentStep === 5) return !!form.profilePhoto;
    return false;
  };

  const FileUploadCard = ({ 
    label, 
    field, 
    file, 
    required = true,
    description 
  }: { 
    label: string; 
    field: keyof VerificationForm; 
    file: DocumentFile | null; 
    required?: boolean;
    description?: string;
  }) => (
    <div className="bg-white rounded-[16px] p-4 border-2 border-[#E8E8E8]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>
            {label}
          </p>
          {required && <span className="text-[#E31D1C]" style={{ fontSize: '12px' }}>*</span>}
        </div>
        {!required && (
          <span className="text-[#999] bg-[#F8F8F8] px-2 py-0.5 rounded-full" style={{ fontSize: '11px' }}>
            Optional
          </span>
        )}
      </div>
      {description && (
        <p className="text-[#999] mb-3" style={{ fontSize: '13px' }}>
          {description}
        </p>
      )}
      
      {!file ? (
        <label className="block">
          <input
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => {
              const fileName = e.target.files?.[0]?.name || 'Document.pdf';
              handleFileUpload(field, fileName);
            }}
          />
          <div className="border-2 border-dashed border-[#E8E8E8] rounded-[12px] p-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#01CBD2] hover:bg-[rgba(1,203,210,0.02)] transition-all">
            <div className="w-12 h-12 bg-[#F0FBFB] rounded-full flex items-center justify-center mb-2">
              <Upload size={20} color="#01CBD2" />
            </div>
            <p className="text-[#050B2E] mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>
              Tap to upload
            </p>
            <p className="text-[#999]" style={{ fontSize: '12px' }}>
              PDF, JPG or PNG (Max 10MB)
            </p>
          </div>
        </label>
      ) : (
        <div className="bg-[#F0FBFB] rounded-[12px] p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#01CBD2] rounded-lg flex items-center justify-center shrink-0">
            <File size={18} color="white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#050B2E] truncate" style={{ fontSize: '14px', fontWeight: 500 }}>
              {file.name}
            </p>
            <p className="text-[#999]" style={{ fontSize: '12px' }}>
              {file.size}
            </p>
          </div>
          <button
            onClick={() => removeFile(field)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 hover:bg-[#FFF0F0] transition-colors"
          >
            <X size={16} color="#E31D1C" />
          </button>
        </div>
      )}
    </div>
  );

  // Status screens
  if (status === 'pending') {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <StatusBar />
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-20 h-20 bg-[#FFF8E8] rounded-full flex items-center justify-center mb-6 animate-pulse">
            <AlertCircle size={40} color="#F5A623" />
          </div>
          <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
            Verification Pending
          </p>
          <p className="text-[#999] text-center mb-8" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Your documents are being reviewed by our team. This usually takes 24-48 hours.
          </p>
          <div className="w-full bg-[#F8F8F8] rounded-[16px] p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#01CBD2] rounded-full flex items-center justify-center shrink-0">
                <Check size={14} color="white" />
              </div>
              <div>
                <p className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  Documents Received
                </p>
                <p className="text-[#999]" style={{ fontSize: '13px' }}>
                  All required documents uploaded successfully
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#E8E8E8] rounded-full flex items-center justify-center shrink-0 animate-pulse">
                <div className="w-2 h-2 bg-[#666] rounded-full"></div>
              </div>
              <div>
                <p className="text-[#050B2E]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  Under Review
                </p>
                <p className="text-[#999]" style={{ fontSize: '13px' }}>
                  Our team is verifying your credentials
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#E8E8E8] rounded-full flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-[#E8E8E8] rounded-full"></div>
              </div>
              <div>
                <p className="text-[#666]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  Verification Complete
                </p>
                <p className="text-[#999]" style={{ fontSize: '13px' }}>
                  You'll be notified once approved
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/agent')}
            className="w-full h-12 bg-[#01CBD2] rounded-full text-white mt-8"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (status === 'verified') {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <StatusBar />
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-20 h-20 bg-[#F0FBFB] rounded-full flex items-center justify-center mb-6 animate-bounce">
            <Check size={40} color="#01CBD2" strokeWidth={3} />
          </div>
          <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
            Verification Complete!
          </p>
          <p className="text-[#999] text-center mb-8" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Your RERA credentials have been verified. You now have access to all investor requests.
          </p>
          
          {/* Benefits */}
          <div className="w-full bg-gradient-to-br from-[#01CBD2] to-[#00a8ae] rounded-[20px] p-5 mb-6 text-white">
            <p className="mb-3" style={{ fontSize: '16px', fontWeight: 700 }}>
              🎉 Verified Agent Benefits
            </p>
            <div className="space-y-2">
              {[
                'Access to premium investor requests',
                'Verified badge on your profile',
                'Higher trust from investors',
                'Priority in search results'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} />
                  <span style={{ fontSize: '13px' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/agent')}
            className="w-full h-12 bg-[#01CBD2] rounded-full text-white"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            Start Browsing Requests
          </button>
        </div>
      </div>
    );
  }

  if (status === 'rejected') {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <StatusBar />
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-20 h-20 bg-[#FFF0F0] rounded-full flex items-center justify-center mb-6">
            <X size={40} color="#E31D1C" strokeWidth={3} />
          </div>
          <p className="text-[#050B2E] text-center mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
            Verification Failed
          </p>
          <p className="text-[#999] text-center mb-6" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            We couldn't verify your documents. Please review the issues below and try again.
          </p>
          
          <div className="w-full bg-[#FFF0F0] border border-[#E31D1C] rounded-[16px] p-4 mb-6">
            <p className="text-[#E31D1C] mb-2" style={{ fontSize: '14px', fontWeight: 600 }}>
              Issues Found:
            </p>
            <ul className="space-y-1 text-[#666]" style={{ fontSize: '13px' }}>
              <li>• RERA number doesn't match the card</li>
              <li>• Emirates ID image is unclear</li>
            </ul>
          </div>

          <button
            onClick={() => setStatus('not_started')}
            className="w-full h-12 bg-[#01CBD2] rounded-full text-white"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Main verification flow
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="shrink-0">
        <StatusBar />
        {/* Header */}
        <div className="flex items-center px-4 h-14">
          <button
            onClick={() => currentStep === 1 ? navigate(-1) : setCurrentStep(s => s - 1)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E8E8E8] transition-colors"
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <p className="flex-1 text-center text-[#050B2E]" style={{ fontSize: '20px', fontWeight: 600 }}>
            Agent Verification
          </p>
          <div className="w-9" />
        </div>

        {/* Progress */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#999]" style={{ fontSize: '13px' }}>
              Step {currentStep} of 5
            </span>
            <span className="text-[#01CBD2]" style={{ fontSize: '13px', fontWeight: 600 }}>
              {Math.round((currentStep / 5) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#01CBD2] rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Step 1: RERA Number */}
        {currentStep === 1 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Enter your RERA number
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              We'll verify your registration with Dubai Land Department
            </p>
            
            <div className="bg-[#F0FBFB] border border-[#01CBD2] rounded-[16px] p-4 mb-6">
              <div className="flex gap-3">
                <AlertCircle size={18} color="#01CBD2" className="shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#050B2E] mb-1" style={{ fontSize: '13px', fontWeight: 600 }}>
                    Why do we need this?
                  </p>
                  <p className="text-[#666]" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                    All agents on Duseat must be RERA-certified to ensure investor safety and maintain platform integrity.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[#050B2E] mb-2" style={{ fontSize: '14px', fontWeight: 500 }}>
                RERA Registration Number
              </label>
              <input
                type="text"
                value={form.reraNumber}
                onChange={e => setForm(f => ({ ...f, reraNumber: e.target.value }))}
                placeholder="Enter your RERA number"
                className="w-full h-12 border-2 border-[#E8E8E8] rounded-[12px] px-4 outline-none text-[#050B2E] focus:border-[#01CBD2]"
                style={{ fontSize: '15px' }}
              />
              <p className="text-[#999] mt-2" style={{ fontSize: '12px' }}>
                Example: 12345 or BRN-12345
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Emirates ID */}
        {currentStep === 2 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Upload your Emirates ID
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Please upload both sides of your Emirates ID
            </p>
            
            <div className="space-y-4">
              <FileUploadCard
                label="Emirates ID - Front"
                field="emiratesIdFront"
                file={form.emiratesIdFront}
                description="Clear photo of the front side"
              />
              <FileUploadCard
                label="Emirates ID - Back"
                field="emiratesIdBack"
                file={form.emiratesIdBack}
                description="Clear photo of the back side"
              />
            </div>

            <div className="bg-[#FFF8E8] rounded-[12px] p-3 mt-4">
              <p className="text-[#666]" style={{ fontSize: '12px' }}>
                💡 <span className="font-semibold">Tip:</span> Make sure all text is clearly readable and there's no glare
              </p>
            </div>
          </div>
        )}

        {/* Step 3: RERA Card */}
        {currentStep === 3 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Upload your RERA card
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Your official RERA registration certificate
            </p>
            
            <FileUploadCard
              label="RERA Registration Card"
              field="reraCard"
              file={form.reraCard}
              description="Your official RERA certificate or card"
            />

            <div className="bg-[#F0FBFB] rounded-[16px] p-4 mt-4">
              <p className="text-[#050B2E] mb-2" style={{ fontSize: '13px', fontWeight: 600 }}>
                📄 What is a RERA card?
              </p>
              <p className="text-[#666]" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                Your RERA card is the official certificate from the Real Estate Regulatory Agency (RERA) proving you're a licensed real estate broker in Dubai.
              </p>
            </div>
          </div>
        )}

        {/* Step 4: Trade License (Optional) */}
        {currentStep === 4 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Trade License
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              Optional: Upload your company's trade license
            </p>
            
            <FileUploadCard
              label="Trade License"
              field="tradeLicense"
              file={form.tradeLicense}
              required={false}
              description="If you operate under a registered company"
            />

            <div className="bg-[#F8F8F8] rounded-[12px] p-4 mt-4">
              <p className="text-[#666]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                <span className="font-semibold">Optional but recommended:</span> Adding your trade license gives investors more confidence and can help you stand out.
              </p>
            </div>
          </div>
        )}

        {/* Step 5: Profile Photo */}
        {currentStep === 5 && (
          <div>
            <p className="text-[#050B2E] mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
              Add a profile photo
            </p>
            <p className="text-[#999] mb-6" style={{ fontSize: '15px' }}>
              A professional photo helps build trust with investors
            </p>
            
            {!form.profilePhoto ? (
              <label className="block">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const fileName = e.target.files?.[0]?.name || 'Profile.jpg';
                    handleFileUpload('profilePhoto', fileName);
                  }}
                />
                <div className="border-2 border-dashed border-[#E8E8E8] rounded-[20px] p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#01CBD2] hover:bg-[rgba(1,203,210,0.02)] transition-all">
                  <div className="w-24 h-24 bg-[#F0FBFB] rounded-full flex items-center justify-center mb-4">
                    <Camera size={32} color="#01CBD2" />
                  </div>
                  <p className="text-[#050B2E] mb-1" style={{ fontSize: '15px', fontWeight: 600 }}>
                    Upload Photo
                  </p>
                  <p className="text-[#999] text-center" style={{ fontSize: '13px' }}>
                    Tap to select a professional photo
                  </p>
                </div>
              </label>
            ) : (
              <div className="bg-[#F0FBFB] rounded-[20px] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#01CBD2] rounded-full flex items-center justify-center shrink-0">
                    <Check size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Photo uploaded
                    </p>
                    <p className="text-[#999]" style={{ fontSize: '13px' }}>
                      {form.profilePhoto.name}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFile('profilePhoto')}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-[#FFF0F0] transition-colors"
                  >
                    <X size={18} color="#E31D1C" />
                  </button>
                </div>
              </div>
            )}

            <div className="bg-[#FFF8E8] rounded-[12px] p-3 mt-4">
              <p className="text-[#666]" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                💡 <span className="font-semibold">Tips:</span> Use a clear, professional headshot with good lighting. Avoid group photos or selfies.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom navigation */}
      <div className="shrink-0 bg-white p-4 border-t border-[#F8F8F8]">
        <button
          onClick={() => {
            if (currentStep < 5 && canContinue()) {
              setCurrentStep(s => s + 1);
            } else if (currentStep === 5) {
              handleSubmit();
            }
          }}
          disabled={!canContinue() && currentStep !== 4}
          className={`w-full h-12 rounded-full flex items-center justify-center gap-2 transition-all ${
            (canContinue() || currentStep === 4) ? 'bg-[#01CBD2] hover:bg-[#00a8ae]' : 'bg-[#E8E8E8] cursor-not-allowed'
          }`}
        >
          <span className={`${(canContinue() || currentStep === 4) ? 'text-white' : 'text-[#A6A6A6]'}`} style={{ fontSize: '16px', fontWeight: 600 }}>
            {currentStep === 5 ? '✅ Submit for Verification' : currentStep === 4 ? 'Continue' : 'Continue'}
          </span>
        </button>
        {currentStep === 4 && (
          <button
            onClick={() => setCurrentStep(5)}
            className="w-full mt-2 text-[#01CBD2]"
            style={{ fontSize: '14px' }}
          >
            Skip (Continue without trade license)
          </button>
        )}
      </div>
    </div>
  );
}

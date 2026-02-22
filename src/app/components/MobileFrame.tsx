import { ReactNode } from 'react';

export function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#e8eaed] flex items-center justify-center p-4">
      <div
        className="relative bg-white overflow-hidden"
        style={{
          width: '393px',
          height: '852px',
          borderRadius: '48px',
          boxShadow: '0 0 0 8px #1a1a1a, 0 30px 60px rgba(0,0,0,0.4)',
          flexShrink: 0,
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a1a1a] z-50"
          style={{ width: '120px', height: '34px', borderRadius: '0 0 20px 20px' }}
        />
        {/* Screen content */}
        <div
          className="absolute inset-0 overflow-hidden flex flex-col"
          style={{ borderRadius: '48px' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

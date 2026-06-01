import React from 'react';
import { Copy } from 'lucide-react';

const HeroRight: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-8 transition-colors duration-500">
      {/* Soft Ambient Glowing Orb */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-[800px] h-[800px] bg-brand-green/60 dark:bg-brand-green/40 rounded-full blur-[120px] transition-colors duration-500"></div>
      </div>
      {/* Decorative Wavy Lines (Bottom Right) */}
      <div className="absolute bottom-12 right-12 opacity-40">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10" stroke="currentColor" className="text-text-primary" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M0 20 Q10 10 20 20 T40 20 T60 20 T80 20" stroke="currentColor" className="text-text-primary" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M0 30 Q10 20 20 30 T40 30 T60 30 T80 30" stroke="currentColor" className="text-text-primary" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main Illustration Container */}
      <div className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center">
        
        {/* Main Password Card */}
        <div className="relative z-10 w-[420px] h-[290px] bg-card-bg backdrop-blur-2xl border-[3px] border-card-border rounded-[24px] p-7 flex flex-col justify-between shadow-sm transition-all duration-300">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-[32px] text-text-primary tracking-tight">Google</h2>
            <div className="flex items-center gap-2 bg-icon-bg/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-card-border/50 shadow-sm transition-colors duration-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[14px] font-bold text-text-secondary tracking-tight">58 sec left</span>
            </div>
          </div>

          {/* Password Display */}
          <div className="flex flex-col gap-2 my-4">
            <div className="flex justify-between items-center bg-icon-bg/80 backdrop-blur-md border border-card-border/50 rounded-[20px] px-5 py-4 shadow-sm transition-colors duration-500">
              <span className="text-[32px] md:text-[36px] font-extrabold tracking-tight text-text-primary font-mono">wV*VrtYuin</span>
              <div className="text-text-secondary p-2.5 bg-text-secondary/5 rounded-full">
                <Copy size={20} />
              </div>
            </div>
            <div className="text-text-secondary text-[15px] pl-3 font-semibold opacity-80 tracking-tight">user@mypass.com</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroRight;

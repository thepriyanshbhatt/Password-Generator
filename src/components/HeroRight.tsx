import React from 'react';
import { Copy } from 'lucide-react';

const HeroRight: React.FC = () => {
  return (
    <div className="w-full h-full bg-brand-green relative flex items-center justify-center overflow-hidden p-8 transition-colors duration-300">
      {/* Decorative Wavy Lines (Bottom Right) */}
      <div className="absolute bottom-12 right-12 opacity-80">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10" stroke="currentColor" className="text-text-primary" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M0 20 Q10 10 20 20 T40 20 T60 20 T80 20" stroke="currentColor" className="text-text-primary" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M0 30 Q10 20 20 30 T40 30 T60 30 T80 30" stroke="currentColor" className="text-text-primary" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main Illustration Container */}
      <div className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center">
        
        {/* Main Password Card */}
        <div className="relative z-10 w-[420px] h-[280px] bg-card-bg border-[3px] border-card-border rounded-[24px] p-6 flex flex-col justify-between shadow-lg transition-colors duration-300">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[32px] text-text-primary leading-none">Google</h2>
            <div className="flex items-center gap-2 bg-icon-bg px-3 py-1.5 rounded-full border border-card-border/10 shadow-sm transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-text-secondary">58 sec left</span>
            </div>
          </div>

          {/* Password Display */}
          <div className="flex flex-col gap-1 my-4">
            <div className="flex justify-between items-center bg-icon-bg border border-card-border/10 rounded-[16px] px-4 py-2 shadow-sm transition-colors duration-300">
              <span className="text-[40px] md:text-[52px] font-extrabold tracking-wider text-text-primary">wV*VrtYuin</span>
              <button className="text-text-secondary hover:text-text-primary transition-colors">
                <Copy size={24} />
              </button>
            </div>
            <div className="text-text-secondary text-sm pl-2 font-medium opacity-80">user@mypass.com</div>
          </div>

          {/* Generate Button */}
          <button className="w-full bg-btn-bg text-btn-text h-[56px] rounded-[16px] font-semibold text-lg hover:opacity-90 transition-opacity shadow-sm">
            Generate New
          </button>
        </div>

        {/* Floating Login Widget (Top Right) */}
        <div className="absolute top-[20px] right-[-20px] md:right-0 z-20 w-[260px] h-[100px] bg-card-bg border-[3px] border-card-border rounded-xl p-3 flex flex-col gap-2 shadow-xl transition-colors duration-300">
          <div className="flex gap-1.5 mb-1">
            <div className="w-2.5 h-2.5 rounded-full bg-text-secondary opacity-30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-text-secondary opacity-30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-text-secondary opacity-30"></div>
          </div>
          <div className="font-bold text-text-primary text-sm">Login</div>
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="w-full h-2 bg-text-secondary opacity-20 rounded-full"></div>
            <div className="w-3/4 h-2 bg-text-secondary opacity-20 rounded-full"></div>
          </div>
        </div>

        {/* Floating Password Length Widget (Bottom Left) */}
        <div className="absolute bottom-[40px] left-[-10px] md:left-0 z-20 w-[280px] h-[90px] bg-card-bg border-[3px] border-card-border rounded-xl p-4 flex flex-col justify-center gap-3 shadow-xl transition-colors duration-300">
          <div className="flex justify-between items-center">
            <span className="font-bold text-text-primary">Length</span>
            <span className="font-bold text-text-primary bg-icon-bg px-2 py-0.5 rounded border border-card-border/10 transition-colors duration-300">10</span>
          </div>
          <div className="relative w-full h-2 bg-text-secondary/20 rounded-full">
            <div className="absolute top-0 left-0 h-full w-[40%] bg-brand-green-slider rounded-l-full"></div>
            <div className="absolute top-1/2 left-[40%] w-4 h-4 bg-icon-bg border-[3px] border-text-primary rounded-full -translate-y-1/2 -translate-x-1/2 shadow-sm cursor-pointer transition-colors duration-300"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroRight;

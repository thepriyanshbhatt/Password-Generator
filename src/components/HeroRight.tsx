import React from 'react';
import { Copy } from 'lucide-react';

const HeroRight: React.FC = () => {
  return (
    <div className="w-full h-full bg-brand-green relative flex items-center justify-center overflow-hidden p-8 transition-colors duration-500">
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
        <div className="relative z-10 w-[420px] h-[290px] bg-card-bg backdrop-blur-2xl border border-card-border rounded-[32px] p-7 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[28px] text-text-primary tracking-tight">Google</h2>
            <div className="flex items-center gap-2 bg-icon-bg/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-card-border/50 shadow-sm transition-colors duration-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[13px] font-semibold text-text-secondary tracking-tight">58 sec left</span>
            </div>
          </div>

          {/* Password Display */}
          <div className="flex flex-col gap-1.5 my-4">
            <div className="flex justify-between items-center bg-icon-bg/80 backdrop-blur-md border border-card-border/50 rounded-[20px] px-5 py-3 shadow-sm transition-colors duration-500 group hover:shadow-md cursor-pointer">
              <span className="text-[42px] md:text-[50px] font-bold tracking-tight text-text-primary font-mono">wV*VrtYuin</span>
              <button className="text-text-secondary hover:text-text-primary transition-colors p-2 bg-text-secondary/5 rounded-full group-hover:bg-text-secondary/10">
                <Copy size={20} />
              </button>
            </div>
            <div className="text-text-secondary text-[13px] pl-3 font-medium opacity-80 tracking-tight">user@mypass.com</div>
          </div>

          {/* Generate Button */}
          <button className="w-full bg-btn-bg text-btn-text h-[54px] rounded-[18px] font-medium text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md">
            Generate New
          </button>
        </div>

        {/* Floating Login Widget (Top Right) */}
        <div className="absolute top-[30px] right-[-10px] md:right-[10px] z-20 w-[240px] h-[110px] bg-card-bg backdrop-blur-2xl border border-card-border rounded-[24px] p-4 flex flex-col gap-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1">
          <div className="flex gap-1.5 mb-1">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10"></div>
          </div>
          <div className="font-semibold text-text-primary text-[14px] tracking-tight">Login</div>
          <div className="flex flex-col gap-2 mt-1">
            <div className="w-full h-1.5 bg-text-secondary/20 rounded-full"></div>
            <div className="w-2/3 h-1.5 bg-text-secondary/20 rounded-full"></div>
          </div>
        </div>

        {/* Floating Password Length Widget (Bottom Left) */}
        <div className="absolute bottom-[30px] left-[-20px] md:left-[-10px] z-20 w-[260px] h-[95px] bg-card-bg backdrop-blur-2xl border border-card-border rounded-[24px] p-4.5 flex flex-col justify-center gap-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1">
          <div className="flex justify-between items-center px-1">
            <span className="font-semibold text-text-primary text-[14px] tracking-tight">Length</span>
            <span className="font-semibold text-text-primary bg-icon-bg/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-card-border/50 text-[13px] transition-colors duration-500 shadow-sm">10</span>
          </div>
          <div className="relative w-full h-1.5 bg-text-secondary/20 rounded-full mx-1">
            <div className="absolute top-0 left-0 h-full w-[40%] bg-brand-green-slider rounded-l-full shadow-[0_0_8px_rgba(126,217,87,0.5)]"></div>
            <div className="absolute top-1/2 left-[40%] w-5 h-5 bg-white border border-black/10 rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_2px_4px_rgba(0,0,0,0.2)] cursor-pointer transition-colors duration-300"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroRight;

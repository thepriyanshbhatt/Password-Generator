import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroLeft: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center p-8 md:p-[80px] relative z-10 transition-colors duration-500">
      {/* Decorative Dash */}
      <div className="absolute top-12 left-8 md:top-24 md:left-[80px] w-10 h-1 bg-text-primary rounded-full opacity-80"></div>

      <div className="max-w-[520px] mx-auto md:mx-0 mt-8 md:mt-0 relative z-10">
        <div className="inline-block bg-brand-green-accent text-black font-semibold px-4 py-1.5 rounded-full text-sm mb-8 shadow-sm tracking-wide">
          #1 Password App
        </div>

        <div className="max-w-xl">
          <h1 className="text-[56px] md:text-[72px] font-extrabold text-text-primary leading-[1.1] tracking-tighter mb-6">
            Generate <br/>
            <span className="text-text-secondary">Secure Passwords</span>
          </h1>
          
          <p className="text-[20px] md:text-[22px] text-text-secondary font-medium leading-relaxed mb-10 max-w-md">
            Protect your digital life with enterprise-grade, cryptographically secure passwords in one click.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-btn-bg text-btn-text px-10 py-5 rounded-full font-bold text-[18px] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_20px_rgba(255,255,255,0.08)] flex items-center gap-3 group">
              Generate Password
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </button>
            
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[15px] font-semibold">100% Free & Secure</span>
            </div>
          </div>

          <div className="mt-16 md:mt-[100px] flex flex-col gap-1.5 text-[15px] text-text-secondary">
            <div className="text-amber-500 tracking-widest text-[16px] drop-shadow-sm">★★★★★</div>
            <div className="font-medium tracking-tight text-text-primary">2,000+ reviews</div>
            <div className="opacity-80 tracking-tight">Trusted by 750,000+ users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;

import React from 'react';
import { Shield, Lock } from 'lucide-react';

const HeroLeft: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center p-8 md:p-[80px] relative z-10 transition-colors duration-500">
      <div className="max-w-[520px] mx-auto md:mx-0 mt-8 md:mt-0 relative z-10">
        <div className="inline-block bg-brand-green-accent text-black font-bold px-5 py-2 rounded-full text-[15px] mb-8 shadow-sm tracking-wide">
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
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[15px] font-semibold">100% Free & Secure</span>
            </div>
          </div>

          <div className="mt-16 md:mt-[100px] flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-text-primary/5 dark:bg-text-primary/10 flex items-center justify-center text-text-primary">
                <Shield size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-text-primary tracking-tight">Zero-Knowledge</span>
                <span className="text-[14px] font-medium text-text-secondary">Generated locally.</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-text-primary/5 dark:bg-text-primary/10 flex items-center justify-center text-text-primary">
                <Lock size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-text-primary tracking-tight">Crypto API</span>
                <span className="text-[14px] font-medium text-text-secondary">Mathematical security.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;

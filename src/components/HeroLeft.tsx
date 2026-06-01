import React from 'react';

const HeroLeft: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center p-8 md:p-[80px] relative z-10 transition-colors duration-500">
      {/* Decorative Dash */}
      <div className="absolute top-12 left-8 md:top-24 md:left-[80px] w-10 h-1 bg-text-primary rounded-full opacity-80"></div>

      <div className="max-w-[520px] mx-auto md:mx-0 mt-8 md:mt-0 relative z-10">
        <div className="inline-block bg-brand-green-accent text-black font-semibold px-4 py-1.5 rounded-full text-sm mb-8 shadow-sm tracking-wide">
          #1 Password App
        </div>

        <h1 className="text-[52px] md:text-[76px] leading-[1.05] font-bold tracking-tighter mb-6 text-text-primary">
          Password Management <br />
          from <br />
          Anywhere
        </h1>

        <p className="text-[19px] leading-[1.6] text-text-secondary max-w-[420px] font-normal tracking-tight">
          Life is happening online. Work. Play. Family and friends. Manage your digital life securely from anywhere with powerful password generation and storage.
        </p>

        <button className="mt-10 bg-btn-bg text-btn-text rounded-full h-[56px] w-[200px] font-medium transition-all duration-300 flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.06)]">
          Generate Password
        </button>

        <div className="mt-16 md:mt-[100px] flex flex-col gap-1.5 text-[15px] text-text-secondary">
          <div className="text-amber-500 tracking-widest text-[16px] drop-shadow-sm">★★★★★</div>
          <div className="font-medium tracking-tight text-text-primary">2,000+ reviews</div>
          <div className="opacity-80 tracking-tight">Trusted by 750,000+ users</div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;

import React from 'react';

const HeroLeft: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-brand-light p-8 md:p-[80px] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Dash */}
      <div className="absolute top-12 left-8 md:top-24 md:left-[80px] w-12 h-1 bg-text-primary rounded-full"></div>

      <div className="max-w-[520px] mx-auto md:mx-0 mt-8 md:mt-0">
        <div className="inline-block bg-brand-green-accent text-black font-bold px-[18px] py-[10px] rounded-full text-sm mb-6 shadow-sm">
          #1
        </div>

        <h1 className="text-[56px] md:text-[72px] leading-[0.95] font-extrabold tracking-tight mb-6">
          Password Management<br />
          from<br />
          Anywhere
        </h1>

        <p className="text-[18px] leading-[1.8] text-text-secondary max-w-[420px]">
          Life is happening online. Work. Play. Family and friends. Manage your digital life securely from anywhere with powerful password generation and storage.
        </p>

        <button className="mt-[40px] bg-btn-bg text-btn-text rounded-full h-[56px] w-[180px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center shadow-md">
          Generate Password
        </button>

        <div className="mt-16 md:mt-[100px] flex flex-col gap-1 text-sm text-text-secondary">
          <div className="text-amber-400 tracking-widest text-lg drop-shadow-sm">★★★★★</div>
          <div className="font-medium">2,000+ reviews</div>
          <div className="text-text-secondary opacity-75">Trusted by 750,000+ users</div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;

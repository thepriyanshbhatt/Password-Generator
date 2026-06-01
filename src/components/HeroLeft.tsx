import React from 'react';

const HeroLeft: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-brand-light p-8 md:p-[80px] relative overflow-hidden">
      {/* Decorative Dash */}
      <div className="absolute top-12 left-8 md:top-24 md:left-[80px] w-12 h-1 bg-black"></div>

      <div className="max-w-[520px] mx-auto md:mx-0 mt-8 md:mt-0">
        <div className="inline-block bg-brand-green-accent text-text-primary font-bold px-[18px] py-[10px] rounded-full text-sm mb-6">
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

        <button className="mt-[40px] bg-black text-white rounded-full h-[56px] w-[180px] font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
          Generate Password
        </button>

        <div className="mt-16 md:mt-[100px] flex flex-col gap-1 text-sm text-text-secondary">
          <div className="text-yellow-400 tracking-widest text-lg">★★★★★</div>
          <div className="font-medium">2,000+ reviews</div>
          <div className="text-gray-500">Trusted by 750,000+ users</div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;

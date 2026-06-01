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
        
        {/* Removed Main Password Card per user request */}

      </div>
    </div>
  );
};

export default HeroRight;

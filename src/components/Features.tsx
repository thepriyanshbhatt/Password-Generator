import React from 'react';
import { Sparkles, UserX, Globe, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-brand-green-slider" />,
      title: "100% Free",
      description: "Generate and manage strong passwords without paying a dime. Premium features included for everyone."
    },
    {
      icon: <UserX className="w-6 h-6 text-brand-green-slider" />,
      title: "No Sign Up",
      description: "Start using MyPass instantly. We don't require an account or email to generate secure passwords."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-green-slider" />,
      title: "Use Anywhere",
      description: "Access your secure password generator on any device, from anywhere in the world."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-green-slider" />,
      title: "Zero Storage",
      description: "We don't store your passwords. Everything is generated client-side for absolute privacy and security."
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-[#0A0A0A] transition-colors duration-500 relative z-10 overflow-hidden">
      {/* Creative Merging Glowing Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green-slider to-transparent opacity-80"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-green-slider rounded-full blur-[140px] opacity-20 pointer-events-none -mt-[150px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-white tracking-tighter mb-4">
            Everything you need. <span className="text-zinc-500">Nothing you don't.</span>
          </h2>
          <p className="text-[18px] text-zinc-400 max-w-2xl mx-auto">
            MyPass is built with privacy and simplicity as the core principles. 
            Experience the most secure way to manage your digital life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[24px] bg-[#141414] border border-white/5 hover:border-brand-green-slider/30 hover:-translate-y-1 transition-all duration-300 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-[18px] font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

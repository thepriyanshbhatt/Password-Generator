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
    <section className="w-full py-24 px-8 border-t border-card-border/20 bg-brand-light transition-colors duration-500 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-text-primary tracking-tighter mb-4">
            Everything you need. <span className="text-text-secondary">Nothing you don't.</span>
          </h2>
          <p className="text-[18px] text-text-secondary max-w-2xl mx-auto">
            MyPass is built with privacy and simplicity as the core principles. 
            Experience the most secure way to manage your digital life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[24px] bg-card-bg border border-card-border/30 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-icon-bg flex items-center justify-center mb-6 border border-card-border/50 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-[18px] font-bold text-text-primary mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
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

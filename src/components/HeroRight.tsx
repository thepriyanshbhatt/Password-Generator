import React, { useState, useEffect, useCallback } from 'react';
import { Copy, Check, ShieldAlert, ShieldCheck } from 'lucide-react';

const HeroRight: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let charset = '';
    let newPassword = '';
    
    const types = [];
    if (options.uppercase) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      types.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (options.lowercase) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
      types.push('abcdefghijklmnopqrstuvwxyz');
    }
    if (options.numbers) {
      charset += '0123456789';
      types.push('0123456789');
    }
    if (options.symbols) {
      charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      types.push('!@#$%^&*()_+~`|}{[]:;?><,./-=');
    }

    if (charset.length === 0) {
      setPassword('');
      return;
    }

    const getRandomIndex = (max: number) => {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      return array[0] % max;
    };

    // Ensure at least one character from each selected type
    types.forEach(type => {
      newPassword += type[getRandomIndex(type.length)];
    });

    // Fill the rest securely
    for (let i = newPassword.length; i < length; i++) {
      newPassword += charset[getRandomIndex(charset.length)];
    }

    // Shuffle the password securely
    const passwordArray = newPassword.split('');
    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = getRandomIndex(i + 1);
      [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
    
    setPassword(passwordArray.join(''));
    setCopied(false);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleOption = (key: keyof typeof options) => {
    setOptions(prev => {
      const next = { ...prev, [key]: !prev[key] };
      // Prevent unchecking all options
      if (!Object.values(next).some(Boolean)) return prev;
      return next;
    });
  };

  const isWeak = length < 8;

  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 md:p-8 transition-colors duration-500">
      {/* Soft Ambient Glowing Orb */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-[800px] h-[800px] bg-brand-green/60 dark:bg-brand-green/40 rounded-full blur-[120px] transition-colors duration-500"></div>
      </div>
      
      {/* Main Illustration Container */}
      <div className="relative w-full max-w-[500px] flex items-center justify-center z-10">
        
        {/* Main Password Card */}
        <div className="w-full bg-card-bg backdrop-blur-2xl border-[3px] border-card-border rounded-[24px] p-6 sm:p-8 flex flex-col gap-6 shadow-xl transition-all duration-300">
          
          {/* Header & Strength */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="font-extrabold text-[24px] text-text-primary tracking-tight">Generator</h2>
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-sm transition-colors duration-500 ${isWeak ? 'bg-red-500/10 border-red-500/50 text-red-500 dark:text-red-400' : 'bg-icon-bg/80 border-card-border/50 text-brand-green-slider'}`}>
              {isWeak ? <ShieldAlert size={16} /> : <ShieldCheck size={16} />}
              <span className="text-[13px] font-bold tracking-tight">
                {isWeak ? 'IMMEDIATE FAIL' : 'EXPANDED UNICODE'}
              </span>
            </div>
          </div>

          {/* Password Display */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center bg-icon-bg/80 backdrop-blur-md border border-card-border/50 rounded-[20px] px-5 py-4 shadow-sm transition-colors duration-500 group relative overflow-hidden">
              <span className="text-[24px] sm:text-[32px] font-extrabold tracking-tight text-text-primary font-mono truncate mr-4 relative z-10">
                {password || 'Select options'}
              </span>
              <button 
                onClick={handleCopy}
                className={`p-2.5 rounded-full transition-colors flex-shrink-0 relative z-10 ${copied ? 'bg-brand-green-slider/20 text-brand-green-slider' : 'bg-text-secondary/5 text-text-secondary hover:text-text-primary hover:bg-text-secondary/10'}`}
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            {/* Warning Message if Weak */}
            {isWeak && (
              <div className="text-[13px] font-semibold text-red-500 dark:text-red-400 tracking-tight pl-2">
                * Exponential Brute Force Risk (&lt; 8 chars)
              </div>
            )}
          </div>

          {/* Length Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-[15px] text-text-primary">Password Length</span>
              <span className="font-extrabold text-[18px] text-brand-green-slider">{length}</span>
            </div>
            <input 
              type="range" 
              min="6" 
              max="24" 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-text-secondary/20 rounded-lg appearance-none cursor-pointer accent-brand-green-slider"
            />
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {[
              { id: 'uppercase', label: 'Uppercase [A-Z]' },
              { id: 'lowercase', label: 'Lowercase [a-z]' },
              { id: 'numbers', label: 'Numbers [0-9]' },
              { id: 'symbols', label: 'Symbols [!@#]' },
            ].map(opt => (
              <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors flex-shrink-0 ${options[opt.id as keyof typeof options] ? 'bg-brand-green-slider border-brand-green-slider' : 'border-text-secondary/30 group-hover:border-text-secondary/50'}`}>
                  {options[opt.id as keyof typeof options] && <Check size={14} className="text-[#08110D] dark:text-black font-bold" />}
                </div>
                <span className="text-[14px] font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                  {opt.label}
                </span>
                {/* Hidden native checkbox to handle standard form behavior if needed, but we manage state manually */}
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={options[opt.id as keyof typeof options]}
                  onChange={() => toggleOption(opt.id as keyof typeof options)}
                />
              </label>
            ))}
          </div>

          {/* Generate Button */}
          <button 
            onClick={generatePassword}
            className="mt-4 w-full bg-btn-bg text-btn-text h-[54px] rounded-[18px] font-bold text-[18px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
          >
            Generate Password
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroRight;

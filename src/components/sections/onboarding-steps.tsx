import React from 'react';
import { User, CreditCard, Key, Mail, Github } from 'lucide-react';

const OnboardingSteps = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Step 1: Create an account */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h3 className="text-[14px] font-medium text-foreground leading-snug">Signup</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Create an account to get started. You can set up an org for your team later.
            </p>
          </div>
          <div className="relative h-[160px] w-full bg-background rounded-xl flex items-center justify-center p-6 select-none overflow-hidden">
            <div className="w-full max-w-[240px] space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <User size={16} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="h-1.5 w-24 bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 w-16 bg-slate-50 rounded-full"></div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-md border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </div>
                <div className="h-8 w-8 rounded-md border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                  <Github size={16} className="text-slate-900" />
                </div>
                <div className="h-8 w-8 rounded-md border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                  <img src="/images/icons/Anthropic.svg" alt="" className="w-4 h-4 grayscale" />
                </div>
                <div className="h-8 w-8 rounded-md border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                   <Mail size={16} className="text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Buy credits */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h3 className="text-[14px] font-medium text-foreground leading-snug">Buy credits</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Credits can be used with any model or provider.
            </p>
          </div>
          <div className="relative h-[160px] w-full bg-background rounded-xl flex items-center justify-center p-6 select-none overflow-hidden">
            <div className="w-full max-w-[240px] space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                  <CreditCard size={16} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-10 bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 w-6 bg-slate-50 rounded-full"></div>
                  <div className="h-1.5 w-12 bg-slate-50 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[12px] tabular-nums">
                  <span className="text-slate-400">Apr 1</span>
                  <div className="flex-1 mx-2 border-b border-dotted border-slate-100 h-2"></div>
                  <span className="font-medium text-foreground">$99</span>
                </div>
                <div className="flex items-center justify-between text-[12px] tabular-nums">
                  <span className="text-slate-400">Mar 30</span>
                  <div className="flex-1 mx-2 border-b border-dotted border-slate-100 h-2"></div>
                  <span className="font-medium text-foreground">$10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Get your API key */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h3 className="text-[14px] font-medium text-foreground leading-snug">Get your API key</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Create an API key and start making requests. Fully OpenAI compatible.
            </p>
          </div>
          <div className="relative h-[160px] w-full bg-background rounded-xl flex items-center justify-center p-6 select-none overflow-hidden">
             <div className="w-full max-w-[240px] space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <Key size={12} strokeWidth={2.5} />
                </div>
                <div className="h-6 px-3 flex items-center bg-slate-50 rounded-md">
                  <span className="text-[10px] font-medium text-slate-500 tracking-wider">OPENROUTER_API_KEY</span>
                </div>
              </div>
              <div className="h-7 w-full border border-slate-100 rounded-md bg-white flex items-center px-3 shadow-sm overflow-hidden">
                <span className="text-slate-800 text-[10px] flex items-center gap-0.5 mt-0.5">
                  {[...Array(24)].map((_, i) => (
                    <span key={i} className="leading-none">●</span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
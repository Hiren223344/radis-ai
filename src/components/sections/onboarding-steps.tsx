import React from 'react';
import { User, CreditCard, Key } from 'lucide-react';

const OnboardingSteps = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
        {/* Step 1: Signup */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] font-semibold text-[#0F172A] leading-tight">Signup</h3>
            <p className="text-[14px] text-[#475569] leading-[1.6]">
              Create an account to get started. You can set up an org for your team later.
            </p>
          </div>
          
          <div className="relative mt-4">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 shadow-sm w-full max-w-[280px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-full bg-[#f1f5f9] flex items-center justify-center">
                  <User size={16} className="text-[#64748B]" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-3/4"></div>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="size-8 rounded-md border border-[#E2E8F0] flex items-center justify-center hover:bg-slate-50 cursor-pointer transition-colors">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="size-4 opacity-70" />
                </div>
                <div className="size-8 rounded-md border border-[#E2E8F0] flex items-center justify-center hover:bg-slate-50 cursor-pointer transition-colors">
                  <img src="https://github.com/favicon.ico" alt="Github" className="size-4 opacity-70" />
                </div>
                <div className="size-8 rounded-md border border-[#E2E8F0] flex items-center justify-center hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="size-4 bg-[#6366f1] rounded-sm opacity-20"></div>
                </div>
                <div className="size-8 rounded-md border border-[#E2E8F0] flex items-center justify-center hover:bg-slate-50 cursor-pointer transition-colors text-[#64748B]">
                  <svg size={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Buy credits */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] font-semibold text-[#0F172A] leading-tight">Buy credits</h3>
            <p className="text-[14px] text-[#475569] leading-[1.6]">
              Credits can be used with any model or provider.
            </p>
          </div>

          <div className="relative mt-4">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 shadow-sm w-full max-w-[280px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-full bg-[#f1f5f9] flex items-center justify-center">
                  <CreditCard size={16} className="text-[#64748B]" />
                </div>
                <div className="flex gap-1.5 flex-1">
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-8"></div>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-8"></div>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-8"></div>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-4"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#94a3b8]">Apr 1</span>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-12 ml-2"></div>
                  <span className="font-medium text-[#0F172A] ml-auto">$99</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#94a3b8]">Mar 30</span>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full w-16 ml-2"></div>
                  <span className="font-medium text-[#0F172A] ml-auto">$10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Get your API key */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] font-semibold text-[#0F172A] leading-tight">Get your API key</h3>
            <p className="text-[14px] text-[#475569] leading-[1.6]">
              Create an API key and start making requests. Fully OpenAI compatible.
            </p>
          </div>

          <div className="relative mt-4">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 shadow-sm w-full max-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-8 rounded-full bg-[#f1f5f9] flex items-center justify-center">
                  <Key size={16} className="text-[#6366f1]" />
                </div>
                <div className="bg-[#f8fafc] px-2.5 py-1.5 rounded text-[11px] font-mono text-[#64748B] flex-1 truncate">
                  OPENROUTER_API_KEY
                </div>
              </div>
              <div className="bg-[#f8fafc] px-3 py-2 rounded text-[14px] font-mono text-[#0F172A] tracking-widest break-all">
                sk-or-v1-••••••••••••
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
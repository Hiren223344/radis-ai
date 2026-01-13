'use client';

import React from 'react';
import Image from 'next/image';
import { User, CreditCard, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const OnboardingSteps = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Step 1: Signup */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h3 className="text-[18px] font-semibold text-[#0F172A] leading-tight">Signup</h3>
              <p className="text-[14px] text-[#64748B] leading-relaxed">
                Create an account to get started. You can set up an org for your team later.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative mt-4 flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-[#E2E8F0] shadow-sm h-[200px] overflow-hidden group hover:border-[#5F6FFF] transition-colors duration-200"
            >
              <div className="w-full max-w-[200px] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 rounded-full bg-[#F1F5F9]">
                    <User className="size-4 text-[#64748B]" />
                  </div>
                  <div className="h-2 w-24 bg-[#F1F5F9] rounded-full" />
                </div>
                <div className="flex gap-2 justify-center pt-2">
                  {[
                    { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com/&size=256", alt: "Google" },
                    { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com/&size=256", alt: "Github" },
                    { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://discord.com/&size=256", alt: "Discord" }
                  ].map((social, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center size-8 rounded-md border border-[#E2E8F0] bg-white cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                    >
                      <img src={social.src} alt={social.alt} className="size-4" />
                    </motion.div>
                  ))}
                  <div className="flex items-center justify-center size-8 rounded-md border border-[#E2E8F0] bg-white">
                    <div className="size-4 bg-[#64748B] rounded-sm opacity-20" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8FAFC]/50 pointer-events-none" />
            </motion.div>
          </div>

          {/* Step 2: Buy credits */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h3 className="text-[18px] font-semibold text-[#0F172A] leading-tight">Buy credits</h3>
              <p className="text-[14px] text-[#64748B] leading-relaxed">
                Credits can be used with any model or provider.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative mt-4 flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-[#E2E8F0] shadow-sm h-[200px] overflow-hidden group hover:border-[#5F6FFF] transition-colors duration-200"
            >
              <div className="w-full max-w-[220px] space-y-4">
                <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
                  <div className="flex items-center gap-3">
                    <CreditCard className="size-4 text-[#5F6FFF]" />
                    <div className="h-2 w-16 bg-[#F1F5F9] rounded-full" />
                  </div>
                  <div className="h-2 w-8 bg-[#E2E8F0] rounded-full" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-2 w-20 bg-[#F1F5F9] rounded-full" />
                    <span className="text-[12px] font-bold text-[#0F172A]">$99</span>
                  </div>
                  <div className="flex justify-between items-center opacity-60">
                    <div className="h-2 w-24 bg-[#F1F5F9] rounded-full" />
                    <span className="text-[12px] font-medium text-[#64748B]">$10</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8FAFC]/50 pointer-events-none" />
            </motion.div>
          </div>

          {/* Step 3: Get API key */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h3 className="text-[18px] font-semibold text-[#0F172A] leading-tight">Get your API key</h3>
              <p className="text-[14px] text-[#64748B] leading-relaxed">
                Create an API key and start making requests. Fully OpenAI compatible.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative mt-4 flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-[#E2E8F0] shadow-sm h-[200px] overflow-hidden group hover:border-[#5F6FFF] transition-colors duration-200"
            >
              <div className="w-full max-w-[240px] space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] cursor-pointer"
                >
                  <Key className="size-4 text-[#5F6FFF]" />
                  <span className="text-[11px] font-mono text-[#64748B] select-all">RADISON_API_KEY</span>
                </motion.div>
                <div className="bg-[#F1F5F9] h-8 w-full rounded-md flex items-center px-3 overflow-hidden">
                  <div className="flex gap-1.5 grayscale opacity-30">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div key={i} className="size-1.5 rounded-full bg-slate-900" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8FAFC]/50 pointer-events-none" />
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default OnboardingSteps;

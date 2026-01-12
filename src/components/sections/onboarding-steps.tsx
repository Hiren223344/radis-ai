thoughtful 
import React from 'react';
import Image from 'next/image';

const OnboardingSteps = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Step 1: Signup */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex min-h-[160px] w-full items-center justify-center">
              <div className="relative w-full max-w-[280px]">
                {/* Abstract UI for Signup */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-indigo-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    </div>
                    <div className="h-2 w-24 rounded-full bg-slate-100" />
                    <div className="h-2 w-12 rounded-full bg-slate-50" />
                  </div>
                  <div className="mt-2 flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_4.png" 
                        alt="Google" 
                        width={16} 
                        height={16} 
                      />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png" 
                        alt="GitHub" 
                        width={16} 
                        height={16} 
                      />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png" 
                        alt="Meta" 
                        width={16} 
                        height={16} 
                      />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
                       <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-slate-900">Signup</h3>
              <p className="text-sm leading-relaxed text-slate-500 max-w-[300px]">
                Create an account to get started. You can set up an org for your team later.
              </p>
            </div>
          </div>

          {/* Step 2: Buy credits */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex min-h-[160px] w-full items-center justify-center">
              <div className="relative w-full max-w-[280px]">
                {/* Abstract UI for Billing */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex gap-1.5">
                      <div className="h-1.5 w-6 rounded-full bg-slate-100" />
                      <div className="h-1.5 w-8 rounded-full bg-slate-100" />
                      <div className="h-1.5 w-6 rounded-full bg-slate-100" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-slate-400">Apr 1</span>
                        <div className="h-1.5 w-12 rounded-full bg-slate-50" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-900">$99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-slate-400">Mar 30</span>
                        <div className="h-1.5 w-10 rounded-full bg-slate-50" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-900">$10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-slate-900">Buy credits</h3>
              <p className="text-sm leading-relaxed text-slate-500 max-w-[300px]">
                Credits can be used with any model or provider.
              </p>
            </div>
          </div>

          {/* Step 3: Get your API key */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex min-h-[160px] w-full items-center justify-center">
              <div className="relative w-full max-w-[280px]">
                {/* Abstract UI for API Keys */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                      <div className="rounded bg-slate-50 px-2 py-1">
                        <span className="text-[10px] font-mono text-slate-400">RADISON_API_KEY</span>
                      </div>
                  </div>
                  <div className="rounded-md bg-slate-50 p-3">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                        <div key={i} className="h-1 w-1 rounded-full bg-slate-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-slate-900">Get your API key</h3>
              <p className="text-sm leading-relaxed text-slate-500 max-w-[300px]">
                Create an API key and start making requests. Fully OpenAI compatible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
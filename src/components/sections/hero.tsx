import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex-col items-center bg-background px-6 pt-0 lg:pt-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col overflow-hidden">
        <div className="flex flex-col gap-12 pb-8 lg:pb-0">
          <h1 
            style={{
              fontSize: "1.875rem",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0F172A",
            }}
            className="text-slate-12"
          >
            AI Model Rankings
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

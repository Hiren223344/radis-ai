import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: "25T",
      label: "Monthly Tokens",
      href: "/rankings",
      primary: false
    },
    {
      value: "5M+",
      label: "Global Users",
      href: null,
      primary: false
    },
    {
      value: "60+",
      label: "Active Providers",
      href: "/models",
      primary: false
    },
    {
      value: "300+",
      label: "Models",
      href: "/models",
      primary: true
    }
  ];

  return (
    <section className="w-full flex justify-center py-8 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-6 md:px-8">
        {stats.map((stat, index) => {
          const Content = (
            <div className="p-4 md:p-6 flex flex-col items-center justify-center gap-1 md:gap-2">
              <p 
                className={`text-3xl md:text-[2.25rem] font-bold leading-none tabular-nums transition-transform duration-200 group-hover:scale-110 ${
                  stat.primary ? 'text-[#6366f1]' : 'text-[#0f172a]'
                }`}
              >
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-[#64748b] font-medium uppercase tracking-tight md:normal-case md:tracking-normal">
                {stat.label}
              </p>
            </div>
          );

          const wrapperClasses = "group block rounded-xl transition-all duration-200 ease-in-out bg-white border-none hover:scale-110 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] cursor-default";

          if (stat.href) {
            return (
              <a 
                key={index} 
                href={stat.href} 
                className={`${wrapperClasses} cursor-pointer`}
              >
                {Content}
              </a>
            );
          }

          return (
            <div key={index} className={wrapperClasses}>
              {Content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
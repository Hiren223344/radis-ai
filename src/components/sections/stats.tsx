import React from 'react';

const Stats = () => {
  const stats = [
    {
      label: 'Monthly Tokens',
      value: '25T',
      href: '/rankings',
      isPrimary: false,
    },
    {
      label: 'Global Users',
      value: '5M+',
      href: null,
      isPrimary: false,
    },
    {
      label: 'Active Providers',
      value: '60+',
      href: '/models',
      isPrimary: false,
    },
    {
      label: 'Models',
      value: '300+',
      href: '/models',
      isPrimary: true,
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto w-full">
        {stats.map((stat, index) => {
          const content = (
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p 
                  className={`text-3xl md:text-[36px] font-bold leading-none tracking-tight ${
                    stat.isPrimary ? 'text-[#5f6fff]' : 'text-[#0f172a]'
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-[#64748b] font-normal">
                  {stat.label}
                </p>
              </div>
            </div>
          );

          const wrapperClasses = "group/card rounded-xl transition-all duration-200 bg-white border-none hover:scale-110 cursor-default";

          if (stat.href) {
            return (
              <a 
                key={index} 
                href={stat.href} 
                className={`${wrapperClasses} cursor-pointer block`}
              >
                {content}
              </a>
            );
          }

          return (
            <div 
              key={index} 
              className={wrapperClasses}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
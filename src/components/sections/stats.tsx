import React from 'react';

const Stats = () => {
  const statsData = [
    {
      label: 'Monthly Tokens',
      value: '25T',
      href: '/rankings',
      highlight: false,
    },
    {
      label: 'Global Users',
      value: '5M+',
      href: null,
      highlight: false,
    },
    {
      label: 'Active Providers',
      value: '60+',
      href: '/models',
      highlight: false,
    },
    {
      label: 'Models',
      value: '300+',
      href: '/models',
      highlight: true,
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto w-full px-6">
        {statsData.map((stat, index) => {
          const Content = (
            <div className="group/card rounded-xl transition-all duration-200 bg-card text-foreground border-none hover:scale-110 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(0,0,0,0.05)] cursor-pointer">
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex flex-col items-center gap-1 md:gap-2 text-center">
                  <p 
                    className={`text-3xl md:text-4xl font-bold tracking-tight ${
                      stat.highlight ? 'text-[#4f46e5]' : 'text-[#020617]'
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-[#64748b] whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );

          if (stat.href) {
            return (
              <a 
                key={index} 
                href={stat.href} 
                className="decoration-none no-underline block"
              >
                {Content}
              </a>
            );
          }

          return <div key={index}>{Content}</div>;
        })}
      </div>
    </div>
  );
};

export default Stats;
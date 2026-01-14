'use client';

import React from 'react';
import { usePageTransition } from './PageTransition';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({ 
  href, 
  children, 
  className,
  onClick 
}) => {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.(e);
    navigateWithTransition(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;

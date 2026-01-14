'use client';

import React from 'react';
import { usePageTransition } from './PageTransition';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, children, className }) => {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;

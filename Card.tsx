import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white border border-[var(--wonder-gray-200)] hover:border-[var(--wonder-orange-500)] transition-colors duration-300',
    bordered: 'bg-white border-2 border-[var(--wonder-orange-500)] hover:border-[6px] transition-all duration-300',
    elevated: 'bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300'
  };

  return (
    <div className={`rounded-[var(--radius-m)] overflow-hidden ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`px-[var(--spacing-2xl)] py-[var(--spacing-xl)] border-b border-[var(--wonder-gray-200)] ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`px-[var(--spacing-2xl)] py-[var(--spacing-xl)] ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-[var(--spacing-2xl)] py-[var(--spacing-xl)] border-t border-[var(--wonder-gray-200)] ${className}`}>
      {children}
    </div>
  );
}
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({ 
  label, 
  error, 
  helperText, 
  className = '',
  id,
  ...props 
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="w-full max-w-[var(--input-max-width)]">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block mb-[var(--spacing-m)] text-[var(--wonder-gray-700)]"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full 
          min-w-[var(--input-min-width)]
          px-[var(--spacing-xl)] 
          py-[var(--spacing-l)] 
          rounded-[var(--radius-s)]
          border-2
          transition-colors
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          ${error 
            ? 'border-[var(--wonder-orange-red-500)] focus:ring-[var(--wonder-orange-red-500)]' 
            : 'border-[var(--wonder-gray-300)] focus:border-[var(--wonder-orange-500)] focus:ring-[var(--wonder-orange-500)]'
          }
          disabled:bg-[var(--wonder-gray-100)] 
          disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-[var(--spacing-xs)] text-body-small text-[var(--wonder-orange-red-500)]">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-[var(--spacing-xs)] text-body-small text-[var(--wonder-gray-500)]">
          {helperText}
        </p>
      )}
    </div>
  );
}
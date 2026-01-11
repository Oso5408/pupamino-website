'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'h-[65px] rounded-[32.5px] px-12 font-bold text-[21px] text-white tracking-[2.1px] transition-all hover:scale-105 active:scale-95';

  const variantStyles = {
    primary: 'bg-[#f26b2b] hover:bg-[#d95a1f]',
    secondary: 'bg-[#883d13] hover:bg-[#6d3110]',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ fontFamily: 'DM Sans, sans-serif' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

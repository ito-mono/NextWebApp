'use client';

import clsx from 'clsx';

import { Rounds } from '@/components/Utility/TailwindUtility';

const types = ['button', 'submit', 'reset'] as const;

const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};
const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

export type ButtonProps = {
  children?: React.ReactNode;
  type?: (typeof types)[number];
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isRounded?: boolean;
  className?: string;
  onClick?: (e: any) => void;
};

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  isRounded = true,
  className = '',
  ...props
}: ButtonProps) {
  const classNames = clsx(
    variants[variant],
    sizes[size],
    isRounded ? Rounds[size] : null,
    className,
  );

  return (
    <button type={type} className={classNames} {...props}>
      {children}
    </button>
  );
}

import clsx from 'clsx';

import { Widths, TextAligns } from '@/components/Utility/TailwindUtility';

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
} as const;

export type TextInputProps = {
  context?: string;
  width?: keyof typeof Widths;
  size?: keyof typeof sizes;
  align?: keyof typeof TextAligns;
};

export function TextInput({ width = '20', size = 'sm', align = 'left', ...props }: TextInputProps) {
  const classNames = clsx(
    'border border-gray-300 rounded-md',
    Widths[width],
    sizes[size],
    TextAligns[align],
  );

  return <input type='text' className={classNames}></input>;
}

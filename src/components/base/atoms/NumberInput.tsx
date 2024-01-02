import clsx from 'clsx';
import { Widths, Aligns } from '@/components/Utility/TailwindUtility';

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
} as const;

export type NumberInputProps = {
  label?: string;
  value: string;
  onChange: (e: any) => void;
  width?: keyof typeof Widths;
  size?: keyof typeof sizes;
  align?: keyof typeof Aligns;
};

export function NumberInput({
  label,
  width = '20',
  size = 'sm',
  align = 'left',
  ...props
}: NumberInputProps) {
  const labelClassNames = clsx('', sizes[size]);
  const inputClassNames = clsx(
    'border border-gray-300 rounded-md',
    Widths[width],
    sizes[size],
    Aligns[align],
  );

  return (
    <div>
      {label && <label className={labelClassNames}>{label}</label>}
      <input type='number' className={inputClassNames} {...props}></input>
    </div>
  );
}

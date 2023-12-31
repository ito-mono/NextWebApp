'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import clsx from 'clsx';

import { Widths, TextAligns } from '@/components/Utility/TailwindUtility';

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
} as const;
const pattern = /^\d+$/;

export type NumberInputProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  width?: keyof typeof Widths;
  size?: keyof typeof sizes;
  align?: keyof typeof TextAligns;
};

export function NumberInput({
  value,
  setValue,
  width = '20',
  size = 'sm',
  align = 'left',
  ...props
}: NumberInputProps) {
  const [localValue, setLocalValue] = useState(`${value}`);

  const classNames = clsx(
    'border border-gray-300 rounded-md',
    Widths[width],
    sizes[size],
    TextAligns[align],
  );

  return (
    <input
      type='text'
      value={localValue}
      className={classNames}
      onChange={(e) => onchange(e.target.value)}
    ></input>
  );

  function onchange(value: string) {
    console.log(+value);
    console.log(Number(value));
    console.log(pattern.test(value));
    setLocalValue(value);
  }
}

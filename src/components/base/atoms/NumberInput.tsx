import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import clsx from 'clsx';

import { Widths, TextAligns } from '@/components/Utility/TailwindUtility';

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
} as const;

export type NumberInputProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
  step?: number;
  width?: keyof typeof Widths;
  size?: keyof typeof sizes;
  align?: keyof typeof TextAligns;
};

export function NumberInput({
  value,
  setValue,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  width = '20',
  size = 'sm',
  align = 'left',
  ...props
}: NumberInputProps) {
  const inputClassNames = clsx(
    'border border-gray-300 rounded-md',
    Widths[width],
    sizes[size],
    TextAligns[align],
  );

  /* TODO: 数値型を扱う場合も type='text' にしといた方がいいらしい...が とりあえず保留 */
  return (
    <input
      type='number'
      className={inputClassNames}
      value={value > min ? value : min}
      onChange={(e) => {
        const v = parseInt(e.target.value);
        if (isNaN(v) || v <= min) {
          setValues(min, e);
        } else if (v >= max) {
          setValues(max, e);
        } else {
          setValues(v, e);
        }
      }}
      step={step}
      {...props}
    ></input>
  );

  // value と e.target.value の値を v に更新
  function setValues(v: number, e: ChangeEvent<HTMLInputElement>) {
    setValue(v);
    e.target.value = v.toString();
  }
}

'use client';

import { Dispatch, SetStateAction, useState } from 'react';

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
  width?: keyof typeof Widths;
  size?: keyof typeof sizes;
  align?: keyof typeof TextAligns;
};

export function NumberInput({
  value,
  setValue,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  width = '20',
  size = 'sm',
  align = 'right',
  ...props
}: NumberInputProps) {
  const [localValue, setLocalValue] = useState(value.toString());

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
      onChange={(e) => onchange(e.target.value)}
      className={classNames}
    ></input>
  );

  function onchange(value: string) {
    const pattern = /^\d+(\.\d+)?$/;
    const isMatch = pattern.test(value);
    const num = Number(value);

    // 数値の場合はvalueを更新
    if (isNaN(num)) return;
    else setValue(num);

    // isMatchの結果で、localValue に num か value のどちらかをセットする
    if (isMatch) setLocalValue(num.toString());
    else setLocalValue(value);
  }
}

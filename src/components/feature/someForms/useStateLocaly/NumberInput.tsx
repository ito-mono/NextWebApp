'use client';

import { ChangeEvent, FocusEvent, Dispatch, SetStateAction, useState, memo } from 'react';

import clsx from 'clsx';

import { baseInputClassNames } from '../Style';

import { Widths, TextAligns } from '@/components/Utility/TailwindUtility';

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
} as const;

export type NumberInputProps = {
  min?: number;
  max?: number;
  useComma?: boolean;
  width?: keyof typeof Widths;
  align?: keyof typeof TextAligns;
};

// memo化することで無駄なレンダリングを防ぐ
export const NumberInput = memo(function NumberInput({
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  useComma = true,
  width = '32',
  align = 'right',
  ...props
}: NumberInputProps) {
  console.log('レンダリング');

  const pattern = /^\d+(\.\d+)?$/;
  const [value, setValue] = useState(0);
  const [localValue, setLocalValue] = useState(
    useComma ? value.toLocaleString() : value.toString(),
  );

  const classNames = clsx(baseInputClassNames, Widths[width], TextAligns[align]);
  const inputEventHandlers = {
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
  };

  // コンポーネント
  return (
    <>
      <input type='text' value={localValue} {...inputEventHandlers} className={classNames}></input>
      {/* デバッグ用 
        <p>value: {value}</p>
        <p>localValue: {localValue}</p>
      */}
    </>
  );

  /* 関数定義 */
  // onChange
  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    const strValue = e.target.value;
    const numValue = Number(strValue);
    const isMatch = pattern.test(strValue);

    // 数値でない場合はreturn
    if (isNaN(numValue)) return;
    else setValue(numValue);

    // isMatchの結果で、localValue に numValue か strValue のどちらかをセットする
    if (isMatch) setLocalValue(numValue.toString());
    else setLocalValue(strValue);
  }

  // onFocus
  function onFocus(e: FocusEvent<HTMLInputElement>) {
    setLocalValue(value.toString());
  }

  // onBlur
  function onBlur(e: FocusEvent<HTMLInputElement>) {
    let numValue = Number(e.target.value);

    // 数値でない場合はreturn
    if (isNaN(numValue)) return;

    // min, max の範囲に収める
    if (numValue < min) numValue = min;
    else if (numValue > max) numValue = max;

    // 丸め込んでからセット
    setValue(numValue);
    setLocalValue(useComma ? numValue.toLocaleString() : numValue.toString());
  }
});

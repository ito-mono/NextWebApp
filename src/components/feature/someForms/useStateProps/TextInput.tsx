import { ChangeEvent, Dispatch, SetStateAction, memo } from 'react';

import clsx from 'clsx';

import { baseInputClassNames } from '../Style';

import { Widths, TextAligns } from '@/components/Utility/TailwindUtility';

export type TextInputProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  width?: keyof typeof Widths;
  align?: keyof typeof TextAligns;
};

// memo化することで無駄なレンダリングを防ぐ
export const TextInput = memo(function TextInput({
  setValue,
  width = '32',
  align = 'left',
  ...props
}: TextInputProps) {
  console.log('レンダリング');

  const classNames = clsx(baseInputClassNames, Widths[width], TextAligns[align]);

  return (
    <input type='text' onChange={(e) => onChange(e)} className={classNames} {...props}></input>
  );

  // onChange
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
});

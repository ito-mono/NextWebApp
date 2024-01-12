import { ChangeEvent, Dispatch, SetStateAction, memo, useState } from 'react';

import clsx from 'clsx';

import { baseInputClassNames } from '../Style';

import { Widths, TextAligns } from '@/components/Utility/TailwindUtility';

export type TextInputProps = {
  width?: keyof typeof Widths;
  align?: keyof typeof TextAligns;
};

// memo化することで無駄なレンダリングを防ぐ
export const TextInput = memo(function TextInput({
  width = '32',
  align = 'left',
  ...props
}: TextInputProps) {
  console.log('レンダリング');

  const [value, setValue] = useState('');
  const classNames = clsx(baseInputClassNames, Widths[width], TextAligns[align]);

  return (
    <input type='text' onChange={(e) => onChange(e)} className={classNames} {...props}></input>
  );

  // onChange
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
});

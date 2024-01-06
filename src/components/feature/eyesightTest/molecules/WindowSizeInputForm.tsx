'use client';

import { Dispatch, SetStateAction } from 'react';

import { InputForm, InputFormProps } from '@/components/base/molecules';

export type WindowSizeInputFormProps = {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  inch: number;
  setInch: Dispatch<SetStateAction<number>>;
};

export function WindowSizeInputForm({
  width,
  setWidth,
  height,
  setHeight,
  inch,
  setInch,
}: WindowSizeInputFormProps) {
  const inputFormProps: InputFormProps = {
    direction: 'row',
    formItemsProps: [
      {
        label: '幅',
        value: width,
        setValue: setWidth,
      },
      {
        label: '高さ',
        value: height,
        setValue: setHeight,
      },
      {
        label: 'インチ',
        value: inch,
        setValue: setInch,
      },
    ],
  };

  return <InputForm {...inputFormProps}></InputForm>;
}

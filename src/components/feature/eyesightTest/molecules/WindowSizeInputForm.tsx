'use client';

import { useState } from 'react';

import { InputForm, InputFormProps } from '@/components/base/molecules';

export type WindowSizeInputFormProps = {};

export function WindowSizeInputForm() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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
    ],
  };

  return <InputForm {...inputFormProps}></InputForm>;
}

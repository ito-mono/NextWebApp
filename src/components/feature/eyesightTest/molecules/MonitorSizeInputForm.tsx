'use client';

import { Monitor } from '@/components/Utility/Monitor';
import { InputForm, InputFormProps } from '@/components/base/molecules';

// 型定義
export type MonitorSizeInputFormProps = {
  monitor: Monitor;
};

// コンポーネント定義
export function MonitorSizeInputForm({ monitor, ...props }: MonitorSizeInputFormProps) {
  const inputFormProps: InputFormProps = {
    direction: 'row',
    formItemsProps: [
      {
        label: '幅',
        inputProps: {
          value: monitor.width,
          setValue: monitor.setWidth,
        },
      },
      {
        label: '高さ',
        inputProps: {
          value: monitor.height,
          setValue: monitor.setHeight,
        },
      },
      {
        label: 'インチ',
        inputProps: {
          value: monitor.inch,
          setValue: monitor.setInch,
        },
      },
    ],
  };

  return <InputForm {...inputFormProps}></InputForm>;
}

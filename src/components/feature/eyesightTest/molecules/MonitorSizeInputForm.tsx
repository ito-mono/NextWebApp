'use client';

import { Monitor, useMonitor, useMonitorReturn } from '@/components/Utility/Monitor';
import { Form, FormProps } from '@/components/feature/someForms/useStateProps';

// 型定義
export type MonitorSizeInputFormProps = {
  useMonitorReturn: useMonitorReturn;
};

// コンポーネント定義
export function MonitorSizeInputForm({ useMonitorReturn, ...props }: MonitorSizeInputFormProps) {
  const { monitor, ...setters } = useMonitorReturn;

  const inputFormProps: FormProps = {
    direction: 'row',
    formItemsProps: [
      {
        label: 'width',
        inputProps: {
          value: monitor.width,
          setValue: setters.setWidth,
        },
      },
      {
        label: 'height',
        inputProps: {
          value: monitor.height,
          setValue: setters.setHeight,
        },
      },
      {
        label: 'inch',
        inputProps: {
          value: monitor.inch,
          setValue: setters.setInch,
        },
      },
    ],
  };

  return <Form {...inputFormProps}></Form>;
}

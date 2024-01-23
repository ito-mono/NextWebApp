'use client';

import { MonitorSizeInputForm, MonitorSizeInputFormProps } from '.';

import { useMonitorReturn } from '@/components/Utility/Monitor';
import { Container, FlexItem } from '@/components/base';

export type EyesightTestHeaderProps = {
  useMonitorReturn: useMonitorReturn;
};

export function EyesightTestHeader({ ...props }: EyesightTestHeaderProps) {
  const formProps: MonitorSizeInputFormProps = { ...props };

  return (
    <header className='w-full h-auto'>
      <Container width='full' height='auto' isFlex justify='around'>
        <FlexItem>
          <h1>視力検査</h1>
        </FlexItem>

        <FlexItem>
          <MonitorSizeInputForm {...formProps}></MonitorSizeInputForm>
        </FlexItem>
      </Container>
    </header>
  );
}

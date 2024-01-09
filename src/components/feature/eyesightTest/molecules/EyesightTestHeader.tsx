'use client';

import { MonitorSizeInputForm, MonitorSizeInputFormProps } from '.';

import { Monitor } from '@/components/Utility/Monitor';
import { Container, FlexItem } from '@/components/base';

export type EyesightTestHeaderProps = {
  monitor: Monitor;
};

export function EyesightTestHeader({ monitor, ...props }: EyesightTestHeaderProps) {
  const formProps: MonitorSizeInputFormProps = {
    monitor: monitor,
  };

  return (
    <header>
      <Container isFlex width='full'>
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

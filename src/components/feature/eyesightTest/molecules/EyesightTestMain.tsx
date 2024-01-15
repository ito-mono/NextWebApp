import { EyesightTestController, EyesightTestControllerProps } from '.';

import { Monitor, useMonitor } from '@/components/Utility/Monitor';
import { Container } from '@/components/base';

export type EyesightTestMainProps = {
  monitor: Monitor;
};

export function EyesightTestMain({ ...props }: EyesightTestMainProps) {
  const controllerProps: EyesightTestControllerProps = { ...props };

  return (
    <main className='w-full h-full'>
      <Container
        width='full'
        height='full'
        isFlex
        flexDirection='col'
        justify='center'
        alignItems='center'
      >
        <EyesightTestController {...controllerProps}></EyesightTestController>
      </Container>
    </main>
  );
}

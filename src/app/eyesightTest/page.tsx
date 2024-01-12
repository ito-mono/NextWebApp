'use client';

import { useMonitor, useMonitorProps } from '@/components/Utility/Monitor';
import { Container } from '@/components/base';
import {
  EyesightTestController,
  EyesightTestControllerProps,
  EyesightTestHeader,
  EyesightTestHeaderProps,
} from '@/components/feature/eyesightTest';

export default function EyesightTest() {
  // モニター情報
  const useMonitorProps: useMonitorProps = { width: 1920, height: 1080, inch: 24.5 };
  const useMonitorReturn = useMonitor(useMonitorProps);

  // ヘッダー
  const headerProps: EyesightTestHeaderProps = {
    useMonitorReturn: useMonitorReturn,
  };

  // コントローラー
  const controllerProps: EyesightTestControllerProps = {
    monitor: useMonitorReturn.monitor,
  };

  return (
    <Container width='full' height='screen' isFlex flexDirection='col' justify='start'>
      <EyesightTestHeader {...headerProps}></EyesightTestHeader>
      <main>
        <EyesightTestController {...controllerProps}></EyesightTestController>
      </main>
    </Container>
  );
}

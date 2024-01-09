'use client';

import { useMonitor, MonitorProps } from '@/components/Utility/Monitor';
import { Container } from '@/components/base';
import {
  EyesightTestController,
  EyesightTestControllerProps,
  EyesightTestHeader,
  EyesightTestHeaderProps,
} from '@/components/feature/eyesightTest';

export default function EyesightTest() {
  // モニター情報
  const monitorProps: MonitorProps = {};
  const monitor = useMonitor(monitorProps);

  // ヘッダー
  const headerProps: EyesightTestHeaderProps = {
    monitor: monitor,
  };

  // コントローラー
  const controllerProps: EyesightTestControllerProps = {
    monitor: monitor,
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

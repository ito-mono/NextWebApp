'use client';

import { useEffect, useState } from 'react';

import { LandoltRingImage, LandoltRingImageProps, getRandomDirection } from '../';

import { Monitor } from '@/components/Utility/Monitor';
import { Button } from '@/components/base';

export type EyesightTestControllerProps = {
  monitor: Monitor;
};

export function EyesightTestController({ monitor, ...props }: EyesightTestControllerProps) {
  // ユーザーの入力を管理するための状態
  const [direction, setDirection] = useState<LandoltRingImageProps['direction']>('up');
  const [distance, setDistance] = useState<LandoltRingImageProps['distance']>(3);
  const [eyesight, setEyesight] = useState<LandoltRingImageProps['eyesight']>(0.1);

  const imageProps: LandoltRingImageProps = {
    monitor,
    direction,
    distance,
    eyesight,
    ...props,
  };

  // useEffect
  // eyesightの値が変更されたら、方向をランダムに変更する
  useEffect(() => {
    setDirection(getRandomDirection());
  }, [eyesight]);
  return (
    <>
      <LandoltRingImage {...imageProps}></LandoltRingImage>
      <Button onClick={incrementEyesight}></Button>
    </>
  );

  function incrementEyesight() {
    setEyesight((prev) => 0.5);
  }
}

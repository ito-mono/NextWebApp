'use client';

import { useState } from 'react';
import LandoltRingImage, { LandoltRingImageProps, directions } from '../atom/LandoltRingImage';
import Button from '../../../base/atoms/Button';

export default function VisionTest() {
  // ユーザーの入力を管理するための状態
  const [direction, setDirection] = useState('up');
  const [distance, setDistance] = useState(1);
  const [eyesight, setEyesight] = useState(0.1);

  function random() {
    const keys = Object.keys(directions);
    const d = keys[Math.floor(Math.random() * keys.length)];
    setDirection(d);
  }

  const props: LandoltRingImageProps = {
    windowWidth: 100,
    windowHeight: 100,
    inch: 1,
    direction: direction as LandoltRingImageProps['direction'],
    distance: 3,
    eyesight: 1,
  };

  // デバイスのスクリーンサイズ（例として固定値を使用）
  const windowWidth = 1920;
  const windowHeight = 1080;
  const inch = 24.5;

  return (
    <div>
      <LandoltRingImage {...props}></LandoltRingImage>
      <Button onClick={random}></Button>
    </div>
  );
}

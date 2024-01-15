'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { Monitor } from '@/components/Utility/Monitor';
import { mmToPx } from '@/components/Utility/Pixel';
import { Directions, Eyesights } from '@/components/feature/eyesightTest';

// propsの型定義
export type LandoltRingImageProps = {
  monitor: Monitor;
  direction: keyof typeof Directions;
  distance: number;
  eyesight: (typeof Eyesights)[number];
};

// コンポーネントの定義
export function LandoltRingImage({
  monitor,
  direction,
  distance,
  eyesight,
  ...props
}: LandoltRingImageProps) {
  const alt = 'Landolt Ring';
  const src = '/LandoltRing.png';

  const size = calcSize(eyesight, distance, monitor.dpi);
  const classNames = clsx(Directions[direction].rotateClassName);

  return (
    <Image
      alt={alt}
      src={src}
      width={size}
      height={size}
      className={classNames}
      priority
      {...props}
    ></Image>
  );
}

/* 関数定義 */
// ランドルト環のサイズを算出する関数
function calcSize(eyesight: number, distance: number, dpi: number): number {
  if (eyesight === 0) return 0;

  const size = mmToPx((7.5 / eyesight) * (distance / 5), dpi);
  return size;
}

// ランダムな方向を返す関数
export function getRandomDirection(): keyof typeof Directions {
  const keys = Object.keys(Directions) as Array<keyof typeof Directions>;
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

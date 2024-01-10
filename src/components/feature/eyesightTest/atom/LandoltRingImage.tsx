'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { Monitor } from '@/components/Utility/Monitor';
import { mmToPx } from '@/components/Utility/Pixel';

const directions = {
  up: 'rotate-0',
  upRight: 'rotate-45',
  right: 'rotate-90',
  downRight: 'rotate-135',
  down: 'rotate-180',
  downLeft: 'rotate-225',
  left: 'rotate-270',
  upLeft: 'rotate-315',
} as const;

const distances = [1, 2, 3, 4, 5] as const;

// prettier-ignore
const eyesights = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
  1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
] as const;

// propsの型定義
export type LandoltRingImageProps = {
  monitor: Monitor;
  direction: keyof typeof directions;
  distance: (typeof distances)[number];
  eyesight: (typeof eyesights)[number];
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

  console.log(monitor);
  const size = calcSize(eyesight, distance, monitor.dpi);

  const classNames = clsx(directions[direction]);

  return (
    <Image alt={alt} src={src} width={size} height={size} className={classNames} {...props}></Image>
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
export function getRandomDirection(): keyof typeof directions {
  const keys = Object.keys(directions) as Array<keyof typeof directions>;
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

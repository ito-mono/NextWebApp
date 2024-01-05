'use client';

import Image from 'next/image';
import clsx from 'clsx';

export const directions = {
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
  windowWidth?: number;
  windowHeight?: number;
  inch?: number;
  direction: keyof typeof directions;
  distance: (typeof distances)[number];
  eyesight: (typeof eyesights)[number];
};

// コンポーネントの定義
export function LandoltRingImage({
  windowWidth = 1920,
  windowHeight = 1080,
  inch = 24.5,
  direction,
  distance,
  eyesight,
  ...props
}: LandoltRingImageProps) {
  const alt = 'Landolt Ring';
  const src = '/LandoltRing.png';

  // ランドルト環のサイズを計算
  const dpi = calcDpi(windowWidth, windowHeight, inch);
  let size = (7.5 / eyesight) * (distance / 5);
  size = mmToPx(size, dpi);

  const classNames = clsx(directions[direction]);

  return (
    <Image alt={alt} src={src} width={size} height={size} className={classNames} {...props}></Image>
  );
}

/* 以下より関数定義 */

// DPIを算出する関数
function calcDpi(width: number, height: number, inch: number) {
  if (inch === 0) return 0;

  // 対角解像度を計算（ピタゴラスの定理）
  var diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

  var dpi = diagonal / inch;
  return dpi;
}

// mmをpxに変換する関数
function mmToPx(mm: number, dpi: number) {
  var mmPerInch = 25.4; // 1インチあたりのミリメートル
  return (mm / mmPerInch) * dpi;
}

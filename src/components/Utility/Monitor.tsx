/**
 * モニター用のカスタムフック
 *
 * Usage:
 *  const monitorProps: MonitorProps = { width: 1920, height: 1080, inch: 24 };
 *  const monitor = useMonitor(monitorProps);
 *  Or
 *  const monitor = useMonitor({});
 */
'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export type Monitor = {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  inch: number;
  setInch: Dispatch<SetStateAction<number>>;

  dpi: number;
};

export type MonitorProps = {
  width?: number;
  height?: number;
  inch?: number;
};

export function useMonitor({ width = 0, height = 0, inch = 0, ...props }: MonitorProps): Monitor {
  const widthState = useState(width);
  const heightState = useState(height);
  const inchState = useState(inch);

  const [dpi, setDpi] = useState(0);

  const monitor: Monitor = {
    width: widthState[0],
    setWidth: widthState[1],
    height: heightState[0],
    setHeight: heightState[1],
    inch: inchState[0],
    setInch: inchState[1],

    dpi: dpi,
  };

  // width, height, inchのいずれかが変更されたらdpiを再計算する
  useEffect(() => {
    setDpi(calcDpi(monitor.width, monitor.height, monitor.inch));
  }, [monitor.width, monitor.height, monitor.inch]);

  return monitor;
}

/* 関数定義 */
// DPIを算出する関数
function calcDpi(width: number, height: number, inch: number) {
  if (inch === 0) return 0;

  // 対角解像度を計算（ピタゴラスの定理）
  var diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

  var dpi = diagonal / inch;
  return dpi;
}

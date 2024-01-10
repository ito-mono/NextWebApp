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

// Monitorの型定義
export type Monitor = {
  width: number;
  height: number;
  inch: number;

  dpi: number;
};

// useMonitorの返り値
export type useMonitorReturn = {
  monitor: Monitor;
  setMonitor: Dispatch<SetStateAction<Monitor>>;
};

// useMonitorの引数
export type useMonitorProps = {
  width?: number;
  height?: number;
  inch?: number;
};

// デフォルト値
const defaultMonitorProps = {
  width: 1920,
  height: 1080,
  inch: 24,

  dpi: 0,
};

/*  */
// function useMonitor(): useMonitorReturn;
// function useMonitor(props: useMonitorProps): useMonitorReturn;

export function useMonitor(props?: useMonitorProps): useMonitorReturn {
  const [monitor, setMonitor] = useState<Monitor>({ ...defaultMonitorProps, ...props });

  // width, height, inchのいずれかが変更されたらdpiを再計算する
  useEffect(() => {
    setMonitor((prev) => ({
      ...prev,
      dpi: calcDpi(prev.width, prev.height, prev.inch),
    }));
  }, [monitor.width, monitor.height, monitor.inch]);

  const useMonitorReturn: useMonitorReturn = { monitor: monitor, setMonitor };

  return useMonitorReturn;
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

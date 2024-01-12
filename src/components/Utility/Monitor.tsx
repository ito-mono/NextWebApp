/**
 * モニター用のカスタムフック
 *
 * Usage:
 *  const useMonitorProps: useMonitorProps = { width: 1920, height: 1080, inch: 24 };
 *  const useMonitorReturn = useMonitor(usemonitorProps);
 *  Or
 *  const useMonitorReturn = useMonitor();
 *  Or
 *  const [ monitor, ...setters ] = useMonitor();
 *
 *  etc...
 */
'use client';

import { useEffect, useState } from 'react';

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

  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setInch: (inch: number) => void;
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

// MonitorのStateを管理するカスタムフック
export function useMonitor(props?: useMonitorProps): useMonitorReturn {
  // dpiを計算してからuseStateを行う
  const mergedProps = { ...defaultMonitorProps, ...props };
  const dpi = calcDpi(mergedProps.width, mergedProps.height, mergedProps.inch);
  const [monitor, setMonitor] = useState<Monitor>({ ...mergedProps, dpi });

  // width, height, inchのいずれかが変更されたらdpiを再計算する
  useEffect(() => {
    const dpi = calcDpi(monitor.width, monitor.height, monitor.inch);
    setMonitor((prev) => ({ ...prev, dpi }));
  }, [monitor.width, monitor.height, monitor.inch]);

  // 返り値
  const useMonitorReturn: useMonitorReturn = { monitor, setWidth, setHeight, setInch };
  return useMonitorReturn;

  // セッター
  function setWidth(width: number) {
    setMonitor((prev) => ({ ...prev, width }));
  }
  function setHeight(height: number) {
    setMonitor((prev) => ({ ...prev, height }));
  }
  function setInch(inch: number) {
    setMonitor((prev) => ({ ...prev, inch }));
  }
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

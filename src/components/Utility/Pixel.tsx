// mmをpxに変換する関数
export function mmToPx(mm: number, dpi: number) {
  var mmPerInch = 25.4; // 1インチあたりのミリメートル
  return (mm / mmPerInch) * dpi;
}

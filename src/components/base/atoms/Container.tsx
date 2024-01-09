import clsx from 'clsx';

import {
  AlignItems,
  FlexDirections,
  Heights,
  Justifies,
  Widths,
} from '@/components/Utility/TailwindUtility';

export type ContainerProps = {
  children?: React.ReactNode;
  width?: keyof typeof Widths;
  height?: keyof typeof Widths;
  isFlex?: boolean;
  flexDirection?: keyof typeof FlexDirections;
  justify?: keyof typeof Justifies;
  alignItems?: keyof typeof AlignItems;
};

export function Container({
  children,
  width = 'full',
  height = '20',
  isFlex = false,
  flexDirection = 'row',
  justify = 'between',
  alignItems = 'center',
}: ContainerProps) {
  const classNames = clsx(
    'container',
    Widths[width],
    Heights[height],
    isFlex && 'flex',
    isFlex && FlexDirections[flexDirection],
    isFlex && Justifies[justify],
    isFlex && AlignItems[alignItems],
  );

  return <div className={classNames}>{children}</div>;
}

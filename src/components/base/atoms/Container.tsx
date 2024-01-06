import clsx from 'clsx';

import {
  AlignItems,
  FlexDirections,
  Justifies,
  Widths,
} from '@/components/Utility/TailwindUtility';

export type ContainerProps = {
  children?: React.ReactNode;
  width?: keyof typeof Widths;
  isFlex?: boolean;
  flexDirection?: keyof typeof FlexDirections;
  justify?: keyof typeof Justifies;
  alignItems?: keyof typeof AlignItems;
};

export function Container({
  children,
  width = '96',
  isFlex = false,
  flexDirection = 'row',
  justify = 'between',
  alignItems = 'center',
}: ContainerProps) {
  const classNames = clsx(
    'container',
    Widths[width],
    isFlex && 'flex',
    isFlex && FlexDirections[flexDirection],
    isFlex && Justifies[justify],
    isFlex && AlignItems[alignItems],
  );

  return <div className={classNames}>{children}</div>;
}

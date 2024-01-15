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
  isGrid?: boolean;
  flexDirection?: keyof typeof FlexDirections;
  justify?: keyof typeof Justifies;
  alignItems?: keyof typeof AlignItems;

  className?: string;
};

export function Container({
  children,
  width = 'full',
  height = 'auto',
  isFlex = false,
  isGrid = false,
  flexDirection = 'row',
  justify = 'between',
  alignItems = 'center',
  ...props
}: ContainerProps) {
  const classNames = clsx(
    'container',
    Widths[width],
    Heights[height],
    isFlex && 'flex',
    isFlex && FlexDirections[flexDirection],
    isFlex && Justifies[justify],
    isFlex && AlignItems[alignItems],
    isGrid && 'grid',
    props.className,
  );

  return <div className={classNames}>{children}</div>;
}

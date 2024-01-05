import clsx from 'clsx';

import { AlignItems, FlexDirections } from '@/components/Utility/TailwindUtility';

export type ContainerProps = {
  children: React.ReactNode;
  isFlex?: boolean;
  flexDirection?: keyof typeof FlexDirections;
  alignItems?: keyof typeof AlignItems;
};

export function Container({
  children,
  isFlex = false,
  flexDirection = 'row',
  alignItems = 'center',
}: ContainerProps) {
  const classNames = clsx(
    'container mx-auto',
    isFlex && 'flex',
    isFlex && FlexDirections[flexDirection],
    isFlex && AlignItems[alignItems],
  );

  return <div className={classNames}>{children}</div>;
}

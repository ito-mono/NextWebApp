import clsx from 'clsx';

import { FlexBases, AlignItems } from '@/components/Utility/TailwindUtility';

export type FlexItemProps = {
  children: React.ReactNode;
  flexBasis?: keyof typeof FlexBases;
};

export function FlexItem({ children, flexBasis = '20' }: FlexItemProps) {
  const classNames = clsx(FlexBases[flexBasis]);

  return <div className={classNames}>{children}</div>;
}

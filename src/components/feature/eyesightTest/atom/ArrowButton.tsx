import clsx from 'clsx';

import { Button } from '@/components/base';
import { Directions } from '@/components/feature/eyesightTest';

export type ArrowButtonProps = {
  direction: keyof typeof Directions;
  onClick: (direction: string) => void;
};

export function ArrowButton({ direction, onClick, ...props }: ArrowButtonProps) {
  const classNames = clsx('flex justify-center items-center text-2xl');
  return (
    <Button className={classNames} onClick={() => onClick(direction)}>
      {Directions[direction].icon}
    </Button>
  );
}

import {
  GoArrowUp,
  GoArrowUpRight,
  GoArrowRight,
  GoArrowDownRight,
  GoArrowDown,
  GoArrowDownLeft,
  GoArrowLeft,
  GoArrowUpLeft,
} from 'react-icons/go';

export type Direction = Record<string, { rotateClassName: string; icon: React.ReactNode }>;

/**
 * import { Directions } from '@/components/feature/eyesightTest';
 * direction: keyof typeof Directions;
 * */
// prettier-ignore
export const Directions: Direction = {
  up:        { rotateClassName: 'rotate-0',   icon: <GoArrowUp></GoArrowUp> } ,
  upRight:   { rotateClassName: 'rotate-45',  icon: <GoArrowUpRight></GoArrowUpRight> },
  right:     { rotateClassName: 'rotate-90',  icon: <GoArrowRight></GoArrowRight> },
  downRight: { rotateClassName: 'rotate-135', icon: <GoArrowDownRight></GoArrowDownRight> },
  down:      { rotateClassName: 'rotate-180', icon: <GoArrowDown></GoArrowDown> },
  downLeft:  { rotateClassName: 'rotate-225', icon: <GoArrowDownLeft></GoArrowDownLeft> },
  left:      { rotateClassName: 'rotate-270', icon: <GoArrowLeft></GoArrowLeft> },
  upLeft:    { rotateClassName: 'rotate-315', icon: <GoArrowUpLeft></GoArrowUpLeft> },
} as const;

// prettier-ignore
export const Eyesights = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
  1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
  2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0,
] as const;

export const Distances = [1, 2, 3, 4, 5] as const;

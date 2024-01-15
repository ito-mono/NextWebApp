import clsx from 'clsx';

import { ArrowButton, ArrowButtonProps } from '..';

import { Button, Container } from '@/components/base';

const sizes = {
  sm: { container: '40', gap: 'gap-1' },
  md: { container: '64', gap: 'gap-2' },
  lg: { container: '96', gap: 'gap-3' },
} as const;

export type ArrowButtonsContainerProps = {
  showDiagonal: boolean;
  size?: keyof typeof sizes;
  onClickArrowButton: (direction: string) => void;
};

export function ArrowButtonsContainer({
  showDiagonal,
  size = 'lg',
  onClickArrowButton,
  ...props
}: ArrowButtonsContainerProps) {
  const ButtonProps: ArrowButtonProps = {
    onClick: onClickArrowButton,
    direction: '',
  };

  return (
    // prettier-ignore
    <Container
      isGrid
      width={sizes[size].container}
      height={sizes[size].container}
      className={clsx('grid-rows-3 grid-cols-3', sizes[size].gap)}
    >
      {showDiagonal ? <ArrowButton {...ButtonProps} direction='upLeft'></ArrowButton> : <div></div>}
      <ArrowButton {...ButtonProps} direction='up' ></ArrowButton>
      {showDiagonal ? <ArrowButton {...ButtonProps} direction='upRight'></ArrowButton> : <div></div>}
      <ArrowButton {...ButtonProps} direction='left'></ArrowButton>
      <div></div>
      <ArrowButton {...ButtonProps} direction='right'></ArrowButton>
      {showDiagonal ? <ArrowButton {...ButtonProps} direction='downLeft'></ArrowButton> : <div></div>}
      <ArrowButton {...ButtonProps} direction='down'></ArrowButton>
      {showDiagonal ? <ArrowButton {...ButtonProps} direction='downRight'></ArrowButton> : <div></div>}
    </Container>
  );
}

import Image from 'next/image';
import clsx from 'clsx';

export type LandoltRingImageProps = {
  direction: keyof typeof rotations;
  size: keyof typeof sizes;
};

const rotations = {
  up: 'rotate-0',
  upRight: 'rotate-45',
  right: 'rotate-90',
  downRight: 'rotate-135',
  down: 'rotate-180',
  downLeft: 'rotate-225',
  left: 'rotate-270',
  upLeft: 'rotate-315',
};

const sizes = {
  sm: 50,
  md: 100,
  lg: 150,
};

const LandoltRingImage = ({ direction, size, ...props }: LandoltRingImageProps) => {
  const alt = 'Landolt Ring';
  const src = 'LandoltRing.png';

  const classNames = clsx(rotations[direction]);

  return (
    <Image
      alt={alt}
      src={src}
      width={sizes[size]}
      height={sizes[size]}
      className={classNames}
      {...props}
    ></Image>
  );
};

export default LandoltRingImage;

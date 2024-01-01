import clsx from 'clsx';

export type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isRounded?: boolean;
  children?: React.ReactNode;
};

const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

const rounds = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isRounded = true,
  ...props
}: ButtonProps) {
  const classNames = clsx(variants[variant], sizes[size], isRounded ? rounds[size] : null);

  return (
    <div>
      <button className={classNames}>{children}</button>
    </div>
  );
}

import clsx from 'clsx';

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
} as const;

const aligns = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

const types = [
  'text',
  'password',
  'email',
  'number',
  'tel',
  'date',
  'datetime-local',
  'month',
  'week',
  'time',
  'url',
  'search',
  'color',
] as const;

export type InputProps = {
  label?: string;
  type?: (typeof types)[number];
  value: string;
  width?: number;
  size?: keyof typeof sizes;
  align?: keyof typeof aligns;
};

export function Input({
  label,
  type = 'text',
  width = 6,
  size = 'sm',
  align = 'left',
  ...props
}: InputProps) {
  const labelClassNames = clsx('', sizes[size]);
  const inputClassNames = clsx(
    'border border-gray-300 rounded-md',
    `w-[${width}rem]`,
    sizes[size],
    aligns[align],
  );

  return (
    <div>
      {label && <label className={labelClassNames}>{label}</label>}
      <input className={inputClassNames} {...props}></input>
    </div>
  );
}

export type LabelProps = {
  children: React.ReactNode;
};

export function Label({ children, ...props }: LabelProps) {
  return <label>{children}</label>;
}

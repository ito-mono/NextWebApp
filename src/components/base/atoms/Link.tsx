import NextLink from 'next/link';

export type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export function Link({ children, ...props }: LinkProps) {
  return <NextLink {...props}>{children}</NextLink>;
}

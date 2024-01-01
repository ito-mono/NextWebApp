import NextLink from 'next/link';

export type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function Link({ children, ...props }: LinkProps) {
  return <NextLink {...props}>{children}</NextLink>;
}

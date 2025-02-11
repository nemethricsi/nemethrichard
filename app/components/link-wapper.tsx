'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { getLocaleFromPathname } from '@/lib/utils';

export default function LinkWrapper({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  props?: LinkProps;
}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <Link href={`/${currentLocale}${href}`} className={className} {...props}>
      {children}
    </Link>
  );
}

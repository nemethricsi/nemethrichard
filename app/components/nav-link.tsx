'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'rounded-lg px-4 py-2 text-lg font-medium',
        isActive && 'underline underline-offset-4',
      )}
    >
      {children}
    </Link>
  );
};

'use client';

import { usePathname } from 'next/navigation';
import Link from '@/app/components/link-wapper';

import { cn } from '@/lib/utils';

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={cn(
        'custom-outline rounded-md sm:px-4 sm:py-2',
        isActive && 'text-foreground underline underline-offset-4',
      )}
    >
      {children}
    </Link>
  );
};

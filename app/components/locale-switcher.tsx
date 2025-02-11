'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '@/i18n-config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { getLocaleFromPathname } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) as Locale;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex-shrink-0">
          {currentLocale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <MenuItem
            key={locale}
            locale={locale}
            currentLocale={currentLocale}
            href={redirectedPathname(locale)}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const MenuItem = ({
  locale,
  currentLocale,
  href,
}: {
  locale: Locale;
  currentLocale: Locale;
  href: string;
}) => {
  const displayLocales = {
    hu: 'Magyar',
    en: 'English',
  };
  return (
    <DropdownMenuItem asChild>
      <Link href={href}>
        <span>{displayLocales[locale]}</span>
        {currentLocale === locale && <CheckIcon className="ml-auto h-4 w-4" />}
      </Link>
    </DropdownMenuItem>
  );
};

'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils';
import { i18n } from '@/i18n-config';
import Link from 'next/link';

export const LanguageSwitch = () => {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const remainingPathname = pathname.slice(currentLocale.length + 1);

  const availableLocales = i18n.locales;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex-shrink-0">
          {currentLocale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLocales.map((locale) => (
          <DropdownMenuItem asChild key={locale}>
            <Link href={`/${locale}${remainingPathname}`}>{locale}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

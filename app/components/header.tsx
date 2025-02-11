import Link from '@/app/components/link-wapper';
import { HomeIcon } from 'lucide-react';

import { NavLink } from '@/app/components/nav-link';
import { ModeToggle } from '@/app/components/mode-toggle';
import { Button } from '@/components/ui/button';

// import { LanguageSwitch } from '@/app/components/language-switch';
import LocaleSwitcher from '@/app/components/locale-switcher';
import { type getDictionary } from '@/get-dictionary';

export const Header = ({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>['menuItems'];
}) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <Button variant="outline" size="icon" className="flex-shrink-0" asChild>
          <Link href="/">
            <HomeIcon />
          </Link>
        </Button>

        <ul className="flex items-center gap-6 font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <NavLink href={`/projects`}>{dict.projects}</NavLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <NavLink href={`/contact`}>{dict.contact}</NavLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <NavLink href={`/resume`}>{dict.resume}</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          {/* <LanguageSwitch /> */}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

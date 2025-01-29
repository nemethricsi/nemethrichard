import Link from 'next/link';

import { NavLink } from '@/app/components/nav-link';
import { ModeToggle } from '@/app/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export const Header = () => {
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
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <NavLink href="/contact">Contact</NavLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <NavLink href="/resume">Resume</NavLink>
          </li>
        </ul>

        <ModeToggle />
      </nav>
    </header>
  );
};

import Link from 'next/link';

import { NavLink } from '@/app/components/nav-link';
import { ModeToggle } from '@/app/components/mode-toggle';

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <Link
          href="/"
          className="custom-outline hidden rounded-md py-1 font-serif text-2xl font-bold sm:block"
        >
          RN
        </Link>

        <ul className="flex items-center gap-6 font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>

        <ModeToggle />
      </nav>
    </header>
  );
};

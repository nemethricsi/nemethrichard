import Link from 'next/link';

import { NavLink } from '@/app/components/nav-link';
import { ModeToggle } from '@/app/components/mode-toggle';

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 px-4 py-6 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1>RN</h1>
        </Link>
        <nav>
          <ul className="flex gap-10">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

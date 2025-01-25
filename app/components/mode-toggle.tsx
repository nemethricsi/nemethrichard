'use client';

import {
  MoonStarIcon,
  MonitorIcon,
  SunIcon,
  CheckIcon,
  type LucideIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  type themes = 'light' | 'dark' | 'system';

  const menuItems: { name: themes; icon: LucideIcon }[] = [
    {
      name: 'light',
      icon: SunIcon,
    },
    {
      name: 'dark',
      icon: MoonStarIcon,
    },
    {
      name: 'system',
      icon: MonitorIcon,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="size-5 scale-100 transition-all dark:scale-0" />
          <MoonStarIcon className="absolute size-5 scale-0 transition-all dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {menuItems.map(({ name, icon }) => (
          <MenuItem key={name} theme={name} icon={icon} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const MenuItem = ({ theme, icon }: { theme: string; icon: LucideIcon }) => {
  const { setTheme, theme: currentTheme } = useTheme();
  const Icon = icon;

  return (
    <DropdownMenuItem onClick={() => setTheme(theme)}>
      <Icon />
      <span className="capitalize">{theme}</span>
      {currentTheme === theme && <CheckIcon className="ml-auto h-4 w-4" />}
    </DropdownMenuItem>
  );
};

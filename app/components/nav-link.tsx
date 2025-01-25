"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

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
        "text-lg font-medium py-2 px-4 rounded-lg",
        isActive && "bg-accent text-accent-foreground"
      )}
    >
      {children}
    </Link>
  );
};

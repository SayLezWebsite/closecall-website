"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Homepage~", "/"],
  ["About~", "/about"],
  ["Music~", "/music"],
  ["Events~", "/events"],
  ["Merch~", "/merch"],
  ["Connect+", "/contact"],
] as const;

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar flex gap-4 overflow-x-auto text-[11px] uppercase tracking-[0.22em] text-white md:text-xs">
      {links.map(([label, href]) => (
        <Link key={href} href={href} className={`nav-link whitespace-nowrap ${pathname === href ? "active" : ""}`}>
          {label}
        </Link>
      ))}
    </div>
  );
}

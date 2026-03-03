"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Homepage", "/"],
  ["About", "/about"],
  ["Music", "/music"],
  ["Events", "/events"],
  ["Merch", "/merch"],
  ["Contact", "/contact"],
] as const;

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar flex gap-5 overflow-x-auto text-[11px] uppercase tracking-[0.22em] text-white/85 md:text-xs">
      {links.map(([label, href]) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`nav-link whitespace-nowrap ${active ? "active text-white" : "text-white/65 hover:text-white"}`}
          >
            / {label}
          </Link>
        );
      })}
    </div>
  );
}

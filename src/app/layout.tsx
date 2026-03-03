import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const closecallMain = localFont({
  src: "../../public/brand/fonts/closecall-main.otf",
  variable: "--font-closecall-main",
});

const closecallSub = localFont({
  src: "../../public/brand/fonts/closecall-sub.otf",
  variable: "--font-closecall-sub",
});

export const metadata: Metadata = {
  title: "Closecall",
  description: "Closecall official website",
};

const links = [
  ["Homepage", "/"],
  ["About", "/about"],
  ["Music", "/music"],
  ["Events", "/events"],
  ["Merch", "/merch"],
  ["Contact", "/contact"],
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${closecallMain.variable} ${closecallSub.variable} antialiased`}>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/70 backdrop-blur-xl">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
            <Link href="/" className="brand-title text-2xl text-white md:text-3xl">
              CLOSECALL
            </Link>
            <div className="no-scrollbar flex gap-5 overflow-x-auto text-[11px] uppercase tracking-[0.22em] text-white/85 md:text-xs">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="whitespace-nowrap hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="pt-20 md:pt-24">{children}</main>
      </body>
    </html>
  );
}

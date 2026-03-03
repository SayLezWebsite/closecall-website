import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import TransitionShell from "@/components/TransitionShell";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${closecallMain.variable} ${closecallSub.variable} antialiased`}>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/55 backdrop-blur-xl">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
            <Link href="/" className="brand-title text-2xl text-white md:text-3xl">
              CLOSECALL
            </Link>
            <SiteNav />
          </nav>
        </header>
        <main className="pt-20 md:pt-24">
          <TransitionShell>{children}</TransitionShell>
        </main>
      </body>
    </html>
  );
}

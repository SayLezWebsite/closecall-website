import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${closecallMain.variable} ${closecallSub.variable} antialiased`}>
        <main>
          <TransitionShell>{children}</TransitionShell>
        </main>
      </body>
    </html>
  );
}

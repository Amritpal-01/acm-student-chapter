import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavigationStatusBar from "@/components/NavigationStatusBar";
import NavbarLeft from "@/components/NavbarLeft";
import { NotifyProvider } from "@/context/NotifyContext";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACM Student Chapter",
  description:
    "We're the official student chapter of ACM — the world's largest and most prestigious computing society, founded in 1947. That heritage means real resources: a digital library, international contests, speakers, and a network that opens doors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-dvh w-screen flex flex-col primary-background text-(--text-primary) overflow-hidden">
        {/* <Cursor/> */}
        <Suspense>
          <Navbar />
        </Suspense>
        <NavigationStatusBar />
        <div className="relative flex-1 flex flex-row overflow-hidden">
          <Suspense>
            <NavbarLeft />
          </Suspense>
          <NotifyProvider>
            <div
              id="view"
              className="relative flex-1 flex flex-col overflow-y-scroll py-10 px-2 sm:px-10 xl:px-26 overflow-x-hidden"
            >
              {children}
            </div>
          </NotifyProvider>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AppBar from "./AppBar";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "500errorgroup",
  description: "Digital partner for small and growing businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <header className="fixed top-0 left-0 right-0 z-50 border-b bg-card">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-semibold">
                500errorgroup
              </Link>
              <AppBar />
            </div>
          </header>
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-10 pt-24">
            {children}
            <Contact />
          </main>
        </div>
      </body>
    </html>
  );
}

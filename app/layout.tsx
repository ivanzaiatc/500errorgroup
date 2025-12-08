import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AppBar from "./AppBar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "500errorgroup",
  description: "Digital partner for small and growing businesses",
  icons: {
    icon: "/me.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-black text-foreground">
          <AppBar />
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

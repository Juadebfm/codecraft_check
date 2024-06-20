import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Settings - Proxima",
  description: "Adjust your settings",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black h-screen`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KJV Words | Words of Truth by Topic",
  description:
    "Study to shew thyself approved unto God — KJV Bible verses by topic with Korean summaries for discussing and spreading words of truth. Rightly dividing the word.",
  keywords: ["KJV", "Bible", "verses", "topics", "Korean", "2 Timothy 2:15"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}

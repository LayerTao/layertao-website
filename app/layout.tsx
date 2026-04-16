import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Updated imports
import "./globals.css";

// Configure Inter as our primary sans-serif font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Configure Space Grotesk for buttons, tags, and headings
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LayerTao",
  description: "The abstraction layer on Bittensor. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased smooth-scroll`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-t-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

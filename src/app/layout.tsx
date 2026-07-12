import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reema Sharma — Product Manager, AI & Growth Products",
  description:
    "Product Manager with 4 years at HashedIn by Deloitte. I combine product strategy with a software engineering foundation to build AI-native products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}

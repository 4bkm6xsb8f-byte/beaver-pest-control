import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beaver Pest Control | Local Pest Elimination Experts",
  description:
    "Beaver Pest Control delivers fast, guaranteed pest elimination for homes and businesses. Licensed, insured, and locally owned. Request a free inspection today.",
  keywords:
    "pest control, exterminator, ants, termites, rodents, bed bugs, mosquitoes, wasps, local pest control",
  openGraph: {
    title: "Beaver Pest Control | Local Pest Elimination Experts",
    description:
      "Fast, guaranteed pest elimination for homes and businesses. Licensed, insured, and locally owned.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

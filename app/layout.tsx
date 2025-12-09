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
  title: "3D Fashion Design Software | Virtual Clothing Design Platform | virtuality.fashion",
  description: "Professional 3D clothing design software and virtual fashion design platform. Cloud-based CAD tools for digital garment design, realistic 3D simulation, and virtual prototyping. Reduce production costs by 60% with easy-to-use 3D modeling software for fashion brands.",
  keywords: "3d fashion design software, virtual clothing design, 3d clothing design software, digital garment design, fashion 3d software, virtual fashion software, clothing cad software, 3d apparel design, fashion design software online, realistic 3d clothing simulation",
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
        {children}
      </body>
    </html>
  );
}

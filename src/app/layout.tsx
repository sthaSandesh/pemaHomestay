import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { title: {
    default: "PemaHomestay",
    template: "%s | PemaHomestay",
  },
  description: "PemaHomestay offers comfortable and affordable accommodation for travelers and tourists.",
  keywords: [
    "PemaHomestay",
    "Homestay",
    "Accommodation",
    "Travel",
    "Tourism",
    "Booking",
    "Hospitality"
  ],
  authors: [{ name: "PemaHomestay Team", url: "https://pemahomestay.com" }],
  creator: "Sandesh Shrestha",
  metadataBase: new URL("https://pemahomestay.com"),
  openGraph: {
    title: "PemaHomestay",
    description: "Experience comfort and hospitality at PemaHomestay.",
    url: "https://pemahomestay.com",
    siteName: "PemaHomestay",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "PemaHomestay Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PemaHomestay",
    description: "Experience comfort and hospitality at PemaHomestay.",
    images: ["/pemahomestay-og.png"],
    creator: "@pemahomestay",
  },
  icons: {
    icon: "/logo.svg",
  }
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

        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://onelist.pro"),
  title: {
    default: "onelist.pro - The Ultimate AI & Streaming Directory",
    template: "%s | onelist.pro",
  },
  description: "A curated directory for the best AI tools, movies, anime, sports, and TV shows streaming sites. Find everything in one list.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: ["AI Tools", "Streaming Directory", "Free Movies", "Anime List", "Live Sports"],
  authors: [{ name: "OneList Team" }],
  creator: "OneList Team",
  publisher: "OneList Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "onelist.pro - The Ultimate AI & Streaming Directory",
    description: "The ultimate curated list of AI tools and streaming services.",
    url: "https://onelist.pro",
    siteName: "OneList Pro",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "onelist.pro - The Ultimate AI & Streaming Directory",
    description: "The ultimate curated list of AI tools and streaming services.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "L_AatLgJBLkje5hEkIeWvDAfo6ZJnMyTdzp6Pj0c9r4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

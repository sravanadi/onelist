import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OneList",
  "url": "https://onelist.pro",
  "description": "The ultimate curated directory of free streaming sites, anime, torrents, AI tools, VPNs and more.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://onelist.pro/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OneList",
  "url": "https://onelist.pro",
  "logo": "https://onelist.pro/icon.png",
  "sameAs": []
};

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
    canonical: "https://onelist.pro",
  },
  openGraph: {
    title: {
      default: "OneList — Free Streaming Sites, Anime, Torrents & AI Tools Directory 2026",
      template: "%s | OneList",
    },
    description: "The ultimate curated directory of free streaming sites, anime, torrents, AI tools, VPNs and more.",
    url: "https://onelist.pro",
    siteName: "OneList",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "OneList - The Ultimate Streaming & AI Tools Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "OneList — Free Streaming Sites, Anime, Torrents & AI Tools Directory 2026",
      template: "%s | OneList",
    },
    description: "The ultimate curated directory of free streaming sites, anime, torrents, AI tools, VPNs and more.",
    images: ["/og-default.png"],
    site: "@onelistpro",
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
      <head>
        <script src="https://3nbf4.com/88/p.js" async defer></script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";


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
    default: "OneList — Free Streaming Sites, Anime, Torrents & AI Tools Directory 2026",
    template: "%s | OneList.pro",
  },
  description: "OneList.pro — the world's most complete free streaming directory. Find free movies, anime, live sports, AI tools, ebooks, music, manga, KDrama, torrents and more. 20+ categories. No signup. Updated daily. Free worldwide.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: ["Free Streaming Sites 2026", "Best Free Movie Sites", "Watch Anime Free", "AI Tools Directory", "Live Sports Streaming", "Torrent Sites List"],
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
    description: "OneList.pro — the world's most complete free streaming directory. Find free movies, anime, live sports, AI tools, ebooks, music, manga, KDrama, torrents and more. 20+ categories. No signup. Updated daily. Free worldwide.",
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
    description: "OneList.pro — the world's most complete free streaming directory. Find free movies, anime, live sports, AI tools, ebooks, music, manga, KDrama, torrents and more. 20+ categories. No signup. Updated daily. Free worldwide.",
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

import { LanguageProvider } from "@/components/LanguageProvider";
import SEOHead from "@/components/SEOHead";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="google-adsense-account" content="ca-pub-8571668306319206" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8571668306319206"
          crossOrigin="anonymous" suppressHydrationWarning />
        <script src="https://3nbf4.com/88/p.js" async defer></script>
        <script suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='10775611',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
        }} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SEOHead />
            <JsonLd data={websiteSchema} />
            <JsonLd data={organizationSchema} />
            <Navbar />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

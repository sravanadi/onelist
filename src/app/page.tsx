import { Metadata } from "next";
import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: SEO_META.home.title,
  description: SEO_META.home.description,
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: SEO_META.home.title,
    description: SEO_META.home.description,
    url: getCanonicalUrl("/"),
  },
  twitter: {
    title: SEO_META.home.title,
    description: SEO_META.home.description,
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": SEO_META.home.title,
  "description": SEO_META.home.description,
  "url": "https://onelist.pro",
  "keywords": "free streaming sites 2026, best free movie sites, watch anime free, AI tools directory, free ebooks, manga sites, KDrama streaming, free live sports, torrent sites list, free music streaming, download free PDF, best adblocker 2026, free VPN for streaming",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "audience": {
    "@type": "Audience",
    "audienceType": "Global internet users seeking free entertainment and productivity tools"
  }
};

export default function Home() {
  return <HomeClient homePageSchema={homePageSchema} />;
}

import SearchSection from "@/components/SearchSection";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { seoData } from "@/data/seo_content";
import { CATEGORY_SEO_DATA } from "@/data/category-seo";
import FaqSection from "@/components/FaqSection";
import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

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

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={homePageSchema} />

      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-24 border-b border-border flex items-center justify-center bg-linear-to-b from-background to-[#141414]">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {/* Abstract glowing background effect */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px]"></div>
          <div className="absolute top-20 right-0 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-[128px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Find the Best <span className="text-primary">Free Streaming Sites</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            The ultimate directory for free and premium movies, TV shows, anime, sports, and more. Stop searching and start watching.
          </p>

          <SearchSection />
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-16 px-4 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <LegalDisclaimer />
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Browse Categories</h2>
            <p className="text-muted-foreground mt-2">Explore 16+ categories of entertainment platforms.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.filter(c => !(c as any).isHidden).map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>


      {/* Home SEO Deep Section (New) */}
      <section className="py-20 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/30 border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
              {seoData.home_extended.title}
            </h2>
            
            <div className="space-y-8">
              {seoData.home_extended.sections.map((section, idx) => (
                <div key={idx} className="relative">
                  {idx > 0 && idx < 4 && (
                    <h3 className="text-xl font-bold text-white mb-4">{section.heading}</h3>
                  )}
                  <p 
                    className="text-muted-foreground leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Home FAQ Section (New) */}
      {CATEGORY_SEO_DATA.home?.intro.faqs && (
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <FaqSection 
              items={CATEGORY_SEO_DATA.home.intro.faqs} 
              title="Frequently Asked Questions"
            />
          </div>
        </section>
      )}

    </div>
  );
}

import SearchSection from "@/components/SearchSection";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { seoData } from "@/data/seo_content";
import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";

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

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">

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


      {/* Home SEO Content */}
      <section className="py-20 px-4 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto">
          {(() => {
            const content = seoData['default'];
            return (
              <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12">
                <h2 className="text-4xl font-black text-white mb-10 text-center">{content.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {content.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                        {section.heading}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-16 pt-8 border-t border-border text-center">
                  <p className="text-gray-500 text-sm max-w-3xl mx-auto">
                    Search keywords: free movie streaming sites 2026, best anime websites, live sports mirrors, secure vpn for streaming, adblocker for movies, 123movies alternatives, soap2night mirror, watch series online free.
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

    </div>
  );
}

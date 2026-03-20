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


      {/* Home SEO Deep Section (New) */}
      <section className="py-20 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card/30 border border-border/50 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-12 leading-tight">
              {seoData.home_extended.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {seoData.home_extended.sections.map((section, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors rounded-full" />
                  <h3 className="text-xl font-bold text-white mb-4 pl-2">{section.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Keyword Cloud */}
            <div className="pt-12 border-t border-border/50">
              <p className="text-xs font-bold text-primary/40 uppercase tracking-[0.3em] mb-4">Targeted Discovery for 2026</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 font-medium italic">
                <span>free streaming directory</span>
                <span className="w-1 h-1 bg-border rounded-full self-center" />
                <span>best streaming sites 2026</span>
                <span className="w-1 h-1 bg-border rounded-full self-center" />
                <span>streaming directory worldwide</span>
                <span className="w-1 h-1 bg-border rounded-full self-center" />
                <span>FMHY alternative</span>
                <span className="w-1 h-1 bg-border rounded-full self-center" />
                <span>yarrlist alternative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home FAQ Section (New) */}
      {CATEGORY_SEO_DATA.home?.intro.faqs && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4">
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

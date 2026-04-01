import { Metadata } from "next";
import Link from "next/link";
import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl, getBreadcrumbSchema } from "@/lib/seo-utils";
import JsonLd from "@/components/JsonLd";
import { varietiesData } from "@/data/varieties";
import { CATEGORY_SEO_DATA } from "@/data/category-seo";
import CategoryIntro from "@/components/CategoryIntro";
import SafetyNote from "@/components/SafetyNote";

export const metadata: Metadata = {
  title: SEO_META.varieties.title,
  description: SEO_META.varieties.description,
  alternates: {
    canonical: getCanonicalUrl("/varieties"),
  },
  openGraph: {
    title: SEO_META.varieties.title,
    description: SEO_META.varieties.description,
    url: getCanonicalUrl("/varieties"),
  },
  twitter: {
    title: SEO_META.varieties.title,
    description: SEO_META.varieties.description,
  },
};

export default function VarietiesPage() {
  const breadcrumbSchema = getBreadcrumbSchema("Varieties", "/varieties");

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 md:px-8">
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 font-bold uppercase tracking-widest text-xs"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic text-foreground">
            <span className="text-primary">✨ VARIETIES</span> SITES
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Curated Directory of the World's Most Useful, Fun, and Interesting Websites.
          </p>
        </div>
        
        {/* SEO Category Intro */}
        {CATEGORY_SEO_DATA.varieties && (
          <CategoryIntro 
            {...CATEGORY_SEO_DATA.varieties.intro} 
            bullets={CATEGORY_SEO_DATA.varieties.intro.bullets || []} 
          />
        )}

        {/* Search / Filter placeholder - can be added later if needed */}
        
        {/* Categories Sections */}
        <div className="space-y-16">
          {varietiesData.map((category) => (
            <section key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-foreground">
                  {category.title}
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.links.map((link, idx) => (
                  <a
                    key={`${category.title}-${idx}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative bg-card rounded-xl p-5 border ${link.isImportant ? 'border-primary/30 shadow-[0_0_20px_rgba(229,9,20,0.05)]' : 'border-border'} hover:border-primary/50 transition-all duration-300 flex flex-col h-full`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {link.icon && <span className="text-xl">{link.icon}</span>}
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                          {link.title}
                        </h3>
                      </div>
                      {link.isImportant && (
                        <span className="text-[10px] font-black uppercase bg-primary/20 text-primary px-2 py-0.5 rounded flex items-center shrink-0">
                          TOP Pick
                        </span>
                      )}
                    </div>
                    
                    {link.description && (
                      <p className="text-sm text-muted-foreground font-medium line-clamp-2 leading-relaxed mb-4">
                        {link.description}
                      </p>
                    )}
                    
                    <div className="mt-auto flex items-center text-[10px] font-black uppercase text-muted-foreground/50 tracking-widest group-hover:text-primary transition-colors">
                      Visit Site →
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* SEO Safety Note */}
        {CATEGORY_SEO_DATA.varieties && (
          <SafetyNote />
        )}

        {/* Footer Note */}
        <div className="mt-20 p-10 rounded-2xl bg-linear-to-b from-[#141414] to-background border border-white/5 text-center">
          <h3 className="text-xl font-bold mb-3 uppercase tracking-tight italic">Missing something?</h3>
          <p className="text-gray-400 font-medium max-w-xl mx-auto mb-6">
            We're constantly discovering more hidden gems on the web. Check back often for new additions to the Variety directory.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

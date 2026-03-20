import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { featuredSites } from '@/data/sites';

import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl, getBreadcrumbSchema } from "@/lib/seo-utils";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";
import CategoryIntro from '@/components/CategoryIntro';
import SafetyNote from '@/components/SafetyNote';
import { CATEGORY_SEO_DATA } from '@/data/category-seo';

export const metadata: Metadata = {
  title: SEO_META.aitools.title,
  description: SEO_META.aitools.description,
  alternates: {
    canonical: getCanonicalUrl("/aitools"),
  },
  openGraph: {
    title: SEO_META.aitools.title,
    description: SEO_META.aitools.description,
    url: getCanonicalUrl("/aitools"),
  },
  twitter: {
    title: SEO_META.aitools.title,
    description: SEO_META.aitools.description,
  },
};

export default function AIToolsHub() {
  // Filter for AI subcategories (excluding the main hub itself)
  const aiSubcategories = categories.filter(c => c.id.startsWith('ai-'));
  const breadcrumbSchema = getBreadcrumbSchema("AI Tools", "/aitools");

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-4 md:px-8">
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
            <span className="text-primary">🤖 AI TOOLS</span> CATEGORY
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            The World&apos;s Most Complete Directory of Artificial Intelligence Tools, Models, and Software.
          </p>
        </div>

        {/* SEO Category Intro */}
        {CATEGORY_SEO_DATA.aitools && (
          <CategoryIntro 
            {...CATEGORY_SEO_DATA.aitools.intro} 
            bullets={CATEGORY_SEO_DATA.aitools.intro.bullets || []} 
          />
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiSubcategories.map((category) => {
            const siteCount = featuredSites.filter(s => s.categoryId === category.id).length;
            
            return (
              <Link 
                key={category.id} 
                href={category.slug}
                className="group relative bg-[#141414] rounded-2xl p-8 border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col items-center text-center shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 transition-all duration-500" />
                
                {/* Icon Container with Glassmorphism */}
                <div className="relative w-24 h-24 mb-6 transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-full bg-[#1a1a1a] rounded-3xl p-4 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <h2 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-medium">
                  {category.description}
                </p>

                {/* Footer Info */}
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 py-1.5 px-3 rounded-full text-white/60 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    {siteCount} Tools Listed
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* SEO Safety Note */}
        {CATEGORY_SEO_DATA.aitools && (
          <SafetyNote />
        )}

        {/* Bottom Banner Section */}
        <div className="mt-20 p-12 rounded-3xl bg-linear-to-r from-[#141414] to-[#1a1a1a] border border-white/5 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="text-9xl font-black italic">AI</span>
            </div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">Stay Ahead of the Curve</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
            Our directory is updated daily with the latest breakthroughs in AI search, video generation, and productivity. 
            Whether you&apos;re a developer, creator, or business leader, these tools are your competitive edge.
          </p>
          <div className="flex justify-center gap-4 relative z-10">
             <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

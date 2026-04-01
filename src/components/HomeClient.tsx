'use client';

import React from 'react';
import SearchSection from "@/components/SearchSection";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { seoData } from "@/data/seo_content";
import { CATEGORY_SEO_DATA } from "@/data/category-seo";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { useLanguage } from '@/components/LanguageProvider';

interface HomeClientProps {
    homePageSchema: any;
}

export default function HomeClient({ homePageSchema }: HomeClientProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={homePageSchema} />

      {/* Hero Section */}
      <section className="relative px-4 pt-24 pb-32 border-b border-border flex items-center justify-center bg-linear-to-b from-background to-card/20 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          {/* Subtle slate blue highlights for a professional look */}
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/20 rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-8 tracking-tighter leading-none">
            OneList <span className="text-primary tracking-tight font-black">—</span> {t('hero.title')} 2026
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto font-medium">
            {t('hero.description')}
          </p>

          <SearchSection />
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-16 px-4 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <LegalDisclaimer />
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">{t('sections.browse_categories')}</h2>
            <p className="text-muted-foreground mt-2">{t('sections.explore_categories')}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(c => !(c as any).isHidden).map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>


      {/* Home SEO Deep Section */}
      <section className="py-20 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/30 border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-10 leading-tight">
              {seoData.home_extended.title}
            </h2>
            
            <div className="space-y-8">
              {seoData.home_extended.sections.map((section, idx) => (
                <div key={idx} className="relative">
                  {idx > 0 && idx < 4 && (
                    <h3 className="text-xl font-bold text-foreground mb-4">{section.heading}</h3>
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

      {/* Home FAQ Section */}
      {CATEGORY_SEO_DATA.home?.intro.faqs && (
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <FaqSection 
              items={CATEGORY_SEO_DATA.home.intro.faqs} 
              title={t('ui.faq')}
            />
          </div>
        </section>
      )}

    </div>
  );
}

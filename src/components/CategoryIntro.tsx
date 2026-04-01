'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

interface CategoryIntroProps {
  title: any;
  paragraphs: any[];
  bullets: any[];
}

export default function CategoryIntro({ title, paragraphs, bullets }: CategoryIntroProps) {
  const { t, tContent } = useLanguage();

  return (
    <section className="mb-12">
      <div className="bg-card/30 border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 tracking-tight uppercase italic decoration-primary underline-offset-8">
          {tContent(title)}
        </h2>
        
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <p 
              key={i} 
              className="text-lg text-muted-foreground leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: tContent(p) }}
            />
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-border/50">
          <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">
            {t('category.introHeader')}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground font-bold bg-accent/20 py-3 px-6 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all text-sm md:text-base">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                {tContent(b)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

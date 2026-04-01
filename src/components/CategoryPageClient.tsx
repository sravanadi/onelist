'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import CategoryIntro from '@/components/CategoryIntro';
import SafetyNote from '@/components/SafetyNote';
import FaqSection from '@/components/FaqSection';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import FilteredSiteList from '@/components/FilteredSiteList';
import JsonLd from '@/components/JsonLd';
import { CATEGORY_SEO_DATA } from '@/data/category-seo';

interface CategoryPageClientProps {
    category: any;
    sites: any[];
    categories: any[];
    itemListSchema: any;
    breadcrumbSchema: any;
}

export default function CategoryPageClient({ category, sites, categories, itemListSchema, breadcrumbSchema }: CategoryPageClientProps) {
    const { tContent, language, t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <JsonLd data={itemListSchema} />
            <JsonLd data={breadcrumbSchema} />
            {/* Category Hero */}
            <section className="bg-card border-b border-border py-16 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 flex items-center justify-center shrink-0">
                        <Image src={category.image} alt={tContent(category.name)} width={80} height={80} className="object-contain" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-foreground mb-2">
                            {tContent(category.name)} {language === 'hi' ? 'साइट्स' : 'Sites'}
                        </h1>
                        <p className="text-muted-foreground max-w-2xl">{tContent(category.description)}</p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 w-full py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="grow">
                        {category.id === 'adult' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <Link href="/gambling" className="flex flex-col items-center justify-center p-12 bg-card border border-border rounded-2xl cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group shadow-sm">
                                    <span className="text-7xl mb-4 group-hover:scale-110 transition-transform block">🎰</span>
                                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Casino / Gambling</h2>
                                </Link>
                                <Link href="/porn" className="flex flex-col items-center justify-center p-12 bg-card border border-border rounded-2xl cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group shadow-sm">
                                    <span className="text-7xl mb-4 group-hover:scale-110 transition-transform block">🍑</span>
                                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Porn</h2>
                                </Link>
                            </div>
                        )}
                        {(category.id !== 'adult' || sites.length > 0 || !!CATEGORY_SEO_DATA[category.id]) && (
                            <>
                                {(() => {
                                    const categorySeo = CATEGORY_SEO_DATA[category.id]?.intro;
                                    return (
                                        <>
                                            {categorySeo && (
                                                <CategoryIntro 
                                                  {...categorySeo}
                                                  bullets={categorySeo.bullets || []}
                                                />
                                            )}
                                            
                                            {category.id === 'vpn' && (
                                              <div className="my-10 overflow-x-auto">
                                                <table className="w-full text-left border-collapse bg-card border border-border rounded-xl">
                                                  <thead>
                                                    <tr className="bg-white/5">
                                                      <th className="border border-border/50 p-4 font-black text-primary">Feature</th>
                                                      <th className="border border-border/50 p-4 font-black text-foreground">NordVPN</th>
                                                      <th className="border border-border/50 p-4 font-black text-foreground">Surfshark</th>
                                                      <th className="border border-border/50 p-4 font-black text-foreground">ExpressVPN</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td className="border border-border/50 p-4 font-bold text-muted-foreground">Speed</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">★★★★★</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">★★★★☆</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">★★★★★</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-border/50 p-4 font-bold text-muted-foreground">Price/month</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">~$3.99</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">~$2.49</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">~$6.67</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-border/50 p-4 font-bold text-muted-foreground">Simultaneous</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">6 devices</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">Unlimited</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">8 devices</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-border/50 p-4 font-bold text-muted-foreground">No-logs policy</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">Yes</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">Yes</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">Yes</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-border/50 p-4 font-bold text-muted-foreground">Best for</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">Speed</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">Budget</td>
                                                      <td className="border border-border/50 p-4 font-medium text-foreground">Reliability</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            )}

                                            <LegalDisclaimer />
                                            <FilteredSiteList initialSites={sites} categorySlug={category.slug.replace('/', '')} />
                                            <SafetyNote content={(categorySeo as any)?.safetyNote} />
                                            {categorySeo && categorySeo.faqs && (
                                                <FaqSection items={categorySeo.faqs} />
                                            )}
                                        </>
                                    );
                                })()}
                            </>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-80 shrink-0 space-y-6">
                        <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-lg font-bold text-foreground mb-4">{t('ui.related_categories')}</h3>
                            <ul className="space-y-3">
                                {categories.filter(c => c.id !== category.id).slice(0, 6).map(c => (
                                    <li key={c.id}>
                                        <a href={c.slug} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                                            <Image src={c.image} alt={tContent(c.name)} width={20} height={20} className="mr-3" />
                                            {tContent(c.name)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

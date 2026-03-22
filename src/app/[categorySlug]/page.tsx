import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { getSitesByCategory } from '@/data/sites';
import SiteCard from '@/components/SiteCard';
import FilteredSiteList from '@/components/FilteredSiteList';
import Link from 'next/link';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { seoData } from '@/data/seo_content';
import { SEO_META, SEOMetaKey } from '@/lib/seo-meta';
import { getCanonicalUrl, getBreadcrumbSchema } from '@/lib/seo-utils';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';
import CategoryIntro from '@/components/CategoryIntro';
import SafetyNote from '@/components/SafetyNote';
import FaqSection from '@/components/FaqSection';
import { CATEGORY_SEO_DATA } from '@/data/category-seo';

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }): Promise<Metadata> {
    const { categorySlug } = await params;
    const meta = SEO_META[categorySlug as SEOMetaKey] || SEO_META.home;
    const canonical = getCanonicalUrl(categorySlug);

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: canonical,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: canonical,
        },
        twitter: {
            title: meta.title,
            description: meta.description,
        },
    };
}


export function generateStaticParams() {
    // Debug log to ensure categories is available during build/dev
    if (!categories) {
        console.error("CATEGORIES DATA IS MISSING IN generateStaticParams");
        return [];
    }
    return categories.map((category) => ({
        categorySlug: category.id,
    }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
    const { categorySlug } = await params;
    const category = categories.find(c => c.id === categorySlug);

    if (!category) {
        notFound();
    }

    const sites = getSitesByCategory(category.id);

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `Best Free ${category.name} Sites 2026`,
        "description": category.description,
        "url": `https://onelist.pro${category.slug}`,
        "numberOfItems": sites.length,
        "itemListOrder": "https://schema.org/ItemListOrderAscending"
    };

    const breadcrumbSchema = getBreadcrumbSchema(category.name, category.slug);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <JsonLd data={itemListSchema} />
            <JsonLd data={breadcrumbSchema} />
            {/* Category Hero */}
            <section className="bg-card border-b border-border py-16 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 flex items-center justify-center shrink-0">
                        <Image src={category.image} alt={category.name} width={80} height={80} className="object-contain" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-white mb-2">{category.name} Sites</h1>
                        <p className="text-muted-foreground max-w-2xl">{category.description}</p>
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
                                    <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Casino / Gambling</h2>
                                </Link>
                                <Link href="/porn" className="flex flex-col items-center justify-center p-12 bg-card border border-border rounded-2xl cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group shadow-sm">
                                    <span className="text-7xl mb-4 group-hover:scale-110 transition-transform block">🍑</span>
                                    <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Porn</h2>
                                </Link>
                            </div>
                        )}
                        {(category.id !== 'adult' || sites.length > 0) && (
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
                                                      <th className="border border-white/10 p-4 font-black text-primary">Feature</th>
                                                      <th className="border border-white/10 p-4 font-black text-white">NordVPN</th>
                                                      <th className="border border-white/10 p-4 font-black text-white">Surfshark</th>
                                                      <th className="border border-white/10 p-4 font-black text-white">ExpressVPN</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td className="border border-white/10 p-4 font-bold text-gray-300">Speed</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">★★★★★</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">★★★★☆</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">★★★★★</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-white/10 p-4 font-bold text-gray-300">Price/month</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">~$3.99</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">~$2.49</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">~$6.67</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-white/10 p-4 font-bold text-gray-300">Simultaneous</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">6 devices</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">Unlimited</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">8 devices</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-white/10 p-4 font-bold text-gray-300">No-logs policy</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">Yes</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">Yes</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">Yes</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="border border-white/10 p-4 font-bold text-gray-300">Best for</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">Speed</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">Budget</td>
                                                      <td className="border border-white/10 p-4 font-medium text-white">Reliability</td>
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
                            <h3 className="text-lg font-bold text-white mb-4">Related Categories</h3>
                            <ul className="space-y-3">
                                {categories.filter(c => c.id !== category.id).slice(0, 6).map(c => (
                                    <li key={c.id}>
                                        <a href={c.slug} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                                            <Image src={c.image} alt={c.name} width={20} height={20} className="mr-3" />
                                            {c.name}
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

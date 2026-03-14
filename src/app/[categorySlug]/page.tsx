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

    return (
        <div className="flex flex-col min-h-screen bg-background">
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
                                <LegalDisclaimer />
                                <FilteredSiteList initialSites={sites} categorySlug={category.slug.replace('/', '')} />
                            </>
                        )}

                        {/* SEO Content Block */}
                        {(() => {
                            const content = seoData[category.id] || seoData['default'];
                            return (
                                <div className="bg-card border border-border rounded-xl p-8 mt-12">
                                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-border pb-4">{content.title}</h2>
                                    <div className="space-y-12">
                                        {content.sections.map((section, idx) => (
                                            <div key={idx} className="group">
                                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                                                    {section.heading}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed text-base italic group-hover:text-gray-300 transition-colors">
                                                    {section.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-border text-center">
                                        <p className="text-sm text-muted-foreground">
                                            Keywords: streaming, {category.name.toLowerCase()}, movies online, free tv, safe streaming, vpn for {category.name.toLowerCase()}, no registration streaming sites 2026.
                                        </p>
                                    </div>
                                </div>
                            );
                        })()}
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

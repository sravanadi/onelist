import React from 'react';
import { notFound } from 'next/navigation';
import SearchSection from "@/components/SearchSection";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { SEO_META, SEOMetaKey } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { REGIONAL_SEO_DATA } from "@/data/regional-seo";
import { Metadata } from "next";
import Link from 'next/link';
import FaqSection from "@/components/FaqSection";

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
    const { region } = await params;
    const meta = SEO_META[region as SEOMetaKey];
    
    if (!meta) return {};

    const canonical = getCanonicalUrl(`streaming/${region}`);

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
    return [
        { region: 'united-states' },
        { region: 'united-kingdom' },
        { region: 'india' }
    ];
}

export default async function RegionalPage({ params }: { params: Promise<{ region: string }> }) {
    const { region } = await params;
    const data = REGIONAL_SEO_DATA[region];

    if (!data) {
        notFound();
    }

    // Filter categories to only exactly what we want for the regional grid
    const targetCategories = ['movies', 'live-sports', 'live-tv', 'vpn'];
    const regionalCategories = categories.filter(c => targetCategories.includes(c.id));

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 pt-20 pb-24 border-b border-border flex items-center justify-center bg-linear-to-b from-background to-[#141414]">
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px]"></div>
                    <div className="absolute top-20 right-0 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-[128px]"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto w-full flex flex-col items-center">
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-wider text-primary border border-primary/30 rounded-full bg-primary/10">
                        Global Access
                    </span>
                    <h1 
                        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
                        dangerouslySetInnerHTML={{ __html: data.h1 }}
                    />
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        {data.subtitle}
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
                        <p className="text-muted-foreground mt-2">Explore 16+ categories of entertainment platforms available in your region.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {regionalCategories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional SEO Content */}
            <section className="py-20 px-4 bg-background border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12">
                        <div className="prose prose-invert max-w-none text-gray-400 font-medium leading-relaxed mb-12">
                            {data.introParagraphs.map((par, i) => (
                                <p key={i} className="mb-4">{par}</p>
                            ))}
                        </div>
                        
                        {data.faqs && data.faqs.length > 0 && (
                            <div className="mt-12">
                                <FaqSection items={data.faqs} />
                            </div>
                        )}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                            Explore all 16+ categories in our global directory
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

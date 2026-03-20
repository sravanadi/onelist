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

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 pt-20 pb-24 border-b border-border flex items-center justify-center bg-linear-to-b from-background to-[#141414]">
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px]"></div>
                    <div className="absolute top-20 right-0 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-[128px]"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
                    <h1 
                        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
                        dangerouslySetInnerHTML={{ __html: data.h1 }}
                    />
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        {data.description}
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

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {categories.filter(c => !(c as any).isHidden).map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional SEO Content */}
            <section className="py-20 px-4 bg-background border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12">
                        <h2 className="text-4xl font-black text-white mb-10 text-center">{data.seoTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {data.sections.map((section, idx) => (
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
                                High-speed streaming in {region.replace('-', ' ')} — verified {region.replace('-', ' ')} mirrors, local access, safe browsing, and 2026 directory guides.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

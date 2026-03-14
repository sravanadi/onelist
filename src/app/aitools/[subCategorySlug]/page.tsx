import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { getSitesByCategory } from '@/data/sites';
import FilteredSiteList from '@/components/FilteredSiteList';
import Link from 'next/link';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { seoData } from '@/data/seo_content';

export function generateStaticParams() {
    // Only generate for AI subcategories
    return categories
        .filter(c => c.id.startsWith('ai-'))
        .map((category) => ({
            subCategorySlug: category.slug.split('/').pop(),
        }));
}

export default async function AISubCategoryPage({ params }: { params: Promise<{ subCategorySlug: string }> }) {
    const { subCategorySlug } = await params;
    
    // Find the category by matching the slug
    // subCategorySlug will be 'chat', 'image', etc.
    const fullSlug = `/aitools/${subCategorySlug}`;
    const category = categories.find(c => c.slug === fullSlug);

    if (!category) {
        notFound();
    }

    const sites = getSitesByCategory(category.id);
    const content = seoData[category.id] || seoData['aitools'];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Category Hero */}
            <section className="bg-card border-b border-border py-16 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 flex items-center justify-center shrink-0">
                        <Image src={category.image} alt={category.name} width={80} height={80} className="object-contain" />
                    </div>
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                             <Link href="/aitools" className="text-primary hover:underline text-sm font-bold uppercase tracking-widest">AI Tools Hub</Link>
                             <span className="text-muted-foreground text-xs">/</span>
                        </div>
                        <h1 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase italic">
                            {category.name}
                        </h1>
                        <p className="text-muted-foreground max-w-2xl font-medium">{category.description}</p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 w-full py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="grow">
                        <LegalDisclaimer />
                        <FilteredSiteList initialSites={sites} categorySlug={category.id} />

                        {/* SEO Content Block */}
                        <div className="bg-card border border-border rounded-2xl p-8 mt-12 shadow-2xl">
                            <h2 className="text-3xl font-black text-white mb-8 border-b border-border pb-4 tracking-tight">
                                {content.title}
                            </h2>
                            <div className="space-y-12">
                                {content.sections.map((section, idx) => (
                                    <div key={idx} className="group">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                            <span className="w-1.5 h-6 bg-primary rounded-full group-hover:scale-y-125 transition-transform"></span>
                                            {section.heading}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-base group-hover:text-gray-300 transition-colors font-medium">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-80 shrink-0 space-y-6">
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl sticky top-24">
                            <h3 className="text-sm font-black text-white mb-6 uppercase tracking-widest border-b border-white/5 pb-4">Other AI Specializations</h3>
                            <ul className="space-y-4">
                                {categories
                                    .filter(c => c.id.startsWith('ai-') && c.id !== category.id)
                                    .map(c => (
                                    <li key={c.id}>
                                        <Link href={c.slug} className="flex items-center text-muted-foreground hover:text-primary transition-all group">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                                                <Image src={c.image} alt={c.name} width={16} height={16} className="opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all" />
                                            </div>
                                            <span className="text-sm font-bold uppercase tracking-tight">{c.name.replace('AI ', '')}</span>
                                        </Link>
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
